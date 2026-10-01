import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { TextInput } from "@/components/ui/TextInput";
import { UpdateAlert } from "@/components/ui/UpdateAlert";
import { useTheme } from "@/hooks/useTheme";

export default function Index() {
  const { toggleTheme } = useTheme();
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);

  return (
    <ScrollView
      className="flex-1 bg-light-background dark:bg-dark-background"
      contentContainerClassName="gap-4 p-4"
      keyboardShouldPersistTaps="handled"
    >
      <ThemeToggle />

      <View className="rounded-xl border border-light-border bg-light-card p-4 dark:border-dark-border dark:bg-dark-card">
        <Text className="text-xl font-bold text-light-foreground dark:text-dark-foreground">
          Theme Demo
        </Text>
        <Text className="mt-2 text-light-mutedForeground dark:text-dark-mutedForeground">
          This screen automatically adapts to Light and Dark mode.
        </Text>

        <View className="mt-4 gap-3">
          <TextInput label="Name" placeholder="Enter your name" />
          <TextInput
            label="Email"
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            error="Please enter a valid email"
          />
          <TextInput label="Disabled" placeholder="Not editable" editable={false} />
        </View>

        <View className="mt-4 gap-2">
          <Button title="Toggle Theme" onPress={toggleTheme} />
          <Button title="Secondary" variant="secondary" />
          <Button title="Outline" variant="outline" />
          <Button title="Loading" loading />
          <Button
            title="Show Update Alert"
            variant="secondary"
            onPress={() => setShowUpdateAlert(true)}
          />
        </View>
      </View>

      <View className="gap-2 rounded-xl border border-light-border bg-light-surface p-4 dark:border-dark-border dark:bg-dark-surface">
        <Text className="text-light-success dark:text-dark-success">Success message</Text>
        <Text className="text-light-warning dark:text-dark-warning">Warning message</Text>
        <Text className="text-light-error dark:text-dark-error">Error message</Text>
        <Text className="text-light-info dark:text-dark-info">Info message</Text>
      </View>

      <UpdateAlert
        visible={showUpdateAlert}
        onCancel={() => setShowUpdateAlert(false)}
        onUpdate={() => {
          setShowUpdateAlert(false);
          // Start your update here, e.g. open the store link.
        }}
      />
    </ScrollView>
  );
}
