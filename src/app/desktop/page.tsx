import { LogoSlider } from "@/ui/logo-slider";
import { LatestPosts } from "@/ui/latest-posts";
import { LiveMatches } from "@/ui/live-matches";
import { FeaturedPosts } from "@/ui/featured-posts";
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
      <section className="w-full flex gap-4">
        <section className="w-3/4 flex flex-col gap-4 mt-4">
          <FeaturedPosts postList={posts} isDesktop />
          <LatestPosts postList={posts} isDesktop />
        </section>
        <section className="w-1/4 mt-4">
          <LiveMatches games={games} matches={matches} />
        </section>
      </section>
    </>
  );
}
