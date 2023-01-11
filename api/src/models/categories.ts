import { Schema, model } from "mongoose";

const categoriesSchema = new Schema(
  {
    category: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

export default model("Category", categoriesSchema);
