import { Metadata } from "next";
import { Tournament } from "@/features/tournament";
import { REVALIDATE_TIME } from "@/shared/constants";
import { tournamentMetadata } from "@/seo/tournament";
import { PandascoreService } from "@/services/pandascore/pandascore.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export const dynamic = "force-static";
export const revalidate = REVALIDATE_TIME;

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const tournament = await new PandascoreService(
    httpClientFactory()
  ).getTournamentById(params.id);
  return tournamentMetadata({ tournament });
}

export async function generateStaticParams() {
  const [
    r6Tournaments,
    csTournaments,
    lolTournaments,
    codTournaments,
    dota2Tournaments,
    valorantTournaments,
  ] = await Promise.all([
    new PandascoreService(httpClientFactory())
      .getTournamentsByVideogame({
        page: 1,
        size: 50,
        type: "running",
        videogame: "r6siege",
      })
      .catch(() => []),
    new PandascoreService(httpClientFactory())
      .getTournamentsByVideogame({
        page: 1,
        size: 50,
        type: "running",
        videogame: "csgo",
      })
      .catch(() => []),
    new PandascoreService(httpClientFactory())
      .getTournamentsByVideogame({
        page: 1,
        size: 50,
        type: "running",
        videogame: "lol",
      })
      .catch(() => []),
    new PandascoreService(httpClientFactory())
      .getTournamentsByVideogame({
        page: 1,
        size: 50,
        type: "running",
        videogame: "codmw",
      })
      .catch(() => []),
    new PandascoreService(httpClientFactory())
      .getTournamentsByVideogame({
        page: 1,
        size: 50,
        type: "running",
        videogame: "dota2",
      })
      .catch(() => []),
    new PandascoreService(httpClientFactory())
      .getTournamentsByVideogame({
        page: 1,
        size: 50,
        type: "running",
        videogame: "valorant",
      })
      .catch(() => []),
  ]);
  const tournaments = [
    ...r6Tournaments,
    ...csTournaments,
    ...lolTournaments,
    ...codTournaments,
    ...dota2Tournaments,
    ...valorantTournaments,
  ];
  return tournaments.map((tournament) => ({
    id: tournament.id.toString(),
  }));
}

export default function TorunamentPage({ params }: { params: { id: string } }) {
  return <Tournament id={params.id} isDesktop />;
}
