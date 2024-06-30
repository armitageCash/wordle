class Game {
  startTime?: Date;

  constructor() {}

  reset() {
    this.startTime = undefined;
  }

  start() {
    this.startTime = new Date();
  }
}

export default Game;
