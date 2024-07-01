import React from "react";

interface IProps {
  text: string;
  type: string;
  OnClick: () => void;
}

const Button: React.FC<IProps> = (Props: IProps) => {
  console.log("Props", Props);
  return (
    <button
      onClick={Props.OnClick}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      {Props.text}
    </button>
  );
};

export default Button;
