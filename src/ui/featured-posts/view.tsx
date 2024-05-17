import Image from "next/image";
import { PostCard } from "../post-card";
import { FeaturedPostsProps } from "./types";

export function FeaturedPostsView({ postList }: FeaturedPostsProps) {
  const featuredPosts = [
    postList.posts[0],
    postList.posts[0],
    postList.posts[0],
    postList.posts[0],
  ];

  return (
    <section className="relative h-[320px] w-full overflow-hidden rounded-t-lg">
      {featuredPosts.map((post, index) => (
        <Image
          key={index}
          alt={post.title}
          src={post.post_thumbnail.URL}
          width={post.post_thumbnail.width}
          height={post.post_thumbnail.height}
          className="h-[320px] w-full object-cover absolute top-0 left-0 blur-md"
        />
      ))}
      <div className="w-full h-full absolute top-0 left-0 flex flex-col gap-3 justify-center p-10 z-10">
        <h2 className="text-md font-kanit font-bold">Em destaque</h2>
        <PostCard
          variant="outlined"
          orientation="horizontal"
          post={postList.posts[0]}
        />
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-zinc-950 to-[rgba(0,0,0,0.2)]" />
    </section>
  );
}
