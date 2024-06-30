import React from "react";
import Box from "./Box";
import { useTheme } from "../context/theme";

interface Board {
  title: string;
  size: string;
}

const Board: React.FC<Board> = (Props: Board) => {
  const { theme } = useTheme();

  const size = 5;
  const cellSize = 300 / size;

  const renderCell = (row: number, col: number) => {
    return (
      <div style={{ margin: 4 }}>
        <Box
          key={`${row}-${col}`}
          width={cellSize}
          height={cellSize}
          defaultColor={theme.boxColor}
          label=""
          value=""
          color="#6AAA64"
        />
      </div>
    );
  };

  const renderRow = (row: number) => {
    return (
      <div key={row} style={{ display: "flex" }}>
        {Array(size)
          .fill(null)
          .map((_, col) => renderCell(row, col))}
      </div>
    );
  };

  return (
    <div style={{ width: "auto", display: "flex", flexDirection: "column" }}>
      {Array(size)
        .fill(null)
        .map((_, row) => renderRow(row))}
    </div>
  );
};

export default Board;
