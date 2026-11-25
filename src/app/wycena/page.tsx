import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHero } from "@/components/ui";
import { QuoteForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Wycena — wyślij projekt i zdjęcia",
  description:
    "Wyślij projekt, zdjęcia i opis prac. Oddzwonimy i przygotujemy wycenę wykończenia. Wieluń i okolice.",
  alternates: { canonical: "/wycena/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Wycena"
        title="Wyceń swój projekt"
        lead="Dołącz projekt i zdjęcia, opisz, co chcesz zrobić, i zostaw numer telefonu. Oddzwonimy."
      />
      <section className="bg-paper">
        <div className="container-x grid gap-10 py-14 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            <QuoteForm />
          </div>
          <aside className="space-y-6">
            <div>
              <h2 className="text-lg font-extrabold">Co warto dołączyć</h2>
              <ul className="mt-3 space-y-2 text-muted">
                <li>• projekt lub rzut pomieszczeń</li>
                <li>• zdjęcia obecnego stanu</li>
                <li>• zdjęcia inspiracji</li>
                <li>• przybliżony metraż i termin</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-extrabold">Wolisz zadzwonić?</h2>
              <a href={site.phoneHref} className="mt-2 block text-2xl font-extrabold text-accent-dark">
                {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
