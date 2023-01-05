import { Router } from "express";
import fileUpload from "express-fileupload"; //este middleware de express nos sirve para subir archivos

import * as productControllers from "./productsController"; // de esta forma importo todos los controllers a la vez

const router = Router();
router.get("/", productControllers.getProducts);

router.get("/:id", productControllers.getProduct);

// router.post(
//   "/",
//   fileUpload({
//     useTempFiles: true, //middleware para guardar las imágenes temporalmente en nuestro proyecto
//     tempFileDir: "/uploads/", //carpeta que se crea sólo cuando se suben archivos(luego borraremos los temps)
//   }),
//   productControllers.createProduct
// );

router.delete("/:id", productControllers.deleteProduct);

router.put("/:id", productControllers.updateProduct);

module.exports = router;

// este es el enrutador
