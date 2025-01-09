"use client";

import Image from "next/image";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlay } from "react-icons/fa";
import { YoutubeVideoProps } from "./types";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

export function YoutubeVideoView({ video, isDesktop }: YoutubeVideoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <section className="flex flex-col gap-3 cursor-pointer group">
          <div
            className={`${
              !isDesktop && "h-[200px]"
            } relative rounded-lg overflow-hidden`}
          >
            <Image
              width={300}
              height={200}
              alt={video.snippet.title}
              src={video.snippet.thumbnails.high.url}
              className="size-full object-cover shrink-0 aspect-video group-hover:scale-110 duration-300"
            />
            <div className="size-full flex items-center justify-center absolute left-0 top-0 group-hover:opacity-0 duration-300">
              <FaPlay className="text-2xl text-white" />
            </div>
          </div>
          <p className="text-xs line-clamp-2">{video.snippet.title}</p>
        </section>
      </DialogTrigger>
      <DialogContent className="bg-zinc-950 border-none max-w-[1024px]">
        <DialogHeader className="font-kanit">
          <DialogTitle>{video.snippet.title}</DialogTitle>
          <DialogDescription className="text-sm text-zinc-500">
            {video.snippet.description}
          </DialogDescription>
        </DialogHeader>
        <iframe
          width="975"
          height="548"
          allowFullScreen
          className="rounded-lg"
          src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1`}
        />
      </DialogContent>
    </Dialog>
  );
}
