import type { Metadata } from "next";
import { reviews } from "@/data/content";
import { site } from "@/data/site";
import { Cta, PageHero, ReviewCard, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Opinie inwestorów",
  description: "Opinie klientów o firmie DroBud z Wielunia — wykończenia wnętrz, łazienki, remonty.",
  alternates: { canonical: "/opinie/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Opinie"
        title="Opinie inwestorów"
        lead="100% poleceń na Facebooku (36 opinii) i średnia 5,0 w Google. Zobacz, co piszą inwestorzy."
      >
        <a href={site.social.google} target="_blank" rel="noopener" className="btn-primary">
          Dodaj opinię w Google
        </a>
        <a href={`${site.social.facebook}/reviews`} target="_blank" rel="noopener" className="btn-ghost">
          Opinie na Facebooku
        </a>
      </PageHero>
      <Section>
        <div className="gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
          {reviews.map((r) => (
            <ReviewCard key={r.author + r.text.slice(0, 20)} review={r} />
          ))}
        </div>
      </Section>
      <Cta />
    </>
  );
}
