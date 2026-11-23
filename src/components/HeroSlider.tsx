"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type Slide = { src: string; title: string };

const INTERVAL = 4500;

/**
 * Pokaz zdjęć realizacji w hero: płynne przenikanie z lekkim przybliżeniem.
 * Zatrzymuje się po najechaniu, przy fokusie i przyciskiem pauzy; bez animacji przy prefers-reduced-motion.
 */
export function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (paused || hover || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, paused, hover, slides.length]);

  const current = slides[index];

  return (
    <div
      role="region"
      aria-roledescription="karuzela"
      aria-label="Nasze realizacje"
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink shadow-[0_30px_60px_-25px_rgba(32,31,30,.45)] sm:aspect-[5/5] lg:aspect-[4/5]">
        {slides.map((s, i) => (
          <div
            key={s.src}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={s.src}
              alt={s.title}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className={`object-cover transition-transform duration-[6000ms] ease-out motion-reduce:transition-none ${
                i === index ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,rgba(32,31,30,.75),transparent)]"
        />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
          <p aria-live="polite" className="max-w-[75%] text-sm font-bold leading-snug text-white">
            <span className="mb-1 block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#e3cba0]">
              Realizacja DroBud
            </span>
            {current.title}
          </p>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Wznów pokaz zdjęć" : "Zatrzymaj pokaz zdjęć"}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25"
          >
            {paused ? (
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M3 1.5v11l9-5.5z" fill="currentColor" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="mt-4 flex gap-2" role="group" aria-label="Wybierz zdjęcie">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Zdjęcie ${i + 1}: ${s.title}`}
            aria-current={i === index}
            className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-ink/15"
          >
            <span
              key={`${i}-${index}-${paused || hover}`}
              className={`absolute inset-y-0 left-0 rounded-full bg-accent ${
                i < index ? "w-full" : i === index ? (paused || hover ? "w-full" : "hero-progress") : "w-0"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
