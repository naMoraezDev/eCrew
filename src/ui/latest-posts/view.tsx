import Link from "next/link";
import { PostCard } from "../post-card";
import { LatestPostsProps } from "./types";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiNewspaperClippingFill } from "react-icons/pi";

export function LatestPostsView({
  games,
  postsList,
  isDesktop,
}: LatestPostsProps) {
  return (
    <section className={`${!isDesktop && "mx-4"} flex flex-col gap-3`}>
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
      {postsList.posts.map((post) => (
        <PostCard
          size="small"
          key={post.ID}
          variant="filled"
          isDesktop={isDesktop}
          orientation="horizontal"
          post={post}
          gameIconUrl={
            games.find((game) => game.slug === postsList.posts[0]?.slug)
              ?.icon_url
          }
        />
      ))}
    </section>
  );
}
