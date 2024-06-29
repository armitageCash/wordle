import React from "react";
import styles from './styles.module.css';
import { ThemeProvider, useTheme } from './context/theme';


const Content: React.FC = () => {
  const { toggleTheme, isDark, theme } = useTheme();

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: theme.body, color: theme.text }}
    >
      <h1>{'Hola Mundo'}</h1>
      <button
        className={styles.button}
        onClick={toggleTheme}
        style={{
          backgroundColor: theme.background,
          color: theme.text,
          border: `2px solid ${theme.toggleBorder}`
        }}
      >
        Cambiar a modo {isDark ? 'claro' : 'oscuro'}
      </button>
    </div>
  );
};


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  )
}

export default App;