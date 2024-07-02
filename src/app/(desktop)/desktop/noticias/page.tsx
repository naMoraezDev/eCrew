import { Metadata } from "next";
import { Home } from "@/features/home";
import { HomeSEO, homeMetadata } from "@/seo/home";
import { REVALIDATE_TIME } from "@/shared/constants";

export const dynamic = "force-static";
export const revalidate = REVALIDATE_TIME;

export const metadata: Metadata = homeMetadata;

export default async function HomePage() {
  return (
    <>
      <HomeSEO />
      <Home isDesktop />
    </>
  );
}
