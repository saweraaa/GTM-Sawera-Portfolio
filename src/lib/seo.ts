import type { Metadata } from "next";
import { SITE } from "@/content/site";

type BuildArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: BuildArgs): Metadata {
  const url = new URL(path, SITE.url).toString();
  const ogImage = image ?? "/opengraph-image";

  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: type === "profile" ? "profile" : type,
      title,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: SITE.socials.x || undefined,
    },
  };
}
