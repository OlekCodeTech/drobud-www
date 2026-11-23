import Image from "next/image";
import type { Award, Video } from "@/data/content";
import { asset } from "@/lib/asset";

/** Siatka pionowych filmów. Filmy ładują się dopiero po kliknięciu „odtwórz” (preload="none"). */
export function VideoGrid({
  items,
  limit,
  gridClass = "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
}: {
  items: Video[];
  limit?: number;
  gridClass?: string;
}) {
  const list = limit ? items.slice(0, limit) : items;
  return (
    <ul className={gridClass}>
      {list.map((v) => (
        <li key={v.id}>
          <figure>
            <video
              controls
              playsInline
              preload="none"
              poster={asset(`/wideo/${v.id}.jpg`)}
              className="aspect-[9/16] w-full rounded-2xl bg-ink object-cover"
              aria-label={v.title}
            >
              <source src={asset(`/wideo/${v.id}.mp4`)} type="video/mp4" />
            </video>
            <figcaption className="mt-2 text-sm font-semibold leading-snug">{v.title}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export function Awards({ items }: { items: Award[] }) {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {items.map((a) => (
        <li key={a.title} className="overflow-hidden rounded-2xl border border-line bg-white">
          <div className="relative aspect-[4/3]">
            <Image src={a.image} alt={a.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="p-5">
            <p className="text-lg font-extrabold leading-snug">{a.title}</p>
            <p className="mt-1 text-sm text-muted">{a.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
