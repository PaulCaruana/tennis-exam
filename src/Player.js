export default class Player {
    constructor(name) {
        this.score = 0;
        this.gameScore = 0;
        this.name = name;
    }

    getScore() {
        return this.score;
    }

    getGameScore() {
        return this.gameScore;
    }

    setGameScore(gameScore) {
        this.gameScore = gameScore;
    }

    addPoint() {
        this.score++;
    }

    addGamePoint() {
        this.gameScore++;
    }

    resetScore() {
        this.score = 0;
    }
}
