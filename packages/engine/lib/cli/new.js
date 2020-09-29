const path = require("path");
const fs = require("fs");

const yeoman = require("yeoman-environment");

const { Game } = require("@chimera/generators");

module.exports = [
  "new",
  "generates a new ChimeraJS World",
  (yargs) => {
    const env = yeoman.createEnv();

    if (fs.existsSync(path.join(process.cwd(), "config/game.js"))) {
      console.log(
        "cannot generate a ChimeraJS World from within an existing world"
      );

      return;
    }

    env.registerStub(Game, "chimera:new");
    env.run("chimera:new");
  },
];
