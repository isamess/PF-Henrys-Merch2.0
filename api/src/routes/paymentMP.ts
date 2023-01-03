import express from "express";
const mercadopago = require("mercadopago");

require("dotenv").config();

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });

const router = express.Router();

router.post("/create-checkout-session", (req: any, res: any) => {
  const items: object = req.body.cartItems.map((item: any) => {
    return {
      id: item.id,
      title: item.nombre,
      unit_price: Number(item.precio),
      quantity: Number(item.cartQuantity),
      description: item.descripcion,
      currency_id: "USD",
    };
  });

  const preference: object = {
    items,
    back_urls: {
      success: `${process.env.CLIENT_URL}/checkout-success`,
      failure: `${process.env.CLIENT_URL}/cart`,
      // pending: "http://localhost:8080/feedback",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then((response: any) => {
      res.send(response.body.init_point);
    })
    .catch((error: any) => {
      console.log(error);
    });
});

module.exports = router;
