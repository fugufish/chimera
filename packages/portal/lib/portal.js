"use strict";

function Portal(config = {}) {
  return {
    name: "portal",
    services: [require("./server")],
  };
}

module.exports = Portal;
