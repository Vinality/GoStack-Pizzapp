"use strict";

const Product = use("App/Models/Product");

class ProductController {
  async store({ request }) {
    const data = request.only(["name"]);

    const prod = await Product.create(data);

    await prod.save();

    return prod;
  }
}

module.exports = ProductController;
