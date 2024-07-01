import React, { useCallback, useEffect } from "react";
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
        if (key === "ENTER") {
          // Manejar la acción de ENTER
          console.log("Acción de ENTER");
        } else if (key === "⌫") {
          // Manejar la acción de borrar
          console.log("Acción de borrar");
        } else {
          // Para todas las demás teclas, enviar el carácter
          Props.onKeyPress(key);
        }
      }
    },
    [Props.onKeyPress],
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
              col={0}
              row={0}
              word=""
              onClick={() => handleKeyPress(key)}
              key={index}
              width={key === "ENTER" || key === "⌫" ? 70 : 50}
              color={key === "D" ? "#6AAA64" : theme.text}
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
