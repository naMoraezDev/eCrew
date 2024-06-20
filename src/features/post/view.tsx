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
import { Newsletter } from "@/ui/newsletter";
import { PopularTags } from "@/ui/popular-tags";
import { PostContent } from "@/ui/post-content";
import { MostReadPosts } from "@/ui/most-read-posts";
import { MorePostsAbout } from "@/ui/more-posts-about";
import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export async function PostView({ slug, category, isDesktop }: PostProps) {
  const [tags, posts, post] = await Promise.all([
    new EpostsApiService(new FetchHttpClientAdapter()).getTags(),
    new EpostsApiService(new FetchHttpClientAdapter()).getPostsByCategory(
      "destaques"
    ),
    new EpostsApiService(new FetchHttpClientAdapter()).getPostBySlug(slug),
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
  const morePostsAbout = [
    posts.posts[1],
    posts.posts[1],
    posts.posts[1],
    posts.posts[1],
  ];

  return (
    <section className="w-full flex gap-4">
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
                href={`/noticias/${category}`}
                className="hover:text-zinc-300 duration-300"
              >
                {category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>
        <section className="w-full bg-zinc-900 rounded-lg overflow-hidden">
          <figure className="w-full h-[250px]">
            <Image
              priority
              alt={post.title}
              src={post.post_thumbnail.URL}
              className="h-full object-cover"
              width={post.post_thumbnail.width}
              height={post.post_thumbnail.height}
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
                ${isDesktop ? "py-4 px-10" : "py-4 px-6"}
                w-full text-xs font-bold text-slate-300 bg-zinc-800 rounded-b-lg
              `}
            >
              <time>
                {new Date(post.modified).toLocaleDateString("pt-BR", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>
        </section>
        <section className="w-full px-10 py-6 flex items-center gap-4 bg-zinc-900 rounded-lg">
          <Image
            width={64}
            height={64}
            alt={post.author.name}
            className="rounded-full"
            src={post.author.avatar_URL}
          />
          <div className="text-2xl font-kanit font-bold">
            <span>{post.author.name}</span>
            <p className="text-slate-300 text-base font-normal">autor</p>
          </div>
        </section>
        <PostContent content={post.content} isDesktop={isDesktop} />
        <section className="w-full px-10 py-6 flex items-center gap-4 bg-zinc-900 rounded-lg">
          <Image
            width={64}
            height={64}
            alt={post.author.name}
            className="rounded-full"
            src={post.author.avatar_URL}
          />
          <div className="text-2xl font-kanit font-bold">
            <span>{post.author.name}</span>
            <p className="text-slate-300 text-base font-normal">autor</p>
          </div>
        </section>
        <Newsletter />
        {!isDesktop && <MorePostsAbout posts={morePostsAbout} />}
      </article>
      {isDesktop && (
        <section className="w-1/4 mt-4 relative">
          <div className="flex flex-col gap-4 sticky top-16">
            <MorePostsAbout posts={morePostsAbout} />
            <MostReadPosts postList={mostReadPosts} />
            <PopularTags tags={tags.tags} />
          </div>
        </section>
      )}
    </section>
  );
}
