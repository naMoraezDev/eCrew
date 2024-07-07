import Link from "next/link";
import Image from "next/image";
import { IoIosPodium } from "react-icons/io";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function TournamentsView() {
  const [csTournaments, lolTournaments, valTournaments, games] =
    await Promise.all([
      new EcrewApiService(httpClientFactory()).getRunningTournaments("csgo"),
      new EcrewApiService(httpClientFactory()).getRunningTournaments("lol"),
      new EcrewApiService(httpClientFactory()).getRunningTournaments(
        "valorant"
      ),
      new EcrewApiService(httpClientFactory()).getGames(),
    ]);
  const tournaments = [
    ...csTournaments.slice(0, 2),
    ...lolTournaments.slice(0, 2),
    ...valTournaments.slice(0, 2),
  ];

  return (
    <ul className="flex flex-col bg-zinc-800 bg-opacity-50 rounded-lg p-3">
      <h4 className="font-kanit font-medium text-sm flex items-center gap-2 mb-3">
        <IoIosPodium />
        Campeonatos
      </h4>
      {tournaments.map((tournament, index) => (
        <li key={index} className="text-sm flex gap-3 p-3">
          <Image
            width={40}
            height={40}
            src={
              games.find((game) => game.slug === tournament.videogame.slug)
                ?.icon_url || ""
            }
            alt={
              games.find((game) => game.slug === tournament.videogame.slug)
                ?.name || ""
            }
            className="rounded-sm object-cover size-4 shrink-0 relative top-1"
          />
          <div className="flex flex-col gap-1 font-kanit ">
            <span className="font-bold">{tournament.league.name}</span>
            <span className="text-xs">
              {tournament.serie.name}
              {tournament.serie.name && " - "}
              {tournament.name}
            </span>
          </div>
        </li>
      ))}
      <Link className="self-center text-sm font-kanit mt-3" href="/campeonatos">
        ver todos
      </Link>
    </ul>
  );
}
