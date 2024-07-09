import { Metadata } from "next";
import { defaultMetadata } from "./default";
import { BreadcrumbJsonLd, WebPageJsonLd } from "next-seo";

export const matchesMetadata: Metadata = {
  ...defaultMetadata,
  title: "Partidas | eCrew",
  alternates: {
    canonical: `${process.env.PRIVATE_SITE_URL}/partidas`,
  },
  description:
    "Assista aos confrontos mais eletrizantes dos e-sports em tempo real! Fique por dentro de todas as ações, estratégias e jogadas incríveis com nossa cobertura ao vivo. Atualizações instantâneas, análises aprofundadas e entrevistas exclusivas com os jogadores. Sua central de eSports começa aqui!",
};

export function MatchesSEO() {
  return (
    <>
      <WebPageJsonLd
        useAppDir
        type="WebPage"
        reviewedBy={{ name: "eCrew", type: "Organization" }}
        id={`${process.env.PRIVATE_SITE_URL}/#partidas`}
        dataArray={[
          {
            inLanguage: "pt-BR",
            name: "Partidas | eCrew",
            isPartOf: {
              type: "WebSite",
              name: "Notícias | eCrew",
              id: `${process.env.PRIVATE_SITE_URL}/#noticias`,
              url: `${process.env.PRIVATE_SITE_URL}/noticias`,
            },
            url: `${process.env.PRIVATE_SITE_URL}/partidas`,
          },
        ]}
        description="Assista aos confrontos mais eletrizantes dos e-sports em tempo real! Fique por dentro de todas as ações, estratégias e jogadas incríveis com nossa cobertura ao vivo. Atualizações instantâneas, análises aprofundadas e entrevistas exclusivas com os jogadores. Sua central de eSports começa aqui!"
      />
      <BreadcrumbJsonLd
        useAppDir
        itemListElements={[
          {
            position: 1,
            name: "Partidas | eCrew",
            item: `${process.env.PRIVATE_SITE_URL}/partidas`,
          },
        ]}
      />
    </>
  );
}
