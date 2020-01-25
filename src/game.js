function Game(player1, player2) {
    const currentScore = [0, 0];
    const TENNIS_SCORES = ["0","15", "30", "40"];
    const DUEUE = "Dueue";
    const ADVANTAGE = "Advantage";
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
        if (score1 === 3 && score2 === 3) {
            return DUEUE
        }
        if (score1 <= 3 && score2 <= 3) {
            return `${TENNIS_SCORES[score1]}-${TENNIS_SCORES[score2]}`;
        }
        if (score1 === score2) {
            return DUEUE
        }
        if (score1 > score2) {
            return `${ADVANTAGE} ${player1}`
        }
        return `${ADVANTAGE} ${player2}`
    };


    const winner = () => {
        const [score1, score2] = currentScore;
        if (score1 <= 3 && score2 <= 3) {
            return -1;
        }
        if (score1 === 4 && score2 < 3) {
            return 0
        }
        if (score2 === 4 && score1 < 3) {
            return 1
        }
        // Margin of 2 after dueue
        if (score1 > score2 + 1) {
            return 0
        }
        if (score2 > score1 + 1) {
            return 1
        }
        return -1;
    }
    const isFinished = () => (winner() > -1);

    return {
        currentScore, point, score, winner, isFinished, hasStarted
    }

}

module.exports = Game;