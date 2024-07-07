import { Metadata } from "next";
import { Post } from "@/features/post";
import { postMetadata } from "@/seo/post";
import { REVALIDATE_TIME } from "@/shared/constants";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export const dynamic = "force-static";
export const revalidate = REVALIDATE_TIME;

export async function generateStaticParams() {
  const [lolPosts, r6Posts, codPosts, csPosts, valorantPosts, dotaPosts] =
    await Promise.all([
      new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
        page: "1",
        number: "12",
        category: "league-of-legends",
      }),
      new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
        page: "1",
        number: "12",
        category: "r6-siege",
      }),
      new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
        page: "1",
        number: "12",
        category: "cod-mw",
      }),
      new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
        page: "1",
        number: "12",
        category: "cs-go",
      }),
      new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
        page: "1",
        number: "12",
        category: "valorant",
      }),
      new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
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
  const post = await new EcrewApiService(
    new FetchHttpClientAdapter()
  ).getPostBySlug(params.slug);
  return postMetadata({ post });
}

export default async function PostPage({
  params,
}: {
  params: { slug: string; category: string };
}) {
  const [morePostsAbout, post] = await Promise.all([
    new EcrewApiService(new FetchHttpClientAdapter()).getPostsByCategory({
      page: "1",
      number: "3",
      category: params.category,
    }),
    new EcrewApiService(new FetchHttpClientAdapter()).getPostBySlug(
      params.slug
    ),
  ]);

  return <Post post={post} morePostsAbout={morePostsAbout} />;
}
