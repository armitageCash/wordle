import React, { useCallback } from "react";
import Container from "../layout/Container";
import { useTheme } from "../context/theme";
import Box from "./Box";
import Spacing from "../layout/Spacing";

interface IProps {
  onKeyPress?: (key: string) => void;
  width: number;
  height?: number;
}

const Keyboard: React.FC<IProps> = (Props: IProps) => {
  const { theme } = useTheme();

  const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Ñ",
    "ENTER",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "⌫",
  ];

  const handleKeyPress = useCallback(
    (key: string) => {
      if (Props.onKeyPress) {
        Props.onKeyPress(key);
      }
    },
    [Props.onKeyPress],
  );

  return (
    <div
      style={{
        backgroundColor: theme.backgroundContainer,
        width: `${Props.width}px`,
        height: `${Props.height ? `${Props.height}px` : "auto"}`,
        paddingRight: "20px",
      }}
      className="rounded-lg p-4 radius-15"
    >
      <Container>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            justifyContent: "center",
          }}
        >
          {keys.map((key, index) => (
            <Box
              onClick={() => handleKeyPress(key)}
              key={index}
              width={key === "ENTER" || key === "⌫" ? 70 : 50}
              color={key === "D" ? "#6AAA64" : theme.text}
              defaultColor={theme.boxColor}
              value={key}
              label={key}
              style={
                index > 9 && index < 20
                  ? { left: "24px", position: "relative" }
                  : index >= 20
                    ? { right: "15px", position: "relative" }
                    : {}
              }
            />
          ))}
        </div>
      </Container>
      <Spacing size={4} />
    </div>
  );
};

export default Keyboard;
