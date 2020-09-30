const { Engine } = require("@chimera/engine");

require("dotenv").config()

const engine = new Engine()
engine.registerPlugin(require("./plugin"));

module.exports = engine