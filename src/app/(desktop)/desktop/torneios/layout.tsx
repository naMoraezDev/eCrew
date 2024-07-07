import { LayoutWrapper } from "@/ui/layout-wrapper";

export default function DesktopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutWrapper isDesktop>{children}</LayoutWrapper>;
}
