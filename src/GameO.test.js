import Game from "./GameO";
import Players from "./Players";

test("test game pointWonBy increment", () => {
    const players = new Players("John", "Paul")
    const game = new Game(players);
    game.pointWonBy(players.player1);
    expect(players.player1.score).toBe(1);
    expect(players.player2.score).toBe(0);
    game.pointWonBy(players.player2);
    expect(players.player1.score).toBe(1);
    expect(players.player2.score).toBe(1);
});

test("test game score", () => {
    const players = new Players("John", "Paul")
    const game = new Game(players);
    expect(game.score()).toBe("0-0");
    game.pointWonBy(players.player1);
    expect(game.score()).toBe("15-0");
    game.pointWonBy(players.player2);
    expect(game.score()).toBe("15-15");
    game.pointWonBy(players.player2);
    expect(game.score()).toBe("15-30");
    game.pointWonBy(players.player2);
    expect(game.score()).toBe("15-40");
    game.pointWonBy(players.player1);
    expect(game.score()).toBe("30-40");
    game.pointWonBy(players.player1);
    expect(game.score()).toBe("Dueue");
    game.pointWonBy(players.player1);
    expect(game.score()).toBe("Advantage John");
    game.pointWonBy(players.player2);
    expect(game.score()).toBe("Dueue");
    game.pointWonBy(players.player2);
    expect(game.score()).toBe("Advantage Paul");
    game.pointWonBy(players.player1);
    expect(game.score()).toBe("Dueue");
    game.pointWonBy(players.player2);
    expect(game.score()).toBe("Advantage Paul");
    game.pointWonBy(players.player2);
    expect(game.score()).toBe("");
});

test("test game winner", () => {
    const players = new Players("John", "Paul")
    const game = new Game(players);
    game.pointWonBy(players.player1);
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.player1);
    expect(game.isFinished()).toBe(true);
    expect(game.winner()).toBe(0);
});

test("test game winner2", () => {
    const players = new Players("John", "Paul")
    const game = new Game(players);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    expect(game.winner()).toBe(1);
});

