import React from "react";
import { useTheme } from "../context/theme";
import "../index.css";
import Container from "./Container";

interface IProps {
  title: string;
  show: boolean;
  content: React.ReactNode;
  buttons: React.ReactNode;
}

const Modal: React.FC<IProps> = (Props: IProps) => {
  const { theme } = useTheme();
  console.log("props", Props);
  console.log("theme", theme);
  return (
    <>
      {Props.show ? (
        <div
          className="container mx-auto p-4 dark:bg-gray-800 flex flex-col items-center justify-center border border-gray-500 dark:border-gray-300 rounded-lg p-4"
          style={{ width: "500px" }}
        >
          <Container
            className="text-center p-left p-right"
            children={Props.content}
          />
        </div>
      ) : null}
    </>
  );
};

export default Modal;
