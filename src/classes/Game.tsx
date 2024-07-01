class Games {
  remaining?: Date;

  constructor() {}

  reset() {
    this.remaining = undefined;
  }

  getScore() {}

  start() {
    this.remaining = new Date();
  }
}

export default Games;
