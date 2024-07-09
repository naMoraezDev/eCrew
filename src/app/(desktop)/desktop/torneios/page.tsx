import { Metadata } from "next";
import { Tournaments } from "@/features/tournaments";
import { REVALIDATE_TIME } from "@/shared/constants";
import { tournamentsMetadata } from "@/seo/tournaments";

export const dynamic = "force-static";
export const revalidate = REVALIDATE_TIME;

export const metadata: Metadata = tournamentsMetadata;

export default function TournamentsPage() {
  return <Tournaments isDesktop />;
}
