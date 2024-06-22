import Image from "next/image";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { DefaultProps } from "@/types/common";
import verticalAd from "@/assets/images/vertical-ad.jpg";
import { EpostsApiService } from "@/services/eposts-api.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function LayoutWrapperView({
  children,
  isDesktop,
}: Readonly<{ children: React.ReactNode } & DefaultProps>) {
  const games = await new EpostsApiService(httpClientFactory()).getGames();

  return (
    <>
      <Header isDesktop={isDesktop} games={games} />
      <Navbar />
      <div
        className={`
          ${isDesktop ? "w-fit" : "w-full"}
          flex mx-auto
        `}
      >
        {isDesktop && (
          <a href="https://br.betano.com/" target="_blank" rel="noreferrer">
            <Image
              priority
              src={verticalAd}
              alt="Vertical ad"
              className="shrink-0 object-cover h-fit sticky top-16 mt-4 rounded-lg"
            />
          </a>
        )}
        <main className="w-full max-w-[1000px] p-4">{children}</main>
        {isDesktop && (
          <a href="https://br.betano.com/" target="_blank" rel="noreferrer">
            <Image
              priority
              src={verticalAd}
              alt="Vertical ad"
              className="shrink-0 object-cover h-fit sticky top-16 mt-4 rounded-lg"
            />
          </a>
        )}
      </div>
      <Footer isDesktop={isDesktop} />
    </>
  );
}
