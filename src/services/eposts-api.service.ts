import { Matches } from "./types/matches.types";
import { HttpClient } from "@/infrastructure/adapters/factories/http-client.factory";

interface EpostsApiServiceProtocol {
  getUpcommingMatches: () => Promise<Matches>;
}

export class EpostsApiService implements EpostsApiServiceProtocol {
  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private readonly baseUrl: string = process.env.PRIVATE_EPOSTS_API_URL ?? "";

  public async getUpcommingMatches(query: string = "") {
    const matches = await this.httpClient.request<Matches>({
      input: `${this.baseUrl}/matches/upcoming${query}`,
      init: {
        method: "GET",
      },
    });
    return matches;
  }
}
