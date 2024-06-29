import React from "react";
import Grid from "./Grid";


const Layout: React.FC = () => {
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
        <Grid>
            <div style={{ width: 400, height: 400, border: '1px solid black' }}>
                {Array(size).fill(null).map((_, row) => renderRow(row))}
            </div>
            <div className="bg-blue-500 text-white p-4">Item 1</div>
            <div className="bg-green-500 text-white p-4">Item 2</div>
            <div className="bg-red-500 text-white p-4">Item 3</div>
        </Grid>
    );
}

export default Layout;