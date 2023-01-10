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
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    color: {
      type: String,
    },
    meta: {
      votes: Number,
      favs: Number,
    },
    image: {
      type: String,
<<<<<<< HEAD
      public_id:{type: String},
=======
>>>>>>> 2f50176e047bf2db67fa25fd0ca4ecefd081d6b0
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

