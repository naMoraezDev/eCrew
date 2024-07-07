import Link from "next/link";
import Image from "next/image";
import { ForgotPasswordProps } from "./tyles";
import ePostsLogo from "@/assets/images/e_posts_logo.svg";
import { ForgotPasswordForm } from "@/ui/forgot-password-form";

export function ForgotPasswordView({ isDesktop }: ForgotPasswordProps) {
  return (
    <section
      className={`
        ${isDesktop ? "h-screen" : "h-full"}
        w-full flex justify-center items-center bg-gradient-to-bl from-zinc-950 to-zinc-900
      `}
    >
      <section className="fixed top-0 left-0 w-full">
        <div className="w-full h-24 flex items-center justify-between max-w-[1270px] mx-auto px-4">
          <div className="flex items-center gap-1 relative w-fit self-center">
            <Image
              priority
              width={32}
              height={32}
              src={ePostsLogo}
              alt="eCrew logo"
            />
            <span className="font-kanit text-2xl">eCrew</span>
            <Link
              href="/noticias"
              className="w-full h-full absolute top-0 left-0"
            />
          </div>
        </div>
      </section>
      <section
        className={`
          ${!isDesktop && "h-screen items-center justify-center"}
          flex bg-zinc-900 p-6 rounded-lg max-w-[1000px] overflow-hidden
        `}
      >
        <ForgotPasswordForm />
      </section>
    </section>
  );
}
