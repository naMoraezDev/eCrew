import { Tags } from "./types/tags.types";
import { Games } from "./types/games.types";
import { Posts } from "./types/posts.types";
import { Matches } from "./types/matches.types";
import { HttpClient } from "@/infrastructure/adapters/factories/http-client.factory";

interface EpostsApiServiceProtocol {
  getTags: () => Promise<Tags>;
  getGames: () => Promise<Games>;
  getRunningMatches: (query: string) => Promise<Matches>;
  getUpcommingMatches: (query: string) => Promise<Matches>;
  getPostsByCategory: (category: string) => Promise<Posts>;
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

  public async getPostsByCategory(category: string) {
    const posts = await this.httpClient.request<Posts>({
      input: `${this.baseUrl}/posts/${category}`,
      init: {
        method: "GET",
      },
    });
    return posts;
  }

  public async getTags() {
    const tags = await this.httpClient.request<Tags>({
      input: `${this.baseUrl}/tags`,
      init: {
        method: "GET",
      },
    });
    return tags;
  }
}
