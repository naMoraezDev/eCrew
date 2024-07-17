import "./styles.css";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PostProps } from "./types";
import { Newsletter } from "@/ui/newsletter";
import { PopularTags } from "@/ui/popular-tags";
import { PostContent } from "@/ui/post-content";
import { ShareButtons } from "@/ui/share-buttons";
import { HorizontalAd } from "@/ui/horizontal-ad";
import { ArticleReader } from "@/ui/article-reader";
import { MostReadPosts } from "@/ui/most-read-posts";
import { MorePostsAbout } from "@/ui/more-posts-about";

export async function PostView({ post, isDesktop, morePostsAbout }: PostProps) {
  return (
    <section className="w-full max-w-[1000px] mx-auto flex gap-4">
      <article
        className={`
          ${isDesktop ? "w-3/4 mt-4" : "w-full"} 
          flex flex-col gap-4 mb-10
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
              <BreadcrumbLink
                className="hover:text-zinc-300 duration-300"
                href={`/noticias/${post.data.post.categories.edges[0].node.slug}`}
              >
                {post.data.post.categories.edges[0].node.name.toLocaleLowerCase()}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-zinc-50">
                {post.data.post.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <section className="w-full bg-zinc-900 bg-opacity-50 rounded-lg overflow-hidden">
          <figure className="w-full h-[250px]">
            <Image
              priority
              width={1280}
              height={720}
              alt={post.data.post.title}
              className="h-full object-cover"
              src={post.data.post.featuredImage.node.sourceUrl}
            />
          </figure>
          <div
            className={`
              ${isDesktop ? "p-10" : "py-10 px-6"}
              w-full flex flex-col gap-4
            `}
          >
            <h1 className="text-3xl font-kanit font-bold">
              {post.data.post.title}
            </h1>
            <div
              className="text-sm text-slate-300"
              dangerouslySetInnerHTML={{ __html: post.data.post.excerpt }}
            />
          </div>
          <div className="w-full">
            <div
              className={`
                ${isDesktop ? "py-4 px-10" : "py-4 px-6"}
                w-full text-xs font-bold text-slate-300 bg-zinc-900 rounded-b-lg flex items-center justify-between
              `}
            >
              <time>
                {new Date(post.data.post.modified).toLocaleDateString("pt-BR", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
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
          <section className="w-full px-10 py-6 flex items-center gap-4 bg-zinc-900 bg-opacity-50 rounded-lg">
            <Image
              width={64}
              height={64}
              className="rounded-full"
              alt={post.data.post.author.node.name}
              src={post.data.post.author.node.avatar.url}
            />
            <div className="text-2xl font-kanit font-bold">
              <span>{post.data.post.author.node.name}</span>
              <p className="text-slate-300 text-base font-normal line-clamp-1">
                autor
              </p>
            </div>
          </section>
          <ArticleReader
            isDesktop={isDesktop}
            title={post.data.post.title}
            content={post.data.post.content}
            excerpt={post.data.post.excerpt}
          />
        </section>
        <HorizontalAd />
        <PostContent content={post.data.post.content} isDesktop={isDesktop} />
        <section className="w-full px-10 py-6 flex items-center gap-4 bg-zinc-900 bg-opacity-50 rounded-lg">
          <Image
            width={64}
            height={64}
            className="rounded-full"
            alt={post.data.post.author.node.name}
            src={post.data.post.author.node.avatar.url}
          />
          <div className="text-2xl font-kanit font-bold">
            <span>{post.data.post.author.node.name}</span>
            <p className="text-slate-300 text-base font-normal">autor</p>
          </div>
        </section>
        {!isDesktop && (
          <MorePostsAbout
            posts={morePostsAbout.data.posts}
            category={post.data.post.categories.edges[0].node.name}
          />
        )}
        <HorizontalAd />
        <Newsletter isDesktop={isDesktop} />
      </article>
      {isDesktop && (
        <section className="w-1/4 mt-4 relative">
          <div className="flex flex-col gap-4 sticky top-16">
            <MorePostsAbout
              posts={morePostsAbout.data.posts}
              category={post.data.post.categories.edges[0].node.name}
            />
            <MostReadPosts />
            <PopularTags />
          </div>
        </section>
      )}
    </section>
  );
}
