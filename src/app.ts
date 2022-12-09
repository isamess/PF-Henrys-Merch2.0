import express from 'express';
import morgan from 'morgan';
import config from './config';
import cors from 'cors';

import productsRoutes from './routes/products.routes'
const app= express();

app.set('port', config.PORT);  //quiero que se establezca este puerto
app.use(morgan('dev'));   //me muestra la petición que hice en la terminal
app.use(cors());     //cors me permite a cualquier servidor hacer peticiones
app.use(express.json()); //para poder entender los obj json cuando hacemos peticiones Post con un dato
app.use(express.urlencoded({extended:false})) //para que pueda entender los campos que llegan desde el formulario


app.use(productsRoutes);

export default app;