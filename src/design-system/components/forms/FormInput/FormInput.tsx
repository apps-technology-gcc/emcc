import { forwardRef } from "react";
import { FieldValues } from "react-hook-form";
import { Input } from "../../primitives/Input/Input";
import { FormInputProps } from "./form-input.types";

export const FormInput = forwardRef<
  HTMLInputElement,
  FormInputProps<FieldValues>
>(({ register, name, error, ...props }, ref) => {
  return (
    <Input
      {...(register ? register(name) : {})}
      error={error?.message}
      {...props}
      ref={ref}
    />
  );
});

FormInput.displayName = "FormInput";
