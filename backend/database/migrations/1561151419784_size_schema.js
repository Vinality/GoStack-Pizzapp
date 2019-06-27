"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SizeSchema extends Schema {
  up() {
    this.create("sizes", table => {
      table.increments();
      table.timestamps();
      table.string("size", 10).notNullable();
      table.integer("price").notNullable();
      table
        .integer("type_id")
        .unsigned()
        .references("id")
        .inTable("types")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
      table
        .string('image_url', 50)
        .notNullable();
    });
  }

  down() {
    this.drop("sizes");
  }
}

module.exports = SizeSchema;
