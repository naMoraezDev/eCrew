import Link from "next/link";
import { PostCard } from "../post-card";
import { LatestPostsProps } from "./types";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiNewspaperClippingFill } from "react-icons/pi";

export function LatestPostsView({ games, postList }: LatestPostsProps) {
  return (
    <section className="flex flex-col gap-3">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-md font-kanit font-bold flex items-center gap-2">
          <PiNewspaperClippingFill /> Últimas notícias
        </h2>
        <Link
          href="/noticias/mais-noticias"
          className="text-sm font-kanit flex items-center gap-2"
        >
          Ver mais
          <FaLongArrowAltRight />
        </Link>
      </div>

      <PostCard
        size="small"
        variant="filled"
        post={postList.posts[0]}
        orientation="horizontal"
        gameIconUrl={
          games.find(
            (game) => game.slug === postList.posts[0].categories[0].slug
          )?.icon_url
        }
      />
      <PostCard
        size="small"
        variant="filled"
        orientation="horizontal"
        post={postList.posts[1]}
        gameIconUrl={
          games.find(
            (game) => game.slug === postList.posts[1].categories[0].slug
          )?.icon_url
        }
      />
      <PostCard
        size="small"
        variant="filled"
        orientation="horizontal"
        post={postList.posts[2]}
        gameIconUrl={
          games.find(
            (game) => game.slug === postList.posts[2].categories[0].slug
          )?.icon_url
        }
      />
      <PostCard
        size="small"
        variant="filled"
        orientation="horizontal"
        post={postList.posts[3]}
        gameIconUrl={
          games.find(
            (game) => game.slug === postList.posts[3].categories[0].slug
          )?.icon_url
        }
      />
    </section>
  );
}
