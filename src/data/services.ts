// Lista usług wg Damiana (ikony z dysku, 23.11.2026). Treści robocze — do akceptacji przez klienta.
// Zasady od klienta: bez słowa „remont” (zamiast tego wykończenia kompleksowe), bez montażu drzwi i tapet,
// pod oświetlenie LED tylko przygotowujemy (nie wykonujemy instalacji).

export type Service = {
  slug: string;
  title: string;
  short: string;
  lead: string;
  scope: string[];
  faq: { q: string; a: string }[];
  /** Ikona usługi (public/ikony/). */
  icon: string;
  /** Jeden film na podstronie usługi (public/wideo/<id>.mp4). */
  video?: string;
  /** Usługa z kalendarzem wstępnej rezerwacji. */
  booking?: "osuszacze" | "sprzatanie";
  /** Zdjęcia do sekcji „Zakres” (public/…). */
  images?: string[];
};

export const services: Service[] = [
  {
    slug: "wykonczenia-pod-klucz",
    title: "Wykończenia domów i mieszkań pod klucz",
    short: "Nasza specjalność: kompleksowe wykończenia domów i mieszkań w stanie deweloperskim.",
    lead: "Specjalizujemy się w kompleksowych wykończeniach domów oraz mieszkań w stanie deweloperskim. Jedna ekipa prowadzi wszystkie etapy — od gładzi i sufitów, przez łazienki i podłogi, po sprzątanie przed wprowadzeniem.",
    scope: [
      "Kompleksowe wykończenie domów i mieszkań w stanie deweloperskim",
      "Łazienki, sufity podwieszane, gładzie i malowanie",
      "Gres i panele podłogowe",
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
    icon: "/ikony/wykonczenia-pod-klucz.png",
    video: "v02",
    images: ["/realizacje/salon-jodelka-przeszklenia.jpg", "/realizacje/korytarz-jodelka-led.jpg"],
  },
  {
    slug: "wykonczenia-lazienek",
    title: "Wykończenia łazienek",
    short: "Kompleksowe łazienki: płytki wielkoformatowe, zabudowy stelaży, prysznice walk-in, wnęki pod LED.",
    lead: "Łazienki to nasza wizytówka. Wykańczamy je od surowych ścian po gotowe pomieszczenie — z zabudowami, wnękami przygotowanymi pod podświetlenie i starannym wykończeniem detali.",
    scope: [
      "Układanie płytek, w tym dużych formatów i mozaiki",
      "Zabudowy stelaży, wnęki i półki",
      "Montaż wanien, w tym wolnostojących, kabin i odpływów liniowych",
      "Biały montaż i armatura",
      "Wnęki i zabudowy przygotowane pod oświetlenie LED",
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
    icon: "/ikony/lazienki.png",
    video: "v15",
    images: ["/realizacje/lazienka-poddasze-wanna.jpg", "/realizacje/lazienka-marmur-mozaika.jpg"],
  },
  {
    slug: "sufity-podwieszane",
    title: "Sufity podwieszane i adaptacja poddaszy",
    short: "Sufity podwieszane przygotowane pod oświetlenie LED oraz adaptacja poddaszy od ocieplenia do wykończenia.",
    lead: "Wykonujemy sufity podwieszane jedno- i wielopoziomowe, przygotowane pod oświetlenie LED i liniowe, oraz adaptujemy poddasza — od ocieplenia, przez stelaż i płyty, po gotowe do zamieszkania pomieszczenia.",
    scope: [
      "Sufity podwieszane jedno- i wielopoziomowe",
      "Sufity przygotowane pod oświetlenie LED i liniowe",
      "Adaptacja poddaszy",
      "Ocieplenie dachu i poddasza",
      "Gładzie, malowanie i podłogi na poddaszu",
    ],
    faq: [
      {
        q: "Czy montujecie oświetlenie LED w sufitach?",
        a: "Przygotowujemy sufity i wnęki pod oświetlenie LED i liniowe — profile, wnęki i miejsca na oprawy. Samą instalację elektryczną wykonuje elektryk.",
      },
      {
        q: "Czy po ociepleniu wykonujecie też wykończenie poddasza?",
        a: "Tak, możemy zrealizować całość: ocieplenie, sufity, gładzie, malowanie i podłogi.",
      },
    ],
    icon: "/ikony/sufity-poddasza.png",
    video: "v13",
    images: ["/realizacje/sufit-podwieszany-stelaz.jpg", "/realizacje/poddasze-stelaz.jpg"],
  },
  {
    slug: "gladzie-polimerowe",
    title: "Gładzie polimerowe",
    short: "Idealnie gładkie ściany i sufity, szlifowanie z odsysaniem pyłu.",
    lead: "Przygotowujemy ściany i sufity pod malowanie. Stosujemy gładzie polimerowe i szlifujemy z odsysaniem pyłu, dzięki czemu powierzchnie są równe, a na budowie czyściej.",
    scope: [
      "Gładzie polimerowe na ścianach i sufitach",
      "Szlifowanie mechaniczne z odsysaniem pyłu",
      "Naprawa pęknięć i ubytków",
      "Obróbka wnęk okiennych",
      "Gruntowanie przed malowaniem",
    ],
    faq: [
      {
        q: "Czy szlifowanie gładzi bardzo pyli?",
        a: "Szlifujemy mechanicznie z odsysaniem pyłu do odkurzacza przemysłowego, dzięki czemu pyłu jest znacznie mniej niż przy szlifowaniu ręcznym.",
      },
    ],
    icon: "/ikony/gladzie.png",
    video: "v16",
    images: ["/wideo/v16.jpg", "/realizacje/podloga-jodelka-dom.jpg"],
  },
  {
    slug: "malowanie",
    title: "Malowanie ścian i sufitów",
    short: "Malowanie domów, mieszkań i lokali farbami dobranymi do pomieszczenia.",
    lead: "Malujemy ściany i sufity w domach, mieszkaniach i lokalach. Farby dobieramy do pomieszczenia — inne do salonu, inne do kuchni i łazienki, gdzie liczy się odporność na wilgoć i zmywanie.",
    scope: [
      "Malowanie ścian i sufitów",
      "Gruntowanie i przygotowanie podłoża",
      "Malowanie lokali usługowych i biur",
      "Zabezpieczenie podłóg, okien i mebli",
    ],
    faq: [
      {
        q: "Czy można zlecić samo malowanie, bez gładzi?",
        a: "Tak, malujemy także bez wykonywania gładzi, jeżeli ściany są w dobrym stanie.",
      },
    ],
    icon: "/ikony/malowanie.png",
    video: "v04",
    images: ["/wideo/v04.jpg"],
  },
  {
    slug: "tynki-dekoracyjne",
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
    icon: "/ikony/tynki.png",
    video: "v05",
    images: ["/realizacje/korytarz-efekt-betonu.jpg", "/realizacje/korytarz-efekt-betonu-2.jpg"],
  },
  {
    slug: "ukladanie-plytek",
    title: "Układanie gresu i płytek",
    short: "Gres wielkoformatowy, płytki drewnopodobne w jodełkę, glazura i mozaiki.",
    lead: "Układamy gres i płytki na podłogach i ścianach z dbałością o cięcia, fugi i narożniki. Pracujemy z dużymi formatami, płytkami drewnopodobnymi (także w jodełkę) i płytkami imitującymi marmur.",
    scope: [
      "Gres podłogowy, także wielkoformatowy",
      "Płytki drewnopodobne, także w jodełkę",
      "Płytki ścienne i mozaiki",
      "Okładziny schodów",
      "Fugowanie i silikonowanie",
    ],
    faq: [
      {
        q: "Czy układacie płytki dostarczone przez klienta?",
        a: "Tak. Możemy też doradzić przy wyborze formatu i ilości materiału.",
      },
    ],
    icon: "/ikony/gres.png",
    video: "v10",
    images: ["/realizacje/lazienka-wanna-wolnostojaca.jpg", "/wideo/v10.jpg"],
  },
  {
    slug: "panele-podlogowe",
    title: "Panele podłogowe",
    short: "Panele, także w jodełkę, z listwami przypodłogowymi.",
    lead: "Układamy panele podłogowe — również w jodełkę — razem z listwami przypodłogowymi. Jako osobną usługę albo część kompleksowego wykończenia.",
    scope: [
      "Układanie paneli podłogowych, także w jodełkę",
      "Montaż listew przypodłogowych",
      "Przygotowanie i wyrównanie podłoża",
      "Podkłady, także pod ogrzewanie podłogowe",
    ],
    faq: [
      {
        q: "Czy układacie panele na ogrzewaniu podłogowym?",
        a: "Tak. Dobieramy podkład przeznaczony do ogrzewania podłogowego i sprawdzamy wilgotność wylewki przed montażem.",
      },
    ],
    icon: "/ikony/panele.png",
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
    icon: "/ikony/osuszanie.png",
    booking: "osuszacze",
    images: ["/osuszacze/climative-dhp-50-pro.jpg", "/osuszacze/osuszanie-zastosowania.jpg"],
  },
  {
    slug: "sprzatanie",
    title: "Sprzątanie domów, mieszkań i lokali",
    short: "Sprzątanie po wykończeniu, przed i po wynajmie oraz przedświąteczne porządki.",
    lead: "Chcąc zaoszczędzić Wasz czas i energię, poszerzyliśmy ofertę o profesjonalne sprzątanie domów, mieszkań i lokali: po wykończeniu, przed i po wynajmie oraz przed świętami i innymi okazjami.",
    scope: [
      "Dokładne sprzątanie całego domu lub mieszkania",
      "Usuwanie pyłu budowlanego i pozostałości po pracach",
      "Czyszczenie kuchni — blaty, sprzęty, fronty",
      "Sprzątanie łazienek — dezynfekcja i wybłyszczanie",
      "Mycie okien, przeszkleń, ram i parapetów",
      "Czyszczenie podłóg, płytek i fug",
      "Odświeżenie pomieszczeń przed przyjęciem gości",
    ],
    faq: [
      {
        q: "Jak umówić termin sprzątania?",
        a: "Wybierz dzień w kalendarzu rezerwacji, rodzaj sprzątania i metraż. Termin potwierdzamy telefonicznie.",
      },
    ],
    icon: "/ikony/sprzatanie.png",
    booking: "sprzatanie",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
