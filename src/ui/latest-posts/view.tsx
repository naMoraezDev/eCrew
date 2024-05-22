import { PostCard } from "../post-card";
import { LatestPostsProps } from "./types";

export function LatestPostsView({ postList, isDesktop }: LatestPostsProps) {
  return (
    <section className="flex flex-col gap-3 p-4 bg-gradient-to-tr from-zinc-950 via-zinc-950 to-zinc-900 rounded-xl">
      <h2 className="text-md font-kanit font-bold">Últimas notícias</h2>
      <PostCard
        variant="filled"
        post={postList.posts[1]}
        orientation={isDesktop ? "horizontal" : "vertical"}
      />
      <PostCard
        size="small"
        variant="filled"
        orientation="horizontal"
        post={postList.posts[1]}
      />
      <PostCard
        size="small"
        variant="filled"
        orientation="horizontal"
        post={postList.posts[1]}
      />
      <PostCard
        size="small"
        variant="filled"
        orientation="horizontal"
        post={postList.posts[1]}
      />
    </section>
  );
}
