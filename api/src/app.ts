<<<<<<< HEAD
import express from 'express'
import morgan from 'morgan'
import config from './config'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
// import multer from 'multer'
import dotenv from 'dotenv'
// import fs from 'fs'
// import path, { dirname } from 'path'
import product from './routes/models/ProductsModel'

dotenv.config()
const app = express()
=======
import express from 'express';
import morgan from 'morgan';
import config from './config';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';
import imgModel from './routes/models/imagesModel';
import * as dotenv from 'dotenv';
dotenv.config();
>>>>>>> f6fb8f0773d9d2031a59b8294887fc90015fa553

mongoose.set('strictQuery', true)
require('dotenv/config')

app.set('port', config.PORT || 3001) // quiero que se establezca este puerto
app.use(morgan('dev')) // me muestra la petición que hice en la terminal
app.use(cors()) // cors me permite a cualquier servidor hacer peticiones
app.use(express.json()) // para poder entender los obj json cuando hacemos peticiones Post con un dato
app.use(express.urlencoded({ extended: true })) // para que pueda entender los campos que llegan desde el formulario
app.use(bodyParser.json())
app.set('view engine', 'ejs') // se ve en el vistas carpeta para las plantillas que hacen.

app.get('/products', (req, res) => {
  
  try {
    product.find({}).then((product) => {
      res.json(product)
    })
  } catch (error) {
    res.send(error)
  }

})

app.get('/products/:productName', (req, res) => {
  try {
  const {productName} = req.params

  product.find({ name: productName }).then((product) => {
    res.json(product.length > 0 ? product : 'No hay ningun producto con ese nombre')
  })

  } catch (error) {
    res.send(error)
  }

})

export default app
