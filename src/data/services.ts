// Lista usług wg Damiana (20.11.2026). Treści robocze — do akceptacji przez klienta.

export type Service = {
  slug: string;
  title: string;
  short: string;
  lead: string;
  scope: string[];
  faq: { q: string; a: string }[];
  /** Usługa z kalendarzem wstępnej rezerwacji. */
  booking?: "osuszacze" | "sprzatanie";
  /** Zdjęcia do sekcji „Zakres” (public/…). */
  images?: string[];
};

export const services: Service[] = [
  {
    slug: "wykonczenia-pod-klucz",
    title: "Wykończenia domów i mieszkań pod klucz",
    short: "Nasza specjalność: kompleksowe wykończenie domów i mieszkań w stanie deweloperskim.",
    lead: "Specjalizujemy się w kompleksowych wykończeniach domów oraz mieszkań w stanie deweloperskim. Jedna ekipa prowadzi wszystkie etapy — od gładzi i zabudów, przez łazienki i podłogi, po sprzątanie przed wprowadzeniem.",
    scope: [
      "Wykończenie domów i mieszkań w stanie deweloperskim",
      "Łazienki, sufity podwieszane, gładzie i malowanie",
      "Płytki, gres i panele podłogowe",
      "Tynki dekoracyjne i farby strukturalne",
      "Adaptacja poddaszy",
      "Sprzątanie po zakończeniu prac",
    ],
    faq: [
      {
        q: "Od czego zacząć, jeśli mam tylko projekt albo rzut mieszkania?",
        a: "Wyślij go przez formularz wyceny razem z krótkim opisem. To wystarczy, żebyśmy mogli oddzwonić i omówić zakres.",
      },
      {
        q: "Czy pracujecie poza Wieluniem?",
        a: "Tak. Dojeżdżamy do klientów w promieniu około 50 km od Wielunia, m.in. do Praszki, Wieruszowa, Pajęczna, Działoszyna i Sieradza.",
      },
    ],
    images: ["/realizacje/salon-jodelka-przeszklenia.jpg", "/realizacje/salon-kominek-oswietlenie-liniowe.jpg"],
  },
  {
    slug: "remonty-lazienek",
    title: "Wykończenia i remonty łazienek",
    short: "Kompleksowe łazienki: płytki wielkoformatowe, zabudowy, prysznice walk-in, oświetlenie LED.",
    lead: "Łazienki to nasza wizytówka. Wykonujemy je od surowych ścian po gotowe pomieszczenie — z zabudowami, wnękami, podświetleniem i starannym wykończeniem detali.",
    scope: [
      "Układanie płytek, w tym dużych formatów i mozaiki",
      "Zabudowy stelaży, wnęki i półki",
      "Montaż wanien, w tym wolnostojących, kabin i odpływów liniowych",
      "Biały montaż i armatura",
      "Oświetlenie LED w zabudowach",
      "Łazienki na poddaszu i w skosach",
    ],
    faq: [
      {
        q: "Czy robicie łazienkę w całości, łącznie z montażem ceramiki?",
        a: "Tak, wykonujemy łazienkę kompleksowo — od przygotowania podłoża po montaż wyposażenia.",
      },
      {
        q: "Czy mogę wysłać zdjęcia inspiracji?",
        a: "Tak. W formularzu wyceny można dołączyć zdjęcia i projekt, co bardzo ułatwia rozmowę o zakresie.",
      },
    ],
    images: ["/realizacje/lazienka-poddasze-wanna.jpg", "/realizacje/lazienka-marmur-mozaika.jpg"],
  },
  {
    slug: "sufity-podwieszane",
    title: "Sufity podwieszane i zabudowy G-K",
    short: "Sufity podwieszane z oświetleniem LED i liniowym, zabudowy kominkowe, RTV i ścianki działowe.",
    lead: "Z płyt gipsowo-kartonowych wykonujemy sufity podwieszane, ścianki działowe i zabudowy na wymiar — także pod kominek, telewizor i oświetlenie liniowe.",
    scope: [
      "Sufity podwieszane jedno- i wielopoziomowe",
      "Wnęki na taśmy LED i oświetlenie liniowe",
      "Zabudowy kominkowe i RTV",
      "Ścianki działowe, wnęki i półki",
      "Zabudowa skosów na poddaszu",
    ],
    faq: [
      {
        q: "Czy wykonujecie zabudowy według projektu wnętrz?",
        a: "Tak, pracujemy na podstawie projektów od architektów i projektantów wnętrz. Projekt można dołączyć do zapytania.",
      },
    ],
    images: ["/realizacje/salon-kominek-oswietlenie-liniowe.jpg", "/realizacje/lazienka-poddasze-wanna.jpg"],
  },
  {
    slug: "adaptacja-poddasza",
    title: "Adaptacja poddaszy",
    short: "Ocieplenie, zabudowa i wykończenie poddasza — od strychu do gotowych pomieszczeń.",
    lead: "Zamieniamy nieużytkowe poddasza i strychy w pełnowartościowe pomieszczenia. Wykonujemy ocieplenie, zabudowę skosów i ścianek, a następnie wykończenie pod klucz.",
    scope: [
      "Ocieplenie dachu i poddasza",
      "Zabudowa skosów i ścianek kolankowych płytami G-K",
      "Ścianki działowe i sufity",
      "Gładzie, malowanie i podłogi",
      "Łazienki na poddaszu",
    ],
    faq: [
      {
        q: "Czy po ociepleniu wykonujecie też wykończenie poddasza?",
        a: "Tak, możemy zrealizować całość: ocieplenie, zabudowę, gładzie, malowanie, podłogi i łazienkę.",
      },
    ],
    images: ["/realizacje/lazienka-poddasze-wanna.jpg"],
  },
  {
    slug: "gladzie-i-malowanie",
    images: ["/wideo/v04.jpg", "/realizacje/podloga-jodelka-dom.jpg"],
    title: "Gładzie polimerowe i malowanie",
    short: "Gładzie polimerowe, szlifowanie z odsysaniem pyłu i malowanie ścian oraz sufitów.",
    lead: "Przygotowujemy ściany i sufity pod ostateczne wykończenie. Stosujemy gładzie polimerowe, szlifujemy z odsysaniem pyłu i malujemy, dzięki czemu powierzchnie są równe, a na budowie czyściej.",
    scope: [
      "Gładzie polimerowe i gipsowe",
      "Szlifowanie mechaniczne z odsysaniem pyłu",
      "Gruntowanie i malowanie ścian oraz sufitów",
      "Naprawa pęknięć i ubytków",
      "Obróbka wnęk okiennych i futryn",
    ],
    faq: [
      {
        q: "Czy malujecie również lokale firmowe?",
        a: "Tak, malujemy mieszkania, domy oraz lokale usługowe i biura.",
      },
    ],
  },
  {
    slug: "tynki-dekoracyjne",
    images: ["/realizacje/salon-kominek-oswietlenie-liniowe.jpg"],
    title: "Tynki dekoracyjne i farby strukturalne",
    short: "Ściany z charakterem: tynki dekoracyjne, efekt betonu, farby strukturalne.",
    lead: "Wykonujemy ściany dekoracyjne, które stają się ozdobą salonu, korytarza czy sypialni: tynki dekoracyjne, efekt betonu i kamienia oraz farby strukturalne.",
    scope: [
      "Tynki dekoracyjne na ścianach akcentowych",
      "Efekt betonu architektonicznego",
      "Farby strukturalne",
      "Przygotowanie podłoża pod dekoracje",
      "Dobór faktury i koloru do wnętrza",
    ],
    faq: [
      {
        q: "Czy tynk dekoracyjny można wykonać na jednej ścianie?",
        a: "Tak. Najczęściej wykonuje się go na ścianie akcentowej — za telewizorem, przy kominku albo w korytarzu.",
      },
    ],
  },
  {
    slug: "ukladanie-plytek",
    title: "Układanie płytek i gresu",
    short: "Gres wielkoformatowy, glazura i mozaiki — w łazienkach, kuchniach, salonach i na schodach.",
    lead: "Układamy płytki ścienne i podłogowe z dbałością o cięcia, fugi i narożniki. Pracujemy z gresem wielkoformatowym i płytkami imitującymi marmur.",
    scope: [
      "Gres podłogowy, także wielkoformatowy",
      "Płytki ścienne i mozaiki",
      "Okładziny schodów",
      "Narożniki szlifowane pod kątem",
      "Fugowanie i silikonowanie",
    ],
    faq: [
      {
        q: "Czy układacie płytki dostarczone przez klienta?",
        a: "Tak. Możemy też doradzić przy wyborze formatu i ilości materiału.",
      },
    ],
    images: ["/realizacje/lazienka-wanna-wolnostojaca.jpg", "/realizacje/lazienka-marmur-mozaika.jpg"],
  },
  {
    slug: "podlogi-i-drzwi",
    title: "Panele podłogowe i montaż drzwi",
    short: "Panele, także w jodełkę, listwy przypodłogowe i drzwi wewnętrzne.",
    lead: "Układamy panele podłogowe — również w jodełkę — montujemy listwy i drzwi wewnętrzne. Jako osobną usługę albo część wykończenia pod klucz.",
    scope: [
      "Układanie paneli podłogowych, także w jodełkę",
      "Montaż listew przypodłogowych",
      "Montaż drzwi wewnętrznych i ościeżnic",
      "Przygotowanie i wyrównanie podłoża",
    ],
    faq: [
      {
        q: "Czy mogę zamówić sam montaż drzwi?",
        a: "Tak, opisz liczbę drzwi i ich rodzaj w formularzu wyceny.",
      },
    ],
    images: ["/realizacje/podloga-jodelka-dom.jpg", "/realizacje/salon-jodelka-przeszklenia.jpg"],
  },
  {
    slug: "wynajem-osuszaczy",
    title: "Osuszanie po budowie i po zalaniu",
    short: "Nowy dom nie schnie? A może zalał Cię sąsiad? Wynajem profesjonalnych osuszaczy.",
    lead: "Nowy dom nie schnie? A może zalał Cię sąsiad? Wynajmujemy profesjonalne osuszacze budowlane do osuszania tynków i wylewek oraz pomieszczeń po zalaniu. Termin można wstępnie zarezerwować w kalendarzu.",
    scope: [
      "Wynajem osuszaczy budowlanych na doby",
      "Osuszanie tynków i wylewek przed dalszymi pracami",
      "Osuszanie pomieszczeń po zalaniu",
      "Dobór liczby urządzeń do powierzchni",
    ],
    faq: [
      {
        q: "Jak zarezerwować osuszacz?",
        a: "Wybierz termin w kalendarzu rezerwacji i zostaw numer telefonu. Rezerwacja jest wstępna — potwierdzamy ją telefonicznie.",
      },
    ],
    booking: "osuszacze",
    images: ["/osuszacze/climative-dhp-50-pro.jpg", "/osuszacze/osuszanie-zastosowania.jpg"],
  },
  {
    slug: "sprzatanie-po-remoncie",
    title: "Sprzątanie domów, mieszkań i lokali",
    short: "Nowa usługa: sprzątanie po remoncie, przed i po wynajmie oraz przedświąteczne porządki.",
    lead: "Chcąc zaoszczędzić Wasz czas i energię, poszerzyliśmy ofertę o profesjonalne sprzątanie domów, mieszkań i lokali: po wykończeniu lub remoncie, przed i po wynajmie oraz przed świętami i innymi okazjami.",
    scope: [
      "Dokładne sprzątanie całego domu lub mieszkania",
      "Usuwanie pyłu budowlanego i pozostałości po pracach",
      "Czyszczenie kuchni — blaty, sprzęty, fronty",
      "Sprzątanie łazienek — dezynfekcja i wybłyszczanie",
      "Mycie okien, przeszkleń, ram i parapetów",
      "Czyszczenie podłóg, płytek i fug",
      "Mycie drzwi, listew i innych powierzchni",
      "Odświeżenie pomieszczeń przed przyjęciem gości",
    ],
    faq: [
      {
        q: "Jak umówić termin sprzątania?",
        a: "Wybierz dzień w kalendarzu rezerwacji, rodzaj sprzątania i metraż. Termin potwierdzamy telefonicznie.",
      },
    ],
    booking: "sprzatanie",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
