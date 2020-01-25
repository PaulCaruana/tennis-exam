const Game = require("./game");

test("test game point increment", () => {
    const game = Game();
    game.point(0);
    expect(game.currentScore).toEqual([1,0]);
    game.point(1);
    expect(game.currentScore).toEqual([1,1]);
});

test("test game score", () => {
    const game = Game("John", "Paul");
    expect(game.score()).toBe("0-0");
    game.point(0)
    expect(game.score()).toBe("15-0");
    game.point(1)
    expect(game.score()).toBe("15-15");
    game.point(1)
    expect(game.score()).toBe("15-30");
    game.point(1)
    expect(game.score()).toBe("15-40");
    game.point(0)
    expect(game.score()).toBe("30-40");
    game.point(0)
    expect(game.score()).toBe("Dueue");
    game.point(0)
    expect(game.score()).toBe("Advantage John");
    game.point(1)
    expect(game.score()).toBe("Dueue");
    game.point(1)
    expect(game.score()).toBe("Advantage Paul");
    game.point(0)
    expect(game.score()).toBe("Dueue");
    game.point(1)
    expect(game.score()).toBe("Advantage Paul");
    game.point(1)
    expect(game.score()).toBe("");
});

test("test game winner", () => {
    const game = Game("John", "Paul");
    game.point(0)
    expect(game.isFinished()).toBe(false);
    game.point(0)
    game.point(0)
    expect(game.isFinished()).toBe(false);
    game.point(0)
    expect(game.isFinished()).toBe(true);
    expect(game.winner()).toBe(0);

    const game2 = Game("John", "Paul");
    game2.point(0)
    game2.point(0)
    game2.point(0)
    game2.point(1)
    game2.point(1)
    game2.point(1)
    expect(game2.isFinished()).toBe(false);
    game2.point(1)
    game2.point(1)
    expect(game2.winner()).toBe(1);
});

