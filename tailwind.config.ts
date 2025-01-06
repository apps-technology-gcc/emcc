import { colors } from "./src/components/ui/foundations/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core colors
        primaryMain: colors.primaryMain,
        secondary: colors.green, // Using green palette for secondary
        success: colors.success,
        danger: colors.danger,
        warning: colors.warning,
        gray: colors.gray,
        pink: colors.pink,

        // Single value colors
        white: colors.white,
        black: colors.black,

        // Background and border utilities
        background: colors.background,
        border: colors.border,

        neutralDark: colors.neutralDark,
        neutral: colors.neutral,
        neutralLight: colors.neutralLight,

        // Gradients
        gradient: {
          one: colors.gradient_one.primary,
          two: colors.gradient_two.primary,
          three: colors.gradient_three.primary,
          home: colors.gradient_home.primary,
          podcast: colors.gradient_podcast.primary,
          "resources-1": colors.resources_bg_one.primary,
          "resources-2": colors.resources_bg_two.primary,
          "resources-3": colors.resources_bg_three.primary,
        },

        primary: {
          50: "#F2F6FC",
          100: "#DBE2FF",
          200: "#BECAFF",
          300: "#97A7FF",
          400: "#6E76FF",
          500: "#504CFF",
          600: "#5340FF",
          700: "#3720E2",
          800: "#2D1DB6",
          900: "#29208F",
          950: "#1A1353",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          300: "#d1d5db",
          400: "#9ca3af",
          700: "#374151",
        },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to right, var(--primary-600), var(--primary-700))",
        "gradient-one": `${colors.gradient_one.primary}`,
        "gradient-two": `${colors.gradient_two.primary}`,
      },
      borderImage: {
        "gradient-primary":
          "linear-gradient(to right, var(--primary-600), var(--primary-700)) 1",
        "gradient-one": `${colors.gradient_one.primary}`,
      },
      backgroundClip: {
        text: "text",
        border: "border",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    // require("tailwindcss-bg-clip")(),
    // function ({ addUtilities }) {
    //   addUtilities({
    //     ".border-gradient-primary": {
    //       "border-image":
    //         "linear-gradient(to right, var(--primary-600), var(--primary-700)) 1",
    //     },
    //     ".border-gradient-one": {
    //       "border-image": `${colors.gradient_one.primary}`,
    //     },
    //   });
    // },
  ],
};
