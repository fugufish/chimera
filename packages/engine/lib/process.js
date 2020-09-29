const Plugin = require("./plugin");

module.exports = class extends Plugin {
  constructor(root) {
    super(root);
    this.beforeStartHooks = [];
  }

  beforeStart(fn) {
    this.beforeStartHooks.concat(fn);
  }

  start(game) {
    this.beforeStartHooks.each((hook) => {
      hook(game);
    });
  }
};
