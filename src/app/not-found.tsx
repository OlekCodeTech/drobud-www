import Link from "next/link";
import { PageHero } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHero eyebrow="Błąd 404" title="Nie ma takiej strony" lead="Adres mógł się zmienić albo zawiera literówkę.">
      <Link href="/" className="btn-primary">
        Strona główna
      </Link>
      <Link href="/uslugi/" className="btn-ghost">
        Usługi
      </Link>
    </PageHero>
  );
}
