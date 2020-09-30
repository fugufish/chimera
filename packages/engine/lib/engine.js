"use strict";

const glob = require("glob");
const path = require("path");

const yargs = require("yargs");

const Core = require("./core");
const Portal = require("./portal")

class Engine {
  constructor() {
    this.pluginClasses = [];
    this.plugins = {};
    this.registerPlugin(Core);
    this.registerPlugin(Portal)
  }

  registerPlugin(plugin) {
    this.pluginClasses = this.pluginClasses.concat(plugin)
  }

  bootstrap() {
    this.bootstrapPlugins();
  }

  command(...args) {
    return yargs.command(...args)
  }

  bootstrapPlugins() {
    this.pluginClasses.forEach((Plugin) => {
      const plugin = new Plugin(this);
      this.plugins[plugin.name] = plugin
      plugin._bootstrap(this)
    });
  }

  runCli() {
    this.bootstrap();
    return yargs
      .showHelpOnFail(true)
      .demandCommand()
      .argv
  }
}

module.exports = Engine
