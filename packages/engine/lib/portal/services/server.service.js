const net = require("net")

module.exports = {
  name: "portal.server",
  settings: {
    telnet: {
      host: process.env.TELNET_HOST,
      port: process.env.TELNET_PORT
    }
  },
  started() {
    this.listener = net.createServer(this.handleConnection)
    return new Promise((res) => {
      this.logger.info(
        `starting listener on '${this.settings.telnet.host}:`,
        `${this.settings.telnet.port}'`
      )
      this.listener.listen(
        this.settings.telnet.port,
        this.settings.telnet.host,
        () => {
          res()
        })
    })
  },

  methods: {
    handleConnection(socket) {
      this.broker.call("portal.connection-manager.accept", socket)
    }
  }
}