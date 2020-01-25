function TieBreaker() {

    const currentScore = [0, 0];
    let started = false;

    const hasStarted = () => (started);

    const point = (player) => {
        started = true;
        currentScore[player]++
    };

    const score = () => {
        const [score1, score2] = currentScore;
        if (isFinished()) {
            return ""
        }
        return `${score1}-${score2}`;
    };

    const winner = () => {
        const [score1, score2] = currentScore;
        if (score1 <= 6 && score2 <= 6) {
            return -1;
        }
        if (score1 >= 7 && score1 > score2 + 1) {
            return 0
        }
        if (score2 >= 7 && score2 > score1 + 1) {
            return 1
        }
        return -1;
    }
    const isFinished = () => (winner() > -1);

    return {
        currentScore, point, score, winner, isFinished, hasStarted
    }

}

module.exports = TieBreaker;