import { Metadata } from "next";
import { Category } from "@/features/category";
import { CategorySEO, categoryMetadata } from "@/seo/category";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  return categoryMetadata({ categorySlug: params.category });
}
export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { page: string };
}) {
  const page = Number(searchParams.page || "1") ?? 1;

  return (
    <>
      <CategorySEO categorySlug={params.category} />
      <Category category={params.category} page={page} />
    </>
  );
}
