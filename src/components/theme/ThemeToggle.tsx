import { Pressable, Text, View } from "react-native";

import { useTheme } from "@/hooks/useTheme";
import type { ThemeMode } from "@/theme";

const options: { label: string; value: ThemeMode }[] = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

export function ThemeToggle() {
  const { isDark, setTheme } = useTheme();
  const theme = isDark ? "dark" : "light";

  return (
    <View className="flex-row rounded-lg border border-light-border bg-light-secondary p-1 dark:border-dark-border dark:bg-dark-secondary">
      {options.map((option) => {
        const isSelected = theme === option.value;

        return (
          <Pressable
            key={option.value}
            onPress={() => setTheme(option.value)}
            className={`flex-1 items-center rounded-md py-2 ${isSelected ? "bg-light-primary dark:bg-dark-primary" : ""}`}
          >
            <Text
              className={`font-semibold ${
                isSelected
                  ? "text-light-primaryForeground dark:text-dark-primaryForeground"
                  : "text-light-secondaryForeground dark:text-dark-secondaryForeground"
              }`}
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
