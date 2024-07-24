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
import { Tournaments } from "@/ui/tournaments";
import { PopularTags } from "@/ui/popular-tags";
import { HorizontalAd } from "@/ui/horizontal-ad";
import { MostReadPosts } from "@/ui/most-read-posts";
import { getGameName } from "@/shared/utils/functions";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { WordpressService } from "@/services/wordpress/wordpress.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export async function CategoryView({
  term,
  after,
  before,
  category,
  isDesktop,
}: CategoryProps) {
  const { getBackgroundData } = useCategory({ category });
  const [games, postsList] = await Promise.all([
    new EcrewApiService(new FetchHttpClientAdapter()).getGames(),
    term
      ? new WordpressService(new FetchHttpClientAdapter()).getPostsByTerm({
          term,
          number: "12",
        })
      : new WordpressService(new FetchHttpClientAdapter()).getPostsByCategory({
          after,
          before,
          number: "12",
          categorySlug: category || "all",
        }),
  ]);
  const firstGroup = term
    ? postsList.data.posts.edges
    : postsList.data.posts.edges.slice(0, 6);
  const secondGroup = term ? [] : postsList.data.posts.edges.slice(6, 12);

  const hasNextPage = postsList.data.posts.pageInfo.hasNextPage;
  const hasPreviousPage = postsList.data.posts.pageInfo.hasPreviousPage;

  return (
    <section className="w-full flex gap-4">
      <section
        className={`
          ${isDesktop ? "w-3/4 mt-4" : "w-full"} flex flex-col gap-6 mb-10
        `}
      >
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
                {category === "all"
                  ? "mais notícias"
                  : term
                  ? "busca"
                  : postsList.data.posts.edges[0]?.node.categories.edges[0]?.node.name.toLocaleLowerCase()}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {term && (
          <section className={!isDesktop ? "mx-4" : ""}>
            {Boolean(postsList.data.posts.edges.length) ? (
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
                w-full  object-cover group-hover:scale-105 duration-300
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
            ${isDesktop ? "grid-cols-3 gap-y-10" : "grid-cols-1 gap-y-3 mx-4"}
            grid gap-x-4
          `}
        >
          {firstGroup.map((post, index) => (
            <PostCard
              key={index}
              post={post.node}
              size={isDesktop ? "medium" : "small"}
              variant={isDesktop ? "outlined" : "filled"}
              orientation={isDesktop ? "vertical" : "horizontal"}
              gameIconUrl={
                games.find(
                  (game) =>
                    game.slug === post.node.categories.edges[0].node.slug
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
                post={post.node}
                size={isDesktop ? "medium" : "small"}
                variant={isDesktop ? "outlined" : "filled"}
                orientation={isDesktop ? "vertical" : "horizontal"}
                gameIconUrl={
                  games.find(
                    (game) =>
                      game.slug === post.node.categories.edges[0].node.slug
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
                category === "all"
                  ? `/noticias/mais-noticias?before=${postsList.data.posts.pageInfo.endCursor}`
                  : `/noticias/${category}?before=${postsList.data.posts.pageInfo.endCursor}`
              }
              className="py-1 px-3 bg-zinc-900 bg-opacity-50 rounded-lg flex items-center gap-2 hover:bg-opacity-10 duration-300 text-sm font-kanit"
            >
              <MdOutlineKeyboardDoubleArrowLeft /> página anterior
            </Link>
          )}
          {hasNextPage && (
            <Link
              href={
                category === "all"
                  ? `/noticias/mais-noticias?after=${postsList.data.posts.pageInfo.endCursor}`
                  : `/noticias/${category}?after=${postsList.data.posts.pageInfo.endCursor}`
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
                category === "all"
                  ? undefined
                  : getGameName(
                      postsList.data.posts.edges[0]?.node.categories.edges[0]
                        ?.node.slug
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
      {isDesktop && (
        <section className="w-1/4 mt-4 flex flex-col gap-4">
          <Tournaments
            game={
              category === "all"
                ? undefined
                : getGameName(
                    postsList.data.posts.edges[0]?.node.categories.edges[0]
                      ?.node.slug
                  )
            }
          />
          <div className="flex flex-col gap-4 sticky top-16">
            <MostReadPosts />
            <PopularTags />
            <SquareAd />
          </div>
        </section>
      )}
    </section>
  );
}
