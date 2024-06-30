import { PrivacyPolicy } from "@/features/privacy-policy";

export const runtime = "edge";

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy isDesktop />;
}
