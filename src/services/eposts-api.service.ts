import { Games } from "./types/games.types";
import { Matches } from "./types/matches.types";
import { HttpClient } from "@/infrastructure/adapters/factories/http-client.factory";

interface EpostsApiServiceProtocol {
  getGames: () => Promise<Games>;
  getRunningMatches: (query: string) => Promise<Matches>;
  getUpcommingMatches: (query: string) => Promise<Matches>;
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

  public async getRunningMatches(query: string = "") {
    const matches = await this.httpClient.request<Matches>({
      input: `${this.baseUrl}/matches/running${query}`,
      init: {
        method: "GET",
      },
    });
    return matches;
  }

  public async getGames() {
    const games = await this.httpClient.request<Games>({
      input: `${this.baseUrl}/games`,
      init: {
        method: "GET",
      },
    });
    return games;
  }
}
