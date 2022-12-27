import mongoose, { connect, ConnectOptions } from "mongoose";
import config from "./config";

// (async () => {
//   try {
//     const mongooseOptions: ConnectOptions = {
//       user: config.MONGO_USER, //usuario por defecto de esta DB
//       pass: config.MONGO_PASSWORD,
//     };
//     const db = await mongoose.connect(
//       "mongodb+srv://henrycomerce.3etyvbd.mongodb.net/test",
//       mongooseOptions
//     );
//     console.log("Our glorious Database is connected to: db.connection.name");
//   } catch (error) {
//     console.log(error);
//   }
// })();

// aquí se conecta a la base de datos con las variables de entorno de config.ts

//server de prueba por problemas tecnicos
const dataBase = async () => {
  const uri: any = `${process.env.DB_URI}`;
  try {
    const db: any = await connect(uri, <object>{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(db.connection.Name + " connected");
  } catch (err: any) {
    console.log("mongodb connection failed", err.message);
  }
};

export default dataBase;
