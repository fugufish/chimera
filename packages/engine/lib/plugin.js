const path = require("path");
const glob = require("glob");

const ld = require("lodash")

/**
 * A plugin extends the behavior of a ChimeraJS game.
 */
class Plugin {
  constructor(engine) {
    this.engine = engine
    this.bootstrapHooks = [];
  }

  /**
   * Internal bootstrap method (called by the engine)
   */
  _bootstrap() {
    this.bootstrapCli()
    this.bootstrap()
  }

  /**
   * Loads all of the CLI extensions for the application
   */
  bootstrapCli(engine) {
    const files = glob.sync(path.join(this.root, "cli", "**", "*.js"))
    if (files.length > 0) {
      engine.command(
        ld.kebabCase(this.name),
        `cli commands provided by the '${this.name}' plugin`,
        (cmd) => {
          files.forEach((cliFile) => {
            cmd.command(...require(cliFile)(engine))
              .showHelpOnFail(true)
              .demandCommand()
          })
        }
      )
    }
  }

  /**
   * Override 
   */
  bootstrap(engine) {
  }

}

module.exports = Plugin;
