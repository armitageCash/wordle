import React from "react";
import { useTheme } from "../context/theme";

interface IProps {
  label: string;
  onClick: (value: string) => void;
  value: string;
  word: string;
  row: number;
  col: number;
  width?: number;
  height?: number;
  defaultColor?: string;
  disabled?: boolean;
  textColor?: string;
  border?: number;
  color: string;
  onKeyPressed?: (key: string) => void;
  style?: React.CSSProperties;
}

const Box: React.FC<IProps> = ({
  label,
  onClick,
  value,
  width,
  height,
  defaultColor,
  disabled,
  textColor,
  border,
  color,
  style,
}: IProps) => {
  const { theme } = useTheme();

  return (
    <div
      onClick={() => onClick(value)}
      style={{
        ...style,
        width: width ? `${width}px` : "50px",
        height: height ? `${height}px` : "50px",
        borderRadius: "5px",
        border: `${border ? `${border}px solid` : "0"}`,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        fontWeight: 800,
        justifyContent: "center",
        backgroundColor: disabled
          ? "#CCCCCC"
          : defaultColor
            ? defaultColor
            : color,
        borderColor: theme.background,
      }}
    >
      <span style={{ color: textColor ? textColor : theme.text }}>{label}</span>
    </div>
  );
};

export default Box;
