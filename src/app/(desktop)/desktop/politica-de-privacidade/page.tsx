import { Metadata } from "next";
import { PrivacyPolicy } from "@/features/privacy-policy";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Politica de Privacidade | ePosts",
  description:
    "Confira nossa Politica de Privacidade. Saiba como os dados pessoais que coletamos e como protegemos esses dados. Acesse nossa politica de privacidade para saber mais.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy isDesktop />;
}
