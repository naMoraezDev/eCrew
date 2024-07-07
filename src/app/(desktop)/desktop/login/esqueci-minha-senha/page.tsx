import { Metadata } from "next";
import { ForgotPassword } from "@/features/forgot-password";

export const metadata: Metadata = {
  title: "Esqueci minha senha | eCrew",
  description:
    "Recupere o acesso à sua conta. Insira seu e-mail ou nome de usuário e siga as instruções para redefinir sua senha.",
};

export default function ForgotPasswordPage() {
  return <ForgotPassword isDesktop />;
}
