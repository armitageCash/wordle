import React from "react";
import Container from "../layout/Container";
import { Parragraph, SubTitle, Title } from "../components/Typography";
import Spacing from "../layout/Spacing";
import Grid from "../layout/Grid";
import Column from "../layout/Column";

interface IProps {
  onOk: () => void;
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
                      <Title text="8" />
                      <Parragraph text={"Jugadas"} />
                    </>
                  }
                />
                <Column
                  children={
                    <>
                      <Title text="8" />
                      <Parragraph text={"Victorias"} />
                    </>
                  }
                />
              </>
            }
          />
        }
      />
      <Parragraph text={"SIGUIENTE PALABRA"} />
      <span style={{ fontWeight: "bold" }}>
        <SubTitle text={"04:10"} align="center" />
      </span>
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
