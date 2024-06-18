import { Post } from "@/features/post";

export default async function PostPage({
  params,
}: {
  params: { slug: string; category: string };
}) {
  return <Post slug={params.slug} category={params.category} />;
}
