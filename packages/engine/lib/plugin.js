const path = require("path");
const glob = require("glob");

const ld = require("lodash")


class Plugin {
  constructor(engine) {
    this.store = require("mem-fs").create();
    this.bootstrapHooks = [];
  }

  _bootstrap(engine) {
    this.bootstrapCli(engine)
    this.bootstrap(engine)
  }

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

  bootstrap(engine) {
  }

}

module.exports = Plugin;
