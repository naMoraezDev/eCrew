import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MatchProps } from "./types";
import { MatchSEO } from "@/seo/match";
import { SquareAd } from "@/ui/square-ad";
import { Tournaments } from "@/ui/tournaments";
import { StreamsList } from "@/ui/streams-list";
import { GameName } from "@/ui/tournaments/types";
import { HorizontalAd } from "@/ui/horizontal-ad";
import { RiErrorWarningFill } from "react-icons/ri";
import { UpcomingMatches } from "@/ui/upcoming-matches";
import ecrewLogo from "@/assets/images/e_posts_logo.svg";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { PandascoreService } from "@/services/pandascore/pandascore.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function MatchView({ id, isDesktop }: MatchProps) {
  const [games, match] = await Promise.all([
    new EcrewApiService(httpClientFactory()).getGames(),
    new PandascoreService(httpClientFactory()).getMatchById(id),
  ]);

  const opponents = await new PandascoreService(
    httpClientFactory()
  ).getMatchOpponents(id);

  const teamA = opponents.opponents[0];
  const teamB = opponents.opponents[1];

  const streams = await Promise.all(
    match.streams_list
      .filter((stream) => stream.raw_url.includes("twitch") && stream.embed_url)
      .map(
        async (stream) =>
          await new EcrewApiService(httpClientFactory())
            .getTwitchUser(stream.raw_url.split("/").pop() || "")
            .catch(() => null)
      )
  );

  const isLive = match.status === "running";

  function getGameName(): GameName {
    switch (match.videogame.slug) {
      case "cod-mw":
        return "Call of Duty";
      case "cs-go":
        return "Counter Strike";
      case "dota-2":
        return "Dota 2";
      case "league-of-legends":
        return "League of Legends";
      case "r6-siege":
        return "Rainbow 6 Siege";
      case "valorant":
        return "Valorant";
      default:
        return "Counter Strike";
    }
  }

  return (
    <>
      <MatchSEO match={match} />
      <section className="w-full flex gap-4">
        <section
          className={`
            ${isDesktop ? "w-3/4 mt-4" : "w-full"} 
            flex flex-col gap-4 mb-10
          `}
        >
          <Breadcrumb className="text-zinc-50">
            <BreadcrumbList className="text-zinc-50">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/partidas"
                  className="hover:text-zinc-300 duration-300"
                >
                  partidas
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-zinc-50">
                  {match.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <section className="text-2xl font-kanit font-bold flex items-center gap-4">
            <Image
              width={40}
              height={40}
              className="size-10 rounded-lg"
              alt={
                games.find((g) => g.slug === match.videogame.slug)?.name || ""
              }
              src={
                games.find((g) => g.slug === match.videogame.slug)?.icon_url ||
                ""
              }
            />
            {match.league.name}
            <div>
              <span className="font-medium text-violet-500 text-sm px-3 bg-violet-500 bg-opacity-10 rounded-full ml-2">
                {match.status === "finished"
                  ? "Finalizada"
                  : match.status === "not_started"
                  ? "Não iniciada"
                  : "Em andamento"}
              </span>
            </div>
            <Link
              href={`/torneios/${match.tournament.id}`}
              className="text-sm font-medium flex items-center gap-2 ml-auto"
            >
              Ir para página do torneio <MdOutlineKeyboardDoubleArrowRight />
            </Link>
          </section>
          <section
            className={`
              ${isLive ? "pl-12" : "pl-6"}
              py-4 pr-6 flex gap-10 items-center bg-zinc-900 bg-opacity-50 rounded-lg text-sm font-kanit font-bold relative overflow-hidden
            `}
          >
            <div className="flex gap-6 items-center">
              {teamA && teamB && (
                <>
                  <div className="flex gap-4 items-center">
                    <Image
                      width={32}
                      height={32}
                      alt={teamA.name}
                      src={teamA.image_url || ecrewLogo}
                    />
                  </div>
                  <div className="flex gap-2">
                    <span>vs</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Image
                      width={32}
                      height={32}
                      alt={teamB.name}
                      src={teamB.image_url || ecrewLogo}
                    />
                  </div>
                  <div className="h-8 w-px bg-zinc-800" />
                </>
              )}
            </div>
            <span>{match.name}</span>
            {!isLive && (
              <>
                <div className="h-8 w-px bg-zinc-800" />
                <span>
                  {new Date(match.begin_at).toLocaleDateString("pt-BR", {
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </span>
              </>
            )}
            {isLive && (
              <>
                <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-5 -z-10" />
                <div className="absolute top-0 left-0 h-full z-10 rotate-180">
                  <span className="flex h-full justify-center items-center text-sm text-red-500 font-kanit font-bold rotate-90 group-hover:animate-fade-out">
                    LIVE
                  </span>
                </div>
              </>
            )}
          </section>
          <section className="flex items-center gap-6 bg-zinc-900 bg-opacity-50 rounded-lg px-6 py-4 font-kanit flex-wrap">
            {match.number_of_games > 1 && (
              <>
                <span className="flex items-center gap-2 text-base">
                  melhor de{" "}
                  <span className="font-bold text-violet-500">
                    {match.number_of_games}
                  </span>
                </span>
                <div className="h-6 w-px bg-zinc-800" />
              </>
            )}
            {match.games.map((game) => (
              <div key={game.id} className="text-sm flex items-center gap-2">
                <span>jogo {game.position}</span>
                <span className="bg-zinc-800 bg-opacity-50 rounded-full px-3 py-1">
                  {game.status === "finished"
                    ? "finalizado"
                    : game.status === "not_started"
                    ? "nao iniciado"
                    : "em andamento"}
                </span>
              </div>
            ))}
          </section>
          {match.status !== "not_started" && (
            <section>
              <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg text-sm font-kanit font-medium">
                <li className="flex px-6 py-2 text-violet-500">Placar</li>
                <li className="flex px-6 py-2 relative">
                  <span className="w-1/4 flex items-center gap-2">
                    <Image
                      width={32}
                      height={32}
                      alt={teamA.name}
                      className="size-4"
                      src={teamA.image_url || ecrewLogo}
                    />
                    {teamA.name}
                  </span>
                  <span className="w-1/4">{match.results[0].score}</span>
                  {teamA.id === match.winner_id && (
                    <>
                      <span className="text-xs bg-green-500 bg-opacity-10 px-2 rounded-full text-green-500 flex items-center">
                        vitoria
                      </span>
                      <div className="size-full absolute top-0 left-0 bg-gradient-to-r from-green-500 via-transparent to-transparent opacity-5" />
                    </>
                  )}
                </li>
                <li className="flex px-6 py-2 relative">
                  <span className="w-1/4 flex items-center gap-2">
                    <Image
                      width={32}
                      height={32}
                      alt={teamB.name}
                      className="size-4"
                      src={teamB.image_url || ecrewLogo}
                    />
                    {teamB.name}
                  </span>
                  <span className="w-1/4">{match.results[1].score}</span>
                  {teamB.id === match.winner_id && (
                    <>
                      <span className="text-xs bg-green-500 bg-opacity-10 px-2 rounded-full text-green-500 flex items-center">
                        vitoria
                      </span>
                      <div className="size-full absolute top-0 left-0 bg-gradient-to-r from-green-500 via-transparent to-transparent opacity-5" />
                    </>
                  )}
                </li>
              </ul>
            </section>
          )}
          {!Boolean(streams.length) && (
            <span className="px-6 py-3 font-kanit text-sm flex items-center gap-2 self-center">
              <RiErrorWarningFill />
              Nenhuma transmissão disponível no momento.
            </span>
          )}
          {Boolean(streams.length) && (
            <StreamsList match={match} streams={streams} />
          )}
          <HorizontalAd />
          {teamA && teamB && (
            <section className="flex gap-4 text-center">
              <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg w-1/2 text-sm font-medium font-kanit">
                <li className="px-6 py-2">
                  Line up <span className="text-violet-500">{teamA.name}</span>
                </li>
                {teamA.players.map((player, index) => (
                  <li key={index} className="px-6 py-2 flex items-center gap-3">
                    {player.nationality && (
                      <Image
                        width={48}
                        height={36}
                        className="w-5 rounded-sm"
                        alt={player.nationality}
                        src={`https://flagcdn.com/48x36/${player.nationality?.toLowerCase()}.png`}
                      />
                    )}
                    {player.name}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg w-1/2 text-sm font-medium font-kanit">
                <li className="px-6 py-2">
                  Line up <span className="text-violet-500">{teamB.name}</span>
                </li>
                {teamB.players.map((player, index) => (
                  <li key={index} className="px-6 py-2 flex items-center gap-3">
                    {player.nationality && (
                      <Image
                        width={48}
                        height={36}
                        alt={player.nationality}
                        className="w-5 rounded-sm"
                        src={`https://flagcdn.com/48x36/${player.nationality?.toLowerCase()}.png`}
                      />
                    )}
                    {player.name}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
        {isDesktop && (
          <section className="w-1/4 flex flex-col gap-4 mt-4 shrink-0">
            <Tournaments game={getGameName()} />
            <UpcomingMatches />
            <SquareAd />
          </section>
        )}
      </section>
    </>
  );
}
