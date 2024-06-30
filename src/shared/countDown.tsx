class CountdownTimer {
  private duration: number;
  private remainingTime: number;
  private intervalId: number | null;
  private tickCallback: (remainingTime: number) => void;
  private endCallback: () => void;

  constructor(
    durationInMinutes: number,
    tickCallback: (remainingTime: number) => void,
    endCallback: () => void,
  ) {
    this.duration = durationInMinutes * 60; // convert minutes to seconds
    this.remainingTime = this.duration;
    this.intervalId = null;
    this.tickCallback = tickCallback;
    this.endCallback = endCallback;
  }

  private tick() {
    if (this.remainingTime > 0) {
      this.remainingTime--;
      this.tickCallback(this.remainingTime);
    } else {
      this.stop();
      this.endCallback();
    }
  }

  start() {
    if (this.intervalId === null) {
      this.intervalId = window.setInterval(() => this.tick(), 1000);
    }
  }

  stop() {
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    this.stop();
    this.remainingTime = this.duration;
    this.tickCallback(this.remainingTime);
  }

  getRemainingTime(): number {
    return this.remainingTime;
  }
}

export default CountdownTimer;
