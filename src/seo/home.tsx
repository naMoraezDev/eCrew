import { Metadata } from "next";
import { DefaultSEO, defaultMetadata } from "./default";
import { WebPageJsonLd, BreadcrumbJsonLd } from "next-seo";

export const homeMetadata: Metadata = {
  ...defaultMetadata,
  title: "Notícias | GG",
  alternates: {
    canonical: `${process.env.PRIVATE_SITE_URL}/noticias`,
  },
  other: {
    referrer: "no-referrer-when-downgrade",
    viewport:
      "initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width, height=device-height",
  },
  description:
    "Leia as últimas novidades, análises e destaques do mundo dos e-sports. Fique por dentro dos torneios, equipes, jogadores e tendências do cenário competitivo.",
};

export function HomeSEO() {
  return (
    <>
      <DefaultSEO />
      <WebPageJsonLd
        useAppDir
        type="WebPage"
        id={`${process.env.PRIVATE_SITE_URL}/#noticias`}
        reviewedBy={{ name: "eCrew", type: "Organization" }}
        dataArray={[
          {
            inLanguage: "pt-BR",
            name: "Notícias | GG",
            url: `${process.env.PRIVATE_SITE_URL}/noticias`,
            isPartOf: {
              type: "WebSite",
              name: "Notícias | GG",
              id: `${process.env.PRIVATE_SITE_URL}/#noticias`,
              url: `${process.env.PRIVATE_SITE_URL}/noticias`,
            },
          },
        ]}
        description="Leia as últimas novidades, análises e destaques do mundo dos e-sports. Fique por dentro dos torneios, equipes, jogadores e tendências do cenário competitivo."
      />
      <BreadcrumbJsonLd
        useAppDir
        itemListElements={[
          {
            position: 1,
            name: "Notícias | GG",
            item: `${process.env.PRIVATE_SITE_URL}/noticias`,
          },
        ]}
      />
      <meta property="mrf:sections" content="noticias" />
    </>
  );
}
