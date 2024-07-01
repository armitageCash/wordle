import React, { useEffect, useState, useRef, useCallback } from "react";
import { ThemeProvider, useTheme } from "./context/theme";
import styles from "./styles.module.css";
import Header from "./layout/Header";
import Instructions from "./views/Instructions";
import Board from "./components/Board";
import Spacing from "./layout/Spacing";
import Keyboard from "./components/Keyboard";
import Result from "./views/Result";
import ModalContent from "./components/Modal";
import CountdownTimer from "./shared/countDown";
import GameRepository from "./repository/game";
import { Game } from "./types";
import words from "./assets/json/words.json";

const gameRepository = new GameRepository();

const Content: React.FC = () => {
  const { theme } = useTheme();
  const [remainingTime, setRemainingTime] = useState<number>(5 * 60);
  const countdownTimerRef = useRef<CountdownTimer | null>(null);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [keyPressed, setKeyPressed] = useState<string>("");
  const [word, setWord] = useState<string>("");
  const [game, setGame] = useState<Game>();

  const format = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const getWord = () => {
    const dict = words as [];
    const index = Math.floor(
      Math.random() * dict.filter((w: string) => w.length == 5).length,
    );
    return dict.filter((word: string) => word.length === 5)[index];
  };

  const getGame = () => {
    const g = gameRepository.find();
    if (g) {
      setGame(g);
    }

    if (!g) {
      setShowInstructions(!showInstructions);
    }
  };

  const tick = (time: number) => {
    setRemainingTime(time);
  };

  const end = () => {
    setShowResult(!showResult);
    console.log("selected", word);
  };

  useEffect(() => {
    getGame();
    countdownTimerRef.current = new CountdownTimer(1, tick, end);
    if (word) {
      console.log("Word updated:", word);
      // Aquí puedes realizar cualquier acción adicional cuando la palabra cambie
    }
  }, [word]);

  const startTimer = () => {
    countdownTimerRef.current?.start();
  };

  // Usar useCallback para memorizar la función onKeyPress
  const handleKeyPress = useCallback((value: string) => {
    setKeyPressed(value);
  }, []);

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
        <Board
          onFailGuess={() => {
            setShowResult(true);
          }}
          onCorrectGuess={() => {
            setShowResult(true);
          }}
          word={word}
          keyPressed={keyPressed}
          size="4"
          title={"Wordle"}
        />
        <Spacing size={44} />
        <Keyboard width={640} onKeyPress={handleKeyPress} />
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
                <Instructions
                  onPlayButton={() => {
                    const selectedWord = getWord();
                    setWord(selectedWord);

                    console.log("word", selectedWord);

                    if (game) {
                      setShowInstructions(false);
                      return startTimer();
                    }

                    const newGame: Game = {
                      games: 0,
                      win: 0,
                      word: selectedWord,
                      time: new Date().toISOString(),
                    };

                    gameRepository.create(newGame);
                    setShowInstructions(!showInstructions);
                    startTimer();
                    setGame(game);
                  }}
                />
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
              content={
                <Result game={game} onOk={() => setShowResult(!showResult)} />
              }
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
