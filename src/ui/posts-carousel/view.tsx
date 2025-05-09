import "./styles.css";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { PostCard } from "../post-card";
import { usePostsCarousel } from "./_io";
import { PostsCarouselProps } from "./types";
import { FaArrowRight } from "react-icons/fa";

export function PostsCarouselView({
  games,
  category,
  postsList,
  isDesktop,
  customTitle,
}: PostsCarouselProps) {
  const { gameIconUrl, getGameCover, getGameTypeIcon } = usePostsCarousel({
    games,
    category,
    postsList,
    isDesktop,
  });

  return (
    <section
      className={`${
        isDesktop && "rounded-lg"
      } flex flex-col gap-3 bg-zinc-900 bg-opacity-50 p-4`}
    >
      <div className="w-full flex justify-between items-center z-10">
        <h2 className="text-md font-kanit font-bold flex items-center gap-2">
          <Image
            width={16}
            height={16}
            alt="game-type"
            className="invert"
            src={getGameTypeIcon()}
          />
          {customTitle ?? category}
        </h2>
      </div>
      <Carousel
        className="relative z-10"
        opts={{ align: "start", dragFree: true }}
      >
        <CarouselContent>
          {postsList.posts.map((post, index) => (
            <CarouselItem
              key={index}
              className={isDesktop ? "basis-1/3" : "basis-[60%]"}
            >
              <PostCard
                post={post}
                variant="outlined"
                isDesktop={isDesktop}
                gameIconUrl={gameIconUrl}
              />
            </CarouselItem>
          ))}
          <CarouselItem className={isDesktop ? "basis-1/3" : "basis-[60%]"}>
            <Link
              href={`/noticias/${
                Object.values(postsList.posts[0].categories)[0].slug
              }`}
              className="relative w-full h-full flex justify-center items-center rounded-lg overflow-hidden group"
            >
              <Image
                alt="game-cover"
                src={getGameCover()}
                className="w-full h-full object-cover group-hover:scale-105 duration-300"
              />
              <div className="absolute w-full bottom-0 left-0 flex justify-center items-center bg-zinc-900 bg-opacity-30 py-4 backdrop-blur-sm">
                <span className="text-2xl font-kanit font-bold flex items-center gap-2 group-hover:translate-x-4 duration-300">
                  VER MAIS <FaArrowRight />
                </span>
              </div>
            </Link>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
