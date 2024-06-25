import { Login } from "@/features/login";
import { verifyLogin } from "@/shared/utils/auth";

export default async function LoginPage() {
  await verifyLogin();

  return <Login isDesktop />;
}
