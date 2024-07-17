import { Metadata } from "next";
import { Category } from "@/features/category";
import { moreNewsMetadata } from "@/seo/more-posts";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { page: string };
}): Promise<Metadata> {
  return moreNewsMetadata({ page: searchParams.page });
}

export default async function MoreNewsPage({
  searchParams,
}: {
  searchParams: { after?: string; before?: string };
}) {
  const after = searchParams.after;
  const before = searchParams.before;

  return <Category category="all" after={after} before={before} />;
}
