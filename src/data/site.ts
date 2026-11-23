// Dane firmy. Pozycje oznaczone TODO czekają na potwierdzenie od klienta.

export const site = {
  name: "DroBud",
  legalName: "„DroBud” Usługi Wykończeniowe Damian Drosiński",
  owner: "Damian Drosiński",
  slogan: "Wykończymy Twój dom, a nie Ciebie!",
  // TODO: domena docelowa (drobud.pl zajęta) — ustawiana przez NEXT_PUBLIC_SITE_URL
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://drobud-wielun.pl").replace(/\/$/, ""),
  // Strona jest indeksowana dopiero po ustawieniu NEXT_PUBLIC_INDEX=1 przy buildzie produkcyjnym.
  indexable: process.env.NEXT_PUBLIC_INDEX === "1",
  phone: "782 120 663",
  phoneHref: "tel:+48782120663",
  email: "drosinski96@wp.pl", // TODO: docelowy adres na wyceny i rezerwacje
  // TODO: potwierdzić adres (FB/Google: Torowa 36, rejestry: Staw 1a)
  address: {
    street: "ul. Torowa 36",
    postalCode: "98-300",
    city: "Wieluń",
    region: "łódzkie",
  },
  geo: { lat: 51.2401621, lng: 18.5514014 },
  nip: "832-208-64-48", // TODO: potwierdzić w CEIDG
  since: 2020,
  // TODO: potwierdzić godziny (Google: jak niżej, Facebook: całą dobę)
  hours: [
    { days: "Poniedziałek – piątek", time: "7:00 – 16:00" },
    { days: "Sobota", time: "8:00 – 12:00" },
    { days: "Niedziela", time: "nieczynne" },
  ],
  social: {
    facebook: "https://www.facebook.com/DroBud.96",
    tiktok: "https://www.tiktok.com/@drobud",
    instagram: "https://www.instagram.com/dro_bud/",
    google:
      "https://www.google.com/maps/place/DroBud+Us%C5%82ugi+wyko%C5%84czeniowe+Damian+Drosi%C5%84ski/",
  },
  stats: [
    { value: "od 2020", label: "na rynku" },
    { value: "100%", label: "poleceń na Facebooku (36 opinii)" },
    { value: "2× 2026", label: "Mistrzowie Budownictwa, woj. łódzkie" },
    { value: "50 km", label: "zasięg od Wielunia" },
  ],
} as const;

export const nav = [
  { href: "/uslugi/", label: "Usługi" },
  { href: "/realizacje/", label: "Realizacje" },
  { href: "/zespol/", label: "Zespół" },
  { href: "/opinie/", label: "Opinie" },
  { href: "/rezerwacja/", label: "Rezerwacja" },
  { href: "/praca/", label: "Praca" },
  { href: "/blog/", label: "Blog" },
  { href: "/kontakt/", label: "Kontakt" },
] as const;

// Marki sprzętu z briefu. Logotypy dodać do public/marki/ po dostarczeniu plików.
export const brands = ["DeWalt", "Mirka", "Starmix", "Makita"] as const;

export const process_ = [
  {
    title: "Zgłoszenie",
    text: "Wysyłasz projekt, zdjęcia i opis prac przez formularz wyceny albo dzwonisz.",
  },
  {
    title: "Oględziny i wycena",
    text: "Oddzwaniamy, w razie potrzeby przyjeżdżamy na miejsce i przygotowujemy wycenę.",
  },
  {
    title: "Termin i ustalenia",
    text: "Ustalamy zakres, materiały i termin rozpoczęcia prac.",
  },
  {
    title: "Realizacja",
    text: "Pracujemy etapami, informujemy o postępach i dbamy o porządek na budowie.",
  },
  {
    title: "Odbiór",
    text: "Przechodzimy razem przez wykonane prace i oddajemy gotowe wnętrze.",
  },
] as const;
