import type { Metadata } from "next";
import { projects, videos } from "@/data/content";
import { Cta, PageHero, Section } from "@/components/ui";
import { ProjectGallery } from "@/components/ProjectGallery";
import { VideoGrid } from "@/components/media";

export const metadata: Metadata = {
  title: "Realizacje — łazienki, salony, domy pod klucz",
  description:
    "Zdjęcia i filmy z naszych realizacji: łazienki, salony z zabudowami, podłogi w jodełkę i kompleksowe wykończenia domów w Wieluniu i okolicach.",
  alternates: { canonical: "/realizacje/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Realizacje"
        title="Nasze realizacje"
        lead="Wybrane wnętrza, które wykończyliśmy w Wieluniu i okolicach — na zdjęciach i filmach."
      />
      <Section>
        <ProjectGallery projects={projects} />
      </Section>
      <section id="filmy" className="scroll-mt-24 bg-paper">
        <div className="container-x py-16 sm:py-20">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">Filmy</p>
            <h2 className="h2 mt-2">Filmy z realizacji</h2>
            <p className="mt-4 text-lg text-muted">Łazienki, sufity, podłogi i ekipa przy pracy.</p>
          </div>
          <VideoGrid items={videos} />
        </div>
      </section>
      <Cta title="Chcesz podobne wnętrze?" />
    </>
  );
}
