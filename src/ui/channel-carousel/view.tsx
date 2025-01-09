import Image from "next/image";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChannelCarouselProps } from "./types";
import { YoutubeVideo } from "../youtube-video";
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
            <section className="size-full flex flex-col gap-2 items-center justify-center relative">
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
              <a
                target="_blank"
                className="absolute size-full top-0 left-0"
                href={`https://www.youtube.com/${channelData.items[0].snippet.customUrl}`}
              />
            </section>
          </CarouselItem>
          {leatestVideos.items.map((video, index) => (
            <CarouselItem
              key={index}
              className={isDesktop ? "basis-[20%]" : "basis-[30%] -mr-2"}
            >
              <YoutubeVideo isDesktop={isDesktop} video={video} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 hidden lg:flex" />
        <CarouselNext className="-right-4 hidden lg:flex" />
      </Carousel>
    </section>
  );
}