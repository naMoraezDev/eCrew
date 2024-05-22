import { LogoSlider } from "@/ui/logo-slider";
import { LatestPosts } from "@/ui/latest-posts";
import { FeaturedPosts } from "@/ui/featured-posts";
import { LiveMatchesCarousel } from "@/ui/live-matches-carousel";
import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export const revalidate = 0;

export default async function Home() {
  const [games, posts, runningMatches] = await Promise.all([
    new EpostsApiService(new FetchHttpClientAdapter()).getGames(),
    new EpostsApiService(new FetchHttpClientAdapter()).getPostsByCategory(
      "destaques"
    ),
    new EpostsApiService(new FetchHttpClientAdapter()).getRunningMatches(
      "?filter_type=videogame&filter=cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant"
    ),
  ]);
  const matches = [...runningMatches];

  return (
    <>
      <LogoSlider games={games} />
      <LiveMatchesCarousel games={games} matches={matches} />
      <section className="w-full flex gap-4">
        <section className="w-full flex flex-col gap-4">
          <FeaturedPosts postList={posts} />
          <LatestPosts postList={posts} />
        </section>
      </section>
    </>
  );
}
