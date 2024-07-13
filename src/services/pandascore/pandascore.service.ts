import { MatchesList, Match } from "./types/matches.types";
import { TournamentsList, Tournament } from "./types/tournaments.types";
import { HttpClient } from "@/infrastructure/adapters/factories/http-client.factory";

namespace PandascoreServiceProtocol {
  export type Params = {
    page: number;
    size: number;
    filter?: string;
    type: "past" | "running" | "upcoming";
  };

  export type TournamentsParams = Omit<Params, "filter"> & {
    videogame: "lol" | "csgo" | "codmw" | "dota2" | "r6siege" | "valorant";
  };
}

interface PandascoreServiceProtocol {
  // matches
  getMatchById(id: string): Promise<Match>;
  getMatchesList(
    params: PandascoreServiceProtocol.Params
  ): Promise<MatchesList>;
  // tournaments
  getTournamentsByVideogame(
    params: PandascoreServiceProtocol.TournamentsParams
  ): Promise<TournamentsList>;
  getTournamentById(id: string): Promise<Tournament>;
}

export class PandascoreService implements PandascoreServiceProtocol {
  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private readonly apiKey = process.env.PRIVATE_PANDASCORE_API_KEY;
  private readonly baseUrl = process.env.PRIVATE_PANDASCORE_API_URL;

  public async getMatchById(id: string) {
    return await this.httpClient.request<Match>({
      input: `${this.baseUrl}/matches/${id}`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey || "",
        },
      },
    });
  }

  public async getMatchesList(params: PandascoreServiceProtocol.Params) {
    return await this.httpClient.request<MatchesList>({
      input: `${this.baseUrl}/matches/${params.type}?filter[videogame]=${
        params.filter
          ? params.filter
          : "cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant"
      }${params.page ? `&page=${params.page}` : ""}${
        params.size ? `&page[size]=${params.size}` : ""
      }`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey || "",
        },
      },
    });
  }

  public async getTournamentsByVideogame(
    params: PandascoreServiceProtocol.TournamentsParams
  ) {
    return await this.httpClient.request<TournamentsList>({
      input: `${this.baseUrl}/${params.videogame}/tournaments/${
        params.type
      }${`?page=${params.page}`}${`&page[size]=${params.size}`}`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey || "",
        },
      },
    });
  }

  public async getTournamentById(id: string) {
    return await this.httpClient.request<Tournament>({
      input: `${this.baseUrl}/tournaments/${id}`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey || "",
        },
      },
    });
  }
}
