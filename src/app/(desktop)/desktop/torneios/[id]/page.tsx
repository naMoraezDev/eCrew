import { Metadata } from "next";
import { Tournament } from "@/features/tournament";
import { tournamentMetadata } from "@/seo/tournament";
import { PandascoreService } from "@/services/pandascore/pandascore.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

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

export default function TorunamentPage({ params }: { params: { id: string } }) {
  return <Tournament id={params.id} isDesktop />;
}
