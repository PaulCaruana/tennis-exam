import TieBreaker from "./TieBreakerO";
import Player from "./Player";
import Players from "./Players";


test("test game pointWonBy increment", () => {
    const players = new Players("John", "Paul")
    const game = new TieBreaker(players);
    game.pointWonBy(players.player1);
    expect(players.player1.score).toBe(1);
    expect(players.player2.score).toBe(0);
    game.pointWonBy(players.player2);
    expect(players.player1.score).toBe(1);
    expect(players.player2.score).toBe(1);
});

test("test game score", () => {
    const players = new Players("John", "Paul")
    const game = new TieBreaker(players);
    expect(game.score()).toBe("0-0");
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    expect(game.score()).toBe("6-6");
    game.pointWonBy(players.player2);
    expect(game.score()).toBe("6-7");
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    expect(game.score()).toBe("8-7");
    game.pointWonBy(players.player1);
    expect(game.score()).toBe("");
});

test("test game winner", () => {
    const players = new Players("John", "Paul")
    const game = new TieBreaker(players);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.player2);
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.player2);
    expect(game.winner()).toBe(1);
    expect(game.isFinished()).toBe(true);
});
test("test game winner2", () => {
    const players = new Players("John", "Paul")
    const game = new TieBreaker(players);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player1);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    game.pointWonBy(players.player2);
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.player1);
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.player1);
    expect(game.winner()).toBe(0);
    expect(game.isFinished()).toBe(true);
});

