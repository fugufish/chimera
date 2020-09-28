const { Game } = require("../../lib/game");

describe("Game", () => {
  describe(".services", () => {
    it("defaults to an empty array", () => {
      expect(game.services).toEqual([]);
    });
  });

  describe(".plugins", () => {
    it("defaults to an empty array", () => {
      const game = new Game();

      expect(game.plugins).toEqual([]);
    });
  });

  describe(".registerPlugin", () => {
    it("registers the plugin with the game", () => {
      const game = new Game();

      const plugin = {};

      game.registerPlugin(plugin);
      expect(game.plugins).toEqual([{}]);
    });
  });
});
