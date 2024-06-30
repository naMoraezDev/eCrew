import { Metadata } from "next";
import { Post } from "@/features/post";
import { postMetadata } from "@/seo/post";
import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export const runtime = "edge";

export const revalidate = 60 * 5; // 5 minutes

export async function generateStaticParams() {
  const [lolPosts, r6Posts, codPosts, csPosts, valorantPosts, dotaPosts] =
    await Promise.all([
      new EpostsApiService(new FetchHttpClientAdapter()).getPostsByCategory({
        page: "1",
        number: "12",
        category: "league-of-legends",
      }),
      new EpostsApiService(new FetchHttpClientAdapter()).getPostsByCategory({
        page: "1",
        number: "12",
        category: "r6-siege",
      }),
      new EpostsApiService(new FetchHttpClientAdapter()).getPostsByCategory({
        page: "1",
        number: "12",
        category: "cod-mw",
      }),
      new EpostsApiService(new FetchHttpClientAdapter()).getPostsByCategory({
        page: "1",
        number: "12",
        category: "cs-go",
      }),
      new EpostsApiService(new FetchHttpClientAdapter()).getPostsByCategory({
        page: "1",
        number: "12",
        category: "valorant",
      }),
      new EpostsApiService(new FetchHttpClientAdapter()).getPostsByCategory({
        page: "1",
        number: "12",
        category: "dota-2",
      }),
    ]);
  const posts = [
    ...r6Posts.posts,
    ...csPosts.posts,
    ...lolPosts.posts,
    ...codPosts.posts,
    ...dotaPosts.posts,
    ...valorantPosts.posts,
  ];
  return posts.map((post) => ({
    slug: post.slug,
    category: post.categories[0].slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await new EpostsApiService(
    new FetchHttpClientAdapter()
  ).getPostBySlug(params.slug);
  return postMetadata({ post });
}

export default async function PostPage({
  params,
}: {
  params: { slug: string; category: string };
}) {
  const [tags, morePostsAbout, post] = await Promise.all([
    new EpostsApiService(new FetchHttpClientAdapter()).getTags(),
    new EpostsApiService(new FetchHttpClientAdapter()).getPostsByCategory({
      page: "1",
      number: "3",
      category: params.category,
    }),
    new EpostsApiService(new FetchHttpClientAdapter()).getPostBySlug(
      params.slug
    ),
  ]);

  return <Post post={post} tags={tags} morePostsAbout={morePostsAbout} />;
}
