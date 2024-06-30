import React from "react";
import { useTheme } from "../context/theme";

interface IProps {
  label: string;
  onClick: (value: string) => void;
  value: string;
  width?: number;
  height?: number;
  defaultColor?: string;
  disabled?: boolean;
  textColor?: string;
  border?: number;
  color: string;
}

const Box: React.FC<IProps> = (Props: IProps) => {
  const { theme } = useTheme();
  return (
    <div
      onClick={() => Props.onClick(Props.value)}
      style={{
        width: Props.width ? `${Props.width}px` : "50px",
        height: Props.height ? `${Props.height}px` : "50px",
        borderRadius: "5px",
        border: `${Props.border ? `${Props.border}px solid` : "0"}`,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        fontWeight: 800,
        justifyContent: "center",
        backgroundColor: Props.defaultColor ? Props.defaultColor : Props.color,
        borderColor: theme.background,
      }}
    >
      <span style={{ color: Props.textColor }}>{Props.label}</span>
    </div>
  );
};

export default Box;
