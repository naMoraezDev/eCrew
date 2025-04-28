import { Footer } from "./footer";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { GAMES } from "@/shared/utils/static";
import { DefaultProps } from "@/types/common";
import { CookiesAccept } from "../cookies-accept";

export async function LayoutWrapperView({
  children,
  isDesktop,
}: Readonly<{ children: React.ReactNode } & DefaultProps>) {
  return (
    <>
      <Header games={GAMES} isDesktop={isDesktop} />
      {isDesktop && <Navbar />}
      <main className="w-full sm:max-w-[70%] 2xl:max-w-[60%] py-4 mx-auto">
        {children}
      </main>
      <CookiesAccept />
      <Footer isDesktop={isDesktop} />
    </>
  );
}
