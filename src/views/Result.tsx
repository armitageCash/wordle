import React from "react";
import Container from "../layout/Container";
import { Parragraph, SubTitle, Title } from "../components/Typography";
import Spacing from "../layout/Spacing";
import Grid from "../layout/Grid";
import Column from "../layout/Column";
import { Game } from "../types";

interface IProps {
  onOk: () => void;
  game?: Game;
  timer?: string;
}

const Result: React.FC<IProps> = (Props: IProps) => {
  return (
    <div>
      <Spacing size={8} />
      <Title text={"Estadísticas"} />
      <Spacing size={8} />
      <Container
        className="p-8"
        children={
          <Grid
            className="flex"
            size={4}
            children={
              <>
                <Column
                  children={
                    <>
                      {Props.game ? (
                        <Title text={Props.game?.games.toString()} />
                      ) : (
                        <Title text={"0"} />
                      )}
                      <Parragraph text={"Jugadas"} />
                    </>
                  }
                />
                <Column
                  children={
                    <>
                      {Props.game ? (
                        <Title text={Props.game?.win.toString()} />
                      ) : (
                        <Title text={"0"} />
                      )}
                      <Parragraph text={"Victorias"} />
                    </>
                  }
                />
              </>
            }
          />
        }
      />
      {Props.game && Props.game?.status === "lose" ? (
        <Parragraph
          children={
            <span style={{ fontSize: "14px", fontWeight: "bold" }}>
              {Props.game.word?.toUpperCase() ?? ""}
            </span>
          }
          text={`La palabra era: `}
        />
      ) : null}
      <Parragraph text={"SIGUIENTE PALABRA"} />
      {Props.timer && Props.game?.status === "lose" ? (
        <span style={{ fontWeight: "bold" }}>
          <SubTitle text={Props.timer} align="center" />
        </span>
      ) : null}
      <Spacing size={8} />
      <button
        onClick={Props.onOk}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded dark:bg-green-700 dark:hover:bg-green-900"
      >
        Aceptar
      </button>
    </div>
  );
};

export default Result;
