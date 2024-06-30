import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./context/theme";
import styles from "./styles.module.css";
import Header from "./layout/Header";
import Instructions from "./views/Instructions";
import Board from "./components/Board";
import Spacing from "./layout/Spacing";
import Keyboard from "./components/Keyboard";
import Result from "./views/Result";
import ModalContent from "./components/Modal";

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
        <Spacing size={10} />
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
        <Spacing size={44} />
        <Keyboard
          width={640}
          onKeyPress={(value) => {
            console.log("Preset key", value);
          }}
        />
      </div>
      {showInstructions && (
        <div className="backdrop">
          <div
            className="modal-inner"
            style={{
              backgroundColor: theme.body,
            }}
          >
            <ModalContent
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
      )}
      {showResult && (
        <div className="backdrop">
          <div
            className="modal-inner"
            style={{
              backgroundColor: theme.body,
            }}
          >
            <ModalContent
              show={showResult}
              title="Estadísticas"
              content={<Result onOk={() => setShowResult(!showResult)} />}
            />
          </div>
        </div>
      )}
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
