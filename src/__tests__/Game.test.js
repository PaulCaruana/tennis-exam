import Game from "../Game";
import Players from "../Players";

test("test game pointWonBy increment", () => {
    const players = new Players("John", "Paul");
    const game = new Game(players);
    game.pointWonBy(players.getPlayer1());
    expect(players.getPlayer1().getScore()).toBe(1);
    expect(players.getPlayer2().getScore()).toBe(0);
    game.pointWonBy(players.getPlayer2());
    expect(players.getPlayer1().getScore()).toBe(1);
    expect(players.getPlayer2().getScore()).toBe(1);
});

test("test game score", () => {
    const players = new Players("John", "Paul");
    const game = new Game(players);
    expect(game.score()).toBe("0-0");
    game.pointWonBy(players.getPlayer1());
    expect(game.score()).toBe("15-0");
    game.pointWonBy(players.getPlayer2());
    expect(game.score()).toBe("15-15");
    game.pointWonBy(players.getPlayer2());
    expect(game.score()).toBe("15-30");
    game.pointWonBy(players.getPlayer2());
    expect(game.score()).toBe("15-40");
    game.pointWonBy(players.getPlayer1());
    expect(game.score()).toBe("30-40");
    game.pointWonBy(players.getPlayer1());
    expect(game.score()).toBe("Dueue");
    game.pointWonBy(players.getPlayer1());
    expect(game.score()).toBe("Advantage John");
    game.pointWonBy(players.getPlayer2());
    expect(game.score()).toBe("Dueue");
    game.pointWonBy(players.getPlayer2());
    expect(game.score()).toBe("Advantage Paul");
    game.pointWonBy(players.getPlayer1());
    expect(game.score()).toBe("Dueue");
    game.pointWonBy(players.getPlayer2());
    expect(game.score()).toBe("Advantage Paul");
    game.pointWonBy(players.getPlayer2());
    expect(game.score()).toBe("");
});

test("test game winner", () => {
    const players = new Players("John", "Paul");
    const game = new Game(players);
    game.pointWonBy(players.getPlayer1());
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.getPlayer1());
    expect(game.isFinished()).toBe(true);
    expect(game.winner()).toBe(players.getPlayer1());
});

test("test game winner2", () => {
    const players = new Players("John", "Paul");
    const game = new Game(players);
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    expect(game.winner()).toBe(players.player2);
});
