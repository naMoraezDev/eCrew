import Link from "next/link";
import Image from "next/image";
import { useNavMenu } from "./_io";
import { PostCard } from "../post-card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { IoIosPodium } from "react-icons/io";
import { PiNewspaperFill } from "react-icons/pi";
import { Category, NavMenuProps } from "./types";
import ecrewLogo from "@/assets/images/e_posts_logo.svg";
import { BsFillLightningChargeFill } from "react-icons/bs";

import "./styles.css";

export function NavMenuView({
  games,
  csPosts,
  r6Posts,
  lolPosts,
  codPosts,
  dotaPosts,
  pastMatches,
  r6Tournaments,
  csTournaments,
  valorantPosts,
  lolTournaments,
  codTournaments,
  upcomingMatches,
  dotaTournaments,
  valorantTournaments,
}: NavMenuProps) {
  const {
    tournaments,
    setListType,
    setSelectedGame,
    selectedCategory,
    getMatchesByType,
    getPostsByCategory,
    setSelectedCategory,
    getTournamentsByGame,
  } = useNavMenu({
    games,
    csPosts,
    r6Posts,
    lolPosts,
    codPosts,
    dotaPosts,
    pastMatches,
    r6Tournaments,
    csTournaments,
    valorantPosts,
    lolTournaments,
    codTournaments,
    upcomingMatches,
    dotaTournaments,
    valorantTournaments,
  });

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="/noticias" className="flex items-center gap-2">
              <PiNewspaperFill />
              Notícias
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-zinc-900 bg-opacity-80 border-transparent text-zinc-50 overflow-hidden !p-0 w-full  backdrop-blur-lg">
            <div className="flex gap-4">
              <div className="flex flex-col gap-6 bg-zinc-950 bg-opacity-90 p-4 w-1/3">
                {games.map((game) => (
                  <div
                    key={game.id}
                    className="w-full flex items-center gap-4 cursor-pointer"
                    onMouseOver={() =>
                      setSelectedCategory(game.slug as Category)
                    }
                  >
                    <span className="text-sm font-kanit">{game.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 py-4 pr-4 w-2/3">
                <span className="text-md font-kanit font-bold flex items-center gap-2 w-full justify-between">
                  {games.find((game) => game.slug === selectedCategory)?.name}
                </span>
                <div className="flex gap-3">
                  {getPostsByCategory().data.posts.edges.map((post) => (
                    <div key={post.node.id} className="animate-fade w-[250px]">
                      <PostCard
                        post={post.node}
                        variant="outlined"
                        gameIconUrl={
                          games.find((game) => game.slug === selectedCategory)
                            ?.icon_url
                        }
                      />
                    </div>
                  ))}
                </div>
                <Link
                  href={`/noticias/${selectedCategory}`}
                  className="self-center text-sm px-3 py-1 bg-violet-500 bg-opacity-10 rounded-full text-violet-500 mt-auto font-kanit"
                >
                  ver mais
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="/torneios" className="flex items-center gap-2">
              <IoIosPodium />
              Torneios
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-zinc-900 bg-opacity-80 border-transparent text-zinc-50 overflow-hidden !p-0 w-full backdrop-blur-lg">
            <div className="flex w-[700px]">
              <div className="flex flex-col gap-6 bg-zinc-950 bg-opacity-90 p-4 w-1/3">
                {games
                  .filter((game) =>
                    tournaments.find((t) => t.videogame.slug === game.slug)
                  )
                  .map((game) => (
                    <div
                      key={game.id}
                      className="w-full flex items-center gap-4 cursor-pointer"
                      onMouseOver={() => setSelectedGame(game.slug as Category)}
                    >
                      <span className="text-sm font-kanit">{game.name}</span>
                    </div>
                  ))}
              </div>
              <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg w-2/3">
                {getTournamentsByGame().map((tournament) => (
                  <li
                    key={tournament.id}
                    className="text-sm flex gap-3 px-6 py-3 relative animate-fade-in"
                  >
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
                    <div className="flex flex-col gap-1 font-kanit ">
                      <span className="font-bold">
                        {tournament.league.name}
                      </span>
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
                <Link
                  href="/torneios"
                  className="self-center text-sm px-3 py-1 bg-violet-500 bg-opacity-10 rounded-full text-violet-500 my-4 mt-auto font-kanit"
                >
                  ver todos
                </Link>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="/partidas" className="flex items-center gap-2">
              <BsFillLightningChargeFill />
              Partidas
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-zinc-900 bg-opacity-80 border-transparent text-zinc-50 overflow-hidden !p-0 w-full backdrop-blur-lg">
            <div className="flex w-[700px]">
              <div className="flex flex-col gap-6 bg-zinc-950 bg-opacity-90 p-4 w-1/3">
                <div
                  onMouseOver={() => setListType("past")}
                  className="w-full flex items-center gap-4 cursor-pointer"
                >
                  <span className="text-sm font-kanit py-1 px-3 bg-zinc-900 rounded-full">
                    partidas encerradas
                  </span>
                </div>
                <div
                  onMouseOver={() => setListType("upcoming")}
                  className="w-full flex items-center gap-4 cursor-pointer"
                >
                  <span className="text-sm font-kanit py-1 px-3 bg-zinc-900 rounded-full">
                    próximas partidas
                  </span>
                </div>
              </div>
              <ul className="flex flex-col bg-zinc-900 bg-opacity-50 rounded-lg w-2/3">
                {getMatchesByType().map((match) => (
                  <li
                    key={match.id}
                    className="px-6 py-3 flex gap-4 relative animate-fade-in"
                  >
                    <div className="h-full flex justify-center items-center gap-2 z-10 shrink-0">
                      <Image
                        width={16}
                        height={16}
                        alt="opponent 1"
                        src={
                          match.opponents[0]?.opponent?.image_url || ecrewLogo
                        }
                      />
                      {match.status === "running" && (
                        <span className="text-xs font-kanit font-bold">
                          {match.results[0].score}
                        </span>
                      )}
                      <span className="text-xs font-bold">vs</span>
                      {match.status === "running" && (
                        <span className="text-xs font-kanit font-bold">
                          {match.results[1].score}
                        </span>
                      )}
                      <Image
                        width={16}
                        height={16}
                        alt="opponent 1"
                        src={
                          match.opponents[1]?.opponent?.image_url || ecrewLogo
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-1 overflow-hidden">
                      <span className="font-kanit text-sm font-bold text-nowrap hover:animate-text-slide">
                        {match.name}
                      </span>
                      <span className="text-xs font-kanit">
                        {new Date(match.begin_at).toLocaleDateString("pt-BR", {
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        })}
                      </span>
                    </div>
                    <Link
                      href={`/partidas/${match.id}`}
                      className="size-full absolute top-0 left-0"
                    />
                  </li>
                ))}
                <Link
                  href="/torneios"
                  className="self-center text-sm px-3 py-1 bg-violet-500 bg-opacity-10 rounded-full text-violet-500 my-4 mt-auto"
                >
                  ver todas
                </Link>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
