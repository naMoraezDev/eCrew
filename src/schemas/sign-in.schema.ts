import { z } from "zod";
import { VALIDATION_MESSAGES } from "@/shared/messages";

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, VALIDATION_MESSAGES.email.required)
    .email(VALIDATION_MESSAGES.email.invalid),
  password: z.string().min(1, VALIDATION_MESSAGES.password.required),
});
