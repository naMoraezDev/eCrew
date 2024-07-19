import { Footer } from "./footer";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { DefaultProps } from "@/types/common";
// import { ProTopBanner } from "./pro-top-banner";
import { CookiesAccept } from "../cookies-accept";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";
import { WordpressService } from "@/services/wordpress/wordpress.service";

export async function LayoutWrapperView({
  children,
  isDesktop,
}: Readonly<{ children: React.ReactNode } & DefaultProps>) {
  const [
    games,
    csPosts,
    r6Posts,
    lolPosts,
    codPosts,
    dotaPosts,
    valorantPosts,
  ] = await Promise.all([
    new EcrewApiService(httpClientFactory()).getGames(),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      number: "3",
      categorySlug: "cs-go",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      number: "3",
      categorySlug: "r6-siege",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      number: "3",
      categorySlug: "league-of-legends",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      number: "3",
      categorySlug: "cod-mw",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      number: "3",
      categorySlug: "dota-2",
    }),
    new WordpressService(httpClientFactory()).getPostsByCategory({
      number: "3",
      categorySlug: "valorant",
    }),
  ]);

  return (
    <>
      {/* <ProTopBanner isDesktop={isDesktop} /> */}
      <Header
        games={games}
        csPosts={csPosts}
        r6Posts={r6Posts}
        codPosts={codPosts}
        lolPosts={lolPosts}
        isDesktop={isDesktop}
        dotaPosts={dotaPosts}
        valorantPosts={valorantPosts}
      />
      {isDesktop && <Navbar />}
      <main className="w-full max-w-[1280px] p-4 mx-auto">{children}</main>
      <CookiesAccept />
      <Footer isDesktop={isDesktop} />
    </>
  );
}
