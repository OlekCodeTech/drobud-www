import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCity, projects } from "@/data/content";
import { cityContent } from "@/data/cities-content";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { Cta, Faq, PageHero, ProjectCard, Prose, Section, ServiceCard } from "@/components/ui";
import { JsonLd, faqSchema } from "@/components/JsonLd";

// Landingi lokalne. Treść unikalna dla miasta: src/data/cities-content.ts.
// TODO: dopisać lokalne realizacje i opinie klientów z danej miejscowości.

type Props = { params: Promise<{ miasto: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ miasto: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { miasto } = await params;
  const city = getCity(miasto);
  if (!city) return {};
  return {
    title: `Wykończenia wnętrz ${city.name} — kompleksowe wykończenia pod klucz`,
    description: `Kompleksowe wykończenia wnętrz ${city.locative}: łazienki, sufity podwieszane, gładzie, gres, panele. Ekipa DroBud z Wielunia. Wyślij projekt do wyceny.`,
    alternates: { canonical: `/wykonczenia-wnetrz/${city.slug}/` },
  };
}

export default async function Page({ params }: Props) {
  const { miasto } = await params;
  const city = getCity(miasto);
  if (!city) notFound();

  const local = projects.filter((p) => p.city === city.name);
  const isBase = city.slug === "wielun";
  const content = cityContent[city.slug];
  const faq = [
    ...(content?.faq ?? []),
    {
      q: `Jak uzyskać wycenę wykończenia ${city.locative}?`,
      a: "Wyślij projekt lub zdjęcia i krótki opis prac przez formularz wyceny albo zadzwoń. Oddzwaniamy, dopytujemy o szczegóły i w razie potrzeby umawiamy oględziny.",
    },
    {
      q: `Jakie prace wykonujecie ${city.locative}?`,
      a: "Kompleksowe wykończenia domów i mieszkań w stanie deweloperskim, łazienki, sufity podwieszane, adaptacje poddaszy, gładzie polimerowe, malowanie, tynki dekoracyjne i farby strukturalne, gres i panele. Wynajmujemy też osuszacze i sprzątamy domy, mieszkania i lokale.",
    },
    {
      q: `Czy ${city.locative} można wynająć osuszacz lub zamówić sprzątanie po wykończeniu?`,
      a: "Tak. Termin można wstępnie zarezerwować w kalendarzu na stronie — potwierdzamy go telefonicznie.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Obszar działania · ${city.name}`}
        title={`Kompleksowe wykończenia wnętrz ${city.locative}`}
        lead={
          isBase
            ? "Jesteśmy z Wielunia. Wykańczamy domy, mieszkania i lokale pod klucz — od łazienki po cały dom."
            : `Dojeżdżamy z Wielunia do klientów ${city.locative} i okolicach. Wykańczamy domy, mieszkania i lokale pod klucz.`
        }
      >
        <Link href="/wycena/" className="btn-primary">
          Wyceń swój projekt
        </Link>
        <a href={site.phoneHref} className="btn-ghost">
          {site.phone}
        </a>
      </PageHero>

      <Section eyebrow="Usługi" title={`Co wykonujemy ${city.locative}`}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </Section>

      {content && (
        <Section tone="paper">
          <Prose sections={content.sections} />
          <div className="mt-9 border-t border-line pt-6">
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
              Miejscowości w okolicy, do których dojeżdżamy
            </h2>
            <p className="prose-p mt-3">
              {city.name}, {content.nearby.join(", ")} oraz sąsiednie miejscowości.
            </p>
          </div>
        </Section>
      )}

      {local.length > 0 && (
        <Section eyebrow="Realizacje" title={`Nasze prace ${city.locative}`}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {local.slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
      )}

      <Section
        split
        tone={local.length > 0 ? "paper" : "white"}
        eyebrow="Pytania"
        title={`Wykończenia ${city.locative} — pytania`}
      >
        <Faq items={faq} />
      </Section>

      <Section tone={local.length > 0 ? "white" : "paper"} eyebrow="Okolica" title="Działamy także w pobliżu">
        <ul className="flex flex-wrap gap-3">
          {cities
            .filter((c) => c.slug !== city.slug)
            .map((c) => (
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

      <Cta title={`Planujesz wykończenie ${city.locative}?`} />
      <JsonLd data={faqSchema(faq)} />
    </>
  );
}
