/* eslint-disable react-hooks/rules-of-hooks */

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
import { Channel } from "@/ui/channel";
import { CategoryProps } from "./types";
import { PostCard } from "@/ui/post-card";
import { SquareAd } from "@/ui/square-ad";
import { Newsletter } from "@/ui/newsletter";
import { GAMES } from "@/shared/utils/static";
import { Tournaments } from "@/ui/tournaments";
import { PopularTags } from "@/ui/popular-tags";
import { HorizontalAd } from "@/ui/horizontal-ad";
import { MostReadPosts } from "@/ui/most-read-posts";
import { getGameName } from "@/shared/utils/functions";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { WordpressService } from "@/services/wordpress/wordpress.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export async function CategoryView({
  term,
  page,
  category,
  isDesktop,
}: CategoryProps) {
  const { getBackgroundData, getChannelId } = useCategory({ category });
  const [postsList] = await Promise.all([
    new WordpressService(new FetchHttpClientAdapter()).getPostsByCategory({
      number: 12,
      page: page ?? 1,
      slug: category ?? "",
    }),
  ]);
  const firstGroup = term ? postsList.posts : postsList.posts.slice(0, 6);
  const secondGroup = term ? [] : postsList.posts.slice(6, 12);

  const hasNextPage = postsList.found > postsList.posts.length;
  const hasPreviousPage = (page ?? 0) > 1;

  return (
    <section className="w-full flex gap-4">
      <section className="w-full flex flex-col gap-6 mb-10">
        <Breadcrumb className={`${!isDesktop && "mx-4"} text-zinc-50`}>
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
                {category === "" ? "mais notícias" : term ? "busca" : category}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {term && (
          <section className={!isDesktop ? "mx-4" : ""}>
            {Boolean(postsList.posts.length) ? (
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
          <div
            className={`${
              isDesktop && "rounded-lg"
            } group overflow-hidden relative`}
          >
            <Image
              priority
              alt="background"
              src={getBackgroundData()?.background || ""}
              className={`
                ${getBackgroundData()?.styles}
                ${isDesktop ? "h-[200px]" : "h-[100px]"}
                w-full object-cover group-hover:scale-105 duration-300
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
        {category && (
          <Channel isDesktop={isDesktop} channelId={getChannelId() ?? ""} />
        )}
        <div
          className={`
            ${isDesktop ? "grid-cols-4 gap-y-10" : "grid-cols-1 gap-y-3 mx-4"}
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
                GAMES.find(
                  (game) => game.slug === Object.values(post.categories)[0].slug
                )?.icon_url
              }
            />
          ))}
        </div>
        <HorizontalAd isDesktop={isDesktop} />
        {secondGroup.length > 0 && (
          <div
            className={`
            ${isDesktop ? "grid-cols-3 gap-y-10" : "grid-cols-1 gap-y-3 mx-4"}
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
                  GAMES.find(
                    (game) =>
                      game.slug === Object.values(post.categories)[0].slug
                  )?.icon_url
                }
              />
            ))}
          </div>
        )}
        <section className="w-full flex items-center justify-center text-base gap-2">
          {hasPreviousPage && (
            <Link
              href={
                category === ""
                  ? `/noticias/mais-noticias${
                      hasPreviousPage ? `?page=${(page ?? 1) - 1}` : ""
                    }`
                  : `/noticias/${category}${
                      hasPreviousPage ? `?page=${(page ?? 1) - 1}` : ""
                    }`
              }
              className="py-1 px-3 bg-zinc-900 bg-opacity-50 rounded-lg flex items-center gap-2 hover:bg-opacity-10 duration-300 text-sm font-kanit"
            >
              <MdOutlineKeyboardDoubleArrowLeft /> página anterior
            </Link>
          )}
          {hasNextPage && (
            <Link
              href={
                category === ""
                  ? `/noticias/mais-noticias${
                      hasNextPage ? `?page=${(page ?? 1) + 1}` : ""
                    }`
                  : `/noticias/${category}${
                      hasNextPage ? `?page=${(page ?? 1) + 1}` : ""
                    }`
              }
              className="py-1 px-3 bg-zinc-900 bg-opacity-50 rounded-lg flex items-center gap-2 hover:bg-opacity-10 duration-300 text-sm font-kanit"
            >
              próxima página <MdOutlineKeyboardDoubleArrowRight />
            </Link>
          )}
        </section>
        <Newsletter isDesktop={isDesktop} />
        {!isDesktop && (
          <section className="mt-4 flex flex-col gap-4">
            <Tournaments
              game={
                category === ""
                  ? undefined
                  : getGameName(
                      Object.values(postsList.posts[0].categories)[0].slug
                    )
              }
            />
            <div className="flex flex-col gap-4 mx-4">
              <MostReadPosts />
              <PopularTags />
              <SquareAd />
            </div>
          </section>
        )}
      </section>
    </section>
  );
}
