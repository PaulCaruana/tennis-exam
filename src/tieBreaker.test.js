const TieBreaker = require('./tieBreaker');

test('test game point increment', () => {
    const game = TieBreaker();
    game.point(0);
    expect(game.currentScore).toEqual([1,0]);
    game.point(1);
    expect(game.currentScore).toEqual([1,1]);
});

test('test game score', () => {
    const game = TieBreaker();
    expect(game.score()).toBe("0-0");
    game.point(0);
    game.point(0);
    game.point(0);
    game.point(0);
    game.point(0);
    game.point(0);
    game.point(1);
    game.point(1);
    game.point(1);
    game.point(1);
    game.point(1);
    game.point(1);
    expect(game.score()).toBe("6-6");
    game.point(1);
    expect(game.score()).toBe("6-7");
    game.point(0);
    game.point(0);
    expect(game.score()).toBe("8-7");
    game.point(0);
    expect(game.score()).toBe("");
});

test('test game winner', () => {
    const game = TieBreaker();
    game.point(0)
    game.point(0)
    game.point(0)
    game.point(0)
    game.point(0)
    game.point(0)
    game.point(1)
    game.point(1)
    game.point(1)
    game.point(1)
    game.point(1)
    game.point(1)
    expect(game.isFinished()).toBe(false);
    game.point(1)
    expect(game.isFinished()).toBe(false);
    game.point(1)
    expect(game.winner()).toBe(1);
    expect(game.isFinished()).toBe(true);
});
test('test game winner2', () => {
    const game = TieBreaker();
    game.point(0)
    game.point(0)
    game.point(0)
    game.point(0)
    game.point(0)
    game.point(0)
    game.point(1)
    game.point(1)
    game.point(1)
    game.point(1)
    game.point(1)
    game.point(1)
    expect(game.isFinished()).toBe(false);
    game.point(0)
    expect(game.isFinished()).toBe(false);
    game.point(0)
    expect(game.winner()).toBe(0);
    expect(game.isFinished()).toBe(true);
});

