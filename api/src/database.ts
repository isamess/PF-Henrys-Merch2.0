import mongoose, { ConnectOptions } from 'mongoose'
import config from './config'
import dotenv from 'dotenv'

<<<<<<< HEAD
(async () => {
  try {
    const mongooseOptions:ConnectOptions = {
      // user: config.MONGO_USER,          //usuario por defecto de esta DB
    // pass: config.MONGO_PASSWORD
=======


(async ()=>{
    try {
        const mongooseOptions:ConnectOptions= {
            // user: config.MONGO_USER,          //usuario por defecto de esta DB
            // pass: config.MONGO_PASSWORD
        }
        const db= await mongoose.connect(`mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@henrycomerce.3etyvbd.mongodb.net/test`, mongooseOptions)
        console.log('Our glorious Database is connected to:', db.connection.name)

    } catch (error) {
        console.log(error)
>>>>>>> f6fb8f0773d9d2031a59b8294887fc90015fa553
    }
    const db = await mongoose.connect('mongodb+srv://soyhenryadmin:S9LjV32xOnccepmY@henrycomerce.3etyvbd.mongodb.net/test', mongooseOptions)
    console.log('Our glorious Database is connected to:')
  } catch (error) {
    console.log(error)
  }
})()

<<<<<<< HEAD
// aquí se conecta a la base de datos con las variables de entorno de config.ts
=======
//aquí se conecta a la base de datos con las variables de entorno de config.ts
>>>>>>> f6fb8f0773d9d2031a59b8294887fc90015fa553
