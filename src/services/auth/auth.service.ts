import {
  AuthServiceInterface,
  GetAccessTokenParams,
  GetAccessTokenResponse,
} from "./auth.types";
import { HttpClient } from "@/infrastructure/adapters/factories/http-client.factory";

export class AuthService implements AuthServiceInterface {
  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private readonly baseUrl = process.env.NEXT_PUBLIC_AUTH_API_URL;

  public async getAccessToken(params: GetAccessTokenParams) {
    const requestHeaders = {
      "Content-Type": "application/json",
    };
    const requestBody = JSON.stringify({
      authorization_token: params.body.authorization_token,
    });
    const requestOptions = {
      method: "POST",
      body: requestBody,
      headers: requestHeaders,
    };
    const response = await this.httpClient.request<GetAccessTokenResponse>({
      input: `${this.baseUrl}/oauth2/authorize/token`,
      init: requestOptions,
    });
    return response;
  }
}
