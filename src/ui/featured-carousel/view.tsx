"use client";

import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useFeaturedCarousel } from "./_io";
import { FeaturedCarouselProps } from "./types";

export function FeaturedCarouselView({
  posts,
  games,
  isDesktop,
}: FeaturedCarouselProps) {
  const { currentIndex, scrollToSlide } = useFeaturedCarousel({ games, posts });

  return (
    <section
      className={`${
        isDesktop && "rounded-lg"
      } w-full h-[400px] overflow-hidden flex relative`}
    >
      {posts.map((post, index) => {
        if (index !== currentIndex) return null;
        return (
          <div key={index} className="animate-long-fade">
            <Image
              priority
              width={1280}
              height={720}
              alt={post.data.post.title}
              src={post.data.post.featuredImage.node.sourceUrl}
              className="object-cover size-full absolute top-0 left-0 animate-zoom"
            />
          </div>
        );
      })}
      {posts.map((post, index) => {
        if (index !== currentIndex) return null;
        return (
          <div key={index} className="animate-long-fade z-10">
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
                  alt={post.data.post.categories.edges[0].node.name}
                  src={
                    games.find(
                      (game) =>
                        game.slug ===
                        post.data.post.categories.edges[0].node.slug
                    )?.icon_url || ""
                  }
                />
                {post.data.post.categories.edges[0].node.name}
              </span>
              <h2
                className={`${
                  isDesktop ? "w-1/2" : "w-full"
                } text-3xl font-kanit font-bold line-clamp-2`}
              >
                {post.data.post.title}
              </h2>
              <div
                className={`${
                  isDesktop ? "w-1/2" : "w-full"
                } w-1/2 text-base line-clamp-2 text-zinc-400`}
                dangerouslySetInnerHTML={{
                  __html: post.data.post.excerpt,
                }}
              />
            </div>
          </div>
        );
      })}
      <Link
        className="size-full absolute top-0 left-0 z-10"
        href={`noticias/${posts[currentIndex].data.post.categories.edges[0].node.slug}/${posts[currentIndex].data.post.slug}`}
      />
      <div className="size-full absolute top-0 left-0 bg-gradient-to-tr from-zinc-950 to-transparent" />
      <section className="absolute bottom-4 right-4 flex gap-2 px-4 py-2 bg-zinc-900 bg-opacity-50 backdrop-blur-sm rounded-2xl z-10">
        {posts.map((_post, index) => (
          <button
            type="button"
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`${
              index === currentIndex
                ? "bg-zinc-200 w-10"
                : "bg-zinc-900 bg-opacity-80 w-2"
            } h-2 rounded-full duration-500`}
          />
        ))}
      </section>
      <div className="size-10 flex items-center justify-center absolute top-0 right-0 bg-violet-500 bg-opacity-20 backdrop-blur-sm rounded-bl-lg">
        <FaStar className="" />
      </div>
    </section>
  );
}
