"use strict";

const glob = require("glob");
const path = require("path");

const yargs = require("yargs");

const Core = require("./core");
const Portal = require("./portal");

class Engine {
  constructor() {
    this.pluginClasses = [];
    this.plugins = [];
    this.registerPlugin(Core);
    this.registerPlugin(Portal);
  }

  registerPlugin(plugin) {
    this.plugins.concat(plugin);
  }

  bootstrap() {
    console.log("registering plugins");
    this.bootstrapPlugins();
  }

  command(...args) {
    return yargs.command(...args);
  }

  bootstrapPlugins() {
    this.plugins.each((Plugin) => {
      const plugin = new Plugin(this);
      console.log(`bootstrapping  plugin ${plugin.name}`);
    });
  }

  runCli() {
    return yargs.help().argv;
  }

  start() {
    this.bootstrap();
  }
}

module.exports = Engine;
