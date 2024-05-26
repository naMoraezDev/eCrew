import { LogoSlider } from "@/ui/logo-slider";
import { LatestPosts } from "@/ui/latest-posts";
import { FeaturedPosts } from "@/ui/featured-posts";
import { PostsCarousel } from "@/ui/posts-carousel";
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
  const postList = {
    ...posts,
    posts: [posts.posts[1], posts.posts[0], posts.posts[1], posts.posts[0]],
  };

  return (
    <>
      <LogoSlider games={games} />
      <LiveMatchesCarousel games={games} matches={matches} />
      <section className="w-full flex gap-4">
        <section className="w-full flex flex-col gap-4">
          <FeaturedPosts postList={posts} />
          <LatestPosts postList={posts} />
          <PostsCarousel postList={postList} category="Counter Strike" />
          <PostsCarousel postList={postList} category="League of Legends" />
          <PostsCarousel postList={postList} category="Rainbow 6 Siege" />
          <PostsCarousel category="Dota 2" postList={postList} />
          <PostsCarousel category="Warzone" postList={postList} />
          <PostsCarousel category="Valorant" postList={postList} />
        </section>
      </section>
    </>
  );
}
