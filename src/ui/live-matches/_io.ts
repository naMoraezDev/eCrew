import { useQuery } from "@tanstack/react-query";
import { MatchesList } from "@/services/pandascore/types/matches.types";

export function useLiveMatches() {
  const { data } = useQuery({
    queryKey: ["live-matches"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/running-matches`).then(
        async (res) => (await res.json()) as MatchesList
      ),
    refetchInterval: 60000, // 1 min
  });

  return { data };
}
