import React from "react";
interface IProps {
  children: React.ReactNode;
}

const Row: React.FC<IProps> = (Props: IProps) => {
  console.log("props", Props);

  return <div></div>;
};

export default Row;
