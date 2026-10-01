import { useState, type Ref } from "react";
import {
  TextInput as RNTextInput,
  Text,
  View,
  type TextInputProps as RNTextInputProps,
} from "react-native";

import { useTheme } from "@/hooks/useTheme";

type TextInputProps = RNTextInputProps & {
  label?: string;
  error?: string;
  className?: string;
  ref?: Ref<RNTextInput>;
};

export function TextInput({
  label,
  error,
  className = "",
  editable = true,
  onFocus,
  onBlur,
  ...props
}: TextInputProps) {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const borderStyle = error
    ? "border-light-error dark:border-dark-error"
    : isFocused
      ? "border-light-primary dark:border-dark-primary"
      : "border-light-input dark:border-dark-input";

  return (
    <View className={`gap-1.5 ${className}`}>
      {label && (
        <Text className="font-medium text-light-foreground dark:text-dark-foreground">
          {label}
        </Text>
      )}

      <RNTextInput
        accessibilityLabel={label}
        editable={editable}
        placeholderTextColor={colors.mutedForeground}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        className={`rounded-lg border bg-light-background px-4 py-3 text-light-foreground dark:bg-dark-background dark:text-dark-foreground ${borderStyle} ${editable ? "" : "opacity-50"}`}
        {...props}
      />

      {error && (
        <Text className="text-sm text-light-error dark:text-dark-error">{error}</Text>
      )}
    </View>
  );
}
