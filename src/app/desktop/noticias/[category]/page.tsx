import { Category } from "@/features/category";
import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export const revalidate = 60 * 5; // 5 minutes
export async function generateStaticParams() {
  const games = await new EpostsApiService(
    new FetchHttpClientAdapter()
  ).getGames();
  return games.map((game) => ({
    category: game.slug,
  }));
}
export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { page: string };
}) {
  const page = Number(searchParams.page || "1") ?? 1;

  return <Category category={params.category} page={page} isDesktop />;
}
