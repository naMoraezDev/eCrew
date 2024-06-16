import "./styles.css";
import Image from "next/image";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { PostCard } from "../post-card";
import { usePostsCarousel } from "./_io";
import { PostsCarouselProps } from "./types";
import { HiOutlineViewList } from "react-icons/hi";

export function PostsCarouselView({
  games,
  category,
  postList,
  isDesktop,
}: PostsCarouselProps) {
  const { gameIconUrl } = usePostsCarousel({
    games,
    category,
    postList,
    isDesktop,
  });

  return (
    <section className="relative flex flex-col gap-3 rounded-lg p-3">
      <div className="w-full flex justify-between items-center z-10">
        <h2 className="text-md font-kanit font-bold">{category}</h2>
        <HiOutlineViewList className="size-6 cursor-pointer" title="Ver tudo" />
      </div>
      <Carousel opts={{ align: "start" }} className="relative z-10">
        <CarouselContent className="gap-4">
          {postList.posts.map((post, index) => (
            <CarouselItem
              key={index}
              className={isDesktop ? "basis-1/4" : "basis-[80%]"}
            >
              <PostCard
                post={post}
                variant="filled"
                gameIconUrl={gameIconUrl}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="size-full absolute top-0 left-0 flex justify-center items-center">
        <Image
          width={1920}
          height={1080}
          alt="background"
          src={games.find((game) => game.name === category)?.logo_url || ""}
          className={`
            ${isDesktop ? "w-1/2" : "w-full"}
            object-cover object-center invert opacity-30 blur-sm
          `}
        />
      </div>
    </section>
  );
}
