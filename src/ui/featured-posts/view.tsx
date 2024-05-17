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
      <div className="w-full h-full absolute top-0 left-0 flex flex-col gap-4 justify-end p-10 z-10">
        <PostCard orientation="horizontal" post={postList.posts[0]} />
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}
