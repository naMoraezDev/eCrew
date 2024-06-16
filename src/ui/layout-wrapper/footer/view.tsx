import Link from "next/link";
import Image from "next/image";
import { FooterProps } from "./types";
import { LiveMatches } from "@/ui/live-matches";
import { MostReadPosts } from "@/ui/most-read-posts";
import ePostsLogo from "@/assets/images/e_posts_logo.svg";
import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";
import { ScrollToTopButton } from "@/ui/scroll-to-top-button";

export async function FooterView({ isDesktop }: FooterProps) {
  const [mostReadPosts, runningMatches, games] = await Promise.all([
    new EpostsApiService(new FetchHttpClientAdapter()).getPostsByCategory(
      "destaques"
    ),
    new EpostsApiService(new FetchHttpClientAdapter()).getRunningMatches(
      "?filter_type=videogame&filter=cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant&page=1&per_page=3"
    ),
    new EpostsApiService(new FetchHttpClientAdapter()).getGames(),
  ]);

  const mostRead = {
    ...mostReadPosts,
    posts: [
      mostReadPosts.posts[1],
      mostReadPosts.posts[1],
      mostReadPosts.posts[1],
      mostReadPosts.posts[1],
    ],
  };

  return (
    <footer className="w-full flex gap-16 max-w-[1270px] mx-auto px-4 py-4">
      <section className="flex flex-col gap-7">
        <div className="flex items-center gap-1">
          <Image
            priority
            width={40}
            height={40}
            src={ePostsLogo}
            alt="ePosts logo"
          />
          <span className="font-kanit text-4xl">ePosts</span>
        </div>
        <LiveMatches
          matches={runningMatches}
          games={games}
          background={false}
        />
      </section>
      <section className="flex flex-col gap-4 font-kanit">
        <h4 className="font-bold">Cobertura</h4>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="#">Counter Strike Global Offensive</Link>
          <Link href="#">League of Legends</Link>
          <Link href="#">Rainbow Six Siege</Link>
          <Link href="#">Dota 2</Link>
          <Link href="#">Warzone</Link>
          <Link href="#">Valorant</Link>
        </div>
      </section>
      <section className="flex flex-col gap-4 font-kanit">
        <h4 className="font-bold">Institucional</h4>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="#">Sobre nós</Link>
          <Link href="#">Termos de uso</Link>
          <Link href="#">Política de privacidade</Link>
          <Link href="#">Trabalhe conosco</Link>
        </div>
      </section>
      <section className="w-[200px]">
        <MostReadPosts postList={mostRead} />
      </section>
      <ScrollToTopButton />
    </footer>
  );
}
