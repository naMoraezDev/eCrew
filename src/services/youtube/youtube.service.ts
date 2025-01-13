import { Channel } from "./types/channel.types";
import { LeatestVideos } from "./types/leatest-videos.types";
import { HttpClient } from "@/infrastructure/adapters/factories/http-client.factory";

namespace YoutubeServiceProtocol {
  export type Params = {
    channelId: string;
  };
}

interface YoutubeServiceProtocol {
  getLeatestVideos(
    params: YoutubeServiceProtocol.Params
  ): Promise<LeatestVideos>;
  getChannelData(params: YoutubeServiceProtocol.Params): Promise<Channel>;
}

export class YoutubeService implements YoutubeServiceProtocol {
  constructor(readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private readonly apiKey = process.env.PRIVATE_GOOGLE_API_KEY;
  private readonly baseUrl = process.env.PRIVATE_GOOGLE_API_BASE_URL;

  public async getLeatestVideos(params: YoutubeServiceProtocol.Params) {
    return await this.httpClient.request<LeatestVideos>({
      input: `${this.baseUrl}/youtube/v3/search?key=${this.apiKey}&channelId=${params.channelId}&part=snippet,id&order=date&maxResults=20`,
      init: {
        method: "GET",
      },
    });
  }

  public async getChannelData(params: YoutubeServiceProtocol.Params) {
    return await this.httpClient.request<Channel>({
      input: `${this.baseUrl}/youtube/v3/channels?part=snippet&id=${params.channelId}&fields=items&key=${this.apiKey}`,
      init: {
        method: "GET",
      },
    });
  }
}
