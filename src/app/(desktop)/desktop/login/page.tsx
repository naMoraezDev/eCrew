import { Metadata } from "next";
import { Login } from "@/features/login";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Login | ePosts",
  description:
    "Faça login na nossa plataforma e acesse conteúdo exclusivo. Insira suas credenciais e aproveite!",
};

export default async function LoginPage() {
  return <Login isDesktop />;
}
