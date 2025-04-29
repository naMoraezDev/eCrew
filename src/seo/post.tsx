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
    title: post.title,
    description: post.excerpt,
    twitter: {
      creator: "@ecrew",
      card: "summary_large_image",
      images: [
        {
          width: 1280,
          height: 720,
          type: "image/jpg",
          alt: post.title,
          url: post.post_thumbnail.URL,
        },
      ],
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [
        {
          width: 1280,
          height: 720,
          type: "image/jpg",
          alt: post.title,
          url: post.post_thumbnail.URL,
        },
      ],
      url: `${process.env.PRIVATE_SITE_URL}/${
        Object.values(post.categories)[0].slug
      }/${post.slug}`,
    },
    alternates: {
      canonical: `${process.env.PRIVATE_SITE_URL}/${
        Object.values(post.categories)[0].slug
      }/${post.slug}`,
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
        reviewedBy={{ name: "eCrew", type: "Organization" }}
        id={`${process.env.PRIVATE_SITE_URL}/${
          Object.values(post.categories)[0].slug
        }/#${post.slug}`}
        dataArray={[
          {
            name: post.title,
            inLanguage: "pt-BR",
            isPartOf: {
              type: "WebSite",
              name: "Notícias | GG",
              id: `${process.env.PRIVATE_SITE_URL}/#noticias`,
              url: `${process.env.PRIVATE_SITE_URL}/noticias`,
            },
            url: `${process.env.PRIVATE_SITE_URL}/${
              Object.values(post.categories)[0].slug
            }/${post.slug}`,
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
        authorName={{ type: "Organization", name: "eCrew" }}
        url={`${process.env.PRIVATE_SITE_URL}/${
          Object.values(post.categories)[0].slug
        }/${post.slug}`}
      />
      <BreadcrumbJsonLd
        useAppDir
        itemListElements={[
          {
            position: 1,
            name: "Notícias | GG",
            item: `${process.env.PRIVATE_SITE_URL}/noticias`,
          },
          {
            position: 2,
            name: getCategoryTitle(Object.values(post.categories)[0].slug),
            item: `${process.env.PRIVATE_SITE_URL}/noticias/${
              Object.values(post.categories)[0].slug
            }`,
          },
          {
            position: 3,
            name: post.title,
            item: `${process.env.PRIVATE_SITE_URL}/${
              Object.values(post.categories)[0].slug
            }/${post.slug}`,
          },
        ]}
      />
      <meta property="mrf:authors" content={post.author.name} />
    </>
  );
}
