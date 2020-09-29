const banner = require("./banner");

module.exports = [
  "version",
  "display the current Chimera version",
  (yargs) => {
    banner();
  },
];
