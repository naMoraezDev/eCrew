import { Metadata } from "next";
import { Match } from "@/features/match";
import { matchMetadata } from "@/seo/match";
import { REVALIDATE_TIME } from "@/shared/constants";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export const dynamic = "force-static";
export const revalidate = REVALIDATE_TIME;

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const match = await new EcrewApiService(httpClientFactory()).getMatchById(
    params.id
  );
  return matchMetadata({ match });
}

export async function generateStaticParams() {
  const [runningMatches, upcomingMatches] = await Promise.all([
    new EcrewApiService(httpClientFactory())
      .getRunningMatches(
        "?filter_type=videogame&filter=cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant"
      )
      .catch(() => []),
    new EcrewApiService(httpClientFactory())
      .getUpcommingMatches(
        "?filter_type=videogame&filter=cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant"
      )
      .catch(() => []),
  ]);
  const matches = [...runningMatches, ...upcomingMatches];
  return matches.map((match) => ({
    id: match.id.toString(),
  }));
}

export default function MatchPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return <Match id={id} isDesktop />;
}
