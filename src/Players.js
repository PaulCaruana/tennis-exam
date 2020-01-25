import Player from "./Player";

export default class Players {
    constructor(name1, name2) {
        this.player1 = new Player(name1);
        this.player2 = new Player(name2);
        this.players = {
            [name1]: this.player1,
            [name2]: this.player2,
        };
    }

    scores() {
        return [this.player1.score, this.player2.score];
    }

    gameScores() {
        return [this.player1.gameScore, this.player2.gameScore];
    }

    findPlayByName(name) {
        return this.players[name];
    }

    resetScore() {
        this.player1.resetScore();
        this.player2.resetScore();
    }
}
