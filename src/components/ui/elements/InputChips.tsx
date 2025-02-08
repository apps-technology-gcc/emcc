import { cn } from "../../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { Text } from "./Text";
const baseStyles =
  "cursor-pointer inline-flex items-center justify-center gap-2.5";
const commonStyles = "px-5 py-2.5 rounded-[2px]";
const primaryStyles = "bg-primary-600 hover:bg-primary-500 text-white";
const secondaryStyles =
  "text-neutralDark bg-background border border-transparent hover:border-border";
const textStyles = "bg-transparent text-neutralDark";

const inputChipsVariants = cva(
  // Base styles
  [baseStyles],
  {
    variants: {
      variant: {
        primary: [cn(commonStyles, primaryStyles)],
        secondary: [cn(commonStyles, secondaryStyles)],
        text: [cn(commonStyles, textStyles)],
      },
      radius: {
        true: ["rounded-full"],
      },
    },
    defaultVariants: {
      variant: "primary",
      radius: false,
    },
  }
);

export interface InputChipsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputChipsVariants> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const InputChips = React.forwardRef<HTMLDivElement, InputChipsProps>(
  (
    { variant, children, className, icon, iconPosition = "left", ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(inputChipsVariants({ variant }), className)}
        {...props}
      >
        {icon && iconPosition === "left" && icon}
        <Text variants="placeholder" as="span">
          {children}
        </Text>
        {icon && iconPosition === "right" && icon}
      </div>
    );
  }
);

InputChips.displayName = "InputChips";

export default InputChips;
