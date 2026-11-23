import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, getPosts } from "@/lib/blog";
import { getService } from "@/data/services";
import { site } from "@/data/site";
import { Cta, Faq, Section } from "@/components/ui";
import { JsonLd, faqSchema } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: { type: "article", publishedTime: post.date, title: post.title, description: post.description },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const service = post.service ? getService(post.service) : undefined;
  const others = getPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "pl-PL",
    mainEntityOfPage: `${site.url}/blog/${post.slug}/`,
    author: { "@type": "Organization", name: "DroBud", url: site.url },
    publisher: { "@id": `${site.url}/#firma` },
  };

  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="container-x max-w-3xl py-14 sm:py-16">
          <nav aria-label="Okruszki" className="text-sm text-muted">
            <Link href="/blog/" className="hover:text-ink">
              Blog
            </Link>{" "}
            / {post.category}
          </nav>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg text-muted">{post.description}</p>
          <p className="mt-5 text-sm text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.minutes} min czytania
          </p>
        </div>
      </section>

      <article className="container-x max-w-3xl py-12">
        <div className="article" dangerouslySetInnerHTML={{ __html: post.html }} />

        {service && (
          <aside className="mt-12 rounded-2xl border border-line bg-sand p-6 sm:p-8">
            <p className="eyebrow">Usługa</p>
            <h2 className="mt-2 text-2xl font-extrabold">{service.title}</h2>
            <p className="mt-2 text-ink/80">{service.short}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={`/uslugi/${service.slug}/`} className="btn-primary">
                Zobacz usługę
              </Link>
              <Link href={service.booking ? `/rezerwacja/?usluga=${service.booking}` : "/wycena/"} className="btn-ghost">
                {service.booking ? "Zarezerwuj termin" : "Wyceń swój projekt"}
              </Link>
            </div>
          </aside>
        )}

        {post.faq.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-5 text-2xl font-extrabold">Najczęstsze pytania</h2>
            <Faq items={post.faq} />
          </div>
        )}
      </article>

      <Section tone="paper" title="Czytaj także">
        <ul className="grid gap-6 lg:grid-cols-3">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}/`}
                className="block h-full rounded-2xl border border-line bg-white p-6 hover:shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-accent-dark">{p.category}</p>
                <h3 className="mt-2 text-lg font-extrabold leading-snug">{p.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Cta />
      <JsonLd data={articleSchema} />
      {post.faq.length > 0 && <JsonLd data={faqSchema(post.faq)} />}
    </>
  );
}
