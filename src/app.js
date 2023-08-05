const express = require('express');
const app = express();
const PORT = 8080;

// Importamos el módulo de rutas
const productRoutes = require('./routes/products');

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la tienda!');
});

// Rutas de productos
app.use('/products', productRoutes);

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
