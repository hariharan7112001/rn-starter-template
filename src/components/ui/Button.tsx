import { ActivityIndicator, Pressable, Text, type PressableProps } from "react-native";

import { useTheme } from "@/hooks/useTheme";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  loading?: boolean;
  className?: string;
};

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-light-primary dark:bg-dark-primary",
  secondary: "bg-light-secondary dark:bg-dark-secondary",
  outline: "border border-light-border dark:border-dark-border",
};

const textStyles: Record<ButtonVariant, string> = {
  primary: "text-light-primaryForeground dark:text-dark-primaryForeground",
  secondary: "text-light-secondaryForeground dark:text-dark-secondaryForeground",
  outline: "text-light-foreground dark:text-dark-foreground",
};

export function Button({
  title,
  variant = "primary",
  loading = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const { colors } = useTheme();
  const isDisabled = disabled || loading;

  const loaderColor =
    variant === "primary" ? colors.primaryForeground : colors.foreground;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      className={`items-center justify-center rounded-lg px-4 py-3 active:opacity-80 ${buttonStyles[variant]} ${isDisabled ? "opacity-50" : ""} ${className}`}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={loaderColor} />
      ) : (
        <Text className={`font-semibold ${textStyles[variant]}`}>{title}</Text>
      )}
    </Pressable>
  );
}
