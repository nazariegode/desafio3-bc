const express = require('express');
const router = express.Router();

const ProductManager = require('../productManager');

const productManager = new ProductManager('./data.json');

// Obtener todos los productos
router.get('/', (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
  const products = productManager.getProducts(limit);
  res.json(products);
});

// Obtener un producto por id
router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  try {
    const product = productManager.getProductById(productId);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

module.exports = router;
