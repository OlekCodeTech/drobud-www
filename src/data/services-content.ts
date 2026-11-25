// Rozbudowane treści usług pod SEO. Wersja robocza — do akceptacji przez klienta.
// Bez cen, terminów i gwarancji. Zasady klienta (25.11.2026): bez słowa „remont”, bez montażu drzwi i tapet,
// pod LED tylko przygotowujemy (instalację robi elektryk).

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
          "Wykończenie pod klucz to usługa, w której jedna ekipa prowadzi mieszkanie lub dom od stanu deweloperskiego do momentu, w którym można wnieść meble. Zamiast szukać osobno glazurnika, malarza i ekipy od sufitów, zlecasz całość jednemu wykonawcy. Odpowiadamy wtedy za kolejność prac, ich jakość i za to, żeby poszczególne etapy do siebie pasowały.",
          "W DroBud kompleksowe wykończenia realizujemy w Wieluniu i w promieniu około 50 km. Pracujemy w domach jednorodzinnych, mieszkaniach i lokalach usługowych. Zakres ustalamy indywidualnie: możemy wykończyć cały budynek albo wybrane pomieszczenia, na przykład łazienki i strefę dzienną.",
        ],
      },
      {
        h: "Jakie prace wchodzą w zakres wykończenia",
        p: [
          "Typowe wykończenie domu lub mieszkania obejmuje przygotowanie ścian i sufitów (gładzie polimerowe, szlifowanie, gruntowanie), malowanie, układanie gresu i płytek w łazienkach i kuchni, panele podłogowe z listwami, sufity podwieszane oraz biały montaż. Coraz częściej dochodzą do tego tynki dekoracyjne, farby strukturalne oraz sufity i wnęki przygotowane pod oświetlenie liniowe.",
          "Jeżeli masz projekt wnętrz od architekta, pracujemy według niego. Jeżeli projektu nie ma, pomagamy uporządkować decyzje: co trzeba ustalić przed rozpoczęciem, w jakiej kolejności zamawiać materiały i na co zwrócić uwagę przy wyborze płytek czy paneli.",
        ],
      },
      {
        h: "Kolejność prac przy wykończeniu domu i mieszkania",
        p: [
          "Dobra kolejność prac oszczędza czas i pozwala uniknąć poprawek. Najpierw wykonuje się prace mokre i brudne: sufity podwieszane, gładzie i szlifowanie. Następnie przychodzi czas na płytki, pierwsze malowanie i podłogi, a na końcu biały montaż, listwy, ostatnie malowanie i poprawki.",
          "Przed układaniem podłóg ważna jest wilgotność tynków i wylewek. W razie potrzeby osuszamy pomieszczenia własnymi osuszaczami, dzięki czemu kolejne etapy mogą ruszyć bez ryzyka dla materiałów. Po zakończeniu prac możemy też posprzątać lokal, tak aby był gotowy do wprowadzenia.",
        ],
      },
      {
        h: "Od czego zależy koszt wykończenia pod klucz",
        p: [
          "Na koszt wykończenia wpływa przede wszystkim metraż, liczba łazienek, standard materiałów i stopień skomplikowania projektu. Duże formaty płytek, sufity wielopoziomowe czy tynki dekoracyjne wymagają więcej pracy niż rozwiązania standardowe. Znaczenie ma też stan wyjściowy: równe tynki i wylewki pozwalają zacząć szybciej.",
          "Dlatego wycenę przygotowujemy indywidualnie. Najłatwiej zacząć od przesłania projektu lub rzutu, kilku zdjęć i opisu oczekiwań przez formularz wyceny. Oddzwaniamy, dopytujemy o szczegóły i w razie potrzeby umawiamy oględziny.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy wykańczacie mieszkania od dewelopera?",
        a: "Tak. Wykończenie mieszkania lub domu w stanie deweloperskim to nasza specjalność. Warto zgłosić się jeszcze przed odbiorem kluczy, żeby zaplanować termin.",
      },
      {
        q: "Czy mogę zlecić tylko część prac?",
        a: "Tak. Wykonujemy zarówno kompleksowe wykończenia, jak i pojedyncze etapy: samą łazienkę, gładzie, malowanie, podłogi albo sufity podwieszane.",
      },
      {
        q: "Czy pracujecie według projektu architekta wnętrz?",
        a: "Tak. Projekt można dołączyć do formularza wyceny w formacie PDF lub jako zdjęcia.",
      },
    ],
  },

  "wykonczenia-lazienek": {
    sections: [
      {
        h: "Wykończenie łazienki w Wieluniu od A do Z",
        p: [
          "Łazienka to najbardziej wymagające pomieszczenie w domu: na kilku metrach spotykają się hydroizolacja, płytki, zabudowy i biały montaż. Dlatego jej wykończenie najlepiej zlecić ekipie, która wykona wszystkie etapy i odpowiada za efekt końcowy. W DroBud wykańczamy łazienki kompleksowo — od surowych ścian po zamontowaną armaturę i silikon.",
        ],
      },
      {
        h: "Co wykonujemy w łazience",
        p: [
          "Zakres prac obejmuje przygotowanie podłoża, hydroizolację stref mokrych, zabudowę stelaży podtynkowych, wnęki i półki, układanie płytek ściennych i podłogowych, fugowanie oraz montaż wyposażenia: misek podwieszanych, umywalek, wanien, kabin i odpływów liniowych. Wnęki, zabudowy i miejsca za lustrami przygotowujemy pod oświetlenie LED.",
          "Pracujemy z płytkami w różnych formatach — od mozaiki po płyty wielkoformatowe. Narożniki zewnętrzne szlifujemy pod kątem, dzięki czemu nie potrzeba listew, a krawędzie wyglądają czysto. Dbamy o rozplanowanie płytek tak, aby cięcia wypadały symetrycznie i w mało widocznych miejscach.",
        ],
      },
      {
        h: "Prysznic bez brodzika, wanna wolnostojąca, duże formaty",
        p: [
          "Nowoczesne łazienki to najczęściej prysznic typu walk-in z odpływem liniowym, wanna wolnostojąca, płytki imitujące marmur lub beton oraz zabudowane stelaże z wnękami. Takie rozwiązania wymagają dokładnego wykonania spadków, szczelnej hydroizolacji i precyzyjnego cięcia płytek — to prace, w których doświadczenie widać najbardziej.",
          "Jeżeli masz zdjęcia inspiracji, dołącz je do zapytania. Na ich podstawie łatwiej ocenić, które rozwiązania sprawdzą się w Twojej łazience.",
        ],
      },
      {
        h: "Jak przygotować się do wykończenia łazienki",
        p: [
          "Przed rozpoczęciem prac warto mieć wybrane płytki, ceramikę i armaturę albo przynajmniej ich wymiary — od nich zależy wysokość zabudów i rozplanowanie płytek. Dobrze jest też ustalić z elektrykiem układ oświetlenia i gniazd, żebyśmy mogli przygotować pod nie wnęki i zabudowy. Jeżeli nie masz projektu, pomożemy rozrysować podstawowe ustalenia podczas oględzin.",
          "Koszt wykończenia łazienki zależy od metrażu, formatu płytek i liczby zabudów. Wycenę przygotowujemy po zapoznaniu się ze zdjęciami lub po oględzinach na miejscu.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy wykonujecie prysznic z odpływem liniowym?",
        a: "Tak. Wykonujemy prysznice bez brodzika z odpływem liniowym, ze spadkami i hydroizolacją strefy mokrej.",
      },
      {
        q: "Czy układacie płytki wielkoformatowe?",
        a: "Tak, pracujemy z dużymi formatami, w tym z płytami imitującymi marmur.",
      },
      {
        q: "Czy montujecie oświetlenie LED w łazience?",
        a: "Przygotowujemy wnęki i zabudowy pod oświetlenie LED. Podłączenie i instalację elektryczną wykonuje elektryk.",
      },
      {
        q: "Czy trzeba mieć projekt łazienki?",
        a: "Nie jest konieczny, ale bardzo pomaga. Wystarczą zdjęcia inspiracji i lista wybranego wyposażenia — resztę ustalimy podczas oględzin.",
      },
    ],
  },

  "sufity-podwieszane": {
    sections: [
      {
        h: "Sufity podwieszane i adaptacja poddaszy — Wieluń",
        p: [
          "Sufit podwieszany pozwala ukryć przewody, rekuperację i nierówności stropu, a przy okazji zaplanować oświetlenie. Wykonujemy sufity jedno- i wielopoziomowe, na solidnym stelażu i ze starannie spoinowanymi łączeniami, żeby nie pojawiały się na nich pęknięcia.",
          "Drugą częścią tej usługi jest adaptacja poddaszy: zamieniamy nieużytkowy strych w pełnowartościowe pomieszczenia — sypialnie, gabinet czy pokój dla dzieci. Pracujemy w Wieluniu i w promieniu około 50 km.",
        ],
      },
      {
        h: "Sufity przygotowane pod oświetlenie LED i liniowe",
        p: [
          "W sufitach przygotowujemy wnęki na taśmy LED, miejsca na oczka oraz profile pod oświetlenie liniowe, które tworzy we wnętrzu cienkie świetlne linie na suficie i ścianach. Wymaga to precyzyjnego osadzenia profili i idealnie równych krawędzi.",
          "Samą instalację elektryczną i podłączenie oświetlenia wykonuje elektryk — my przygotowujemy pod nie sufit i zabudowy, tak aby linie światła zgadzały się z układem pomieszczenia.",
        ],
      },
      {
        h: "Adaptacja poddasza krok po kroku",
        p: [
          "Izolację układa się zwykle w dwóch warstwach: pierwszą między krokwiami, drugą pod nimi, na stelażu. Druga warstwa zakrywa krokwie, które są mostkami termicznymi. Następnie montuje się folię paroizolacyjną, a dopiero na niej płyty. Kluczowe są szczelność i ciągłość izolacji przy murłatach, oknach dachowych i kominach.",
          "Po ociepleniu wykonujemy skosy, sufity i ścianki kolankowe, a następnie gładzie, malowanie i podłogi. Dzięki temu, że wszystkie etapy prowadzi jedna ekipa, poddasze jest gotowe do zamieszkania bez koordynowania kilku wykonawców.",
        ],
      },
      {
        h: "Od czego zależy koszt",
        p: [
          "Koszt sufitu podwieszanego zależy od powierzchni, liczby poziomów i liczby wnęk pod oświetlenie. Przy adaptacji poddasza znaczenie ma powierzchnia, geometria dachu, liczba okien dachowych i zakres wykończenia. Do wyceny najlepiej dołączyć projekt lub zdjęcia z przybliżonymi wymiarami.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy montujecie oświetlenie LED w sufitach?",
        a: "Przygotowujemy sufity, wnęki i profile pod oświetlenie LED i liniowe. Instalację elektryczną i podłączenie wykonuje elektryk.",
      },
      {
        q: "Czy adaptujecie poddasza w starszych domach?",
        a: "Tak. Wykonujemy ocieplenie i wykończenie podczas adaptacji strychów na poddasza użytkowe.",
      },
      {
        q: "Czy po ociepleniu wykonujecie też wykończenie poddasza?",
        a: "Tak, możemy zrealizować całość: ocieplenie, sufity, gładzie, malowanie i podłogi.",
      },
    ],
  },

  "gladzie-polimerowe": {
    sections: [
      {
        h: "Gładzie polimerowe — Wieluń i okolice",
        p: [
          "Równe, gładkie ściany to podstawa każdego wnętrza. Nawet najlepsza farba nie ukryje nierówności, rys i źle wykończonych narożników — przy świetle padającym z boku widać wszystko. Dlatego do gładzi podchodzimy jak do osobnego rzemiosła: nakładamy je warstwami, kontrolujemy płaszczyzny i szlifujemy do momentu, w którym powierzchnia jest gotowa pod malowanie.",
          "Wykonujemy gładzie w nowych domach i mieszkaniach w ramach kompleksowych wykończeń, a także w pojedynczych pomieszczeniach, biurach i lokalach usługowych w Wieluniu i okolicznych miejscowościach.",
        ],
      },
      {
        h: "Dlaczego gładzie polimerowe",
        p: [
          "Gładzie polimerowe to gotowe masy wykończeniowe, które dają bardzo gładką powierzchnię pod malowanie. Dobrze się szlifują, a dzięki drobnemu ziarnu pozwalają uzyskać ściany i sufity bez widocznych przejść i nierówności — także w pomieszczeniach doświetlonych dużymi przeszkleniami, gdzie boczne światło pokazuje każdą niedoskonałość.",
          "Na nowych tynkach i płytach zwykle wystarczą cienkie warstwy, a na nierównych ścianach najpierw wyrównujemy podłoże, a dopiero potem nakładamy warstwę wykończeniową.",
        ],
      },
      {
        h: "Szlifowanie z odsysaniem pyłu",
        p: [
          "Największą uciążliwością przy gładziach jest pył. Pracujemy na profesjonalnych szlifierkach podłączonych do odkurzaczy przemysłowych, które zbierają pył bezpośrednio przy tarczy. Dzięki temu w pomieszczeniu jest go znacznie mniej, a powierzchnia wychodzi równiejsza niż przy szlifowaniu ręcznym.",
        ],
      },
      {
        h: "Od czego zależy cena gładzi",
        p: [
          "Koszt zależy od powierzchni ścian i sufitów, stanu podłoża oraz liczby warstw potrzebnych do uzyskania równej powierzchni. Na cenę wpływa też wysokość pomieszczeń i liczba narożników, wnęk i skosów. Żeby otrzymać wycenę, podaj metraż i dołącz kilka zdjęć ścian.",
        ],
      },
    ],
    faq: [
      {
        q: "Czym różni się gładź polimerowa od gipsowej?",
        a: "Gładź polimerowa to gotowa masa o drobnym ziarnie, która daje bardzo gładką powierzchnię i dobrze się szlifuje. Rodzaj gładzi dobieramy do podłoża i oczekiwanego efektu.",
      },
      {
        q: "Czy wykonujecie gładzie na starszych ścianach?",
        a: "Tak. Przed nałożeniem gładzi oceniamy stan podłoża, usuwamy słabe warstwy i naprawiamy pęknięcia.",
      },
    ],
  },

  malowanie: {
    sections: [
      {
        h: "Malowanie ścian i sufitów w Wieluniu",
        p: [
          "Malowanie to etap, który najbardziej widać we wnętrzu. Malujemy ściany i sufity w domach, mieszkaniach, biurach i lokalach usługowych w Wieluniu i okolicach — jako osobną usługę albo część kompleksowego wykończenia.",
          "Przed malowaniem zabezpieczamy podłogi, okna i stolarkę, a podłoże gruntujemy, żeby farba kryła równo i trzymała się trwale.",
        ],
      },
      {
        h: "Farby dobrane do pomieszczenia",
        p: [
          "Inne farby sprawdzają się w salonie i sypialni, a inne w kuchni, łazience czy korytarzu, gdzie liczy się odporność na wilgoć, zmywanie i zarysowania. Pomagamy dobrać farbę i kolor do przeznaczenia pomieszczenia i światła, które do niego wpada.",
          "Jeżeli zależy Ci na ścianie z charakterem, zobacz też nasze tynki dekoracyjne i farby strukturalne.",
        ],
      },
      {
        h: "Gładzie i malowanie razem",
        p: [
          "Najlepszy efekt daje malowanie na świeżo wykonanych gładziach polimerowych — wtedy ściany są idealnie równe, a kolor wygląda jednolicie także w bocznym świetle. Oba etapy wykonuje u nas ta sama ekipa.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy malujecie lokale firmowe?",
        a: "Tak, malujemy mieszkania, domy oraz lokale usługowe i biura.",
      },
      {
        q: "Ile warstw farby nakładacie?",
        a: "Zwykle dwie warstwy na zagruntowanym podłożu. Przy intensywnych kolorach albo zmianie koloru z ciemnego na jasny może być potrzebna trzecia.",
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
        h: "Przygotowanie podłoża i koszt",
        p: [
          "Tynk dekoracyjny wymaga równego, nośnego i zagruntowanego podłoża — zwykle wystarczy gładź i grunt. Na koszt wpływa powierzchnia, rodzaj materiału dekoracyjnego, liczba warstw oraz stan podłoża. Wyślij zdjęcie ściany i inspirację, a przygotujemy wycenę.",
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
        h: "Układanie gresu i płytek — glazurnik Wieluń",
        p: [
          "Układanie płytek to praca, w której liczy się dokładność na każdym etapie: przygotowanie podłoża, rozplanowanie, cięcie, klejenie i fugowanie. Źle położonych płytek nie da się łatwo poprawić, dlatego warto powierzyć je ekipie, która zajmuje się tym na co dzień. Układamy gres i płytki w łazienkach, kuchniach, salonach, korytarzach, na schodach i tarasach.",
          "Działamy w Wieluniu i okolicach. Płytki układamy jako samodzielną usługę oraz w ramach wykończenia łazienki lub całego domu.",
        ],
      },
      {
        h: "Gres wielkoformatowy, jodełka, mozaika",
        p: [
          "Pracujemy z gresem podłogowym i polerowanym, płytkami drewnopodobnymi (także w jodełkę), glazurą ścienną, mozaiką i płytkami wielkoformatowymi. Każdy materiał wymaga innego podejścia: duże formaty potrzebują bardzo równego podłoża i systemu poziomowania, mozaika — starannego fugowania, a gres polerowany — ostrożności przy cięciu.",
          "Przed rozpoczęciem układania rozplanowujemy płytki na ścianach i podłodze, żeby cięcia były symetryczne, a fugi ścienne i podłogowe trafiały na siebie tam, gdzie przewiduje to projekt.",
        ],
      },
      {
        h: "Detale, które decydują o efekcie",
        p: [
          "O jakości pracy glazurnika świadczą detale: narożniki zewnętrzne zeszlifowane pod kątem, równe fugi, czyste otwory pod gniazda i podejścia wodne, równa płaszczyzna bez uskoków między płytkami. W strefach mokrych wykonujemy hydroizolację pod płytkami, a dylatacje i styki z ceramiką wykańczamy silikonem dobranym do fugi.",
        ],
      },
      {
        h: "Ile płytek kupić i jak przygotować podłoże",
        p: [
          "Przy zakupie płytek warto doliczyć zapas na cięcia — przy układzie po przekątnej lub w jodełkę musi być większy niż przy układzie prostym. Podczas oględzin pomagamy policzyć potrzebną ilość. Podłoże pod płytki powinno być równe, nośne i suche; wycenę przygotowujemy na podstawie metrażu, formatu płytek i stanu podłoża.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy układacie płytki drewnopodobne w jodełkę?",
        a: "Tak, układamy gres drewnopodobny w jodełkę, także na dużych powierzchniach strefy dziennej.",
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

  "panele-podlogowe": {
    sections: [
      {
        h: "Układanie paneli podłogowych w Wieluniu",
        p: [
          "Podłoga zamyka wykończenie wnętrza. Układa się ją pod koniec prac, gdy ściany są już pomalowane, a w pomieszczeniach nie ma wilgoci technologicznej. Układamy panele podłogowe — także w jodełkę — i montujemy listwy przypodłogowe, jako osobne zlecenie albo jako etap kompleksowego wykończenia.",
        ],
      },
      {
        h: "Przygotowanie podłoża i montaż",
        p: [
          "Trwałość podłogi zależy w dużej mierze od podłoża. Wylewka musi być równa, czysta i sucha — zbyt wilgotna powoduje pęcznienie paneli i rozchodzenie się zamków. Przed montażem sprawdzamy podłoże, w razie potrzeby wyrównujemy je i dobieramy odpowiedni podkład, także do ogrzewania podłogowego.",
          "Panele układamy z zachowaniem dylatacji przy ścianach i w przejściach, a następnie montujemy listwy przypodłogowe. Dbamy o kierunek układania względem światła i o estetyczne docięcia przy progach.",
        ],
      },
      {
        h: "Kiedy można układać podłogi po wylewkach",
        p: [
          "Świeże wylewki i tynki oddają wilgoć przez wiele tygodni. Układanie paneli na zbyt mokrym podłożu to jedna z najczęstszych przyczyn późniejszych problemów. Jeżeli terminy są napięte, proces można przyspieszyć osuszaczami — wynajmujemy je i dobieramy ich liczbę do powierzchni.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy układacie panele na ogrzewaniu podłogowym?",
        a: "Tak. Dobieramy podkład przeznaczony do ogrzewania podłogowego i sprawdzamy wilgotność wylewki przed montażem.",
      },
      {
        q: "Czy układacie panele w jodełkę?",
        a: "Tak, układamy panele w jodełkę i w układzie prostym.",
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
          "Świeże tynki i wylewki zawierają dużo wody, która musi odparować, zanim można układać podłogi czy malować. Samo ogrzewanie bez odbierania wilgoci niewiele pomaga. Osuszacz kondensacyjny zbiera wodę z powietrza i pozwala kontrolować tempo schnięcia, a zbyt wczesne ułożenie paneli na wilgotnym podłożu kończy się pęcznieniem i odkształceniami.",
        ],
      },
      {
        h: "Osuszanie po zalaniu",
        p: [
          "Po zalaniu mieszkania, pęknięciu rury lub podtopieniu piwnicy liczy się czas. Im dłużej ściany i posadzki pozostają mokre, tym większe ryzyko rozwoju pleśni, odspajania tynków i uszkodzenia podłóg. Osuszanie warto rozpocząć jak najszybciej po usunięciu wody i przyczyny zalania. Po osuszeniu możemy wykonać gładzie, malowanie i nowe podłogi.",
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

  sprzatanie: {
    sections: [
      {
        h: "Profesjonalne sprzątanie domów, mieszkań i lokali — Wieluń",
        p: [
          "Czysta przestrzeń, więcej czasu dla Ciebie. Chcąc zaoszczędzić Wasz czas i energię, poszerzyliśmy ofertę o profesjonalne sprzątanie. Sprzątamy domy, mieszkania i lokale w Wieluniu i okolicach: po wykończeniu, przed i po wynajmie oraz przed świętami i innymi ważnymi okazjami. Pracujemy profesjonalnie, solidnie i z dbałością o detal.",
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
        h: "Sprzątanie po wykończeniu",
        p: [
          "W ramach sprzątania po pracach wykończeniowych usuwamy pył budowlany, dokładnie myjemy okna, ramy i parapety, czyścimy podłogi, płytki i fugi, myjemy listwy i inne powierzchnie, kompleksowo sprzątamy łazienki i usuwamy pozostałości po pracach. Po takim sprzątaniu można od razu wnosić meble.",
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
        q: "Czy sprzątacie po pracach wykonanych przez inne ekipy?",
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
