import { SquareAd } from "@/ui/square-ad";
import { Newsletter } from "@/ui/newsletter";
import { DefaultProps } from "@/types/common";
import { LogoSlider } from "@/ui/logo-slider";
import { Tournaments } from "@/ui/tournaments";
import { LatestPosts } from "@/ui/latest-posts";
import { HorizontalAd } from "@/ui/horizontal-ad";
import { PostsCarousel } from "@/ui/posts-carousel";
import { FeaturedCarousel } from "@/ui/featured-carousel";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

import dynamic from "next/dynamic";
import { WordpressService } from "@/services/wordpress/wordpress.service";
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
    homeCategory,
    latestPosts,
  ] = await Promise.all([
    new EcrewApiService(httpClientFactory()).getGames(),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      number: "2",
      categorySlug: "league-of-legends",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      number: "2",
      categorySlug: "r6-siege",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      number: "2",
      categorySlug: "cod-mw",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      number: "2",
      categorySlug: "cs-go",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      number: "2",
      categorySlug: "valorant",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      number: "2",
      categorySlug: "dota-2",
    }),
    new WordpressService(httpClientFactory()).getCategoryBySlug("home"),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      number: "4",
      categorySlug: "all",
    }),
  ]);

  const featuredPosts = homeCategory.data.category.extraFields.featuredPosts;

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
          <FeaturedCarousel
            games={games}
            posts={featuredPosts}
            isDesktop={isDesktop}
          />
          <LatestPosts
            games={games}
            isDesktop={isDesktop}
            postsList={latestPosts}
          />
          <HorizontalAd />
          <PostsCarousel
            games={games}
            postsList={csPosts}
            isDesktop={isDesktop}
            category="Counter-Strike: Global Offensive"
          />
          <PostsCarousel
            games={games}
            postsList={lolPosts}
            isDesktop={isDesktop}
            category="League of Legends"
          />
          <PostsCarousel
            games={games}
            postsList={r6Posts}
            isDesktop={isDesktop}
            category="Rainbow Six Siege"
          />
          <PostsCarousel
            games={games}
            category="Dota 2"
            postsList={dotaPosts}
            isDesktop={isDesktop}
          />
          <PostsCarousel
            games={games}
            category="Call of Duty: Modern Warfare"
            postsList={codPosts}
            isDesktop={isDesktop}
          />
          <PostsCarousel
            games={games}
            category="Valorant"
            postsList={valorantPosts}
            isDesktop={isDesktop}
          />
          <HorizontalAd />
          <Newsletter isDesktop={isDesktop} />
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
