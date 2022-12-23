import mongoose, { ConnectOptions } from "mongoose";
import config from "./config";

(async () => {
  try {
    const mongooseOptions: ConnectOptions = {
      user: config.MONGO_USER, //usuario por defecto de esta DB
      pass: config.MONGO_PASSWORD,
    };
    const db = await mongoose.connect(
      `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@henrycomerce.3etyvbd.mongodb.net/test`,
      mongooseOptions
    );
    console.log("Our glorious Database is connected to:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();

//aquí se conecta a la base de datos con las variables de entorno de config.ts
