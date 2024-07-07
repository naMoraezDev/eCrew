import { Tournaments } from "@/features/tournaments";
import { REVALIDATE_TIME } from "@/shared/constants";

export const dynamic = "force-static";
export const revalidate = REVALIDATE_TIME;

export default function TournamentsPage() {
  return <Tournaments isDesktop />;
}
