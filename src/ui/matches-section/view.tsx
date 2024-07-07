import { LiveMatches } from "../live-matches";
import { UpcomingMatches } from "../upcoming-matches";

export function MatchesSectionView() {
  return (
    <div className="flex flex-col gap-4">
      <LiveMatches />
      <UpcomingMatches />
    </div>
  );
}
