const fs = require("fs")
const path = require("path")
const { exit } = require("process")

module.exports = function (engine) {
  return [
    "run",
    "runs the ChimeraJS portal",
    (cmd) => {
      if (!fs.existsSync(path.join(process.cwd(), "config", "engine.js"))) {
        console.log(
          "You must be in your world's root directory to use this command."
        )
        exit(1)
      }

      const world = require(path.join(process.cwd(), "config", "engine"))

      engine.plugins.Portal.start(engine)
    }
  ]
}