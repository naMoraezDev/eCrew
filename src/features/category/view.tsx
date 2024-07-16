import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useCategory } from "./_io";
import { CategoryProps } from "./types";
import { PostCard } from "@/ui/post-card";
import { SquareAd } from "@/ui/square-ad";
import { Newsletter } from "@/ui/newsletter";
import { PopularTags } from "@/ui/popular-tags";
import { HorizontalAd } from "@/ui/horizontal-ad";
import { MostReadPosts } from "@/ui/most-read-posts";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export async function CategoryView({
  term,
  page = 1,
  category,
  isDesktop,
}: CategoryProps) {
  const { getBackgroundData } = useCategory({ category });
  const [games, postList] = await Promise.all([
    new EcrewApiService(new FetchHttpClientAdapter()).getGames(),
    term
      ? new EcrewApiService(new FetchHttpClientAdapter()).getPostsBySearch(term)
      : new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
          number: "12",
          page: page.toString(),
          category: category || "all",
        }),
  ]);
  const firstGroup = term ? postList.posts : postList.posts.slice(0, 6);
  const secondGroup = term ? [] : postList.posts.slice(6, 12);

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
                {category === "all"
                  ? "mais notícias"
                  : term
                  ? "busca"
                  : postList.posts[0]?.categories[0]?.name.toLocaleLowerCase()}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {term && (
          <section>
            {Boolean(postList.posts.length) ? (
              <span className="text-2xl font-kanit font-bold text-zinc-50">
                Resultados para{" "}
                <span className="text-violet-500">{`"${term}"`}</span>:
              </span>
            ) : (
              <span className="text-2xl font-kanit font-bold text-zinc-50">
                Nenhum resultado para{" "}
                <span className="text-violet-500">{term}</span>
              </span>
            )}
          </section>
        )}
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
          {firstGroup.map((post, index) => (
            <PostCard
              key={index}
              post={post}
              size={isDesktop ? "medium" : "small"}
              variant={isDesktop ? "outlined" : "filled"}
              orientation={isDesktop ? "vertical" : "horizontal"}
              gameIconUrl={
                games.find((game) => game.slug === post.categories[0].slug)
                  ?.icon_url
              }
            />
          ))}
        </div>
        <HorizontalAd />
        <div
          className={`
            ${isDesktop ? "grid-cols-3 gap-y-10" : "grid-cols-1 gap-y-3"}
            grid gap-x-4
          `}
        >
          {secondGroup.map((post, index) => (
            <PostCard
              key={index}
              post={post}
              size={isDesktop ? "medium" : "small"}
              variant={isDesktop ? "outlined" : "filled"}
              orientation={isDesktop ? "vertical" : "horizontal"}
              gameIconUrl={
                games.find((game) => game.slug === post.categories[0].slug)
                  ?.icon_url
              }
            />
          ))}
        </div>
        {!term && postList.found > 12 && (
          <section className="w-full flex items-center justify-center text-base gap-2">
            {page > 1 && (
              <Link
                href={
                  category === "all"
                    ? `/noticias/mais-noticias${
                        page > 1 ? `?page=${page - 1}` : ""
                      }`
                    : `/noticias/${category}?page=${page - 1}`
                }
                className="bg-zinc-900 bg-opacity-50 rounded-lg size-8 flex items-center justify-center hover:bg-opacity-10 duration-300"
              >
                <MdOutlineKeyboardDoubleArrowLeft size={18} />
              </Link>
            )}
            <div className="p-1 bg-zinc-900 bg-opacity-50 rounded-lg min-w-8 h-8 flex items-center justify-center">
              {page}
            </div>
            {postList.posts.length >= 12 && (
              <Link
                href={
                  category === "all"
                    ? `/noticias/mais-noticias?page=${page + 1}`
                    : `/noticias/${category}?page=${page + 1}`
                }
                className="bg-zinc-900 bg-opacity-50 rounded-lg size-8 flex items-center justify-center hover:bg-opacity-10 duration-300"
              >
                <MdOutlineKeyboardDoubleArrowRight size={18} />
              </Link>
            )}
          </section>
        )}
        <Newsletter isDesktop={isDesktop} />
      </section>
      {isDesktop && (
        <section className="w-1/4 mt-4 relative">
          <div className="flex flex-col gap-4 sticky top-16">
            <MostReadPosts />
            <PopularTags />
            <section className="p-2 relative">
              <SquareAd />
            </section>
          </div>
        </section>
      )}
    </section>
  );
}
