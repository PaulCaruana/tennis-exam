import Game from "./Game";
import TieBreaker from "./TieBreaker";
import Players from "./Players";

/**
 * Please note: No Tennis Set has been included as requirements state
 * that match only contains a single set
 */
export default class Match {
    constructor(name1, name2) {
        this.players = new Players(name1, name2);
        this.currentGame = new Game(this.players);
    }

    pointWonBy(playerName) {
        if (this.isMatchFinished()) {
            return;
        }
        const player = this.players.findPlayerByName(playerName);
        this.currentGame.pointWonBy(player);

        if (this.currentGame.isFinished()) {
            player.addGamePoint();
            this.currentGame = this.gameFactory();
        }
    }

    gameFactory() {
        const [score1, score2] = this.players.gameScores();
        if (score1 === 6 && score2 === 6) {
            return new TieBreaker(this.players);
        }
        return new Game(this.players);
    }

    score() {
        const [score1, score2] = this.players.gameScores();
        if (!this.isMatchFinished() && this.currentGame.hasStarted()) {
            return `${score1}-${score2}, ${this.currentGame.score()}`;
        }
        return `${score1}-${score2}`;
    }

    winner() {
        const [score1, score2] = this.players.gameScores();
        // Game not finished yet
        if ((score1 < 6 && score2 < 6) || (score1 === 6 && score2 === 6)) {
            return null;
        }
        // Game finished eg. 6-4 or 7-5
        if ((score1 === 6 && score1 > score2 + 1) || score1 === 7) {
            return this.players.getPlayer1();
        }
        if ((score2 === 6 && score2 > score1 + 1) || score2 === 7) {
            return this.players.getPlayer2();
        }
        return null;
    }

    isMatchFinished() {
        return this.winner() !== null;
    }

    getPlayers() {
        return this.players;
    }

}
