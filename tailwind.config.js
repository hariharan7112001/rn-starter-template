// jiti (comes with Tailwind) lets this file read the TypeScript colors file.
const jiti = require("jiti")(__filename);
const { Colors } = jiti("./src/theme/colors.ts");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: Colors.light, // bg-light-background, text-light-foreground, ...
        dark: Colors.dark, // bg-dark-background, text-dark-foreground, ...
      },
    },
  },
  plugins: [],
};
