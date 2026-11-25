import Image from "next/image";
import { brands } from "@/data/site";

// Logotypy marek narzędzi i materiałów (public/marki/).
// Źródła: DeWalt i Makita — Wikimedia Commons; pozostałe — strony producentów.
export function BrandLogos({ compact = false }: { compact?: boolean }) {
  return (
    <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
      {brands.map((b) => (
        <li
          key={b.name}
          className={`flex items-center justify-center rounded-2xl border border-line bg-white px-3 ${compact ? "h-16" : "h-24"}`}
        >
          {b.file ? (
            <Image
              src={`/marki/${b.file}`}
              alt={b.name}
              width={140}
              height={48}
              className={`w-auto object-contain ${compact ? "max-h-8" : "max-h-10"} max-w-full`}
            />
          ) : (
            <span className="text-center text-sm font-extrabold uppercase tracking-wide text-ink/80">{b.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
