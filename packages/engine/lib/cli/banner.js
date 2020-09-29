const pkg = require("../package.json");

module.exports = function banner() {
  console.log(
    `ChimeraJS MUD Engine v${pkg.version} - ` +
      "Copyright (c) 2020 The Bit Collective"
  );
};
