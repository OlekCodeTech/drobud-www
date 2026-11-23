import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { basePath } from "@/lib/asset";

const DIR = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // RRRR-MM-DD
  category: string;
  /** Slug usługi, do której wpis kieruje w CTA. */
  service?: string;
  faq: { q: string; a: string }[];
  html: string;
  minutes: number;
};

function read(file: string): Post {
  const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
  return {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    category: String(data.category ?? "Poradnik"),
    service: data.service ? String(data.service) : undefined,
    faq: Array.isArray(data.faq) ? data.faq : [],
    // Linki wewnętrzne z Markdown dostają base path (podgląd na GitHub Pages).
    html: marked.parse(content, { async: false }).replace(/href="\//g, `href="${basePath}/`),
    minutes: Math.max(1, Math.round(content.split(/\s+/).length / 200)),
  };
}

export function getPosts(): Post[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(read)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);

export const formatDate = (date: string) =>
  new Date(`${date}T12:00:00`).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
