import { useEffect } from "react";
import { PostContentProps } from "./types";

export function usePostContent({ content }: PostContentProps) {
  const hasTwitter = content.includes("https://twitter.com");
  useEffect(() => {
    if (!hasTwitter) return;
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);

  useEffect(() => {
    if (!hasTwitter) return;
    const interval = setInterval(() => {
      //@ts-ignore
      window.twttr.widgets.load();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return {};
}
