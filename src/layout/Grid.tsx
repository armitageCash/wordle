import React from "react";

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

const Grid: React.FC<GridProps> = ({ children, className }) => {
  return (
    <div
      className={`${className ? className : ""} grid grid grid-cols-5 gap-4`}
    >
      {children}
    </div>
  );
};

export default Grid;
