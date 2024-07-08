import { useQuery } from "@tanstack/react-query";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export function useLiveMatches() {
  const { data } = useQuery({
    queryKey: ["live-matches"],
    queryFn: () =>
      new EcrewApiService(new FetchHttpClientAdapter()).getRunningMatches(
        "?filter_type=videogame&filter=cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant&page=1&per_page=5"
      ),
    refetchInterval: 60000, // 1 min
  });

  return { data };
}
