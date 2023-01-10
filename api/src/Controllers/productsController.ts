import { RequestHandler, Router } from "express"; // el RequestHandler ayuda a que se reconozca el request
import Products from "../models/products";
import { uploadImage, deleteImage } from "../utils/cloudinary";
import { isAdmin } from "../middleware/auth";
import fs from "fs-extra"; //fs-extra me ayuda a eliminar archivos y soporta promesas

const router = Router();

//TODO: get all products
export const getProducts: RequestHandler = async (req, res) => {
  try {
    const products = await Products.find({}).populate('category');
    return res.json(products);
  } catch (error: any) {
    res.status(500).json({error_message: error.message})
  }
};

//TODO: to get one product by ID
export const getProduct: RequestHandler = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product)
      return res.status(404).json({
        message: "Product doesn't exist",
      });
    return res.json(product);
  } catch (error:any) {
    res.status(500).json({error_message: error.message})
  }
};

// export const createProduct: RequestHandler = async (req, res) => {
//   try {
//     const { name, description, price, category, color } = req.body;
//     const product = new Products({ name, description, price, category, color });
//     const { image }: any = req.files;
//     const fileTypes = ["image/jpeg", "image/png", "image/jpg"];
//     if (!fileTypes.includes(image.mimetype))
//       return res.send("Image formats supported: JPG, PNG, JPEG");

//     //comprobación si lo que se sube es una imagen y la sube a Cloudinary
//     if (req.files?.image) {
//       const result = await uploadImage(image.tempFilePath);
//       product.image = {
//         public_id: result.public_id, //propiedades que me da Cloudinary
//         secure_url: result.secure_url, //imagen que se sube a Cloudinary
//       };
//       //elimino los archivos temporales de uploads
//       await fs.unlink(image.tempFilePath);
//     }

//     const savedProduct = await product.save(); // se guarda en la DB
//     return res.json(savedProduct);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

router.post("/", isAdmin, async (req: any, res: any) => {
  const { name, category, price, desc, image } = req.body;

  try {
    if (image) {
      const uploadRes = await uploadImage(image);

      if (uploadRes) {
        const product: any = new Products({
          name,
          category,
          price,
          desc,
          image: uploadRes,
        });

        const savedProduct: any = await product.save();

        res.status(200).send(savedProduct);
      }
    }
  } catch (err: any) {
    console.log(err);
    res.status(500).send(err);
  }
});

export const updateProduct: RequestHandler = async (req, res) => {
  try {
    const productUpdated = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!productUpdated) return res.status(204).json();
    res.json(productUpdated);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteProduct: RequestHandler = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Product doesn't exist" });
    if (product.image?.public_id) {
      await deleteImage(product.image.public_id);
    }
    return res.json(product);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = router;
