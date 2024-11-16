import "./globals.css";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import { AuthProvider } from "@/contexts/auth";
import { Inter, Kanit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { LoadingProvider } from "@/contexts/loading";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Suspense } from "react";

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
        <Suspense fallback={null}>
          <AuthProvider>
            <LoadingProvider>
              <Toaster />
              <GoogleTagManager gtmId="GTM-53J6FRHH" />
              {children}
              <SpeedInsights />
              <GoogleAnalytics gaId="G-0C0TGZ1QQE" />
            </LoadingProvider>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
