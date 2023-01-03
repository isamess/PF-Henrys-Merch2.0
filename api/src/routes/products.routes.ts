import { Router } from "express"
import fileUpload from "express-fileupload";  //este middleware de express nos sirve para subir archivos

import * as productControllers from "./products.controller"; // de esta forma importo todos los controllers a la vez

const router = Router();
router.get("/products", productControllers.getProducts);

router.get("/products/:id", productControllers.getProduct);

router.post("/products", 
fileUpload({
    useTempFiles : true,   //middleware para guardar las imágenes temporalmente en nuestro proyecto
    tempFileDir : '/uploads/'  //carpeta que se crea sólo cuando se suben archivos(luego borraremos los temps)
}),
productControllers.createProduct);

router.delete("/products/:id", productControllers.deleteProduct);

router.put("/products/:id", productControllers.updateProduct);

export default router;

// este es el enrutador
