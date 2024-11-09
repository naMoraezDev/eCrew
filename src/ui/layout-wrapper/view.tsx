import { Footer } from "./footer";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { DefaultProps } from "@/types/common";
import { GAMES } from "@/shared/utils/static";
// import { ProTopBanner } from "./pro-top-banner";
import { CookiesAccept } from "../cookies-accept";
import { WordpressService } from "@/services/wordpress/wordpress.service";
import { PandascoreService } from "@/services/pandascore/pandascore.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function LayoutWrapperView({
  children,
  isDesktop,
}: Readonly<{ children: React.ReactNode } & DefaultProps>) {
  const [
    csPosts,
    r6Posts,
    lolPosts,
    codPosts,
    dotaPosts,
    valorantPosts,

    csTournaments,
    r6Tournaments,
    lolTournaments,
    codTournaments,
    dotaTournaments,
    valorantTournaments,

    pastMatches,
    upcomingMatches,
  ] = await Promise.all([
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 3,
      slug: "cs-go",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 3,
      slug: "r6-siege",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 3,
      slug: "league-of-legends",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 3,
      slug: "cod-mw",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 3,
      slug: "dota-2",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      page: 1,
      number: 3,
      slug: "valorant",
    }),

    new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
      page: 1,
      size: 3,
      type: "running",
      videogame: "csgo",
    }),
    new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
      page: 1,
      size: 3,
      type: "running",
      videogame: "r6siege",
    }),
    new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
      page: 1,
      size: 3,
      type: "running",
      videogame: "lol",
    }),
    new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
      page: 1,
      size: 3,
      type: "running",
      videogame: "codmw",
    }),
    new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
      page: 1,
      size: 3,
      type: "running",
      videogame: "dota2",
    }),
    new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
      page: 1,
      size: 3,
      type: "running",
      videogame: "valorant",
    }),
    new PandascoreService(httpClientFactory()).getMatchesList({
      page: 1,
      size: 5,
      type: "past",
    }),
    new PandascoreService(httpClientFactory()).getMatchesList({
      page: 1,
      size: 5,
      type: "upcoming",
    }),
  ]);

  return (
    <>
      {/* <ProTopBanner isDesktop={isDesktop} /> */}
      <Header
        games={GAMES}
        csPosts={csPosts}
        r6Posts={r6Posts}
        codPosts={codPosts}
        lolPosts={lolPosts}
        isDesktop={isDesktop}
        dotaPosts={dotaPosts}
        pastMatches={pastMatches}
        csTournaments={csTournaments}
        valorantPosts={valorantPosts}
        r6Tournaments={r6Tournaments}
        codTournaments={codTournaments}
        lolTournaments={lolTournaments}
        dotaTournaments={dotaTournaments}
        upcomingMatches={upcomingMatches}
        valorantTournaments={valorantTournaments}
      />
      {isDesktop && <Navbar />}
      <main className="w-full sm:max-w-[80%] 2xl:max-w-[70%] py-4 mx-auto">{children}</main>
      <CookiesAccept />
      <Footer isDesktop={isDesktop} />
    </>
  );
}
