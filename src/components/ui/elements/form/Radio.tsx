"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../lib/utils";
import { textVariants } from "../Text";

const radioVariants = cva(
  // Base styles
  "appearance-none relative inline-flex shrink-0 border rounded-full transition-all focus:outline-none",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      variant: {
        default: [
          "border-neutralDark",
          "hover:border-primary-500",
          "checked:border-primary-600",
          "focus:not(:checked):ring-2 focus:not(:checked):ring-offset-2 focus:not(:checked):ring-primary-500",
          "disabled:cursor-not-allowed",
          "disabled:border-neutral-200",
          "disabled:bg-neutral-100",
        ],
        error: [
          "border-error-300",
          "hover:border-error-500",
          "checked:border-error-600",
          "focus:not(:checked):ring-2 focus:not(:checked):ring-offset-2 focus:not(:checked):ring-error-500",
        ],
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

const wrapperVariants = cva("flex items-center", {
  variants: {
    labelPosition: {
      right: "flex-row gap-2",
      bottom: "flex-col gap-1.5",
    },
  },
  defaultVariants: {
    labelPosition: "right",
  },
});

const labelVariants = cva("text-sm", {
  variants: {
    variant: {
      default: "text-neutral-700",
      error: "text-error-600",
    },
    disabled: {
      true: "text-neutral-400 cursor-not-allowed",
      false: "cursor-pointer",
    },
  },
  defaultVariants: {
    variant: "default",
    disabled: false,
  },
});

// @ts-ignore
interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radioVariants> {
  id: string;
  label?: string;
  labelPosition?: "bottom" | "right";
  error?: boolean;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      label,
      labelPosition,
      size,
      variant,
      disabled,
      error,
      className,
      ...props
    },
    ref
  ) => {
    const radioVariant = error ? "error" : variant;

    return (
      <div className={wrapperVariants({ labelPosition })}>
        <input
          id={id}
          type="radio"
          ref={ref}
          disabled={disabled}
          className={cn(
            // @ts-ignore
            radioVariants({ size, variant: radioVariant }),
            // Updated checked style with fixed 12x12 center dot
            "checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:rounded-full checked:after:bg-primary-600",
            "checked:after:h-3 checked:after:w-3",
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className={cn(
              labelVariants({
                variant: radioVariant,
                disabled,
              }),
              textVariants({
                variant: "placeholder",
              })
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
