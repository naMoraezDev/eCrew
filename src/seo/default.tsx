import { Metadata } from "next";
import { OrganizationJsonLd } from "next-seo";

export const defaultMetadata: Metadata = {
  twitter: {
    creator: "@ecrew",
    card: "summary_large_image",
    images: [
      {
        width: 1280,
        height: 720,
        type: "image/png",
        alt: "capa ecrew",
        url: "https://i.ibb.co/cQpwN1b/eposts-cover.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    title: "eCrew",
    url: process.env.PRIVATE_SITE_URL,
    images: [
      {
        width: 1280,
        height: 720,
        type: "image/png",
        alt: "capa ecrew",
        url: "https://i.ibb.co/cQpwN1b/eposts-cover.png",
      },
    ],
  },
};

export function DefaultSEO() {
  return (
    <OrganizationJsonLd
      useAppDir
      name="eCrew"
      type="Organization"
      legalName="eCrew LTDA"
      url={process.env.PRIVATE_SITE_URL || ""}
      logo="https://i.ibb.co/cQpwN1b/eposts-cover.png"
      id={`${process.env.PRIVATE_SITE_URL}#webpage`}
    />
  );
}
