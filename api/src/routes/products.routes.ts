import { Router } from 'express'

import * as productControllers from './products.controller'
const router = Router() // de esta forma importo todos los controllers a la vez

router.get('/products', productControllers.getProducts)

router.get('/products/:id', productControllers.getProduct)

router.post('/products', productControllers.createProduct)

router.delete('/products/:id', productControllers.deleteProduct)

router.put('/products/:id', productControllers.updateProduct)

export default router

// este es el enrutador
