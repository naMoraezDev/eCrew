import { DefaultProps } from "@/types/common";
import { Channel } from "@/services/youtube/types/channel.types";
import { LeatestVideos } from "@/services/youtube/types/leatest-videos.types";

export interface VideoCarouselProps extends DefaultProps {
  channelData: Channel;
  leatestVideos: LeatestVideos;
}
