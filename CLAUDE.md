@AGENTS.md

# DroBud — strona www

Strona firmy „DroBud” Usługi Wykończeniowe Damian Drosiński (Wieluń). Next.js 16, statyczny eksport (`out/`),
Tailwind 4. Stroną zarządza OlekCodeTech, klient nie ma panelu. Research: `C:\Users\olo_p\Documents\drobud\research.md`.

## Komendy

- `npm run dev` — podgląd lokalny
- `npm run build` — eksport do `out/` (bez indeksacji). Build przy włączonym `dev` psuje jego cache
  (stare style) — po buildzie zatrzymać dev, usunąć `.next/dev` i uruchomić ponownie
- Build produkcyjny: `python tools/build_prod.py` → `dist/drobudwielun-RRRRMMDD.zip` (z indeksacją, do wgrania
  do `public_html` na Hostingerze)

## Struktura

- `src/data/site.ts` — dane firmy, menu, marki sprzętu, etapy współpracy
- `src/data/services.ts` — 9 usług (każda = podstrona `/uslugi/[slug]/` + schema Service i FAQ)
- `src/data/content.ts` — miasta (landingi `/wykonczenia-wnetrz/[miasto]/`), realizacje, zespół, nagrody, filmy, opinie
- `src/components/media.tsx` — siatka filmów (`public/wideo/vNN.mp4` + okładka `.jpg`) i karty nagród
- `/praca/` — formularz zgłoszeniowy z CV (`JobForm` w `forms.tsx`, typ `praca` w `send.php`)
- Materiały klienta: Dysk Google „Drobud - materiały” (id 14UIWmPhpjK-0lu7X8vuDo1xGkFnR3mj7), kopia
  w `C:\Users\olo_p\Documents\drobud\materialy-dysk` (oryginały filmów w `wideo/`). Filmy kompresowane
  ffmpeg: H.264 crf 27, max 720 px, AAC 96k, faststart
- Do uzupełnienia od klienta: pełny opis osuszaczy
  (przyszedł tylko nagłówek), zdjęcia do gładzi / tynków dekoracyjnych / sprzątania, miejscowości realizacji
- `src/components/forms.tsx` — formularz wyceny (upload plików) i kontaktu
- `src/components/BookingForm.tsx` — kalendarz wstępnej rezerwacji (osuszacze: zakres dat, sprzątanie: dzień)
- `public/api/send.php` — wysyłka formularzy mailem; działa dopiero na hostingu z PHP (lokalnie formularze zwrócą błąd)

## Stan (19.11.2026)

Szkielet z treściami roboczymi. Zdjęcia to placeholdery (komponent `Photo` bez `src`).
Jasny motyw w kolorach logo (złoto `#ad8a52` + grafit, Montserrat). Logo z JPG 750 px od klienta:
`public/logo-drobud.jpg` (pełne) i `public/sygnet-drobud.png` (sam sygnet, przezroczyste tło) — podmienić na wektor.

## SEO — cel i zasady

Cel: top 1 lokalnie (Wieluń + ok. 50 km). Strona ma mieć dużo treści — każda nowa podstrona dostaje
rozbudowany tekst z nagłówkami H2, FAQ i schema, nie same kafelki.

- Długie treści usług: `src/data/services-content.ts` (4 sekcje + FAQ na usługę)
- Treści miast: `src/data/cities-content.ts` (unikalne akapity, okoliczne miejscowości, FAQ)
- Strona główna: `src/data/home-content.ts`
- W tekstach nie ma cen, terminów ani gwarancji — dopisać dopiero po potwierdzeniu u klienta
- Blog: pliki Markdown w `content/blog/` (frontmatter: title, description, date, category, service, faq);
  `service` = slug usługi, wtedy wpis dostaje CTA do niej, a usługa link do wpisu
- Stan 19.11.2026: ok. 16 tys. słów w 40 stronach, 5 wpisów na blogu; brak podstron pojedynczych realizacji

## Do zrobienia

- Materiały od klienta: logo w wektorze (SVG/PDF/AI), zdjęcia realizacji (`public/realizacje/`),
  zespół (`public/zespol/`), logotypy marek (`public/marki/`)
- Potwierdzić: adres (Torowa 36 vs Staw 1a), NIP, godziny, TikTok, e-mail na zgłoszenia — wszystkie `TODO` w `src/data/site.ts`
- Osuszacze: liczba sztuk, cena za dobę, kaucja; sprzątanie: cennik i zakres
- Treści usług i FAQ do akceptacji klienta; ewentualny cennik
- Opinie: potwierdzić, które pokazujemy, dopisać kolejne z Facebooka
- Landingi miast: unikalna treść przed indeksacją
- Kalendarz nie pokazuje zajętych terminów — ewentualna rozbudowa o bazę rezerwacji
- Domena + hosting z PHP; w `send.php` ustawić `MAIL_TO`, `MAIL_FROM`, `ALLOWED_HOST`
- Polityka prywatności do weryfikacji
- Blog: okładki wpisów, kolejne tematy (cennikowe po otrzymaniu cen od klienta)

## Dodane 23.11.2026

- Instagram `@dro_bud`, TikTok `@drobud` (`site.social`), ikony i karty w `src/components/social.tsx`
- Oferty pracy: `src/data/jobs.ts` (glazurnik, `validThrough` 2027-02-28) → `/praca/` z JobPosting schema;
  „Aplikuj” ustawia stanowisko w formularzu przez `?stanowisko=`; zgłoszenia idą na `MAIL_TO` w `send.php`
- Popup przedświątecznego sprzątania: `src/components/HolidayPopup.tsx` (do 24.12.2026, po 6 s, raz na 3 dni,
  nie na formularzach); po świętach usunąć z `layout.tsx` albo zmienić datę i treść
- Hero: `src/components/HeroSlider.tsx` (6 zdjęć realizacji)

## Poprawki klienta 25.11.2026

- Zasady treści: bez słowa „remont” (zamiast tego „kompleksowe wykończenia”), bez montażu drzwi i tapet,
  pod LED tylko przygotowujemy (instalację robi elektryk). Wyjątki: cytaty z opinii klientów i logo
  („WYKOŃCZENIA I REMONTY” w pliku logo) — nie ruszane.
- Hero: film v01 („Strona główna” z dysku) w `HeroVideo.tsx`; przycisk Prasa → `press` w `site.ts`
- Usługi: 10 pozycji z ikonami z dysku (`public/ikony/`), pole `video` = jeden film na stronie usługi;
  sufity + adaptacja poddaszy połączone (`/uslugi/sufity-podwieszane/`), malowanie osobno
- Stare adresy (remonty-lazienek, gladzie-i-malowanie, podlogi-i-drzwi, adaptacja-poddasza, sprzatanie-po-remoncie,
  blog remont-lazienki-…, sprzatanie-po-remoncie-…) zmienione — strona nie była jeszcze opublikowana, więc bez przekierowań
- Zespół: opisy 6 osób od klienta (25.11); zdjęcia pracownik-1 = Zbyszek, pracownik-2 = Tomek, pracownik-3 = Damian K.
- Marki: Sendi i PRO to osobne firmy; Sendi bez logo (sendi.pl przekierowuje na spam) — wyświetlana nazwą; Nivel z białego logo przebarwiony na ciemno
- Film z gali (v12) = `galaVideo` w `content.ts`: tylko w sekcjach wyróżnień (główna, zespół), nie w realizacjach
- E-mail firmy: biuro@drobudwielun.pl (`site.email` + `MAIL_TO`)

## Domeny (25.11.2026)

- Główna: drobudwielun.pl (Hostinger). remontywielun.pl i wykonczeniawielun.pl dodać w hPanelu jako aliasy
  strony — `public/.htaccess` przekierowuje je 301 na drobudwielun.pl (także www i http → https)
- `send.php`: MAIL_FROM biuro@drobudwielun.pl, ALLOWED_HOST drobudwielun.pl; MAIL_TO i `site.email`
  = biuro@drobudwielun.pl (od 25.11.2026)

## Wdrożenie (LIVE od 25.11.2026)

- https://drobudwielun.pl — Hostinger (konto z planem Cloud Professional), strona PHP/HTML „drobudwielun.pl”,
  pliki w `domains/drobudwielun.pl/public_html`. Aliasy (Zaparkowane domeny): remontywielun.pl, wykonczeniawielun.pl
- Aktualizacja: `python tools/build_prod.py`, potem wgrać zawartość `out/` do `public_html` (menedżer plików hPanelu:
  upload ZIP-a → „Wyodrębnij do → Tutaj, z zastąpieniem”, potem usunąć ZIP). Przez przeglądarkę Claude'a limit
  10 MB na plik — dzielić na paczki (`dist/czesci/`)

## Cookies i prywatność (25.11.2026)

- Baner zgody: `src/components/CookieBanner.tsx` + `src/lib/consent.ts` (localStorage `drobud-consent`, kategorie:
  niezbędne / treści zewnętrzne / statystyki). Mapa Google na /kontakt/ za `ConsentGate`. GA4 włącza się
  tylko po ustawieniu `NEXT_PUBLIC_GA_ID` i zgodzie na statystyki. Link „Ustawienia cookies” w stopce
- Polityka prywatności przepisana w całości — okresy przechowywania (12 mies.) i adres siedziby do potwierdzenia
- E-mail: skrzynka biuro@drobudwielun.pl (Titan Free na Hostingerze). SPF ma tylko Titan — dopisać
  `include:_spf.mail.hostinger.com`, bo formularz wysyła przez serwer WWW
- Google Search Console: do dodania (API Composio nie ma uprawnień do weryfikacji — przez UI, meta tag w layout)
