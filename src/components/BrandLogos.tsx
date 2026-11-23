import Image from "next/image";
import { brands } from "@/data/site";

// Logotypy marek sprzętu, na którym pracuje ekipa (public/marki/<marka>.svg).
// Źródła: DeWalt i Makita — Wikimedia Commons; Mirka i Starmix — strony producentów.
export function BrandLogos({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={`grid grid-cols-2 gap-4 sm:grid-cols-4 ${compact ? "max-w-3xl" : ""}`}>
      {brands.map((b) => (
        <li
          key={b}
          className={`flex items-center justify-center rounded-2xl border border-line bg-white px-6 ${compact ? "h-20" : "h-28"}`}
        >
          <Image
            src={`/marki/${b.toLowerCase()}.svg`}
            alt={`${b} — sprzęt, na którym pracujemy`}
            width={160}
            height={56}
            className={`w-auto object-contain ${compact ? "max-h-9" : "max-h-12"}`}
          />
        </li>
      ))}
    </ul>
  );
}
