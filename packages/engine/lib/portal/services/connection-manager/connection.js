const { v4 } = require("uuid")


module.exports = function (socket) {
  const id = v4()
  return {
    name: `portal.connections.${id}`,
    metadata: {
      uuid: id,
    },
  }
}