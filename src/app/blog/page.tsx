import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPosts } from "@/lib/blog";
import { Cta, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog — poradniki o wykończeniach wnętrz",
  description:
    "Poradniki ekipy DroBud z Wielunia: wykończenie domu krok po kroku, wykończenie łazienki, osuszanie tynków i wylewek, sprzątanie po wykończeniu.",
  alternates: { canonical: "/blog/" },
};

export default function Page() {
  const posts = getPosts();
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Poradniki o wykończeniach wnętrz"
        lead="Praktyczna wiedza z budowy: kolejność prac, przygotowanie do wykończenia, osuszanie i sprzątanie."
      />
      <Section>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}/`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-accent-dark">{post.category}</p>
                <h2 className="mt-3 text-xl font-extrabold leading-snug">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
                <p className="mt-5 text-xs text-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.minutes} min czytania
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Cta />
    </>
  );
}
