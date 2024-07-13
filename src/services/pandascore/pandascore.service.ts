import { Rosters } from "./types/rosters.types";
import { Brackets } from "./types/brackets.types";
import { LiveMatches } from "./types/live-matches";
import { Opponents } from "./types/opponents.types";
import { Standings } from "./types/standings.types";
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
  getLiveMatches(): Promise<LiveMatches>;
  getMatchById(id: string): Promise<Match>;
  getMatchesList(
    params: PandascoreServiceProtocol.Params
  ): Promise<MatchesList>;
  getMatchOpponents(matchId: string): Promise<Opponents>;
  // tournaments
  getTournamentById(id: string): Promise<Tournament>;
  getTournamentsByVideogame(
    params: PandascoreServiceProtocol.TournamentsParams
  ): Promise<TournamentsList>;
  getTournamentRosters(tournamentId: string): Promise<Rosters>;
  getTournamentBrackets(tournamentId: string): Promise<Brackets>;
  getTournamentStandings(tournamentId: string): Promise<Standings>;
}

export class PandascoreService implements PandascoreServiceProtocol {
  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private readonly apiKey = process.env.PRIVATE_PANDASCORE_SECONDARY_API_KEY;
  private readonly baseUrl = process.env.PRIVATE_PANDASCORE_API_URL;

  public async getLiveMatches() {
    return await this.httpClient.request<LiveMatches>({
      input: `${this.baseUrl}/lives`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey || "",
        },
      },
    });
  }

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

  public async getMatchOpponents(matchId: string) {
    return await this.httpClient.request<Opponents>({
      input: `${this.baseUrl}/matches/${matchId}/opponents`,
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

  public async getTournamentBrackets(tournamentId: string) {
    return await this.httpClient.request<Brackets>({
      input: `${this.baseUrl}/tournaments/${tournamentId}/brackets`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey || "",
        },
      },
    });
  }

  public async getTournamentStandings(tournamentId: string) {
    return await this.httpClient.request<Standings>({
      input: `${this.baseUrl}/tournaments/${tournamentId}/standings`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey || "",
        },
      },
    });
  }

  public async getTournamentRosters(tournamentId: string) {
    return await this.httpClient.request<Rosters>({
      input: `${this.baseUrl}/tournaments/${tournamentId}/rosters`,
      init: {
        method: "GET",
        headers: {
          Authorization: this.apiKey || "",
        },
      },
    });
  }
}
