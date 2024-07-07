import { LiveMatches } from "../live-matches";
import { UpcomingMatches } from "../upcomming-matches";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export async function MatchesSectionView() {
  const upcomingMatches = await new EcrewApiService(
    new FetchHttpClientAdapter()
  ).getUpcommingMatches(
    "?filter_type=videogame&filter=cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant"
  );

  return (
    <div className="flex flex-col gap-4">
      <LiveMatches />
      <UpcomingMatches upcomingMatches={upcomingMatches} />
    </div>
  );
}
