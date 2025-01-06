import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface FormFieldProps {
  label?: string;
  error?: FieldError;
  helperText?: string;
  children: ReactNode;
  required?: boolean;
}
