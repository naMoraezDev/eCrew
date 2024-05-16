import { LogoSlider } from "@/ui/logo-slider";
import { LatestPosts } from "@/ui/latest-posts";
import { MatchesCarousel } from "@/ui/matches-carousel";
import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export const revalidate = 0;

export default async function Home() {
  const [games, runningMatches, upcomingMatches, featuredPosts] =
    await Promise.all([
      new EpostsApiService(new FetchHttpClientAdapter()).getGames(),
      new EpostsApiService(new FetchHttpClientAdapter()).getRunningMatches(
        "?filter_type=videogame&filter=cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant"
      ),
      new EpostsApiService(new FetchHttpClientAdapter()).getUpcommingMatches(
        "?filter_type=videogame&filter=cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant"
      ),
      new EpostsApiService(new FetchHttpClientAdapter()).getPostsByCategory(
        "destaques"
      ),
    ]);
  const matches = [...runningMatches, ...upcomingMatches];

  return (
    <>
      <MatchesCarousel games={games} matches={matches} />
      <LogoSlider games={games} />
      <section className="w-full flex gap-4">
        <section className="w-full md:w-3/4">
          <LatestPosts postList={featuredPosts} />
        </section>
        <section className="hidden w-1/4 md:block"></section>
      </section>
    </>
  );
}
