import Board, { Component } from "../../classes/Board";

describe("Matrix class", () => {
  let board: Board;

  beforeEach(() => {
    board = new Board("#FFFFFF", "#000000");
  });

  it("should initialize correctly with default values", () => {
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        const component = board.getComponent(row, col);
        expect(component.letter).toBe("");
        expect(component.color).toBe("#000000");
        expect(component.backgroundColor).toBe("#FFFFFF");
      }
    }
  });

  it("should set and get a component correctly", () => {
    const newComponent: Component = {
      letter: "A",
      color: "#FF0000",
      backgroundColor: "#00FF00",
    };

    board.setComponent(2, 2, newComponent);

    const retrievedComponent = board.getComponent(2, 2);
    expect(retrievedComponent).toEqual(newComponent);
  });

  it("should edit a component correctly", () => {
    const initialComponent: Component = {
      letter: "B",
      color: "#0000FF",
      backgroundColor: "#FFFF00",
    };

    board.setComponent(3, 3, initialComponent);

    board.editComponent(3, 3, { color: "#FFFFFF" });

    const editedComponent = board.getComponent(3, 3);
    expect(editedComponent.color).toBe("#FFFFFF");
    expect(editedComponent.letter).toBe("B"); // Letter should remain unchanged
    expect(editedComponent.backgroundColor).toBe("#FFFF00"); // BackgroundColor should remain unchanged
  });

  // Agrega más pruebas según los métodos que quieras validar
});
