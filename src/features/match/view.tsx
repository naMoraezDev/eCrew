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
import { FaTwitch } from "react-icons/fa";
import { Tournaments } from "@/ui/tournaments";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function MatchView({ id, isDesktop }: MatchProps) {
  const [games, match] = await Promise.all([
    new EcrewApiService(httpClientFactory()).getGames(),
    new EcrewApiService(httpClientFactory()).getMatchById(id),
  ]);

  const [teamA, teamB] = await Promise.all([
    new EcrewApiService(httpClientFactory()).getTeamBySlug(
      match.opponents[0].opponent.slug
    ),
    new EcrewApiService(httpClientFactory()).getTeamBySlug(
      match.opponents[1].opponent.slug
    ),
  ]);

  const streams = await Promise.all(
    match.streams_list.map(
      async (stream) =>
        await new EcrewApiService(httpClientFactory()).getTwitchUser(
          stream.raw_url.split("/").pop() || ""
        )
    )
  );

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
        <section className="text-sm font-kanit font-medium flex items-center gap-2">
          <Image
            width={32}
            height={32}
            className="size-4"
            alt={games.find((g) => g.slug === match.videogame.slug)?.name || ""}
            src={
              games.find((g) => g.slug === match.videogame.slug)?.icon_url || ""
            }
          />
          {match.videogame.name}
        </section>
        <section className="py-4 pl-12 pr-6 flex gap-10 items-center bg-zinc-900 bg-opacity-50 rounded-lg text-sm font-kanit font-bold relative overflow-hidden">
          <div className="flex gap-6 items-center">
            <div className="flex gap-4 items-center">
              <Image
                width={32}
                height={32}
                alt={match.opponents[0].opponent.name}
                src={match.opponents[0].opponent.image_url}
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
                src={match.opponents[1].opponent.image_url}
              />
            </div>
          </div>
          <div className="h-8 w-px bg-zinc-800" />
          <span>{match.name}</span>
          <div className="h-8 w-px bg-zinc-800" />
          <span>{match.league.name}</span>
          <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-10 -z-10" />
          <div className="absolute top-0 left-0 h-full z-10 rotate-180">
            <span className="flex h-full justify-center items-center text-sm text-red-500 font-kanit font-bold rotate-90 group-hover:animate-fade-out">
              LIVE
            </span>
          </div>
        </section>
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
                  src={match.opponents[0].opponent.image_url}
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
                  src={match.opponents[1].opponent.image_url}
                />
                {match.opponents[1].opponent.name}
              </span>
              <span className="w-1/4">{match.results[1].score}</span>
            </li>
          </ul>
        </section>
        <section className="flex gap-4 items-center">
          <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg w-1/2 text-sm font-medium font-kanit">
            <li className="px-6 py-2 text-violet-500">
              Line up {match.opponents[0].opponent.acronym}
            </li>
            {teamA.players.map((player, index) => (
              <li key={index} className="px-6 py-2">
                {match.opponents[0].opponent.acronym} - {player.name}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg w-1/2 text-sm font-medium font-kanit">
            <li className="px-6 py-2 text-violet-500">
              Line up {match.opponents[1].opponent.acronym}
            </li>
            {teamB.players.map((player, index) => (
              <li key={index} className="px-6 py-2">
                {match.opponents[1].opponent.acronym} - {player.name}
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full flex gap-4">
          <ul className="w-1/4">
            <span className="text-sm font-kanit font-medium flex items-center gap-2 mb-4">
              <FaTwitch className="text-violet-500" />
              Transmissões ao vivo
            </span>
            {streams.map((stream, index) => (
              <li key={index} className="flex items-center gap-3 px-4 py-2">
                <Image
                  width={64}
                  height={64}
                  className="size-10 rounded-full"
                  alt={stream.data[0].display_name}
                  src={stream.data[0].profile_image_url}
                />
                <div className="flex flex-col font-kanit">
                  <span className="font-bold">
                    {stream.data[0].display_name}
                  </span>
                  <span className="text-zinc-400 text-sm">
                    {stream.data[0].description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="w-3/4 relative pb-[56.25%] h-0 rounded-normal rounded-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={
                match.streams_list[0].embed_url +
                `&parent=${process.env.NEXT_PUBLIC_SITE_HOST}`
              }
            />
          </div>
        </section>
      </section>
      {isDesktop && (
        <section className="w-1/4 flex flex-col gap-4 mt-4 shrink-0">
          <Tournaments />
        </section>
      )}
    </section>
  );
}
