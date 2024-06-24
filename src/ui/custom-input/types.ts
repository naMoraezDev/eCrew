import { FieldError, UseFormRegister } from "react-hook-form";

export interface CustomInput {
  type: string;
  name: string;
  placeholder: string;
  autocomplete?: string;
  error: FieldError | undefined;
  register: UseFormRegister<any>;
}
