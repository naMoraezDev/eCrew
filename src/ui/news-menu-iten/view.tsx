"use client";

import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { PostCard } from "../post-card";
import { useNewsMenuIten } from "./_io";
import { PiNewspaperFill } from "react-icons/pi";
import { Category, NewsMenuItenProps } from "./types";

export function NewsMenuItenView({
  games,
  csPosts,
  r6Posts,
  codPosts,
  lolPosts,
  dotaPosts,
  valorantPosts,
}: NewsMenuItenProps) {
  const { setSelectedCategory, getPostsByCategory, selectedCategory } =
    useNewsMenuIten({
      games,
      csPosts,
      r6Posts,
      codPosts,
      lolPosts,
      dotaPosts,
      valorantPosts,
    });

  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger asChild>
        <Link href="/noticias" className="flex items-center gap-2">
          <PiNewspaperFill />
          Notícias
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="bg-zinc-900 bg-opacity-70 border-transparent mt-4 text-zinc-50 overflow-hidden rounded-lg !p-0 w-full  backdrop-blur-lg">
        <div className="flex gap-10 w-[1024px] h-[450px]">
          <div className="flex flex-col gap-6 bg-zinc-950 bg-opacity-90 p-4 w-1/3">
            {games.map((game) => (
              <div
                key={game.id}
                className="w-full flex items-center gap-4 cursor-pointer"
                onMouseOver={() => setSelectedCategory(game.slug as Category)}
              >
                <span className="text-sm font-kanit py-1 px-3 bg-zinc-900 rounded-full">
                  {game.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 py-4 pr-4 w-2/3">
            <span className="text-md font-kanit font-bold flex items-center gap-2 w-full justify-between">
              {games.find((game) => game.slug === selectedCategory)?.name}
            </span>
            <div className="flex gap-3">
              {getPostsByCategory().data.posts.edges.map((post) => (
                <div key={post.node.id} className="animate-fade-in w-1/3">
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
              className="self-center text-sm px-3 py-1 bg-violet-500 bg-opacity-10 rounded-full text-violet-500 mt-auto"
            >
              ver mais
            </Link>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}