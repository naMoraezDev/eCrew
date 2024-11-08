import { MetadataRoute } from "next";
import { WordpressService } from "@/services/wordpress/wordpress.service";
import { PandascoreService } from "@/services/pandascore/pandascore.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [
    csPosts,
    lolPosts,
    dota2Posts,
    valorantPosts,
    r6sPosts,
    codmwPosts,
    csTournaments,
    lolTournaments,
    dota2Tournaments,
    valorantTournaments,
    r6sTournaments,
    codmwTournaments,
    pastMatches,
    runningMatches,
    upcomingMatches,
  ] = await Promise.all([
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 50,
      slug: "cs-go",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 50,
      slug: "league-of-legends",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 50,
      slug: "dota-2",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 50,
      slug: "valorant",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 50,
      slug: "r6-siege",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 50,
      slug: "cod-mw",
    }),
    new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
      page: 1,
      size: 50,
      type: "running",
      videogame: "csgo",
    }),
    new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
      page: 1,
      size: 50,
      type: "running",
      videogame: "lol",
    }),
    new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
      page: 1,
      size: 50,
      type: "running",
      videogame: "dota2",
    }),
    new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
      page: 1,
      size: 50,
      type: "running",
      videogame: "valorant",
    }),
    new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
      page: 1,
      size: 50,
      type: "running",
      videogame: "r6siege",
    }),
    new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
      page: 1,
      size: 50,
      type: "running",
      videogame: "codmw",
    }),
    new PandascoreService(httpClientFactory()).getMatchesList({
      page: 1,
      size: 50,
      type: "past",
    }),
    new PandascoreService(httpClientFactory()).getMatchesList({
      page: 1,
      size: 50,
      type: "running",
    }),
    new PandascoreService(httpClientFactory()).getMatchesList({
      page: 1,
      size: 50,
      type: "upcoming",
    }),
  ]);

  const posts = [
    ...csPosts.posts,
    ...lolPosts.posts,
    ...r6sPosts.posts,
    ...codmwPosts.posts,
    ...dota2Posts.posts,
    ...valorantPosts.posts,
  ];

  const tournaments = [
    ...csTournaments,
    ...lolTournaments,
    ...r6sTournaments,
    ...codmwTournaments,
    ...dota2Tournaments,
    ...valorantTournaments,
  ];

  const matches = [...pastMatches, ...runningMatches, ...upcomingMatches];

  return [
    {
      url: `${process.env.PRIVATE_SITE_URL}/noticias/cs-go`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${process.env.PRIVATE_SITE_URL}/noticias/league-of-legends`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${process.env.PRIVATE_SITE_URL}/noticias/dota-2`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${process.env.PRIVATE_SITE_URL}/noticias/valorant`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${process.env.PRIVATE_SITE_URL}/noticias/r6-siege`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${process.env.PRIVATE_SITE_URL}/noticias/cod-mw`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${process.env.PRIVATE_SITE_URL}/noticias/mais-noticias`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${process.env.PRIVATE_SITE_URL}/noticias/${
        Object.values(post.categories)[0].slug
      }/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: "monthly" as any,
      priority: 0.5,
    })),
    {
      url: `${process.env.PRIVATE_SITE_URL}/torneios`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...tournaments.map((tournament) => ({
      url: `${process.env.PRIVATE_SITE_URL}/torneios/${tournament.id}`,
      lastModified: new Date(tournament.modified_at),
      changeFrequency: "daily",
      priority: 0.5,
    })),
    {
      url: `${process.env.PRIVATE_SITE_URL}/partidas`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...matches.map((match) => ({
      url: `${process.env.PRIVATE_SITE_URL}/partidas/${match.id}`,
      lastModified: new Date(match.modified_at),
      changeFrequency: "daily",
      priority: 0.5,
    })),
  ];
}
