"use strict";

const Model = use("Model");
const env = use("Env");

class File extends Model {
  static get computed() {
    return ["url"];
  }

  getUrl({ id }) {
    return `${env.get("APP_URL")}/files/${id}`;
  }

  size() {
    return this.belongsTo("App/Models/Size");
  }
}

module.exports = File;
