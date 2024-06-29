export interface Theme {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
}

export interface ThemeContextType {
    theme: Theme;
    isDark: boolean;
    toggleTheme: () => void;
}