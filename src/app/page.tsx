import { MatchesCarousel } from "@/ui/matches-carousel";
import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export const revalidate = 0;

export default async function Home() {
  const [games, runningMatches, upcomingMatches] = await Promise.all([
    new EpostsApiService(new FetchHttpClientAdapter()).getGames(),
    new EpostsApiService(new FetchHttpClientAdapter()).getRunningMatches(
      "?filter_type=videogame&filter=cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant"
    ),
    new EpostsApiService(new FetchHttpClientAdapter()).getUpcommingMatches(
      "?filter_type=videogame&filter=cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant"
    ),
  ]);
  const matches = [...runningMatches, ...upcomingMatches];

  return (
    <>
      <MatchesCarousel games={games} matches={matches} />
    </>
  );
}
