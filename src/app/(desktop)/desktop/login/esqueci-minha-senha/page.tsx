import { ForgotPassword } from "@/features/forgot-password";

export const runtime = "edge";

export default function ForgotPasswordPage() {
  return <ForgotPassword isDesktop />;
}
