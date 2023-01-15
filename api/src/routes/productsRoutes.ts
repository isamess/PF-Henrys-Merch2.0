import { Router } from "express";
import fileUpload from "express-fileupload"; //este middleware de express nos sirve para subir archivos

import * as productsControllers from "../Controllers/productsController"; // de esta forma importo todos los controllers a la vez

const router = Router();

// router.get("/", productControllers.getProducts);

// router.get("/:id", productControllers.getProductId);

router.delete("/:id", productsControllers.deleteProduct);

router.put("/:id", productsControllers.updateProduct);

module.exports = router;

// este es el enrutador
