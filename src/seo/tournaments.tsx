import { Metadata } from "next";
import { defaultMetadata } from "./default";
import { BreadcrumbJsonLd, WebPageJsonLd } from "next-seo";

export const tournamentsMetadata: Metadata = {
  ...defaultMetadata,
  title: "Torneios | eCrew",
  alternates: {
    canonical: `${process.env.PRIVATE_SITE_URL}/torneios`,
  },
  description:
    "Entre no coração da ação dds e-sports com os torneios mais acirrados do mundo! Resultados ao vivo, programação completa, e cobertura exclusiva dos maiores eventos. Conecte-se com a comunidade e não perca nenhum momento épico. Sua jornada no eSports começa aqui!",
};

export function TournamentsSEO() {
  return (
    <>
      <WebPageJsonLd
        useAppDir
        type="WebPage"
        reviewedBy={{ name: "eCrew", type: "Organization" }}
        id={`${process.env.PRIVATE_SITE_URL}/#torneios`}
        dataArray={[
          {
            inLanguage: "pt-BR",
            name: "Torneios | eCrew",
            isPartOf: {
              type: "WebSite",
              name: "Notícias | eCrew",
              id: `${process.env.PRIVATE_SITE_URL}/#noticias`,
              url: `${process.env.PRIVATE_SITE_URL}/noticias`,
            },
            url: `${process.env.PRIVATE_SITE_URL}/torneios`,
          },
        ]}
        description="Entre no coração da ação dds e-sports com os torneios mais acirrados do mundo! Resultados ao vivo, programação completa, e cobertura exclusiva dos maiores eventos. Conecte-se com a comunidade e não perca nenhum momento épico. Sua jornada no eSports começa aqui!"
      />
      <BreadcrumbJsonLd
        useAppDir
        itemListElements={[
          {
            position: 1,
            name: "Torneios | eCrew",
            item: `${process.env.PRIVATE_SITE_URL}/torneios`,
          },
        ]}
      />
    </>
  );
}
