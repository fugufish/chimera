const path = require("path")

const { Plugin } = require("@chimera/engine")

module.exports = class extends Plugin {
  get name() {
    return "Example"
  }

  get root() {
    return path.join(__dirname, "..")
  }
};
