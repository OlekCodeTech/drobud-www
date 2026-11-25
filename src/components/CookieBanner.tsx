"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  GA_ID,
  OPEN_SETTINGS_EVENT,
  getConsentRaw,
  getConsentServer,
  parseConsent,
  readConsent,
  saveConsent,
  subscribeConsent,
} from "@/lib/consent";

// Baner zgody na cookies (RODO / Prawo telekomunikacyjne). Do czasu wyboru nic opcjonalnego się nie ładuje:
// mapa Google czeka za <ConsentGate>, a Google Analytics (jeśli kiedyś ustawiony NEXT_PUBLIC_GA_ID)
// startuje dopiero po zgodzie na statystyki.

type Gtag = (...args: unknown[]) => void;

function loadAnalytics() {
  if (!GA_ID || document.getElementById("ga-src")) return;
  const w = window as unknown as { dataLayer: unknown[]; gtag: Gtag };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID, { anonymize_ip: true });
  const s = document.createElement("script");
  s.id = "ga-src";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

export function CookieBanner() {
  const raw = useSyncExternalStore(subscribeConsent, getConsentRaw, getConsentServer);
  const consent = parseConsent(raw);
  const [manual, setManual] = useState(false);
  const [details, setDetails] = useState(false);
  const [external, setExternal] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  // Statystyki startują dopiero po zgodzie (efekt bez setState).
  useEffect(() => {
    if (consent?.analytics) loadAnalytics();
  }, [consent?.analytics]);

  // Ponowne otwarcie z linku „Ustawienia cookies” (setState w obsłudze zdarzenia, nie w ciele efektu).
  useEffect(() => {
    const onOpen = () => {
      const cur = readConsent();
      setExternal(cur?.external ?? false);
      setAnalytics(cur?.analytics ?? false);
      setDetails(true);
      setManual(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
  }, []);

  const open = manual || consent === null;
  if (!open) return null;

  const decide = (choice: { external: boolean; analytics: boolean }) => {
    saveConsent(choice);
    setManual(false);
    setDetails(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-line bg-white p-5 shadow-2xl sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      <h2 id="cookie-title" className="text-lg font-extrabold">
        Pliki cookies i Twoja prywatność
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Używamy niezbędnej pamięci przeglądarki, żeby strona działała poprawnie. Za Twoją zgodą wyświetlimy też
        treści zewnętrzne (mapę Google){GA_ID ? " i zbierzemy anonimowe statystyki odwiedzin" : ""}, które mogą
        zapisywać własne pliki cookies. Zgodę możesz w każdej chwili zmienić w stopce strony. Szczegóły w{" "}
        <Link href="/polityka-prywatnosci/" className="font-bold text-ink underline">
          polityce prywatności
        </Link>
        .
      </p>

      {details && (
        <fieldset className="mt-4 space-y-3 border-t border-line pt-4 text-sm">
          <legend className="sr-only">Ustawienia zgód</legend>
          <label className="flex items-start gap-3">
            <input type="checkbox" checked disabled className="mt-1 h-4 w-4 accent-[var(--color-accent)]" />
            <span>
              <strong>Niezbędne</strong> — zapamiętanie Twojego wyboru i ustawień strony. Zawsze aktywne.
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={external}
              onChange={(e) => setExternal(e.target.checked)}
              className="mt-1 h-4 w-4 accent-[var(--color-accent)]"
            />
            <span>
              <strong>Treści zewnętrzne</strong> — mapa Google na stronie kontaktowej (Google może zapisywać własne
              pliki cookies).
            </span>
          </label>
          {GA_ID && (
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 h-4 w-4 accent-[var(--color-accent)]"
              />
              <span>
                <strong>Statystyki</strong> — Google Analytics, anonimowe dane o odwiedzinach.
              </span>
            </label>
          )}
        </fieldset>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" className="btn-gold px-5 py-2.5" onClick={() => decide({ external: true, analytics: true })}>
          Akceptuj wszystkie
        </button>
        <button type="button" className="btn-ghost px-5 py-2.5" onClick={() => decide({ external: false, analytics: false })}>
          Tylko niezbędne
        </button>
        {details ? (
          <button type="button" className="btn-ghost px-5 py-2.5" onClick={() => decide({ external, analytics })}>
            Zapisz wybór
          </button>
        ) : (
          <button type="button" className="px-2 py-2.5 text-sm font-bold underline" onClick={() => setDetails(true)}>
            Ustawienia
          </button>
        )}
      </div>
    </div>
  );
}

/** Link w stopce: ponowne otwarcie ustawień zgód. */
export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
    >
      Ustawienia cookies
    </button>
  );
}
