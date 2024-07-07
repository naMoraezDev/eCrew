import Image from "next/image";
import { TournamentProps } from "./types";
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
        <ul className="flex flex-col w-full bg-zinc-900 bg-opacity-50 rounded-lg text-zinc-300">
          <li className="px-6 py-3 flex justify-between items-center font-kanit font-bold text-sm gap-10">
            <span className="w-1/4"></span>
            <span className="w-1/4">Liga</span>
            <span className="w-1/4">Serie</span>
            <span className="w-1/4">Premiação</span>
          </li>
          {tournaments.map((tournament) => (
            <li
              key={tournament.id}
              className="px-6 py-3 flex justify-between items-center font-kanit text-xs gap-10"
            >
              <div className="flex gap-4 w-1/4">
                <Image
                  width={40}
                  height={40}
                  src={
                    games.find(
                      (game) => game.slug === tournament.videogame.slug
                    )?.icon_url || ""
                  }
                  alt={
                    games.find(
                      (game) => game.slug === tournament.videogame.slug
                    )?.name || ""
                  }
                  className="rounded-sm object-cover size-4 shrink-0 relative top-1"
                />
                <span className="text-sm">{tournament.name}</span>
              </div>
              <span className="w-1/4">{tournament.league.name}</span>
              <span className="w-1/4">{tournament.serie.name}</span>
              <span className="w-1/4">{tournament.prizepool}</span>
            </li>
          ))}
        </ul>
      </section>
      {isDesktop && (
        <section className="w-1/4 flex flex-col gap-4 mt-4 shrink-0">
          <DynamicMatchesSection />
        </section>
      )}
    </section>
  );
}
