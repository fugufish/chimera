const path = require("path");
const glob = require("glob");

class Plugin {
  constructor() {
    this.store = require("mem-fs").create();
    this.bootstrapHooks = [];
  }

  bootstrap(game) {
    glob.sync(path.join(this.root, "cli")).each((cliFile) => {
      game.command(
        this.name,
        `cli commands provided by the '${name}' plugin`,
        (cmd) => {
          cmd.command(...require(cliFile));
        }
      );
    });
  }
}

module.exports = Plugin;
