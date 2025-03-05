import { Router } from "express";
import { addProduct, countProducts, deleteProduct, getProducts, updateProduct } from "../controllers/products.js";

// Create products router
const productsRouter = Router();

// Define routes
productsRouter.post('/products',addProduct);

productsRouter.get('/products',getProducts);

productsRouter.get('/products/count',countProducts);


productsRouter.patch('/products/:id',updateProduct);

productsRouter.delete('/products/:id',deleteProduct);

// Export router
export default productsRouter;