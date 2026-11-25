"use client";

import { useSyncExternalStore } from "react";
import {
  getConsentRaw,
  getConsentServer,
  parseConsent,
  readConsent,
  saveConsent,
  subscribeConsent,
} from "@/lib/consent";

/**
 * Treść zewnętrzna (np. mapa Google) ładowana dopiero po zgodzie na „treści zewnętrzne”.
 * Do tego czasu pokazuje zaślepkę z przyciskiem zgody i linkiem do zewnętrznego serwisu.
 */
export function ConsentGate({
  children,
  label,
  fallbackHref,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  fallbackHref: string;
  className?: string;
}) {
  const raw = useSyncExternalStore(subscribeConsent, getConsentRaw, getConsentServer);
  if (parseConsent(raw)?.external) return <>{children}</>;

  return (
    <div className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-paper p-6 text-center ${className}`}>
      <p className="max-w-sm text-sm text-muted">
        {label} pochodzi z serwisu zewnętrznego, który może zapisywać pliki cookies. Wyświetlimy ją po Twojej zgodzie.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          className="btn-gold px-5 py-2.5"
          onClick={() => saveConsent({ external: true, analytics: readConsent()?.analytics ?? false })}
        >
          Pokaż mapę
        </button>
        <a href={fallbackHref} target="_blank" rel="noopener noreferrer" className="btn-ghost px-5 py-2.5">
          Otwórz w Google Maps
        </a>
      </div>
    </div>
  );
}
