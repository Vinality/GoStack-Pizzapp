"use strict";

const Product = use("App/Models/Product");

class ProductController {
  async store({ request }) {
    const data = request.only(["name", "description", "image_url"]);

    const prod = await Product.create(data);

    await prod.save();

    return prod;
  }

  async show() {
    const menu = await Product.query().fetch();

    return menu;
  }
}

module.exports = ProductController;
