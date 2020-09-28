const path = require("path");

const { Game } = require("@chimera/engine");

const game = new Game({
  root: path.join(process.cwd(), ".."),
});

// Register this plugin after all other plugins have been registered
game.registerPlugin(require("./plugin"));

module.exports = game;
