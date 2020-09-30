const Connection = require("./connection")

module.exports = function (engine) {
  return {
    name: "portal.connection-manager",
    actions: {
      accept(ctx) {
        const socket = ctx.params
        this.logger.info(`received connection from '${socket.remoteAddress}'`)
        this.logger.debug("creating service for connection")
        const connection = new Connection(socket)
        this.broker.createService(connection)
      }
    },
    created() {
      this.connections = {}
    }
  }
}