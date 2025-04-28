"use client";

import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { PostCard } from "../post-card";
import { FeaturedProps } from "./types";

export function FeaturedView({ posts, games, isDesktop }: FeaturedProps) {
  return (
    <section className="flex flex-col gap-3">
      <div
        className={`${
          isDesktop ? "rounded-lg" : "aspect-square"
        } overflow-hidden flex relative group`}
      >
        <Image
          priority
          width={1280}
          height={720}
          alt={posts.posts[0].title}
          src={posts.posts[0].post_thumbnail.URL}
          className="object-cover size-full aspect-video animate-zoom"
        />
        <div className="z-10">
          <div
            className={`${
              isDesktop ? "p-10" : "p-6"
            } size-full absolute top-0 left-0 flex flex-col gap-6 justify-center`}
          >
            <span className="text-sm font-kanit font-bold bg-zinc-900 bg-opacity-30 px-4 py-1 rounded-2xl w-fit backdrop-blur-sm flex items-center gap-2">
              <Image
                width={20}
                height={20}
                className="rounded-md"
                alt={posts.posts[0].title}
                src={
                  games.find(
                    (game) =>
                      game.slug ===
                      Object.values(posts.posts[0].categories)[0].slug
                  )?.icon_url ?? ""
                }
              />
              {Object.values(posts.posts[0].categories)[0].name}
            </span>
            <h2
              className={`${
                isDesktop ? "w-1/2" : "w-full"
              } text-3xl font-kanit font-bold line-clamp-2`}
            >
              {posts.posts[0].title}
            </h2>
            <div
              className={`${
                isDesktop ? "w-1/2" : "w-full"
              } w-1/2 text-base line-clamp-2 text-zinc-400 font-kanit`}
              dangerouslySetInnerHTML={{
                __html: posts.posts[0].excerpt,
              }}
            />
          </div>
        </div>
        <Link
          className="size-full absolute top-0 left-0 z-10"
          href={`noticias/${Object.values(posts.posts[0].categories)[0].slug}/${
            posts.posts[0].slug
          }`}
        />
        <div className="size-full absolute top-0 left-0 bg-gradient-to-tr from-zinc-950 to-transparent group-hover:opacity-80 duration-300" />
        <div className="size-10 flex items-center justify-center absolute top-0 right-0 bg-violet-500 bg-opacity-20 backdrop-blur-sm rounded-bl-lg">
          <FaStar />
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-3 px-4 lg:px-0">
        <PostCard
          gradient
          variant="outlined"
          post={posts.posts[1]}
          isDesktop={isDesktop}
          orientation={isDesktop ? "horizontal" : "vertical"}
          gameIconUrl={
            games.find(
              (game) =>
                game.slug === Object.values(posts.posts[1].categories)[0].slug
            )?.icon_url ?? ""
          }
        />
        <PostCard
          gradient
          variant="outlined"
          post={posts.posts[2]}
          isDesktop={isDesktop}
          orientation={isDesktop ? "horizontal" : "vertical"}
          gameIconUrl={
            games.find(
              (game) =>
                game.slug === Object.values(posts.posts[2].categories)[0].slug
            )?.icon_url ?? ""
          }
        />
      </div>
    </section>
  );
}
