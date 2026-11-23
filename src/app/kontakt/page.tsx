import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { cities } from "@/data/content";
import { PageHero } from "@/components/ui";
import { ContactForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `DroBud — ${site.address.street}, ${site.address.postalCode} ${site.address.city}. Telefon ${site.phone}. Działamy w Wieluniu i okolicach do 50 km.`,
  alternates: { canonical: "/kontakt/" },
};

export default function Page() {
  const mapSrc = `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=14&output=embed`;

  return (
    <>
      <PageHero eyebrow="Kontakt" title="Porozmawiajmy o Twoim wnętrzu" lead="Zadzwoń, napisz albo wyślij projekt do wyceny.">
        <a href={site.phoneHref} className="btn-primary">
          Zadzwoń: {site.phone}
        </a>
        <Link href="/wycena/" className="btn-ghost">
          Formularz wyceny
        </Link>
      </PageHero>

      <section className="bg-paper">
        <div className="container-x grid gap-10 py-14 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-extrabold">Dane firmy</h2>
              <address className="mt-3 not-italic leading-relaxed text-muted">
                {site.legalName}
                <br />
                {site.address.street}, {site.address.postalCode} {site.address.city}
                <br />
                NIP {site.nip}
                <br />
                <a href={site.phoneHref} className="font-bold text-ink">
                  {site.phone}
                </a>
                <br />
                <a href={`mailto:${site.email}`} className="font-bold text-ink">
                  {site.email}
                </a>
              </address>
            </div>
            <div>
              <h2 className="text-lg font-extrabold">Godziny pracy</h2>
              <dl className="mt-3 space-y-1 text-muted">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-6 sm:max-w-xs">
                    <dt>{h.days}</dt>
                    <dd className="font-bold text-ink">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="text-lg font-extrabold">Obszar działania</h2>
              <p className="mt-3 text-muted">{cities.map((c) => c.name).join(", ")} i okolice.</p>
            </div>
            <iframe
              title="Mapa dojazdu — DroBud Wieluń"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full rounded-2xl border-0"
            />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            <h2 className="mb-6 text-2xl font-extrabold">Napisz do nas</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
