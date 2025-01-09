import { ChannelProps } from "./types";
import { VideoCarousel } from "../video-carousel/view";
import { YoutubeService } from "@/services/youtube/youtube.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function ChannelView({ channelId, isDesktop }: ChannelProps) {
  const [leatestVideos, channelData] = await Promise.all([
    new YoutubeService(httpClientFactory()).getLeatestVideos({
      channelId,
    }),
    new YoutubeService(httpClientFactory()).getChannelData({
      channelId,
    }),
  ]);

  return (
    <section className={`${!isDesktop && "ml-6"} flex flex-col gap-3`}>
      <VideoCarousel
        isDesktop={isDesktop}
        channelData={channelData}
        leatestVideos={leatestVideos}
      />
    </section>
  );
}
