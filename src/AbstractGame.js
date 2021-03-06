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

    // eslint-disable-next-line class-methods-use-this
    score() {
        throw "Abstract class";
    }

    // eslint-disable-next-line class-methods-use-this
    winner() {
        throw "Abstract class";
    }

    isFinished() {
        return (this.winner() !== null);
    }
}
