import { Metadata } from "next";
import { OrganizationJsonLd } from "next-seo";

export const defaultMetadata: Metadata = {
  twitter: {
    creator: "@eposts",
    card: "summary_large_image",
    images: [
      {
        width: 1280,
        height: 720,
        type: "image/png",
        alt: "capa eposts",
        url: "https://i.ibb.co/cQpwN1b/eposts-cover.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    title: "ePosts",
    url: process.env.PRIVATE_SITE_URL,
    images: [
      {
        width: 1280,
        height: 720,
        type: "image/png",
        alt: "capa eposts",
        url: "https://i.ibb.co/cQpwN1b/eposts-cover.png",
      },
    ],
  },
};

export function DefaultSEO() {
  return (
    <OrganizationJsonLd
      useAppDir
      name="ePosts"
      type="Organization"
      legalName="ePosts LTDA"
      url={process.env.PRIVATE_SITE_URL || ""}
      logo="https://i.ibb.co/cQpwN1b/eposts-cover.png"
      id={`${process.env.PRIVATE_SITE_URL}#webpage`}
    />
  );
}
