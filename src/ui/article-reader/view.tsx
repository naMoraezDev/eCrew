"use client";

import { IoStop } from "react-icons/io5";
import { useArticleReader } from "./_io";
import { IoMdPause } from "react-icons/io";
import { ArticleReaderProps } from "./types";
import { IoMdPlayCircle } from "react-icons/io";
import { SoundVisualizer } from "./sound-vizualizer";

export function ArticleReaderView({
  title,
  content,
  excerpt,
  isDesktop,
}: ArticleReaderProps) {
  const { play, pause, resume, stop, isPlaying, isPaused } = useArticleReader({
    title,
    content,
    excerpt,
  });

  return (
    <section className="w-full h-full px-10 py-6 bg-zinc-900 bg-opacity-50 rounded-lg flex flex-col gap-3 justify-center">
      <span className="font-kanit text-xs">Reproduzir matéria em áudio</span>
      <div className="flex gap-6">
        <div className="flex items-center gap-1">
          {!isPlaying && !isPaused && (
            <button title="reproduzir" type="button" onClick={play}>
              <IoMdPlayCircle size={32} />
            </button>
          )}
          {isPlaying && isPaused && (
            <button title="reproduzir" type="button" onClick={resume}>
              <IoMdPlayCircle size={32} />
            </button>
          )}
          {!isPaused && isPlaying && (
            <button title="pausar" type="button" onClick={pause}>
              <IoMdPause size={32} />
            </button>
          )}
          {isPlaying && (
            <button title="parar" type="button" onClick={stop}>
              <IoStop size={32} />
            </button>
          )}
        </div>
        <SoundVisualizer
          color="#fff"
          barWidth="3px"
          barCount={isDesktop ? 25 : 15}
          height={isPlaying && !isPaused ? "32px" : "1px"}
        />
      </div>
    </section>
  );
}
