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

mongoose.set('strictQuery', true)
require('dotenv/config')

app.set('port', config.PORT || 3001) // quiero que se establezca este puerto
app.use(morgan('dev')) // me muestra la petición que hice en la terminal
app.use(cors()) // cors me permite a cualquier servidor hacer peticiones
app.use(express.json()) // para poder entender los obj json cuando hacemos peticiones Post con un dato
app.use(express.urlencoded({ extended: true })) // para que pueda entender los campos que llegan desde el formulario
app.use(bodyParser.json())
app.set('view engine', 'ejs') // se ve en el vistas carpeta para las plantillas que hacen.

// seteames el  images storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })

// controlador para la solicitud GET a nuestro servidor. La respuesta muestra una página HTML
// que muestra todas las imágenes almacenadas en la base de datos y proporciona una interfaz
// de usuario para cargar nuevas imágenes.
// const upload = multer({ storage })

// cargamos el modelo de las imágenes

app.get('/products', (req, res) => {
  product.find({}).then((product) => {
    res.json(product)
  })
})

// Maneje la solicitud POST que procesa los datos del formulario enviados por el usuario
// desde nuestra interfaz de usuario HTML. Esta solicitud hará que se carguen
// las nuevas imágenes.
// app.post('/', upload.single('image'), (req, res, next) => {
//   const obj = {
//     name: req.body.name,
//     desc: req.body.desc,
//     img: {
//       // eslint-disable-next-line n/no-path-concat
//       data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
//       contentType: 'image/png'
//     }
//   }
//   imgModel.create(obj, (err, item) => {
//     if (err) {
//       console.log(err)
//     } else {
//       item.save()
//       console.log('Saved to database')
//       res.redirect('/')
//     }
//   })
// })

export default app
