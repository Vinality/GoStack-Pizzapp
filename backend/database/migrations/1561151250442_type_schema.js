"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TypeSchema extends Schema {
  up() {
    this.create("types", table => {
      table.increments();
      table.timestamps();
      table.string("type", 50).notNullable();
      table
        .integer("product_id")
        .unsigned()
        .references("id")
        .inTable("products")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
      table
        .string('image_url', 50)
        .notNullable();
    });
  }

  down() {
    this.drop("types");
  }
}

module.exports = TypeSchema;
