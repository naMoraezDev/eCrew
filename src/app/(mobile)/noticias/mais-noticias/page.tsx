import { Metadata } from "next";
import { Category } from "@/features/category";
import { moreNewsMetadata } from "@/seo/more-posts";

export const dynamic = "force-static";
export const revalidate = 60 * 5; // 5 minutes

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
  searchParams: { page: string };
}) {
  const page = Number(searchParams.page || "1") ?? 1;

  return <Category category="all" page={page} />;
}
