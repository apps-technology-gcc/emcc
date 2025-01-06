"use client";

import * as React from "react";
import { cn } from "../../../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "../Icon";
import { textVariants } from "../Text";

const checkboxVariants = cva(
  [
    "peer",
    "relative",
    "appearance-none",
    "border",
    "focus:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "transition-all",
  ],
  {
    variants: {
      variant: {
        default: [
          "hover:border-primary-600",
          "border-border",
          "focus-visible:ring-primary-600",
          "checked:border-primary-600",
          "focus-visible:ring-primary-600",
        ],
        dark: [
          "bg-white",
          "checked:border-white",
          "checked:bg-white",
          "border-borderDark",
          "focus-visible:ring-white",
        ],
      },
      size: {
        default: "h-5 w-5",
        sm: "h-4 w-4",
        lg: "h-6 w-6",
      },
      checkStyle: {
        field: " checked:bg-transparent",
        ring: " checked:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      checkStyle: "field",
    },
  }
);

const labelVariants = cva("flex items-center font-normal", {
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "cursor-pointer",
    },
    variant: {
      default: " text-neutralDark",
      error: " text-error",
    },
  },
  defaultVariants: {
    disabled: false,
    variant: "default",
  },
});

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxVariants> {
  id: string;
  label?: string;
  labelPosition?: "left" | "right";
  labelVariant?: "default" | "placeholder" | "error";
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      variant,
      size,
      checkStyle,
      label,
      labelPosition = "right",
      labelVariant = "default",
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex gap-2.5 items-center ">
        {labelPosition === "left" && label && (
          <label
            htmlFor={id}
            className={cn(
              labelVariants({
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

        <div className="relative !min-w-[20px] w-[20px] min-h-[20px] h-[20px] overflow-hidden leading-none">
          <input
            type="checkbox"
            id={id}
            ref={ref}
            disabled={disabled}
            className={cn(
              checkboxVariants({ variant, size: size as any, checkStyle }),
              className
            )}
            {...props}
          />
          <label
            htmlFor={id}
            className={cn(
              "absolute inset-0 flex items-center justify-center",
              "peer-checked:flex hidden",
              checkStyle === "field" ? "text-white" : "text-primary-600"
            )}
          >
            <Icon name="checked" className="overflow-hidden text-[20px]" />
          </label>
        </div>

        {labelPosition === "right" && label && (
          <label
            htmlFor={id}
            className={cn(
              labelVariants({
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

Checkbox.displayName = "Checkbox";

export default Checkbox;
