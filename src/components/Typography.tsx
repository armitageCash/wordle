import React from "react";
import { useTheme } from "../context/theme";

interface IProps {
  text: string;
  align?: string;
  children?: React.ReactNode;
}

const Parragraph: React.FC<IProps> = (Props: IProps) => {
  const { isDark, theme } = useTheme();

  return (
    <div className="">
      <p
        style={{ color: theme.text }}
        className={`text-base mb-4 paragraph ${isDark ? "text-gray-300" : "text-gray-700"}
          ${Props.align === "left" && "text-left"}
          ${Props.align === "center" && "text-center"}
          ${Props.align === "right" && "text-right"}
        `}
      >
        {Props.text}
        {Props.children ? Props.children : null}
      </p>
    </div>
  );
};
interface IProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

const Title: React.FC<IProps> = (Props: IProps) => {
  const { isDark, theme } = useTheme();

  return (
    <div className={Props.className}>
      <h1
        style={{ ...Props.style, color: theme.text }}
        className={`${isDark ? "text-2xl font-bold" : "text-2xl font-bold"}
           ${Props.align === "left" && "text-left"}
          ${Props.align === "center" && "text-center"}
          ${Props.align === "right" && "text-right"}
        `}
      >
        {Props.text}
      </h1>
    </div>
  );
};

const SubTitle: React.FC<IProps> = (Props: IProps) => {
  const { isDark, theme } = useTheme();

  return (
    <div>
      <h6
        style={{ color: theme.text }}
        className={`${isDark ? "font-bold " : "font-bold"}
          ${Props.align === "left" && "text-left"}
          ${Props.align === "center" && "text-center"}
          ${Props.align === "right" && "text-right"}
        `}
      >
        {Props.text}
      </h6>
    </div>
  );
};

export { Parragraph, Title, SubTitle };
