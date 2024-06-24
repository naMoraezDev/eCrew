import Link from "next/link";
import { SignUpFormProps } from "./types";
import { CustomInput } from "../custom-input";
import { Button } from "@/components/ui/button";

export function SignUpFormView({ setMethod }: SignUpFormProps) {
  return (
    <form className="flex flex-col gap-6 animate-fade-in">
      <span className="text-sm font-kanit w-full flex justify-center">
        Crie sua conta ePosts
      </span>
      <div className="w-full flex flex-col gap-3">
        <CustomInput
          name="name"
          type="text"
          error={undefined}
          placeholder="nome completo"
        />
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
        <CustomInput
          name="password"
          type="password"
          error={undefined}
          placeholder="confirme sua senha"
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
