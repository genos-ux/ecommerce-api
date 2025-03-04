// We use the named export approach

export const addProduct = (req, res) => {
  // Check if user has permission
  // Upload product image
  // Validate product information
  // Save product information to database.
  // Return response
  res.send(req.body);
};

export const getProducts = (req, res) => {
  res.send("All products.");
};

export const countProducts = (req, res) => {
  res.send("All products count!");
};

export const updateProduct = (req, res) => {
  res.send(`Product with id: ${req.params.id} updated`);
};

export const deleteProduct = (req, res) => {
    res.send(`Product with id: ${req.params.id} deleted`);
}
