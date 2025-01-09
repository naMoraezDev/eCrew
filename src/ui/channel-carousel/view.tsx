import Image from "next/image";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { FaPlay } from "react-icons/fa";
import { ChannelCarouselProps } from "./types";
import { YoutubeService } from "@/services/youtube/youtube.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function ChannelCarouselView({
  channelId,
  isDesktop,
}: ChannelCarouselProps) {
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
      <Carousel
        className="relative z-10"
        opts={{ align: "start", dragFree: true, slidesToScroll: 3 }}
      >
        <CarouselContent>
          <CarouselItem className={isDesktop ? "basis-[15%]" : "basis-[20%]"}>
            <section className="size-full flex flex-col gap-2 items-center justify-center">
              <Image
                width={300}
                height={300}
                alt={channelData.items[0].snippet.title}
                className={`${
                  isDesktop && "max-w-[48px]"
                } object-cover shrink-0 rounded-full aspect-square`}
                src={channelData.items[0].snippet.thumbnails.high.url}
              />
              <span className="font-kanit text-sm text-center">
                {channelData.items[0].snippet.title}
              </span>
            </section>
          </CarouselItem>
          {leatestVideos.items.map((video, index) => (
            <CarouselItem
              key={index}
              className={isDesktop ? "basis-[20%]" : "basis-[30%] -mr-2"}
            >
              <section className="flex flex-col gap-3">
                <div className={`${!isDesktop && "h-[200px]"} relative`}>
                  <Image
                    width={300}
                    height={200}
                    alt={video.snippet.title}
                    src={video.snippet.thumbnails.high.url}
                    className="size-full object-cover shrink-0 rounded-lg aspect-video"
                  />
                  <div className="size-full flex items-center justify-center absolute left-0 top-0">
                    <FaPlay className="text-2xl text-white" />
                  </div>
                </div>
                <p className="text-xs line-clamp-2">{video.snippet.title}</p>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 hidden lg:flex" />
        <CarouselNext className="-right-4 hidden lg:flex" />
      </Carousel>
    </section>
  );
}
