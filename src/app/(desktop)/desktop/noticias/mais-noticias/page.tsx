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
  searchParams: { page?: string };
}) {
  return (
    <Category category="" page={Number(searchParams.page ?? 1)} isDesktop />
  );
}
