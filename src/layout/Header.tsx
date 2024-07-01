import React from "react";
import Container from "./Container";
import Grid from "./Grid";
import Column from "./Column";
import { Title } from "../components/Typography";
import { useTheme } from "../context/theme";
import ToggleSwitch from "../components/Toggle";
import IconHelp from "../components/icons/Help";
import IconResult from "../components/icons/Result";

interface IProps {
  width: number;
  height?: number;
  children: React.ReactNode;
  showInstructions: () => void;
  showResult: () => void;
}

const Header: React.FC<IProps> = (Props: IProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.backgroundContainer,
        width: `${Props.width}px`,
        height: `${Props.height ? `${Props.height}px` : "auto"}`,
      }}
      className="rounded-lg p-4 radius-15"
    >
      <Container
        children={
          <Grid
            className="flex"
            children={
              <>
                <Column
                  children={
                    <IconHelp
                      onClick={Props.showInstructions}
                      size={25}
                      color={theme.background}
                    />
                  }
                />
                <Column
                  children={
                    <Title
                      style={{ position: "relative", marginRight: "-20px" }}
                      align="center"
                      text="WORLDDE"
                    />
                  }
                />
                <Column
                  className="text-right"
                  children={
                    <div className="flex">
                      <IconResult
                        onClick={Props.showResult}
                        size={25}
                        color={theme.background}
                      />
                      <ToggleSwitch
                        onChange={(value) => {
                          console.log(value);
                          toggleTheme();
                        }}
                      />
                    </div>
                  }
                />
              </>
            }
          />
        }
        height={20}
        width={200}
      />
    </div>
  );
};

export default Header;
