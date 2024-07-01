import React, { useState, useEffect } from "react";
import { useTheme } from "../context/theme";
import Matrix from "../classes/Board"; // Asegúrate de que la ruta sea correcta

interface BoardProps {
  title: string;
  size: string;
  keyPressed: string;
  word: string;
  onCorrectGuess: () => void; // Nueva prop para manejar la adivinanza correcta
  onFailGuess: () => void; // Nueva prop para manejar la adivinanza correcta
}

interface Component {
  letter: string;
  color: string;
  backgroundColor: string;
}

const Bos: React.FC<Component & { textColor: string }> = ({
  letter,
  backgroundColor,
  textColor,
}) => {
  return (
    <div
      style={{
        width: "60px",
        height: "60px",
        padding: "8px",
        borderRadius: "5px",
        backgroundColor: backgroundColor,
        margin: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ color: textColor, fontSize: "24px" }}>{letter}</p>
    </div>
  );
};

const Board: React.FC<BoardProps> = ({
  keyPressed,
  word,
  onCorrectGuess,
  onFailGuess,
}) => {
  const { theme } = useTheme();

  const [matrix, setMatrix] = useState<Matrix>(
    () => new Matrix(theme.boxColor, theme.text),
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [shouldCheckRow, setShouldCheckRow] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (keyPressed && keyPressed !== "" && !gameOver) {
      addLetterToMatrix(keyPressed.toUpperCase());
    }
  }, [keyPressed, gameOver]);

  useEffect(() => {
    if (shouldCheckRow) {
      checkRow(currentRow - 1);
      setShouldCheckRow(false);
    }
  }, [shouldCheckRow]);

  const addLetterToMatrix = (letter: string) => {
    if (currentRow < 5 && currentCol < 5) {
      const newMatrix = matrix.clone();
      newMatrix.editComponent(currentRow, currentCol, {
        letter,
        color: theme.text,
        backgroundColor: theme.boxColor,
      });
      setMatrix(newMatrix);

      if (currentCol < 4) {
        setCurrentCol(currentCol + 1);
      } else {
        setShouldCheckRow(true);
        setCurrentCol(0);
        setCurrentRow(currentRow + 1);
      }
    }
  };

  const checkRow = (row: number) => {
    const newMatrix = matrix.clone();
    const secretWord = word.toUpperCase();
    const rowWord = Array(5)
      .fill(null)
      .map((_, col) => matrix.getComponent(row, col).letter)
      .join("");

    let correctCount = 0;

    for (let col = 0; col < 5; col++) {
      const letter = rowWord[col];
      if (letter === secretWord[col]) {
        newMatrix.editComponent(row, col, {
          backgroundColor: "#66A060",
          color: "white",
        });
        correctCount++;
      } else if (secretWord.includes(letter)) {
        newMatrix.editComponent(row, col, {
          backgroundColor: "#CEB02C",
          color: "black",
        });
      } else {
        newMatrix.editComponent(row, col, {
          backgroundColor: "#939B9F",
          color: "white",
        });
      }
    }

    setMatrix(newMatrix);

    if (correctCount === 5) {
      setGameOver(true);
      onCorrectGuess();
    } else if (row === 4) {
      setGameOver(true);
      onFailGuess();
    }
  };

  const renderCell = (row: number, col: number) => {
    const component = matrix.getComponent(row, col);
    return (
      <Bos
        letter={component.letter}
        backgroundColor={component.backgroundColor}
        textColor={component.color}
        color={""}
      />
    );
  };

  const renderRow = (row: number) => {
    return (
      <div key={row} style={{ display: "flex" }}>
        {Array(5)
          .fill(null)
          .map((_, col) => renderCell(row, col))}
      </div>
    );
  };

  return (
    <div style={{ width: "auto", display: "flex", flexDirection: "column" }}>
      {Array(5)
        .fill(null)
        .map((_, row) => renderRow(row))}
    </div>
  );
};

export default Board;
