import { Category } from "@/features/category";

export const revalidate = 60 * 5; // 5 minutes

export default async function MoreNewsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = Number(searchParams.page || "1") ?? 1;

  return <Category category="all" page={page} />;
}
