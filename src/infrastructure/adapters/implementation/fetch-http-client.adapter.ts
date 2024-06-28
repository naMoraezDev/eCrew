import { HttpClient, HttpRequest } from "../factories/http-client.factory";

export class FetchHttpClientAdapter implements HttpClient {
  async request({ input, init }: HttpRequest) {
    const response = await fetch(`${input}`, {
      body: init?.body,
      method: init?.method,
      headers: init?.headers,
    });
    return await response.json();
  }
}
