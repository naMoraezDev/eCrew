import { Header } from "./header";
import { Navbar } from "./navbar";

export function LayoutWrapperView({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <Navbar />
      <main className="w-full max-w-[1270px] mx-auto p-4">{children}</main>
    </>
  );
}
