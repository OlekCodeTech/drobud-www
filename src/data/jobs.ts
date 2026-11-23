// Oferty pracy. Treść z ogłoszenia DroBud (grafika „PRACA”, 23.11.2026).
// Nowa oferta = nowy obiekt; `position` musi odpowiadać opcji w JobForm (forms.tsx).

export type Job = {
  slug: string;
  title: string;
  position: string;
  location: string;
  employment: string[];
  /** Kody schema.org employmentType. */
  employmentType: string[];
  intro: string;
  duties: string[];
  requirements: string[];
  offer: string[];
  datePosted: string;
  validThrough: string;
};

export const jobs: Job[] = [
  {
    slug: "glazurnik",
    title: "Glazurnik",
    position: "Glazurnik",
    location: "Wieluń i okolice",
    employment: ["Umowa o pracę", "Możliwość stażu"],
    employmentType: ["FULL_TIME", "INTERN"],
    intro: "Szukamy pracowników z doświadczeniem na stanowisko glazurnika na terenie Wielunia i okolic.",
    duties: ["Kładzenie glazury", "Fugowanie i silikonowanie", "Samodzielne docinanie płytek"],
    requirements: ["Umiejętność pracy w zespole", "Pracowitość", "Chęć nabywania nowych umiejętności"],
    offer: [
      "Stabilne zatrudnienie w oparciu o umowę o pracę",
      "Atrakcyjne wynagrodzenie",
      "Również możliwość podjęcia stażu",
    ],
    datePosted: "2026-11-23",
    // TODO: przedłużyć albo usunąć ofertę, gdy rekrutacja się zakończy.
    validThrough: "2027-02-28",
  },
];
