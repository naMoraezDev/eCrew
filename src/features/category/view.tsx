import Link from "next/link";
import Image from "next/image";
import { useCategory } from "./_io";
import { CategoryProps } from "./types";
import { PostCard } from "@/ui/post-card";
import { PopularTags } from "@/ui/popular-tags";
import { MostReadPosts } from "@/ui/most-read-posts";
import { EpostsApiService } from "@/services/eposts-api.service";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export async function CategoryView({
  page = 1,
  category,
  isDesktop,
}: CategoryProps) {
  const { getBackgroundData } = useCategory({ category });

  const [tags, games, posts] = await Promise.all([
    new EpostsApiService(new FetchHttpClientAdapter()).getTags(),
    new EpostsApiService(new FetchHttpClientAdapter()).getGames(),
    new EpostsApiService(new FetchHttpClientAdapter()).getPostsByCategory(
      "destaques"
    ),
  ]);

  const mostReadPosts = {
    ...posts,
    posts: [
      posts.posts[1],
      posts.posts[1],
      posts.posts[1],
      posts.posts[1],
      posts.posts[1],
    ],
  };

  const postList = Array.from({ length: 16 }, () => posts.posts[1]);

  return (
    <section className="w-full flex gap-4">
      <section
        className={`
          ${isDesktop ? "w-3/4 mt-4" : "w-full"} flex flex-col gap-10 mb-10
        `}
      >
        {getBackgroundData()?.background && (
          <Image
            priority
            src={getBackgroundData()?.background || ""}
            alt="background"
            className={`
              object-${getBackgroundData()?.position || "center"}
              w-full h-[200px] object-cover rounded-lg
            `}
          />
        )}
        <div
          className={`
            ${isDesktop ? "grid-cols-4" : "grid-cols-1"}
            grid gap-x-4 gap-y-10
          `}
        >
          {postList.map((post, index) => (
            <PostCard
              key={index}
              post={post}
              variant="outlined"
              gameIconUrl={games[4].icon_url}
              size={isDesktop ? "medium" : "small"}
              orientation={isDesktop ? "vertical" : "horizontal"}
            />
          ))}
        </div>
        <section className="w-full flex items-center justify-center text-sm gap-2">
          <Link
            href={`/noticias/${category}?page=${page - 1}`}
            className="bg-zinc-900 border border-zinc-600 rounded-lg size-7 flex items-center justify-center"
          >
            <MdOutlineKeyboardDoubleArrowLeft size={16} />
          </Link>
          <div className="p-1 bg-zinc-900 border border-zinc-600 rounded-lg min-w-7 h-7 flex items-center justify-center">
            {page}
          </div>
          <Link
            href={`/noticias/${category}?page=${page + 1}`}
            className="bg-zinc-900 border border-zinc-600 rounded-lg size-7 flex items-center justify-center"
          >
            <MdOutlineKeyboardDoubleArrowRight size={16} />
          </Link>
        </section>
      </section>
      {isDesktop && (
        <section className="w-1/4 mt-4 relative">
          <div className="flex flex-col gap-4 sticky top-16">
            <MostReadPosts postList={mostReadPosts} />
            <PopularTags tags={tags.tags} />
          </div>
        </section>
      )}
    </section>
  );
}
