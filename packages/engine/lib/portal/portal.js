"use strict";

const Process = require("../process");

class Portal extends Process {
  get name() {
    return "portal";
  }

  get root() {
    return __dirname
  }

  get startupServices() {
    return ["server"];
  }
}

module.exports = Portal;
