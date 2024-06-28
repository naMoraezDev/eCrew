import { useSignIn } from "./_io";
import { SignInFormProps } from "./types";
import { useForm } from "react-hook-form";
import { CustomInput } from "../custom-input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas/sign-in.schema";

export function SignInFormView({ setMethod, setIsLoading }: SignInFormProps) {
  const { onSubmit, submitError } = useSignIn({ setMethod, setIsLoading });
  const { register, handleSubmit, formState } = useForm<
    typeof SignInSchema._type
  >({
    resolver: zodResolver(SignInSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 animate-fade-in"
    >
      <span className="text-sm font-kanit w-full flex justify-center">
        Entre com sua conta ePosts
      </span>
      <div className="w-full flex flex-col gap-3">
        {submitError && (
          <span className="text-red-500 text-sm text-center font-kanit font-medium">
            {submitError}
          </span>
        )}
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
        <span className="text-xs font-kanit underline-offset-2 underline">
          Esqueci minha senha
        </span>
      </div>
      <Button
        type="submit"
        className={`
          !bg-zinc-50 bg-opacity-10 text-zinc-900 duration-300 !font-bold text-xs h-10
          hover:!bg-zinc-300
        `}
      >
        Entrar
      </Button>
      <span className="text-sm font-kanit">
        Ainda não possui uma conta?{" "}
        <button
          type="button"
          onClick={() => setMethod("sign-up")}
          className="font-medium text-violet-500 underline underline-offset-2"
        >
          Cadastre-se no nosso site!
        </button>
      </span>
    </form>
  );
}
