const yeoman = require("yeoman-environment");

const { Game } = require("@chimera/generators");

module.exports = [
  "new",
  "generates a new ChimeraJS World",
  (yargs) => {
    const env = yeoman.createEnv();

    env.registerStub(Game, "chimera:new");
    env.run("chimera:new");
  },
];
