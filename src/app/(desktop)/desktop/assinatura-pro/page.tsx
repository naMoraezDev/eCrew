import { Metadata } from "next";
import { ProSubscription } from "@/features/pro-subscription";

export const metadata: Metadata = {
  title: "Assinatura PRO | eCrew",
  description:
    "Notícias exclusivas, sem anúncios e suporte prioritário. Assine agora!",
};

export default function ProSubscriptionPage() {
  return <ProSubscription isDesktop />;
}
