import { Home } from "@/features/home";

export const revalidate = 0;

export default async function HomePage() {
  return <Home isDesktop />;
}
