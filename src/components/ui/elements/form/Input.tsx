"use client";

import { forwardRef, useState } from "react";
import { cn } from "../../../../lib/utils";
import { Icon } from "@/components/ui/elements/Icon";
import { Text, textVariants } from "../Text";
import { cva } from "class-variance-authority";
import { useFormContext, Controller } from "react-hook-form";

// Style variants
export const inputVariants = cva(
  [
    "w-full",
    "rounded-sm",
    "outline-none",
    "px-2.5",
    "py-2",
    "border",
    "transition-colors",
    "text-body_3",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-border",
          "text-neutralDark",
          "focus:border-primary-600",
          "placeholder:text-neutralLight",
        ],
        error: [
          "border-danger-600",
          "text-danger-600",
          "placeholder:text-danger-600",
        ],
      },
      size: {
        default: ["h-[40px]"],
        sm: ["h-[32px]"],
        lg: ["h-[48px]"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const wrapperVariants = cva("flex flex-col", {
  variants: {
    spacing: {
      default: "gap-2.5",
      tight: "gap-1.5",
      loose: "gap-4",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});

const labelVariants = cva("font-normal", {
  variants: {
    size: {
      default: textVariants({ variant: "label" }),
      sm: "text-body_3",
      lg: "text-body_1",
    },
    variant: {
      default: "text-neutralDark",
      error: "text-danger-600",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

// Types
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  labelPosition?: "left" | "right";
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "textarea";
  size?: "default" | "sm" | "lg";
  error?: boolean;
  cols?: number;
  rows?: number;
  errorMsg?: string;
  validation?: object;
  required?: boolean;
  spacing?: "default" | "tight" | "loose";
  className?: string;
  useForm?: boolean;
  warningText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      label,
      labelPosition = "left",
      type = "text",
      size = "default",
      error,
      errorMsg,
      validation,
      required,
      spacing = "default",
      className,
      placeholder,
      useForm = false,
      cols,
      rows,
      warningText,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = useState(false);
    const formContext = useFormContext();
    const isFormContext = useForm && formContext;

    const errorMessage = errorMsg;
    const isError = error || !!errorMessage;

    const renderInput = (field = {}) => (
      <input
        {...field}
        {...props}
        ref={ref}
        name={name}
        type={type === "password" && show ? "text" : type}
        placeholder={placeholder}
        className={cn(
          inputVariants({
            variant: isError ? "error" : "default",
            size,
          }),
          className,
          textVariants({
            variant: "placeholder",
            align: "left",
          })
        )}
      />
    );

    const renderTextArea = (field = {}) => (
      <textarea
        {...field}
        {...props}
        ref={ref}
        cols={cols ? cols : 50}
        rows={rows ? rows : 8}
        name={name}
        placeholder={placeholder}
        className={cn(
          "min-h-[90px]",
          inputVariants({
            variant: isError ? "error" : "default",
            size,
          }),
          className,
          textVariants({
            variant: "placeholder",
            align: "left",
          })
        )}
      />
    );

    return (
      <div className={wrapperVariants({ spacing })}>
        {labelPosition === "left" && label && (
          <Label
            label={label}
            required={required}
            variant={isError ? "error" : "default"}
            size={size}
          />
        )}

        {isFormContext ? (
          <Controller
            control={formContext.control}
            name={name}
            rules={validation}
            render={({ field }) =>
              type === "textarea" ? renderTextArea(field) : renderInput(field)
            }
          />
        ) : type === "textarea" ? (
          renderTextArea()
        ) : (
          renderInput()
        )}

        {type === "password" && (
          <div
            onClick={() => setShow(!show)}
            className="text-border flex items-center absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {show ? (
              <Icon className="text-xl text-neutralDark" name="visibility" />
            ) : (
              <Icon
                className="text-xl text-neutralDark"
                name="visibility_off"
              />
            )}
          </div>
        )}

        {isError && errorMessage && (
          <Text variant="small" className="text-danger-600 mt-1">
            {errorMessage}
          </Text>
        )}
        {warningText && (
          <div className="flex justify-end">
            <Text variant="small" className="text-neutral">
              {warningText}
            </Text>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export const Label = ({
  label,
  required,
  variant = "default",
  size = "default",
  className,
}: {
  label?: string;
  required?: boolean;
  variant?: "default" | "error";
  size?: "default" | "sm" | "lg";
  className?: string;
}) => {
  return (
    <label className={cn(labelVariants({ variant, size }), className)}>
      {label}
      {required && <span className="text-danger-600 ml-1">*</span>}
    </label>
  );
};

Label.displayName = "Label";

export { Input };
