import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    stock: {
      type: Number,
      default: 0,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Products", productSchema);
