import React from "react";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
}

const Grid: React.FC<GridProps> = ({ children, className, size }) => {
  return (
    <div
      className={`${className ? className : ""} grid grid grid-cols-${size ? size : "5"} gap-4`}
    >
      {children}
    </div>
  );
};

export default Grid;
