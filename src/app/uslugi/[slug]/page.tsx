import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { longContent } from "@/data/services-content";
import { cities } from "@/data/content";
import { asset } from "@/lib/asset";
import { site } from "@/data/site";
import { getPosts } from "@/lib/blog";
import { Cta, Faq, PageHero, Photo, Prose, Section, ServiceCard } from "@/components/ui";
import { JsonLd, faqSchema, serviceSchema } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} — Wieluń i okolice`,
    description: service.short,
    alternates: { canonical: `/uslugi/${service.slug}/` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const long = longContent[service.slug];
  const faq = [...service.faq, ...(long?.faq ?? [])];
  const tone = (n: number): "white" | "paper" => (n % 2 ? "paper" : "white");
  const posts = getPosts().filter((p) => p.service === service.slug);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Usługi" title={service.title} lead={service.lead}>
        {service.booking ? (
          <Link href={`/rezerwacja/?usluga=${service.booking}`} className="btn-primary">
            Zarezerwuj termin
          </Link>
        ) : (
          <Link href="/wycena/" className="btn-primary">
            Wyceń swój projekt
          </Link>
        )}
        <a href={site.phoneHref} className="btn-ghost">
          {site.phone}
        </a>
      </PageHero>

      <Section eyebrow="Zakres" title="Co obejmuje usługa">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <ul className="space-y-3">
            {service.scope.map((item) => (
              <li key={item} className="flex gap-3 text-lg">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          {/* Jeden film na usługę (wg klienta); bez filmu — zdjęcia realizacji. */}
          {service.video ? (
            <div className="mx-auto w-full max-w-xs lg:ml-auto lg:mr-0">
              <video
                controls
                playsInline
                preload="none"
                poster={asset(`/wideo/${service.video}.jpg`)}
                className="aspect-[9/16] w-full rounded-2xl bg-ink object-cover"
                aria-label={`${service.title} — film z realizacji DroBud`}
              >
                <source src={asset(`/wideo/${service.video}.mp4`)} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <Photo src={service.images?.[0]} alt={`${service.title} — realizacja DroBud`} className="aspect-square" />
              <Photo src={service.images?.[1]} alt={`${service.title} — realizacja DroBud`} className="aspect-square" />
            </div>
          )}
        </div>
      </Section>

      {long && (
        <Section tone="paper">
          <Prose sections={long.sections} />
        </Section>
      )}

      {/* TODO: sekcja cennika / widełek cenowych, jeśli klient zdecyduje się je pokazać */}

      <Section split tone={tone(0)} eyebrow="Pytania" title="Najczęstsze pytania">
        <Faq items={faq} />
      </Section>

      <Section tone={tone(1)} eyebrow="Obszar działania" title="Gdzie dojeżdżamy">
        <p className="text-muted">Pracujemy w Wieluniu i w promieniu około 50 km:</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {cities.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/wykonczenia-wnetrz/${c.slug}/`}
                className="inline-block rounded-full border border-line bg-white px-5 py-2.5 text-sm font-bold hover:border-accent"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {posts.length > 0 && (
        <Section tone={tone(0)} eyebrow="Blog" title="Poradniki na ten temat">
          <ul className="grid gap-5 lg:grid-cols-2">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}/`}
                  className="block h-full rounded-2xl border border-line bg-white p-6 hover:shadow-lg"
                >
                  <h3 className="text-lg font-extrabold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section tone={tone(posts.length > 0 ? 1 : 0)} title="Pozostałe usługi">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <ServiceCard key={s.slug} service={s} index={services.indexOf(s)} />
          ))}
        </div>
      </Section>

      <Cta />
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(faq)} />
    </>
  );
}
