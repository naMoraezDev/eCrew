import { LiveMatches } from "../live-matches";
import { UpcommingMatches } from "../upcomming-matches";

export function MatchesSectionView() {
  return (
    <div className="flex flex-col gap-4">
      <LiveMatches />
      <UpcommingMatches />
    </div>
  );
}
