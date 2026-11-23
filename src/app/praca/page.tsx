import type { Metadata } from "next";
import { videos } from "@/data/content";
import { jobs, type Job } from "@/data/jobs";
import { site } from "@/data/site";
import { PageHero, Prose, Section } from "@/components/ui";
import { JobForm } from "@/components/forms";
import { VideoGrid } from "@/components/media";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Oferty pracy — glazurnik Wieluń",
  description:
    "Praca w DroBud w Wieluniu: szukamy glazurnika — umowa o pracę, atrakcyjne wynagrodzenie, możliwość stażu. Aplikuj online.",
  alternates: { canonical: "/praca/" },
};

const about = [
  {
    h: "Praca przy wykończeniach wnętrz w Wieluniu",
    p: [
      "DroBud to firma wykończeniowa z Wielunia, która od 2020 roku wykańcza domy i mieszkania pod klucz. W 2026 roku zdobyliśmy tytuł Firmy Remontowo-Budowlanej Roku w województwie łódzkim w plebiscycie Mistrzowie Budownictwa. Rozwijamy się i chętnie poznajemy dobrych fachowców.",
      "Nie widzisz oferty dla siebie? Wyślij zgłoszenie mimo to — jeśli trafi się odpowiednia osoba, chętnie ją przyjmiemy. Pracujemy na profesjonalnym sprzęcie marek DeWalt, Mirka, Starmix i Makita.",
    ],
  },
];

function jobSchema(job: Job) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `<p>${job.intro}</p><p><strong>Zakres obowiązków:</strong></p><ul>${job.duties
      .map((d) => `<li>${d}</li>`)
      .join("")}</ul><p><strong>Wymagania:</strong></p><ul>${job.requirements
      .map((d) => `<li>${d}</li>`)
      .join("")}</ul><p><strong>Oferujemy:</strong></p><ul>${job.offer.map((d) => `<li>${d}</li>`).join("")}</ul>`,
    datePosted: job.datePosted,
    validThrough: `${job.validThrough}T23:59:59+01:00`,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "DroBud Usługi Wykończeniowe Damian Drosiński",
      sameAs: site.url,
      logo: `${site.url}/logo-drobud.jpg`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.postalCode,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: "PL",
      },
    },
    directApply: true,
  };
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-extrabold uppercase tracking-wider text-accent-dark">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex gap-2.5 text-[0.95rem] leading-snug">
            <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  const teamVideo = videos.filter((v) => v.id === "v01" || v.id === "v06");

  return (
    <>
      <PageHero
        eyebrow="Praca"
        title="Oferty pracy w DroBud"
        lead="Dołącz do ekipy Firmy Remontowo-Budowlanej Roku 2026. Aplikuj online — zgłoszenie trafia bezpośrednio do właściciela firmy."
      >
        <a href="#aplikuj" className="btn-gold">
          Aplikuj teraz
        </a>
        <a href={site.phoneHref} className="btn-ghost">
          Zadzwoń: {site.phone}
        </a>
      </PageHero>

      <Section eyebrow="Aktualne oferty" title={`Szukamy: ${jobs.map((j) => j.title.toLowerCase()).join(", ")}`}>
        <div className="space-y-5">
          {jobs.map((job) => (
            <article key={job.slug} id={job.slug} className="scroll-mt-24 rounded-3xl border border-line bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{job.title}</h2>
                  <p className="mt-1 text-muted">{job.intro}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {[job.location, ...job.employment].map((t) => (
                      <li key={t} className="rounded-full bg-paper px-3 py-1 text-xs font-bold">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={`?stanowisko=${encodeURIComponent(job.position)}#aplikuj`} className="btn-gold">
                  Aplikuj na to stanowisko
                </a>
              </div>
              <div className="mt-7 grid gap-7 border-t border-line pt-6 md:grid-cols-3">
                <List title="Zakres obowiązków" items={job.duties} />
                <List title="Wymagania" items={job.requirements} />
                <List title="Co oferujemy" items={job.offer} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <Prose sections={about} columns={1} />
          <VideoGrid items={teamVideo} gridClass="grid grid-cols-2 gap-4" />
        </div>
      </Section>

      <section id="aplikuj" className="scroll-mt-24 bg-white">
        <div className="container-x grid gap-10 py-12 sm:py-14 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-10">
            <p className="eyebrow">Aplikuj</p>
            <h2 className="h2 mt-2">Formularz zgłoszeniowy</h2>
            <p className="mb-6 mt-3 text-muted">
              Wypełnij formularz i dołącz CV albo zdjęcia swoich prac. Zgłoszenie trafia mailem bezpośrednio do Damiana.
            </p>
            <JobForm />
          </div>
          <aside className="space-y-3">
            <h2 className="text-lg font-extrabold">Wolisz zadzwonić?</h2>
            <a href={site.phoneHref} className="block text-2xl font-extrabold text-accent-dark">
              {site.phone}
            </a>
            <p className="text-sm text-muted">Pon.–pt. 7:00–16:00, sob. 8:00–12:00</p>
          </aside>
        </div>
      </section>

      {jobs.map((job) => (
        <JsonLd key={job.slug} data={jobSchema(job)} />
      ))}
    </>
  );
}
