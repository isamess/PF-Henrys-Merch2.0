import { RequestHandler, Router } from "express"; // el RequestHandler ayuda a que se reconozca el request
import Products from "../models/products";
import Category from "../models/categories";
import cloudinary, { uploadImage, deleteImage } from "../utils/cloudinary";
import { isAdmin } from "../middleware/auth";
import fs from "fs-extra"; //fs-extra me ayuda a eliminar archivos y soporta promesas

const router = Router();

//TODO: get all products
router.get("/find", async (req: any, res: any) => {
  try {
    const product: any = await Products.find();
    res.status(200).send(product);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//TODO: to get one product by ID
router.get("/find/:id", async (req: any, res: any) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product)
      return res.status(404).json({
        message: "Product doesn't exist",
      });
    return res.json(product);
  } catch (error) {
    return res.status(500).json(error);
  }
});

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

router.put("/:id", isAdmin, async (req, res) => {
  if (req.body.productImg) {
    try {
      const destroyResponse: any = await cloudinary.uploader.destroy(
        req.body.product.image.public_id
      );

      if (destroyResponse) {
        const uploadResponse = await cloudinary.uploader.upload(
          req.body.productImg,
          {
            upload_preset: "online-shop",
          }
        );
        if (uploadResponse) {
          const updatedResponse: any = await Products.findByIdAndUpdate(
            req.params.id,
            {
              $set: {
                ...req.body.product,
                image: uploadResponse,
              },
            },
            { new: true }
          );
          res.status(200).send(updatedResponse);
        }
      }
    } catch (err: any) {
      res.status(500).send(err);
    }
  }

  try {
    const updatedProducts = await Products.findByIdAndUpdate(
      req.params.id,
      { $set: req.body.product },
      { new: true }
    );

    res.status(200).send(updatedProducts);
  } catch (err: any) {
    return res.status(500).send(err);
  }
});

// export const deleteProduct: RequestHandler = async (req, res) => {
//   try {
//     const product = await Products.findByIdAndDelete(req.params.id);
//     if (!product)
//       return res.status(404).json({ message: "Product doesn't exist" });
//     if (product.image?.public_id) {
//       await deleteImage(product.image.public_id);
//     }
//     return res.json(product);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

//copia para poder borrar tambien la imagen de cloudinary y el formato para usar middlewar

router.delete("delete/:id"),
  isAdmin,
  async (req: any, res: any) => {
    try {
      const product: any = await Products.findById(req.params.id);

      if (!product)
        return res.status(404).send("El producto no fue encontrado");
      if (product.image.public_id) {
        const destroyResponse: any = await cloudinary.uploader.destroy(
          product.image.public_id
        );

        if (destroyResponse) {
          const deleteProduct: any = await product.findByIdAndDelete(
            req.params.id
          );

          res.status(200).send(deleteProduct);
        }
      } else {
        console.log("Acción terminada. Falla al eliminar el producto");
      }
    } catch (err: any) {
      res.status(500).send(err);
    }
  };

router.post("/category", isAdmin, async (req: any, res: any) => {
  const { createCategory } = req.body;

  try {
    const category: any = new Category({
      category: createCategory,
    });

    const savedCategory: any = await category.save();

    res.status(200).send(savedCategory);
  } catch (err: any) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/category/find", async (req: any, res: any) => {
  try {
    const category: any = await Category.find();
    res.status(200).send(category);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
