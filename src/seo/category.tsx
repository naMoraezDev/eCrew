import { Metadata } from "next";
import { defaultMetadata } from "./default";
import { BreadcrumbJsonLd, WebPageJsonLd } from "next-seo";
import { getCategoryDescription, getCategoryTitle } from "@/shared/utils/seo";

type CategorySEOProps = {
  categorySlug: string;
};

type CategoryMetadata = {
  categorySlug: string;
};

export function categoryMetadata({ categorySlug }: CategoryMetadata): Metadata {
  return {
    ...defaultMetadata,
    other: {
      articleSection: categorySlug,
    },
    title: getCategoryTitle(categorySlug),
    description: getCategoryDescription(categorySlug),
    alternates: {
      canonical: `${process.env.PRIVATE_SITE_URL}/noticias/${categorySlug}`,
    },
  };
}

export function CategorySEO({ categorySlug }: CategorySEOProps) {
  return (
    <>
      <WebPageJsonLd
        useAppDir
        type="WebPage"
        description={getCategoryDescription(categorySlug)}
        id={`${process.env.PRIVATE_SITE_URL}/noticias/#${categorySlug}`}
        reviewedBy={{ name: "eCrew", type: "Organization" }}
        dataArray={[
          {
            inLanguage: "pt-BR",
            name: getCategoryTitle(categorySlug),
            isPartOf: {
              type: "WebSite",
              name: "Notícias | eCrew",
              id: `${process.env.PRIVATE_SITE_URL}/#noticias`,
              url: `${process.env.PRIVATE_SITE_URL}/noticias`,
            },
            url: `${process.env.PRIVATE_SITE_URL}/noticias/${categorySlug}`,
          },
        ]}
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
            position: 2,
            name: getCategoryTitle(categorySlug),
            item: `${process.env.PRIVATE_SITE_URL}/noticias/${categorySlug}`,
          },
        ]}
      />
    </>
  );
}
