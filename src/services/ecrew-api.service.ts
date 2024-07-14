import { Tags } from "./types/tags.types";
import { Post } from "./types/post.types";
import { Games } from "./types/games.types";
import { Posts } from "./types/posts.types";
import { Checkout } from "./types/checkout.types";
import { TwitchUserResponse } from "./types/twitch.types";
import { UserPreferences } from "./types/user-preferences.types";
import { HttpClient } from "@/infrastructure/adapters/factories/http-client.factory";

interface EcrewApiServiceProtocol {
  removeSavedPost: (params: {
    postSlug: string;
    authorization: string;
  }) => Promise<void>;
  pushToSavedPosts: (params: {
    postSlug: string;
    authorization: string;
  }) => Promise<void>;
  getPostsByCategory: (params: {
    page: string;
    number: string;
    category: string;
  }) => Promise<Posts>;
  getTags: () => Promise<Tags>;
  getGames: () => Promise<Games>;
  updateUserPreferences: (params: {
    authorization: string;
    userPreferences: Omit<UserPreferences, "uid">;
  }) => Promise<void>;
  createUserPreferences: (params: {
    authorization: string;
    userPreferences: Omit<UserPreferences, "uid">;
  }) => Promise<void>;
  getUserPreferences: (
    authorization: string
  ) => Promise<UserPreferences | null>;
  getPostBySlug: (slug: string) => Promise<Post>;
  getPostsByTag: (tag: string) => Promise<Posts>;
  getPostsBySearch: (search: string) => Promise<Posts>;
  checkout: (authorization: string) => Promise<Checkout>;
  getTwitchUser: (login: string) => Promise<TwitchUserResponse>;
  subscribeOnNewsletter: (email: string) => Promise<{ email: string }>;
}

export class EcrewApiService implements EcrewApiServiceProtocol {
  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private readonly baseUrl: string =
    process.env.NEXT_PUBLIC_ECREW_API_URL ?? "";

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

  public async updateUserPreferences(params: {
    authorization: string;
    userPreferences: Omit<UserPreferences, "uid">;
  }) {
    await this.httpClient.request({
      input: `${this.baseUrl}/user/preferences`,
      init: {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: params.authorization,
        },
        body: JSON.stringify(params.userPreferences),
      },
    });
  }

  public async createUserPreferences(params: {
    authorization: string;
    userPreferences: Omit<UserPreferences, "uid">;
  }) {
    await this.httpClient.request({
      input: `${this.baseUrl}/user/preferences`,
      init: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: params.authorization,
        },
        body: JSON.stringify(params.userPreferences),
      },
    });
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

  public async pushToSavedPosts(params: {
    postSlug: string;
    authorization: string;
  }) {
    await this.httpClient.request({
      input: `${this.baseUrl}/user/preferences/saved-posts/push`,
      init: {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: params.authorization,
        },
        body: JSON.stringify({
          postSlug: params.postSlug,
        }),
      },
    });
  }

  public async removeSavedPost(params: {
    postSlug: string;
    authorization: string;
  }) {
    await this.httpClient.request({
      input: `${this.baseUrl}/user/preferences/saved-posts/pull`,
      init: {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: params.authorization,
        },
        body: JSON.stringify({
          postSlug: params.postSlug,
        }),
      },
    });
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
}
