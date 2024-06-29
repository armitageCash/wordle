import React from "react";
import { useTheme } from "../context/theme";

interface IProps {
  label: string;
  value: string;
  defaultColor?: string;
  disabled?: boolean;
  color?: string;
}

const Box: React.FC<IProps> = (Props: IProps) => {
  const { theme } = useTheme();
  console.log("props", Props);
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "5px",
        border: "1px solid",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        fontWeight: 800,
        justifyContent: "center",
        backgroundColor: Props.color,
        borderColor: theme.background,
      }}
    >
      {Props.label}
    </div>
  );
};

export default Box;
