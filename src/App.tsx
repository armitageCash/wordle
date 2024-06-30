import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./context/theme";
import styles from "./styles.module.css";
import Modal from "./components/Modal";
import Header from "./layout/Header";
import Instructions from "./views/Instructions";
import Result from "./components/icons/Result";
import Board from "./components/Board";
import Spacing from "./components/Spacing";
import Keyboard from "./components/Keyboard";

const Content: React.FC = () => {
  const { theme } = useTheme();
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  return (
    <>
      <div
        className={styles.wrapper}
        style={{ backgroundColor: theme.body, color: theme.text }}
      >
        <Header
          width={500}
          children={<></>}
          showInstructions={function (): void {
            setShowInstructions(!showInstructions);
          }}
          showResult={function (): void {
            setShowResult(!showResult);
          }}
        />
        <Spacing size={20} />

        <Board size="4" title={"aa"} />
        <Keyboard
          width={600}
          height={0}
          onKeyPress={(value) => {
            console.log("Preset key", value);
          }}
        />
        <Spacing size={20} />
        {/*
                <Modal
          show={showResult}
          title="Estadísticas"
          content={<Result />}
          buttons={
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              !JUGAR¡
            </button>
          }
        />
        */}
      </div>
      {showInstructions ? (
        <div className="backdrop">
          <div
            className="modal-inner"
            style={{
              backgroundColor: theme.body,
            }}
          >
            <Modal
              show={true}
              title="Cómo jugar"
              content={
                <Instructions onPlayButton={() => setShowInstructions(false)} />
              }
              buttons={
                <button
                  onClick={() => setShowInstructions(false)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  !JUGAR¡
                </button>
              }
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
};

export default App;
