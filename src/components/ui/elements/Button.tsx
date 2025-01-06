import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { Text } from "./Text";

// Common styles
const baseStyles =
  "inline-flex text-button gap-2.5 items-center justify-center h-10 px-[30px] py-[9.5px] transition-colors";
const defaultStyle = "rounded-tl-[10px] rounded-br-[10px]";
const radiusStyle = "rounded-[30px]";

const primaryStyle =
  "bg-primary-600 hover:bg-primary-700 text-white border-primary-600 hover:border-primary-700";
const secondaryStyle =
  "bg-neutralDark hover:bg-gray-900 text-white border-neutralDark hover:border-gray-900";
const outlineStyle = "bg-transparent border-[1px] ";
const buttonVariants = cva(baseStyles, {
  variants: {
    variant: {
      default: cn(defaultStyle),
      radius: cn(radiusStyle),
    },
    btnType: {
      primary: cn(primaryStyle),
      secondary: cn(secondaryStyle),
      outline: cn(outlineStyle),
    },
    outline: {
      true: cn(outlineStyle),
    },

    size: {
      default: "h-10 px-[30px] py-[9.5px]",
      sm: "h-8 px-[20px] py-[7px] text-sm",
      lg: "h-12 px-[40px] py-[12px] text-lg",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "default",
    btnType: "primary",
    size: "default",
  },
  compoundVariants: [
    {
      btnType: "primary",
      outline: true,
      class: cn("text-primary-600", "hover:bg-primary-600 hover:text-white"),
    },
    {
      btnType: "secondary",
      outline: true,
      class: cn("text-neutralDark", "hover:bg-neutralDark hover:text-white"),
    },
  ],
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  Icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      btnType,
      size,
      disabled,
      children,
      Icon,
      outline,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            outline,
            btnType,
            size,
            disabled,
            className,
          })
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        <Text variant="button" as="span">
          {children}
        </Text>
        {Icon && <span>{Icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
