import React from 'react';

interface GridProps {
    children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }) => {
    return <div className="grid grid-rows-3 gap-4 p-4 md:grid-rows-2 lg:grid-rows-1">{children}</div>;
};

export default Grid;
