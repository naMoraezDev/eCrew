import { FetchHttpClientAdapter } from "../implementation/fetch-http-client.adapter";

export type HttpRequest = {
  input: string;
  init?: RequestInit;
};

export interface HttpClient {
  request: <Type = any>(data: HttpRequest) => Promise<Type>;
}

export const httpClientFactory = (): HttpClient => new FetchHttpClientAdapter();
