const glob = require("glob")
const path = require("path")

const { ServiceBroker } = require("moleculer")

const Plugin = require("./plugin");

module.exports = class extends Plugin {
  _bootstrap(engine) {
    super._bootstrap(engine)
    this.bootstrapServices()
  }

  bootstrapServices() {
    this.services = []
    const files = glob.sync(path.join(this.root, "services", "**", "*.service.js"))
    files.forEach((serviceFile) => {
      this.services = this.services.concat(require(serviceFile))
    })
  }

  banner() { }

  start(engine) {
    this.banner()
    this.broker = new ServiceBroker({
      name: this.name,
      transporter: process.env.TRANSPORTER,
      logger: {
        type: "Console",
        options: {
          colors: true,
          moduleColors: true,
          formatter: "full",
          level: process.env.LOG_LEVEL
        }
      }
    })

    this.broker.logger.info(
      "registered plugins:",
      Object.keys(engine.plugins).map((k) => k)
    )

    Object.values(this.services).forEach((service) => {
      this.broker.createService(service)
    })

    this.broker.start()
  }
};
