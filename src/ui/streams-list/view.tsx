"use client";

import Image from "next/image";
import { useStreamsList } from "./_io";
import { FaTwitch } from "react-icons/fa";
import { StreamsListProps } from "./types";

export function StreamsListView({ match, streams }: StreamsListProps) {
  const { selectedStreamIndex, setSelectedStreamIndex } = useStreamsList();

  return (
    <section className="w-full flex gap-4 bg-zinc-900 bg-opacity-50 rounded-lg overflow-hidden">
      <section className="w-1/4">
        <span className="text-sm font-kanit font-medium flex items-center gap-2 mb-4 px-6 py-3">
          <FaTwitch className="text-violet-500" />
          Transmissões ao vivo
        </span>
        {streams.find((stream) => stream?.data[0]?.display_name)
          ? streams.map((stream, index) => {
              if (!stream?.data[0]?.display_name) {
                return null;
              }
              return (
                <div
                  key={index}
                  onClick={() => setSelectedStreamIndex(index)}
                  className="flex items-center gap-3 px-4 py-2 overflow-hidden cursor-pointer relative"
                >
                  <Image
                    width={64}
                    height={64}
                    className="size-10 rounded-full"
                    alt={stream?.data[0]?.display_name || ""}
                    src={stream?.data[0]?.profile_image_url || ""}
                  />
                  <div className="flex flex-col font-kanit">
                    <span className="font-bold">
                      {stream?.data[0]?.display_name}
                    </span>
                    <span className="text-zinc-400 text-sm line-clamp-2">
                      {stream?.data[0]?.description}
                    </span>
                  </div>
                  <div
                    className={`
                      ${
                        index === selectedStreamIndex
                          ? "opacity-20"
                          : "opacity-0"
                      }
                      size-full absolute top-0 left-0 bg-gradient-to-r from-violet-500 to transparent -z-10 duration-1000
                    `}
                  />
                </div>
              );
            })
          : match.streams_list.map((stream, index) => (
              <li
                key={index}
                onClick={() => setSelectedStreamIndex(index)}
                className="flex items-center gap-3 px-4 py-2 overflow-hidden cursor-pointer"
              >
                <div className="flex flex-col font-kanit">
                  <span className="font-bold">
                    {stream?.raw_url.split("/").pop()}
                  </span>
                </div>
              </li>
            ))}
      </section>
      <div className="w-3/4 relative pb-[56.25%] h-0 rounded-normal">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={
            match.streams_list[selectedStreamIndex].embed_url +
            `&parent=${process.env.NEXT_PUBLIC_SITE_HOST}`
          }
        />
      </div>
    </section>
  );
}
