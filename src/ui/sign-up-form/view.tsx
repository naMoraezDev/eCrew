import Link from "next/link";
import { useSignUp } from "./_io";
import { useForm } from "react-hook-form";
import { SignUpFormProps } from "./types";
import { CustomInput } from "../custom-input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/schemas/sign-up.schema";

export function SignUpFormView({ setMethod, setIsLoading }: SignUpFormProps) {
  const { onSubmit, submitError } = useSignUp({ setMethod, setIsLoading });
  const { register, handleSubmit, formState } = useForm<
    typeof SignUpSchema._type
  >({
    resolver: zodResolver(SignUpSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 animate-fade-in"
    >
      <span className="text-sm font-kanit w-full flex justify-center">
        Crie sua conta ePosts
      </span>
      <div className="w-full flex flex-col gap-3">
        {submitError && (
          <span className="text-red-500 text-sm text-center font-kanit font-medium">
            {submitError}
          </span>
        )}
        <CustomInput
          name="name"
          type="text"
          register={register}
          placeholder="nome completo"
          error={formState.errors.name}
        />
        <CustomInput
          name="email"
          type="email"
          placeholder="email"
          register={register}
          error={formState.errors.email}
        />
        <CustomInput
          name="password"
          type="password"
          placeholder="senha"
          register={register}
          error={formState.errors.password}
        />
        <CustomInput
          type="password"
          register={register}
          name="confirmPassword"
          placeholder="confirme sua senha"
          error={formState.errors.confirmPassword}
        />
      </div>
      <span className="text-sm font-kanit">
        Ao se cadastrar, voce concorda com os{" "}
        <Link
          href="/termos-de-uso"
          className="underline underline-offset-2 text-violet-500"
        >
          termos de uso
        </Link>{" "}
        e com a{" "}
        <Link
          href="/politica-de-privacidade"
          className="underline underline-offset-2 text-violet-500"
        >
          política de privacidade
        </Link>
        .
      </span>
      <Button
        type="submit"
        className={`
          !bg-zinc-50 bg-opacity-10 text-zinc-900 duration-300 !font-bold text-xs h-10
          hover:!bg-zinc-300
        `}
      >
        Cadastrar
      </Button>
      <span className="text-sm font-kanit">
        Já é um membro?{" "}
        <button
          type="button"
          onClick={() => setMethod("sign-in")}
          className="font-medium text-violet-500 underline underline-offset-2"
        >
          Faça login com sua conta!
        </button>
      </span>
    </form>
  );
}
