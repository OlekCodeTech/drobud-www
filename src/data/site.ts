// Dane firmy. Pozycje oznaczone TODO czekają na potwierdzenie od klienta.

export const site = {
  name: "DroBud",
  legalName: "„DroBud” Usługi Wykończeniowe Damian Drosiński",
  owner: "Damian Drosiński",
  slogan: "Wykończymy Twój dom, a nie Ciebie!",
  // Domena główna drobudwielun.pl (Hostinger); remontywielun.pl i wykonczeniawielun.pl → 301 (public/.htaccess)
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://drobudwielun.pl").replace(/\/$/, ""),
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
    { value: "10+ lat", label: "doświadczenia" },
    { value: "100%", label: "poleceń na Facebooku (36 opinii)" },
    { value: "Laureat", label: "Mistrzowie Budownictwa 2026" },
    { value: "50 km", label: "zasięg od Wielunia" },
  ],
} as const;

// Artykuł prasowy o firmie (przycisk „Prasa” w hero).
export const press: { url: string; label: string } = {
  url: "https://kulisy.net/artykul/dobra-firma-od-wykonczen-n2396661",
  label: "Kulisy Powiatu: „Dobra firma od wykończeń”",
};

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

// Marki narzędzi i materiałów, na których pracuje ekipa (wg klienta 19.11 i 25.11.2026).
// file — logotyp w public/marki/; bez pliku pokazujemy nazwę (Sendi: brak oficjalnej strony z logo).
export const brands: { name: string; file?: string }[] = [
  { name: "DeWalt", file: "dewalt.svg" },
  { name: "Makita", file: "makita.svg" },
  { name: "Bosch", file: "bosch.svg" },
  { name: "Mirka", file: "mirka.svg" },
  { name: "Starmix", file: "starmix.svg" },
  { name: "Kubala", file: "kubala.svg" },
  { name: "Sendi" },
  { name: "PRO", file: "pro.svg" },
  { name: "Nivel System", file: "nivel.png" },
  { name: "Mapei", file: "mapei.png" },
  { name: "Atlas", file: "atlas.svg" },
];

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
