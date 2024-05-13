import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export default async function Home() {
  const matches = await new EpostsApiService(
    new FetchHttpClientAdapter()
  ).getUpcommingMatches();

  return (
    <>
      <section></section>
    </>
  );
}
