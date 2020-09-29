const fs = require("fs")

const Plugin = require("../plugin");

module.exports = class extends Plugin {
  get root() {
    return __dirname
  }

  get name() {
    return "Core"
  }
};
