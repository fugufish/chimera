const yargs = require("yargs");
const pkg = require("../../../package.json");

const CLI = yargs.command(
  "version",
  "display the current Chimera version",
  (yargs) => {
    console.log(pkg.version);
  }
);

module.exports = {
  CLI,
};
