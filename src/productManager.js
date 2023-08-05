const fs = require('fs');

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
    this.loadData();
  }

  loadData() {
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      this.products = JSON.parse(data);
    } catch (error) {
      this.products = [];
    }
  }

  saveData() {
    try {
      const data = JSON.stringify(this.products, null, 2);
      fs.writeFileSync(this.path, data);
    } catch (error) {
      console.error('Error al guardar los datos:', error);
    }
  }

  getProducts(limit) {
    if (limit) {
      return this.products.slice(0, limit);
    }
    return this.products;
  }

  getProductById(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    return product;
  }

}

module.exports = ProductManager;
