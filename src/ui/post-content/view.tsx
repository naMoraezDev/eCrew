"use client";

import { usePostContent } from "./_io";
import styles from "./styles.module.scss";
import { PostContentProps } from "./types";

export function PostContentView({ content }: PostContentProps) {
  usePostContent({ content });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className={`${styles.content} flex flex-col gap-6 text-sm text-slate-300 bg-zinc-900 p-10 rounded-lg`}
    />
  );
}
