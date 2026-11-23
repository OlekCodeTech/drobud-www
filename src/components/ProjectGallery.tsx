"use client";

import { useState } from "react";
import { projectCategories, type Project } from "@/data/content";
import { ProjectCard } from "@/components/ui";

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<string>("Wszystkie");
  const used = projectCategories.filter((c) => projects.some((p) => p.category === c));
  const visible = category === "Wszystkie" ? projects : projects.filter((p) => p.category === category);

  return (
    <>
      <div role="group" aria-label="Filtr kategorii" className="mb-8 flex flex-wrap gap-2">
        {["Wszystkie", ...used].map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
            className="rounded-full border border-line px-4 py-2 text-sm font-bold aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white"
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
