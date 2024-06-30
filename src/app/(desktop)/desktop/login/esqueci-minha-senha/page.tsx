import { ForgotPassword } from "@/features/forgot-password";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Esqueci minha senha | ePosts",
  description:
    "Recupere o acesso à sua conta. Insira seu e-mail ou nome de usuário e siga as instruções para redefinir sua senha.",
};

export default function ForgotPasswordPage() {
  return <ForgotPassword isDesktop />;
}
