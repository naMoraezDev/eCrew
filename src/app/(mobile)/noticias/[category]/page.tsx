import { Metadata } from "next";
import { GAMES } from "@/shared/utils/static";
import { Category } from "@/features/category";
import { REVALIDATE_TIME } from "@/shared/constants";
import { CategorySEO, categoryMetadata } from "@/seo/category";

export const dynamic = "force-static";
export const revalidate = REVALIDATE_TIME;

export async function generateStaticParams() {
  return GAMES.map((game) => ({
    category: game.slug,
  }));
}

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
  searchParams: { after?: string; before?: string };
}) {
  const after = searchParams.after;
  const before = searchParams.before;

  return (
    <>
      <CategorySEO categorySlug={params.category} />
      <Category category={params.category} after={after} before={before} />
    </>
  );
}
