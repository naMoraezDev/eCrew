import Image from "next/image";
import { PostCardProps } from "./types";

export function PostCardView({
  post,
  size = "medium",
  variant = "filled",
  orientation = "vertical",
}: PostCardProps) {
  return (
    <section
      className={`
        ${
          variant === "filled" &&
          "bg-zinc-900 bg-opacity-50 border border-zinc-800"
        }
        ${orientation === "vertical" && "flex-col w-full"}
        flex gap-3 p-3 rounded-lg
      `}
    >
      <figure
        className={`
          ${size === "small" && "max-w-24 max-h-24"}
          ${orientation === "vertical" ? "w-full" : "w-1/2"}
          rounded-md overflow-hidden shrink-0
        `}
      >
        <Image
          alt={post.title}
          src={post.post_thumbnail.URL}
          width={post.post_thumbnail.width}
          height={post.post_thumbnail.height}
          className="size-full object-cover object-center hover:scale-110 duration-300"
        />
      </figure>
      <div className="w-full flex flex-col gap-3">
        <h3
          className={`
            ${size === "medium" ? "line-clamp-2" : "line-clamp-1"}
            font-kanit font-medium text-violet-500 text-ellipsis
          `}
        >
          {post.title}
        </h3>
        <div
          className={`
            ${size === "medium" ? "line-clamp-3" : "line-clamp-2"}
            text-xs text-zinc-400 text-ellipsis
          `}
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
        <div className="flex justify-end mt-auto">
          <span className="text-xs text-zinc-400 font-medium">
            {new Date(post.modified).toLocaleDateString("pt-BR", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </section>
  );
}
