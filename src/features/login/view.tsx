import Link from "next/link";
import Image from "next/image";
import { LoginProps } from "./types";
import { FcGoogle } from "react-icons/fc";
import { FaTwitch } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/ui/custom-input";
import ePostsLogo from "@/assets/images/e_posts_logo.svg";

export function LoginView({}: LoginProps) {
  return (
    <section className="w-full h-screen flex justify-center items-center bg-gradient-to-bl from-zinc-950 to-violet-950">
      <div className="bg-zinc-900 gap-3 rounded-lg p-6 w-full max-w-md">
        <form className="flex flex-col gap-6">
          <div className="flex items-center gap-1 relative w-full justify-center">
            <Image
              priority
              width={24}
              height={24}
              src={ePostsLogo}
              alt="ePosts logo"
            />
            <span className="font-kanit text-xl">ePosts</span>
            <Link
              href="/noticias"
              className="w-full h-full absolute top-0 left-0"
            />
          </div>
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
            <span className="font-medium text-violet-500">
              Cadastre-se no nosso site!
            </span>
          </span>
          <div className="w-full flex flex-col gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 text-sm rounded-lg bg-zinc-800 p-2"
            >
              <FcGoogle />
              Entre com o Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 text-sm rounded-lg bg-zinc-800 p-2"
            >
              <FaFacebook className="text-blue-500" />
              Entre com o Facebook
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 text-sm rounded-lg bg-zinc-800 p-2"
            >
              <FaTwitch className="text-violet-500" />
              Entre com a Twitch
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
