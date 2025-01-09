import { DefaultProps } from "@/types/common";
import { Item } from "@/services/youtube/types/leatest-videos.types";

export interface YoutubeVideoProps extends DefaultProps {
  video: Item;
}
