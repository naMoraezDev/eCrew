import { DefaultProps } from "@/types/common";
import { LogoSlider } from "@/ui/logo-slider";
import { LatestPosts } from "@/ui/latest-posts";
import { LiveMatches } from "@/ui/live-matches";
import { PostsCarousel } from "@/ui/posts-carousel";
import { FeaturedPosts } from "@/ui/featured-posts";
import { EpostsApiService } from "@/services/eposts-api.service";
import { LiveMatchesCarousel } from "@/ui/live-matches-carousel";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export async function HomeView({ isDesktop }: DefaultProps) {
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
  const postList = {
    ...posts,
    posts: [posts.posts[1], posts.posts[0], posts.posts[1], posts.posts[0]],
  };

  return (
    <>
      <LogoSlider games={games} />
      {!isDesktop && <LiveMatchesCarousel games={games} matches={matches} />}
      <section className="w-full flex gap-4">
        <section
          className={`
            ${isDesktop ? "w-3/4 mt-4" : "w-full"} flex flex-col gap-4 
          `}
        >
          <FeaturedPosts postList={posts} isDesktop={isDesktop} />
          <LatestPosts postList={posts} isDesktop={isDesktop} />
          <PostsCarousel
            postList={postList}
            isDesktop={isDesktop}
            category="Counter Strike"
          />
          <PostsCarousel
            postList={postList}
            isDesktop={isDesktop}
            category="League of Legends"
          />
          <PostsCarousel
            postList={postList}
            isDesktop={isDesktop}
            category="Rainbow 6 Siege"
          />
          <PostsCarousel
            category="Dota 2"
            postList={postList}
            isDesktop={isDesktop}
          />
          <PostsCarousel
            category="Warzone"
            postList={postList}
            isDesktop={isDesktop}
          />
          <PostsCarousel
            category="Valorant"
            postList={postList}
            isDesktop={isDesktop}
          />
        </section>
        {isDesktop && (
          <section className="w-1/4 mt-4">
            <LiveMatches games={games} matches={matches} />
          </section>
        )}
      </section>
    </>
  );
}
