import { Newsletter } from "@/ui/newsletter";
import { DefaultProps } from "@/types/common";
import { LogoSlider } from "@/ui/logo-slider";
import { LatestPosts } from "@/ui/latest-posts";
import { LiveMatches } from "@/ui/live-matches";
import { PopularTags } from "@/ui/popular-tags";
import { PostsCarousel } from "@/ui/posts-carousel";
import { FeaturedPosts } from "@/ui/featured-posts";
import { MostReadPosts } from "@/ui/most-read-posts";
import { EpostsApiService } from "@/services/eposts-api.service";
import { LiveMatchesCarousel } from "@/ui/live-matches-carousel";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export async function HomeView({ isDesktop }: DefaultProps) {
  const [tags, games, posts, runningMatches] = await Promise.all([
    new EpostsApiService(new FetchHttpClientAdapter()).getTags(),
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
    posts: [posts.posts[1], posts.posts[0]],
  };
  const mostReadPosts = {
    ...posts,
    posts: [
      posts.posts[1],
      posts.posts[1],
      posts.posts[1],
      posts.posts[1],
      posts.posts[1],
    ],
  };

  return (
    <>
      <LogoSlider games={games} />
      {!isDesktop && <LiveMatchesCarousel games={games} matches={matches} />}
      <section className="w-full flex gap-4">
        <section
          className={`
            ${isDesktop ? "w-3/4 mt-4" : "w-full"} flex flex-col gap-4 mb-10
          `}
        >
          <FeaturedPosts postList={posts} isDesktop={isDesktop} />
          <LatestPosts postList={posts} isDesktop={isDesktop} />
          <PostsCarousel
            games={games}
            postList={postList}
            isDesktop={isDesktop}
            category="Counter-Strike: Global Offensive"
          />
          <PostsCarousel
            games={games}
            postList={postList}
            isDesktop={isDesktop}
            category="League of Legends"
          />
          <PostsCarousel
            games={games}
            postList={postList}
            isDesktop={isDesktop}
            category="Rainbow Six Siege"
          />
          <PostsCarousel
            games={games}
            category="Dota 2"
            postList={postList}
            isDesktop={isDesktop}
          />
          <PostsCarousel
            games={games}
            category="Call of Duty: Modern Warfare"
            postList={postList}
            isDesktop={isDesktop}
          />
          <PostsCarousel
            games={games}
            category="Valorant"
            postList={postList}
            isDesktop={isDesktop}
          />
          <Newsletter isDesktop={isDesktop} />
        </section>
        {isDesktop && (
          <section className="w-1/4 mt-4 relative">
            <div className="flex flex-col gap-4 sticky top-16">
              <LiveMatches games={games} matches={matches} />
              <MostReadPosts postList={mostReadPosts} />
              <PopularTags tags={tags.tags} />
            </div>
          </section>
        )}
      </section>
    </>
  );
}
