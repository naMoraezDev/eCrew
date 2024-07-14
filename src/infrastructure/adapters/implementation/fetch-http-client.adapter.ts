import { HttpClient, HttpRequest } from "../factories/http-client.factory";

export class FetchHttpClientAdapter implements HttpClient {
  async request({ input, init }: HttpRequest) {
    const response = await fetch(`${input}`, {
      body: init?.body,
      method: init?.method,
      headers: init?.headers,
    });
    if (response.status === 204) {
      return;
    }
    if (response) {
      return await response.json();
    }
  }
}
