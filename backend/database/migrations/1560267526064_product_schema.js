"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductSchema extends Schema {
  up() {
    this.create("products", table => {
      table.increments();
      table.timestamps();
      table.string("name").notNullable();
      table.string("description").notNullable();
      table.string('image_url', 50).notNullable();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductSchema;
