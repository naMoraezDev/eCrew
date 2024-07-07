import { SiteLogo } from "@/ui/site-logo";
import { ForgotPasswordProps } from "./tyles";
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
          <SiteLogo />
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
