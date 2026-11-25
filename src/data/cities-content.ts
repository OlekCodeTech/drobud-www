// Unikalne treści landingów lokalnych. Wersja robocza — uzupełnić o lokalne realizacje i opinie.
// Zasady klienta (25.11.2026): bez słowa „remont”, bez montażu drzwi i zabudów G-K — mówimy o kompleksowych wykończeniach.
import type { LongContent } from "@/data/services-content";

export type CityContent = LongContent & {
  /** Okoliczne miejscowości i gminy obsługiwane przy okazji danego miasta. */
  nearby: string[];
};

export const cityContent: Record<string, CityContent> = {
  wielun: {
    nearby: ["Czarnożyły", "Biała", "Mokrsko", "Skomlin", "Wierzchlas", "Pątnów", "Ostrówek", "Konopnica", "Osjaków"],
    sections: [
      {
        h: "Firma wykończeniowa z Wielunia",
        p: [
          "DroBud to lokalna firma — działamy w Wieluniu i to tutaj wykonujemy najwięcej realizacji. Wykańczamy nowe domy na osiedlach domów jednorodzinnych, mieszkania w stanie deweloperskim oraz lokale usługowe. Dzięki temu, że jesteśmy na miejscu, na oględziny możemy podjechać szybko, a w trakcie prac łatwo o bieżący kontakt.",
          "W Wieluniu wykonujemy pełen zakres usług: kompleksowe wykończenia pod klucz, łazienki, sufity podwieszane, adaptacje poddaszy, gładzie polimerowe, malowanie, tynki dekoracyjne, gres i panele. Tutaj również najłatwiej zarezerwować osuszacze i sprzątanie.",
        ],
      },
      {
        h: "Wykończenie mieszkania w Wieluniu",
        p: [
          "W nowych mieszkaniach i domach w stanie deweloperskim zaczynamy od sprawdzenia tynków i wylewek, a następnie prowadzimy prace etapami aż do odbioru. Szlifujemy z odsysaniem pyłu i dbamy o porządek na budowie, co szczególnie doceniają klienci w budynkach wielorodzinnych.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy w Wieluniu przyjeżdżacie na oględziny przed wyceną?",
        a: "Tak. Po wstępnym zgłoszeniu i rozmowie telefonicznej w razie potrzeby umawiamy oględziny na miejscu.",
      },
    ],
  },
  praszka: {
    nearby: ["Gorzów Śląski", "Rudniki", "Radłów", "Skomlin", "Mokrsko", "Pątnów"],
    sections: [
      {
        h: "Wykończenia wnętrz w Praszce i gminie Praszka",
        p: [
          "Praszka leży tuż za granicą województwa opolskiego, niedaleko Wielunia, dlatego należy do miejscowości, w których pracujemy regularnie. Realizujemy tu kompleksowe wykończenia domów jednorodzinnych w mieście i w okolicznych wsiach oraz mieszkań.",
          "Dla klientów z Praszki wykonujemy ten sam zakres prac co w Wieluniu: od pojedynczej łazienki po wykończenie całego domu pod klucz. Ekipa pracuje na miejscu w ustalonym rytmie aż do zakończenia zlecenia.",
        ],
      },
      {
        h: "Wykończenie łazienki i domu w Praszce",
        p: [
          "Najczęstsze zlecenia z Praszki i okolic to kompleksowe wykończenia łazienek, gładzie z malowaniem oraz wykończenia nowych domów. Jeżeli budujesz dom w gminie Praszka, Rudniki lub Gorzów Śląski, zgłoś się jeszcze na etapie tynków — łatwiej wtedy zaplanować termin i kolejność prac.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy dojeżdżacie do Praszki i miejscowości w województwie opolskim?",
        a: "Tak. Pracujemy w Praszce, Gorzowie Śląskim, Rudnikach i okolicznych miejscowościach.",
      },
    ],
  },
  wieruszow: {
    nearby: ["Galewice", "Sokolniki", "Czastary", "Bolesławiec", "Lututów", "Łubnice"],
    sections: [
      {
        h: "Wykończenia wnętrz w Wieruszowie i powiecie wieruszowskim",
        p: [
          "Wieruszów i okoliczne gminy to obszar, w którym powstaje wiele nowych domów jednorodzinnych. Wykańczamy je pod klucz, a także wykańczamy mieszkania w samym mieście. Obsługujemy cały powiat wieruszowski: Galewice, Sokolniki, Czastary, Bolesławiec, Lututów i Łubnice.",
          "Wykonujemy łazienki, gładzie polimerowe, malowanie, układanie gresu i paneli oraz sufity podwieszane przygotowane pod oświetlenie liniowe.",
        ],
      },
      {
        h: "Wykończenie domu pod klucz w okolicach Wieruszowa",
        p: [
          "Przy wykańczaniu nowego domu ważne jest, żeby ekipa weszła na budowę w odpowiednim momencie — po wyschnięciu tynków i wylewek. Jeżeli terminy gonią, możemy przyspieszyć schnięcie osuszaczami i przejść do kolejnych etapów bez ryzyka dla podłóg.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy obsługujecie cały powiat wieruszowski?",
        a: "Tak, pracujemy w Wieruszowie oraz w gminach Galewice, Sokolniki, Czastary, Bolesławiec, Lututów i Łubnice.",
      },
    ],
  },
  zloczew: {
    nearby: ["Burzenin", "Brąszewice", "Klonowa", "Brzeźnio", "Lututów", "Ostrówek", "Konopnica"],
    sections: [
      {
        h: "Kompleksowe wykończenia w Złoczewie",
        p: [
          "Złoczew leży na północ od Wielunia, przy trasie w kierunku Sieradza. Wykonujemy tu kompleksowe wykończenia domów i mieszkań w mieście i sąsiednich gminach: Burzenin, Brąszewice, Klonowa, Brzeźnio i Ostrówek.",
          "Często łączymy kilka prac w jedno zlecenie: łazienkę, gładzie i malowanie, sufity podwieszane oraz podłogi. Dzięki temu wykończenie przebiega sprawnie i nie trzeba koordynować kilku wykonawców.",
        ],
      },
      {
        h: "Wykończenie domu w Złoczewie i okolicach",
        p: [
          "Przed rozpoczęciem prac oceniamy stan ścian i podłóg w zakresie, który ma wpływ na wykończenie. Pozwala to uniknąć niespodzianek w trakcie i rzetelnie określić zakres robót przed rozpoczęciem.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy wykańczacie domy w okolicach Złoczewa?",
        a: "Tak. Wykańczamy domy i mieszkania, łącząc w jednym zleceniu łazienki, gładzie, sufity i podłogi.",
      },
    ],
  },
  dzialoszyn: {
    nearby: ["Pajęczno", "Siemkowice", "Kiełczygłów", "Lipie", "Popów", "Wierzchlas", "Pątnów"],
    sections: [
      {
        h: "Wykończenia wnętrz w Działoszynie",
        p: [
          "Działoszyn położony jest nad Wartą, na wschód od Wielunia. Wykonujemy tu kompleksowe wykończenia mieszkań i domów jednorodzinnych w mieście i okolicznych miejscowościach: w gminach Siemkowice, Kiełczygłów, Lipie i Popów.",
          "Dla mieszkańców Działoszyna realizujemy pełen zakres prac wykończeniowych, a także wynajem osuszaczy i sprzątanie.",
        ],
      },
      {
        h: "Wykończenie mieszkania w Działoszynie",
        p: [
          "Wykończenie mieszkania to najczęściej łazienka, kuchnia, gładzie i podłogi. W budynkach wielorodzinnych szczególnie ważne jest ograniczenie pyłu i hałasu oraz dobre zabezpieczenie klatki schodowej. Szlifujemy z odsysaniem pyłu i dbamy o porządek w częściach wspólnych.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy wykańczacie mieszkania w Działoszynie?",
        a: "Tak. Wykańczamy łazienki i całe mieszkania, z ograniczeniem pyłu i dbałością o części wspólne budynku.",
      },
    ],
  },
  pajeczno: {
    nearby: ["Działoszyn", "Siemkowice", "Kiełczygłów", "Rząśnia", "Strzelce Wielkie", "Nowa Brzeźnica", "Sulmierzyce"],
    sections: [
      {
        h: "Wykończenia wnętrz w Pajęcznie i powiecie pajęczańskim",
        p: [
          "W Pajęcznie i okolicznych gminach kompleksowo wykańczamy nowe domy jednorodzinne i mieszkania. Obsługujemy powiat pajęczański: Działoszyn, Siemkowice, Kiełczygłów, Rząśnię, Strzelce Wielkie, Nową Brzeźnicę i Sulmierzyce.",
          "Zakres prac obejmuje łazienki pod klucz, gładzie i malowanie, gres, panele, sufity podwieszane i adaptacje poddaszy.",
        ],
      },
      {
        h: "Wykończenie nowego domu w okolicach Pajęczna",
        p: [
          "Jeżeli kończysz budowę domu, zgłoś się z wyprzedzeniem — najlepiej, gdy trwają jeszcze tynki lub wylewki. Pozwoli to dopasować termin wejścia ekipy do stanu budowy i zamówić materiały o dłuższym czasie dostawy, takie jak płytki wielkoformatowe.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy dojeżdżacie do Pajęczna i okolicznych gmin?",
        a: "Tak, pracujemy w Pajęcznie i w całym powiecie pajęczańskim.",
      },
    ],
  },
  krzepice: {
    nearby: ["Lipie", "Opatów", "Panki", "Przystajń", "Rudniki"],
    sections: [
      {
        h: "Wykończenia wnętrz w Krzepicach",
        p: [
          "Krzepice leżą na południe od Wielunia, już w województwie śląskim. Dojeżdżamy tu do klientów z miasta oraz z gmin Lipie, Opatów, Panki i Przystajń. Wykonujemy wykończenia domów pod klucz, łazienki oraz prace malarskie i glazurnicze.",
          "Każde zlecenie zaczynamy od rozmowy i zapoznania się z projektem lub zdjęciami. Przy większych realizacjach przyjeżdżamy na oględziny, żeby dokładnie określić zakres prac.",
        ],
      },
      {
        h: "Łazienki i sufity podwieszane w Krzepicach i okolicach",
        p: [
          "W domach jednorodzinnych najczęściej realizujemy łazienki z prysznicem bez brodzika oraz sufity podwieszane przygotowane pod oświetlenie LED. To prace, które najlepiej zaplanować razem — wtedy linie sufitów, płytek i oświetlenia tworzą spójną całość.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy pracujecie w województwie śląskim?",
        a: "Tak, dojeżdżamy do Krzepic oraz do miejscowości w gminach Lipie, Opatów, Panki i Przystajń.",
      },
    ],
  },
  olesno: {
    nearby: ["Gorzów Śląski", "Praszka", "Radłów", "Rudniki", "Dobrodzień", "Zębowice"],
    sections: [
      {
        h: "Wykończenia wnętrz w Oleśnie i powiecie oleskim",
        p: [
          "W Oleśnie i w powiecie oleskim wykonujemy kompleksowe wykończenia nowych domów i mieszkań. Pracujemy także w Gorzowie Śląskim, Praszce, Radłowie, Rudnikach i Dobrodzieniu.",
          "Realizujemy kompleksowe łazienki, gładzie i malowanie, układanie gresu, panele, sufity podwieszane oraz adaptacje poddaszy.",
        ],
      },
      {
        h: "Adaptacja poddasza w okolicach Olesna",
        p: [
          "W domach z poddaszem użytkowym często łączymy ocieplenie z wykończeniem pomieszczeń na górze. Jedna ekipa wykonuje wtedy izolację, sufity, gładzie i malowanie, dzięki czemu poddasze szybko staje się gotowe do zamieszkania.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy dojeżdżacie do Olesna?",
        a: "Tak. Pracujemy w Oleśnie i okolicznych miejscowościach powiatu oleskiego.",
      },
    ],
  },
  kluczbork: {
    nearby: ["Byczyna", "Wołczyn", "Lasowice Wielkie"],
    sections: [
      {
        h: "Wykończenia wnętrz w Kluczborku",
        p: [
          "Kluczbork znajduje się na granicy naszego obszaru działania. Przyjmujemy tu przede wszystkim większe zlecenia: kompleksowe wykończenia domów i mieszkań pod klucz, w których ekipa pracuje na miejscu przez dłuższy czas. Obsługujemy także Byczynę, Wołczyn i Lasowice Wielkie.",
          "Wykonujemy łazienki, gładzie, malowanie, gres, panele oraz sufity podwieszane.",
        ],
      },
      {
        h: "Wykończenie mieszkania pod klucz w Kluczborku",
        p: [
          "Przy wykończeniu mieszkania w stanie deweloperskim ustalamy z inwestorem zakres, materiały i harmonogram, a następnie prowadzimy prace etapami. O postępach informujemy na bieżąco, dzięki czemu nie trzeba codziennie przyjeżdżać na budowę.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy przyjmujecie zlecenia z Kluczborka?",
        a: "Tak, szczególnie kompleksowe wykończenia pod klucz. O mniejsze prace prosimy pytać telefonicznie.",
      },
    ],
  },
  kepno: {
    nearby: ["Baranów", "Bralin", "Łęka Opatowska", "Trzcinica", "Rychtal", "Perzów"],
    sections: [
      {
        h: "Wykończenia wnętrz w Kępnie i powiecie kępińskim",
        p: [
          "Kępno leży na zachód od Wielunia, w województwie wielkopolskim. Dojeżdżamy tu oraz do gmin Baranów, Bralin, Łęka Opatowska i Trzcinica. Realizujemy kompleksowe wykończenia nowych domów i mieszkań pod klucz.",
          "W okolicach Kępna powstaje dużo nowych domów jednorodzinnych — wykańczamy je od stanu deweloperskiego: łazienki, sufity, gładzie, malowanie, gres i panele.",
        ],
      },
      {
        h: "Dom pod klucz w okolicach Kępna",
        p: [
          "Przy większych realizacjach poza Wieluniem planujemy prace tak, aby ekipa pracowała w sposób ciągły, bez przestojów. Wymaga to wcześniejszego uzgodnienia materiałów i terminów dostaw, dlatego zachęcamy do kontaktu z wyprzedzeniem.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy dojeżdżacie do Kępna?",
        a: "Tak. Realizujemy w Kępnie i okolicach przede wszystkim kompleksowe wykończenia pod klucz.",
      },
    ],
  },
  sieradz: {
    nearby: ["Brzeźnio", "Burzenin", "Wróblew", "Warta", "Złoczew"],
    sections: [
      {
        h: "Wykończenia wnętrz w Sieradzu",
        p: [
          "Sieradz to największe miasto w naszym zasięgu. Wykańczamy tu mieszkania w nowych inwestycjach i domy jednorodzinne. Pracujemy również w okolicznych gminach: Brzeźnio, Burzenin i Wróblew.",
          "Zakres usług obejmuje kompleksowe wykończenia pod klucz, łazienki, gładzie i malowanie, układanie gresu, panele oraz sufity podwieszane przygotowane pod oświetlenie.",
        ],
      },
      {
        h: "Wykończenie mieszkania od dewelopera w Sieradzu",
        p: [
          "Mieszkanie w stanie deweloperskim wymaga wykonania łazienki, podłóg, gładzi i malowania, a często także sufitów podwieszanych. Prowadzimy takie realizacje od odbioru kluczy do momentu, w którym można wnosić meble, a na koniec możemy posprzątać lokal po pracach.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy wykańczacie mieszkania deweloperskie w Sieradzu?",
        a: "Tak, wykańczamy mieszkania i domy w stanie deweloperskim w Sieradzu i okolicach.",
      },
    ],
  },
};
