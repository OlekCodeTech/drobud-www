"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

/**
 * Film w hero (wg klienta: „Strona główna” z dysku, z napisami). Startuje bez dźwięku, w pętli;
 * przyciski: dźwięk i pauza. Przy prefers-reduced-motion nie startuje sam.
 */
export function HeroVideo({ id, label }: { id: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play().catch(() => {});
  }, []);

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) v.play().catch(() => {});
  };

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className="relative mx-auto w-full max-w-[21rem] lg:mr-0">
      <div
        aria-hidden="true"
        className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] bg-[linear-gradient(135deg,#ad8a52,#e3cba0)] opacity-60"
      />
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="metadata"
        poster={asset(`/wideo/${id}-hero.jpg`)}
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="aspect-[9/16] w-full rounded-3xl bg-ink object-cover shadow-[0_30px_60px_-25px_rgba(32,31,30,.55)]"
      >
        <source src={asset(`/wideo/${id}.mp4`)} type="video/mp4" />
      </video>
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Zatrzymaj film" : "Odtwórz film"}
          className="grid h-10 w-10 place-items-center rounded-full bg-ink/60 text-white backdrop-blur hover:bg-ink/80"
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 1.5v11l9-5.5z" fill="currentColor" />
            </svg>
          )}
        </button>
        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? "Włącz dźwięk" : "Wycisz"}
          className="grid h-10 w-10 place-items-center rounded-full bg-ink/60 text-white backdrop-blur hover:bg-ink/80"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />
            {muted ? <path d="M17 9l5 6M22 9l-5 6" /> : <path d="M16 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" />}
          </svg>
        </button>
      </div>
    </div>
  );
}
