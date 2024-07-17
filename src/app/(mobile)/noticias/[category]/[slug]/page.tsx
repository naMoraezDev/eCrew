import { Metadata } from "next";
import { Post } from "@/features/post";
import { postMetadata } from "@/seo/post";
import { REVALIDATE_TIME } from "@/shared/constants";
import { WordpressService } from "@/services/wordpress/wordpress.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export const dynamic = "force-static";
export const revalidate = REVALIDATE_TIME;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await new WordpressService(
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
    new WordpressService(new FetchHttpClientAdapter()).getPostsByCategory({
      number: "3",
      categorySlug: params.category,
    }),
    new WordpressService(new FetchHttpClientAdapter()).getPostBySlug(
      params.slug
    ),
  ]);

  return <Post post={post} morePostsAbout={morePostsAbout} />;
}
