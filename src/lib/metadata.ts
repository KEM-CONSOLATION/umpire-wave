import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface GenerateMetadataParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path = "",
  image = siteConfig.ogImage,
  type = "website",
  noIndex = false,
}: GenerateMetadataParams = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;
  const pageDescription = description || siteConfig.description;
  const pageUrl = `${siteConfig.url}${path}`;
  const ogImageUrl = `${siteConfig.url}${image}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: pageTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description: pageDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type,
      locale: "en_US",
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
      creator: "@umpirewave",
      site: "@umpirewave",
    },
    alternates: {
      canonical: pageUrl,
    },
    verification: {
      // Add your verification codes here when available
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
    },
  };
}
