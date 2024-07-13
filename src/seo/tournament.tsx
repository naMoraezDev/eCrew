import { Metadata } from "next";
import { defaultMetadata } from "./default";
import { WebPageJsonLd, BreadcrumbJsonLd } from "next-seo";
import { Tournament } from "@/services/pandascore/types/tournaments.types";

type TournamentSeoProps = {
  tournament: Tournament;
};

export function tournamentMetadata({
  tournament,
}: TournamentSeoProps): Metadata {
  return {
    ...defaultMetadata,
    title: `${tournament.league.name} ${tournament.name}`,
    description:
      "Assista aos confrontos mais eletrizantes dos e-sports em tempo real! Fique por dentro de todas as ações, estratégias e jogadas incríveis com nossa cobertura ao vivo. Atualizações instantâneas, análises aprofundadas e entrevistas exclusivas com os jogadores. Sua central de eSports começa aqui!",
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${tournament.league.name} ${tournament.name}`,
      description:
        "Assista aos confrontos mais eletrizantes dos e-sports em tempo real! Fique por dentro de todas as ações, estratégias e jogadas incríveis com nossa cobertura ao vivo. Atualizações instantâneas, análises aprofundadas e entrevistas exclusivas com os jogadores. Sua central de eSports começa aqui!",
      url: `${
        process.env.PRIVATE_SITE_URL
      }/torneios/${tournament.id.toString()}`,
    },
    alternates: {
      canonical: `${
        process.env.PRIVATE_SITE_URL
      }/torneios/${tournament.id.toString()}`,
    },
  };
}

export function TournamentSEO({ tournament }: TournamentSeoProps) {
  return (
    <>
      <WebPageJsonLd
        useAppDir
        type="WebPage"
        description="Assista aos confrontos mais eletrizantes dos e-sports em tempo real! Fique por dentro de todas as ações, estratégias e jogadas incríveis com nossa cobertura ao vivo. Atualizações instantâneas, análises aprofundadas e entrevistas exclusivas com os jogadores. Sua central de eSports começa aqui!"
        reviewedBy={{ name: "eCrew", type: "Organization" }}
        id={`${
          process.env.PRIVATE_SITE_URL
        }/torneios/#${tournament.id.toString()}`}
        dataArray={[
          {
            name: `${tournament.league.name} ${tournament.name}`,
            inLanguage: "pt-BR",
            isPartOf: {
              type: "WebSite",
              name: "Notícias | eCrew",
              id: `${process.env.PRIVATE_SITE_URL}/#noticias`,
              url: `${process.env.PRIVATE_SITE_URL}/noticias`,
            },
            url: `${
              process.env.PRIVATE_SITE_URL
            }/torneios/${tournament.id.toString()}`,
          },
        ]}
      />
      <BreadcrumbJsonLd
        useAppDir
        itemListElements={[
          {
            position: 1,
            name: "Torneios - eCrew",
            item: `${process.env.PRIVATE_SITE_URL}/torneios`,
          },
          {
            position: 2,
            name: `${tournament.league.name} ${tournament.name}`,
            item: `${
              process.env.PRIVATE_SITE_URL
            }/torneios/${tournament.id.toString()}`,
          },
        ]}
      />
    </>
  );
}
