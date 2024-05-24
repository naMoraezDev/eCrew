import { LogoSlider } from "@/ui/logo-slider";
import { LatestPosts } from "@/ui/latest-posts";
import { LiveMatches } from "@/ui/live-matches";
import { FeaturedPosts } from "@/ui/featured-posts";
import { PostsCarousel } from "@/ui/posts-carousel";
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
  const postList = {
    ...posts,
    posts: [posts.posts[1], posts.posts[0], posts.posts[1], posts.posts[0]],
  };

  return (
    <>
      <LogoSlider games={games} />
      <section className="w-full flex gap-4">
        <section className="w-3/4 flex flex-col gap-4 mt-4">
          <FeaturedPosts postList={posts} isDesktop />
          <LatestPosts postList={posts} isDesktop />
          <PostsCarousel
            isDesktop
            postList={postList}
            category="Counter Strike"
          />
          <PostsCarousel
            isDesktop
            postList={postList}
            category="League of Legends"
          />
          <PostsCarousel
            isDesktop
            postList={postList}
            category="Rainbow 6 Siege"
          />
          <PostsCarousel isDesktop category="Dota 2" postList={postList} />
          <PostsCarousel isDesktop category="Warzone" postList={postList} />
          <PostsCarousel isDesktop category="Valorant" postList={postList} />
        </section>
        <section className="w-1/4 mt-4">
          <LiveMatches games={games} matches={matches} />
        </section>
      </section>
    </>
  );
}
