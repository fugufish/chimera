"use strict";

const glob = require("glob");
const path = require("path");

const yargs = require("yargs");

const Core = require("./core");
const Portal = require("./portal")

/**
 * The Engine is the root class of the game. It bootstraps the game, loading all
 * plugins and related files.
 */
class Engine {
  #pluginClasses = []

  constructor() {
    this.plugins = {};
    this.registerPlugin(Core);
    this.registerPlugin(Portal)
  }

  /**
   * Registers a plugin with the engine 
   */
  registerPlugin(plugin) {
    this.#pluginClasses = this.#pluginClasses.concat(plugin)
  }

  /**
   * Register a CLI command with the engine
   */
  cliCommand(...args) {
    return yargs.command(...args)
  }

  /**
   * @private
   */
  runCli() {
    this.#bootstrap();
    return yargs
      .showHelpOnFail(true)
      .demandCommand()
      .argv
  }

  #bootstrap() {
    this.#bootstrapPlugins();
  }

  #bootstrapPlugins() {
    this.pluginClasses.forEach((Plugin) => {
      const plugin = new Plugin(this);
      this.plugins[plugin.name] = plugin
      plugin._bootstrap(this)
    });
  }

}

module.exports = Engine
