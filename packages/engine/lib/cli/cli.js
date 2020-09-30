const path = require("path")

const Engine = require("../engine");

function cli() {
  let engine;

  if (path.join(process.cwd(), "config", "engine.js")) {
    engine = require(path.join(process.cwd(), "config", "engine"))
  } else {
    engine = new Engine()
  }

  return engine.runCli();
}

module.exports = cli;
