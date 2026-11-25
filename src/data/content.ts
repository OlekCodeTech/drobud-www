// Miasta pod SEO lokalne (Wieluń + ok. 50 km), realizacje, zespół i opinie.

export type City = { slug: string; name: string; locative: string };

export const cities: City[] = [
  { slug: "wielun", name: "Wieluń", locative: "w Wieluniu" },
  { slug: "praszka", name: "Praszka", locative: "w Praszce" },
  { slug: "wieruszow", name: "Wieruszów", locative: "w Wieruszowie" },
  { slug: "zloczew", name: "Złoczew", locative: "w Złoczewie" },
  { slug: "dzialoszyn", name: "Działoszyn", locative: "w Działoszynie" },
  { slug: "pajeczno", name: "Pajęczno", locative: "w Pajęcznie" },
  { slug: "krzepice", name: "Krzepice", locative: "w Krzepicach" },
  { slug: "olesno", name: "Olesno", locative: "w Oleśnie" },
  { slug: "kluczbork", name: "Kluczbork", locative: "w Kluczborku" },
  { slug: "kepno", name: "Kępno", locative: "w Kępnie" },
  { slug: "sieradz", name: "Sieradz", locative: "w Sieradzu" },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

export const projectCategories = ["Łazienka", "Salon", "Podłogi", "Schody", "Poddasze"] as const;

export type Project = {
  slug: string;
  title: string;
  category: (typeof projectCategories)[number];
  city: string;
  description: string;
  /** Ścieżki w public/realizacje/. Puste = placeholder. */
  images: string[];
};

// Zdjęcia z dysku klienta (19.11.2026). TODO: miejscowości i opisy realizacji od Damiana.
export const projects: Project[] = [
  {
    slug: "lazienka-na-poddaszu-z-wanna-wolnostojaca",
    title: "Łazienka na poddaszu z wanną wolnostojącą",
    category: "Łazienka",
    city: "okolice Wielunia",
    description: "Wanna wolnostojąca na podeście, płyty o wzorze kamienia, podświetlana wnęka i okno dachowe.",
    images: ["/realizacje/lazienka-poddasze-wanna.jpg"],
  },
  {
    slug: "salon-z-kominkiem-i-oswietleniem-liniowym",
    title: "Salon z kominkiem i oświetleniem liniowym",
    category: "Salon",
    city: "okolice Wielunia",
    description: "Zabudowa kominkowa, ściana z okładziną strukturalną i linie światła w suficie.",
    images: ["/realizacje/salon-kominek-oswietlenie-liniowe.jpg"],
  },
  {
    slug: "lazienka-marmur-i-mozaika",
    title: "Łazienka z marmurem i mozaiką",
    category: "Łazienka",
    city: "okolice Wielunia",
    description: "Płytki imitujące marmur, ściana z mozaiki, umywalka wolnostojąca i wnęka z podświetleniem.",
    images: ["/realizacje/lazienka-marmur-mozaika.jpg"],
  },
  {
    slug: "podloga-w-jodelke-i-przeszklenia",
    title: "Podłoga w jodełkę przy dużych przeszkleniach",
    category: "Podłogi",
    city: "okolice Wielunia",
    description: "Panele układane w jodełkę w strefie dziennej z dużymi przeszkleniami.",
    images: ["/realizacje/salon-jodelka-przeszklenia.jpg"],
  },
  {
    slug: "lazienka-z-wanna-i-sciana-kamienna",
    title: "Łazienka z wanną i ścianą o wzorze kamienia",
    category: "Łazienka",
    city: "okolice Wielunia",
    description: "Wanna wolnostojąca, wielkoformatowe płyty na ścianie i podłodze, grzejnik dekoracyjny.",
    images: ["/realizacje/lazienka-wanna-wolnostojaca.jpg"],
  },
  {
    slug: "podloga-w-jodelke-dom",
    title: "Jodełka w domu jednorodzinnym",
    category: "Podłogi",
    city: "okolice Wielunia",
    description: "Podłoga w jodełkę w otwartej strefie dziennej nowego domu.",
    images: ["/realizacje/podloga-jodelka-dom.jpg"],
  },
  {
    slug: "korytarz-efekt-betonu",
    title: "Korytarz z efektem betonu",
    category: "Salon",
    city: "okolice Wielunia",
    description: "Ściany z farbą strukturalną z efektem betonu i szyny oświetleniowe.",
    images: ["/realizacje/korytarz-efekt-betonu.jpg"],
  },
  {
    slug: "korytarz-jodelka-led",
    title: "Korytarz z jodełką i oświetleniem liniowym",
    category: "Podłogi",
    city: "okolice Wielunia",
    description: "Podłoga w jodełkę i sufit przygotowany pod linie światła.",
    images: ["/realizacje/korytarz-jodelka-led.jpg"],
  },
  {
    slug: "sufit-podwieszany-stelaz",
    title: "Sufit podwieszany — stelaż",
    category: "Poddasze",
    city: "okolice Wielunia",
    description: "Stelaż sufitu podwieszanego przed montażem płyt.",
    images: ["/realizacje/sufit-podwieszany-stelaz.jpg"],
  },
  {
    slug: "adaptacja-poddasza-w-trakcie",
    title: "Adaptacja poddasza — w trakcie prac",
    category: "Poddasze",
    city: "okolice Wielunia",
    description: "Konstrukcja pod sufit i skosy na poddaszu.",
    images: ["/realizacje/poddasze-stelaz.jpg"],
  },
  {
    slug: "schody-wiszace",
    title: "Schody wiszące — w trakcie prac",
    category: "Schody",
    city: "okolice Wielunia",
    description: "Przygotowanie ściany i montaż stopni schodów wiszących.",
    images: ["/realizacje/schody-wiszace-2.jpg", "/realizacje/schody-wiszace-1.jpg"],
  },
];

export type Person = { name: string; role: string; bio: string; photo?: string };

// Opisy Darka i Kamila z Facebooka DroBud (posty „Poznajcie naszą zgraną ekipę”).
// TODO: imiona i opisy pozostałych trzech osób oraz potwierdzenie opisu Damiana.
export const team: Person[] = [
  {
    name: "Damian Drosiński",
    role: "Właściciel",
    bio: "Założyciel DroBud, ponad 10 lat doświadczenia w wykończeniach wnętrz. Laureat plebiscytu Mistrzowie Budownictwa 2026 w województwie łódzkim.",
    photo: "/zespol/damian.jpg",
  },
  {
    name: "Darek",
    role: "Wykończenia wnętrz",
    bio: "Dokładny, samodzielny i bardzo zaangażowany w swoją pracę. Ma duże doświadczenie w wykończeniach wnętrz, a jego mocną stroną są sufity podwieszane, adaptacje poddaszy i gładzie. Na bieżąco śledzi nowinki w branży i chętnie uczy się nowych metod.",
    photo: "/zespol/darek.jpg",
  },
  {
    name: "Kamil",
    role: "Gładzie i prace malarskie",
    bio: "Absolwent szkoły o kierunku monter zabudów i robót wykończeniowych w budownictwie. Ma szeroką wiedzę i umiejętności w zakresie prac wykończeniowych — możecie spotkać go przy gładziach i pracach malarskich. Sumiennie wykonuje swoje zadania, dbając o jakość i estetykę.",
    photo: "/zespol/kamil.jpg",
  },
  { name: "Imię do uzupełnienia", role: "Ekipa DroBud", bio: "Opis do uzupełnienia.", photo: "/zespol/pracownik-1.jpg" },
  { name: "Imię do uzupełnienia", role: "Ekipa DroBud", bio: "Opis do uzupełnienia.", photo: "/zespol/pracownik-2.jpg" },
  { name: "Imię do uzupełnienia", role: "Ekipa DroBud", bio: "Opis do uzupełnienia.", photo: "/zespol/pracownik-3.jpg" },
];

export type Award = { title: string; detail: string; image: string; imageAlt: string };

export const awards: Award[] = [
  {
    title: "Laureat Mistrzowie Budownictwa 2026",
    detail: "Wyróżnienie dla firmy DroBud, województwo łódzkie (Dziennik Łódzki)",
    image: "/nagrody/statuetki-mistrzowie-budownictwa-2026.jpg",
    imageAlt: "Statuetki Mistrzowie Budownictwa 2026 dla DroBud",
  },
  {
    title: "Laureat Mistrzowie Budownictwa 2026 — szef firmy",
    detail: "Damian Drosiński, gala Polska Press, województwo łódzkie",
    image: "/nagrody/gala-polska-press.jpg",
    imageAlt: "Damian Drosiński ze statuetką na gali Polska Press",
  },
  {
    title: "Firma Godna Polecenia",
    detail: "Certyfikat i list gratulacyjny dla DroBud Usługi Wykończeniowe",
    image: "/nagrody/certyfikat-firma-godna-polecenia.jpg",
    imageAlt: "Damian Drosiński z certyfikatem Firma Godna Polecenia",
  },
];

export type Video = {
  id: string;
  title: string;
  /** Slugi usług, przy których film się pokazuje. */
  services: string[];
};

// Filmy z dysku klienta, skompresowane do public/wideo/<id>.mp4 + okładka <id>.jpg.
export const videos: Video[] = [
  // Pierwsze trzy z nazw nadanych przez klienta na dysku (24.11.2026); v01 („Strona główna”) jest w hero.
  { id: "v02", title: "Wykończenie domów i mieszkań", services: ["wykonczenia-pod-klucz"] },
  { id: "v15", title: "Wykończenie łazienki", services: ["wykonczenia-lazienek"] },
  { id: "v16", title: "Gładzie polimerowe", services: ["gladzie-polimerowe"] },
  { id: "v05", title: "Farby strukturalne i tynki dekoracyjne", services: ["tynki-dekoracyjne"] },
  { id: "v10", title: "Układanie gresu i płytek", services: ["ukladanie-plytek"] },
  { id: "v13", title: "Sufit podwieszany na poddaszu", services: ["sufity-podwieszane"] },
  { id: "v09", title: "Łazienka z podświetlanym lustrem", services: ["wykonczenia-lazienek"] },
  { id: "v03", title: "Łazienka z wanną wolnostojącą", services: ["wykonczenia-lazienek"] },
  { id: "v14", title: "Łazienka z odpływem liniowym", services: ["wykonczenia-lazienek"] },
  { id: "v07", title: "Łazienka z płytkami patchwork", services: ["wykonczenia-lazienek"] },
  { id: "v08", title: "Prysznic z płytkami drewnopodobnymi", services: ["wykonczenia-lazienek"] },
  { id: "v11", title: "Łazienka — efekt końcowy", services: ["wykonczenia-lazienek"] },
  { id: "v04", title: "Przygotowanie ścian pod malowanie", services: ["malowanie"] },
  { id: "v06", title: "Ekipa przy pracy", services: [] },
  { id: "v12", title: "Gala Mistrzowie Budownictwa 2026", services: [] },
];

export type Review = { author: string; source: "Google" | "Facebook"; date: string; text: string };

// Polecenia z Facebooka DroBud (pobrane 20.11.2026, 36 opinii, 100% poleca).
// Pominięte: opinie Piotra i Kornelii Olek (osoby powiązane z agencją OlekCodeTech).
// Kolejność: pierwsze 6 to opinie pokazywane na stronie głównej.
export const reviews: Review[] = [
  { author: "Monika Z.", source: "Facebook", date: "październik 2026", text: "Polecam serdecznie firmę Drobud! Szukaliśmy kogoś, kto wykona łazienki w naszym nowym domu i trafiliśmy na Damiana, to był świetny wybór. Super doradztwo w każdej kwestii, chłopaki dbają o każdy nawet najmniejszy detal i dopytują o wszystkie szczegóły wykonania realizacji zgodnie z projektem. Jesteśmy bardzo zadowoleni z wykonania i efektu końcowego i będziemy dalej polecać innym. Pełen profesjonalizm." },
  { author: "Patrycja K.", source: "Facebook", date: "kwiecień 2026", text: "Serdecznie polecam firmę Drobud. Ekipa realizowała u nas kompleksowe wykończenie całego domu – od zabudowy g-k, przez gładzie, płytki i panele, aż po malowanie oraz biały montaż. Panowie pracują bardzo dokładnie, zwracają uwagę na każdy detal, a przy tym dbają o porządek na bieżąco i odpowiednio zabezpieczają wszystkie powierzchnie. Widać duże doświadczenie i profesjonalne podejście do pracy. Szczególne uznanie należy się Panu Zbyszkowi od glazury – to prawdziwa złota rączka. Płytki w łazienkach zostały położone perfekcyjnie, wszystko jest idealnie rozmierzone i precyzyjnie docięte. Jesteśmy bardzo zadowoleni z efektu końcowego i z czystym sumieniem polecamy!" },
  { author: "Damian C.", source: "Facebook", date: "listopad 2026", text: "Bardzo polecam współpracę z firmą DROBUD. Kompleksowe wykończenie całego domu przebiegło szybko, bezproblemowo i zgodnie z ustaleniami. Pełen profesjonalizm, czystość na budowie i świetny kontakt. Z pewnością skorzystam ponownie!" },
  { author: "Anna L.", source: "Facebook", date: "styczeń 2026", text: "Jesteśmy bardzo zadowoleni ze współpracy z Damianem, oraz jego pracownikami. To naprawdę zgrana ekipa, z którą współpraca przebiegała w miłej i partnerskiej atmosferze. Na każdym etapie prac mieliśmy z nimi kontakt, wszystko było dokładnie omawiane i konsultowane. Prace zostały wykonane solidnie, estetycznie i z dużą starannością, a dodatkowo mogliśmy liczyć na fajne pomysły i dużą cierpliwość. Widać, że Damian i jego ekipa dbają nie tylko o swój interes, ale przede wszystkim o dobro obu stron." },
  { author: "Łukasz Z.", source: "Facebook", date: "październik 2025", text: "Z czystym sumieniem polecam firmę DroBud Usługi Wykończeniowe Damian Drosiński. Współpraca od początku do końca przebiegała wzorowo — prace wykończeniowe wykonane bardzo dokładnie, terminowo i z dbałością o każdy detal. Ekipa doradzała przy wyborze materiałów i rozwiązań, dzięki czemu łazienka i podłogi wyglądają dokładnie tak, jak sobie wymarzyliśmy. Profesjonalizm, rzetelność i świetny kontakt — rzadko dziś spotyka się tak solidnych fachowców. Zdecydowanie polecam każdemu, kto chce mieć remont zrobiony porządnie i bez stresu." },
  { author: "Daniel S.", source: "Facebook", date: "styczeń 2025", text: "Drobud robi robotę! Z Żoną zleciliśmy wykończenie mieszkania w bloku, mieliśmy problemy z krzywymi ścianami i poziomem podłóg ale nie były problemem dla Damiana. Wykonane zostały tynki ozdobne, gładzie, płytki, obróbka futryn, instalacje pod oświetlenie i wiele innych. Wszystko jak najlepszy porządek. Polecamy!" },
  { author: "Rafał M.", source: "Facebook", date: "listopad 2026", text: "Świetna i szybka robota! Pomimo tego, że przebywam za granicą, wszelkie ustalenia telefoniczne przebiegały sprawnie i bez żadnych zgrzytów. Wszystko wykonane terminowo, dokładnie i profesjonalnie." },
  { author: "Magdalena K.", source: "Facebook", date: "wrzesień 2025", text: "Jesteśmy z mężem bardzo zadowoleni ze współpracy z Damianem. Prace zostały wykonane terminowo, solidnie i z dużą dbałością o szczegóły. Ekipa była rzetelna, pomocna i zawsze służyła fachową poradą. Wszystko przebiegało sprawnie i bezproblemowo, a efekt końcowy przeszedł nasze oczekiwania. Z czystym sumieniem polecam tę firmę każdemu, kto szuka profesjonalistów do remontu bądź wykończenia." },
  { author: "Kalina B.", source: "Facebook", date: "styczeń 2025", text: "Z usług Damiana korzystamy od samego początku jego działalności. Praktycznie w każdym roku coś mu zlecamy i już sam ten fakt świadczy o tym, że naprawdę cenimy sobie współpracę z nim. Mnie najbardziej odpowiada to, że Damian nie boi się nietypowych realizacji i jest chętny eksperymentować. Dzięki takiemu podejściu nieustannie poszerza własne kompetencje, ale i również swojego zespołu, który w ostatnim czasie się rozrósł. A większy zespół to dla klientów krótszy czas oczekiwania na wolne terminy. Tak trzymać." },
  { author: "Patrycja B.", source: "Facebook", date: "lipiec 2025", text: "Polecam firmę DroBud jako rzetelnego i profesjonalnego wykonawcę prac budowlanych. Współpraca od samego początku przebiegała sprawnie i bezproblemowo. Zespół wykazał się ogromnym zaangażowaniem, terminowością oraz wysoką jakością wykonania. Każdy etap prac był realizowany zgodnie z ustalonym harmonogramem, a komunikacja z firmą była wzorowa. Wszystko zostało wykonane solidnie, estetycznie i z dużą starannością. Dziękuję za udaną współpracę!" },
  { author: "Ewa P.", source: "Facebook", date: "styczeń 2025", text: "Polecam z całego serca! Damian i cała ekipa zna się na rzeczy. Fachowe doradztwo i pomoc w wyborze najlepszych materiałów, dbałość o każdy detal i super kontakt. Damian z całą ekipą zdobyli moje zaufanie i na pewno będę korzystać z ich usług w przyszłości oraz polecać dalej." },
  { author: "Krzysztof L.", source: "Facebook", date: "listopad 2021", text: "Śmiało mogę polecić firmę „DroBud”. Damian i Tomasz to bardzo dobrzy jakościowo i szybcy fachowcy, którzy wykonali u mnie kilka inwestycji wykończenia wnętrz. Jestem bardzo z nich zadowolony i ciągle współpracujemy." },
  { author: "Aleksandra S.", source: "Facebook", date: "sierpień 2025", text: "Świetna ekipa – profesjonalni, dokładni i terminowi. Wszystko wykonane na wysokim poziomie, z dbałością o szczegóły. Jestem bardzo zadowolona i serdecznie polecam! Zdecydowanie Damian z ekipą wykończyli mój dom, a nie mnie." },
  { author: "Aleksandra J.", source: "Facebook", date: "kwiecień 2025", text: "Zdecydowanie polecam Damiana i jego ekipę, która pracowała sprawnie, z dużą precyzją oraz zachowaniem porządku! Płytki zostały położone bardzo starannie z dbałością o każdy detal! Dobra robota!" },
  { author: "Karol S.", source: "Facebook", date: "styczeń 2025", text: "Firma „DroBud” to pełen profesjonalizm. Prace wykonują solidnie, terminowo i z dbałością o detale. Fachowa obsługa i indywidualne podejście sprawiają, że współpraca z nimi to czysta przyjemność. Gorąco polecam!" },
  { author: "Magdalena S.", source: "Facebook", date: "maj 2025", text: "Polecam Damiana i jego ekipę! Jesteśmy bardzo zadowoleni z ich pracy – sumienni, staranni, dbają o porządek i zawsze doradzą najlepsze rozwiązania. Jeśli szukasz profesjonalnej ekipy, to się nie zawiedziesz." },
  { author: "Marcin K.", source: "Facebook", date: "październik 2025", text: "Super ekipa! Wszystko zrobione porządnie i na czas. Bardzo dobry kontakt, można się dogadać bez problemu. Jakość robót pierwsza klasa – naprawdę polecam." },
  { author: "Wojciech K.", source: "Facebook", date: "wrzesień 2025", text: "Super współpraca, fachowcy zawsze służą poradą, wykończenie na najwyższym poziomie. Polecam z czystym sumieniem tę ekipę!" },
  { author: "Błażej S.", source: "Facebook", date: "czerwiec 2025", text: "Firma godna polecenia! Rzetelna, profesjonalna, dbająca o szczegóły. Doradzi w każdej sytuacji. Wykończy Twój dom, ale nie Ciebie. Szczerze polecam." },
  { author: "Paulina K.", source: "Facebook", date: "październik 2021", text: "O nic nie trzeba się martwić: dyspozycyjność, wszystko wykonane na czas i dopracowane w każdym szczególe. Panowie sympatyczni i uczynni. Z czystym sumieniem polecam!" },
  { author: "Sylwia W.", source: "Facebook", date: "październik 2021", text: "Jedna z najlepszych firm na rynku. Panowie mili, uprzejmi. Rzetelnie i sumiennie wykonują swoją pracę. Kierują się w swojej pracy pasją, 100% profesjonalizm." },
  { author: "Kasia O.", source: "Facebook", date: "listopad 2023", text: "Bardzo polecam!! Pełen profesjonalizm. Praca wykonana sprawnie, czysto i solidnie. Pomocne rady dla klienta podczas pracy." },
  { author: "Denis V.", source: "Facebook", date: "lipiec 2025", text: "Bardzo polecam ekipę. Super komunikacja i współpraca na każdym etapie wykończenia. Pełen profesjonalizm." },
  { author: "Tomasz O.", source: "Facebook", date: "listopad 2021", text: "Z czystym sumieniem polecam firmę, specjaliści znający się na tym, co robią, rzetelna i szybka usługa!" },
  { author: "Paweł Z.", source: "Facebook", date: "listopad 2021", text: "Porządna i sprawna ekipa, znają się na robocie. Z czystym sumieniem polecam." },
  { author: "Monika J.", source: "Facebook", date: "styczeń 2025", text: "Polecam z całego serca! Świetne wykonanie i dotrzymany termin pracy. Pełen profesjonalizm." },
  { author: "Kasia J.", source: "Facebook", date: "styczeń 2025", text: "Polecam całą ekipę DroBud. Firma dba o każdy detal! Pełna profeska." },
  { author: "Daniel B.", source: "Facebook", date: "czerwiec 2024", text: "Firma godna polecenia!!! Pełen profesjonalizm i solidnie wykonana robota!" },
  { author: "Dariusz J.", source: "Facebook", date: "styczeń 2025", text: "Firma godna polecenia!!! Pełen profesjonalizm." },
  { author: "Karolina S.", source: "Facebook", date: "listopad 2021", text: "Polecam! Świetne wykonanie i dotrzymany termin pracy." },
  { author: "Mariola S.", source: "Facebook", date: "listopad 2021", text: "Bardzo solidna firma, godna polecenia." },
  { author: "Kacper E.", source: "Facebook", date: "październik 2021", text: "Bardzo solidna firma, polecam!" },
  { author: "Alan P.", source: "Facebook", date: "październik 2021", text: "Gwarancja jakości, polecam." },
  { author: "Kinga K.", source: "Facebook", date: "listopad 2021", text: "Polecam z czystym sumieniem!" },
];
