import { Metadata } from "next";
import { defaultMetadata } from "./default";
import { BreadcrumbJsonLd, WebPageJsonLd } from "next-seo";

interface MoreNewsSeoProps {
  page: string;
}

export function moreNewsMetadata({ page }: MoreNewsSeoProps): Metadata {
  return {
    ...defaultMetadata,
    title: `Mais notícias ${page ? ` - Página ${page}` : ""}`,
    alternates: {
      canonical: `${process.env.PRIVATE_SITE_URL}/noticias/mais-noticias${
        page ? `?page=${page}` : ""
      }`,
    },
    description:
      "Leia as últimas novidades, análises e destaques do mundo dos e-sports. Fique por dentro dos torneios, equipes, jogadores e tendências do cenário competitivo.",
  };
}

export function MoreNewsSEO({ page }: MoreNewsSeoProps) {
  return (
    <>
      <WebPageJsonLd
        useAppDir
        type="WebPage"
        reviewedBy={{ name: "eCrew", type: "Organization" }}
        id={`${process.env.PRIVATE_SITE_URL}/noticias/#mais-noticias${
          page ? `?page=${page}` : ""
        }`}
        dataArray={[
          {
            inLanguage: "pt-BR",
            name: "Mais notícias | eCrew",
            isPartOf: {
              type: "WebSite",
              name: "Notícias | eCrew",
              id: `${process.env.PRIVATE_SITE_URL}/#noticias`,
              url: `${process.env.PRIVATE_SITE_URL}/noticias`,
            },
            url: `${process.env.PRIVATE_SITE_URL}/noticias/mais-noticias${
              page ? `?page=${page}` : ""
            }`,
          },
        ]}
        description="Leia as últimas novidades, análises e destaques do mundo dos e-sports. Fique por dentro dos torneios, equipes, jogadores e tendências do cenário competitivo."
      />
      <BreadcrumbJsonLd
        useAppDir
        itemListElements={[
          {
            position: 1,
            name: "Notícias | eCrew",
            item: `${process.env.PRIVATE_SITE_URL}/noticias`,
          },
          {
            position: 3,
            name: "Mais notícias | eCrew ",
            item: `${process.env.PRIVATE_SITE_URL}/noticias/mais-noticias${
              page ? `?page=${page}` : ""
            }`,
          },
        ]}
      />
    </>
  );
}
