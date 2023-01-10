import express from "express";
import morgan from "morgan";
import config from "./config";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
// import fs from 'fs'
// import path, { dirname } from 'path'
import product from "./models/products";
const register = require("./routes/register");
const login = require("./routes/login");
const stripe = require("./routes/stripe");
const products = require("./routes/productsController");
const users = require("./routes/users");
const orders = require("./routes/orders");

dotenv.config();
const app = express();

mongoose.set("strictQuery", true);
require("dotenv/config");


app.set("port", config.PORT || 3001); // quiero que se establezca este puerto
// app.set('Access-Control-Allow-Origin', '*') // comentario de test
app.use(morgan("dev")); // me muestra la petición que hice en la terminal
app.use(cors()); // cors me permite a cualquier servidor hacer peticiones
app.use("/api/stripe/webhook", express.raw({ type: "*/*" }));
app.use(express.json({ limit: "10mb" })); // para poder entender los obj json cuando hacemos peticiones Post con un dato
app.use(express.urlencoded({ extended: true, limit: "10mb" })); // para que pueda entender los campos que llegan desde el formulario
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.set("view engine", "ejs"); // se ve en el vistas carpeta para las plantillas que hacen.

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/stripe", stripe);
app.use("/api/products", products);
app.use("/api/users", users);
app.use("/api/orders", orders);

app.get("/products", (req, res) => {
  try {
    product.find({}).then((product: any) => {
      res.json(product);
    });
  } catch (error) {
    res.send(error);
  }
});

app.get("/products/:productName", (req, res) => {
  try {
    const { productName } = req.params;

    product.find({ name: productName }).then((product: any) => {
      res.json(
        product.length > 0 ? product : "No hay ningun producto con ese nombre"
      );
    });
  } catch (error) {
    res.send(error);
  }
});

export default app;
