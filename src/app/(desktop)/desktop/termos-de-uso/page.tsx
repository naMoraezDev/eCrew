import { Metadata } from "next";
import { TermsOfUse } from "@/features/terms-of-use";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Termos de Uso | eCrew",
  description:
    "Confira nossos termos de uso. Saiba como os dados pessoais que coletamos e como protegemos esses dados.",
};

export default function TermsOfUsePage() {
  return <TermsOfUse isDesktop />;
}
