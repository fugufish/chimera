const { Game } = require("../../lib/game");

describe("Game", () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  describe(".plugins", () => {
    it("defaults to an empty array", () => {
      expect(game.plugins).toEqual([]);
    });
  });

  describe(".world", () => {
    it("defaults to an empty array", () => {
      expect(game.world).toEqual({
        services: [],
      });
    });
  });

  describe(".portal", () => {
    it("defaults to a world config object", () => {
      expect(game.portal).toEqual({
        services: [],
      });
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
