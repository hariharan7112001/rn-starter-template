import { Text, TextInput, View } from "react-native";

import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/hooks/useTheme";

export default function Index() {
  const { colors, toggleTheme } = useTheme();

  return (
    <View className="flex-1 gap-4 bg-light-background p-4 dark:bg-dark-background">
      <ThemeToggle />

      <View className="rounded-xl border border-light-border bg-light-card p-4 dark:border-dark-border dark:bg-dark-card">
        <Text className="text-xl font-bold text-light-foreground dark:text-dark-foreground">
          Theme Demo
        </Text>
        <Text className="mt-2 text-light-mutedForeground dark:text-dark-mutedForeground">
          This screen automatically adapts to Light and Dark mode.
        </Text>

        <TextInput
          className="mt-4 rounded-lg border border-light-input px-4 py-3 text-light-foreground dark:border-dark-input dark:text-dark-foreground"
          placeholder="Type something..."
          placeholderTextColor={colors.mutedForeground}
        />

        <View className="mt-4 gap-2">
          <Button title="Toggle Theme" onPress={toggleTheme} />
          <Button title="Secondary" variant="secondary" />
          <Button title="Outline" variant="outline" />
          <Button title="Loading" loading />
        </View>
      </View>

      <View className="gap-2 rounded-xl border border-light-border bg-light-surface p-4 dark:border-dark-border dark:bg-dark-surface">
        <Text className="text-light-success dark:text-dark-success">Success message</Text>
        <Text className="text-light-warning dark:text-dark-warning">Warning message</Text>
        <Text className="text-light-error dark:text-dark-error">Error message</Text>
        <Text className="text-light-info dark:text-dark-info">Info message</Text>
      </View>
    </View>
  );
}
