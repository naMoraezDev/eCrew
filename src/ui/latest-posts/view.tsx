import { PostCard } from "../post-card";
import { LatestPostsProps } from "./types";

export function LatestPostsView({
  games,
  postList,
  isDesktop,
}: LatestPostsProps) {
  return (
    <section className="flex flex-col gap-3 p-4 bg-gradient-to-tr from-zinc-950 via-zinc-950 to-zinc-900 rounded-xl">
      <h2 className="text-md font-kanit font-bold">Últimas notícias</h2>
      <PostCard
        variant="filled"
        post={postList.posts[0]}
        orientation={isDesktop ? "horizontal" : "vertical"}
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
