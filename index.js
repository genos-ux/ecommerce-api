import express from "express";
import productsRouter from "./routes/products.js";
import mongoose from "mongoose";



  await mongoose.connect(process.env.MONGO_URI);

// Create an express app
const app = express();

// Use global middlewares
app.use(express.json());

// Use routes
app.use(productsRouter);

// Listen for incoming request
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
