import { Header } from "./header";
import { Navbar } from "./navbar";
import { DefaultProps } from "@/types/common";

export function LayoutWrapperView({
  children,
  isDesktop,
}: Readonly<{ children: React.ReactNode } & DefaultProps>) {
  return (
    <>
      <Header isDesktop={isDesktop} />
      <Navbar />
      <main className="w-full max-w-[1270px] mx-auto p-4">{children}</main>
    </>
  );
}
