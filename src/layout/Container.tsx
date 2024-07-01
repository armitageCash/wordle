import React from "react";

interface IProps {
  width?: number;
  height?: number;
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<IProps> = (Props: IProps) => {
  return (
    <div
      className={`container mx-auto ${Props.className ? Props.className : ""}`}
    >
      {Props.children}
    </div>
  );
};
export default Container;
