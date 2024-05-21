import Image from "next/image";
import { PostCard } from "../post-card";
import { FeaturedPostsProps } from "./types";

export function FeaturedPostsView({ postList, isDesktop }: FeaturedPostsProps) {
  const featuredPosts = [
    postList.posts[0],
    postList.posts[0],
    postList.posts[0],
    postList.posts[0],
  ];

  return (
    <section className="relative w-full overflow-hidden rounded-t-lg">
      <div
        className={`
          ${isDesktop ? "p-10" : "p-4"}
          flex flex-col gap-3 justify-center
        `}
      >
        <h2 className="text-md font-kanit font-bold">Em destaque</h2>
        <PostCard
          variant="outlined"
          post={postList.posts[0]}
          orientation={isDesktop ? "horizontal" : "vertical"}
        />
      </div>
      {featuredPosts.map((post, index) => (
        <Image
          key={index}
          alt={post.title}
          src={post.post_thumbnail.URL}
          width={post.post_thumbnail.width}
          height={post.post_thumbnail.height}
          className="size-full object-cover absolute top-0 left-0 blur-md -z-10"
        />
      ))}
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-zinc-950 to-[rgba(0,0,0,0.2)] -z-10" />
    </section>
  );
}
