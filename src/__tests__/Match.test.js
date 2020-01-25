import Match from "../Match";

test("test score for specified path", () => {
    const match = new Match("John", "Paul");
    match.pointWonBy("John");

    match.pointWonBy("Paul");
    expect(match.score()).toBe("0-0, 15-15");

    match.pointWonBy("John");
    match.pointWonBy("John");
    expect(match.score()).toBe("0-0, 40-15");

    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    expect(match.score()).toBe("0-0, Dueue");

    match.pointWonBy("John");
    expect(match.score()).toBe("0-0, Advantage John");

    match.pointWonBy("John");
    expect(match.score()).toBe("1-0");
});

test("test match finished score for tie breaker", () => {
    const match = new Match("John", "Paul");
    match.players.player1.gameScore = 5;
    match.players.player2.gameScore = 6;
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("John");
    expect(match.score()).toBe("6-6");
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    expect(match.score()).toBe("6-6, 6-7");
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    expect(match.score()).toBe("6-7");
});


test("test match finished for normal set", () => {
    const match = new Match("John", "Paul");
    match.players.player1.gameScore = 5;
    match.players.player2.gameScore = 4;
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("John");
    expect(match.isMatchFinished()).toBe(false);
    match.pointWonBy("John");
    expect(match.isMatchFinished()).toBe(true);
    expect(match.winner()).toBe(match.players.player1);
});

test("test match finished with 7-5 set", () => {
    const match = new Match("John", "Paul");
    match.players.player1.gameScore = 6;
    match.players.player2.gameScore = 5;
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("John");
    expect(match.isMatchFinished()).toBe(false);
    match.pointWonBy("John");
    expect(match.isMatchFinished()).toBe(true);
    expect(match.winner()).toBe(match.players.player1);
});

test("test match finished for tie breaker", () => {
    const match = new Match("John", "Paul");
    match.players.player1.gameScore = 5;
    match.players.player2.gameScore = 6;
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    expect(match.isMatchFinished()).toBe(false);
    match.pointWonBy("Paul");
    expect(match.isMatchFinished()).toBe(true);
    expect(match.winner()).toBe(match.players.player2);
});
