const Game = require("./game");
const TieBreaker = require("./tieBreaker");

function Match(player1, player2) {
    const players = [player1, player2];
    const currentScore = [0, 0];
    let currentGame = Game(player1, player2);

    const pointWonBy = (player) => {
        if (isMatchFinished()) {
            return;
        }
        const id = players.indexOf(player);
        currentGame.point(id);

        if (currentGame.isFinished()) {
            currentScore[id]++;
            currentGame = createNewGame();
        }
    };

    const createNewGame = () => {
        const [score1, score2] = currentScore;
        if (score1 === 6 && score2 === 6) {
            return TieBreaker();
        }
        return Game(player1, player2);
    };

    const score = () => {
        const [score1, score2] = currentScore;
        if (!isMatchFinished() && currentGame.hasStarted()) {
            return `${score1}-${score2}, ${currentGame.score()}`;
        }
        return `${score1}-${score2}`;
    };

    const winner = () => {
        const [score1, score2] = currentScore;
        if ((score1 < 6 && score2 < 6) || (score1 === 6 && score2 === 6)) {
            return -1;
        }
        if ((score1 === 6 && score1 > score2 + 1) || score1 === 7) {
            return 0;
        }
        if ((score2 === 6 && score2 > score1 + 1) || score2 === 7) {
            return 1;
        }
        return -1;
    }
    const isMatchFinished = () => (winner() > -1);

    return {
        currentScore, pointWonBy, score, winner, isMatchFinished
    }
}
module.exports = Match;