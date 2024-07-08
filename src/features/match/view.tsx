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
import { Tournaments } from "@/ui/tournaments";
import { StreamsList } from "@/ui/streams-list";
import { RiErrorWarningFill } from "react-icons/ri";
import ecrewLogo from "@/assets/images/e_posts_logo.svg";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function MatchView({ id, isDesktop }: MatchProps) {
  const [games, match] = await Promise.all([
    new EcrewApiService(httpClientFactory()).getGames(),
    new EcrewApiService(httpClientFactory()).getMatchById(id),
  ]);

  const [teamA, teamB] = await Promise.all([
    match.opponents[0]?.opponent
      ? new EcrewApiService(httpClientFactory()).getTeamBySlug(
          match.opponents[0].opponent.slug
        )
      : null,
    match.opponents[1]?.opponent
      ? new EcrewApiService(httpClientFactory()).getTeamBySlug(
          match.opponents[1].opponent.slug
        )
      : null,
  ]);

  const streams = await Promise.all(
    match.streams_list.map(
      async (stream) =>
        await new EcrewApiService(httpClientFactory())
          .getTwitchUser(stream.raw_url.split("/").pop() || "")
          .catch(() => null)
    )
  );

  const isLive = match.status === "running";

  return (
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
            alt={games.find((g) => g.slug === match.videogame.slug)?.name || ""}
            src={
              games.find((g) => g.slug === match.videogame.slug)?.icon_url || ""
            }
          />
          {match.videogame.name}
          <div>
            <span className="font-medium text-violet-500 text-sm px-3 bg-violet-500 bg-opacity-20 rounded-full ml-2">
              {match.status === "ended"
                ? "Finalizada"
                : match.status === "not_started"
                ? "Não iniciada"
                : "Em andamento"}
            </span>
          </div>
        </section>
        <section
          className={`
            ${isLive ? "pl-12 " : "pl-6"}
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
                    alt={match.opponents[0].opponent.name}
                    src={match.opponents[0].opponent.image_url || ecrewLogo}
                  />
                </div>
                <div className="flex gap-2">
                  <span>vs</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    width={32}
                    height={32}
                    alt={match.opponents[1].opponent.name}
                    src={match.opponents[1].opponent.image_url || ecrewLogo}
                  />
                </div>
                <div className="h-8 w-px bg-zinc-800" />
              </>
            )}
          </div>
          <span>{match.name}</span>
          <div className="h-8 w-px bg-zinc-800" />
          <span>{match.league.name}</span>
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
              <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-10 -z-10" />
              <div className="absolute top-0 left-0 h-full z-10 rotate-180">
                <span className="flex h-full justify-center items-center text-sm text-red-500 font-kanit font-bold rotate-90 group-hover:animate-fade-out">
                  LIVE
                </span>
              </div>
            </>
          )}
        </section>
        {isLive && (
          <section>
            <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg text-sm font-kanit font-medium">
              <li className="flex px-6 py-2 text-violet-500">Placar</li>
              <li className="flex px-6 py-2">
                <span className="w-1/4 flex items-center gap-2">
                  <Image
                    width={32}
                    height={32}
                    className="size-4"
                    alt={match.opponents[0].opponent.name}
                    src={match.opponents[0].opponent.image_url || ecrewLogo}
                  />
                  {match.opponents[0].opponent.name}
                </span>
                <span className="w-1/4">{match.results[0].score}</span>
              </li>
              <li className="flex px-6 py-2">
                <span className="w-1/4 flex items-center gap-2">
                  <Image
                    width={32}
                    height={32}
                    className="size-4"
                    alt={match.opponents[1].opponent.name}
                    src={match.opponents[1].opponent.image_url || ecrewLogo}
                  />
                  {match.opponents[1].opponent.name}
                </span>
                <span className="w-1/4">{match.results[1].score}</span>
              </li>
            </ul>
          </section>
        )}
        {Boolean(match.streams_list.length) && (
          <StreamsList match={match} streams={streams} />
        )}
        {teamA && teamB && (
          <section className="flex gap-4 text-center">
            <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg w-1/2 text-sm font-medium font-kanit">
              <li className="px-6 py-2 text-violet-500">
                Line up {match.opponents[0].opponent.acronym}
              </li>
              {teamA.players.map((player, index) => (
                <li key={index} className="px-6 py-2">
                  {match.opponents[0].opponent.acronym} {player.name}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg w-1/2 text-sm font-medium font-kanit">
              <li className="px-6 py-2 text-violet-500">
                Line up {match.opponents[1].opponent.acronym}
              </li>
              {teamB.players.map((player, index) => (
                <li key={index} className="px-6 py-2">
                  {match.opponents[1].opponent.acronym} {player.name}
                </li>
              ))}
            </ul>
          </section>
        )}
        {!Boolean(match.streams_list.length) && (
          <span className="px-6 py-3 font-kanit text-sm flex items-center gap-2 self-center">
            <RiErrorWarningFill />
            Nenhuma transmissão disponível no momento.
          </span>
        )}
      </section>
      {isDesktop && (
        <section className="w-1/4 flex flex-col gap-4 mt-4 shrink-0">
          <Tournaments />
        </section>
      )}
    </section>
  );
}
