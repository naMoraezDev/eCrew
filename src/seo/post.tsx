import { Metadata } from "next";
import { defaultMetadata } from "./default";
import { getCategoryTitle } from "@/shared/utils/seo";
import { Post } from "@/services/wordpress/types/post";
import { WebPageJsonLd, ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";

type PostSeoProps = {
  post: Post;
};

export function postMetadata({ post }: PostSeoProps): Metadata {
  return {
    ...defaultMetadata,
    title: post.data.post.title,
    description: post.data.post.excerpt,
    twitter: {
      creator: "@ecrew",
      card: "summary_large_image",
      images: [
        {
          width: 1280,
          height: 720,
          type: "image/jpg",
          alt: post.data.post.title,
          url: post.data.post.featuredImage.node.sourceUrl,
        },
      ],
    },
    openGraph: {
      type: "article",
      title: post.data.post.title,
      description: post.data.post.excerpt,
      images: [
        {
          width: 1280,
          height: 720,
          type: "image/jpg",
          alt: post.data.post.title,
          url: post.data.post.featuredImage.node.sourceUrl,
        },
      ],
      url: `${process.env.PRIVATE_SITE_URL}/${post.data.post.categories.edges[0].node.slug}/${post.data.post.slug}`,
    },
    alternates: {
      canonical: `${process.env.PRIVATE_SITE_URL}/${post.data.post.categories.edges[0].node.slug}/${post.data.post.slug}`,
    },
  };
}

export function PostSEO({ post }: PostSeoProps) {
  return (
    <>
      <WebPageJsonLd
        useAppDir
        type="WebPage"
        description={post.data.post.excerpt}
        lastReviewed={post.data.post.modified}
        reviewedBy={{ name: "eCrew", type: "Organization" }}
        id={`${process.env.PRIVATE_SITE_URL}/${post.data.post.categories.edges[0].node.slug}/#${post.data.post.slug}`}
        dataArray={[
          {
            name: post.title,
            inLanguage: "pt-BR",
            isPartOf: {
              type: "WebSite",
              name: "Notícias | eCrew",
              id: `${process.env.PRIVATE_SITE_URL}/#noticias`,
              url: `${process.env.PRIVATE_SITE_URL}/noticias`,
            },
            url: `${process.env.PRIVATE_SITE_URL}/${post.data.post.categories.edges[0].node.slug}/${post.data.post.slug}`,
          },
        ]}
      />
      <ArticleJsonLd
        useAppDir
        isAccessibleForFree={true}
        title={post.data.post.title}
        datePublished={post.data.post.date}
        description={post.data.post.excerpt}
        dateModified={post.data.post.modified}
        images={[post.data.post.featuredImage.node.sourceUrl]}
        authorName={{ type: "Organization", name: "eCrew" }}
        url={`${process.env.PRIVATE_SITE_URL}/${post.data.post.categories.edges[0].node.slug}/${post.data.post.slug}`}
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
            name: getCategoryTitle(
              post.data.post.categories.edges[0].node.slug
            ),
            item: `${process.env.PRIVATE_SITE_URL}/noticias/${post.data.post.categories.edges[0].node.slug}`,
          },
          {
            position: 3,
            name: post.title,
            item: `${process.env.PRIVATE_SITE_URL}/${post.data.post.categories.edges[0].node.slug}/${post.data.post.slug}`,
          },
        ]}
      />
      <meta property="mrf:authors" content={post.data.post.author.node.name} />
    </>
  );
}
