import Image from "next/image";
import { Newsletter } from "@/ui/newsletter";
import { DefaultProps } from "@/types/common";
import { LogoSlider } from "@/ui/logo-slider";
import { LatestPosts } from "@/ui/latest-posts";
import { HorizontalAd } from "@/ui/horizontal-ad";
import { PostsCarousel } from "@/ui/posts-carousel";
import { FeaturedCarousel } from "@/ui/featured-carousel";
import exitLagBanner from "@/assets/images/exitlag-banner.png";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

import dynamic from "next/dynamic";
const DynamicLiveMatchesCarousel = dynamic(() =>
  import("@/ui/live-matches-carousel").then(
    (module) => module.LiveMatchesCarousel
  )
);
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
    games,
    lolPosts,
    r6Posts,
    codPosts,
    csPosts,
    valorantPosts,
    dotaPosts,
    featuredPosts,
    latestPosts,
  ] = await Promise.all([
    new EcrewApiService(new FetchHttpClientAdapter()).getGames(),
    new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
      page: "1",
      number: "2",
      category: "league-of-legends",
    }),
    new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
      page: "1",
      number: "2",
      category: "r6-siege",
    }),
    new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
      page: "1",
      number: "2",
      category: "cod-mw",
    }),
    new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
      page: "1",
      number: "2",
      category: "cs-go",
    }),
    new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
      page: "1",
      number: "2",
      category: "valorant",
    }),
    new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
      page: "1",
      number: "2",
      category: "dota-2",
    }),
    new EcrewApiService(new FetchHttpClientAdapter()).getPostsByTag(
      "destaques"
    ),
    new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
      page: "1",
      number: "4",
      category: "all",
    }),
  ]);

  return (
    <>
      <LogoSlider games={games} />
      <section className="w-full flex gap-4">
        <section
          className={`
            ${isDesktop ? "w-3/4 mt-4" : "w-full"} 
            flex flex-col gap-10 mb-10
          `}
        >
          {!isDesktop && <DynamicLiveMatchesCarousel games={games} />}
          <FeaturedCarousel
            games={games}
            posts={featuredPosts}
            isDesktop={isDesktop}
          />
          <LatestPosts
            games={games}
            isDesktop={isDesktop}
            postList={latestPosts}
          />
          <HorizontalAd />
          <PostsCarousel
            games={games}
            postList={csPosts}
            isDesktop={isDesktop}
            category="Counter-Strike: Global Offensive"
          />
          <PostsCarousel
            games={games}
            postList={lolPosts}
            isDesktop={isDesktop}
            category="League of Legends"
          />
          <PostsCarousel
            games={games}
            postList={r6Posts}
            isDesktop={isDesktop}
            category="Rainbow Six Siege"
          />
          <PostsCarousel
            games={games}
            category="Dota 2"
            postList={dotaPosts}
            isDesktop={isDesktop}
          />
          <PostsCarousel
            games={games}
            category="Call of Duty: Modern Warfare"
            postList={codPosts}
            isDesktop={isDesktop}
          />
          <PostsCarousel
            games={games}
            category="Valorant"
            postList={valorantPosts}
            isDesktop={isDesktop}
          />
          <HorizontalAd />
          <Newsletter isDesktop={isDesktop} />
        </section>
        {isDesktop && (
          <section className="w-1/4 flex flex-col gap-4 mt-4">
            <DynamicMatchesSection />
            <div className="flex flex-col gap-4 sticky top-16">
              <DynamicMostReadPosts />
              <DynamicPopularTags />
              <section className="p-2 relative">
                <Image
                  src={exitLagBanner}
                  alt="exit_lag_banner"
                  className="rounded-lg"
                />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.exitlag.com/"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </section>
            </div>
          </section>
        )}
      </section>
    </>
  );
}
