import { Metadata } from "next";
import { TermsOfUse } from "@/features/terms-of-use";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Termos de Uso | ePosts",
  description:
    "Confira nossos termos de uso. Saiba como os dados pessoais que coletamos e como protegemos esses dados.",
};

export default function TermsOfUsePage() {
  return <TermsOfUse />;
}
