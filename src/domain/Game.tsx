class Game {
  startTime?: Date;

  constructor() {}

  reset() {
    this.startTime = undefined;
  }

  getScore() {}

  start() {
    this.startTime = new Date();
  }
}

export default Game;
