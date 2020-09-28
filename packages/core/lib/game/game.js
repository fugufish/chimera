"use strict";

const { ServiceBroker, LoggerFactory } = require("moleculer");

const DEFAULT_OPTIONS = {
  transporter: resolveDefaultTransporter(),
  logger: resolveLogger(),
};

function resolveLogger() {
  if (process.env.NODE_ENV === "test") return false;

  return {
    type: "Console",
    level: resolveDefaultLogLevel(),
  };
}

function resolveDefaultTransporter() {
  if (process.env.TRANSPORTER) return process.env.TRANSPORTER;

  return process.env.NODE_ENV === "test" ? "nats://localhost:4222" : "Fake";
}

function resolveDefaultLogLevel() {
  if (process.env.LOG_LEVEL) return process.env.LOG_LEVEL;

  return process.env.NODE_ENV === "production" ? "info" : "trace";
}

class Game {
  constructor(config = {}) {
    this.plugins = [];
    this.portal = {
      services: [],
    };
    this.world = {
      services: [],
    };
  }

  /**
   * Registers the designaed plugin with the game
   *
   * @param {Object} the plugin to register
   */
  registerPlugin(plugin) {
    this.plugins = this.plugins.concat(plugin);
  }
}

module.exports = { Game };
