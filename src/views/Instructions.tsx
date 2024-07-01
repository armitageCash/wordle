import React from "react";
import Box from "../components/Box";
import Container from "../layout/Container";
import Spacing from "../layout/Spacing";
import { Title, Parragraph, SubTitle } from "../components/Typography";
import Column from "../layout/Column";
import Grid from "../layout/Grid";
import { useTheme } from "../context/theme";

interface IProps {
  onPlayButton: () => void;
}

const Instructions: React.FC<IProps> = (Props: IProps) => {
  const { theme } = useTheme();

  return (
    <div>
      <Title text={"Cómo jugar"} />
      <Container
        className="p-4"
        children={
          <>
            <Parragraph
              align="left"
              text="Adivina la palabra oculta en cinco intentos."
            />
            <Parragraph
              align="left"
              text="Cada intento debe ser una palabra válida de 5 letras."
            />
            <Parragraph
              align="left"
              text="Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra."
            />
            <Spacing size={4} />
            <SubTitle align="left" text={"Ejemplos"} />
            <Spacing size={8} />
            <Grid
              className="flex"
              size={5}
              children={Array.from(["G", "A", "T", "O", "S"]).map((v, k) => (
                <Column
                  key={k as number}
                  children={
                    <Box
                      word=""
                      row={0}
                      col={0}
                      border={1}
                      textColor={theme.text}
                      color={k === 0 ? "#6AAA64" : "transparent"}
                      label={`${v}`}
                      value={`${v}`}
                      onClick={function (value: string): void {
                        console.log(value);
                        throw new Error("Function not implemented.");
                      }}
                    />
                  }
                />
              ))}
            />
            <Spacing size={8} />
            <Parragraph
              align="left"
              text="La letra G está en la palabra y en la posición correcta."
            />
            <Grid
              className="flex"
              size={5}
              children={Array.from(["V", "O", "C", "A", "L"]).map((v, k) => (
                <Column
                  key={k as number}
                  children={
                    <Box
                      col={0}
                      row={0}
                      word=""
                      border={1}
                      textColor={theme.text}
                      color={k === 2 ? "#CEB02C" : "transparent"}
                      label={`${v}`}
                      value={`${v}`}
                      onClick={function (value: string): void {
                        console.log(value);
                        throw new Error("Function not implemented.");
                      }}
                    />
                  }
                />
              ))}
            />
            <Spacing size={8} />
            <Parragraph
              align="left"
              text={`La letra C está en la palabra pero en la posición
                      incorrecta.`}
            />
            <Grid
              className="flex"
              size={5}
              children={Array.from(["C", "A", "N", "T", "O"]).map((v, k) => (
                <Column
                  key={k as number}
                  children={
                    <Box
                      col={0}
                      row={0}
                      word=""
                      border={1}
                      textColor={theme.text}
                      color={k === 4 ? "#939B9F" : "transparent"}
                      label={`${v}`}
                      value={`${v}`}
                      onClick={function (value: string): void {
                        console.log(value);

                        throw new Error("Function not implemented.");
                      }}
                    />
                  }
                />
              ))}
            />
            <Spacing size={8} />
            <Parragraph align="left" text="La letra O no está en la palabra." />
            <Parragraph
              align="left"
              text="Puede haber letras repetidas. Las pistas son \n independientes para cada letra."
            />
            <Parragraph
              align="center"
              text="¡Una palabra nueva cada 5 minutos!"
            />
          </>
        }
      />
      <button
        onClick={Props.onPlayButton}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded dark:bg-green-700 dark:hover:bg-green-900"
      >
        !JUGAR¡
      </button>
    </div>
  );
};

export default Instructions;
