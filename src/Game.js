import AbstractGame from "./AbstractGame";

const TENNIS_SCORES = ["0", "15", "30", "40"];
const DUEUE = "Dueue";
const ADVANTAGE = "Advantage";

export default class Game extends AbstractGame {
    score() {
        const [score1, score2] = this.players.scores();
        if (this.isFinished()) {
            return "";
        }
        if (score1 === 3 && score2 === 3) {
            return DUEUE;
        }
        if (score1 <= 3 && score2 <= 3) {
            return `${TENNIS_SCORES[score1]}-${TENNIS_SCORES[score2]}`;
        }
        if (score1 === score2) {
            return DUEUE;
        }
        if (score1 > score2) {
            return `${ADVANTAGE} ${this.players.player1.name}`;
        }
        return `${ADVANTAGE} ${this.players.player2.name}`;
    }

    winner() {
        const [score1, score2] = this.players.scores();
        if (score1 <= 3 && score2 <= 3) {
            return null;
        }
        if (score1 === 4 && score2 < 3) {
            return this.players.player1;
        }
        if (score2 === 4 && score1 < 3) {
            return this.players.player2;
        }
        // Margin of 2 after dueue
        if (score1 > score2 + 1) {
            return this.players.player1;
        }
        if (score2 > score1 + 1) {
            return this.players.player2;
        }
        return null;
    }
}
