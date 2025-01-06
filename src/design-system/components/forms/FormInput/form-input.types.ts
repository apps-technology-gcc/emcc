import { InputProps } from "../../elements/Input/input.types";
import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
} from "react-hook-form";

export type FormInputProps<TFormValues extends FieldValues> = Omit<
  InputProps,
  "name"
> & {
  name: Path<TFormValues>;
  register?: UseFormRegister<TFormValues>;
  error?: FieldError;
};
