import { Post } from "./types/post";
import { Category } from "./types/category";
import { TagsList } from "./types/tags-list";
import { PostsList } from "./types/posts-list";
import { HttpClient } from "@/infrastructure/adapters/factories/http-client.factory";

namespace WordpressServiceProtocol {
  export type Params = {
    page: number;
    slug: string;
    number: number;
  };
}

interface WordpressServiceProtocol {
  getPostsByCategory: (
    params: WordpressServiceProtocol.Params
  ) => Promise<PostsList>;
  getPostsByTag: (
    params: WordpressServiceProtocol.Params
  ) => Promise<PostsList>;
  getCategoryBySlug: (categorySlug: string) => Promise<Category>;
  getPostBySlug: (postSlug: string) => Promise<Post>;
  getTags: () => Promise<TagsList>;
}

export class WordpressService implements WordpressServiceProtocol {
  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private readonly baseUrl: string =
    process.env.PRIVATE_WORDPRESS_API_URL ?? "";

  public async getPostsByCategory(params: WordpressServiceProtocol.Params) {
    return await this.httpClient.request<PostsList>({
      input: `${this.baseUrl}/posts?category=${
        params.slug ? params.slug : ""
      }&page=${params.page ? params.page : 1}&number=${
        params.number ? params.number : 50
      }`,
      init: {
        method: "GET",
      },
    });
  }

  public async getPostsByTag(params: WordpressServiceProtocol.Params) {
    return await this.httpClient.request<PostsList>({
      input: `${this.baseUrl}/posts?tag=${
        params.slug ? params.slug : ""
      }&page=${params.page ? params.page : 1}&number=${
        params.number ? params.number : 50
      }`,
      init: {
        method: "GET",
      },
    });
  }

  public async getCategoryBySlug(categorySlug: string) {
    return await this.httpClient.request<Category>({
      input: `${this.baseUrl}/categories/slug:${categorySlug}`,
      init: {
        method: "GET",
      },
    });
  }

  public async getPostBySlug(postSlug: string) {
    return await this.httpClient.request<Post>({
      input: `${this.baseUrl}/posts/slug:${postSlug}`,
      init: {
        method: "GET",
      },
    });
  }

  public async getTags() {
    return await this.httpClient.request<TagsList>({
      input: `${this.baseUrl}/tags`,
      init: {
        method: "GET",
      },
    });
  }
}
