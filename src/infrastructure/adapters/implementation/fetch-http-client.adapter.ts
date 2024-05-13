import { HttpClient, HttpRequest } from "../factories/http-client.factory";

export class FetchHttpClientAdapter implements HttpClient {
  async request({ input, init }: HttpRequest) {
    const response = await fetch(`${input}`, {
      method: init?.method,
      headers: init?.headers,
      body: JSON.stringify(init?.body),
    });
    return await response.json();
  }
}
