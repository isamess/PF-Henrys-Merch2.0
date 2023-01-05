import Order from "../models/order";

const express = require("express");
const Stripe = require("stripe");

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req: any, res: any) => {
  const customer: any = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      cart: JSON.stringify(req.body.cartItems),
    },
  });
  const line_items = req.body.cartItems.map((item: any) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.nombre,
          images: [item.imagen],
          description: item.descripcion,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.precio * 100,
      },
      quantity: item.cartQuantity,
    };
  });

  const session: any = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "usd",
          },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 5,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "usd",
          },
          display_name: "Next day arrival",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    customer: customer.id,
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });
  res.send({ url: session.url });
});

//Create Order
const createOrder = async (customer: any, data: any) => {
  const items = JSON.parse(customer.metadata.cart);

  const newOrder = new Order({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products: items,
    subtotal: data.amount_subtotal,
    total: data.amount_total,
    shipping: data.customer_details,
    payment_status: data.payment_status,
  });

  try {
    const saveOrder: any = await newOrder.save();

    console.log("Orden procesada", saveOrder);
  } catch (err: any) {
    console.log(err);
  }
};

//Stripe webhook

const endpointSecret: string =
  "whsec_e213ca11a5b195000074381413b16fafecffc92422039b118c0aeeb6b3782c23";

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req: any, res: any) => {
    const sig = req.headers["stripe-signature"];

    let data: any;
    let eventType;

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      console.log("Webhook verified");
    } catch (err: any) {
      console.log(`Webhook Error: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    data = event.data.object;
    eventType = event.type;

    //Handle the event

    if (eventType === "checkout.session.completed") {
      stripe.customers
        .retrieve(data.customer)
        .then((customer: any) => {
          createOrder(customer, data);
        })
        .catch((err: any) => {
          console.log(err.message);
        });
    }

    // Return a 200 response to acknowledge recipt of event
    res.send().end();
  }
);

module.exports = router;
