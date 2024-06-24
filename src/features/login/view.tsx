import Link from "next/link";
import Image from "next/image";
import { LoginProps } from "./types";
import { SignInForm } from "@/ui/sign-in-form";
import { SocialLogin } from "@/ui/social-login";
import ePostsLogo from "@/assets/images/e_posts_logo.svg";

export function LoginView({}: LoginProps) {
  return (
    <section className="w-full h-screen flex justify-center items-center bg-gradient-to-bl from-zinc-950 to-violet-950">
      <div className="bg-zinc-900 gap-6 rounded-lg p-6 w-full max-w-md flex flex-col">
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
        <SignInForm />
        <SocialLogin />
      </div>
    </section>
  );
}
