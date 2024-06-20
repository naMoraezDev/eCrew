import Image from "next/image";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { DefaultProps } from "@/types/common";
import verticalAd from "@/assets/images/vertical-ad.jpg";

export function LayoutWrapperView({
  children,
  isDesktop,
}: Readonly<{ children: React.ReactNode } & DefaultProps>) {
  return (
    <>
      <Header isDesktop={isDesktop} />
      <Navbar />
      <div
        className={`
          ${isDesktop ? "w-fit" : "w-full"}
          flex mx-auto
        `}
      >
        {isDesktop && (
          <Image
            priority
            src={verticalAd}
            alt="Vertical ad"
            className="shrink-0 object-cover h-fit sticky top-16 mt-4 rounded-lg"
          />
        )}
        <main className="w-full max-w-[1000px] p-4">{children}</main>
        {isDesktop && (
          <Image
            priority
            src={verticalAd}
            alt="Vertical ad"
            className="shrink-0 object-cover h-fit sticky top-16 mt-4 rounded-lg"
          />
        )}
      </div>
      <Footer isDesktop={isDesktop} />
    </>
  );
}
