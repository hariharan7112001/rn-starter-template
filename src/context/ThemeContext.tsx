import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { createContext, useEffect, useState, type ReactNode } from "react";

import { getSavedTheme, saveTheme } from "@/utils/themeStorage";

import { Colors } from "@/theme/colors";
import type { ThemeColors, ThemeMode } from "@/theme/theme";

type ThemeContextType = {
  theme: ThemeMode;
  isDark: boolean;
  colors: ThemeColors;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // NativeWind's color scheme controls the `dark:` classes.
  const { colorScheme, setColorScheme } = useColorScheme();
  const [theme, setThemeState] = useState<ThemeMode>("system");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load the saved theme when the app starts.
  useEffect(() => {
    getSavedTheme()
      .then((savedTheme) => {
        setColorScheme(savedTheme);
        setThemeState(savedTheme);
      })
      .finally(() => setIsLoaded(true));
  }, [setColorScheme]);

  const isDark = colorScheme === "dark";

  const setTheme = (newTheme: ThemeMode) => {
    setColorScheme(newTheme);
    setThemeState(newTheme);
    saveTheme(newTheme);
  };

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // Wait for the saved theme so the wrong theme doesn't flash on startup.
  if (!isLoaded) return null;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        colors: isDark ? Colors.dark : Colors.light,
        setTheme,
        toggleTheme,
      }}
    >
      <NavigationThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
        {children}
        <StatusBar style={isDark ? "light" : "dark"} />
      </NavigationThemeProvider>
    </ThemeContext.Provider>
  );
}
