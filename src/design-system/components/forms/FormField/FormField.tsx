import { cn } from "@/src/lib/utils";
import { FormFieldProps } from "./form-field.types";

export const FormField = ({
  label,
  error,
  helperText,
  children,
  required,
}: FormFieldProps) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children}
      {(error?.message || helperText) && (
        <p
          className={cn(
            "text-xs",
            error?.message ? "text-red-500" : "text-gray-500"
          )}
        >
          {error?.message || helperText}
        </p>
      )}
    </div>
  );
};
