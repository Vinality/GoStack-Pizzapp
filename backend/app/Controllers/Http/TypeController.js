"use strict";

const Type = use("App/Models/Type");

class TypeController {
  async store({ request }) {
    const data = request.only(["product_id", "type", "image_url"]);

    const type = await Type.create(data);

    await type.save();

    return type;
  }

  async show({ params }) {
    const url = params;
    const menu = await Type.query()
      .where("product_id", url.prod)
      .fetch();

    return menu;
  }
}

module.exports = TypeController;
