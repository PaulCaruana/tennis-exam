const Match = require('./match');

test('test score for specified path', () => {
    const match = Match("John", "Paul");
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

test('test match finishedscore for tie breaker', () => {
    const match = Match("John", "Paul");
    match.currentScore[0] = 5;
    match.currentScore[1] = 6;
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("John");
    expect(match.score()).toBe("6-6");
    //console.log(match.score())
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
    //console.log(match.score(), match.isMatchFinished())
    expect(match.score()).toBe("6-6, 6-7");
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    match.pointWonBy("Paul");
    expect(match.score()).toBe("6-7");
});


test('test match finished for normal set', () => {
    const match = Match("John", "Paul");
    match.currentScore[0] = 5;
    match.currentScore[1] = 4;
    match.pointWonBy("John");
    match.pointWonBy("John");
    match.pointWonBy("John");
    expect(match.isMatchFinished()).toBe(false);
    match.pointWonBy("John");
    expect(match.isMatchFinished()).toBe(true);
    expect(match.winner()).toBe(0);
 });

test('test match finished for tie breaker', () => {
    const match = Match("John", "Paul");
    match.currentScore[0] = 5;
    match.currentScore[1] = 6;
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
    expect(match.winner()).toBe(1);
});
