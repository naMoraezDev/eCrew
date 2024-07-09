import { Metadata } from "next";
import { Matches } from "@/features/matches";
import { matchesMetadata } from "@/seo/matches";
import { REVALIDATE_TIME } from "@/shared/constants";

export const dynamic = "force-static";
export const revalidate = REVALIDATE_TIME;

export const metadata: Metadata = matchesMetadata;

export default function MatchesPage() {
  return <Matches isDesktop />;
}
