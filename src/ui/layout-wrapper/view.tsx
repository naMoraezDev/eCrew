import { Footer } from "./footer";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { DefaultProps } from "@/types/common";
import { ProTopBanner } from "./pro-top-banner";
// import { CookiesAccept } from "../cookies-accept";
import { EpostsApiService } from "@/services/eposts-api.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function LayoutWrapperView({
  children,
  isDesktop,
}: Readonly<{ children: React.ReactNode } & DefaultProps>) {
  const [games] = await Promise.all([
    new EpostsApiService(httpClientFactory()).getGames(),
  ]);

  return (
    <>
      <ProTopBanner isDesktop={isDesktop} />
      <Header isDesktop={isDesktop} games={games} />
      <Navbar />
      <div
        className={`
          ${isDesktop ? "w-fit" : "w-full"}
          flex mx-auto gap-3
        `}
      >
        <main className="w-full max-w-[1280px] p-4">{children}</main>
      </div>
      {/* <CookiesAccept /> */}
      <Footer isDesktop={isDesktop} />
    </>
  );
}
