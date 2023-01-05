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
      type: Array,
      required: true,
    },
    color: {
      type: String,
    },
    meta: {
      votes: Number,
      favs: Number,
    },
    imgUrl: {
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
    timestamps: true,
  }
);

export default model("Products", productSchema);
