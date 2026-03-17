const fs = require('fs');
const path = require('path');

const getProducts = (req, res) => {
  try {
    const productsPath = path.join(__dirname, '../models/products.json');
    const productsData = fs.readFileSync(productsPath, 'utf-8');
    const products = JSON.parse(productsData);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

const getProductById = (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const productsPath = path.join(__dirname, '../models/products.json');
    const productsData = fs.readFileSync(productsPath, 'utf-8');
    const products = JSON.parse(productsData);
    const product = products.find(p => p.id === productId);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById
};
