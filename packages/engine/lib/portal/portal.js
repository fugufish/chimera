"use strict";

const pkg = require("../../package.json")
const Process = require("../process");

class Portal extends Process {
  get name() {
    return "Portal";
  }

  get root() {
    return __dirname
  }

  banner() {
    console.log(
      `ChimeraJS v${pkg.version} - Portal - `,
      "Copyright (c) 2020 - The Bit Dwarves\n\n"
    )
  }
}

module.exports = Portal;
