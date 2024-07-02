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
      {posts.posts.map((post, index) => {
        if (index !== currentIndex) return null;
        return (
          <div key={index} className="animate-long-fade">
            <Image
              quality={100}
              alt={post.title}
              priority={index === 0}
              src={post.post_thumbnail.URL}
              width={post.post_thumbnail.width}
              height={post.post_thumbnail.height}
              className="object-cover size-full absolute top-0 left-0 animate-zoom"
            />
          </div>
        );
      })}
      {posts.posts.map((post, index) => {
        if (index !== currentIndex) return null;
        return (
          <div key={index} className="animate-long-fade z-10">
            <div
              className={`${
                isDesktop ? "p-10" : "p-6"
              } size-full absolute top-0 left-0 flex flex-col gap-6 justify-center`}
            >
              <span className="text-sm font-kanit font-bold bg-zinc-800 bg-opacity-30 px-4 py-1 rounded-2xl w-fit backdrop-blur-sm flex items-center gap-2">
                <Image
                  src={
                    games.find((game) => game.slug === post.categories[0].slug)
                      ?.icon_url || ""
                  }
                  alt={post.categories[0].name}
                  width={20}
                  height={20}
                  className="rounded-md"
                  onError={() => console.log("error")}
                />
                {post.categories[0].name}
              </span>
              <h2
                className={`${
                  isDesktop ? "w-1/2" : "w-full"
                } text-3xl font-kanit font-bold line-clamp-2`}
              >
                {post.title}
              </h2>
              <div
                className={`${
                  isDesktop ? "w-1/2" : "w-full"
                } w-1/2 text-base line-clamp-2 text-zinc-400`}
                dangerouslySetInnerHTML={{
                  __html: post.excerpt,
                }}
              />
            </div>
          </div>
        );
      })}
      <Link
        className="size-full absolute top-0 left-0 z-10"
        href={`noticias/${posts.posts[currentIndex].categories[0].slug}/${posts.posts[currentIndex].slug}`}
      />
      <div className="size-full absolute top-0 left-0 bg-gradient-to-tr from-zinc-950 to-transparent" />
      <section className="absolute bottom-4 right-4 flex gap-2 px-4 py-2 bg-zinc-800 bg-opacity-50 backdrop-blur-sm rounded-2xl z-10">
        {posts.posts.map((_post, index) => (
          <button
            type="button"
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`${
              index === currentIndex
                ? "bg-zinc-200 w-10"
                : "bg-zinc-800 bg-opacity-80 w-2"
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
