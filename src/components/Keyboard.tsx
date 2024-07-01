import React, { useCallback, useEffect, useState } from "react";
import Container from "../layout/Container";
import { useTheme } from "../context/theme";
import Box from "./Box";
import Spacing from "../layout/Spacing";

interface IProps {
  onKeyPress?: (key: string) => void;
  width: number;
  height?: number;
  usedLetters: string[];
}

const Keyboard: React.FC<IProps> = (Props: IProps) => {
  const { theme } = useTheme();
  const { width, height, onKeyPress, usedLetters } = Props;

  const [keyColors, setKeyColors] = useState<string[]>([]);

  useEffect(() => {
    // Inicializar los colores de las teclas
    const initialKeyColors = keys.map((key) =>
      usedLetters.includes(key) ? "#CCCCCC" : theme.text,
    );
    setKeyColors(initialKeyColors);
  }, [usedLetters, theme.text]);

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
      if (onKeyPress) {
        if (key === "ENTER") {
          console.log("Acción de ENTER");
        } else if (key === "⌫") {
          console.log("Acción de borrar");
        } else {
          onKeyPress(key);
        }
      }
    },
    [onKeyPress],
  );

  const handlePhysicalKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (keys.includes(key) && key !== "ENTER" && key !== "BACKSPACE") {
        handleKeyPress(key);
      }
    },
    [handleKeyPress, keys],
  );

  useEffect(() => {
    window.addEventListener("keydown", handlePhysicalKeyPress);
    return () => {
      window.removeEventListener("keydown", handlePhysicalKeyPress);
    };
  }, [handlePhysicalKeyPress]);

  const renderKeyColor = (key: string) => {
    const index = keys.indexOf(key);
    if (index !== -1) {
      return keyColors[index];
    }
    return theme.text;
  };

  return (
    <div
      style={{
        backgroundColor: theme.backgroundContainer,
        width: `${width}px`,
        height: `${height ? `${height}px` : "auto"}`,
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
              col={0}
              row={0}
              word=""
              onClick={() => handleKeyPress(key)}
              key={index}
              width={key === "ENTER" || key === "⌫" ? 70 : 50}
              color={renderKeyColor(key)}
              defaultColor={theme.boxColor}
              value={key}
              label={key}
              style={{}}
            />
          ))}
        </div>
      </Container>
      <Spacing size={4} />
    </div>
  );
};

export default Keyboard;
