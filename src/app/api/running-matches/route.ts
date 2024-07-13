import { PandascoreService } from "@/services/pandascore/pandascore.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export async function GET() {
  const res = await new PandascoreService(httpClientFactory()).getMatchesList({
    page: 1,
    size: 5,
    type: "running",
    filter: "cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant",
  });
  return Response.json(res);
}
