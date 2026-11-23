import Image from "next/image";
import Link from "next/link";
import { process_, site } from "@/data/site";
import { BrandLogos } from "@/components/BrandLogos";
import { services } from "@/data/services";
import { awards, cities, projects, reviews, videos } from "@/data/content";
import { homeContent } from "@/data/home-content";
import { Cta, Faq, ProjectCard, Prose, ReviewCard, Section, ServiceCard } from "@/components/ui";
import { VideoGrid } from "@/components/media";
import { HeroSlider } from "@/components/HeroSlider";
import { SocialCards, SocialLinks } from "@/components/social";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      {/* HERO — tekst po lewej, pokaz zdjęć realizacji po prawej */}
      <section className="relative overflow-hidden border-b border-line bg-[linear-gradient(180deg,#faf7f2_0%,#f3ece0_100%)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-10 py-10 sm:py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-white px-3.5 py-1.5 text-xs font-bold text-accent-dark">
              <span aria-hidden="true">★</span> Firma Remontowo-Budowlana Roku 2026 · woj. łódzkie
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              Wykończymy Twój dom, <span className="text-accent-dark">a nie Ciebie!</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Kompleksowe wykończenia domów i mieszkań w stanie deweloperskim — Wieluń i okolice do 50 km.
              Łazienki, sufity podwieszane, gładzie, gres i panele, a po pracach osuszymy i posprzątamy.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/wycena/" className="btn-gold btn-lg">
                Wyceń swój projekt <span aria-hidden="true">→</span>
              </Link>
              <a href={site.phoneHref} className="btn-ghost btn-lg">
                Zadzwoń: {site.phone}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SocialLinks />
              <span className="text-sm text-muted">Filmy i zdjęcia z realizacji w social mediach</span>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
              {[
                { v: "5,0 ★", l: "ocena w Google" },
                { v: "100%", l: "poleceń na Facebooku" },
                { v: "od 2020", l: "na rynku" },
                { v: "2× 2026", l: "Mistrzowie Budownictwa" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="sr-only">{s.l}</dt>
                  <dd className="text-2xl font-extrabold text-accent-dark">{s.v}</dd>
                  <dd className="mt-0.5 text-xs text-muted">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <HeroSlider
            slides={[
              { src: "/realizacje/lazienka-poddasze-wanna.jpg", title: "Łazienka na poddaszu z wanną wolnostojącą" },
              { src: "/realizacje/salon-kominek-oswietlenie-liniowe.jpg", title: "Salon z kominkiem i oświetleniem liniowym" },
              { src: "/realizacje/lazienka-marmur-mozaika.jpg", title: "Łazienka z marmurem i mozaiką" },
              { src: "/realizacje/salon-jodelka-przeszklenia.jpg", title: "Podłoga w jodełkę przy dużych przeszkleniach" },
              { src: "/realizacje/lazienka-wanna-wolnostojaca.jpg", title: "Łazienka z wanną i ścianą o wzorze kamienia" },
              { src: "/realizacje/podloga-jodelka-dom.jpg", title: "Jodełka w domu jednorodzinnym" },
            ]}
          />
        </div>
      </section>

      <Section
        eyebrow="Usługi"
        title="Co wykonujemy"
        lead="Od pojedynczej łazienki po wykończenie całego domu — jedna ekipa na wszystkie etapy."
        action={{ href: "/uslugi/", label: "Wszystkie usługi" }}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(6).map((s) => (
            <li key={s.slug}>
              <Link
                href={`/uslugi/${s.slug}/`}
                className="flex h-full items-center justify-between gap-3 rounded-2xl border border-line bg-white px-5 py-4 text-sm font-bold hover:border-accent"
              >
                {s.title}
                <span aria-hidden="true" className="text-accent-dark">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tone="paper"
        eyebrow="Opinie inwestorów"
        title="Co mówią klienci"
        lead="100% poleceń na Facebooku (36 opinii) i 5,0 w Google."
        action={{ href: "/opinie/", label: "Wszystkie opinie" }}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((r) => (
            <ReviewCard key={r.author + r.text.slice(0, 20)} review={r} clamp />
          ))}
        </div>
      </Section>

      <Section eyebrow="Realizacje" title="Nasze prace" action={{ href: "/realizacje/", label: "Wszystkie realizacje" }}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section
        tone="paper"
        eyebrow="Filmy"
        title="Zobacz nas przy pracy"
        lead="Krótkie filmy z realizacji — od surowych ścian po gotowe wnętrza."
        action={{ href: site.social.tiktok, label: "Więcej filmów na TikToku" }}
      >
        <VideoGrid items={videos} limit={6} gridClass="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" />
      </Section>

      <Section
        eyebrow="Social media"
        title="Obserwuj DroBud"
        lead="Na bieżąco wrzucamy filmy z realizacji — najwięcej znajdziesz na TikToku."
      >
        <SocialCards />
      </Section>

      <Section eyebrow="Wyróżnienia" title="Doceniani przez inwestorów i branżę">
        <ul className="grid gap-5 md:grid-cols-3">
          {awards.map((a) => (
            <li key={a.title} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                <Image src={a.image} alt={a.imageAlt} fill sizes="80px" className="object-cover" />
              </div>
              <div>
                <p className="font-extrabold leading-snug">{a.title}</p>
                <p className="mt-1 text-xs text-muted">{a.detail}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mb-4 mt-8 text-sm font-bold">Pracujemy na profesjonalnym sprzęcie:</p>
        <BrandLogos compact />
      </Section>

      <Section tone="paper" eyebrow="Współpraca" title="Jak pracujemy">
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {process_.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-line bg-white p-5">
              <span className="text-xs font-bold text-accent-dark">Krok {i + 1}</span>
              <h3 className="mt-1 text-base font-extrabold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Osuszanie i sprzątanie"
        title="Zarezerwuj termin online"
        lead="Wynajem osuszaczy i sprzątanie — po remoncie, przy wynajmie i przed świętami. Termin potwierdzamy telefonicznie."
        action={{ href: "/rezerwacja/", label: "Przejdź do kalendarza" }}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {services
            .filter((s) => s.booking)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/rezerwacja/?usluga=${s.booking}`}
                className="group flex items-center gap-5 rounded-2xl border border-line bg-white p-5 hover:border-accent"
              >
                {s.images?.[0] && (
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-paper">
                    <Image src={s.images[0]} alt="" fill sizes="80px" className="object-cover" />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-extrabold leading-snug">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.short}</p>
                </div>
              </Link>
            ))}
        </div>
      </Section>

      <Section tone="paper">
        {/* Dwie kolumny o zbliżonej wysokości: opis firmy + obszar działania | pozostałe bloki tekstu */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Prose sections={homeContent.sections.slice(0, 1)} columns={1} />
            <div className="mt-7 rounded-2xl border border-line bg-white p-5">
              <p className="text-sm font-bold">Obszar działania — Wieluń i okolice do 50 km</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/wykonczenia-wnetrz/${c.slug}/`}
                      className="inline-block rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm font-semibold hover:border-accent"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Prose sections={homeContent.sections.slice(1)} columns={1} />
        </div>
      </Section>

      <Section split eyebrow="Pytania" title="Najczęstsze pytania" action={{ href: "/kontakt/", label: "Masz inne pytanie?" }}>
        <Faq items={homeContent.faq} />
      </Section>

      <Cta />
      <JsonLd data={faqSchema(homeContent.faq)} />
    </>
  );
}
