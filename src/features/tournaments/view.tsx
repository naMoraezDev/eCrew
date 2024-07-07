import { TournamentProps } from "./types";
import { IoIosPodium } from "react-icons/io";
import { TournamentList } from "@/ui/tournament-list";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { Tournament } from "@/services/types/tournaments.types";
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
    games,
    csTournaments,
    r6Tournaments,
    lolTournaments,
    codTournaments,
    valTournaments,
    dotaTournaments,
  ] = await Promise.all([
    new EcrewApiService(httpClientFactory()).getGames(),
    new EcrewApiService(httpClientFactory()).getRunningTournaments("csgo"),
    new EcrewApiService(httpClientFactory()).getRunningTournaments("r6siege"),
    new EcrewApiService(httpClientFactory()).getRunningTournaments("lol"),
    new EcrewApiService(httpClientFactory()).getRunningTournaments("codmw"),
    new EcrewApiService(httpClientFactory()).getRunningTournaments("valorant"),
    new EcrewApiService(httpClientFactory()).getRunningTournaments("dota2"),
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
    <section className="w-full flex gap-4">
      <section
        className={`
          ${isDesktop ? "w-3/4 mt-4" : "w-full"} 
          flex flex-col gap-10 mb-10
        `}
      >
        <h4 className="font-kanit font-bold text-3xl flex items-center gap-2 px-6 py-3">
          <IoIosPodium />
          Torneios
        </h4>
        <TournamentList games={games} tournaments={tournaments} />
      </section>
      {isDesktop && (
        <section className="w-1/4 flex flex-col gap-4 mt-4 shrink-0">
          <DynamicMatchesSection />
        </section>
      )}
    </section>
  );
}
