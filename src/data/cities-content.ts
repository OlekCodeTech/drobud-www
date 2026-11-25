// Unikalne treści landingów lokalnych (/wykonczenia-wnetrz/[miasto]/).
// Zasady klienta (25.11.2026): bez słowa „remont”, bez montażu drzwi i tapet, LED tylko „przygotowujemy pod”,
// bez tekstów o starym budownictwie i blokach z wielkiej płyty.
//
// Podział fraz (żeby strony się nie kanibalizowały):
// - strona główna: „firma wykończeniowa Wieluń” + marka DroBud,
// - /wykonczenia-wnetrz/wielun/: „wykończenie mieszkania / domu Wieluń”,
// - pozostałe miasta: „wykończenia wnętrz {miasto}” + gminy wokół,
// - /uslugi/*: konkretna usługa — landingi miast tylko linkują do usług, nie powielają ich opisów.
import type { LongContent } from "@/data/services-content";

export type CityContent = LongContent & {
  /** Tytuł strony (meta title, bez sufiksu marki). */
  title: string;
  /** Opis do wyników wyszukiwania. */
  description: string;
  /** Lead pod nagłówkiem H1. */
  lead: string;
  /** Okoliczne miejscowości i gminy obsługiwane przy okazji danego miasta. */
  nearby: string[];
  /** Linki do usług z lokalnym tekstem kotwicy. */
  links: { slug: string; label: string }[];
};

export const cityContent: Record<string, CityContent> = {
  wielun: {
    title: "Wykończenie mieszkania i domu w Wieluniu — pod klucz",
    description:
      "Wykończenie mieszkania i domu w Wieluniu pod klucz: od stanu deweloperskiego do wniesienia mebli. Lokalna ekipa DroBud, szybkie oględziny, osuszacze i sprzątanie na miejscu.",
    lead: "Jesteśmy z Wielunia. Wykańczamy mieszkania i domy w mieście i w gminie Wieluń — od stanu deweloperskiego do dnia, w którym wnosisz meble.",
    nearby: ["Gaszyn", "Ruda", "Bieniec", "Kurów", "Turów", "Czarnożyły", "Biała", "Ostrówek", "Konopnica", "Osjaków"],
    sections: [
      {
        h: "Wykończenie mieszkania w Wieluniu od stanu deweloperskiego",
        p: [
          "Większość naszych zleceń w Wieluniu to mieszkania i domy odebrane w stanie deweloperskim. Ściany są otynkowane, wylewki zrobione, instalacje rozprowadzone — i od tego miejsca przejmujemy prace. Prowadzimy je w stałej kolejności: przygotowanie podłoży, sufity podwieszane, gładzie, łazienka i płytki, malowanie, a na końcu podłogi. Dzięki temu kolejne etapy nie niszczą tego, co zostało już zrobione.",
          "Ponieważ firma ma siedzibę w Wieluniu, na pierwsze oględziny możemy przyjechać szybko, a w trakcie prac łatwo spotkać się na budowie, żeby wspólnie podjąć decyzję o kolorze fugi, układzie płytek czy miejscu przygotowania pod oświetlenie. Dla wielu klientów to najważniejsza różnica w porównaniu z ekipą, która dojeżdża z daleka.",
        ],
      },
      {
        h: "Wykończenie domu w Wieluniu i gminie Wieluń",
        p: [
          "Wokół Wielunia powstaje sporo domów jednorodzinnych — zarówno na obrzeżach miasta, jak i we wsiach gminy, takich jak Gaszyn, Ruda, Bieniec czy Kurów. Dom to zwykle kilka łazienek, duża strefa dzienna i poddasze, więc kluczowe jest dobre zaplanowanie kolejności prac. Ustalamy harmonogram tak, żeby ekipa nie czekała na materiały, a Ty wiedział, kiedy trzeba podjąć kolejne decyzje.",
          "W nowym domu częstym problemem jest wilgoć po tynkach i wylewkach. Zamiast czekać tygodniami, możemy postawić nasze osuszacze — wynajmujemy je właśnie z Wielunia, więc dowóz i odbiór nie stanowią problemu. Po zakończeniu prac zostawiamy dom posprzątany albo, jeśli wolisz, zamawiasz u nas osobne sprzątanie po wykończeniu.",
        ],
      },
      {
        h: "Jak zaczynamy współpracę w Wieluniu",
        p: [
          "Najprościej wysłać przez formularz projekt, rzut lub zdjęcia pomieszczeń z krótkim opisem. Oddzwaniamy, dopytujemy o szczegóły i umawiamy się na miejscu. Na oględzinach mierzymy pomieszczenia, sprawdzamy stan podłoży i rozmawiamy o materiałach. Dopiero wtedy przygotowujemy wycenę, w której widać zakres prac — bez niespodzianek w trakcie.",
          "Jeżeli nie masz jeszcze projektu, pomożemy ułożyć kolejność decyzji: co trzeba wybrać przed startem (płytki, stelaże, odpływy), a co może poczekać (kolory ścian, listwy). To oszczędza czas i nerwy, zwłaszcza przy pierwszym wykańczanym mieszkaniu.",
        ],
      },
    ],
    links: [
      { slug: "wykonczenia-pod-klucz", label: "Wykończenie pod klucz — jak wygląda cały proces" },
      { slug: "wykonczenia-lazienek", label: "Łazienka od surowych ścian do montażu armatury" },
      { slug: "gladzie-polimerowe", label: "Gładzie polimerowe i szlifowanie z odsysaniem pyłu" },
      { slug: "wynajem-osuszaczy", label: "Wynajem osuszaczy z Wielunia" },
      { slug: "sprzatanie", label: "Sprzątanie po wykończeniu" },
    ],
    faq: [
      {
        q: "Ile trwa wykończenie mieszkania w Wieluniu?",
        a: "To zależy od metrażu, zakresu i tego, czy podłoża są suche. Konkretny harmonogram podajemy po oględzinach — razem z kolejnością etapów i momentami, w których potrzebne są Twoje decyzje.",
      },
      {
        q: "Czy w Wieluniu przyjeżdżacie na oględziny przed wyceną?",
        a: "Tak. Po wstępnym zgłoszeniu i rozmowie telefonicznej umawiamy oględziny na miejscu, w mieście lub w gminie Wieluń.",
      },
      {
        q: "Czy można zlecić tylko część prac, np. łazienkę i malowanie?",
        a: "Tak. Wykańczamy całe mieszkania i domy, ale przyjmujemy też zlecenia na wybrane pomieszczenia lub etapy.",
      },
    ],
  },

  praszka: {
    title: "Wykończenia wnętrz Praszka — domy i mieszkania pod klucz",
    description:
      "Wykończenia wnętrz w Praszce i gminach Gorzów Śląski, Rudniki, Radłów. Domy i mieszkania pod klucz, łazienki, gładzie, gres. Ekipa DroBud z Wielunia — wyślij projekt do wyceny.",
    lead: "Praszka to dla nas sąsiedztwo — z Wielunia jesteśmy na miejscu w kilkanaście minut. Wykańczamy domy i mieszkania w mieście oraz w gminie Praszka.",
    nearby: ["Gorzów Śląski", "Rudniki", "Radłów", "Kowale", "Strojec", "Skomlin", "Mokrsko", "Pątnów"],
    sections: [
      {
        h: "Wykończenia wnętrz w Praszce — blisko, choć w innym województwie",
        p: [
          "Praszka leży nad Prosną, już w województwie opolskim, ale dla firmy z Wielunia to najbliższe sąsiedztwo. Granica województw nie ma dla nas znaczenia: obsługujemy klientów z Praszki tak samo jak z Wielunia — z oględzinami na miejscu, ekipą dojeżdżającą codziennie i stałym kontaktem w trakcie prac.",
          "Wykańczamy tu przede wszystkim domy jednorodzinne w mieście i okolicznych wsiach oraz mieszkania. Zakres jest pełny: od pojedynczego pomieszczenia po cały dom pod klucz, łącznie z sufitami podwieszanymi, gładziami, łazienkami, gresem i panelami.",
        ],
      },
      {
        h: "Budujesz dom w gminie Praszka? Zgłoś się na etapie tynków",
        p: [
          "Najwięcej zyskujesz, jeśli odezwiesz się, zanim dom będzie gotowy do wykończenia. Na etapie tynków i wylewek możemy obejrzeć budynek, doradzić, gdzie przygotować miejsca pod oświetlenie w sufitach, i zarezerwować termin. Elektryk i hydraulik wiedzą wtedy, czego potrzebujemy, a my wchodzimy na budowę bez przestojów.",
          "W domach z Praszki i okolic często wykańczamy kilka łazienek naraz — na parterze i na poddaszu. Takie zlecenie planujemy tak, żeby płytki, stelaże i armatura były zamówione z wyprzedzeniem, a prace w obu łazienkach szły równolegle z innymi etapami.",
        ],
      },
      {
        h: "Gorzów Śląski, Rudniki, Radłów — dojeżdżamy do całej okolicy",
        p: [
          "Poza samą Praszką pracujemy w sąsiednich gminach powiatu oleskiego: Gorzowie Śląskim, Rudnikach i Radłowie, a także we wsiach między Praszką a Wieluniem. Dla nas to jedna, wspólna okolica — ekipa dojeżdża tak samo sprawnie, a wycenę przygotowujemy na tych samych zasadach.",
        ],
      },
    ],
    links: [
      { slug: "wykonczenia-pod-klucz", label: "Dom pod klucz w Praszce i okolicy" },
      { slug: "wykonczenia-lazienek", label: "Wykończenie łazienki — zakres prac" },
      { slug: "sufity-podwieszane", label: "Sufity podwieszane i adaptacja poddasza" },
      { slug: "ukladanie-plytek", label: "Układanie gresu i płytek" },
    ],
    faq: [
      {
        q: "Czy dojeżdżacie do Praszki i miejscowości w województwie opolskim?",
        a: "Tak. Pracujemy w Praszce, Gorzowie Śląskim, Rudnikach, Radłowie i okolicznych wsiach — tak samo jak w Wieluniu.",
      },
      {
        q: "Kiedy najlepiej zgłosić się z wykończeniem nowego domu w Praszce?",
        a: "Najlepiej na etapie tynków i wylewek. Możemy wtedy obejrzeć dom, doradzić w sprawie przygotowania pod oświetlenie i zarezerwować termin.",
      },
      {
        q: "Czy wykonujecie kilka łazienek w jednym domu jednocześnie?",
        a: "Tak, planujemy to tak, żeby prace w łazienkach szły równolegle z innymi etapami wykończenia.",
      },
    ],
  },

  wieruszow: {
    title: "Wykończenia wnętrz Wieruszów — dom i mieszkanie pod klucz",
    description:
      "Wykończenia wnętrz w Wieruszowie i powiecie wieruszowskim: Bolesławiec, Galewice, Sokolniki, Czastary, Lututów, Łubnice. Wykończenia domów pod klucz, osuszanie po budowie, łazienki.",
    lead: "Wykańczamy domy i mieszkania w Wieruszowie i w całym powiecie wieruszowskim — od nowych domów we wsiach po mieszkania w mieście.",
    nearby: ["Bolesławiec", "Galewice", "Sokolniki", "Czastary", "Lututów", "Łubnice", "Pątnów"],
    sections: [
      {
        h: "Wykończenia wnętrz w Wieruszowie i powiecie wieruszowskim",
        p: [
          "Wieruszów, położony nad Prosną na zachód od Wielunia, to jedno z miejsc, do których jeździmy regularnie. W samym mieście wykańczamy mieszkania i domy, a w gminach powiatu — Bolesławcu, Galewicach, Sokolnikach, Czastarach, Lututowie i Łubnicach — przede wszystkim nowe domy jednorodzinne.",
          "Pracujemy jako jedna ekipa od początku do końca: nie trzeba szukać osobno glazurnika, malarza i fachowca od sufitów. Odpowiadamy za kolejność prac i za to, żeby kolejne etapy do siebie pasowały.",
        ],
      },
      {
        h: "Nowy dom pod Wieruszowem — wilgoć po budowie i osuszanie",
        p: [
          "W nowym domu wykończenie zaczyna się od pytania, czy tynki i wylewki są już suche. Zbyt wczesne kładzenie gładzi, farb czy paneli kończy się pękaniem, odbarwieniami i wypaczaniem podłóg. Dlatego na początku sprawdzamy wilgotność, a gdy termin goni, proponujemy osuszanie profesjonalnymi osuszaczami.",
          "Osuszacze dowozimy z Wielunia i ustawiamy tak, żeby dom schnął równomiernie. Po osuszeniu przechodzimy płynnie do sufitów, gładzi i łazienek, bez czekania na „naturalne” schnięcie przez całą zimę.",
        ],
      },
      {
        h: "Wykończenie mieszkania w Wieruszowie",
        p: [
          "W mieszkaniach w Wieruszowie najczęściej wykonujemy gładzie z malowaniem, łazienkę z płytkami wielkoformatowymi oraz panele lub gres w strefie dziennej. Szlifujemy z odsysaniem pyłu i zabezpieczamy części wspólne budynku, żeby sąsiedzi nie odczuli prac bardziej, niż to konieczne.",
        ],
      },
    ],
    links: [
      { slug: "wykonczenia-pod-klucz", label: "Wykończenie domu pod klucz" },
      { slug: "wynajem-osuszaczy", label: "Osuszanie nowego domu po budowie" },
      { slug: "gladzie-polimerowe", label: "Gładzie polimerowe" },
      { slug: "panele-podlogowe", label: "Panele podłogowe" },
    ],
    faq: [
      {
        q: "Czy obsługujecie cały powiat wieruszowski?",
        a: "Tak — Wieruszów oraz gminy Bolesławiec, Galewice, Sokolniki, Czastary, Lututów i Łubnice.",
      },
      {
        q: "Czy można przyspieszyć schnięcie nowego domu przed wykończeniem?",
        a: "Tak. Wynajmujemy profesjonalne osuszacze, które dowozimy z Wielunia. Wstępny termin można zarezerwować w kalendarzu na stronie.",
      },
      {
        q: "Czy wykańczacie też mieszkania w Wieruszowie?",
        a: "Tak, wykańczamy zarówno domy jednorodzinne, jak i mieszkania w mieście.",
      },
    ],
  },

  zloczew: {
    title: "Wykończenia wnętrz Złoczew — domy, poddasza, łazienki",
    description:
      "Wykończenia wnętrz w Złoczewie i gminach Burzenin, Brąszewice, Klonowa, Brzeźnio, Ostrówek. Domy pod klucz, adaptacja poddasza, łazienki. Ekipa DroBud z Wielunia.",
    lead: "Złoczew i okolice to głównie domy jednorodzinne. Wykańczamy je pod klucz — razem z poddaszem, łazienkami i strefą dzienną.",
    nearby: ["Burzenin", "Brąszewice", "Klonowa", "Brzeźnio", "Ostrówek", "Konopnica", "Lututów"],
    sections: [
      {
        h: "Kompleksowe wykończenia wnętrz w Złoczewie",
        p: [
          "Złoczew leży na północ od Wielunia, przy drodze ekspresowej S8 w stronę Sieradza. Dojazd jest szybki, dlatego wykańczamy tu domy i mieszkania tak samo sprawnie jak w Wieluniu. Obsługujemy też sąsiednie gminy: Burzenin, Brąszewice, Klonową, Brzeźnio i Ostrówek.",
          "Większość zleceń z tej okolicy to domy jednorodzinne — nowe albo takie, w których właściciele chcą wreszcie wykończyć niezagospodarowaną część budynku. Prowadzimy całość jedną ekipą: od sufitów i gładzi po płytki, malowanie i podłogi.",
        ],
      },
      {
        h: "Poddasze do zagospodarowania w okolicach Złoczewa",
        p: [
          "W wielu domach pod Złoczewem poddasze przez lata zostaje nieużytkowe. Adaptacja poddasza to sposób na dodatkowe sypialnie, pokój dziecka czy gabinet bez rozbudowy domu. Zajmujemy się ociepleniem, zabudową skosów i sufitów, gładziami i malowaniem, a na koniec podłogami — tak, żeby poddasze było gotowe do zamieszkania.",
          "Już na etapie zabudowy przygotowujemy miejsca pod oświetlenie i pod przyszłe meble. Samą instalację elektryczną wykonuje elektryk, ale dzięki wcześniejszym ustaleniom wszystko trafia tam, gdzie powinno.",
        ],
      },
      {
        h: "Wykończenie domu w Złoczewie krok po kroku",
        p: [
          "Pracę zaczynamy od oględzin i ustalenia zakresu. Potem przygotowujemy harmonogram: kiedy wchodzimy z sufitami, kiedy z łazienką, kiedy potrzebne są płytki i armatura. Klient ze Złoczewa czy Burzenina nie musi codziennie przyjeżdżać na budowę — informujemy o postępach i umawiamy się na odbiór kolejnych etapów.",
        ],
      },
    ],
    links: [
      { slug: "sufity-podwieszane", label: "Adaptacja poddasza i sufity podwieszane" },
      { slug: "wykonczenia-pod-klucz", label: "Dom pod klucz — cały proces" },
      { slug: "wykonczenia-lazienek", label: "Łazienka na parterze i na poddaszu" },
      { slug: "malowanie", label: "Malowanie ścian i sufitów" },
    ],
    faq: [
      {
        q: "Czy adaptujecie poddasza w domach pod Złoczewem?",
        a: "Tak. Ocieplamy, zabudowujemy skosy i sufity, wykonujemy gładzie, malowanie i podłogi. Miejsca pod oświetlenie przygotowujemy, a instalację wykonuje elektryk.",
      },
      {
        q: "Do jakich gmin wokół Złoczewa dojeżdżacie?",
        a: "Do Burzenina, Brąszewic, Klonowej, Brzeźnia i Ostrówka oraz do okolicznych wsi.",
      },
      {
        q: "Czy muszę być codziennie na budowie?",
        a: "Nie. Informujemy o postępach i umawiamy się na odbiór kolejnych etapów oraz na decyzje, które wymagają Twojej obecności.",
      },
    ],
  },

  dzialoszyn: {
    title: "Wykończenia wnętrz Działoszyn — mieszkania i domy pod klucz",
    description:
      "Wykończenia wnętrz w Działoszynie i okolicach: Siemkowice, Kiełczygłów, Pajęczno, Wierzchlas. Mieszkania i domy pod klucz, gres wielkoformatowy, łazienki. Wycena po przesłaniu projektu.",
    lead: "Działoszyn nad Wartą to nasza wschodnia okolica. Wykańczamy tu mieszkania i domy jednorodzinne — kompletnie albo wybrane pomieszczenia.",
    nearby: ["Siemkowice", "Kiełczygłów", "Pajęczno", "Wierzchlas", "Pątnów", "Lipie", "Popów"],
    sections: [
      {
        h: "Wykończenia wnętrz w Działoszynie",
        p: [
          "Działoszyn leży nad Wartą, na wschód od Wielunia, w powiecie pajęczańskim. Wykonujemy tu kompleksowe wykończenia mieszkań i domów jednorodzinnych w mieście i w okolicznych gminach: Siemkowicach i Kiełczygłowie, a w stronę Wielunia — w Wierzchlasie i Pątnowie.",
          "Każde zlecenie zaczynamy od rozmowy o tym, jak ma wyglądać wnętrze po zakończeniu prac. Zakres może obejmować wszystko — od sufitów i gładzi, przez łazienkę, po podłogi — albo tylko wybrane etapy, jeśli część prac masz już za sobą.",
        ],
      },
      {
        h: "Duże formaty i spójne wnętrza",
        p: [
          "Coraz więcej klientów z Działoszyna wybiera gres wielkoformatowy na podłogach i ścianach oraz jednolite, jasne wnętrza bez zbędnych podziałów. Takie wykończenie wymaga równych podłoży i precyzji — płyty o dużych wymiarach nie wybaczają krzywych ścian. Dlatego zanim położymy płytki, sprawdzamy i w razie potrzeby wyrównujemy podłoże.",
          "Ten sam nacisk na równe powierzchnie dotyczy ścian i sufitów. Gładzie polimerowe szlifujemy z odsysaniem pyłu, a przed malowaniem sprawdzamy je w świetle bocznym, żeby nie było widać nierówności przy oświetleniu liniowym.",
        ],
      },
      {
        h: "Wykończenie mieszkania w Działoszynie — kolejność prac",
        p: [
          "W mieszkaniu najpierw powstają sufity i gładzie, potem łazienka i płytki, następnie malowanie i na końcu podłogi. Taka kolejność chroni gotowe elementy przed zabrudzeniem i uszkodzeniem. Po zakończeniu prac możesz zamówić u nas sprzątanie, żeby od razu wnieść meble.",
        ],
      },
    ],
    links: [
      { slug: "ukladanie-plytek", label: "Gres wielkoformatowy i płytki" },
      { slug: "gladzie-polimerowe", label: "Gładzie polimerowe pod malowanie" },
      { slug: "wykonczenia-pod-klucz", label: "Mieszkanie pod klucz" },
      { slug: "sprzatanie", label: "Sprzątanie po zakończeniu prac" },
    ],
    faq: [
      {
        q: "Czy układacie gres wielkoformatowy w Działoszynie?",
        a: "Tak. Przed ułożeniem sprawdzamy i w razie potrzeby wyrównujemy podłoże, bo duże płyty wymagają bardzo równych powierzchni.",
      },
      {
        q: "Do jakich miejscowości wokół Działoszyna dojeżdżacie?",
        a: "Do Siemkowic, Kiełczygłowa, Pajęczna, Wierzchlasu, Pątnowa oraz okolicznych wsi.",
      },
      {
        q: "Czy mogę zlecić tylko część wykończenia mieszkania?",
        a: "Tak. Możemy wykonać całość albo wybrane etapy, np. łazienkę i podłogi.",
      },
    ],
  },

  pajeczno: {
    title: "Wykończenia wnętrz Pajęczno — wykończenie domu etapami",
    description:
      "Wykończenia wnętrz w Pajęcznie i powiecie pajęczańskim: Rząśnia, Strzelce Wielkie, Nowa Brzeźnica, Sulmierzyce, Siemkowice. Domy pod klucz lub etapami, łazienki, sufity, gładzie.",
    lead: "Wykańczamy domy i mieszkania w Pajęcznie i całym powiecie pajęczańskim — w całości albo etapami, w rytmie dopasowanym do inwestora.",
    nearby: ["Rząśnia", "Strzelce Wielkie", "Nowa Brzeźnica", "Sulmierzyce", "Siemkowice", "Kiełczygłów", "Działoszyn"],
    sections: [
      {
        h: "Wykończenia wnętrz w Pajęcznie i powiecie pajęczańskim",
        p: [
          "Pajęczno to siedziba powiatu położonego na wschód od Wielunia. Wykańczamy tu mieszkania i domy w mieście oraz w gminach Rząśnia, Strzelce Wielkie, Nowa Brzeźnica, Sulmierzyce, Siemkowice i Kiełczygłów. Do Pajęczna dojeżdżamy z Wielunia regularnie, więc oględziny i kontakt w trakcie prac nie są problemem.",
          "Obsługujemy pełny zakres: sufity podwieszane, gładzie polimerowe, malowanie, łazienki, gres i panele, a także tynki dekoracyjne w strefie dziennej.",
        ],
      },
      {
        h: "Wykończenie domu etapami — gdy nie chcesz robić wszystkiego naraz",
        p: [
          "Nie każdy inwestor wykańcza dom za jednym razem. Częsty scenariusz w okolicach Pajęczna to najpierw parter — kuchnia, salon, łazienka i sypialnia — a poddasze lub kolejne pokoje później. Takie wykończenie etapami planujemy tak, żeby pierwsza część domu była w pełni gotowa do zamieszkania, a kolejne prace nie wymagały poprawiania tego, co już zrobione.",
          "Przy etapowaniu ważne jest, żeby od razu przewidzieć rzeczy wspólne dla całego domu: jednakowy poziom podłóg, przygotowanie pod oświetlenie na korytarzach czy spójne kolory. Ustalamy to na początku, nawet jeśli część pomieszczeń poczeka na swoją kolej.",
        ],
      },
      {
        h: "Jak przygotować się do wyceny",
        p: [
          "Do wyceny wystarczy projekt lub rzut z wymiarami albo zdjęcia pomieszczeń z krótkim opisem tego, co chcesz uzyskać. Napisz też, czy wykańczamy cały dom, czy wybrane etapy. Na tej podstawie oddzwaniamy, dopytujemy i umawiamy oględziny w Pajęcznie lub okolicy.",
        ],
      },
    ],
    links: [
      { slug: "wykonczenia-pod-klucz", label: "Wykończenie domu w całości lub etapami" },
      { slug: "sufity-podwieszane", label: "Sufity podwieszane i poddasze" },
      { slug: "tynki-dekoracyjne", label: "Tynki dekoracyjne w strefie dziennej" },
      { slug: "wykonczenia-lazienek", label: "Wykończenia łazienek" },
    ],
    faq: [
      {
        q: "Czy można wykończyć dom w Pajęcznie etapami?",
        a: "Tak. Planujemy to tak, żeby pierwszy etap był w pełni gotowy do zamieszkania, a kolejne prace nie wymagały poprawek.",
      },
      {
        q: "Czy obsługujecie cały powiat pajęczański?",
        a: "Tak — Pajęczno, Działoszyn oraz gminy Rząśnia, Strzelce Wielkie, Nowa Brzeźnica, Sulmierzyce, Siemkowice i Kiełczygłów.",
      },
      {
        q: "Co przygotować do wyceny?",
        a: "Projekt lub rzut z wymiarami albo zdjęcia pomieszczeń i krótki opis prac. Formularz wyceny pozwala dołączyć pliki.",
      },
    ],
  },

  krzepice: {
    title: "Wykończenia wnętrz Krzepice — łazienki, salony, domy",
    description:
      "Wykończenia wnętrz w Krzepicach i okolicach: Lipie, Opatów, Panki, Przystajń, Popów. Domy i mieszkania pod klucz, łazienki, tynki dekoracyjne. Ekipa DroBud z Wielunia.",
    lead: "Krzepice nad Liswartą to już województwo śląskie, ale wciąż nasza okolica. Wykańczamy tu domy i mieszkania — od łazienki po cały dom.",
    nearby: ["Lipie", "Opatów", "Panki", "Przystajń", "Popów", "Rudniki", "Praszka"],
    sections: [
      {
        h: "Wykończenia wnętrz w Krzepicach",
        p: [
          "Krzepice leżą nad Liswartą, na południe od Wielunia, w powiecie kłobuckim. Mimo że to już województwo śląskie, dla nas to naturalna część obszaru działania. Wykańczamy tu domy jednorodzinne i mieszkania, a także pracujemy w sąsiednich gminach: Lipiu, Opatowie, Pankach, Przystajni i Popowie.",
          "Zlecenia z Krzepic planujemy w dłuższych blokach — ekipa przyjeżdża i pracuje na miejscu do zakończenia danego etapu, zamiast pojawiać się na kilka godzin. Dzięki temu prace idą szybciej, a Ty dokładnie wiesz, kiedy ekipa jest na budowie.",
        ],
      },
      {
        h: "Salon z charakterem: tynki dekoracyjne i oświetlenie liniowe",
        p: [
          "Coraz więcej klientów chce, żeby strefa dzienna nie była po prostu biała. Wykonujemy tynki dekoracyjne i farby strukturalne — na przykład efekt betonu na ścianie z telewizorem albo przy kominku — oraz sufity podwieszane z przygotowaniem pod oświetlenie liniowe. Instalację oświetlenia wykonuje elektryk, a my przygotowujemy pod nią zabudowę.",
          "Takie elementy najlepiej zaplanować na początku, razem z całą resztą wykończenia, żeby wnęki, ściany dekoracyjne i podłogi tworzyły spójną całość.",
        ],
      },
      {
        h: "Łazienka w Krzepicach — od surowych ścian do gotowego wnętrza",
        p: [
          "Łazienkę prowadzimy kompleksowo: hydroizolacja, zabudowy stelaży, płytki, wnęki, przygotowanie pod oświetlenie i biały montaż. Pomagamy też dobrać kolejność zakupów, żeby płytki, odpływ liniowy czy stelaż były na budowie wtedy, kiedy są potrzebne.",
        ],
      },
    ],
    links: [
      { slug: "tynki-dekoracyjne", label: "Tynki dekoracyjne i farby strukturalne" },
      { slug: "sufity-podwieszane", label: "Sufity podwieszane pod oświetlenie liniowe" },
      { slug: "wykonczenia-lazienek", label: "Łazienka kompleksowo" },
      { slug: "wykonczenia-pod-klucz", label: "Dom i mieszkanie pod klucz" },
    ],
    faq: [
      {
        q: "Czy dojeżdżacie do Krzepic w województwie śląskim?",
        a: "Tak. Pracujemy w Krzepicach oraz w Lipiu, Opatowie, Pankach, Przystajni i Popowie.",
      },
      {
        q: "Czy wykonujecie ściany z efektem betonu?",
        a: "Tak, wykonujemy tynki dekoracyjne i farby strukturalne, w tym efekt betonu.",
      },
      {
        q: "Czy montujecie oświetlenie LED w sufitach?",
        a: "Przygotowujemy sufity i wnęki pod oświetlenie. Samą instalację wykonuje elektryk.",
      },
    ],
  },

  olesno: {
    title: "Wykończenia wnętrz Olesno — domy i poddasza pod klucz",
    description:
      "Wykończenia wnętrz w Oleśnie i powiecie oleskim: Gorzów Śląski, Dobrodzień, Radłów, Zębowice. Domy pod klucz, adaptacja poddasza, wycena na podstawie projektu i zdjęć.",
    lead: "Wykańczamy domy i mieszkania w Oleśnie i powiecie oleskim. Wycenę zaczynamy zdalnie — od projektu i zdjęć — a potem przyjeżdżamy na oględziny.",
    nearby: ["Gorzów Śląski", "Radłów", "Dobrodzień", "Zębowice", "Praszka", "Rudniki"],
    sections: [
      {
        h: "Wykończenia wnętrz w Oleśnie i powiecie oleskim",
        p: [
          "Olesno to stolica powiatu oleskiego w województwie opolskim, do którego należy też Praszka — nasz najbliższy sąsiad. Wykańczamy domy i mieszkania w Oleśnie oraz w gminach Gorzów Śląski, Radłów, Dobrodzień i Zębowice.",
          "Zakres prac jest taki sam jak w Wieluniu: kompleksowe wykończenia pod klucz, łazienki, sufity podwieszane, gładzie, malowanie, gres i panele.",
        ],
      },
      {
        h: "Wycena wykończenia bez wychodzenia z domu",
        p: [
          "Klienci z Olesna często zaczynają od przesłania projektu przez formularz na stronie. Do zgłoszenia możesz dołączyć rzuty, wizualizacje i zdjęcia pomieszczeń — na tej podstawie wstępnie oceniamy zakres i oddzwaniamy z pytaniami. Dopiero gdy wiemy, czego dotyczy zlecenie, umawiamy się na oględziny i przygotowujemy dokładną wycenę.",
          "Taki tryb oszczędza czas obu stron: nie jeździsz po kilku wykonawców, a my przyjeżdżamy już przygotowani do rozmowy o konkretach.",
        ],
      },
      {
        h: "Poddasze i kolejne pokoje w domu pod Olesnem",
        p: [
          "W domach jednorodzinnych w powiecie oleskim często zostaje do wykończenia poddasze. Adaptujemy je kompleksowo: ocieplenie, zabudowa skosów i sufitów, gładzie, malowanie i podłogi. Dzięki temu dom zyskuje dodatkowe pokoje bez rozbudowy.",
        ],
      },
    ],
    links: [
      { slug: "sufity-podwieszane", label: "Adaptacja poddasza" },
      { slug: "wykonczenia-pod-klucz", label: "Wykończenie domu pod klucz" },
      { slug: "malowanie", label: "Malowanie domów i mieszkań" },
      { slug: "ukladanie-plytek", label: "Gres i płytki" },
    ],
    faq: [
      {
        q: "Czy mogę wysłać projekt do wyceny bez spotkania?",
        a: "Tak. W formularzu wyceny dołączysz projekt, rzuty lub zdjęcia. Na tej podstawie oddzwaniamy i w razie potrzeby umawiamy oględziny.",
      },
      {
        q: "Czy obsługujecie powiat oleski?",
        a: "Tak — Olesno, Praszkę oraz gminy Gorzów Śląski, Radłów, Dobrodzień, Zębowice i Rudniki.",
      },
      {
        q: "Czy adaptujecie poddasza w domach pod Olesnem?",
        a: "Tak, od ocieplenia i zabudowy skosów po gładzie, malowanie i podłogi.",
      },
    ],
  },

  kluczbork: {
    title: "Wykończenia wnętrz Kluczbork — mieszkania i domy pod klucz",
    description:
      "Wykończenia wnętrz w Kluczborku i okolicach: Byczyna, Wołczyn, Lasowice Wielkie. Mieszkania od dewelopera i domy pod klucz, gładzie, malowanie, łazienki.",
    lead: "Kluczbork to zachodni skraj naszego zasięgu. Wykańczamy tu mieszkania od dewelopera i domy jednorodzinne pod klucz.",
    nearby: ["Byczyna", "Wołczyn", "Lasowice Wielkie", "Praszka", "Gorzów Śląski"],
    sections: [
      {
        h: "Wykończenia wnętrz w Kluczborku",
        p: [
          "Kluczbork leży nad Stobrawą, w województwie opolskim, na skraju obszaru, który obsługujemy z Wielunia. Przyjmujemy tu zlecenia na kompleksowe wykończenia mieszkań i domów oraz pracujemy w sąsiednich gminach: Byczynie, Wołczynie i Lasowicach Wielkich.",
          "Ze względu na odległość zlecenia z Kluczborka planujemy tak, żeby ekipa pracowała na miejscu w pełnych dniach, kolejnymi etapami. Termin rozpoczęcia ustalamy z wyprzedzeniem, a w trakcie prac na bieżąco informujemy o postępach.",
        ],
      },
      {
        h: "Mieszkanie od dewelopera w Kluczborku — gotowe do zamieszkania",
        p: [
          "Mieszkanie w stanie deweloperskim ma gotowe tynki, wylewki i instalacje, ale do zamieszkania brakuje jeszcze wielu etapów. Przejmujemy je wszystkie: sufity, gładzie, łazienkę z płytkami, malowanie i podłogi. Gładzie szlifujemy z odsysaniem pyłu i zabezpieczamy klatkę schodową, co ma znaczenie w budynkach, w których mieszkają już sąsiedzi.",
          "Na koniec możemy posprzątać mieszkanie po wykończeniu, żeby przeprowadzka nie zaczynała się od mycia okien i zbierania pyłu.",
        ],
      },
      {
        h: "Dom jednorodzinny pod Kluczborkiem",
        p: [
          "W domach jednorodzinnych zakres jest szerszy — kilka łazienek, duża strefa dzienna, często poddasze. Przy takich zleceniach szczególnie ważny jest harmonogram i terminy zakupu materiałów. Ustalamy je na początku, żeby ekipa nie czekała na płytki czy armaturę.",
        ],
      },
    ],
    links: [
      { slug: "wykonczenia-pod-klucz", label: "Mieszkanie i dom pod klucz" },
      { slug: "gladzie-polimerowe", label: "Gładzie polimerowe" },
      { slug: "malowanie", label: "Malowanie ścian i sufitów" },
      { slug: "sprzatanie", label: "Sprzątanie po wykończeniu" },
    ],
    faq: [
      {
        q: "Czy przyjmujecie zlecenia w Kluczborku?",
        a: "Tak. Kluczbork, Byczyna, Wołczyn i Lasowice Wielkie są w naszym zasięgu. Zlecenia planujemy tak, żeby ekipa pracowała na miejscu w pełnych dniach.",
      },
      {
        q: "Czy wykańczacie mieszkania od dewelopera w Kluczborku?",
        a: "Tak — sufity, gładzie, łazienkę, malowanie i podłogi, a na koniec możemy posprzątać mieszkanie.",
      },
      {
        q: "Jak wcześnie trzeba zarezerwować termin?",
        a: "Im wcześniej, tym łatwiej dopasować termin. Wstępną rezerwację możesz zgłosić przez kalendarz na stronie, a my potwierdzamy ją telefonicznie.",
      },
    ],
  },

  kepno: {
    title: "Wykończenia wnętrz Kępno — dom pod klucz, podłogi, łazienki",
    description:
      "Wykończenia wnętrz w Kępnie i powiecie kępińskim: Baranów, Bralin, Łęka Opatowska, Trzcinica, Rychtal, Perzów. Domy pod klucz, podłogi w jodełkę, łazienki.",
    lead: "Wykańczamy domy i mieszkania w Kępnie i powiecie kępińskim — z dbałością o detale, takie jak podłogi w jodełkę i łazienki z dużych formatów.",
    nearby: ["Baranów", "Bralin", "Łęka Opatowska", "Trzcinica", "Rychtal", "Perzów", "Bolesławiec"],
    sections: [
      {
        h: "Wykończenia wnętrz w Kępnie i powiecie kępińskim",
        p: [
          "Kępno, w województwie wielkopolskim, leży na zachód od Wieruszowa. Wykańczamy tu domy jednorodzinne i mieszkania w mieście oraz w gminach Baranów, Bralin, Łęka Opatowska, Trzcinica, Rychtal i Perzów.",
          "Przy każdym zleceniu prowadzimy całość jedną ekipą — od pierwszej warstwy gładzi po ostatnią listwę przypodłogową — i odpowiadamy za to, żeby kolejne etapy do siebie pasowały.",
        ],
      },
      {
        h: "Podłogi w jodełkę i spójne wykończenie domu",
        p: [
          "Klienci z okolic Kępna często wybierają podłogi w jodełkę — z paneli albo z płytek drewnopodobnych — oraz jednolite podłogi przechodzące przez całą strefę dzienną. Taki układ wymaga starannego rozplanowania: ustalenia osi, przejść między pomieszczeniami i miejsc, w których jodełka spotyka się z płytkami w kuchni czy w łazience.",
          "Planujemy to razem z resztą wykończenia, żeby poziomy podłóg się zgadzały, a listwy i progi nie psuły efektu.",
        ],
      },
      {
        h: "Dom pod klucz w okolicach Kępna — od czego zacząć",
        p: [
          "Najlepiej zacząć od przesłania projektu lub rzutu domu i listy pomieszczeń do wykończenia. Na tej podstawie ustalamy zakres i umawiamy oględziny. Pomagamy też ustalić kolejność zakupów — co trzeba wybrać przed startem prac, a co może poczekać.",
        ],
      },
    ],
    links: [
      { slug: "panele-podlogowe", label: "Panele podłogowe, także w jodełkę" },
      { slug: "ukladanie-plytek", label: "Płytki drewnopodobne i gres" },
      { slug: "wykonczenia-pod-klucz", label: "Dom pod klucz" },
      { slug: "wykonczenia-lazienek", label: "Wykończenia łazienek" },
    ],
    faq: [
      {
        q: "Czy dojeżdżacie do Kępna i gmin powiatu kępińskiego?",
        a: "Tak — Kępno oraz Baranów, Bralin, Łęka Opatowska, Trzcinica, Rychtal i Perzów.",
      },
      {
        q: "Czy układacie podłogi w jodełkę?",
        a: "Tak, zarówno z paneli, jak i z płytek drewnopodobnych.",
      },
      {
        q: "Jak zacząć współpracę?",
        a: "Wyślij projekt lub rzut i listę pomieszczeń przez formularz wyceny. Oddzwonimy i umówimy oględziny.",
      },
    ],
  },

  sieradz: {
    title: "Wykończenia wnętrz Sieradz — mieszkania od dewelopera i domy",
    description:
      "Wykończenia wnętrz w Sieradzu i okolicach: Brzeźnio, Burzenin, Wróblew, Warta, Złoczew. Mieszkania od dewelopera pod klucz, domy, sprzątanie przed przeprowadzką.",
    lead: "Sieradz to największe miasto w naszym zasięgu. Wykańczamy tu mieszkania w nowych inwestycjach i domy jednorodzinne pod klucz.",
    nearby: ["Brzeźnio", "Burzenin", "Wróblew", "Warta", "Złoczew", "Brąszewice"],
    sections: [
      {
        h: "Wykończenia wnętrz w Sieradzu",
        p: [
          "Sieradz, położony nad Wartą, to największe miasto, do którego dojeżdżamy z Wielunia. Wykańczamy tu mieszkania w nowych inwestycjach i domy jednorodzinne na obrzeżach miasta, a także pracujemy w gminach Brzeźnio, Burzenin, Wróblew i Warta.",
          "W większym mieście łatwiej o wybór wykonawców, dlatego stawiamy na to, co klienci cenią w DroBud najbardziej: jedną ekipę od początku do końca, porządek na budowie i stały kontakt.",
        ],
      },
      {
        h: "Mieszkanie od dewelopera w Sieradzu — od odbioru do przeprowadzki",
        p: [
          "Po odbiorze mieszkania od dewelopera zostaje wiele decyzji i etapów. Przejmujemy je wszystkie: sufity podwieszane z przygotowaniem pod oświetlenie, gładzie polimerowe, łazienkę z płytkami, malowanie i podłogi. Prace prowadzimy w kolejności, która chroni gotowe elementy przed zniszczeniem.",
          "W budynkach wielorodzinnych pamiętamy o sąsiadach: szlifujemy z odsysaniem pyłu, zabezpieczamy klatkę schodową i windę, a głośne prace planujemy w rozsądnych godzinach.",
        ],
      },
      {
        h: "Sprzątanie przed przeprowadzką i osuszanie",
        p: [
          "Na koniec możemy posprzątać mieszkanie lub dom po wykończeniu — usunąć pył, umyć okna i podłogi — żeby przeprowadzka zaczęła się od czystego wnętrza. Jeżeli w nowym domu pod Sieradzem wilgoć po tynkach i wylewkach opóźnia prace, możemy też dowieźć osuszacze.",
        ],
      },
    ],
    links: [
      { slug: "wykonczenia-pod-klucz", label: "Mieszkanie od dewelopera pod klucz" },
      { slug: "sufity-podwieszane", label: "Sufity podwieszane" },
      { slug: "sprzatanie", label: "Sprzątanie przed przeprowadzką" },
      { slug: "wynajem-osuszaczy", label: "Osuszanie po budowie" },
    ],
    faq: [
      {
        q: "Czy wykańczacie mieszkania od dewelopera w Sieradzu?",
        a: "Tak — od sufitów i gładzi, przez łazienkę, po malowanie i podłogi. Na koniec możemy posprzątać mieszkanie.",
      },
      {
        q: "Do jakich miejscowości wokół Sieradza dojeżdżacie?",
        a: "Do Brzeźnia, Burzenina, Wróblewa, Warty, Złoczewa i okolicznych wsi.",
      },
      {
        q: "Czy dbacie o części wspólne budynku podczas prac?",
        a: "Tak. Szlifujemy z odsysaniem pyłu i zabezpieczamy klatkę schodową oraz windę.",
      },
    ],
  },
};
