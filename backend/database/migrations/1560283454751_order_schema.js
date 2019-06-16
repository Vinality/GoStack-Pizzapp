"use strict";

const Schema = use("Schema");

class OrderSchema extends Schema {
  up() {
    this.create("orders", table => {
      table.increments();
      table.timestamps();
      table
        .integer("size_id")
        .unsigned()
        .references("id")
        .inTable("sizes")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
      table
        .integer("size_id2")
        .unsigned()
        .references("id")
        .inTable("sizes")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
      table
        .integer("size_id3")
        .unsigned()
        .references("id")
        .inTable("sizes")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
    });
  }

  down() {
    this.drop("orders");
  }
}

module.exports = OrderSchema;
