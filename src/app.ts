import express from 'express';
import config from './config'

import productsRoutes from './routes/products.routes'
const app= express();

app.set('port', config.PORT);  //quiero que se establezca este puerto

app.use(productsRoutes)

export default app;