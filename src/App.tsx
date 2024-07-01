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
import GameRepository from "./repository/game";
import { Game } from "./types";
import words from "./assets/json/words.json";
import Countdown from "./components/Countdown";

const gameRepository = new GameRepository();

const Content: React.FC = () => {
  const { theme } = useTheme();
  const [remainingTime, setRemainingTime] = useState<number>(5 * 60);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [keyPressed, setKeyPressed] = useState<string>("");
  const [usedLetters, setUsedLetters] = useState<{ [key: string]: string }>({});
  const [keyUsed, setkeyUsed] = useState<{ [key: string]: string }>();
  const [word, setWord] = useState<string>("");
  const [game, setGame] = useState<Game>();

  const format = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const getWord = useCallback(() => {
    const dict = words as string[];
    const filteredWords = dict.filter((w: string) => w.length === 5);
    const index = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[index]
      .normalize("NFD")
      .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
      .normalize();
  }, []);

  const getGame = useCallback(() => {
    const g = gameRepository.find();
    if (g) {
      setGame(g);
      startTimer();
    } else {
      setShowInstructions(true);
    }
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    const endTime = Date.now() + remainingTime * 1000;

    timerRef.current = setInterval(() => {
      const newRemainingTime = Math.max(
        0,
        Math.round((endTime - Date.now()) / 1000),
      );
      setRemainingTime(newRemainingTime);

      if (newRemainingTime === 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        end();
      }
    }, 1000);
  }, [remainingTime]);

  const end = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setRemainingTime(5 * 60); // Reset timer
    setShowResult(false); // Close the result modal
    getGame();
    const newWord = getWord();
    console.log("new keyword", newWord);
    setWord(newWord);
    setUsedLetters({});
    setKeyPressed("");
  }, [getGame, getWord]);

  useEffect(() => {
    getGame();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [getGame]);

  useEffect(() => {
    if (word) {
      startTimer();
    }
  }, [word, startTimer]);

  const handleKeyPress = useCallback((value: string) => {
    setKeyPressed(value);
  }, []);

  const handleGameEnd = useCallback(
    (status: "win" | "lose") => {
      if (timerRef.current) clearInterval(timerRef.current);
      setShowResult(true);
      const g: Game = {
        games: (game?.games || 0) + 1,
        word: word,
        win: status === "win" ? (game?.win || 0) + 1 : game?.win || 0,
        status: status,
      };

      setGame(g);
      gameRepository.update(g);
    },
    [game, word],
  );

  return (
    <>
      <div
        className={styles.wrapper}
        style={{ backgroundColor: theme.body, color: theme.text }}
      >
        <Spacing size={10} />
        <Countdown time={remainingTime} format={format} />
        <Header
          width={500}
          children={<></>}
          showInstructions={() => setShowInstructions(true)}
          showResult={() => setShowResult(true)}
        />
        <Spacing size={20} />
        <Board
          OnKeyAdd={(v) => {
            setkeyUsed(v);
          }}
          onResetGame={() => {}}
          onFailGuess={() => handleGameEnd("lose")}
          onCorrectGuess={() => handleGameEnd("win")}
          word={word}
          keyPressed={keyPressed}
        />
        <Spacing size={44} />
        <Keyboard
          keyUsed={keyUsed}
          usedLetters={[]}
          width={640}
          onKeyPress={handleKeyPress}
        />
      </div>
      {showInstructions && (
        <div className="backdrop">
          <div
            className="modal-inner"
            style={{
              backgroundColor: theme.backgroundContainer,
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

                    const newGame: Game = {
                      games: game ? game.games + 1 : 0,
                      win: game ? game.win : 0,
                      word: selectedWord,
                      time: new Date().toISOString(),
                      status: "",
                    };

                    gameRepository.create(newGame);
                    setGame(newGame);
                    setShowInstructions(false);
                    setRemainingTime(5 * 60);
                    startTimer();
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
              backgroundColor: theme.backgroundContainer,
            }}
          >
            <ModalContent
              show={showResult}
              title="Estadísticas"
              content={
                <Result
                  game={game}
                  timer={format(remainingTime)}
                  onOk={() => {
                    setShowResult(false);
                    if (game?.win) {
                      startTimer();
                    }
                  }}
                />
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
