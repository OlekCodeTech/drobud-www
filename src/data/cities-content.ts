// Unikalne treści landingów lokalnych. Wersja robocza — uzupełnić o lokalne realizacje i opinie.
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
          "DroBud to lokalna firma — siedzibę mamy w Wieluniu i to tutaj wykonujemy najwięcej realizacji. Wykańczamy nowe domy na osiedlach domów jednorodzinnych, mieszkania w blokach i kamienicach w centrum oraz lokale usługowe. Dzięki temu, że jesteśmy na miejscu, na oględziny możemy podjechać szybko, a w trakcie prac łatwo o bieżący kontakt.",
          "W Wieluniu wykonujemy pełen zakres usług: wykończenia pod klucz, łazienki, sufity podwieszane, adaptacje poddaszy, gładzie polimerowe i malowanie, tynki dekoracyjne, gres i panele. Tutaj również najłatwiej zarezerwować osuszacze i sprzątanie.",
        ],
      },
      {
        h: "Remont mieszkania w Wieluniu — bloki, kamienice, nowe budownictwo",
        p: [
          "Remont w bloku wymaga innego podejścia niż wykończenie nowego domu. W starszych budynkach trzeba liczyć się z nierównymi ścianami, wieloma warstwami starych farb i ograniczeniami w godzinach głośnych prac. Planujemy roboty tak, aby jak najmniej uciążliwe były dla sąsiadów, a szlifowanie wykonujemy z odsysaniem pyłu.",
          "W nowych mieszkaniach i domach w stanie deweloperskim zaczynamy od sprawdzenia tynków i wylewek, a następnie prowadzimy prace etapami aż do odbioru.",
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
          "Praszka leży tuż za granicą województwa opolskiego, niedaleko Wielunia, dlatego należy do miejscowości, w których pracujemy regularnie. Realizujemy tu wykończenia domów jednorodzinnych w mieście i w okolicznych wsiach oraz remonty mieszkań w blokach.",
          "Dla klientów z Praszki wykonujemy ten sam zakres prac co w Wieluniu: od pojedynczej łazienki po wykończenie całego domu pod klucz. Dojazd nie wpływa na organizację prac — ekipa pracuje na miejscu w ustalonym rytmie aż do zakończenia zlecenia.",
        ],
      },
      {
        h: "Remont łazienki i mieszkania w Praszce",
        p: [
          "Najczęstsze zlecenia z Praszki i okolic to kompleksowe remonty łazienek, gładzie z malowaniem oraz wykończenia nowych domów. Jeżeli budujesz dom w gminie Praszka, Rudniki lub Gorzów Śląski, zgłoś się jeszcze na etapie tynków — łatwiej wtedy zaplanować termin i kolejność prac.",
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
          "Wieruszów i okoliczne gminy to obszar, w którym powstaje wiele nowych domów jednorodzinnych. Wykańczamy je pod klucz, a także prowadzimy remonty mieszkań i domów w samym mieście. Obsługujemy cały powiat wieruszowski: Galewice, Sokolniki, Czastary, Bolesławiec, Lututów i Łubnice.",
          "Wykonujemy łazienki, gładzie, malowanie, układanie płytek i paneli, montaż drzwi oraz zabudowy z płyt gipsowo-kartonowych, w tym sufity z oświetleniem liniowym i zabudowy kominkowe.",
        ],
      },
      {
        h: "Wykończenie domu pod klucz w okolicach Wieruszowa",
        p: [
          "Przy wykańczaniu nowego domu ważne jest, żeby ekipa weszła na budowę w odpowiednim momencie — po wyschnięciu tynków i wylewek. Jeżeli terminy gonią, możemy przyspieszyć schnięcie osuszaczami i przejść do kolejnych etapów bez ryzyka dla podłóg i drzwi.",
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
        h: "Wykończenia i remonty w Złoczewie",
        p: [
          "Złoczew leży na północ od Wielunia, przy trasie w kierunku Sieradza. Wykonujemy tu remonty domów i mieszkań oraz wykończenia nowych budynków w mieście i sąsiednich gminach: Burzenin, Brąszewice, Klonowa, Brzeźnio i Ostrówek.",
          "W starszych domach często łączymy kilka prac w jedno zlecenie: remont łazienki, nowe gładzie i malowanie, wymianę podłóg i drzwi. Dzięki temu remont przebiega sprawnie i nie trzeba koordynować kilku wykonawców.",
        ],
      },
      {
        h: "Remont domu w Złoczewie i okolicach",
        p: [
          "Przy remontach starszych budynków zaczynamy od oceny stanu ścian, podłóg i instalacji w zakresie, który ma wpływ na prace wykończeniowe. Pozwala to uniknąć niespodzianek w trakcie i rzetelnie określić zakres robót przed rozpoczęciem.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy wykonujecie remonty starszych domów w okolicach Złoczewa?",
        a: "Tak. Remontujemy starsze domy i mieszkania, łącząc w jednym zleceniu łazienki, gładzie, podłogi i drzwi.",
      },
    ],
  },
  dzialoszyn: {
    nearby: ["Pajęczno", "Siemkowice", "Kiełczygłów", "Lipie", "Popów", "Wierzchlas", "Pątnów"],
    sections: [
      {
        h: "Wykończenia wnętrz w Działoszynie",
        p: [
          "Działoszyn położony jest nad Wartą, na wschód od Wielunia. Wykonujemy tu remonty mieszkań w blokach oraz wykończenia i remonty domów jednorodzinnych w mieście i okolicznych miejscowościach: w gminach Siemkowice, Kiełczygłów, Lipie i Popów.",
          "Dla mieszkańców Działoszyna realizujemy pełen zakres prac wykończeniowych, a także wynajem osuszaczy i sprzątanie po remoncie.",
        ],
      },
      {
        h: "Remont mieszkania w bloku w Działoszynie",
        p: [
          "Remonty mieszkań w blokach to najczęściej łazienka, kuchnia, gładzie i podłogi. W takich mieszkaniach szczególnie ważne jest ograniczenie pyłu i hałasu oraz dobre zabezpieczenie klatki schodowej. Szlifujemy z odsysaniem pyłu i dbamy o porządek w częściach wspólnych.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy remontujecie mieszkania w blokach w Działoszynie?",
        a: "Tak. Wykonujemy remonty łazienek i całych mieszkań, z ograniczeniem pyłu i dbałością o części wspólne budynku.",
      },
    ],
  },
  pajeczno: {
    nearby: ["Działoszyn", "Siemkowice", "Kiełczygłów", "Rząśnia", "Strzelce Wielkie", "Nowa Brzeźnica", "Sulmierzyce"],
    sections: [
      {
        h: "Wykończenia wnętrz w Pajęcznie i powiecie pajęczańskim",
        p: [
          "W Pajęcznie i okolicznych gminach wykańczamy nowe domy jednorodzinne oraz remontujemy mieszkania i domy. Obsługujemy powiat pajęczański: Działoszyn, Siemkowice, Kiełczygłów, Rząśnię, Strzelce Wielkie, Nową Brzeźnicę i Sulmierzyce.",
          "Zakres prac obejmuje łazienki pod klucz, gładzie i malowanie, płytki, podłogi, drzwi, sufity podwieszane i zabudowy na wymiar.",
        ],
      },
      {
        h: "Wykończenie nowego domu w okolicach Pajęczna",
        p: [
          "Jeżeli kończysz budowę domu, zgłoś się z wyprzedzeniem — najlepiej, gdy trwają jeszcze tynki lub wylewki. Pozwoli to dopasować termin wejścia ekipy do stanu budowy i zamówić materiały o dłuższym czasie dostawy, takie jak drzwi czy płytki wielkoformatowe.",
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
          "Krzepice leżą na południe od Wielunia, już w województwie śląskim. Dojeżdżamy tu do klientów z miasta oraz z gmin Lipie, Opatów, Panki i Przystajń. Wykonujemy wykończenia domów pod klucz, remonty łazienek oraz prace malarskie i glazurnicze.",
          "Każde zlecenie zaczynamy od rozmowy i zapoznania się z projektem lub zdjęciami. Przy większych realizacjach przyjeżdżamy na oględziny, żeby dokładnie określić zakres prac.",
        ],
      },
      {
        h: "Łazienki i zabudowy G-K w Krzepicach i okolicach",
        p: [
          "W domach jednorodzinnych najczęściej realizujemy łazienki z prysznicem bez brodzika, sufity podwieszane z oświetleniem LED oraz zabudowy kominkowe i telewizyjne w salonach. To prace, które najlepiej zaplanować razem — wtedy linie zabudów, płytek i oświetlenia tworzą spójną całość.",
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
          "W Oleśnie i w powiecie oleskim wykonujemy wykończenia nowych domów oraz remonty mieszkań i domów. Pracujemy także w Gorzowie Śląskim, Praszce, Radłowie, Rudnikach i Dobrodzieniu.",
          "Realizujemy kompleksowe łazienki, gładzie i malowanie, układanie płytek, podłogi, montaż drzwi, sufity podwieszane oraz adaptacje poddaszy.",
        ],
      },
      {
        h: "Remont i wykończenie domu w okolicach Olesna",
        p: [
          "Przy remontach domów z poddaszem użytkowym często łączymy ocieplenie skosów z zabudową i wykończeniem pomieszczeń na górze. Jedna ekipa wykonuje wtedy izolację, płyty, gładzie i malowanie, a na życzenie również łazienkę na poddaszu.",
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
          "Kluczbork znajduje się na granicy naszego obszaru działania. Przyjmujemy tu przede wszystkim większe zlecenia: wykończenia domów i mieszkań pod klucz oraz kompleksowe remonty, w których ekipa pracuje na miejscu przez dłuższy czas. Obsługujemy także Byczynę, Wołczyn i Lasowice Wielkie.",
          "Wykonujemy łazienki, gładzie, malowanie, płytki, podłogi, drzwi oraz zabudowy z płyt gipsowo-kartonowych.",
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
        a: "Tak, szczególnie kompleksowe wykończenia i większe remonty. O mniejsze prace prosimy pytać telefonicznie.",
      },
    ],
  },
  kepno: {
    nearby: ["Baranów", "Bralin", "Łęka Opatowska", "Trzcinica", "Rychtal", "Perzów"],
    sections: [
      {
        h: "Wykończenia wnętrz w Kępnie i powiecie kępińskim",
        p: [
          "Kępno leży na zachód od Wielunia, w województwie wielkopolskim. Dojeżdżamy tu oraz do gmin Baranów, Bralin, Łęka Opatowska i Trzcinica. Realizujemy wykończenia nowych domów i mieszkań pod klucz oraz kompleksowe remonty.",
          "W okolicach Kępna powstaje dużo nowych domów jednorodzinnych — wykańczamy je od stanu deweloperskiego: łazienki, podłogi, drzwi, zabudowy, gładzie i malowanie.",
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
        a: "Tak. Realizujemy w Kępnie i okolicach przede wszystkim wykończenia pod klucz i większe remonty.",
      },
    ],
  },
  sieradz: {
    nearby: ["Brzeźnio", "Burzenin", "Wróblew", "Warta", "Złoczew"],
    sections: [
      {
        h: "Wykończenia wnętrz w Sieradzu",
        p: [
          "Sieradz to największe miasto w naszym zasięgu. Wykańczamy tu mieszkania w nowych inwestycjach i domy jednorodzinne, a także prowadzimy kompleksowe remonty. Pracujemy również w okolicznych gminach: Brzeźnio, Burzenin i Wróblew.",
          "Zakres usług obejmuje wykończenia pod klucz, łazienki, gładzie i malowanie, układanie płytek, podłogi i drzwi oraz zabudowy G-K z oświetleniem.",
        ],
      },
      {
        h: "Wykończenie mieszkania od dewelopera w Sieradzu",
        p: [
          "Mieszkanie w stanie deweloperskim wymaga wykonania łazienki, podłóg, drzwi, gładzi i malowania, a często także zabudów i oświetlenia. Prowadzimy takie realizacje od odbioru kluczy do momentu, w którym można wnosić meble, a na koniec możemy posprzątać lokal po pracach.",
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
