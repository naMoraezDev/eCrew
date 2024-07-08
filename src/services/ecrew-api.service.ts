import { Tags } from "./types/tags.types";
import { Post } from "./types/post.types";
import { Games } from "./types/games.types";
import { Posts } from "./types/posts.types";
import { Matches } from "./types/matches.types";
import { Checkout } from "./types/checkout.types";
import { UserPreferences } from "./types/user-preferences.types";
import { HttpClient } from "@/infrastructure/adapters/factories/http-client.factory";
import { Tournaments } from "./types/tournaments.types";
import { Match } from "./types/match.types";
import { TwitchUserResponse } from "./types/twitch.types";
import { Team } from "./types/team.types";

interface EcrewApiServiceProtocol {
  getPostsByCategory: (params: {
    page: string;
    number: string;
    category: string;
  }) => Promise<Posts>;
  getTags: () => Promise<Tags>;
  getGames: () => Promise<Games>;
  getUserPreferences: (
    authorization: string
  ) => Promise<UserPreferences | null>;
  getMatchById: (id: string) => Promise<Match>;
  getTeamBySlug: (slug: string) => Promise<Team>;
  getPostBySlug: (slug: string) => Promise<Post>;
  getPostsByTag: (tag: string) => Promise<Posts>;
  getMatches: (query: string) => Promise<Matches>;
  getPostsBySearch: (search: string) => Promise<Posts>;
  checkout: (authorization: string) => Promise<Checkout>;
  getRunningMatches: (query: string) => Promise<Matches>;
  getUpcommingMatches: (query: string) => Promise<Matches>;
  getTwitchUser: (login: string) => Promise<TwitchUserResponse>;
  getRunningTournaments: (gameSlug: string) => Promise<Tournaments>;
  subscribeOnNewsletter: (email: string) => Promise<{ email: string }>;
}

export class EcrewApiService implements EcrewApiServiceProtocol {
  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private readonly baseUrl: string =
    process.env.NEXT_PUBLIC_EPOSTS_API_URL ?? "";

  public async getMatchById(id: string) {
    const match = await this.httpClient.request<Match>({
      input: `${this.baseUrl}/matches/match/${id}`,
      init: {
        method: "GET",
      },
    });
    return match;
  }

  public async getMatches(query: string = "") {
    const matches = await this.httpClient.request<Matches>({
      input: `${this.baseUrl}/matches${query}`,
      init: {
        method: "GET",
      },
    });
    return matches;
  }

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

  public async getPostsByCategory(params: {
    page: string;
    number: string;
    category: string;
  }) {
    const posts = await this.httpClient.request<Posts>({
      input: `${this.baseUrl}/posts/${params.category}?page=${params.page}&number=${params.number}`,
      init: {
        method: "GET",
      },
    });
    return posts;
  }

  public async getPostsByTag(tag: string) {
    const posts = await this.httpClient.request<Posts>({
      input: `${this.baseUrl}/posts/tag/${tag}`,
      init: {
        method: "GET",
      },
    });
    return posts;
  }

  public async getPostsBySearch(search: string) {
    const posts = await this.httpClient.request<Posts>({
      input: `${this.baseUrl}/posts/search/${search}`,
      init: {
        method: "GET",
      },
    });
    return posts;
  }

  public async getPostBySlug(slug: string) {
    const post = await this.httpClient.request<Post>({
      input: `${this.baseUrl}/posts/post/${slug}`,
      init: {
        method: "GET",
      },
    });
    return post;
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

  public async checkout(authorization: string) {
    const session = await this.httpClient.request<Checkout>({
      input: `${this.baseUrl}/subscription/checkout`,
      init: {
        method: "POST",
        headers: {
          authorization,
        },
      },
    });
    return session;
  }

  public async subscribeOnNewsletter(email: string) {
    const subscribedEmail = await this.httpClient.request<{ email: string }>({
      input: `${this.baseUrl}/subscription/newsletter`,
      init: {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
    return subscribedEmail;
  }

  public async getUserPreferences(authorization: string) {
    const userPreferences =
      await this.httpClient.request<UserPreferences | null>({
        input: `${this.baseUrl}/user/preferences`,
        init: {
          method: "GET",
          headers: {
            authorization,
          },
          cache: "no-store",
        },
      });
    return userPreferences;
  }

  public async getRunningTournaments(gameSlug: string) {
    const tournaments = await this.httpClient.request<Tournaments>({
      input: `${this.baseUrl}/${gameSlug}/tournaments/running`,
      init: {
        method: "GET",
      },
    });
    return tournaments;
  }

  public async getTwitchUser(login: string) {
    const user = await this.httpClient.request<TwitchUserResponse>({
      input: `${this.baseUrl}/twitch/users/${login}`,
      init: {
        method: "GET",
      },
    });
    return user;
  }

  public async getTeamBySlug(slug: string) {
    const team = await this.httpClient.request<Team>({
      input: `${this.baseUrl}/teams/${slug}`,
      init: {
        method: "GET",
      },
    });
    return team;
  }
}
