interface Component {
  letter: string;
  color: string;
  backgroundColor: string;
}

class Matrix {
  private matrix: Component[][];

  constructor(defaultBackgroundColor: string, defaultTextColor: string) {
    this.matrix = Array(5)
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
    return this.matrix[row][col];
  }

  setComponent(row: number, col: number, component: Component): void {
    this.matrix[row][col] = component;
  }

  editComponent(
    row: number,
    col: number,
    attributes: Partial<Component>,
  ): void {
    if (row >= 0 && row < 5 && col >= 0 && col < 5) {
      this.matrix[row][col] = { ...this.matrix[row][col], ...attributes };
    } else {
      console.error("Posición fuera de los límites de la matriz");
    }
  }

  moveUp(row: number, col: number): void {
    if (row > 0) {
      [this.matrix[row][col], this.matrix[row - 1][col]] = [
        this.matrix[row - 1][col],
        this.matrix[row][col],
      ];
    }
  }

  moveDown(row: number, col: number): void {
    if (row < 4) {
      [this.matrix[row][col], this.matrix[row + 1][col]] = [
        this.matrix[row + 1][col],
        this.matrix[row][col],
      ];
    }
  }

  moveLeft(row: number, col: number): void {
    if (col > 0) {
      [this.matrix[row][col], this.matrix[row][col - 1]] = [
        this.matrix[row][col - 1],
        this.matrix[row][col],
      ];
    }
  }

  moveRight(row: number, col: number): void {
    if (col < 4) {
      [this.matrix[row][col], this.matrix[row][col + 1]] = [
        this.matrix[row][col + 1],
        this.matrix[row][col],
      ];
    }
  }

  printMatrix(): void {
    for (let row = 0; row < 5; row++) {
      let rowStr = "";
      for (let col = 0; col < 5; col++) {
        const component = this.matrix[row][col];
        rowStr += `[${component.letter}:${component.color}] `;
      }
      console.log(rowStr);
    }
  }

  clone(): Matrix {
    const newMatrix = new Matrix(
      this.matrix[0][0].backgroundColor,
      this.matrix[0][0].color,
    );
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        newMatrix.setComponent(row, col, { ...this.getComponent(row, col) });
      }
    }
    return newMatrix;
  }
}

export default Matrix;
