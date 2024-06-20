import Link from "next/link";
import Image from "next/image";
import { MorePostsAboutProps } from "./types";
import fpsIcon from "@/assets/images/fps-icon.png";
import { IoMdArrowDroprightCircle } from "react-icons/io";

export function MorePostsAboutView({ posts }: MorePostsAboutProps) {
  return (
    <section className="flex flex-col gap-3 bg-zinc-900 p-3 rounded-lg">
      <h4 className="font-kanit font-medium text-sm flex items-center gap-2">
        <Image
          width={16}
          height={16}
          src={fpsIcon}
          className="invert"
          alt="icone de mira"
        />
        <span>
          Mais sobre{" "}
          <span className="font-bold text-violet-400">Rainbow Six</span>
        </span>
      </h4>
      {posts.map((post, index) => (
        <section
          key={index}
          title={post.title}
          className="rounded-lg w-full overflow-hidden flex bg-zinc-800 relative group"
        >
          <figure className="w-16 shrink-0 overflow-hidden">
            <Image
              width={100}
              height={100}
              alt={post.title}
              src={post.post_thumbnail.URL}
              className="size-full shrink-0 object-cover group-hover:scale-105 duration-300"
            />
          </figure>
          <div className="flex flex-col gap-2 p-2 overflow-hidden">
            <h3 className="w-full font-kanit font-bold text-sm whitespace-nowrap group-hover:animate-fast-text-slide">
              {post.title}
            </h3>
            <time className="text-xs flex items-center gap-3">
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "numeric",
                year: "numeric",
                month: "numeric",
              })}
              <IoMdArrowDroprightCircle size={16} />
            </time>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none" />
          <Link
            href={`/noticias/r6-siege/${post.slug}`}
            className="absolute top-0 left-0 w-full h-full"
          />
        </section>
      ))}
    </section>
  );
}
