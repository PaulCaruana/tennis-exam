export default class Player {
    constructor(name) {
        this.score = 0;
        this.gameScore = 0;
        this.name = name;
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
