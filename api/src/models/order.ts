import { Schema, model } from "mongoose";

const mongoose = require("mongoose");

const orderSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    customerId: { type: String },
    paymentIntentId: { type: String },
    products: [
      {
        id: { type: String },
        name: { type: String },
        brand: { type: String },
        desc: { type: String },
        price: { type: String },
        image: { type: String },
        cartQuantity: { type: String },
      },
    ],
    subtotal: { type: Number, require: true },
    total: { type: Number, require: true },
    shipping: { type: Object, require: true },
    deliver_status: { type: String, default: "pending" },
    payment_status: { type: String, require: true },
  },
  { timestamps: true }
);

export default model("Order", orderSchema);
