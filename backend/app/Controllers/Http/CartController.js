'use strict'

const Size = use("App/Models/Size");

class CartController {
  async show({ request }) {
    const req = request.only(['size_id', 'size_id2', 'size_id3']);
    const data = await Size.query().where('id', req.size_id).orWhere('id', req.size_id2).orWhere('id', req.size_id3).with('types.product').fetch();
    
    return data;
  }
}

module.exports = CartController
