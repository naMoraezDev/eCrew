import Link from "next/link";
import Image from "next/image";
import { TournamentsProps } from "./types";
import { IoIosPodium } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function TournamentsView({ game }: TournamentsProps) {
  const [
    csTournaments,
    lolTournaments,
    valTournaments,
    codTournaments,
    r6Tournaments,
    dotaTournaments,
    games,
  ] = await Promise.all([
    new EcrewApiService(httpClientFactory()).getRunningTournaments("csgo"),
    new EcrewApiService(httpClientFactory()).getRunningTournaments("lol"),
    new EcrewApiService(httpClientFactory()).getRunningTournaments("valorant"),
    new EcrewApiService(httpClientFactory()).getRunningTournaments("codmw"),
    new EcrewApiService(httpClientFactory()).getRunningTournaments("r6siege"),
    new EcrewApiService(httpClientFactory()).getRunningTournaments("dota2"),
    new EcrewApiService(httpClientFactory()).getGames(),
  ]);
  const getTournaments = () => {
    switch (game) {
      case "Call of Duty":
        return codTournaments.slice(0, 6);
      case "Counter Strike":
        return csTournaments.slice(0, 6);
      case "Dota 2":
        return dotaTournaments.slice(0, 6);
      case "League of Legends":
        return lolTournaments.slice(0, 6);
      case "Rainbow 6 Siege":
        return r6Tournaments.slice(0, 6);
      case "Valorant":
        return valTournaments.slice(0, 6);
      default:
        return [
          ...csTournaments.slice(0, 2),
          ...lolTournaments.slice(0, 2),
          ...valTournaments.slice(0, 2),
        ];
    }
  };

  return (
    <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg">
      <h4 className="font-kanit font-medium text-sm flex items-center gap-2 px-6 py-3">
        <IoIosPodium />
        <span>
          Torneios{" "}
          {game && (
            <span>
              de <span className="text-violet-500">{game}</span>
            </span>
          )}
        </span>
      </h4>
      {!Boolean(getTournaments().length) && (
        <span className="px-6 py-3 font-kanit text-sm flex items-center gap-2 self-center">
          <RiErrorWarningFill />
          Nenhum torneio sendo realizado.
        </span>
      )}
      {getTournaments().map((tournament, index) => (
        <li key={index} className="text-sm flex gap-3 px-6 py-3">
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
      <Link className="self-center text-sm font-kanit p-3" href="/torneios">
        ver todos
      </Link>
    </ul>
  );
}
