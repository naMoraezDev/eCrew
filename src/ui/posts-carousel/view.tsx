import "./styles.css";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { PostCard } from "../post-card";
import { PostsCarouselProps } from "./types";
import { HiOutlineViewList } from "react-icons/hi";

export function PostsCarouselView({
  category,
  postList,
  isDesktop,
}: PostsCarouselProps) {
  return (
    <section className="flex flex-col gap-3 bg-gradient-to-tr from-zinc-950 via-zinc-950 to-zinc-900 rounded-lg p-3">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-md font-kanit font-bold">{category}</h2>
        <HiOutlineViewList className="size-6 cursor-pointer" title="Ver tudo" />
      </div>
      <Carousel opts={{ align: "start" }} className="relative">
        <CarouselContent className="gap-4">
          {postList.posts.map((post, index) => (
            <CarouselItem
              key={index}
              className={isDesktop ? "basis-1/4" : "basis-[80%]"}
            >
              <PostCard post={post} variant="outlined" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
