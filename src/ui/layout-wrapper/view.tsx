import Image from "next/image";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { cookies } from "next/headers";
import { DefaultProps } from "@/types/common";
import { ProTopBanner } from "./pro-top-banner";
import { CookiesAccept } from "../cookies-accept";
import { EpostsApiService } from "@/services/eposts-api.service";
import verticalBanner from "@/assets/images/exitlag-vertical-banner.png";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function LayoutWrapperView({
  children,
  isDesktop,
}: Readonly<{ children: React.ReactNode } & DefaultProps>) {
  const cookieStore = cookies();
  const cookiesAccepted = cookieStore.get("cookies-accepted")?.value === "true";
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
        {isDesktop && (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.exitlag.com/"
            className="h-fit sticky top-16 mb-4"
          >
            <Image
              priority
              quality={100}
              src={verticalBanner}
              alt="vertical banner"
              className="shrink-0 object-cover h-fit mt-4 rounded-lg"
            />
          </a>
        )}
        <main className="w-full max-w-[1024px] p-4">{children}</main>
        {isDesktop && (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.exitlag.com/"
            className="h-fit sticky top-16 mb-4"
          >
            <Image
              priority
              quality={100}
              src={verticalBanner}
              alt="vertical banner"
              className="shrink-0 object-cover h-fit mt-4 rounded-lg"
            />
          </a>
        )}
      </div>
      {!cookiesAccepted && <CookiesAccept />}
      <Footer isDesktop={isDesktop} />
    </>
  );
}
