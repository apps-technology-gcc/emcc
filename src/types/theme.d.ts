// Add type support for your custom colors
import { Config } from "tailwindcss";
// IconType is from the Icon component
declare module "tailwindcss/types/config" {
  interface ThemeConfig {
    extend?: {
      colors?: {
        primary?: Record<string, string>;
        secondary?: Record<string, string>;
        // ... other color definitions
      };
    };
  }
}
