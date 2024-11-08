import { SquareAd } from "@/ui/square-ad";
import { TournamentProps } from "./types";
import { IoIosPodium } from "react-icons/io";
import { GAMES } from "@/shared/utils/static";
import { TournamentsSEO } from "@/seo/tournaments";
import { TournamentList } from "@/ui/tournament-list";
import { Tournament } from "@/services/pandascore/types/tournaments.types";
import { PandascoreService } from "@/services/pandascore/pandascore.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

import dynamic from "next/dynamic";
const DynamicMatchesSection = dynamic(() =>
  import("@/ui/matches-section").then((module) => module.MatchesSection)
);

function compare(a: Tournament, b: Tournament) {
  return Number(new Date(a.begin_at)) - Number(new Date(b.begin_at));
}

export async function TournamentsView({ isDesktop }: TournamentProps) {
  const [
    csTournaments,
    r6Tournaments,
    lolTournaments,
    codTournaments,
    valTournaments,
    dotaTournaments,
  ] = await Promise.all([
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
      videogame: "r6siege",
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
      videogame: "codmw",
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
      videogame: "dota2",
    }),
  ]);
  const tournaments = [
    ...csTournaments,
    ...lolTournaments,
    ...r6Tournaments,
    ...dotaTournaments,
    ...codTournaments,
    ...valTournaments,
  ]
    .sort(compare)
    .reverse();

  return (
    <>
      <TournamentsSEO />
      <section className="w-full flex gap-4">
        <section
          className={`
            ${isDesktop ? "w-3/4 mt-4" : "w-full"} 
            flex flex-col gap-4 mb-10
          `}
        >
          <h4 className="font-kanit font-bold text-3xl flex items-center gap-2 px-6 py-3">
            <IoIosPodium />
            Torneios
            <div>
              <span className="font-medium text-violet-500 text-sm px-3 bg-violet-500 bg-opacity-20 rounded-full ml-2">
                em aberto
              </span>
            </div>
          </h4>
          <TournamentList games={GAMES} tournaments={tournaments} />
        </section>
        {isDesktop && (
          <section className="w-1/4 flex flex-col gap-4 mt-4 shrink-0">
            <DynamicMatchesSection />
            <div className="sticky top-16">
              <SquareAd />
            </div>
          </section>
        )}
      </section>
    </>
  );
}
