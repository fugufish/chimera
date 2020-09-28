const yargs = require("yargs");
const pkg = require("../../../package.json");

const CLI = yargs.command(
  "version",
  "display the current Chimera version",
  (yargs) => {
    console.log(`ChimeraJS ${pkg.version} Copyright (c) 2020 The Bit Dwarves`);
  }
);

module.exports = {
  CLI,
};
