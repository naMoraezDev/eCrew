"use client";

import { ShareButtons } from "../share-buttons";
import { usePostContent } from "./_io";
import styles from "./styles.module.scss";
import { PostContentProps } from "./types";

export function PostContentView({ content, isDesktop }: PostContentProps) {
  usePostContent({ content });

  return (
    <div
      className={`${
        isDesktop && "rounded-lg"
      } w-full bg-zinc-900 bg-opacity-50`}
    >
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={`
          ${styles.content} 
          ${isDesktop ? "p-10" : "p-6"} 
          flex flex-col gap-6 text-sm text-slate-300 
        `}
      />
      <div
        className={`
          ${isDesktop ? "py-4 px-10 rounded-b-lg" : "py-4 px-6"}
          w-full text-xs font-bold text-slate-300 bg-zinc-900 flex items-center justify-center
        `}
      >
        <ShareButtons />
      </div>
    </div>
  );
}
