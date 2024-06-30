import { Login } from "@/features/login";

export const runtime = "edge";

export default async function LoginPage() {
  return <Login isDesktop />;
}
