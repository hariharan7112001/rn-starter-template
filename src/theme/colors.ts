// Change these values to rebrand the app.
// Used by tailwind.config.js, so classes like `bg-light-primary dark:bg-dark-primary` use them.

const light = {
  background: "#FFFFFF",
  surface: "#F8FAFC",
  card: "#FFFFFF",
  foreground: "#0F172A",
  mutedForeground: "#64748B",
  primary: "#2563EB",
  primaryForeground: "#FFFFFF",
  secondary: "#F1F5F9",
  secondaryForeground: "#0F172A",
  border: "#CBD5E1",
  input: "#64748B",
  success: "#15803D",
  warning: "#B45309",
  error: "#DC2626",
  info: "#0369A1",
};

const dark: typeof light = {
  background: "#020617",
  surface: "#0F172A",
  card: "#0F172A",
  foreground: "#F8FAFC",
  mutedForeground: "#94A3B8",
  primary: "#60A5FA",
  primaryForeground: "#020617",
  secondary: "#1E293B",
  secondaryForeground: "#F8FAFC",
  border: "#334155",
  input: "#64748B",
  success: "#4ADE80",
  warning: "#FBBF24",
  error: "#F87171",
  info: "#38BDF8",
};

export const Colors = { light, dark };
