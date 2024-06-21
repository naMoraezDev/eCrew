import { Tags } from "./types/tags.types";
import { Post } from "./types/post.types";
import { Games } from "./types/games.types";
import { Posts } from "./types/posts.types";
import { Matches } from "./types/matches.types";
import { HttpClient } from "@/infrastructure/adapters/factories/http-client.factory";

interface EpostsApiServiceProtocol {
  getPostsByCategory: (params: {
    page: string;
    number: string;
    category: string;
  }) => Promise<Posts>;
  getTags: () => Promise<Tags>;
  getGames: () => Promise<Games>;
  getPostBySlug: (slug: string) => Promise<Post>;
  getPostsByTag: (tag: string) => Promise<Posts>;
  getPostsBySearch: (search: string) => Promise<Posts>;
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
}
