import { Metadata } from "next";
import { Category } from "@/features/category";
import { CategorySEO, categoryMetadata } from "@/seo/category";
import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export const revalidate = 60 * 5; // 5 minutes
export const dynamicParams = false;

export async function generateStaticParams() {
  const games = await new EpostsApiService(
    new FetchHttpClientAdapter()
  ).getGames();
  return games.map((game) => ({
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
  searchParams: { page: string };
}) {
  const page = Number(searchParams.page || "1") ?? 1;

  return (
    <>
      <CategorySEO categorySlug={params.category} />
      <Category category={params.category} page={page} isDesktop />
    </>
  );
}
