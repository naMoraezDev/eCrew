import { z } from "zod";
import { VALIDATION_MESSAGES } from "@/shared/messages";

export const SignUpSchema = z
  .object({
    email: z
      .string()
      .email(VALIDATION_MESSAGES.email.invalid)
      .min(1, VALIDATION_MESSAGES.email.required),
    name: z.string().min(1, VALIDATION_MESSAGES.name.required),
    password: z.string().min(1, VALIDATION_MESSAGES.password.required),
    confirmPassword: z
      .string()
      .min(1, VALIDATION_MESSAGES.passwordConfirmation.required),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: VALIDATION_MESSAGES.passwordConfirmation.unmatch,
      });
    }
  });
