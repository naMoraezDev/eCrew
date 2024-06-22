import { Home } from "@/features/home";

export const revalidate = 60 * 5; // 5 minutes

export default async function HomePage() {
  return <Home />;
}
