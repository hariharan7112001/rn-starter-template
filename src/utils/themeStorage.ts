import AsyncStorage from "@react-native-async-storage/async-storage";

import type { ThemeMode } from "@/theme/theme";

const STORAGE_KEY = "theme";

export async function getSavedTheme(): Promise<ThemeMode> {
  const value = await AsyncStorage.getItem(STORAGE_KEY);
  if (value === "light" || value === "dark" || value === "system") {
    return value;
  }
  return "system";
}

export async function saveTheme(theme: ThemeMode) {
  await AsyncStorage.setItem(STORAGE_KEY, theme);
}
