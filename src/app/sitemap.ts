import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { CASE_STUDIES } from "@/content/work";
import { POSTS } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/gtm-engineering`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE.url}/speaking`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/blog`, changeFrequency: "weekly", priority: 0.75 },
    { url: `${SITE.url}/resume`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE.url}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ].map(
    (r): MetadataRoute.Sitemap[number] => ({
      ...r,
      changeFrequency: r.changeFrequency as "weekly" | "monthly" | "yearly",
      lastModified: now,
    })
  );

  const workRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${SITE.url}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  const postRoutes: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes, ...postRoutes];
}
