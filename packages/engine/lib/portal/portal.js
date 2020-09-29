"use strict";

const Process = require("../process");

class Portal extends Process {
  get name() {
    return "portal";
  }

  get startupServices() {
    return ["server"];
  }
}

module.exports = Portal;
