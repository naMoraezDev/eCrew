"use client";

import Link from "next/link";
import Image from "next/image";
import { useLogin } from "./_io";
import { LoginProps } from "./types";
import { SignInForm } from "@/ui/sign-in-form";
import { SignUpForm } from "@/ui/sign-up-form";
import { SocialLogin } from "@/ui/social-login";
import ePostsLogo from "@/assets/images/e_posts_logo.svg";
import background2 from "@/assets/images/r6-background.jpg";
import background1 from "@/assets/images/lol-background.jpg";

export function LoginView({ isDesktop }: LoginProps) {
  const { method, setMethod } = useLogin();

  return (
    <section
      className={`
          ${isDesktop ? "h-screen" : "h-full"}
          w-full flex justify-center items-center bg-gradient-to-bl from-zinc-950 to-zinc-900
        `}
    >
      <section
        className={`
            ${!isDesktop && "h-screen items-center justify-center"}
            flex bg-zinc-900 rounded-lg w-full max-w-[1000px] overflow-hidden
          `}
      >
        <div
          className={`
              ${isDesktop ? "w-1/2" : "w-full"}
              gap-6 p-6 flex flex-col
            `}
        >
          <div className="flex items-center gap-1 relative w-fit self-center">
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
          {method === "sign-in" && <SignInForm setMethod={setMethod} />}
          {method === "sign-up" && <SignUpForm setMethod={setMethod} />}
          <span className="text-sm font-kanit text-center">ou</span>
          <SocialLogin />
        </div>
        {isDesktop && (
          <div className="w-1/2 overflow-hidden">
            {method === "sign-in" && (
              <Image
                priority
                src={background1}
                alt="lol background"
                className="w-full h-full object-cover"
              />
            )}
            {method === "sign-up" && (
              <Image
                src={background2}
                alt="lol background"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        )}
      </section>
    </section>
  );
}
