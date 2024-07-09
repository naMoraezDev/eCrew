import { Metadata } from "next";
import { defaultMetadata } from "./default";
import { Match } from "@/services/types/match.types";
import { WebPageJsonLd, BreadcrumbJsonLd } from "next-seo";

type MatchSeoProps = {
  match: Match;
};

export function matchMetadata({ match }: MatchSeoProps): Metadata {
  return {
    ...defaultMetadata,
    title: match.name,
    description:
      "Assista aos confrontos mais eletrizantes dos e-sports em tempo real! Fique por dentro de todas as ações, estratégias e jogadas incríveis com nossa cobertura ao vivo. Atualizações instantâneas, análises aprofundadas e entrevistas exclusivas com os jogadores. Sua central de eSports começa aqui!",
    openGraph: {
      ...defaultMetadata.openGraph,
      title: match.name,
      description:
        "Assista aos confrontos mais eletrizantes dos e-sports em tempo real! Fique por dentro de todas as ações, estratégias e jogadas incríveis com nossa cobertura ao vivo. Atualizações instantâneas, análises aprofundadas e entrevistas exclusivas com os jogadores. Sua central de eSports começa aqui!",
      url: `${process.env.PRIVATE_SITE_URL}/partidas/${match.id.toString()}`,
    },
    alternates: {
      canonical: `${
        process.env.PRIVATE_SITE_URL
      }/partidas/${match.id.toString()}`,
    },
  };
}

export function MatchSEO({ match }: MatchSeoProps) {
  return (
    <>
      <WebPageJsonLd
        useAppDir
        type="WebPage"
        description="Assista aos confrontos mais eletrizantes dos e-sports em tempo real! Fique por dentro de todas as ações, estratégias e jogadas incríveis com nossa cobertura ao vivo. Atualizações instantâneas, análises aprofundadas e entrevistas exclusivas com os jogadores. Sua central de eSports começa aqui!"
        reviewedBy={{ name: "eCrew", type: "Organization" }}
        id={`${process.env.PRIVATE_SITE_URL}/partidas/#${match.id.toString()}`}
        dataArray={[
          {
            name: match.name,
            inLanguage: "pt-BR",
            isPartOf: {
              type: "WebSite",
              name: "Notícias | eCrew",
              id: `${process.env.PRIVATE_SITE_URL}/#noticias`,
              url: `${process.env.PRIVATE_SITE_URL}/noticias`,
            },
            url: `${
              process.env.PRIVATE_SITE_URL
            }/partidas/${match.id.toString()}`,
          },
        ]}
      />
      <BreadcrumbJsonLd
        useAppDir
        itemListElements={[
          {
            position: 1,
            name: "Partidas - eCrew",
            item: `${process.env.PRIVATE_SITE_URL}/partidas`,
          },
          {
            position: 2,
            name: match.name,
            item: `${
              process.env.PRIVATE_SITE_URL
            }/partidas/${match.id.toString()}`,
          },
        ]}
      />
    </>
  );
}
