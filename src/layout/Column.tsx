import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Column: React.FC<IProps> = (Props: IProps) => {
  console.log("props", Props);
  return (
    <div>
      <div className={`${Props.className ? Props.className : ""}`}>
        {Props.children}
      </div>
    </div>
  );
};

export default Column;
