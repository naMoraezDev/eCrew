import "./globals.css";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import { AuthProvider } from "@/contexts/auth";
import { Inter, Kanit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { LoadingProvider } from "@/contexts/loading";
import { CookiesAccept } from "@/ui/cookies-accept";

const kanit = Kanit({
  preload: true,
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["400", "500", "700"],
});
const inter = Inter({
  preload: true,
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="rgb(9 9 11)" />
        <meta name="google-adsense-account" content="ca-pub-5836460971552859" />
        <Script
          async
          crossOrigin="anonymous"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5836460971552859"
        />
      </head>
      <body
        className={`${kanit.variable} ${inter.variable} antialiased font-inter text-gray-50 bg-zinc-950`}
      >
        <NextTopLoader height={2} showSpinner={false} color="rgb(124 58 237)" />
        <AuthProvider>
          <LoadingProvider>
            <Toaster />
            {children}
            <CookiesAccept />
          </LoadingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
