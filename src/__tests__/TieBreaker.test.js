import TieBreaker from "../TieBreaker";
import Players from "../Players";


test("test game pointWonBy increment", () => {
    const players = new Players("John", "Paul");
    const game = new TieBreaker(players);
    game.pointWonBy(players.getPlayer1());
    expect(players.getPlayer1().getScore()).toBe(1);
    expect(players.getPlayer2().getScore()).toBe(0);
    game.pointWonBy(players.getPlayer2());
    expect(players.getPlayer1().getScore()).toBe(1);
    expect(players.getPlayer2().getScore()).toBe(1);
});

test("test game score", () => {
    const players = new Players("John", "Paul");
    const game = new TieBreaker(players);
    expect(game.score()).toBe("0-0");
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    expect(game.score()).toBe("6-6");
    game.pointWonBy(players.getPlayer2());
    expect(game.score()).toBe("6-7");
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    expect(game.score()).toBe("8-7");
    game.pointWonBy(players.getPlayer1());
    expect(game.score()).toBe("");
});

test("test game winner", () => {
    const players = new Players("John", "Paul");
    const game = new TieBreaker(players);
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.getPlayer2());
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.getPlayer2());
    expect(game.winner()).toBe(players.getPlayer2());
    expect(game.isFinished()).toBe(true);
});
test("test game winner2", () => {
    const players = new Players("John", "Paul");
    const game = new TieBreaker(players);
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer1());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    game.pointWonBy(players.getPlayer2());
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.getPlayer1());
    expect(game.isFinished()).toBe(false);
    game.pointWonBy(players.getPlayer1());
    expect(game.winner()).toBe(players.player1);
    expect(game.isFinished()).toBe(true);
});