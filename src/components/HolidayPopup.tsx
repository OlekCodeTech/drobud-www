"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { readConsent } from "@/lib/consent";

// Popup z przedświątecznym sprzątaniem. Pokazuje się tylko do SHOW_UNTIL, po DELAY ms,
// najwyżej raz na REPEAT_DAYS dni (localStorage) i nie na stronach, gdzie by przeszkadzał.
const SHOW_UNTIL = "2026-12-24";
const DELAY = 6000;
const REPEAT_DAYS = 3;
const KEY = "drobud-popup-swieta-2026";
const SKIP_PATHS = ["/rezerwacja/", "/wycena/", "/praca/", "/kontakt/", "/polityka-prywatnosci/"];

const items = [
  "Dokładne sprzątanie całego domu lub mieszkania",
  "Czyszczenie kuchni — blaty, sprzęty, fronty",
  "Sprzątanie łazienek — dezynfekcja i wybłyszczanie",
  "Mycie okien i przeszkleń",
  "Odświeżenie pomieszczeń przed przyjęciem gości",
];

export function HolidayPopup() {
  const ref = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (new Date() > new Date(`${SHOW_UNTIL}T23:59:59`)) return;
    if (SKIP_PATHS.some((p) => pathname.startsWith(p))) return;
    // Najpierw decyzja w banerze cookies — nie nakładamy dwóch okien naraz.
    if (!readConsent()) return;
    try {
      const last = Number(localStorage.getItem(KEY) || 0);
      if (Date.now() - last < REPEAT_DAYS * 864e5) return;
    } catch {
      return;
    }
    const t = window.setTimeout(() => {
      if (!ref.current?.open) ref.current?.showModal();
      try {
        localStorage.setItem(KEY, String(Date.now()));
      } catch {}
    }, DELAY);
    return () => window.clearTimeout(t);
  }, [pathname]);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      aria-labelledby="popup-swieta-tytul"
      onClick={(e) => {
        if (e.target === ref.current) close();
      }}
      className="m-auto w-[min(92vw,30rem)] overflow-hidden rounded-3xl p-0 text-ink shadow-2xl backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
    >
      <div className="relative bg-[linear-gradient(135deg,#ad8a52,#c9a86e)] px-6 pb-6 pt-7 text-ink">
        <button
          type="button"
          onClick={close}
          aria-label="Zamknij"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/30 text-lg font-bold hover:bg-white/50"
        >
          ×
        </button>
        <p className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wider">
          Święta tuż-tuż!
        </p>
        <h2 id="popup-swieta-tytul" className="mt-3 text-3xl font-extrabold leading-tight tracking-tight">
          Przedświąteczne sprzątanie domów i mieszkań
        </h2>
        <p className="mt-2 font-semibold">Przygotuj swój dom na wyjątkowy, świąteczny czas. Przyjmujemy zapisy!</p>
      </div>
      <div className="bg-white px-6 pb-6 pt-5">
        <p className="text-xs font-extrabold uppercase tracking-wider text-accent-dark">W ramach usługi</p>
        <ul className="mt-3 space-y-2">
          {items.map((i) => (
            <li key={i} className="flex gap-2.5 text-[0.95rem] leading-snug">
              <span aria-hidden="true" className="mt-0.5 text-accent-dark">
                ✓
              </span>
              {i}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/rezerwacja/?usluga=sprzatanie&rodzaj=swieta" onClick={close} className="btn-gold">
            Zarezerwuj termin
          </Link>
          <a href={site.phoneHref} className="btn-ghost">
            {site.phone}
          </a>
        </div>
        <Link
          href="/uslugi/sprzatanie/"
          onClick={close}
          className="mt-4 inline-block text-sm font-semibold text-muted underline underline-offset-4 hover:text-ink"
        >
          Więcej o usłudze sprzątania
        </Link>
      </div>
    </dialog>
  );
}
