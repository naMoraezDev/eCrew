"use client";

import { useForm } from "react-hook-form";
import { useForgotPasswordForm } from "./_io";
import { CustomInput } from "../custom-input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema } from "@/schemas/forgot-password.shema";

export function ForgotPasswordFormView() {
  const { onSubmit } = useForgotPasswordForm();
  const { register, handleSubmit, formState } = useForm<
    typeof ForgotPasswordSchema._type
  >({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 animate-fade-in"
    >
      <h1 className="text-2xl font-kanit font-bold">Redefinir senha</h1>
      <span className="text-base font-kanit w-full flex justify-center">
        Um link para redefinir sua senha será enviado para o seu e-mail
      </span>
      <div className="w-full flex flex-col gap-3">
        <CustomInput
          name="email"
          type="email"
          placeholder="email"
          register={register}
          error={formState.errors.email}
        />
      </div>
      <Button
        type="submit"
        className={`
          !bg-zinc-50 bg-opacity-10 text-zinc-900 duration-300 !font-bold text-xs h-10
          hover:!bg-zinc-300
        `}
      >
        Enviar link
      </Button>
    </form>
  );
}
