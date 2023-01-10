import { Router } from "express";
import fileUpload from "express-fileupload"; //este middleware de express nos sirve para subir archivos

import * as productControllers from "../Controllers/productsController"; // de esta forma importo todos los controllers a la vez

const router = Router();

// router.get("/", productControllers.getProducts);

// router.get("/:id", productControllers.getProductId);

router.delete("/:id", productControllers.deleteProduct);

router.put("/:id", productControllers.updateProduct);

module.exports = router;

// este es el enrutador
