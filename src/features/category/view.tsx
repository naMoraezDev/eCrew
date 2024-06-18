import Link from "next/link";
import Image from "next/image";
import { useCategory } from "./_io";
import { CategoryProps } from "./types";
import { PostCard } from "@/ui/post-card";
import { PopularTags } from "@/ui/popular-tags";
import { MostReadPosts } from "@/ui/most-read-posts";
import exitLagBanner from "@/assets/images/exitlag-banner.png";
import { EpostsApiService } from "@/services/eposts-api.service";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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

  const postList = Array.from({ length: 12 }, () => posts.posts[1]);

  return (
    <section className="w-full flex gap-4">
      <section
        className={`
          ${isDesktop ? "w-3/4 mt-4" : "w-full"} flex flex-col gap-6 mb-10
        `}
      >
        <Breadcrumb className="text-zinc-50">
          <BreadcrumbList className="text-zinc-50">
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/noticias"
                className="hover:text-zinc-300 duration-300"
              >
                notícias
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-zinc-300">
                {category}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {getBackgroundData()?.background && (
          <div className="group rounded-lg overflow-hidden relative">
            <Image
              priority
              alt="background"
              src={getBackgroundData()?.background || ""}
              className={`
                ${getBackgroundData()?.styles}
                w-full h-[200px] object-cover group-hover:scale-105 duration-300
              `}
            />
            <a
              target="_blank"
              rel="noreferrer"
              href={getBackgroundData()?.url}
              className="absolute w-full h-full top-0 left-0"
            />
          </div>
        )}
        <div
          className={`
            ${isDesktop ? "grid-cols-3 gap-y-10" : "grid-cols-1 gap-y-3"}
            grid gap-x-4
          `}
        >
          {postList.map((post, index) => (
            <PostCard
              key={index}
              post={post}
              gameIconUrl={games[4].icon_url}
              size={isDesktop ? "medium" : "small"}
              variant={isDesktop ? "outlined" : "filled"}
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
            <section className="p-2 relative">
              <Image
                src={exitLagBanner}
                alt="exit_lag_banner"
                className="rounded-lg"
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.exitlag.com/"
                className="absolute top-0 left-0 w-full h-full"
              />
            </section>
          </div>
        </section>
      )}
    </section>
  );
}
