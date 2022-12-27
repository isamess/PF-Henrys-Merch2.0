import { Router } from "express";

import * as productControllers from "./products.controller"; // de esta forma importo todos los controllers a la vez

const router = Router();
router.get("/products", productControllers.getProducts);

router.get("/products/:id", productControllers.getProduct);

router.post("/products", productControllers.createProduct);

router.delete("/products/:id", productControllers.deleteProduct);

router.put("/products/:id", productControllers.updateProduct);

export default router;

// este es el enrutador
