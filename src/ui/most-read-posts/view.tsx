import Link from "next/link";
import { FaBookOpenReader } from "react-icons/fa6";
import { WordpressService } from "@/services/wordpress/wordpress.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export async function MostReadPostsView() {
  const mostRead = await new WordpressService(
    new FetchHttpClientAdapter()
  ).getPostsByTag({
    page: 1,
    number: 5,
    slug: "mais-lidas",
  });

  return (
    <section className="flex flex-col gap-4 p-2 rounded-lg overflow-hidden relative">
      <h4 className="font-kanit font-medium text-sm flex items-center gap-2">
        <FaBookOpenReader />
        Mais lidas
      </h4>
      <div className="flex flex-col gap-4">
        {mostRead.posts.map((post, index) => (
          <Link
            key={index}
            href={`/noticias/${Object.values(post.categories)[0].slug}/${
              post.slug
            }`}
            className="text-sm font-kanit hover:animate-text-slide whitespace-nowrap"
          >
            {post.title}
          </Link>
        ))}
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}
