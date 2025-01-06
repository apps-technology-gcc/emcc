"use client";

import React, { useRef, KeyboardEvent, ClipboardEvent } from "react";
import { cn } from "../../../../lib/utils";
import { cva } from "class-variance-authority";

const otpInputVariants = cva(
  [
    "w-10",
    "h-10",
    "rounded-sm",
    "border",
    "border-border",
    "outline-none",
    "text-center",
    "text-body_3",
    "transition-colors",
    "focus:border-primary-600",
  ],
  {
    variants: {
      variant: {
        default: ["text-neutralDark"],
        error: ["border-danger-600", "text-danger-600"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface OtpProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  error?: boolean;
  disabled?: boolean;
}

const Otp = ({
  length = 6,
  value = "",
  onChange,
  className,
  error,
  disabled,
}: OtpProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const focusInput = (index: number) => {
    if (!disabled) {
      inputRefs.current[index]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (disabled) return;

    if (e.key === "Backspace") {
      if (!e.currentTarget.value && index > 0) {
        const newOtp = value.split("");
        newOtp[index - 1] = "";
        onChange(newOtp.join(""));
        focusInput(index - 1);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      focusInput(index - 1);
    } else if (e.key === "ArrowRight" && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (disabled) return;

    const newValue = e.target.value.replace(/[^0-9]/g, "");
    if (newValue.length > 1) return;

    const newOtp = value.split("");
    newOtp[index] = newValue;
    onChange(newOtp.join(""));

    if (newValue && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, length);

    const newOtp = value.split("");
    pastedData.split("").forEach((char, index) => {
      newOtp[index] = char;
    });
    onChange(newOtp.join(""));

    if (pastedData.length > 0) {
      focusInput(Math.min(pastedData.length, length - 1));
    }
  };

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {Array.from({ length }, (_, i) => (
        <input
          key={i}
          ref={(el) => (inputRefs.current[i] = el)}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={value[i] || ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          disabled={disabled}
          className={cn(
            otpInputVariants({
              variant: error ? "error" : "default",
            })
          )}
        />
      ))}
    </div>
  );
};

export default Otp;
