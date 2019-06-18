"use strict";

const Type = use("App/Models/Type");

class TypeController {
  async store({ request }) {
    const data = request.only(["product_id", "type", "image_url"]);

    const type = await Type.create(data);

    await type.save();

    return type;
  }
}

module.exports = TypeController;
