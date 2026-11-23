import { site } from "@/data/site";

type Network = "facebook" | "instagram" | "tiktok";

export function SocialIcon({ name, className = "h-5 w-5" }: { name: Network; className?: string }) {
  if (name === "facebook")
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
      </svg>
    );
  if (name === "instagram")
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.37-2.48V9.66a5.73 5.73 0 0 0-.77-.05A5.68 5.68 0 0 0 4.18 15.3 5.68 5.68 0 0 0 9.86 21a5.68 5.68 0 0 0 5.68-5.68V9.01a7.33 7.33 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.24-1.48z" />
    </svg>
  );
}

/** Profile społecznościowe (statystyki TikToka i Facebooka z 20.11.2026). */
export function socialProfiles() {
  return [
    {
      name: "tiktok" as const,
      label: "TikTok",
      handle: "@drobud",
      href: site.social.tiktok,
      stats: "1,5 tys. obserwujących · 23,5 tys. polubień",
      text: "Najwięcej filmów z naszych realizacji — łazienki, sufity, podłogi i praca ekipy krok po kroku.",
      cta: "Oglądaj na TikToku",
    },
    {
      name: "facebook" as const,
      label: "Facebook",
      handle: "DroBud Usługi Wykończeniowe",
      href: site.social.facebook,
      stats: "4,5 tys. obserwujących · 100% poleca",
      text: "Rolki, zdjęcia z realizacji, nowości w ofercie i 36 opinii inwestorów.",
      cta: "Obserwuj na Facebooku",
    },
    {
      name: "instagram" as const,
      label: "Instagram",
      handle: "@dro_bud",
      href: site.social.instagram,
      stats: "",
      text: "Zdjęcia realizacji i przedstawienie naszej ekipy.",
      cta: "Obserwuj na Instagramie",
    },
  ].filter((p) => p.href);
}

/** Rząd okrągłych ikon (nagłówek, hero, stopka). */
export function SocialLinks({ tone = "dark", size = "md" }: { tone?: "dark" | "light"; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const color =
    tone === "light"
      ? "border-white/25 text-white hover:bg-white/10"
      : "border-line bg-white text-ink hover:border-accent hover:text-accent-dark";
  return (
    <ul className="flex items-center gap-2">
      {socialProfiles().map((p) => (
        <li key={p.name}>
          <a
            href={p.href}
            target="_blank"
            rel="noopener"
            aria-label={`DroBud na ${p.label === "TikTok" ? "TikToku" : p.label === "Facebook" ? "Facebooku" : "Instagramie"}`}
            className={`grid ${box} place-items-center rounded-full border transition-colors ${color}`}
          >
            <SocialIcon name={p.name} className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Duże karty profili — sekcja „Obserwuj nas”. */
export function SocialCards() {
  const profiles = socialProfiles();
  return (
    <ul className={`grid gap-5 ${profiles.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {profiles.map((p) => (
        <li key={p.name}>
          <a
            href={p.href}
            target="_blank"
            rel="noopener"
            className={`group flex h-full flex-col rounded-2xl border p-6 transition-shadow hover:shadow-lg ${
              p.name === "tiktok" ? "border-ink bg-ink text-white" : "border-line bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`grid h-12 w-12 place-items-center rounded-full ${
                  p.name === "tiktok" ? "bg-white text-ink" : "bg-paper text-ink"
                }`}
              >
                <SocialIcon name={p.name} className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-lg font-extrabold">{p.label}</span>
                {p.handle && (
                  <span className={`block text-sm ${p.name === "tiktok" ? "text-white/70" : "text-muted"}`}>{p.handle}</span>
                )}
              </span>
            </div>
            {p.stats && (
              <p className={`mt-4 text-sm font-bold ${p.name === "tiktok" ? "text-[#e3cba0]" : "text-accent-dark"}`}>
                {p.stats}
              </p>
            )}
            <p className={`mt-2 flex-1 text-sm leading-relaxed ${p.name === "tiktok" ? "text-white/80" : "text-muted"}`}>
              {p.text}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold">
              {p.cta} <span aria-hidden="true">→</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
