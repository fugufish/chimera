module.exports = function Server() {
  return {
    name: "portal.server",
    settings: {
      telenet: {
        host: "localhost",
        port: 2323,
      },
    },
    started() {},
  };
};
