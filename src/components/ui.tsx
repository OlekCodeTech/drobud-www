import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import type { Service } from "@/data/services";
import type { Project, Review } from "@/data/content";

/** Miejsce na zdjęcie — pokazuje opis, dopóki nie ma pliku. */
export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 100vw",
}: {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className}`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-end rounded-2xl border border-line bg-[linear-gradient(135deg,#f4eee3,#e6dcc8)] p-4 ${className}`}
    >
      <span className="rounded-md bg-white/70 px-2 py-1 text-xs text-ink/70">Zdjęcie: {alt}</span>
    </div>
  );
}

/** Nagłówek podstron: zwarty, z okruszkami, na tej samej siatce co reszta strony. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  image,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
  /** Opcjonalne zdjęcie w tle nagłówka. */
  image?: string;
}) {
  return (
    <section className={`relative overflow-hidden ${image ? "bg-ink text-white" : "border-b border-line bg-paper"}`}>
      {image && (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,31,30,.9)_0%,rgba(32,31,30,.72)_55%,rgba(32,31,30,.4)_100%)]"
          />
        </>
      )}
      <div className="container-x relative py-10 sm:py-12">
        <nav aria-label="Okruszki" className={`text-xs font-semibold ${image ? "text-white/70" : "text-muted"}`}>
          <Link href="/" className="hover:underline">
            Strona główna
          </Link>
          {eyebrow && <span aria-hidden="true"> / </span>}
          {eyebrow && <span>{eyebrow}</span>}
        </nav>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lead && <p className={`mt-4 max-w-2xl text-lg ${image ? "text-white/85" : "text-muted"}`}>{lead}</p>}
        {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

/**
 * Sekcja strony. Wszystkie sekcje mają ten sam kontener i te same odstępy.
 * `split` — nagłówek w lewej kolumnie, treść w prawej (FAQ, teksty, obszar działania).
 * `action` — link po prawej stronie nagłówka zamiast osobnego przycisku pod sekcją.
 */
export function Section({
  eyebrow,
  title,
  lead,
  tone = "white",
  split = false,
  action,
  id,
  children,
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  tone?: "white" | "paper";
  split?: boolean;
  action?: { href: string; label: string };
  id?: string;
  children: React.ReactNode;
}) {
  const header = (eyebrow || title) && (
    <div className={split ? "lg:sticky lg:top-24" : "mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3"}>
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2 className="h2 mt-2">{title}</h2>}
        {lead && <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{lead}</p>}
      </div>
      {action && (
        <Link href={action.href} className={`link-arrow ${split ? "mt-5" : ""}`}>
          {action.label} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );

  return (
    <section id={id} className={`scroll-mt-24 ${tone === "paper" ? "bg-paper" : "bg-white"}`}>
      <div className="container-x py-12 sm:py-14">
        {split ? (
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12">
            <div>{header}</div>
            <div>{children}</div>
          </div>
        ) : (
          <>
            {header}
            {children}
          </>
        )}
      </div>
    </section>
  );
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const img = service.images?.[0];
  return (
    <Link
      href={`/uslugi/${service.slug}/`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg"
    >
      {img && (
        <div className="relative aspect-[16/9] overflow-hidden bg-paper">
          <Image
            src={img}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-bold text-accent-dark">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="mt-2 text-lg font-extrabold leading-snug">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
        <span className="mt-4 text-sm font-bold group-hover:text-accent-dark">Zobacz szczegóły →</span>
      </div>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <Photo src={project.images[0]} alt={`${project.title} — ${project.city}`} className="aspect-[4/3]" />
      <p className="mt-3 text-xs font-bold uppercase tracking-wider text-accent-dark">
        {project.category} · {project.city}
      </p>
      <h3 className="mt-1 text-base font-extrabold leading-snug">{project.title}</h3>
    </article>
  );
}

export function ReviewCard({ review, clamp = false }: { review: Review; clamp?: boolean }) {
  return (
    <figure className="flex h-full break-inside-avoid flex-col rounded-2xl border border-line bg-white p-5">
      <div className="flex items-center justify-between gap-3">
        <p aria-label="Ocena 5 na 5" className="text-accent">
          ★★★★★
        </p>
        <span className="rounded-full bg-paper px-2.5 py-1 text-[0.7rem] font-bold text-muted">{review.source}</span>
      </div>
      <blockquote className={`mt-3 flex-1 text-[0.95rem] leading-relaxed ${clamp ? "line-clamp-6" : ""}`}>„{review.text}”</blockquote>
      <figcaption className="mt-4 text-sm font-bold">
        {review.author} <span className="font-normal text-muted">· {review.date}</span>
      </figcaption>
    </figure>
  );
}

export function Cta({
  title = "Masz projekt albo pomysł? Wyceń go.",
  text = "Wyślij projekt, zdjęcia i krótki opis. Oddzwonimy i omówimy zakres oraz termin.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-white">
      <div className="container-x py-12 sm:py-14">
        <div className="flex flex-col gap-6 rounded-3xl bg-ink px-6 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{title}</h2>
            <p className="mt-3 text-white/75">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/wycena/" className="btn-gold">
              Wyceń swój projekt
            </Link>
            <a href={site.phoneHref} className="btn-ghost-light">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((f) => (
        <details key={f.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
            {f.q}
            <span aria-hidden="true" className="text-xl text-accent-dark transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Dłuższa treść merytoryczna: bloki H2 + akapity w dwóch kolumnach, na pełnej szerokości kontenera. */
export function Prose({ sections, columns = 2 }: { sections: { h: string; p: string[] }[]; columns?: 1 | 2 }) {
  return (
    <div className={`grid gap-x-12 gap-y-9 ${columns === 2 ? "lg:grid-cols-2" : ""}`}>
      {sections.map((s) => (
        <div key={s.h}>
          <h2 className="text-xl font-extrabold leading-snug tracking-tight sm:text-2xl">{s.h}</h2>
          {s.p.map((text) => (
            <p key={text.slice(0, 40)} className="prose-p mt-3">
              {text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
