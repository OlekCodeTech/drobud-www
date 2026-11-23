// Rozbudowane treści usług pod SEO. Wersja robocza — do akceptacji przez klienta.
// Bez cen, terminów i gwarancji: te informacje dopisać dopiero po potwierdzeniu u Damiana.

export type LongContent = {
  sections: { h: string; p: string[] }[];
  faq: { q: string; a: string }[];
};

export const longContent: Record<string, LongContent> = {
  "wykonczenia-pod-klucz": {
    sections: [
      {
        h: "Wykończenie pod klucz w Wieluniu — co to oznacza w praktyce",
        p: [
          "Wykończenie pod klucz to usługa, w której jedna ekipa prowadzi mieszkanie lub dom od stanu deweloperskiego do momentu, w którym można wnieść meble. Zamiast szukać osobno glazurnika, malarza, montażysty drzwi i ekipy od zabudów, zlecasz całość jednemu wykonawcy. Odpowiadamy wtedy za kolejność prac, ich jakość i za to, żeby poszczególne etapy do siebie pasowały.",
          "W DroBud wykończenia pod klucz realizujemy w Wieluniu i w promieniu około 50 km. Pracujemy w domach jednorodzinnych, mieszkaniach w blokach i kamienicach oraz w lokalach usługowych. Zakres ustalamy indywidualnie: możemy wykończyć cały budynek albo wybrane pomieszczenia, na przykład łazienki i strefę dzienną.",
        ],
      },
      {
        h: "Jakie prace wchodzą w zakres wykończenia",
        p: [
          "Typowe wykończenie domu lub mieszkania obejmuje przygotowanie ścian i sufitów (gładzie, szlifowanie, gruntowanie), malowanie, układanie płytek w łazienkach i kuchni, montaż podłóg, listew i drzwi wewnętrznych, zabudowy z płyt gipsowo-kartonowych, sufity podwieszane oraz biały montaż. Coraz częściej dochodzą do tego zabudowy kominkowe, ściany telewizyjne i oświetlenie liniowe.",
          "Jeżeli masz projekt wnętrz od architekta, pracujemy według niego. Jeżeli projektu nie ma, pomagamy uporządkować decyzje: co trzeba ustalić przed rozpoczęciem, w jakiej kolejności zamawiać materiały i na co zwrócić uwagę przy wyborze płytek, paneli czy drzwi.",
        ],
      },
      {
        h: "Kolejność prac przy wykończeniu domu i mieszkania",
        p: [
          "Dobra kolejność prac oszczędza czas i pozwala uniknąć poprawek. Najpierw wykonuje się prace mokre i brudne: wyrównanie ścian, zabudowy G-K, gładzie i szlifowanie. Następnie przychodzi czas na płytki, pierwsze malowanie, podłogi i drzwi, a na końcu biały montaż, listwy, ostatnie malowanie i poprawki.",
          "Przed układaniem podłóg i montażem drzwi ważna jest wilgotność tynków i wylewek. W razie potrzeby osuszamy pomieszczenia własnymi osuszaczami, dzięki czemu kolejne etapy mogą ruszyć bez ryzyka dla materiałów. Po zakończeniu prac możemy też posprzątać lokal, tak aby był gotowy do wprowadzenia.",
        ],
      },
      {
        h: "Od czego zależy koszt wykończenia pod klucz",
        p: [
          "Na koszt wykończenia wpływa przede wszystkim metraż, liczba łazienek, standard materiałów i stopień skomplikowania projektu. Duże formaty płytek, zabudowy na wymiar, sufity z oświetleniem liniowym czy tynki dekoracyjne wymagają więcej pracy niż rozwiązania standardowe. Znaczenie ma też stan wyjściowy: równe tynki i wylewki pozwalają zacząć szybciej.",
          "Dlatego wycenę przygotowujemy indywidualnie. Najłatwiej zacząć od przesłania projektu lub rzutu, kilku zdjęć i opisu oczekiwań przez formularz wyceny. Oddzwaniamy, dopytujemy o szczegóły i w razie potrzeby umawiamy oględziny.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy wykańczacie mieszkania od dewelopera?",
        a: "Tak. Wykończenie mieszkania lub domu w stanie deweloperskim to jedno z najczęstszych zleceń. Warto zgłosić się jeszcze przed odbiorem kluczy, żeby zaplanować termin.",
      },
      {
        q: "Czy mogę zlecić tylko część prac?",
        a: "Tak. Wykonujemy zarówno kompleksowe wykończenia, jak i pojedyncze etapy: samą łazienkę, gładzie i malowanie, podłogi albo zabudowy G-K.",
      },
      {
        q: "Czy pracujecie według projektu architekta wnętrz?",
        a: "Tak. Projekt można dołączyć do formularza wyceny w formacie PDF lub jako zdjęcia.",
      },
    ],
  },

  "remonty-lazienek": {
    sections: [
      {
        h: "Remont łazienki w Wieluniu od A do Z",
        p: [
          "Łazienka to najbardziej wymagające pomieszczenie w domu: na kilku metrach spotykają się instalacje, hydroizolacja, płytki, zabudowy i biały montaż. Dlatego remont łazienki najlepiej zlecić ekipie, która wykona wszystkie etapy i odpowiada za efekt końcowy. W DroBud robimy łazienki kompleksowo — od skucia starych płytek lub surowych ścian po zamontowaną armaturę i silikon.",
          "Wykonujemy łazienki w nowych domach i mieszkaniach oraz remonty w starszym budownictwie, w tym w blokach z wielkiej płyty, gdzie trzeba poradzić sobie z nierównymi ścianami i ograniczoną przestrzenią. Realizujemy też łazienki na poddaszach, ze skosami i oknami dachowymi.",
        ],
      },
      {
        h: "Co wykonujemy w łazience",
        p: [
          "Zakres prac obejmuje przygotowanie podłoża, hydroizolację stref mokrych, zabudowę stelaży podtynkowych, wnęki i półki z płyt G-K, układanie płytek ściennych i podłogowych, fugowanie oraz montaż wyposażenia: misek podwieszanych, umywalek, wanien, kabin i odpływów liniowych. Na życzenie wykonujemy podświetlenia LED we wnękach, pod zabudowami i za lustrami.",
          "Pracujemy z płytkami w różnych formatach — od mozaiki po płyty wielkoformatowe. Narożniki zewnętrzne szlifujemy pod kątem, dzięki czemu nie potrzeba listew, a krawędzie wyglądają czysto. Dbamy o rozplanowanie płytek tak, aby cięcia wypadały symetrycznie i w mało widocznych miejscach.",
        ],
      },
      {
        h: "Prysznic bez brodzika, wanna wolnostojąca, duże formaty",
        p: [
          "Nowoczesne łazienki to najczęściej prysznic typu walk-in z odpływem liniowym, wanna wolnostojąca, płytki imitujące marmur lub beton oraz zabudowane stelaże z wnękami. Takie rozwiązania wymagają dokładnego wykonania spadków, szczelnej hydroizolacji i precyzyjnego cięcia płytek — to prace, w których doświadczenie widać najbardziej.",
          "Jeżeli masz zdjęcia inspiracji, dołącz je do zapytania. Na ich podstawie łatwiej ocenić, które rozwiązania sprawdzą się w Twojej łazience i jak przygotować instalacje przed rozpoczęciem prac.",
        ],
      },
      {
        h: "Jak przygotować się do remontu łazienki",
        p: [
          "Przed rozpoczęciem prac warto mieć wybrane płytki, ceramikę i armaturę albo przynajmniej ich wymiary — od nich zależy rozmieszczenie podejść wodnych i wysokość zabudów. Dobrze jest też ustalić układ oświetlenia i gniazd. Jeżeli nie masz projektu, pomożemy rozrysować podstawowe ustalenia podczas oględzin.",
          "Koszt remontu łazienki zależy od metrażu, formatu płytek, liczby zabudów i zakresu prac instalacyjnych. Wycenę przygotowujemy po zapoznaniu się ze zdjęciami lub po oględzinach na miejscu.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy remontujecie łazienki w blokach?",
        a: "Tak. Remontujemy łazienki w blokach i kamienicach, również małe, w których liczy się dobre rozplanowanie zabudów i wyposażenia.",
      },
      {
        q: "Czy wykonujecie prysznic z odpływem liniowym?",
        a: "Tak. Wykonujemy prysznice bez brodzika z odpływem liniowym, ze spadkami i hydroizolacją strefy mokrej.",
      },
      {
        q: "Czy układacie płytki wielkoformatowe?",
        a: "Tak, pracujemy z dużymi formatami, w tym z płytami imitującymi marmur.",
      },
      {
        q: "Czy trzeba mieć projekt łazienki?",
        a: "Nie jest konieczny, ale bardzo pomaga. Wystarczą zdjęcia inspiracji i lista wybranego wyposażenia — resztę ustalimy podczas oględzin.",
      },
    ],
  },

  "gladzie-i-malowanie": {
    sections: [
      {
        h: "Gładzie polimerowe i malowanie — Wieluń i okolice",
        p: [
          "Równe, gładkie ściany to podstawa każdego wnętrza. Nawet najlepsza farba nie ukryje nierówności, rys i źle wykończonych narożników — przy świetle padającym z boku widać wszystko. Dlatego do gładzi podchodzimy jak do osobnego rzemiosła: nakładamy je warstwami, kontrolujemy płaszczyzny i szlifujemy do momentu, w którym powierzchnia jest gotowa pod malowanie.",
          "Wykonujemy gładzie i malowanie w nowych domach i mieszkaniach oraz podczas remontów. Zajmujemy się także odświeżaniem pojedynczych pomieszczeń, klatek schodowych, biur i lokali usługowych w Wieluniu i okolicznych miejscowościach.",
        ],
      },
      {
        h: "Dlaczego gładzie polimerowe",
        p: [
          "Gładzie polimerowe to gotowe masy wykończeniowe, które dają bardzo gładką powierzchnię pod malowanie. Dobrze się szlifują, a dzięki drobnemu ziarnu pozwalają uzyskać ściany i sufity bez widocznych przejść i nierówności — także w pomieszczeniach doświetlonych dużymi przeszkleniami, gdzie boczne światło bezlitośnie pokazuje każdą niedoskonałość.",
          "Rodzaj gładzi dobieramy do podłoża i pomieszczenia. Na nowych tynkach i płytach gipsowo-kartonowych zwykle wystarczą cienkie warstwy, a na starych, nierównych ścianach najpierw wyrównujemy podłoże, a dopiero potem nakładamy warstwę wykończeniową.",
        ],
      },
      {
        h: "Szlifowanie z odsysaniem pyłu",
        p: [
          "Największą uciążliwością przy gładziach jest pył. Pracujemy na profesjonalnych szlifierkach podłączonych do odkurzaczy przemysłowych, które zbierają pył bezpośrednio przy tarczy. Dzięki temu w pomieszczeniu jest go znacznie mniej, a powierzchnia wychodzi równiejsza niż przy szlifowaniu ręcznym.",
          "Ma to szczególne znaczenie przy remontach w zamieszkałych mieszkaniach i domach. Mniej pyłu to mniej sprzątania, mniejsze ryzyko zabrudzenia mebli i szybsze przejście do malowania.",
        ],
      },
      {
        h: "Malowanie ścian i sufitów",
        p: [
          "Po przygotowaniu podłoża gruntujemy ściany i malujemy je farbami dobranymi do pomieszczenia — innymi do salonu, innymi do kuchni i łazienki, gdzie liczy się odporność na wilgoć i zmywanie. Zajmujemy się również obróbką wnęk okiennych i futryn po wymianie okien lub drzwi, naprawą pęknięć i uzupełnianiem ubytków przed malowaniem.",
          "Jeżeli zależy Ci na ścianie z charakterem, zobacz też nasze tynki dekoracyjne i farby strukturalne.",
        ],
      },
      {
        h: "Od czego zależy cena gładzi i malowania",
        p: [
          "Koszt zależy od powierzchni ścian i sufitów, stanu podłoża oraz liczby warstw potrzebnych do uzyskania równej powierzchni. Nowe tynki wymagają zwykle mniej pracy niż stare ściany z wieloma warstwami farby. Na cenę wpływa też wysokość pomieszczeń i liczba narożników, wnęk i skosów.",
          "Żeby otrzymać wycenę, podaj metraż pomieszczeń i dołącz kilka zdjęć ścian. Na tej podstawie ocenimy zakres prac.",
        ],
      },
    ],
    faq: [
      {
        q: "Czym różni się gładź polimerowa od gipsowej?",
        a: "Gładź polimerowa to gotowa masa o drobnym ziarnie, która daje bardzo gładką powierzchnię i dobrze się szlifuje. Rodzaj gładzi dobieramy do podłoża i oczekiwanego efektu.",
      },
      {
        q: "Czy szlifowanie gładzi bardzo pyli?",
        a: "Szlifujemy mechanicznie z odsysaniem pyłu do odkurzacza przemysłowego, dzięki czemu pyłu jest znacznie mniej niż przy szlifowaniu ręcznym.",
      },
      {
        q: "Czy wykonujecie gładzie na starych ścianach?",
        a: "Tak. Przed nałożeniem gładzi oceniamy stan podłoża, usuwamy słabe warstwy i naprawiamy pęknięcia.",
      },
      {
        q: "Czy można zlecić samo malowanie?",
        a: "Tak, malujemy mieszkania, domy i lokale także bez wykonywania gładzi, jeżeli ściany są w dobrym stanie.",
      },
    ],
  },

  "tynki-dekoracyjne": {
    sections: [
      {
        h: "Tynki dekoracyjne w Wieluniu i okolicach",
        p: [
          "Tynk dekoracyjny zmienia zwykłą ścianę w element wystroju. Sprawdza się na ścianie za telewizorem, przy kominku, w korytarzu, w sypialni za zagłówkiem łóżka, a także w lokalach usługowych, gdzie wnętrze ma przyciągać uwagę klientów. Wykonujemy tynki dekoracyjne w domach, mieszkaniach i lokalach w Wieluniu oraz w promieniu około 50 km.",
          "Ścianę dekoracyjną najlepiej zaplanować razem z oświetleniem — światło padające z góry lub z boku wydobywa fakturę i sprawia, że ściana wygląda inaczej o różnych porach dnia.",
        ],
      },
      {
        h: "Efekt betonu, kamienia i faktury strukturalne",
        p: [
          "Najczęściej wykonywane dekoracje to efekt betonu architektonicznego, powierzchnie przypominające kamień lub trawertyn oraz delikatne, matowe faktury w ciepłych odcieniach. Farby strukturalne pozwalają uzyskać subtelną fakturę na dużych powierzchniach, bez efektu „ciężkiej” ściany.",
          "Przed wykonaniem dekoracji pokazujemy próbkę faktury i koloru, żeby uniknąć rozczarowań. Efekt zależy od techniki nakładania, dlatego każdą ścianę wykonujemy ręcznie, z dbałością o krawędzie i narożniki.",
        ],
      },
      {
        h: "Przygotowanie podłoża",
        p: [
          "Tynk dekoracyjny wymaga równego, nośnego i zagruntowanego podłoża. Na nowych ścianach zwykle wystarczy gładź i grunt, na starych trzeba najpierw usunąć słabe warstwy i wyrównać powierzchnię. Dobrze przygotowane podłoże to warunek trwałości dekoracji.",
        ],
      },
      {
        h: "Od czego zależy koszt ściany dekoracyjnej",
        p: [
          "Na koszt wpływa powierzchnia, rodzaj materiału dekoracyjnego, liczba warstw oraz stan podłoża. Inaczej wycenia się pojedynczą ścianę akcentową, a inaczej dekorację całego pomieszczenia. Wyślij zdjęcie ściany i inspirację, a przygotujemy wycenę.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy tynk dekoracyjny nadaje się do łazienki?",
        a: "Część materiałów dekoracyjnych można stosować w pomieszczeniach wilgotnych, ale nie w bezpośrednim kontakcie z wodą. Dobór materiału omawiamy przy wycenie.",
      },
      {
        q: "Czy mogę zobaczyć efekt przed wykonaniem całej ściany?",
        a: "Tak, przed rozpoczęciem prac ustalamy fakturę i kolor na próbce.",
      },
    ],
  },

  "ukladanie-plytek": {
    sections: [
      {
        h: "Glazurnik Wieluń — układanie płytek ściennych i podłogowych",
        p: [
          "Układanie płytek to praca, w której liczy się dokładność na każdym etapie: przygotowanie podłoża, rozplanowanie, cięcie, klejenie i fugowanie. Źle położonych płytek nie da się łatwo poprawić, dlatego warto powierzyć je ekipie, która zajmuje się tym na co dzień. Układamy płytki w łazienkach, kuchniach, salonach, korytarzach, na schodach i tarasach.",
          "Działamy w Wieluniu i okolicach. Płytki układamy jako samodzielną usługę oraz w ramach remontu łazienki lub wykończenia pod klucz.",
        ],
      },
      {
        h: "Gres, glazura, mozaika i duże formaty",
        p: [
          "Pracujemy z glazurą ścienną, gresem podłogowym, gresem polerowanym, mozaiką i płytkami wielkoformatowymi. Każdy materiał wymaga innego podejścia: duże formaty potrzebują bardzo równego podłoża i systemu poziomowania, mozaika — starannego fugowania, a gres polerowany — ostrożności przy cięciu i transporcie.",
          "Przed rozpoczęciem układania rozplanowujemy płytki na ścianach i podłodze, żeby cięcia były symetryczne, a fugi ścienne i podłogowe trafiały na siebie tam, gdzie przewiduje to projekt.",
        ],
      },
      {
        h: "Detale, które decydują o efekcie",
        p: [
          "O jakości pracy glazurnika świadczą detale: narożniki zewnętrzne zeszlifowane pod kątem, równe fugi, czyste otwory pod gniazda i podejścia wodne, równa płaszczyzna bez uskoków między płytkami. Na te elementy zwracamy szczególną uwagę, bo to one są widoczne na co dzień.",
          "W strefach mokrych wykonujemy hydroizolację pod płytkami, a dylatacje i styki z ceramiką wykańczamy silikonem dobranym kolorystycznie do fugi.",
        ],
      },
      {
        h: "Ile płytek kupić i jak przygotować podłoże",
        p: [
          "Przy zakupie płytek warto doliczyć zapas na cięcia i ewentualne uszkodzenia — jego wielkość zależy od formatu i sposobu układania. Przy układzie po przekątnej lub w jodełkę zapas musi być większy niż przy układzie prostym. Podczas oględzin pomagamy policzyć potrzebną ilość.",
          "Podłoże pod płytki powinno być równe, nośne i suche. Jeżeli ściany lub wylewki wymagają wyrównania, wykonujemy je przed układaniem. Wycenę przygotowujemy na podstawie metrażu, formatu płytek i stanu podłoża.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy układacie płytki na schodach?",
        a: "Tak, układamy płytki na schodach wewnętrznych, łącznie z obróbką krawędzi stopni.",
      },
      {
        q: "Czy wykonujecie narożniki bez listew?",
        a: "Tak. Narożniki zewnętrzne szlifujemy pod kątem, co pozwala zrezygnować z listew narożnych.",
      },
      {
        q: "Czy pomagacie obliczyć ilość płytek?",
        a: "Tak, podczas oględzin pomagamy policzyć potrzebną ilość płytek, kleju i fugi z odpowiednim zapasem.",
      },
    ],
  },

  "podlogi-i-drzwi": {
    sections: [
      {
        h: "Układanie paneli i montaż drzwi w Wieluniu",
        p: [
          "Podłoga i drzwi to elementy, które zamykają wykończenie wnętrza. Montuje się je pod koniec prac, gdy ściany są już pomalowane, a w pomieszczeniach nie ma wilgoci technologicznej. Układamy panele podłogowe, montujemy listwy przypodłogowe oraz drzwi wewnętrzne z ościeżnicami — jako osobne zlecenie albo jako etap wykończenia pod klucz.",
          "Pracujemy w domach, mieszkaniach i lokalach usługowych w Wieluniu oraz okolicznych miejscowościach.",
        ],
      },
      {
        h: "Panele podłogowe — przygotowanie podłoża i montaż",
        p: [
          "Trwałość podłogi zależy w dużej mierze od podłoża. Wylewka musi być równa, czysta i sucha — zbyt wilgotna powoduje pęcznienie paneli i rozchodzenie się zamków. Przed montażem sprawdzamy podłoże, w razie potrzeby wyrównujemy je i dobieramy odpowiedni podkład, także do ogrzewania podłogowego.",
          "Panele układamy z zachowaniem dylatacji przy ścianach i w przejściach, a następnie montujemy listwy przypodłogowe. Dbamy o kierunek układania względem światła i o estetyczne docięcia przy ościeżnicach i progach.",
        ],
      },
      {
        h: "Montaż drzwi wewnętrznych",
        p: [
          "Montujemy drzwi wewnętrzne przylgowe i bezprzylgowe, z ościeżnicami regulowanymi i stałymi. Prawidłowy montaż oznacza równe szczeliny, płynne zamykanie i brak ocierania skrzydła. Przed zamówieniem drzwi warto sprawdzić wymiary otworów i grubość ścian — pomagamy w tym podczas oględzin.",
          "Po montażu obrabiamy styki ościeżnic ze ścianą, tak aby nie były potrzebne dodatkowe poprawki malarskie.",
        ],
      },
      {
        h: "Kiedy można układać podłogi po wylewkach",
        p: [
          "Świeże wylewki i tynki oddają wilgoć przez wiele tygodni. Układanie paneli lub montaż drzwi na zbyt mokrym podłożu to jedna z najczęstszych przyczyn późniejszych reklamacji. Jeżeli terminy są napięte, proces można przyspieszyć osuszaczami — wynajmujemy je i dobieramy ich liczbę do powierzchni.",
          "Wycenę montażu przygotowujemy na podstawie metrażu podłóg, liczby drzwi i stanu podłoża.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy układacie panele na ogrzewaniu podłogowym?",
        a: "Tak. Dobieramy podkład przeznaczony do ogrzewania podłogowego i sprawdzamy wilgotność wylewki przed montażem.",
      },
      {
        q: "Czy montujecie drzwi kupione przez klienta?",
        a: "Tak, montujemy drzwi i ościeżnice dostarczone przez klienta.",
      },
      {
        q: "Czy montujecie listwy przypodłogowe?",
        a: "Tak, montaż listew wykonujemy razem z układaniem podłogi.",
      },
    ],
  },

  "sufity-podwieszane": {
    sections: [
      {
        h: "Sufity podwieszane i zabudowy G-K — Wieluń",
        p: [
          "Płyty gipsowo-kartonowe pozwalają kształtować wnętrze: obniżyć sufit, ukryć instalacje, postawić ściankę działową, wykonać wnękę, półkę albo zabudowę na wymiar. To jedna z najbardziej uniwersalnych technik wykończeniowych, ale wymaga solidnego stelaża i starannego spoinowania — inaczej na łączeniach pojawiają się pęknięcia.",
          "Wykonujemy zabudowy G-K w domach, mieszkaniach i lokalach w Wieluniu i okolicach, zarówno według projektów wnętrz, jak i na podstawie ustaleń z klientem.",
        ],
      },
      {
        h: "Sufity podwieszane i oświetlenie liniowe",
        p: [
          "Sufit podwieszany pozwala ukryć przewody, rekuperację i nierówności stropu, a przy okazji zaplanować oświetlenie. Wykonujemy sufity jedno- i wielopoziomowe, z wnękami na taśmy LED, oczkami oraz profilami pod oświetlenie liniowe, które tworzy we wnętrzu cienkie świetlne linie na suficie i ścianach.",
          "Oświetlenie liniowe wymaga precyzyjnego osadzenia profili i idealnie równych krawędzi. Planujemy je razem z układem pomieszczenia, tak aby linie światła zgadzały się z zabudowami, meblami i podziałami płytek.",
        ],
      },
      {
        h: "Zabudowy kominkowe i ściany telewizyjne",
        p: [
          "Zabudowa kominka lub biokominka oraz ściana RTV to często główny element salonu. Wykonujemy zabudowy z wnękami, półkami i podświetleniem, przygotowane pod okładziny: płytki wielkoformatowe, spieki, lamele lub tynk dekoracyjny. Przy zabudowach kominkowych stosujemy materiały przeznaczone do pracy w wysokiej temperaturze.",
          "W zabudowie telewizyjnej ukrywamy przewody i przygotowujemy miejsca na gniazda, tak aby po zawieszeniu telewizora nie było widać okablowania.",
        ],
      },
      {
        h: "Ścianki działowe i zabudowa poddasza",
        p: [
          "Ścianki z płyt G-K pozwalają szybko zmienić układ pomieszczeń — wydzielić garderobę, spiżarnię czy dodatkowy pokój. Wypełniamy je wełną mineralną, co poprawia izolacyjność akustyczną. Na poddaszach wykonujemy zabudowę skosów razem z ociepleniem.",
          "Koszt zabudowy zależy od powierzchni, stopnia skomplikowania konstrukcji i liczby detali. Do wyceny najlepiej dołączyć projekt lub szkic z wymiarami.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy wykonujecie sufity z oświetleniem liniowym?",
        a: "Tak. Osadzamy profile pod oświetlenie liniowe w sufitach i ścianach oraz wykonujemy wnęki pod taśmy LED.",
      },
      {
        q: "Czy robicie zabudowy kominkowe?",
        a: "Tak, wykonujemy zabudowy kominków i biokominków przygotowane pod wybraną okładzinę.",
      },
      {
        q: "Czy ścianka z płyt G-K dobrze tłumi dźwięk?",
        a: "Ścianki wypełniamy wełną mineralną, co wyraźnie poprawia izolacyjność akustyczną w porównaniu z pustą konstrukcją.",
      },
    ],
  },

  "adaptacja-poddasza": {
    sections: [
      {
        h: "Adaptacja poddasza w Wieluniu i okolicach",
        p: [
          "Nieużytkowy strych to często kilkadziesiąt metrów kwadratowych, które można zamienić w sypialnie, gabinet, pokój dla dzieci albo łazienkę. Adaptacja poddasza pozwala powiększyć dom bez rozbudowy. Prowadzimy ją kompleksowo: od ocieplenia, przez zabudowę skosów i ścianek, po gładzie, podłogi i łazienkę.",
          "Wykonujemy adaptacje poddaszy w nowych domach, w których poddasze zostało w stanie surowym, oraz w starszych budynkach, gdzie strych do tej pory służył jako magazyn.",
        ],
      },
      {
        h: "Ocieplenie poddasza krok po kroku",
        p: [
          "Izolację układa się zwykle w dwóch warstwach: pierwszą między krokwiami, drugą pod nimi, na stelażu. Druga warstwa zakrywa krokwie, które są mostkami termicznymi. Następnie montuje się folię paroizolacyjną, która chroni ocieplenie przed wilgocią z wnętrza, i dopiero na niej wykonuje zabudowę z płyt G-K.",
          "Kluczowe są szczelność i ciągłość izolacji: dokładne dopasowanie materiału, brak szczelin przy murłatach, oknach dachowych i kominach oraz starannie sklejona paroizolacja. Dobrze ocieplone poddasze jest ciepłe zimą i nie przegrzewa się latem.",
        ],
      },
      {
        h: "Zabudowa skosów, ścianek i sufitów",
        p: [
          "Po ociepleniu wykonujemy zabudowę skosów i sufitów, ścianki kolankowe i działowe. Na tym etapie planujemy wnęki, schowki w ściankach kolankowych, oświetlenie i miejsca na gniazda. Poddasze to także dobre miejsce na sufity z oświetleniem liniowym, które optycznie porządkują przestrzeń ze skosami.",
        ],
      },
      {
        h: "Wykończenie poddasza pod klucz",
        p: [
          "Następnie wykonujemy gładzie, malowanie, podłogi i drzwi, a na poddaszach często także łazienki — ze skosami, oknami dachowymi i zabudowami na wymiar. Dzięki temu, że wszystkie etapy prowadzi jedna ekipa, poddasze jest gotowe do zamieszkania bez koordynowania kilku wykonawców.",
          "Koszt adaptacji zależy od powierzchni, geometrii dachu, liczby okien dachowych i zakresu wykończenia. Wycenę przygotowujemy po przesłaniu projektu lub zdjęć poddasza i podaniu przybliżonej powierzchni.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy adaptujecie poddasza w starszych domach?",
        a: "Tak. Wykonujemy ocieplenie, zabudowę i wykończenie podczas adaptacji strychów na poddasza użytkowe.",
      },
      {
        q: "Czy w ramach adaptacji wykonujecie łazienkę na poddaszu?",
        a: "Tak, łazienki na poddaszach ze skosami i oknami dachowymi to jedne z naszych częstych realizacji.",
      },
    ],
  },

  "wynajem-osuszaczy": {
    sections: [
      {
        h: "Nowy dom nie schnie? A może zalał Cię sąsiad?",
        p: [
          "Świeże tynki i wylewki potrafią schnąć tygodniami, szczególnie jesienią i zimą. Po zalaniu mieszkania wilgoć wnika w ściany i posadzki, a każdy dzień zwłoki zwiększa ryzyko pleśni i zniszczeń. W obu przypadkach rozwiązaniem jest profesjonalne osuszanie. Wynajmujemy osuszacze budowlane w Wieluniu i w promieniu około 50 km.",
          "Termin można wstępnie zarezerwować w kalendarzu na stronie. Po otrzymaniu zgłoszenia oddzwaniamy, potwierdzamy dostępność i ustalamy szczegóły.",
        ],
      },
      {
        h: "Profesjonalne osuszacze budowlane",
        p: [
          "Pracujemy na kondensacyjnych osuszaczach budowlanych Climative DHP-50 PRO. To urządzenia przeznaczone na budowy: według danych producenta usuwają do 50 litrów wody na dobę, a przepływ powietrza wynosi do 450 m³/h. Mają kółka i uchwyt, więc łatwo przestawić je między pomieszczeniami.",
          "Liczbę urządzeń i czas wynajmu dobieramy do powierzchni, grubości wylewek i stopnia zawilgocenia.",
        ],
      },
      {
        h: "Osuszanie po budowie — tynki i wylewki",
        p: [
          "Świeże tynki i wylewki zawierają dużo wody, która musi odparować, zanim można układać podłogi, montować drzwi czy malować. Samo ogrzewanie bez odbierania wilgoci niewiele pomaga. Osuszacz kondensacyjny zbiera wodę z powietrza i pozwala kontrolować tempo schnięcia.",
          "Zbyt wczesne ułożenie paneli, parkietu lub montaż drzwi na wilgotnym podłożu kończy się pęcznieniem, odkształceniami i pleśnią. Osuszanie to prosty sposób, żeby tego uniknąć i nie wstrzymywać wykończenia.",
        ],
      },
      {
        h: "Osuszanie po zalaniu",
        p: [
          "Po zalaniu mieszkania, pęknięciu rury lub podtopieniu piwnicy liczy się czas. Im dłużej ściany i posadzki pozostają mokre, tym większe ryzyko rozwoju pleśni, odspajania tynków i uszkodzenia podłóg. Osuszanie warto rozpocząć jak najszybciej po usunięciu wody i przyczyny zalania.",
          "Po osuszeniu możemy też wykonać naprawy: gładzie, malowanie, wymianę podłóg.",
        ],
      },
      {
        h: "Jak korzystać z osuszacza",
        p: [
          "Podczas osuszania okna i drzwi zewnętrzne powinny być zamknięte — w przeciwnym razie urządzenie osusza powietrze napływające z zewnątrz. Pomieszczenie warto ogrzewać, bo w wyższej temperaturze osuszacz pracuje wydajniej. Zbiornik na wodę należy regularnie opróżniać albo podłączyć wąż odprowadzający skropliny.",
        ],
      },
    ],
    faq: [
      {
        q: "Ile osuszaczy potrzebuję?",
        a: "To zależy od powierzchni i stopnia zawilgocenia. Podaj metraż i opisz sytuację w rezerwacji — dobierzemy liczbę urządzeń.",
      },
      {
        q: "Jakie osuszacze wynajmujecie?",
        a: "Kondensacyjne osuszacze budowlane Climative DHP-50 PRO — według producenta do 50 litrów wody na dobę.",
      },
      {
        q: "Czy podczas osuszania można wietrzyć pomieszczenia?",
        a: "Nie. Okna powinny być zamknięte, bo inaczej osuszacz zbiera wilgoć z powietrza napływającego z zewnątrz.",
      },
      {
        q: "Czy rezerwacja online jest wiążąca?",
        a: "Nie. Rezerwacja jest wstępna — termin potwierdzamy telefonicznie.",
      },
    ],
  },

  "sprzatanie-po-remoncie": {
    sections: [
      {
        h: "Profesjonalne sprzątanie domów, mieszkań i lokali — Wieluń",
        p: [
          "Czysta przestrzeń, więcej czasu dla Ciebie. Chcąc zaoszczędzić Wasz czas i energię, poszerzyliśmy ofertę o profesjonalne sprzątanie. Sprzątamy domy, mieszkania i lokale w Wieluniu i okolicach: po wykończeniu lub remoncie, przed i po wynajmie oraz przed świętami i innymi ważnymi okazjami. Pracujemy profesjonalnie, solidnie i z dbałością o detal.",
          "Sprzątamy po własnych realizacjach oraz po pracach prowadzonych przez inne ekipy.",
        ],
      },
      {
        h: "Znamy chemię budowlaną — wiemy, czym to usunąć",
        p: [
          "Na co dzień wykańczamy wnętrza, dlatego dobrze znamy chemię budowlaną: kleje, fugi, zaprawy, silikony, grunty i farby. Dzięki temu wiemy, jak skutecznie uporać się z pozostałościami po pracach wykończeniowych i dobrać odpowiednie środki do różnych zabrudzeń — bez ryzyka zmatowienia płytek, porysowania szkła czy uszkodzenia fug.",
          "Pył budowlany jest drobny i osiada wielokrotnie, dlatego usuwamy go odkurzaczami przemysłowymi przeznaczonymi do pyłów budowlanych, a dopiero potem myjemy powierzchnie.",
        ],
      },
      {
        h: "Sprzątanie po wykończeniu lub remoncie",
        p: [
          "W ramach sprzątania poremontowego usuwamy pył budowlany, dokładnie myjemy okna, ramy i parapety, czyścimy podłogi, płytki i fugi, myjemy drzwi, listwy i inne powierzchnie, kompleksowo sprzątamy łazienki i usuwamy pozostałości po pracach wykończeniowych. Po takim sprzątaniu można od razu wnosić meble.",
        ],
      },
      {
        h: "Sprzątanie przed i po wynajmie",
        p: [
          "Właścicielom mieszkań na wynajem pomagamy przygotować lokal dla nowego najemcy albo doprowadzić go do porządku po zakończeniu najmu. Czyste mieszkanie łatwiej wynająć, a dokładne sprzątanie po najemcy pozwala ocenić jego stan.",
        ],
      },
      {
        h: "Przedświąteczne sprzątanie domów i mieszkań",
        p: [
          "Święta to czas dla rodziny, a nie na szorowanie fug. Przed Bożym Narodzeniem i Wielkanocą, rodzinną uroczystością czy przyjęciem gości przejmujemy na siebie gruntowne porządki, żeby Twój dom był czysty i gotowy na wyjątkowy czas.",
          "W ramach przedświątecznego sprzątania wykonujemy: dokładne sprzątanie całego domu lub mieszkania, czyszczenie kuchni (blaty, sprzęty AGD, fronty szafek), sprzątanie łazienek z dezynfekcją i wybłyszczaniem armatury, mycie okien i przeszkleń oraz odświeżenie pomieszczeń przed przyjęciem gości. Terminy przed świętami szybko się zapełniają, dlatego warto zarezerwować je z wyprzedzeniem — przyjmujemy zapisy.",
        ],
      },
      {
        h: "Jak zarezerwować termin i od czego zależy cena",
        p: [
          "Termin sprzątania można wstępnie zarezerwować w kalendarzu na stronie, wybierając rodzaj sprzątania i podając metraż. Oddzwaniamy, potwierdzamy termin i ustalamy zakres.",
          "Cena zależy od metrażu, stopnia zabrudzenia, liczby okien oraz zakresu prac. Najdokładniej wycenimy usługę po obejrzeniu zdjęć lokalu.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy sprzątacie po remontach wykonanych przez inne ekipy?",
        a: "Tak. Sprzątamy zarówno po własnych realizacjach, jak i po pracach innych wykonawców.",
      },
      {
        q: "Czy sprzątacie mieszkania przed i po wynajmie?",
        a: "Tak, przygotowujemy mieszkania dla nowych najemców i sprzątamy je po zakończeniu najmu.",
      },
      {
        q: "Czy można zamówić sprzątanie przed świętami?",
        a: "Tak. Przed świętami terminy szybko się zapełniają, dlatego warto zarezerwować je wcześniej.",
      },
      {
        q: "Czy myjecie okna?",
        a: "Tak, dokładnie myjemy okna, ramy i parapety.",
      },
    ],
  },
};
