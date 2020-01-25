import AbstractGame from "./AbstractGame";

export default class Game extends AbstractGame {
    score() {
        const [score1, score2] = this.players.scores();
        if (this.isFinished()) {
            return "";
        }
        return `${score1}-${score2}`;
    }

    winner() {
        const [score1, score2] = this.players.scores();
        if (score1 <= 6 && score2 <= 6) {
            return null;
        }
        if (score1 >= 7 && score1 > score2 + 1) {
            return this.players.getPlayer1();
        }
        if (score2 >= 7 && score2 > score1 + 1) {
            return this.players.getPlayer2();
        }
        return null;
    }
}
