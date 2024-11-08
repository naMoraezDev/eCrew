import Link from "next/link";
import Image from "next/image";
import { TournamentsProps } from "./types";
import { IoIosPodium } from "react-icons/io";
import { GAMES } from "@/shared/utils/static";
import { RiErrorWarningFill } from "react-icons/ri";
import { PandascoreService } from "@/services/pandascore/pandascore.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function TournamentsView({ game }: TournamentsProps) {
  const getTournaments = async () => {
    switch (game) {
      case "Call of Duty":
        return await new PandascoreService(
          httpClientFactory()
        ).getTournamentsByVideogame({
          page: 1,
          size: 6,
          type: "running",
          videogame: "codmw",
        });
      case "Counter Strike":
        return await new PandascoreService(
          httpClientFactory()
        ).getTournamentsByVideogame({
          page: 1,
          size: 6,
          type: "running",
          videogame: "csgo",
        });
      case "Dota 2":
        return await new PandascoreService(
          httpClientFactory()
        ).getTournamentsByVideogame({
          page: 1,
          size: 6,
          type: "running",
          videogame: "dota2",
        });
      case "League of Legends":
        return await new PandascoreService(
          httpClientFactory()
        ).getTournamentsByVideogame({
          page: 1,
          size: 6,
          type: "running",
          videogame: "lol",
        });
      case "Rainbow 6 Siege":
        return await new PandascoreService(
          httpClientFactory()
        ).getTournamentsByVideogame({
          page: 1,
          size: 6,
          type: "running",
          videogame: "r6siege",
        });
      case "Valorant":
        return await new PandascoreService(
          httpClientFactory()
        ).getTournamentsByVideogame({
          page: 1,
          size: 6,
          type: "running",
          videogame: "valorant",
        });
      default:
        const [csGo, leagueOfLegends, valorant] = await Promise.all([
          new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
            page: 1,
            size: 2,
            type: "running",
            videogame: "csgo",
          }),
          new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
            page: 1,
            size: 2,
            type: "running",
            videogame: "lol",
          }),
          new PandascoreService(httpClientFactory()).getTournamentsByVideogame({
            page: 1,
            size: 2,
            type: "running",
            videogame: "valorant",
          }),
        ]);
        return [...csGo, ...leagueOfLegends, ...valorant];
    }
  };

  const [tournaments] = await Promise.all([getTournaments()]);

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
      {!Boolean(tournaments.length) && (
        <span className="px-6 py-3 font-kanit text-sm flex items-center gap-2 self-center">
          <RiErrorWarningFill />
          Nenhum torneio sendo realizado.
        </span>
      )}
      {tournaments.map((tournament, index) => (
        <li key={index} className="text-sm flex gap-3 px-6 py-3 relative">
          <Image
            width={40}
            height={40}
            src={
              GAMES.find((game) => game.slug === tournament.videogame.slug)
                ?.icon_url || ""
            }
            alt={
              GAMES.find((game) => game.slug === tournament.videogame.slug)
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
          <Link
            href={`/torneios/${tournament.id}`}
            className="size-full absolute top-0 left-0"
          />
        </li>
      ))}
      <Link className="self-center text-sm font-kanit p-3" href="/torneios">
        ver todos
      </Link>
    </ul>
  );
}
