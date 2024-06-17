import { Category } from "@/features/category";

export const revalidate = 0;
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
