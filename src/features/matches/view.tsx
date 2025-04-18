import { MatchesProps } from "./types";
import { SquareAd } from "@/ui/square-ad";
import { MatchesSEO } from "@/seo/matches";
import { GAMES } from "@/shared/utils/static";
import { Tournaments } from "@/ui/tournaments";
import { MatchesList } from "@/ui/matches-list";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { PandascoreService } from "@/services/pandascore/pandascore.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function MatchesView({ isDesktop }: MatchesProps) {
  const [runningMatches, upcomingMatches] = await Promise.all([
    new PandascoreService(httpClientFactory()).getMatchesList({
      page: 1,
      size: 50,
      type: "running",
    }),
    new PandascoreService(httpClientFactory()).getMatchesList({
      page: 1,
      size: 50,
      type: "upcoming",
    }),
  ]);
  const matches = [...runningMatches, ...upcomingMatches];

  return (
    <>
      <MatchesSEO />
      <section className="w-full flex gap-4">
        <section
          className={`
            ${isDesktop ? "w-3/4 mt-4" : "w-full"} 
            flex flex-col gap-4 mb-10
          `}
        >
          <h4 className="font-kanit font-bold text-3xl flex items-center gap-2 px-6 py-3">
            <BsFillLightningChargeFill />
            Partidas
          </h4>
          <MatchesList games={GAMES} matches={matches} />
        </section>
        {isDesktop && (
          <section className="w-1/4 flex flex-col gap-4 mt-4 shrink-0">
            <Tournaments game="Counter Strike" />
            <Tournaments game="League of Legends" />
            <Tournaments game="Rainbow 6 Siege" />
            <Tournaments game="Dota 2" />
            <Tournaments game="Valorant" />
            <div className="sticky top-16">
              <SquareAd />
            </div>
          </section>
        )}
      </section>
    </>
  );
}
