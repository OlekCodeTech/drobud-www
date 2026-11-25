import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { PageHero } from "@/components/ui";
import { CookieSettingsLink } from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Polityka prywatności i plików cookies",
  description: "Jak DroBud przetwarza dane osobowe z formularzy, rezerwacji i rekrutacji oraz jak używa plików cookies.",
  alternates: { canonical: "/polityka-prywatnosci/" },
  robots: { index: false, follow: true },
};

const UPDATED = "25 listopada 2026";

// Uwaga: okresy przechowywania i adres siedziby do potwierdzenia z klientem (adres: TODO w src/data/site.ts).
export default function Page() {
  const admin = `${site.legalName}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}, NIP ${site.nip}`;

  const sections: { h: string; body: React.ReactNode }[] = [
    {
      h: "1. Administrator danych",
      body: (
        <>
          <p>
            Administratorem Twoich danych osobowych jest {admin} (dalej: „DroBud”, „my”). We wszystkich sprawach
            dotyczących danych osobowych możesz się z nami skontaktować e-mailowo:{" "}
            <a href={`mailto:${site.email}`} className="font-bold text-ink underline">
              {site.email}
            </a>{" "}
            lub telefonicznie: {site.phone}.
          </p>
          <p>Nie wyznaczyliśmy inspektora ochrony danych — nie mamy takiego obowiązku.</p>
        </>
      ),
    },
    {
      h: "2. Jakie dane zbieramy, w jakim celu i na jakiej podstawie",
      body: (
        <>
          <p>
            <strong>Formularz wyceny i formularz kontaktowy.</strong> Imię i nazwisko, numer telefonu, adres e-mail,
            miejscowość, opis prac oraz przesłane pliki (projekty, zdjęcia). Wykorzystujemy je, żeby odpowiedzieć na
            zapytanie, przygotować wycenę i ustalić szczegóły współpracy. Podstawa: podjęcie działań na Twoje żądanie
            przed zawarciem umowy (art. 6 ust. 1 lit. b RODO) oraz nasz prawnie uzasadniony interes, jakim jest
            odpowiadanie na kierowaną do nas korespondencję (art. 6 ust. 1 lit. f RODO).
          </p>
          <p>
            <strong>Wstępna rezerwacja terminu</strong> (wykończenie, osuszacze, sprzątanie). Dane kontaktowe, miejscowość,
            wybrane terminy i zakres usługi — w celu potwierdzenia rezerwacji i przygotowania usługi (art. 6 ust. 1 lit. b
            RODO).
          </p>
          <p>
            <strong>Zgłoszenie do pracy.</strong> Dane z formularza i CV — w celu przeprowadzenia rekrutacji na wskazane
            stanowisko (art. 6 ust. 1 lit. b i c RODO w związku z art. 22¹ Kodeksu pracy). Jeżeli przekażesz więcej
            danych, niż wymagają przepisy, przetwarzamy je na podstawie Twojej zgody (art. 6 ust. 1 lit. a RODO),
            wyrażonej przez ich przesłanie.
          </p>
          <p>
            <strong>Umowa i rozliczenia.</strong> Jeżeli zlecisz nam prace, przetwarzamy dane potrzebne do wykonania
            umowy (art. 6 ust. 1 lit. b RODO), wystawienia faktur i prowadzenia księgowości (art. 6 ust. 1 lit. c RODO)
            oraz ewentualnego dochodzenia roszczeń lub obrony przed nimi (art. 6 ust. 1 lit. f RODO).
          </p>
          <p>
            Podanie danych jest dobrowolne, ale bez numeru telefonu lub adresu e-mail nie będziemy mogli odpowiedzieć
            na zgłoszenie. Nie podejmujemy decyzji w sposób zautomatyzowany i nie profilujemy użytkowników.
          </p>
        </>
      ),
    },
    {
      h: "3. Komu przekazujemy dane",
      body: (
        <>
          <p>Dane mogą trafić wyłącznie do podmiotów, które pomagają nam prowadzić stronę i obsługiwać zgłoszenia:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Hostinger International Ltd. — hosting strony, serwer wysyłający wiadomości z formularzy;</li>
            <li>dostawca poczty e-mail działający w ramach usług Hostinger (Titan) — obsługa skrzynki {site.email};</li>
            <li>biuro rachunkowe — w zakresie rozliczeń, jeżeli zawrzemy umowę;</li>
            <li>organy publiczne — wyłącznie gdy wymagają tego przepisy prawa.</li>
          </ul>
          <p>
            Dane nie są sprzedawane ani udostępniane w celach marketingowych. Jeżeli wyrazisz zgodę na treści
            zewnętrzne, mapa na stronie kontaktowej jest wyświetlana przez Google Ireland Limited; Google może
            przekazywać dane do USA na podstawie decyzji Komisji Europejskiej w sprawie EU-US Data Privacy Framework
            lub standardowych klauzul umownych.
          </p>
        </>
      ),
    },
    {
      h: "4. Jak długo przechowujemy dane",
      body: (
        <ul className="list-disc space-y-1 pl-5">
          <li>zapytania i wyceny, po których nie doszło do współpracy — do 12 miesięcy od ostatniego kontaktu;</li>
          <li>dane związane z umową — przez czas jej wykonania, a potem do upływu terminów przedawnienia roszczeń;</li>
          <li>dokumenty księgowe — przez okres wymagany przepisami podatkowymi (co do zasady 5 lat od końca roku);</li>
          <li>
            dane z rekrutacji — do zakończenia rekrutacji, a jeżeli zgodzisz się na udział w przyszłych rekrutacjach —
            do 12 miesięcy lub do wycofania zgody.
          </li>
        </ul>
      ),
    },
    {
      h: "5. Twoje prawa",
      body: (
        <>
          <p>
            Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia
            oraz wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie. Jeżeli
            przetwarzamy dane na podstawie zgody, możesz ją w każdej chwili wycofać — nie wpływa to na zgodność z prawem
            przetwarzania sprzed jej wycofania.
          </p>
          <p>
            Aby skorzystać z tych praw, napisz na {site.email}. Przysługuje Ci też skarga do Prezesa Urzędu Ochrony
            Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).
          </p>
        </>
      ),
    },
    {
      h: "6. Pliki cookies i pamięć przeglądarki",
      body: (
        <>
          <p>
            Strona sama nie ustawia plików cookies. Korzysta z pamięci przeglądarki (localStorage) wyłącznie do
            zapamiętania niezbędnych ustawień:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <code>drobud-consent</code> — Twój wybór w banerze cookies (data i zakres zgody);
            </li>
            <li>
              <code>drobud-popup-swieta-2026</code> — informacja, kiedy ostatnio pokazaliśmy okno z ofertą sezonową, żeby
              nie wyświetlać go zbyt często.
            </li>
          </ul>
          <p>
            Za Twoją zgodą („Treści zewnętrzne”) na stronie kontaktowej wyświetla się mapa Google, która może zapisywać
            własne pliki cookies zgodnie z{" "}
            <a href="https://policies.google.com/privacy?hl=pl" target="_blank" rel="noopener noreferrer" className="underline">
              polityką prywatności Google
            </a>
            . Bez zgody w miejscu mapy widzisz zaślepkę z linkiem do Google Maps.
          </p>
          <p>
            Linki do Facebooka, Instagrama i TikToka prowadzą do zewnętrznych serwisów — dopiero po ich otwarciu
            obowiązują zasady prywatności tych serwisów. Na naszej stronie nie osadzamy ich wtyczek.
          </p>
          <p>
            Zgodę możesz zmienić lub wycofać w każdej chwili:{" "}
            <CookieSettingsLink className="font-bold text-ink underline" />. Możesz też usunąć dane strony
            w ustawieniach swojej przeglądarki.
          </p>
        </>
      ),
    },
    {
      h: "7. Logi serwera i bezpieczeństwo",
      body: (
        <p>
          Serwer hostingu automatycznie zapisuje podstawowe informacje techniczne o połączeniach (m.in. adres IP, datę
          i godzinę, adres odwiedzanej podstrony). Służą one wyłącznie do zapewnienia bezpieczeństwa i poprawnego
          działania strony (art. 6 ust. 1 lit. f RODO). Strona działa wyłącznie przez szyfrowane połączenie HTTPS.
        </p>
      ),
    },
    {
      h: "8. Zmiany polityki",
      body: (
        <p>
          Politykę aktualizujemy, gdy zmieniają się przepisy lub sposób działania strony. Aktualna wersja jest zawsze
          dostępna na tej stronie. Masz pytania? <Link href="/kontakt/" className="underline">Skontaktuj się z nami</Link>.
        </p>
      ),
    },
  ];

  return (
    <>
      <PageHero eyebrow="Informacje" title="Polityka prywatności i plików cookies" />
      <section>
        <div className="container-x max-w-3xl space-y-9 py-14 leading-relaxed">
          <p className="text-sm text-muted">Obowiązuje od: {UPDATED}</p>
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-extrabold">{s.h}</h2>
              <div className="mt-3 space-y-3 text-muted">{s.body}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
