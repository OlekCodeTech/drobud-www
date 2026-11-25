// Zgody na pliki cookies i treści zewnętrzne. Zapis w localStorage (bez cookies własnych),
// zmiany rozgłaszane zdarzeniem `drobud-consent`, żeby komponenty (mapa, analityka) mogły zareagować.

export type ConsentCategory = "necessary" | "external" | "analytics";

export type Consent = {
  necessary: true;
  /** Treści zewnętrzne osadzone na stronie: mapa Google. */
  external: boolean;
  /** Statystyki (Google Analytics) — tylko gdy ustawiono NEXT_PUBLIC_GA_ID. */
  analytics: boolean;
  /** Data zapisania zgody (ISO). */
  date: string;
  version: number;
};

export const CONSENT_VERSION = 1;
const KEY = "drobud-consent";
export const CONSENT_EVENT = "drobud-consent";
export const OPEN_SETTINGS_EVENT = "drobud-consent-open";
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    return c.version === CONSENT_VERSION ? c : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: { external: boolean; analytics: boolean }): Consent {
  const c: Consent = {
    necessary: true,
    external: choice.external,
    analytics: GA_ID ? choice.analytics : false,
    date: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(c));
  } catch {}
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: c }));
  return c;
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

// --- Odczyt w komponentach przez useSyncExternalStore (bez setState w efektach) ---
const SERVER = "__server__";

export function subscribeConsent(cb: () => void) {
  window.addEventListener(CONSENT_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(CONSENT_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

/** Surowy zapis (string jest stabilny między renderami). null = brak decyzji. */
export function getConsentRaw(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export const getConsentServer = () => SERVER;

/** Zgoda z surowego zapisu; `undefined` = renderowanie po stronie serwera (jeszcze nie wiadomo). */
export function parseConsent(raw: string | null): Consent | null | undefined {
  if (raw === SERVER) return undefined;
  if (!raw) return null;
  try {
    const c = JSON.parse(raw) as Consent;
    return c.version === CONSENT_VERSION ? c : null;
  } catch {
    return null;
  }
}
