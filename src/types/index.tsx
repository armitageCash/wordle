export interface Theme {
  body: string;
  text: string;
  toggleBorder: string;
  background: string;
  backgroundContainer: string;
  boxColor: string;
}

export interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

export interface Game {
  win: number;
  games: number;
  time?: string;
  word?: string;
  status?: string;
}
