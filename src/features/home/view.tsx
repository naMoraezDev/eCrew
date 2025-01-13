import { Channel } from "@/ui/channel";
import { Featured } from "@/ui/featured";
import { SquareAd } from "@/ui/square-ad";
import { Newsletter } from "@/ui/newsletter";
import { GAMES } from "@/shared/utils/static";
import { DefaultProps } from "@/types/common";
import { LogoSlider } from "@/ui/logo-slider";
import { Tournaments } from "@/ui/tournaments";
import { LatestPosts } from "@/ui/latest-posts";
import { HorizontalAd } from "@/ui/horizontal-ad";
import { PostsCarousel } from "@/ui/posts-carousel";
import { WordpressService } from "@/services/wordpress/wordpress.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

import dynamic from "next/dynamic";
const DynamicMatchesSection = dynamic(() =>
  import("@/ui/matches-section").then((module) => module.MatchesSection)
);
const DynamicMostReadPosts = dynamic(() =>
  import("@/ui/most-read-posts").then((module) => module.MostReadPosts)
);
const DynamicPopularTags = dynamic(() =>
  import("@/ui/popular-tags").then((module) => module.PopularTags)
);

export async function HomeView({ isDesktop }: DefaultProps) {
  const [
    lolPosts,
    r6Posts,
    codPosts,
    csPosts,
    valorantPosts,
    dotaPosts,
    featuredPosts,
    latestPosts,
  ] = await Promise.all([
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 2,
      slug: "league-of-legends",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 2,
      slug: "r6-siege",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 2,
      slug: "cod-mw",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 2,
      slug: "cs-go",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 2,
      slug: "valorant",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 2,
      slug: "dota-2",
    }),
    new WordpressService(httpClientFactory()).getPostsByTag({
      page: 1,
      number: 3,
      slug: "destaques",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      slug: "",
      number: 4,
    }),
  ]);

  return (
    <>
      <LogoSlider games={GAMES} />
      <section className="w-full flex gap-4">
        <section
          className={`
            ${isDesktop ? "w-3/4 mt-4" : "w-full"} 
            flex flex-col gap-10 mb-10
          `}
        >
          <Featured games={GAMES} isDesktop={isDesktop} posts={featuredPosts} />
          <HorizontalAd rounded={isDesktop} isDesktop={isDesktop} />
          <LatestPosts
            games={GAMES}
            isDesktop={isDesktop}
            postsList={latestPosts}
          />
          {!isDesktop && <DynamicMatchesSection />}
          <PostsCarousel
            games={GAMES}
            category="cs-go"
            postsList={csPosts}
            isDesktop={isDesktop}
          />
          <Channel isDesktop={isDesktop} channelId="UCPq2ETz4aAGo2Z-8JisDPIA" />
          <PostsCarousel
            games={GAMES}
            postsList={lolPosts}
            isDesktop={isDesktop}
            category="league-of-legends"
          />
          <Channel isDesktop={isDesktop} channelId="UC48rkTlXjRd6pnqqBkdV0Mw" />
          <PostsCarousel
            games={GAMES}
            category="r6-siege"
            postsList={r6Posts}
            isDesktop={isDesktop}
          />
          <Channel isDesktop={isDesktop} channelId="UCFYYhd9-VxkHnaA5cOiSybA" />
          <HorizontalAd rounded={isDesktop} isDesktop={isDesktop} />
          <PostsCarousel
            games={GAMES}
            category="dota-2"
            postsList={dotaPosts}
            isDesktop={isDesktop}
          />
          <Channel isDesktop={isDesktop} channelId="UCMm9pF8QkLS3UN2fRbYgWoA" />
          <PostsCarousel
            games={GAMES}
            category="cod-mw"
            postsList={codPosts}
            isDesktop={isDesktop}
          />
          <Channel isDesktop={isDesktop} channelId="UC9YydG57epLqxA9cTzZXSeQ" />
          <PostsCarousel
            games={GAMES}
            category="valorant"
            isDesktop={isDesktop}
            postsList={valorantPosts}
          />
          <Channel isDesktop={isDesktop} channelId="UCgWiuB2PQIUhJgEN9No281g" />
          {!isDesktop && <Tournaments />}
          <Newsletter isDesktop={isDesktop} />
          {!isDesktop && (
            <section className="mx-4 flex flex-col gap-4">
              <DynamicMostReadPosts />
              <DynamicPopularTags />
            </section>
          )}
        </section>
        {isDesktop && (
          <section className="w-1/4 flex flex-col gap-4 mt-4">
            <DynamicMatchesSection />
            <Tournaments />
            <div className="flex flex-col gap-4 sticky top-16">
              <DynamicMostReadPosts />
              <DynamicPopularTags />
              <section className="p-2 relative">
                <SquareAd />
              </section>
            </div>
          </section>
        )}
      </section>
    </>
  );
}
