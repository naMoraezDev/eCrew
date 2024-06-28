import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export function useLiveMatches({
  initialViewMore = false,
}: { initialViewMore?: boolean } = {}) {
  const [viewMore, setViewMore] = useState(initialViewMore);

  function toggleViewMore() {
    setViewMore(!viewMore);
  }

  const { data, isLoading } = useQuery({
    queryKey: ["live-matches"],
    queryFn: () =>
      new EpostsApiService(new FetchHttpClientAdapter()).getRunningMatches(
        "?filter_type=videogame&filter=cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant"
      ),
    refetchInterval: 60000, // 1 min
  });

  return { data, isLoading, toggleViewMore, viewMore };
}
