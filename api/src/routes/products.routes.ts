import { Router } from "express"
import fileUpload from "express-fileupload";  //este middleware de express nos sirve para subir archivos

import * as productControllers from "./products.controller"; // de esta forma importo todos los controllers a la vez

const router = Router();
router.get("/products", productControllers.getProducts);

router.get("/products/:id", productControllers.getProduct);

<<<<<<< HEAD
router.post("/products", 
fileUpload({
    useTempFiles : true,   //middleware para guardar las imágenes temporalmente en nuestro proyecto
    tempFileDir : '/uploads/'  //carpeta que se crea sólo cuando se suben archivos(luego borraremos los temps)
}),
productControllers.createProduct);
=======
// router.post("/products", productControllers.createProduct);git
>>>>>>> 302d40c4b91cae37b02edd0dbc7eed091e25da9c

router.delete("/products/:id", productControllers.deleteProduct);

router.put("/products/:id", productControllers.updateProduct);

export default router;

// este es el enrutador
