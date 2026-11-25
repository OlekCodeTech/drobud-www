import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { awards, galaVideo, team, videos } from "@/data/content";
import { site } from "@/data/site";
import { BrandLogos } from "@/components/BrandLogos";
import { Cta, PageHero, Section } from "@/components/ui";
import { Awards, VideoGrid } from "@/components/media";

export const metadata: Metadata = {
  title: "Zespół — poznaj ekipę DroBud",
  description:
    "Poznaj ekipę DroBud z Wielunia — ludzi, którzy wykończą Twoje wnętrze. Laureat plebiscytu Mistrzowie Budownictwa 2026.",
  alternates: { canonical: "/zespol/" },
};

export default function Page() {
  const teamVideo = videos.filter((v) => v.id === "v01");

  return (
    <>
      <PageHero
        eyebrow="Zespół"
        title="Poznajcie naszą zgraną ekipę"
        lead={`Działamy od ${site.since} roku i stawiamy czoła nawet najbardziej wymagającym inwestorom. Wiesz, kto wchodzi do Twojego domu i kto odpowiada za efekt.`}
      />

      <Section>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, i) => (
            <li key={i}>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-white">
                {person.photo && (
                  <Image
                    src={person.photo}
                    alt={`${person.name} — ekipa DroBud`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                )}
              </div>
              <h2 className="mt-4 text-xl font-extrabold">{person.name}</h2>
              <p className="mt-2 leading-relaxed text-muted">{person.bio}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" eyebrow="Razem" title="Ekipa DroBud">
        <div className="grid gap-6 lg:grid-cols-[2fr_minmax(0,18rem)]">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/zespol/ekipa-wigilia.jpg" alt="Ekipa DroBud na wigilii firmowej" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/zespol/ekipa-2.jpg" alt="Zespół DroBud" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
          </div>
          <VideoGrid items={teamVideo} gridClass="mx-auto w-full max-w-xs lg:max-w-none" />
        </div>
      </Section>

      <Section eyebrow="Wyróżnienia" title="Doceniani przez inwestorów i branżę">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_15rem]">
          <Awards items={awards} />
          <VideoGrid items={[galaVideo]} gridClass="mx-auto w-full max-w-[15rem]" />
        </div>
      </Section>

      <Section tone="paper" eyebrow="Sprzęt i materiały" title="Pracujemy na sprawdzonych markach">
        <BrandLogos />
      </Section>

      <Section eyebrow="Praca" title="Chcesz dołączyć do ekipy?">
        <p className="max-w-2xl text-lg text-muted">
          Szukamy fachowców, którzy cenią solidną robotę. Wyślij swoje zgłoszenie — odezwiemy się, gdy pojawi się
          miejsce w zespole.
        </p>
        <Link href="/praca/" className="btn-primary mt-6">
          Wyślij CV
        </Link>
      </Section>

      <Cta />
    </>
  );
}
