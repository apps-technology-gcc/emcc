import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { InputProps } from "./input.types";

const inputWrapperStyles = cva("relative flex flex-col gap-1", {
  variants: {
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    fullWidth: false,
    disabled: false,
  },
});

const inputStyles = cva(
  "rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
  {
    variants: {
      error: {
        true: "border-red-500 focus:ring-red-500",
      },
      withLeftIcon: {
        true: "pl-10",
      },
      withRightIcon: {
        true: "pr-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      error: false,
      withLeftIcon: false,
      withRightIcon: false,
      fullWidth: false,
    },
  }
);

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error,
      label,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(inputWrapperStyles({ fullWidth, disabled }))}>
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              inputStyles({
                error: !!error,
                withLeftIcon: !!leftIcon,
                withRightIcon: !!rightIcon,
                fullWidth,
              }),
              className
            )}
            disabled={disabled}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p
            className={cn("text-xs", error ? "text-red-500" : "text-gray-500")}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
