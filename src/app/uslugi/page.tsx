import type { Metadata } from "next";
import { services } from "@/data/services";
import { Cta, PageHero, Section, ServiceCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Usługi wykończeniowe",
  description:
    "Wykończenia domów i mieszkań pod klucz, łazienki, sufity podwieszane, adaptacja poddaszy, gładzie polimerowe, tynki dekoracyjne, gres, panele, osuszanie i sprzątanie — Wieluń i okolice.",
  alternates: { canonical: "/uslugi/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Usługi"
        title="Usługi wykończeniowe"
        lead="Wykonujemy pojedyncze prace i kompleksowe wykończenia. Wybierz usługę, aby zobaczyć zakres."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </Section>
      <Cta />
    </>
  );
}
