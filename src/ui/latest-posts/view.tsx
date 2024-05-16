import { PostCard } from "../post-card";
import { LatestPostsProps } from "./types";

export function LatestPostsView({ postList }: LatestPostsProps) {
  return (
    <section className="flex flex-col gap-3 p-4 bg-gradient-to-tr from-gray-950 via-gray-950 to-violet-950 rounded-xl">
      <h2 className="text-md font-kanit font-bold">Últimas notícias</h2>
      <PostCard
        variant="filled"
        orientation="horizontal"
        post={postList.posts[0]}
      />
      <PostCard
        size="small"
        variant="filled"
        orientation="horizontal"
        post={postList.posts[0]}
      />
      <PostCard
        size="small"
        variant="filled"
        orientation="horizontal"
        post={postList.posts[0]}
      />
      <PostCard
        size="small"
        variant="filled"
        orientation="horizontal"
        post={postList.posts[0]}
      />
    </section>
  );
}