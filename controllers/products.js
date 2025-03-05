// We use the named export approach

import { ProductModel } from "../models/products.js";

export const addProduct = async (req, res, next) => {
  try {
    // Check if user has permission
    // Upload product image
    // Validate product information
    // Save product information to database.
    const result = await ProductModel.create(req.body);
    // Return response
    // res.send(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async(req, res,next) => {
  try {
    const result = await ProductModel.find();
  
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const countProducts = (req, res) => {
  res.send("All products count!");
};

export const updateProduct = (req, res) => {
  res.send(`Product with id: ${req.params.id} updated`);
};

export const deleteProduct = (req, res) => {
  res.send(`Product with id: ${req.params.id} deleted`);
};
