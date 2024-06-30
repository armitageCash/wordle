import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Column: React.FC<IProps> = (Props: IProps) => {
  return (
    <div className={`${Props.className ? Props.className : ""}`}>
      {Props.children}
    </div>
  );
};

export default Column;
