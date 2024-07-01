export interface Component {
  letter: string;
  color: string;
  backgroundColor: string;
}

class Board {
  private board: Component[][];

  constructor(defaultBackgroundColor: string, defaultTextColor: string) {
    this.board = Array(5)
      .fill(null)
      .map(() =>
        Array(5)
          .fill(null)
          .map(() => ({
            letter: "",
            color: defaultTextColor,
            backgroundColor: defaultBackgroundColor,
          })),
      );
  }

  getComponent(row: number, col: number): Component {
    return this.board[row][col];
  }

  setComponent(row: number, col: number, component: Component): void {
    this.board[row][col] = component;
  }

  editComponent(
    row: number,
    col: number,
    attributes: Partial<Component>,
  ): void {
    if (row >= 0 && row < 5 && col >= 0 && col < 5) {
      this.board[row][col] = { ...this.board[row][col], ...attributes };
    } else {
      console.error("Posición fuera de los límites de la matriz");
    }
  }

  moveUp(row: number, col: number): void {
    if (row > 0) {
      [this.board[row][col], this.board[row - 1][col]] = [
        this.board[row - 1][col],
        this.board[row][col],
      ];
    }
  }

  moveDown(row: number, col: number): void {
    if (row < 4) {
      [this.board[row][col], this.board[row + 1][col]] = [
        this.board[row + 1][col],
        this.board[row][col],
      ];
    }
  }

  moveLeft(row: number, col: number): void {
    if (col > 0) {
      [this.board[row][col], this.board[row][col - 1]] = [
        this.board[row][col - 1],
        this.board[row][col],
      ];
    }
  }

  moveRight(row: number, col: number): void {
    if (col < 4) {
      [this.board[row][col], this.board[row][col + 1]] = [
        this.board[row][col + 1],
        this.board[row][col],
      ];
    }
  }

  printMatrix(): void {
    for (let row = 0; row < 5; row++) {
      let rowStr = "";
      for (let col = 0; col < 5; col++) {
        const component = this.board[row][col];
        rowStr += `[${component.letter}:${component.color}] `;
      }
      console.log(rowStr);
    }
  }

  clone(): Board {
    const newMatrix = new Board(
      this.board[0][0].backgroundColor,
      this.board[0][0].color,
    );
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        newMatrix.setComponent(row, col, { ...this.getComponent(row, col) });
      }
    }
    return newMatrix;
  }
}

export default Board;
