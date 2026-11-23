import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/content";
import { getPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/uslugi/",
    ...services.map((s) => `/uslugi/${s.slug}/`),
    "/realizacje/",
    "/zespol/",
    "/opinie/",
    "/wycena/",
    "/rezerwacja/",
    "/kontakt/",
    "/praca/",
    ...cities.map((c) => `/wykonczenia-wnetrz/${c.slug}/`),
    "/blog/",
    ...getPosts().map((p) => `/blog/${p.slug}/`),
  ];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/uslugi/") ? 0.8 : 0.6,
  }));
}
