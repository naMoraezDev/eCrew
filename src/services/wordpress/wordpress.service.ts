import { Post } from "./types/post";
import { Category } from "./types/category";
import { TagsList } from "./types/tags-list";
import { PostsList } from "./types/posts-list";
import { HttpClient } from "@/infrastructure/adapters/factories/http-client.factory";

namespace WordpressServiceProtocol {
  export type Params = {
    number: string;
    after?: string;
    before?: string;
    categorySlug: string;
  };

  export type TermParams = {
    term: string;
    number: string;
    after?: string;
    before?: string;
  };
}

interface WordpressServiceProtocol {
  getPostsByCategory: (
    params: WordpressServiceProtocol.Params
  ) => Promise<PostsList>;
  getCategoryBySlug: (categorySlug: string) => Promise<Category>;
  getPostBySlug: (postSlug: string) => Promise<Post>;
  getPostsByTerm: (
    params: WordpressServiceProtocol.TermParams
  ) => Promise<PostsList>;
  getTags: () => Promise<TagsList>;
}

export class WordpressService implements WordpressServiceProtocol {
  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private readonly baseUrl: string =
    process.env.NEXT_PUBLIC_ECREW_API_URL || "";

  public async getPostsByCategory(params: WordpressServiceProtocol.Params) {
    return await this.httpClient.request<PostsList>({
      input: `${this.baseUrl}/wp-graphql/posts/category/${
        params.categorySlug
      }?number=${params.number}${params.after ? `&after=${params.after}` : ""}${
        params.before ? `&before=${params.before}` : ""
      }`,
      init: {
        method: "GET",
      },
    });
  }

  public async getCategoryBySlug(categorySlug: string) {
    return await this.httpClient.request<Category>({
      input: `${this.baseUrl}/wp-graphql/category/${categorySlug}`,
      init: {
        method: "GET",
      },
    });
  }

  public async getPostBySlug(postSlug: string) {
    return await this.httpClient.request<Post>({
      input: `${this.baseUrl}/wp-graphql/posts/post/${postSlug}`,
      init: {
        method: "GET",
      },
    });
  }

  public async getPostsByTerm(params: WordpressServiceProtocol.TermParams) {
    return await this.httpClient.request<PostsList>({
      input: `${this.baseUrl}/wp-graphql/posts?term=${params.term}&number=${
        params.number
      }${params.after ? `&after=${params.after}` : ""}${
        params.before ? `&before=${params.before}` : ""
      }`,
      init: {
        method: "GET",
      },
    });
  }

  public async getTags() {
    return await this.httpClient.request<TagsList>({
      input: `${this.baseUrl}/wp-graphql/tags`,
      init: {
        method: "GET",
      },
    });
  }
}
