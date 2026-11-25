import type { Metadata } from "next";
import { projects, videos } from "@/data/content";
import { Cta, PageHero, ProjectCard, Section } from "@/components/ui";
import { VideoGrid } from "@/components/media";

export const metadata: Metadata = {
  title: "Realizacje — filmy i zdjęcia z wykończeń wnętrz",
  description:
    "Filmy i zdjęcia z naszych realizacji: łazienki, sufity podwieszane, gres w jodełkę, tynki dekoracyjne i kompleksowe wykończenia domów w Wieluniu i okolicach.",
  alternates: { canonical: "/realizacje/" },
};

// Wg klienta: najpierw filmy, potem zdjęcia — bez podziału na kategorie.
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Realizacje"
        title="Nasze realizacje"
        lead="Wybrane wnętrza, które wykończyliśmy w Wieluniu i okolicach — na filmach i zdjęciach."
      />
      <Section id="filmy" eyebrow="Filmy" title="Filmy z realizacji">
        <VideoGrid items={videos} />
      </Section>
      <Section tone="paper" eyebrow="Zdjęcia" title="Zdjęcia z realizacji">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
      <Cta title="Chcesz podobne wnętrze?" />
    </>
  );
}
