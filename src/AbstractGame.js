export default class AbstractGame {
    constructor(players) {
        this.players = players;
        players.resetScore();
    }

    hasStarted() {
        return this.started;
    }

    pointWonBy(player) {
        this.started = true;
        player.addPoint();
    }

    score() {
        throw "Abstract class";
    }

    winner() {
        throw "Abstract class";
    }

    isFinished() {
        return this.winner() > -1;
    }
}
