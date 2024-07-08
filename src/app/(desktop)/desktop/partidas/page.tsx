import { Matches } from "@/features/matches";
import { REVALIDATE_TIME } from "@/shared/constants";

export const dynamic = "force-static";
export const revalidate = REVALIDATE_TIME;

export default function MatchesPage() {
  return <Matches isDesktop />;
}
