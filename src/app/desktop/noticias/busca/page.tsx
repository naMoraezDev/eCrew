import { Category } from "@/features/category";

export const revalidate = 0;
export default async function SearchPage({
  searchParams,
}: {
  searchParams: { term: string };
}) {
  const term = searchParams.term;

  return <Category term={term} isDesktop />;
}
