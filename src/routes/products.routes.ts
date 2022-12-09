import {Router} from 'express';
const router= Router();

import * as productControllers from './products.controllers';  //de esta forma importo todos los controllers a la vez

router.get('/products', productControllers.getProducts);

router.post('/products/:id', productControllers.getProduct );

router.delete('/products/:id', productControllers.deleteProduct);

router.put('/products/:id', productControllers.updateProduct);


export default router;


//este es el enrutador