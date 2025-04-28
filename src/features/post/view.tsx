import "./styles.css";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PostProps } from "./types";
import { SquareAd } from "@/ui/square-ad";
import { Newsletter } from "@/ui/newsletter";
import { SaveButton } from "@/ui/save-button";
import { Tournaments } from "@/ui/tournaments";
import { PopularTags } from "@/ui/popular-tags";
import { PostContent } from "@/ui/post-content";
import { ShareButtons } from "@/ui/share-buttons";
import { HorizontalAd } from "@/ui/horizontal-ad";
import { ArticleReader } from "@/ui/article-reader";
import { MostReadPosts } from "@/ui/most-read-posts";
import { MorePostsAbout } from "@/ui/more-posts-about";
import { getGameName } from "@/shared/utils/functions";

export async function PostView({ post, isDesktop, morePostsAbout }: PostProps) {
  return (
    <section className="w-full flex gap-4">
      <article
        className={`
          ${isDesktop ? "w-3/4 mt-4" : "w-full"} 
          flex flex-col gap-10 mb-10
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
              <BreadcrumbLink
                className="hover:text-zinc-300 duration-300"
                href={`/noticias/${Object.values(post.categories)[0].slug}`}
              >
                {Object.values(post.categories)[0].name.toLocaleLowerCase()}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>
        <section
          className={`${
            isDesktop ? "rounded-lg" : "rounded-t-xl"
          } w-full bg-zinc-900 bg-opacity-50 overflow-hidden`}
        >
          <figure className={`${isDesktop ? "h-[300px]" : "h-[180px]"} w-full`}>
            <Image
              priority
              width={1280}
              height={720}
              alt={post.title}
              src={post.post_thumbnail.URL}
              className="h-full object-cover"
            />
          </figure>
          <div
            className={`
              ${isDesktop ? "p-10" : "py-10 px-6"}
              w-full flex flex-col gap-4
            `}
          >
            <h1 className="text-3xl font-kanit font-bold">{post.title}</h1>
            <div
              className="text-sm text-slate-300"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          </div>
          <div className="w-full">
            <div
              className={`
                ${isDesktop ? "py-4 px-10 rounded-b-lg" : "py-4 px-6"}
                w-full text-xs font-bold text-slate-300 bg-zinc-900 flex items-center justify-between
              `}
            >
              <div className="flex items-center gap-4">
                <SaveButton postSlug={post.slug} />
                <time>
                  {new Date(post.modified).toLocaleDateString("pt-BR", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <ShareButtons />
            </div>
          </div>
        </section>
        <section
          className={`
            ${isDesktop ? "grid grid-cols-2" : "flex flex-col"}
            w-full gap-4
          `}
        >
          <section
            className={`${
              isDesktop && "rounded-lg"
            } w-full px-10 py-6 flex items-center gap-4 bg-zinc-900 bg-opacity-50`}
          >
            <Image
              width={64}
              height={64}
              alt={post.author.name}
              className="rounded-full"
              src={post.author.avatar_URL}
            />
            <div className="text-2xl font-kanit font-bold">
              <span>{post.author.name}</span>
              <p className="text-slate-300 text-base font-normal line-clamp-1">
                autor
              </p>
            </div>
          </section>
          <ArticleReader
            title={post.title}
            isDesktop={isDesktop}
            content={post.content}
            excerpt={post.excerpt}
          />
        </section>
        <HorizontalAd isDesktop={isDesktop} />
        <PostContent content={post.content} isDesktop={isDesktop} />
        {!isDesktop && (
          <div className="mx-4">
            <MorePostsAbout
              posts={morePostsAbout}
              category={Object.values(post.categories)[0].name}
            />
          </div>
        )}
        <HorizontalAd isDesktop={isDesktop} />
        <Newsletter isDesktop={isDesktop} />
        {!isDesktop && (
          <section className="mt-4 relative flex flex-col gap-4">
            <MorePostsAbout
              posts={morePostsAbout}
              category={Object.values(post.categories)[0].name}
            />
            <Tournaments
              game={getGameName(Object.values(post.categories)[0].slug)}
            />
            <div className="flex flex-col gap-4 mx-4">
              <MostReadPosts />
              <PopularTags />
              <SquareAd />
            </div>
          </section>
        )}
      </article>
      {isDesktop && (
        <section className="relative w-1/4 flex flex-col gap-4 mt-4">
          <MorePostsAbout
            posts={morePostsAbout}
            category={Object.values(post.categories)[0].name}
          />
          <Tournaments
            game={getGameName(Object.values(post.categories)[0].slug)}
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
