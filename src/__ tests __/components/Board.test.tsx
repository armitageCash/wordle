import { render, fireEvent } from "@testing-library/react";
import Board from "../../components/Board";

describe("Board component", () => {
  // Mocking props
  const props = {
    keyPressed: "",
    word: "HELLO",
    onCorrectGuess: jest.fn(),
    onFailGuess: jest.fn(),
    onResetGame: jest.fn(),
    OnKeyAdd: jest.fn(),
  };

  it("renders without crashing", () => {
    render(<Board {...props} />);
  });

  it("renders 5 rows and 5 columns of boxes", () => {
    const { getAllByTestId } = render(<Board {...props} />);
    const boxes = getAllByTestId("box-component");
    expect(boxes).toHaveLength(25); // 5 rows * 5 columns
  });

  it("adds letter to matrix and evaluates correctly on key press", () => {
    const { getByTestId } = render(<Board {...props} />);
    const box00 = getByTestId("box-component-0-0");

    fireEvent.keyPress(box00, { key: "h", code: "KeyH" });

    // You can add assertions here to check if the letter 'H' was correctly added and evaluated
    expect(props.OnKeyAdd).toHaveBeenCalledWith({ "0,0": "#FFFFFF" });
  });

  // Add more tests as needed for other functionalities of the Board component
});
