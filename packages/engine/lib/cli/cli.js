const yargs = require("yargs");

const Engine = require("../engine");

function cli(engine = new Engine()) {
  return engine.runCli();
}

module.exports = cli;
