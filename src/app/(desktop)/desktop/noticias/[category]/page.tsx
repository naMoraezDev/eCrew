import { Metadata } from "next";
import { Category } from "@/features/category";
import { REVALIDATE_TIME } from "@/shared/constants";
import { CategorySEO, categoryMetadata } from "@/seo/category";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export const dynamic = "force-static";
export const revalidate = REVALIDATE_TIME;
export const dynamicParams = false;

export async function generateStaticParams() {
  const games = await new EcrewApiService(
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
