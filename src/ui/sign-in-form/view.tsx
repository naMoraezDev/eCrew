import { SignInFormProps } from "./types";
import { CustomInput } from "../custom-input";
import { Button } from "@/components/ui/button";

export function SignInFormView({ setMethod }: SignInFormProps) {
  return (
    <form className="flex flex-col gap-6 animate-fade-in">
      <span className="text-sm font-kanit w-full flex justify-center">
        Entre com sua conta ePosts
      </span>
      <div className="w-full flex flex-col gap-3">
        <CustomInput
          name="email"
          type="email"
          error={undefined}
          placeholder="email"
        />
        <CustomInput
          name="password"
          type="password"
          error={undefined}
          placeholder="senha"
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
