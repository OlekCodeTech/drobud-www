import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  alternates: { canonical: "/polityka-prywatnosci/" },
  robots: { index: false, follow: true },
};

// TODO: wersja robocza — do weryfikacji przed publikacją (dane administratora, hosting, narzędzia analityczne).
export default function Page() {
  return (
    <>
      <PageHero eyebrow="Informacje" title="Polityka prywatności" />
      <section>
        <div className="container-x max-w-3xl space-y-8 py-14 leading-relaxed">
          <div>
            <h2 className="text-xl font-extrabold">Administrator danych</h2>
            <p className="mt-2 text-muted">
              Administratorem danych osobowych jest {site.legalName}, {site.address.street},{" "}
              {site.address.postalCode} {site.address.city}, NIP {site.nip}. Kontakt: {site.email}, tel.{" "}
              {site.phone}.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold">Jakie dane przetwarzamy i po co</h2>
            <p className="mt-2 text-muted">
              Dane podane w formularzach wyceny, rezerwacji i kontaktu (imię i nazwisko, numer telefonu, adres
              e-mail, miejscowość, opis prac oraz przesłane pliki) przetwarzamy wyłącznie w celu odpowiedzi na
              zgłoszenie, przygotowania wyceny i potwierdzenia terminu — na podstawie art. 6 ust. 1 lit. a i b RODO.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold">Rekrutacja</h2>
            <p className="mt-2 text-muted">
              Dane przesłane w formularzu zgłoszeniowym do pracy (w tym CV) przetwarzamy na podstawie zgody wyłącznie
              w celu rekrutacji, do czasu jej zakończenia lub cofnięcia zgody.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold">Jak długo przechowujemy dane</h2>
            <p className="mt-2 text-muted">
              Dane ze zgłoszeń przechowujemy przez czas potrzebny do obsługi zapytania, a w przypadku zawarcia
              umowy — przez okres wymagany przepisami.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold">Twoje prawa</h2>
            <p className="mt-2 text-muted">
              Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia,
              cofnięcia zgody oraz wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold">Pliki cookies i usługi zewnętrzne</h2>
            <p className="mt-2 text-muted">
              Strona nie używa plików cookies do celów marketingowych. Na stronie kontaktowej osadzona jest mapa
              Google, która może zapisywać własne pliki cookies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
