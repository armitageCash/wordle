import React from "react";

interface Board {
    title: String,
    size: Number,
}

const Board: React.FC<Board> = (Props: Board) => {
    const size = 5;
    const cellSize = 400 / size;

    const renderCell = (row: number, col: number) => {
        return (
            <div
                key={`${row}-${col}`}
                style={{
                    width: cellSize,
                    height: cellSize,
                    border: '1px solid black',
                    display: 'inline-block',
                    boxSizing: 'border-box',
                }}
            />
        );
    };

    const renderRow = (row: number) => {
        return (
            <div key={row} style={{ height: cellSize }}>
                {Array(size).fill(null).map((_, col) => renderCell(row, col))}
            </div>
        );
    };

    return (
        <div style={{ width: 400, height: 400, border: '1px solid black' }}>
            {Array(size).fill(null).map((_, row) => renderRow(row))}
        </div>
    );
}

export default Board;