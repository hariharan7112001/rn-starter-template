import { SymbolView } from "expo-symbols";
import { Modal, Pressable, Text, View } from "react-native";

import { useTheme } from "@/hooks/useTheme";

import { Button } from "./Button";

type UpdateAlertProps = {
  visible: boolean;
  onUpdate: () => void;
  onCancel: () => void;
  title?: string;
  message?: string;
  updateLabel?: string;
  cancelLabel?: string;
};

export function UpdateAlert({
  visible,
  onUpdate,
  onCancel,
  title = "Update available",
  message = "A new version of the app is available. Update now to get the latest features and fixes.",
  updateLabel = "Update",
  cancelLabel = "Cancel",
}: UpdateAlertProps) {
  const { colors } = useTheme();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onCancel} // Android back button
    >
      {/* Dimmed background — tapping it cancels */}
      <Pressable
        onPress={onCancel}
        className="flex-1 items-center justify-center bg-light-overlay p-6 dark:bg-dark-overlay"
      >
        {/* Card — inner Pressable stops taps from closing the alert */}
        <Pressable className="w-full max-w-sm items-center rounded-2xl border border-light-border bg-light-card p-6 dark:border-dark-border dark:bg-dark-card">
          <View className="mb-4 rounded-full bg-light-secondary p-4 dark:bg-dark-secondary">
            <SymbolView
              name={{ ios: "arrow.down.circle.fill", android: "system_update" }}
              size={40}
              tintColor={colors.primary}
            />
          </View>

          <Text className="text-center text-xl font-bold text-light-foreground dark:text-dark-foreground">
            {title}
          </Text>
          <Text className="mt-2 text-center text-light-mutedForeground dark:text-dark-mutedForeground">
            {message}
          </Text>

          <View className="mt-6 w-full flex-row gap-3">
            <Button title={cancelLabel} variant="outline" onPress={onCancel} className="flex-1" />
            <Button title={updateLabel} onPress={onUpdate} className="flex-1" />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
