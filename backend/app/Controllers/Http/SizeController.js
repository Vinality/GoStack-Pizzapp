"use strict";

const Size = use("App/Models/Size");

class SizeController {
  async store({ request }) {
    const data = request.only(["type_id", "size", "price"]);

    const size = await Size.create(data);

    await size.save();

    return size;
  }

  async show({ params }) {
    const url = params
    const menu = await Size.query().where('type_id', url.type).fetch();

    return menu;
  }
}

module.exports = SizeController;
