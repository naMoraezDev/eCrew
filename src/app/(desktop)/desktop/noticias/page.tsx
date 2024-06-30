import { Metadata } from "next";
import { Home } from "@/features/home";
import { HomeSEO, homeMetadata } from "@/seo/home";

export const runtime = "edge";

export const revalidate = 60 * 5; // 5 minutes

export const metadata: Metadata = homeMetadata;

export default async function HomePage() {
  return (
    <>
      <HomeSEO />
      <Home isDesktop />
    </>
  );
}
