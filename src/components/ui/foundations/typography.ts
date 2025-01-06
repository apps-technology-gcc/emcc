import { textVariants } from "../elements/Text";
export type { TextProps } from "../elements/Text";

export const typography = {
  variants: textVariants,
  fonts: {
    poppins: "poppins",
    tinos: "tinos",
  },
} as const;
