import { useEffect, useState } from "react";
import { ArticleReaderProps } from "./types";

export function useArticleReader({
  title,
  content,
  excerpt,
}: ArticleReaderProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const textToSpeech = `${title}\n\n${excerpt}\n\n${content}`;

  useEffect(() => {
    speechSynthesis.cancel();
  }, []);

  function play() {
    let utterance = new SpeechSynthesisUtterance(textToSpeech);
    utterance.pitch = 0;
    speechSynthesis.speak(utterance);
    setIsPlaying(true);
  }

  function pause() {
    speechSynthesis.pause();
    setIsPaused(true);
  }

  function resume() {
    speechSynthesis.resume();
    setIsPaused(false);
  }

  function stop() {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  }

  return { play, pause, resume, stop, isPlaying, isPaused };
}
