import { RequestHandler } from "express"; // el RequestHandler ayuda a que se reconozca el request
import Products from "./models/ProductsModel";

export const createProduct: RequestHandler = async (req, res) => {
  const productFound = await Products.findOne({ product: req.body.product });
  if (productFound) {
    return res.status(301).json({ message: "That product already exists" });
  }
  const product = new Products(req.body);

  const savedProduct = await product.save(); // se guarda en la DB
  res.json(savedProduct);
};

export const getProducts: RequestHandler = async (req, res) => {
  try {
    const products = await Products.find();
    return res.json(products);
  } catch (error) {
    res.json(error);
  }
};

export const getProduct: RequestHandler = async (req, res) => {
  const productFound = await Products.findById(req.params.id);
  if (!productFound) return res.status(204).json();
  return res.json(productFound);
};

export const deleteProduct: RequestHandler = async (req, res) => {
  const productDeleted = await Products.findById(req.params.id);
  if (!productDeleted) return res.status(204).json();
  return res.json(productDeleted);
};

export const updateProduct: RequestHandler = async (req, res) => {
  const productUpdated = await Products.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!productUpdated) return res.status(204).json();
  res.json(productUpdated);
};
