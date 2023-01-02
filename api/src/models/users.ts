<<<<<<< HEAD:api/src/routes/models/UsersModel.ts
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    // id: {
    //   type: String,
    //   required: true,
    // },
    name: {
      type: String,
      minlength: 3,
      maxlength: 30,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/,
      minlength: 8,
      trim: true,
    },
    adress: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = model("Users", userSchema);

exports.User = User;
=======
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    // id: {
    //   type: String,
    //   required: true,
    // },
    name: {
      type: String,
      minlength: 3,
      maxlength: 30,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/,
      minlength: 8,
      trim: true,
    },
    adress: {
      type: String,
      required: true,
    },
    // admin: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = model("Users", userSchema);

exports.User = User;
>>>>>>> 8af428f6ffe490782bf910013a540cfedf45fd80:api/src/models/users.ts
