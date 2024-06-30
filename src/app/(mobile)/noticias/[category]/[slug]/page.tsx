import { Metadata } from "next";
import { Post } from "@/features/post";
import { postMetadata } from "@/seo/post";
import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export const runtime = "edge";

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
