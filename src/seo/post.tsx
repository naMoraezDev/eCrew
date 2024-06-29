import { Metadata } from "next";
import { defaultMetadata } from "./default";
import { Post } from "@/services/types/post.types";
import { getCategoryTitle } from "@/shared/utils/seo";
import { WebPageJsonLd, ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";

type PostSeoProps = {
  post: Post;
};

export function postMetadata({ post }: PostSeoProps): Metadata {
  return {
    ...defaultMetadata,
    title: post.title,
    description: post.excerpt,
    twitter: {
      creator: "@eposts",
      card: "summary_large_image",
      images: [
        {
          alt: post.title,
          type: "image/jpg",
          url: post.post_thumbnail.URL,
          width: post.post_thumbnail.width,
          height: post.post_thumbnail.height,
        },
      ],
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [
        {
          alt: post.title,
          type: "image/jpg",
          url: post.post_thumbnail.URL,
          width: post.post_thumbnail.width,
          height: post.post_thumbnail.height,
        },
      ],
      url: `${process.env.PRIVATE_SITE_URL}/${post.categories[0].slug}/${post.slug}`,
    },
    alternates: {
      canonical: `${process.env.PRIVATE_SITE_URL}/${post.categories[0].slug}/${post.slug}`,
    },
  };
}

export function PostSEO({ post }: PostSeoProps) {
  return (
    <>
      <WebPageJsonLd
        useAppDir
        type="WebPage"
        description={post.excerpt}
        lastReviewed={post.modified}
        reviewedBy={{ name: "ePosts", type: "Organization" }}
        id={`${process.env.PRIVATE_SITE_URL}/${post.categories[0].slug}/#${post.slug}`}
        dataArray={[
          {
            name: post.title,
            inLanguage: "pt-BR",
            isPartOf: {
              type: "WebSite",
              name: "Notícias - ePosts",
              id: `${process.env.PRIVATE_SITE_URL}/#noticias`,
              url: `${process.env.PRIVATE_SITE_URL}/noticias`,
            },
            url: `${process.env.PRIVATE_SITE_URL}/${post.categories[0].slug}/${post.slug}`,
          },
        ]}
      />
      <ArticleJsonLd
        useAppDir
        title={post.title}
        datePublished={post.date}
        description={post.excerpt}
        isAccessibleForFree={true}
        dateModified={post.modified}
        images={[post.post_thumbnail.URL]}
        authorName={{ type: "Organization", name: "ePosts" }}
        url={`${process.env.PRIVATE_SITE_URL}/${post.categories[0].slug}/${post.slug}`}
      />
      <BreadcrumbJsonLd
        useAppDir
        itemListElements={[
          {
            position: 1,
            name: "Notícias - ePosts",
            item: `${process.env.PRIVATE_SITE_URL}/noticias`,
          },
          {
            position: 2,
            name: getCategoryTitle(post.categories[0].slug),
            item: `${process.env.PRIVATE_SITE_URL}/noticias/${post.categories[0].slug}`,
          },
          {
            position: 3,
            name: post.title,
            item: `${process.env.PRIVATE_SITE_URL}/${post.categories[0].slug}/${post.slug}`,
          },
        ]}
      />
      <meta property="mrf:authors" content={post.author.name} />
    </>
  );
}
