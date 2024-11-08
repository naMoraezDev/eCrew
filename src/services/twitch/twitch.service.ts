import { TwitchUser } from "./types/user.types";
import { TwitchToken } from "./types/token.types";
import { HttpClient } from "@/infrastructure/adapters/factories/http-client.factory";

interface TwitchServiceProtocol {
  getTwitchUser: (login: string) => Promise<TwitchUser>;
}

export class TwitchService implements TwitchServiceProtocol {
  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private readonly apiBaseUrl: string =
    process.env.PRIVATE_TWITCH_API_URL ?? "";
  private readonly authUrl: string =
    process.env.PRIVATE_TWITCH_AUTH_API_URL ?? "";

  public async getTwitchUser(login: string) {
    const authorization = await this.httpClient.request<TwitchToken>({
      input: `${this.authUrl}`,
      init: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grant_type: "client_credentials",
          client_id: process.env.PRIVATE_TWITCH_CLIENT_ID,
          client_secret: process.env.PRIVATE_TWITCH_CLIENT_SECRET,
        }),
      },
    });
    const { access_token } = authorization;
    const user = await this.httpClient.request<TwitchUser>({
      input: `${this.apiBaseUrl}?login=${login}`,
      init: {
        headers: {
          "Client-Id": process.env.PRIVATE_TWITCH_CLIENT_ID,
          Authorization: `Bearer ${access_token}`,
        } as any,
      },
    });
    return user;
  }
}
