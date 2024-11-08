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
import { TournamentProps } from "./types";
import { GAMES } from "@/shared/utils/static";
import { StreamsList } from "@/ui/streams-list";
import { TournamentSEO } from "@/seo/tournament";
import { HorizontalAd } from "@/ui/horizontal-ad";
import { TwitchUserResponse } from "@/services/types/twitch.types";
import { PandascoreService } from "@/services/pandascore/pandascore.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function TournamentView({ id, isDesktop }: TournamentProps) {
  const [tournament, rosters, standings, brackets] = await Promise.all([
    new PandascoreService(httpClientFactory()).getTournamentById(id),
    new PandascoreService(httpClientFactory()).getTournamentRosters(id),
    new PandascoreService(httpClientFactory()).getTournamentStandings(id),
    new PandascoreService(httpClientFactory()).getTournamentBrackets(id),
  ]);

  const liveMatch =
    Boolean(brackets?.length) &&
    brackets?.find((match) => match.status === "running");

  let streams: (TwitchUserResponse | null)[] = [];

  return (
    <>
      <TournamentSEO tournament={tournament} />
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
                  href="/torneios"
                  className="hover:text-zinc-300 duration-300"
                >
                  torneios
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-zinc-50">
                  {tournament.league.name} {tournament.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <section className="bg-opacity-50 bg-zinc-900 p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                {tournament.league.image_url && (
                  <Image
                    width={100}
                    height={100}
                    alt={tournament.name}
                    src={tournament.league.image_url || ""}
                    className="bg-zinc-50 p-2 rounded-lg size-24 object-contain"
                  />
                )}
                <span className="font-kanit text-2xl font-bold">
                  {tournament.league.name} {tournament.name}
                </span>
                {liveMatch && (
                  <span className="text-sm font-kanit font-bold flex gap-2">
                    <div className="size-3 rounded-full bg-red-500" />
                    Ao vivo agora
                  </span>
                )}
              </div>
              <Image
                width={40}
                height={40}
                className="size-10 rounded-lg mr-6"
                alt={
                  GAMES.find((g) => g.slug === tournament.videogame.slug)
                    ?.name || ""
                }
                src={
                  GAMES.find((g) => g.slug === tournament.videogame.slug)
                    ?.icon_url || ""
                }
              />
            </div>
          </section>
          {Boolean(streams.length) && liveMatch && (
            <StreamsList match={liveMatch as any} streams={streams} />
          )}
          <HorizontalAd isDesktop={isDesktop} />
          <section className="flex gap-4">
            <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg w-1/3 text-sm font-medium font-kanit h-fit">
              <li className="px-6 py-2">Participantes</li>
              {rosters.rosters.map((roster, index) => (
                <li
                  key={index}
                  className="px-6 py-2 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    {roster.image_url && (
                      <Image
                        width={48}
                        height={36}
                        alt={roster.name}
                        src={roster.image_url}
                        className="size-10 rounded-full object-contain"
                      />
                    )}
                    <span>{roster.name}</span>
                  </div>
                </li>
              ))}
            </ul>
            {Boolean(standings.length) && (
              <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg w-1/3 text-sm font-medium font-kanit h-fit">
                <li className="px-6 py-2">Ranking</li>
                {standings?.map((standing, index) => (
                  <li
                    key={index}
                    className="px-6 py-2 flex items-center gap-4 relative"
                  >
                    <span>{standing.rank}</span>
                    {standing.team.image_url && (
                      <Image
                        width={48}
                        height={36}
                        alt={standing.team.name}
                        src={standing.team.image_url}
                        className="size-10 rounded-full object-contain"
                      />
                    )}
                    <span>{standing.team.name}</span>
                    {index === 0 && (
                      <div className="size-full absolute top-0 left-0 bg-gradient-to-l from-green-500 to-transparent opacity-20 -z-10" />
                    )}
                    {index === standings.length - 1 && (
                      <div className="size-full absolute top-0 left-0 bg-gradient-to-l from-red-500 to-transparent opacity-10 -z-10" />
                    )}
                  </li>
                ))}
              </ul>
            )}
            <section className="flex flex-col gap-4 w-1/3">
              {liveMatch && (
                <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg text-sm font-medium font-kanit h-fit">
                  <li className="px-6 py-2">Ao vivo agora</li>
                  <li
                    className={`${
                      liveMatch.status === "finished" && "opacity-50 grayscale"
                    } pr-6 pl-8 h-16 py-2 flex items-center justify-between gap-4 relative`}
                  >
                    <div className="flex flex-col overflow-hidden">
                      <span className="whitespace-nowrap">
                        {liveMatch.name}
                      </span>
                      <span className="text-xs font-normal whitespace-nowrap">
                        {new Date(liveMatch.begin_at).toLocaleDateString(
                          "pt-BR",
                          {
                            day: "numeric",
                            hour: "numeric",
                            month: "numeric",
                            minute: "numeric",
                          }
                        )}
                      </span>
                    </div>
                    <Link
                      href={`/partidas/${liveMatch.id}`}
                      className="absolute size-full top- left-0 z-20"
                    />
                    {liveMatch.status === "running" && (
                      <>
                        <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-5 z-10" />
                        <div className="absolute top-0 left-0 h-full z-10 rotate-180">
                          <span className="flex h-full justify-center items-center text-xs text-red-500 font-kanit font-bold rotate-90 group-hover:animate-fade-out">
                            LIVE
                          </span>
                        </div>
                      </>
                    )}
                  </li>
                </ul>
              )}
              {Boolean(
                brackets.find((bracket) => bracket.status === "finished")
              ) && (
                <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg text-sm font-medium font-kanit">
                  <li className="px-6 py-2">Ultimas partidas</li>
                  {brackets
                    .filter((bracket) => bracket.status === "finished")
                    .map((lastMatch, index) => (
                      <li
                        key={index}
                        className={`${
                          lastMatch.status === "finished" &&
                          "opacity-50 grayscale"
                        } pr-6 pl-8 h-16 py-2 flex items-center gap-4 relative`}
                      >
                        <div className="flex flex-col overflow-hidden">
                          <span className="whitespace-nowrap">
                            {lastMatch.name}
                          </span>
                          <span className="text-xs font-normal whitespace-nowrap flex gap-2">
                            {new Date(lastMatch.begin_at).toLocaleDateString(
                              "pt-BR",
                              {
                                day: "numeric",
                                hour: "numeric",
                                month: "numeric",
                                minute: "numeric",
                              }
                            )}
                            {lastMatch.match_type === "best_of" && (
                              <span>
                                {" "}
                                melhor de {lastMatch.number_of_games}
                              </span>
                            )}
                          </span>
                        </div>
                        <Link
                          href={`/partidas/${lastMatch.id}`}
                          className="absolute size-full top- left-0 z-20"
                        />
                        {lastMatch.status === "running" && (
                          <>
                            <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-5 z-10" />
                            <div className="absolute top-0 left-0 h-full z-10 rotate-180">
                              <span className="flex h-full justify-center items-center text-xs text-red-500 font-kanit font-bold rotate-90 group-hover:animate-fade-out">
                                LIVE
                              </span>
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                </ul>
              )}
            </section>
          </section>
        </section>
        {isDesktop && (
          <section className="w-1/4 flex flex-col gap-4 mt-4 shrink-0">
            <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg text-sm font-medium font-kanit">
              <li className="px-6 py-2">Chaves</li>
              {brackets.map((bracket, index) => (
                <li
                  key={index}
                  className={`${
                    bracket.status === "finished" && "opacity-50 grayscale"
                  } pr-6 pl-8 h-16 py-2 flex items-center justify-between gap-4 relative`}
                >
                  <div className="flex items-center gap-4 shrink-0">
                    {bracket?.opponents[0]?.opponent?.image_url ? (
                      <Image
                        width={18}
                        height={18}
                        className="shrink-0"
                        alt={bracket.opponents[0]?.opponent.name}
                        src={bracket.opponents[0]?.opponent.image_url}
                      />
                    ) : (
                      "?"
                    )}
                    <div className="flex items-center gap-2">
                      {bracket.status !== "not_started" && (
                        <span>{bracket.results[0]?.score}</span>
                      )}
                      <span>vs</span>
                      {bracket.status !== "not_started" && (
                        <span>{bracket.results[0]?.score}</span>
                      )}
                    </div>
                    {bracket?.opponents[1]?.opponent?.image_url ? (
                      <Image
                        width={18}
                        height={18}
                        className="shrink-0"
                        alt={bracket.opponents[1]?.opponent.name}
                        src={bracket.opponents[1]?.opponent.image_url}
                      />
                    ) : (
                      "?"
                    )}
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="whitespace-nowrap">{bracket.name}</span>
                    <span className="text-xs font-normal whitespace-nowrap self-end">
                      {new Date(bracket.begin_at).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        hour: "numeric",
                        month: "numeric",
                        minute: "numeric",
                      })}
                    </span>
                  </div>
                  {Boolean(bracket.opponents?.length) && (
                    <Link
                      href={`/partidas/${bracket.id}`}
                      className="absolute size-full top- left-0 z-20"
                    />
                  )}
                  {bracket.status === "running" && (
                    <>
                      <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-5 z-10" />
                      <div className="absolute top-0 left-0 h-full z-10 rotate-180">
                        <span className="flex h-full justify-center items-center text-xs text-red-500 font-kanit font-bold rotate-90 group-hover:animate-fade-out">
                          LIVE
                        </span>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </section>
    </>
  );
}
