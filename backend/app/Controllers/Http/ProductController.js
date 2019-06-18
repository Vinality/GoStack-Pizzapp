"use strict";

const Product = use("App/Models/Product");

class ProductController {
  async store({ request }) {
    const data = request.only(["name", "image_url"]);

    const prod = await Product.create(data);

    await prod.save();

    return prod;
  }

  async show() {
    const menu = await Product.query().with('type.sizes').fetch();

    return menu;
  }
}

module.exports = ProductController;
