// ═══════════════════════════════════════════════════════
// GAMER ARCHETYPE ENGINE — Pure data + scoring (no DOM)
// ═══════════════════════════════════════════════════════

const STRINGS = {
  en: {
    siteTitle: "The Gamer Bestiary — Archetype Test",
    headerOrnament: "The Gamer Bestiary",
    h1: "What Beast Do You Play As?",
    subtitle: "A psychological framework for uncovering the creature that lurks behind your controller.",
    introP1: 'Every gamer carries a hidden archetype — a pattern of instincts and compulsions that shapes every session and every choice. This assessment reveals your <strong style="color:var(--gold)">Gamer Archetype</strong> from 10 distinct creatures, through 22 quick dilemmas.',
    introP2: "For each dilemma, pick the option that feels more like you — not the player you aspire to be. This works whether you play AAA titles for 8 hours or mobile games for 5 minutes. There are no wrong answers.",
    startBtn: "Begin the Assessment",
    resultLabel: "Your Gamer Archetype",
    sectionIdentity: "Core Identity",
    sectionTell: "The Tell",
    sectionTraits: "Defining Traits",
    sectionOnly: "Only You Would...",
    sectionGames: "Your Natural Habitat — Games to Seek",
    sectionSpectrum: "Psychological Spectrum",
    sectionShadow: "Shadow Side",
    shadowWarning: "⚠ Beware",
    sectionAffinity: "Plays Well With",
    sectionClashes: "Friction With",
    sectionBreakdown: "Your Archetype Breakdown",
    breakdownSub: "Similarity to each archetype. 100% = closest match, 0% = furthest.",
    sectionAxes: "Your Profile",
    axesLegendUser: "You",
    axesLegendArch: "Archetype baseline",
    sectionPersonality: "Beyond the Screen",
    sectionModalAxes: "Archetype Profile",
    sectionInsights: "What Makes You Unusual",
    sectionHiddenSide: "Your Hidden Side",
    hiddenSideIntro: "The creature that almost claimed you",
    runnerUpLabel: "with shades of",
    readMore: "Read more ↓",
    readLess: "Collapse ↑",
    shareBtn: "Copy Result",
    shareCopied: "Copied!",
    sectionFingerprint: "Your Answer Pattern",
    decisiveLabel: "Clearest signal",
    conflictedLabel: "Most torn",
    sectionLightShadow: "Light & Shadow",
    restartBtn: "Take the Test Again",
    backBtn: "← Back",
    questionOf: (cur, total) => `Question ${cur} of ${total}`,
    questionLabel: (n) => `Question ${n}`,
    spectrumLabels: {},
  },
  ru: {
    siteTitle: "Бестиарий Геймера — Тест Архетипа",
    headerOrnament: "Бестиарий Геймера",
    h1: "Каким зверем ты играешь?",
    subtitle: "Психологический тест для определения существа, скрытого за твоим контроллером.",
    introP1: 'Каждый геймер несёт в себе скрытый архетип — паттерн инстинктов и привычек, формирующий каждую сессию и каждый выбор. Это испытание раскроет твой <strong style="color:var(--gold)">Архетип Геймера</strong> из 10 существ — через 22 быстрые дилеммы.',
    introP2: "В каждой дилемме выбери вариант, который больше похож на тебя — а не на того игрока, которым ты хотел бы быть. Подходит как для тех, кто играет по 8 часов, так и для тех, кто запускает игры на 5 минут с телефона. Неправильных ответов нет.",
    startBtn: "Начать тест",
    resultLabel: "Твой архетип геймера",
    sectionIdentity: "Суть архетипа",
    sectionTell: "Характерный признак",
    sectionTraits: "Ключевые черты",
    sectionOnly: "Только ты способен на...",
    sectionGames: "Твоя естественная среда — игры для тебя",
    sectionSpectrum: "Психологический спектр",
    sectionShadow: "Тёмная сторона",
    shadowWarning: "⚠ Осторожно",
    sectionAffinity: "Хорошо сочетается с",
    sectionClashes: "Трение с",
    sectionBreakdown: "Распределение по архетипам",
    breakdownSub: "Схожесть с каждым архетипом. 100% — ближайший, 0% — наиболее далёкий.",
    sectionAxes: "Твой профиль",
    axesLegendUser: "Ты",
    axesLegendArch: "Базовый архетип",
    sectionPersonality: "За пределами экрана",
    sectionModalAxes: "Профиль архетипа",
    sectionInsights: "Что в тебе необычного",
    sectionHiddenSide: "Твоя скрытая сторона",
    hiddenSideIntro: "Существо, которое почти завладело тобой",
    runnerUpLabel: "с оттенками",
    readMore: "Подробнее ↓",
    readLess: "Свернуть ↑",
    shareBtn: "Скопировать результат",
    shareCopied: "Скопировано!",
    sectionFingerprint: "Паттерн ответов",
    decisiveLabel: "Самый чёткий сигнал",
    conflictedLabel: "Самый спорный",
    sectionLightShadow: "Свет и тень",
    restartBtn: "Пройти тест снова",
    backBtn: "← Назад",
    questionOf: (cur, total) => `Вопрос ${cur} из ${total}`,
    questionLabel: (n) => `Вопрос ${n}`,
    spectrumLabels: {
      "Social Drive": "Социальность",
      "Immersion": "Погружение",
      "Mastery Drive": "Тяга к мастерству",
      "Competition": "Соревновательность",
      "Structure": "Структурность",
      "Commitment": "Вовлечённость",
    },
  },
};

// Russian archetype translations
const ARCHETYPES_RU = {
  falcon: {
    name: "Сокол",
    tagline: '"Взгляд на приз, когти — на таблицу лидеров."',
    rarity: "8% игроков",
    desc: "Сокол — точный соревновательный игрок, чья игровая идентичность построена на измеримых результатах. Ты играешь не ради исследования или отдыха — ты играешь, чтобы ПОБЕДИТЬ, и хочешь доказательств. Рейтинговые матчи, подъём по лестнице, соотношение K/D, турнирные сетки — это твой родной язык. Ты изучаешь повторы, оптимизируешь раскладку клавиш и помнишь свой пиковый рейтинг трёхлетней давности до десятых долей. Кайф не в самом матче — а в момент, когда числа идут вверх.",
    tell: "Они проверяют свой рейтинг или KDA перед тем, как закрыть игру — каждый раз без исключения.",
    onlyYouWould: [
      "Встать в рейтинговую очередь в 2 ночи специально для того, чтобы отыграться после неудачного вечера",
      "Знать свой процент побед до десятых, но при этом говорить, что «особо не следишь за статой»",
      "Испытывать настоящее и продолжительное раздражение, когда тиммейт игнорирует твой явно оптимальный вызов",
    ],
    shadow: "Поражение может испортить тебе день — или целую неделю. Ты склонен к тильту, перекладыванию вины и тихой неприязни к игрокам, которые не относятся к игре так же серьёзно. Если ты не прогрессируешь — ты чувствуешь себя ничтожеством.",
    personality: "Ты подходишь к большинству сфер жизни так же, как к играм — со счётом. Ты ставишь измеримые цели, компульсивно отслеживаешь прогресс и испытываешь тихое беспокойство, когда успех нельзя подсчитать. В конкурентных областях — спорте, работе, учёбе — ты фиксируешь своё место в иерархии и воспринимаешь его лично. Людей, которым искренне «всё равно на результат», ты тихо не понимаешь — даже там, где это не имеет смысла.",
    affinity: ["Волк", "Геккон", "Лягушка"],
    clashes: ["Медведь", "Дельфин"],
  },
  wolf: {
    name: "Волк",
    tagline: '"Один я опасен. Со стаей — непобедим."',
    rarity: "11% игроков",
    desc: "Волк живёт ради слаженной командной игры — не ради личной славы, а ради электрического синергизма с хорошей командой. Ты помнишь каждый callout, каждое клатчное движение, каждый момент, когда идеально сработавшая командная стратегия сломила противника. Ты собираешь тиммейтов после тяжёлого раунда, пишешь правила Discord-сервера и организуешь тренировочные сессии. Соревнование важно, но только когда оно общее.",
    tell: "Их группа друзей уже имеет название, одинаковые иконки профилей, и хотя бы раз составленный тренировочный план.",
    onlyYouWould: [
      "Сидеть до 3 ночи не потому, что игра крутая, а потому что все ещё онлайн",
      "Воспринять как личную обиду, когда тиммейт выходит из сессии без предупреждения",
      "Собрать шестерых людей в кооп, который рассчитан максимум на двоих",
    ],
    shadow: "Одиночные игры кажутся тебе пустыми и бессмысленными. Без стаи ты быстро теряешь мотивацию. Ты можешь стать слишком зависимым от групповой валидации — если команда распадётся, твоя игровая идентичность может рухнуть вместе с ней.",
    personality: "Твоя идентичность вплетена в твою группу. Ты расцветаешь в совместных усилиях, естественно берёшь на себя роль организатора и испытываешь нечто близкое к потере, когда твоя команда распадается. Ты помнишь предпочтения каждого, поддерживаешь чат в живом состоянии и первым замечаешь, когда кто-то замолчал. Одиночные занятия ощущаются пустыми — не потому что не можешь, а потому что не с кем потом поговорить об этом.",
    affinity: ["Сокол", "Дельфин", "Дракон"],
    clashes: ["Геккон", "Лягушка"],
  },
  owl: {
    name: "Сова",
    tagline: '"История не в катсценах. Она — в каждой книге, описании предмета и экране загрузки."',
    rarity: "9% игроков",
    desc: "Сова — пожиратель лора, архитектор вики, игрок, который останавливается перед входом в подземелье, чтобы прочитать каждый элемент нарратива на стенах. Ты не просто играешь — ты населяешь целые миры. Ты можешь рассказать политическую историю вымышленных королевств. Ты пишешь теории. Замечаешь изменения в диалогах NPC после третьего акта.",
    tell: "Они останавливаются посреди игры, чтобы прочитать надпись на надгробии, которая не несёт никакой игровой ценности.",
    onlyYouWould: [
      "Отказываться пропускать катсцены даже при втором прохождении игры, которую знаешь наизусть",
      "Прочитать весь бестиарий в игре до встречи хоть с одним существом из него",
      "Иметь обоснованные мнения по деталям лора, которые тонко противоречат намерениям разработчиков",
    ],
    shadow: "Ты избегаешь игры с поверхностным нарративом как чуму, даже если они по-настоящему веселы. Ты можешь часами сидеть в меню, читая лор, вместо того чтобы играть. Мультиплеер кажется тебе пустым. У тебя огромный беклог, который ты никогда не пройдёшь, потому что каждая игра требует недель полного погружения.",
    personality: "Ты не умеешь делать что-то поверхностно — ни в отношениях, ни в увлечениях, ни в разговорах. Тебе нужна глубокая версия всего, и ты будешь её искать, даже если никто вокруг не замечает. Ты читаешь сноски, следуешь ссылкам и имеешь развитые мнения о вещах, о которых большинство даже не слышали. Светские беседы — лёгкая пытка. У тебя, вероятно, богатая внутренняя жизнь и несколько глубоких отношений, которые ты не обменяешь на сотню поверхностных.",
    affinity: ["Летучая мышь", "Медведь", "Лис"],
    clashes: ["Лягушка", "Медведь"],
  },
  frog: {
    name: "Лягушка",
    tagline: '"Текущий рекорд Any% — 47 минут, и я его сотру."',
    rarity: "5% игроков",
    desc: "Лягушка не играет в игры — Лягушка их препарирует. Там, где другие видят фэнтезийный мир, ты видишь физический движок с эксплуатируемыми краевыми случаями. Спидраны, пропуск последовательностей, глитчи, непредусмотренная механика — это не баги, а тайный язык, на котором игра говорит, когда никто не смотрит.",
    tell: "Они знают пофреймово точное окно ввода для пропуска, экономящего ровно 8 секунд.",
    onlyYouWould: [
      "Испытать настоящий восторг — не разочарование — в момент обнаружения игрового глитча",
      "Пропускать все катсцены без колебаний и не испытывать по этому поводу абсолютно ничего",
      "Провести 50 часов, проходя игру способами, которые разработчики не предусматривали, а затем просто двигаться дальше",
    ],
    shadow: "Ты можешь полностью лишить игру веселья, сводя её к серии входных данных для оптимизации. Друзья, которые хотят просто насладиться сюжетным прохождением, находят твой инстинкт пропускать диалоги крайне раздражающим.",
    personality: "Ты инстинктивно ищешь обходной путь — не ради протеста, а потому что «как оно должно работать» интересует тебя меньше, чем «как оно работает на самом деле». Ты находишь лазейки в системах, краевые случаи в процессах, более быстрые маршруты, о которых никто не думал. Это делает тебя ценным там, где нужно нестандартное мышление, и тихо невыносимым там, где нужно следовать процедуре без вопросов.",
    affinity: ["Сокол", "Геккон", "Лис"],
    clashes: ["Сова", "Дельфин"],
  },
  dragon: {
    name: "Дракон",
    tagline: '"Первый уровень — это оскорбление. К концу недели я стану богом."',
    rarity: "14% игроков",
    desc: "Дракон жаждет силы — не над другими игроками, а над игровым миром. Ты существуешь ради момента, когда твой билд становится непобедимым, когда враги, некогда пугавшие тебя, превращаются в пепел. Ты гриндишь с религиозным усердием не потому, что вынужден, а потому что каждое растущее число приносит глубокое удовлетворение.",
    tell: "Они до сих пор играют в игру, которую сами же назвали «так себе» — потому что конвейер снаряжения ещё не закончился.",
    onlyYouWould: [
      "Набить 1000 часов в игре, которую считаешь средненькой — просто потому что числа продолжали расти",
      "Почувствовать реальную потерю, когда игра патчем убирает валюту или систему прогресса, которую ты гриндил",
      "Знать наизусть точный процент выпадения предметов, которые фармишь уже несколько недель",
    ],
    shadow: "Ты уязвим для самой хищнической монетизации в играх — лутбоксы, боевые пропуска, бесконечные конвейеры снаряжения. Игры без осмысленных петель прогресса надоедают тебе за считанные часы.",
    personality: "Ты глубже, чем большинство людей готовы признать о себе, движим наградами. Системы с чётким прогрессом — карьерные лестницы, сертификации, личные рекорды — заряжают тебя так, как открытые задачи не заряжают. Ты, скорее всего, отслеживаешь больше метрик, чем говоришь другим: шаги, серии, финансы. Когда петля обратной связи закрывается — что-то удовлетворяется. Когда она застревает — что-то зудит, и ты чувствуешь зуд раньше, чем понимаешь причину.",
    affinity: ["Волк", "Летучая мышь", "Медведь"],
    clashes: ["Летучая мышь", "Лягушка"],
  },
  dolphin: {
    name: "Дельфин",
    tagline: '"Лучшая сессия в жизни. Мы играли буквально ни во что особенное. Но все были там."',
    rarity: "13% игроков",
    desc: "Дельфину неважно, хороша ли игра — важно, крутые ли люди, которые в неё играют. Для тебя игры — это социальная площадка, способ поддерживать дружбу и создавать общие воспоминания. Ты устраиваешь игровые вечера, знакомишь людей с новыми играми и помнишь предпочтения каждого.",
    tell: "Они помнят самый смешной момент прошлого игрового вечера ярче, чем любую концовку одиночной игры.",
    onlyYouWould: [
      "Купить игру, в которую никогда не будешь играть в одиночку, только потому что друзья хотят поиграть вместе",
      "Получить больше удовольствия от посредственной игры с людьми, чем от шедевра в одиночестве",
      "Планировать игровую сессию вокруг того, кто может прийти, а не вокруг того, во что играть",
    ],
    shadow: "Одиночные игры могут казаться тебе бессмысленными или даже угнетающими. Ты можешь перегружать себя социально — всегда организатор, всегда источник энергии — тайно желая, чтобы кто-то другой взял на себя инициативу.",
    personality: "Для тебя переживание завершено только тогда, когда оно разделено. Ты — естественный связующий: знаешь предпочтения каждого, поддерживаешь дружбы через несколько эпох своей жизни и устраиваешь встречи не из любви к логистике, а потому что тебе нужны люди рядом. Риск: твои собственные предпочтения могут тихо сглаживаться под весом того, что хотят все остальные, и ты можешь не знать, что тебе нравится, когда не на кого опереться.",
    affinity: ["Волк", "Медведь", "Летучая мышь"],
    clashes: ["Геккон", "Лягушка"],
  },
  fox: {
    name: "Лис",
    tagline: '"У меня был ответ ещё до того, как ты закончил объяснять загадку."',
    rarity: "15% игроков",
    desc: "Лис — стратегический архитектор: отчасти решатель головоломок, отчасти системный инженер. Ты существуешь, чтобы понять, как вещи работают, а потом сделать их лучше. Будь то теорикрафтинг билдов, оптимизация конвейеров, решение логических задач или перестройка базы — движущая сила одна: освой правила, потом подчини их своей воле. Ты читаешь патчноуты ради удовольствия. Веселье не в победе — а в момент, когда система встаёт на место.",
    tell: "Они ставят на паузу кооперативную игру, чтобы объяснить оптимальный маршрут — пока все остальные уже пытаются играть.",
    onlyYouWould: [
      "Решить загадку без подсказок и тихо гордиться этим несколько дней",
      "Добровольно создать таблицу для игровой экономики крафта, потому что так быстрее, чем искать в вики",
      "Перепроходить начало стратегии снова и снова, только чтобы протестировать разные начальные ходы",
    ],
    shadow: "Чисто экшн-игры без стратегической глубины быстро тебе надоедают. Ты можешь слишком усердно анализировать кооперативные игры, превращая расслабленные сессии в напряжённые сеансы планирования.",
    personality: "Ты мыслишь структурами. Прежде чем подступиться к проблеме, ты хочешь полностью понять правила — не чтобы следовать им, а чтобы знать всё пространство ходов. Ты строишь схемы, создаёшь таблицы, которые никто не просил, и обычно видишь на два-три хода вперёд раньше других. Люди читают это как холодную отстранённость. На самом деле ты полностью вовлечён — просто на другой высоте.",
    affinity: ["Сова", "Лягушка", "Летучая мышь"],
    clashes: ["Медведь", "Дельфин"],
  },
  gecko: {
    name: "Геккон",
    tagline: '"Я сделал этого босса 70 раз. Я не раздражён. Я учусь."',
    rarity: "6% игроков",
    desc: "Геккон определяется одним: мастерством. Не прогрессом, не нарративом, не социальностью — чистым, неразбавленным механическим мастерством. Ты хочешь игры, которые требуют от тебя всего, наказывают за небрежность и вознаграждают точность. Ты выучил каждый фрейм паттерна босса, практикуешь технику движения в пустых комнатах.",
    tell: "Они тренируются в пустой комнате — без врагов, без задач — 20 минут, прежде чем снова попробовать босса.",
    onlyYouWould: [
      "Выключить музыку и снизить разрешение специально для минимизации задержки ввода в одиночной игре",
      "Почувствовать скуку от игры после трёх попыток, если она ни разу не потребовала полной концентрации",
      "С искренней убеждённостью назвать босса «честным» после 60 смертей от его рук",
    ],
    shadow: "У тебя почти нулевая толерантность к играм, которые кажутся «слишком лёгкими», и ты часто отвергаешь любимые всеми игры как поверхностные. Ты можешь выглядеть снобом в вопросах сложности. Казуальные игровые сессии с менее опытными игроками могут казаться тебе мучительными.",
    personality: "Твоя ориентация на мастерство не ограничивается играми. Что бы тебя ни волновало, ты практикуешь это осознанно, держишь себя по стандартам, которые другие считают избыточными, и находишь «достаточно хорошо» искренне неудовлетворительным. Ты тот, кто продолжает оттачивать что-то после того, как все остальные двинулись дальше — не из перфекционизма, а из чёткого внутреннего ощущения, что ты ещё не достиг того, что знаешь как возможное.",
    affinity: ["Лягушка", "Сокол", "Летучая мышь"],
    clashes: ["Медведь", "Дельфин"],
  },
  bear: {
    name: "Медведь",
    tagline: '"Я сегодня построил целую деревню. Никто не умер. Это было идеально."',
    rarity: "31% игроков",
    desc: "Медведю нечего доказывать. Ты играешь ради уюта, разгрузки, чтобы погрузиться в мягкий мир, который ничего от тебя не требует. Будь то четырёхчасовой марафон на ферме или мобильные игры в дороге — мотивация одна: игры как спутник, не как соревнование. Одни Медведи глубоко погружаются в один уютный мир, другие перебирают множество — в украденных моментах между делами. В любом случае стресс — враг, а твоя библиотека игр — музей спокойствия.",
    tell: "Они уже четыре часа украшают игровой дом мебелью, которую не увидит ни один другой игрок.",
    onlyYouWould: [
      "Начать уютную игру заново, просто чтобы снова пережить спокойные начальные часы",
      "Отказаться от мультиплеерного приглашения, потому что в игре нужно срочно заняться фермой",
      "Иметь специально подобранный плейлист, идеально соответствующий настроению текущего симулятора фермы",
    ],
    shadow: "Ты можешь путать комфорт с глубиной, возвращаясь к тем же уютным петлям годами, избегая переживаний, которые могли бы тебя по-настоящему изменить. Линия между расслаблением и избеганием может размываться незаметно.",
    personality: "Ты понимаешь ценность психологической безопасности и создаёшь её для других естественно — тёплая обстановка, стабильные ритуалы, пространство, где ничего не нужно доказывать. Ты тот человек, рядом с которым другие расслабляются, сами не зная почему. Риск в том, что «комфортно» может стать местом, из которого ты никогда не выходишь, а настоящий рост обычно требует именно того трения, которое ты научился минимизировать.",
    affinity: ["Дельфин", "Сова", "Лис"],
    clashes: ["Сокол", "Геккон"],
  },
  bat: {
    name: "Летучая мышь",
    tagline: '"Я не следую критическому пути. Критического пути не существует."',
    rarity: "7% игроков",
    desc: "Летучая мышь — исследователь без маршрута. Ты ориентируешься эхолокацией, отражаясь от тёмных стен игровых миров, находя то, что никто другой не заметил. Ты не выполняешь задания — ты исследуешь территорию. Залезаешь на гору просто чтобы увидеть, что за ней.",
    tell: "Они прошли 30% основного сюжета за 60 часов — и считают, что это неплохой прогресс.",
    onlyYouWould: [
      "Забраться на гору в игре без какой-либо цели — только чтобы увидеть вид с вершины",
      "Испытывать лёгкую, но настоящую тревогу в играх с невидимыми стенами или загрузочными коридорами",
      "Намеренно заблудиться в новой локации, чтобы пережить удовольствие от нахождения обратного пути",
    ],
    shadow: "Ты можешь потеряться — буквально и фигурально — и так и не закончить игры. Твой беклог огромен. Ты иногда не добираешься до концовок, потому что путешествие тебе было достаточно. Строго структурированные линейные игры ощущаются как коридоры.",
    personality: "Ты создан для начал. Идеи, новые направления, неожиданные связи между областями — ты генерируешь их естественно и с настоящим энтузиазмом. Сложность не в том, чтобы начать; а в том, что примерно в момент, когда начинается настоящая работа, появляется следующая интересная вещь. У тебя больше незавершённых проектов и недочитанных книг, чем у почти любого знакомого, — и необычно широкий диапазон вещей, о которых ты кое-что знаешь.",
    affinity: ["Сова", "Лис", "Медведь"],
    clashes: ["Сокол", "Дракон"],
  },
};


const ARCHETYPE_PILLS_RU = [
  "Сокол", "Волк", "Сова", "Лягушка", "Дракон", "Дельфин",
  "Лис", "Геккон", "Медведь", "Летучая мышь",
];

// ═══════════════════════════════════════════════════════
// ARCHETYPE DEFINITIONS
// ═══════════════════════════════════════════════════════
const ARCHETYPES = {
  falcon: {
    emoji: "🦅",
    name: "The Falcon",
    tagline: '"Eyes on the prize, talons on the leaderboard."',
    rarity: "8% of players",
    desc: "The Falcon is a precision-driven competitor whose entire gaming identity is built around measurable performance. You don't play to explore or relax — you play to WIN, and you want proof of it. Ranked modes, ladder climbs, KDA ratios, and tournament brackets are your natural language. You study replays, optimize keybinds, and can recall your peak rank from three years ago to the decimal. The thrill isn't the match itself — it's the moment the numbers go up.",
    tell: "They check their rank or KDA before closing the game — every single time.",
    traits: ["Fiercely competitive", "Data-driven", "Mechanically precise", "Rank-obsessed", "Disciplined practice"],
    onlyYouWould: [
      "Queue for ranked at 2am specifically to recover from a bad loss earlier that evening",
      "Know your win rate to one decimal place but still insist you 'don't really care about stats'",
      "Feel genuine, lasting frustration when a teammate ignores your clearly optimal play call",
    ],
    games: [
      { name: "Valorant / CS2", genre: "Tactical FPS" },
      { name: "League of Legends", genre: "MOBA" },
      { name: "Rocket League", genre: "Competitive Sports" },
      { name: "Street Fighter 6", genre: "Fighting Game" },
      { name: "StarCraft II", genre: "RTS" },
      { name: "Tekken 8", genre: "Fighting Game" },
      { name: "Apex Legends (Ranked)", genre: "Battle Royale" },
      { name: "Mortal Kombat 1", genre: "Fighting Game" },
      { name: "Dota 2", genre: "MOBA" },
      { name: "Guilty Gear Strive", genre: "Fighting Game" },
    ],
  },
  wolf: {
    emoji: "🐺",
    name: "The Wolf",
    tagline: '"Alone I\'m dangerous. With my pack, I\'m unstoppable."',
    rarity: "11% of players",
    desc: "The Wolf lives for coordinated, social play — not for solo glory, but for the electric synergy of a well-oiled squad. You remember every callout, every clutch rotation, every time a perfectly executed team strategy dismantled the enemy. You're the player who rallies teammates after a rough round, drafts the Discord server rules, and organizes practice sessions. Competition matters, but only when it's shared — a victory with your pack is worth ten solo trophies.",
    tell: "They've named their friend group's squad, have matching profile icons, and have drafted a practice schedule at least once.",
    traits: ["Team-first mentality", "Natural communicator", "Tactical thinker", "Loyal to squad", "Leadership instinct"],
    onlyYouWould: [
      "Stay up until 3am not because the game is good, but because everyone is still online",
      "Feel personally hurt when a teammate quits a session without warning",
      "Organize a 6-person co-op run for a game that was designed for 2",
    ],
    games: [
      { name: "Rainbow Six Siege", genre: "Tactical Co-op" },
      { name: "Deep Rock Galactic", genre: "Co-op Shooter" },
      { name: "Helldivers 2", genre: "Squad Action" },
      { name: "World of Warcraft (Raids)", genre: "MMO" },
      { name: "Overwatch 2", genre: "Team FPS" },
      { name: "FFXIV (Savage Raids)", genre: "MMO" },
      { name: "Lethal Company", genre: "Co-op Horror" },
      { name: "Monster Hunter: Wilds", genre: "Co-op Action RPG" },
      { name: "Phasmophobia", genre: "Co-op Investigation" },
      { name: "Left 4 Dead 2", genre: "Co-op Shooter" },
    ],
  },
  owl: {
    emoji: "🦉",
    name: "The Owl",
    tagline: '"The story isn\'t in the cutscenes. It\'s in every book, item description, and loading screen."',
    rarity: "9% of players",
    desc: "The Owl is the lore devourer, the wiki architect, the player who pauses before entering a dungeon to read every piece of environmental storytelling on the walls. You're not just playing games — you're inhabiting entire worlds. You can recite the political history of fictional kingdoms. You write theories. You notice when an NPC's dialogue changed after the third act. For you, a game's greatest achievement isn't its mechanics; it's the depth of its fictional reality.",
    tell: "They pause mid-game to read a tombstone inscription that serves absolutely no gameplay purpose.",
    traits: ["Lore completionist", "Narrative immersion", "Observational depth", "Wiki contributor", "Slow and deliberate"],
    onlyYouWould: [
      "Refuse to skip a single cutscene, even on a second playthrough of a game you know by heart",
      "Read the entire in-game bestiary before encountering a single enemy it describes",
      "Have well-reasoned opinions on lore details that subtly contradict what the developers intended",
    ],
    games: [
      { name: "Elden Ring", genre: "Action RPG" },
      { name: "Disco Elysium", genre: "Narrative RPG" },
      { name: "Planescape: Torment", genre: "Classic RPG" },
      { name: "Pathologic 2", genre: "Survival Drama" },
      { name: "Hollow Knight", genre: "Metroidvania" },
      { name: "Morrowind", genre: "Open World RPG" },
      { name: "Baldur's Gate 3", genre: "CRPG" },
      { name: "Dark Souls (Lore)", genre: "Environmental Storytelling" },
      { name: "Divinity: Original Sin 2", genre: "Tactical RPG" },
      { name: "Pentiment", genre: "Narrative Adventure" },
    ],
  },
  frog: {
    emoji: "🐸",
    name: "The Frog",
    tagline: '"The current Any% world record is 47 minutes and I will demolish it."',
    rarity: "5% of players",
    desc: "The Frog doesn't play games — the Frog dissects them. Where others see a fantasy world, you see a physics engine with exploitable edge cases. Speedrunning, sequence-breaking, out-of-bounds glitches, unintended mechanics: these aren't bugs to you, they're the secret language the game speaks when no one's looking. You have a deep, almost perverse love for the hidden skeleton of games. Optimization is your art form.",
    tell: "They know the frame-perfect input window for a skip that saves exactly 8 seconds.",
    traits: ["Speedrunner DNA", "Glitch hunter", "Deeply analytical", "Anti-narrative (systems-first)", "Relentless optimizer"],
    onlyYouWould: [
      "Feel genuine excitement — not frustration — the moment you discover a game-breaking glitch",
      "Skip every single cutscene without hesitation and feel absolutely nothing about it",
      "Spend 50 hours 'completing' a game in ways the developers never intended, then move on",
    ],
    games: [
      { name: "Super Mario Odyssey", genre: "Platformer Speedrun" },
      { name: "Celeste", genre: "Precision Platformer" },
      { name: "Dark Souls (Any%)", genre: "Action RPG Speedrun" },
      { name: "Portal 2", genre: "Puzzle/Speedrun" },
      { name: "Getting Over It", genre: "Precision Challenge" },
      { name: "Trackmania", genre: "Racing Precision" },
      { name: "Neon White", genre: "Speedrun FPS" },
      { name: "Spelunky 2", genre: "Roguelike Speedrun" },
      { name: "Mirror's Edge", genre: "Parkour FPS" },
      { name: "Ori and the Will of the Wisps", genre: "Precision Platformer" },
    ],
  },
  dragon: {
    emoji: "🐉",
    name: "The Dragon",
    tagline: '"Level 1 is an insult. I will be gods before this week is over."',
    rarity: "14% of players",
    desc: "The Dragon craves power — not over other players, but over the game world itself. You exist for the moment your build becomes unstoppable, when enemies that were once terrifying become ash underfoot. You grind with religious devotion, not because you have to, but because every number going up is deeply, intrinsically satisfying. Gear score, skill trees, prestige levels, endless loop progression systems — these are your cathedrals. You want to become legend.",
    tell: "They're still playing a game they openly called 'not that good' because the gear treadmill still has one more tier.",
    traits: ["Power-progression obsessed", "Methodical grinder", "Build theorycrafting", "Prestige seeker", "Loop endurance"],
    onlyYouWould: [
      "Accumulate 1,000 hours in a game you consider mediocre, simply because the numbers kept going up",
      "Feel genuine loss when a game patches away a currency or progression system you'd been grinding",
      "Know the exact drop rate percentage for items you've been farming for weeks — from memory",
    ],
    games: [
      { name: "Path of Exile 2", genre: "ARPG" },
      { name: "Destiny 2 (Endgame)", genre: "Looter Shooter" },
      { name: "Diablo IV", genre: "ARPG" },
      { name: "Monster Hunter: World", genre: "Action RPG" },
      { name: "Warframe", genre: "Free-to-Play Looter" },
      { name: "Final Fantasy XIV", genre: "MMO" },
      { name: "Genshin Impact", genre: "Gacha RPG" },
      { name: "World of Warcraft (Mythic+)", genre: "MMO Endgame" },
      { name: "The Division 2", genre: "Looter Shooter" },
      { name: "Lost Ark", genre: "MMO ARPG" },
    ],
  },
  dolphin: {
    emoji: "🐬",
    name: "The Dolphin",
    tagline: '"Best session ever. We played literally nothing special. But everyone was there."',
    rarity: "13% of players",
    desc: "The Dolphin doesn't care if the game is good — they care if the people playing it are great. For you, games are a social venue, a way to maintain friendships and create shared memories. The actual game is almost incidental. You've had transcendent evenings playing terrible party games with the right people, and you've felt nothing playing 'masterpieces' alone. You're the one who organizes game nights, introduces people to new games, and remembers everyone's preferences.",
    tell: "They remember the funniest moment from last game night more vividly than any single-player ending they've ever seen.",
    traits: ["Intrinsically social", "Party game maestro", "Mood-reader", "Friendship architect", "Adaptable to any genre"],
    onlyYouWould: [
      "Buy a game you'll never enjoy solo just because your friends have it and want to play together",
      "Have more fun playing a mediocre game badly with people than playing a masterpiece alone",
      "Plan an entire gaming session around who can show up, not what to play",
    ],
    games: [
      { name: "Jackbox Party Pack", genre: "Party Game" },
      { name: "It Takes Two", genre: "Co-op Adventure" },
      { name: "Overcooked! 2", genre: "Co-op Chaos" },
      { name: "Among Us", genre: "Social Deduction" },
      { name: "Nintendo Switch Sports", genre: "Party Sports" },
      { name: "Phasmophobia", genre: "Social Horror" },
      { name: "Mario Party Superstars", genre: "Party Game" },
      { name: "Fall Guys", genre: "Battle Royale Party" },
      { name: "Keep Talking and Nobody Explodes", genre: "Co-op Puzzle" },
      { name: "Gartic Phone", genre: "Social Drawing" },
    ],
  },
  fox: {
    emoji: "🦊",
    name: "The Fox",
    tagline: '"I had the answer before you finished explaining the puzzle."',
    rarity: "15% of players",
    desc: "The Fox is the strategic architect — part puzzle-solver, part systems engineer. You exist to understand how things work, then make them work better. Whether you're theorycrafting builds, optimizing factory throughput, solving logic puzzles, or redesigning your base layout from scratch because the flow wasn't right — the underlying drive is the same: master the rules, then bend them to your will. You read patch notes for fun. You've built spreadsheets no one asked for. The fun isn't in winning — it's in the moment a system clicks into place.",
    tell: "They pause a co-op session to explain the optimal routing strategy while everyone else is already trying to play.",
    traits: ["Systems architect", "Strategic depth seeker", "Optimization-driven", "Methodical planner", "Quietly proud problem-solver"],
    onlyYouWould: [
      "Solve a puzzle without looking it up and feel quietly smug about it for days",
      "Build a voluntary spreadsheet for a game's crafting economy because it was faster than the wiki",
      "Tear down a working factory because the bus layout isn't scalable enough for your standards",
    ],
    games: [
      { name: "Slay the Spire", genre: "Deckbuilder Roguelike" },
      { name: "Factorio", genre: "Factory Automation" },
      { name: "Into the Breach", genre: "Tactical Strategy" },
      { name: "Baba Is You", genre: "Logic Puzzle" },
      { name: "Satisfactory", genre: "3D Factory Builder" },
      { name: "Outer Wilds", genre: "Exploration Mystery" },
      { name: "Civilization VI", genre: "4X Strategy" },
      { name: "Kerbal Space Program", genre: "Physics Sandbox" },
      { name: "Opus Magnum", genre: "Programming Puzzle" },
      { name: "Shapez", genre: "Factory Automation" },
    ],
  },
  gecko: {
    emoji: "🦎",
    name: "The Gecko",
    tagline: '"I\'ve done this boss 70 times. I\'m not frustrated. I\'m learning."',
    rarity: "6% of players",
    desc: "The Gecko is defined by one thing above all: mastery. Not progression, not narrative, not social — pure, uncut mechanical mastery. You want games that demand everything from you, that punish sloppiness and reward precision. You're the player who learned every frame of a boss pattern, who practices movement tech in empty rooms, who could write an essay on the feel of a dodge roll. The harder the game, the more you love it.",
    tell: "They practice in an empty room — no enemies, no objectives — for 20 minutes before attempting the boss again.",
    traits: ["Mastery-obsessed", "High pain tolerance", "Precision-first", "Patience of stone", "Anti-hand-holding"],
    onlyYouWould: [
      "Turn off music and reduce resolution specifically to minimize input lag in a single-player game",
      "Feel bored by a game after 3 attempts if it never demanded your full concentration",
      "Describe a boss as 'fair' with genuine conviction after dying to it 60 times",
    ],
    games: [
      { name: "Sekiro: Shadows Die Twice", genre: "Action / Precision" },
      { name: "Hollow Knight", genre: "Precision Platformer" },
      { name: "Hades II", genre: "Action Roguelike" },
      { name: "Cuphead", genre: "Run & Gun" },
      { name: "Elden Ring (DLC bosses)", genre: "Soulslike" },
      { name: "Dead Cells", genre: "Roguelike Metroidvania" },
      { name: "Sifu", genre: "Martial Arts Action" },
      { name: "Returnal", genre: "Roguelike Shooter" },
      { name: "Nioh 2", genre: "Soulslike ARPG" },
      { name: "Furi", genre: "Boss Rush" },
    ],
  },
  bear: {
    emoji: "🐻",
    name: "The Bear",
    tagline: '"I built an entire village today. Nobody died. It was perfect."',
    rarity: "31% of players",
    desc: "The Bear doesn't game to prove anything. You play to be cozy, to unwind, to sink into something gentle that asks nothing of you but presence. Whether you're tending a farm for four hours straight or bouncing between mobile games during your commute — the drive is the same: gaming as companion, not competition. Some Bears nest deeply in one cozy world; others graze across many, dipping in and out in stolen moments. Either way, stress is the enemy, and your game library is a museum of tranquility.",
    tell: "They're on hour four decorating their in-game home with furniture that no other player will ever see — or they've played the same 3-minute mobile loop 40 times across a single day.",
    traits: ["Cozy-first philosophy", "Creative sandbox lover", "Low-friction explorer", "Anti-competitive", "Plays anywhere, anytime"],
    onlyYouWould: [
      "Restart a cozy game from scratch just to relive the calming early hours",
      "Turn down a multiplayer invitation because your in-game farm genuinely needs tending",
      "Have a genuinely impressive streak on a daily puzzle game that started 'just to kill 2 minutes'",
    ],
    games: [
      { name: "Stardew Valley", genre: "Farming Sim" },
      { name: "Animal Crossing: NH", genre: "Life Sim" },
      { name: "Minecraft (Creative)", genre: "Sandbox" },
      { name: "Wordle / NYT Games", genre: "Daily Puzzle" },
      { name: "Spiritfarer", genre: "Cozy Indie" },
      { name: "Monument Valley", genre: "Puzzle Adventure" },
      { name: "Unpacking", genre: "Cozy Puzzle" },
      { name: "A Short Hike", genre: "Exploration" },
      { name: "Coffee Talk", genre: "Visual Novel" },
      { name: "Dorfromantik", genre: "Relaxing Strategy" },
    ],
  },
  bat: {
    emoji: "🦇",
    name: "The Bat",
    tagline: '"I don\'t follow the critical path. There is no critical path."',
    rarity: "7% of players",
    desc: "The Bat is a free-form explorer — you navigate by echolocation, bouncing off the dark walls of game worlds to find what no one else noticed. You're not doing quests; you're surveying territory. You climb the mountain just to see what's behind it. You read every environmental clue. You ignore the main story until you've exhausted every inch of the map. Open worlds weren't made for you — you were made for them.",
    tell: "They've completed 30% of the main story after 60 hours of play, and they consider this to be good progress.",
    traits: ["Compulsive map revealer", "Off-path wanderer", "Discoverer of secrets", "Environment reader", "Anti-rush"],
    onlyYouWould: [
      "Climb a mountain in-game with no objective, purely to see what the view looks like from the top",
      "Feel mild but real anxiety in games with invisible walls or loading corridors disguised as caves",
      "Intentionally get lost in a new area just to experience the satisfaction of finding your way back",
    ],
    games: [
      { name: "The Elder Scrolls V: Skyrim", genre: "Open World RPG" },
      { name: "Red Dead Redemption 2", genre: "Open World" },
      { name: "Outer Wilds", genre: "Exploration Mystery" },
      { name: "Breath of the Wild", genre: "Open World Action" },
      { name: "No Man's Sky", genre: "Space Exploration" },
      { name: "Subnautica", genre: "Survival Exploration" },
      { name: "Tears of the Kingdom", genre: "Open World Action" },
      { name: "Death Stranding", genre: "Exploration / Walking Sim" },
      { name: "Sable", genre: "Open World Exploration" },
      { name: "The Witcher 3: Wild Hunt", genre: "Open World RPG" },
    ],
  },
};

// ═══════════════════════════════════════════════════════
// QUESTIONS — 22 binary "would you rather" dilemmas
// Each choice pushes 2-3 axes; user picks exactly one of two
// ═══════════════════════════════════════════════════════
const QUESTIONS = [
  // ── SOCIAL (Q1-Q4) ──
  // Q1 — Social: quality of game vs quality of company
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "Play an incredible game completely solo", label_ru: "Играть в крутую игру одному", axes: { social: -0.7, immersion: 0.3 } },
      { label: "Play a mediocre game with great friends", label_ru: "Играть в средненькую игру с хорошей компанией", axes: { social: 0.7, immersion: -0.3 } },
    ]
  },
  // Q2 — Social: team role preference
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "Hop on voice chat and coordinate with a group", label_ru: "Зайти в войс и играть с командой", axes: { social: 0.7, competition: 0.3 } },
      { label: "Put on headphones and handle things yourself", label_ru: "Надеть наушники и разрулить самому", axes: { social: -0.7, mastery: 0.3 } },
    ]
  },
  // Q3 — Social: sharing achievements
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "Share your best gaming moment with friends immediately", label_ru: "Сразу скинуть друзьям свой лучший момент", axes: { social: 0.7, competition: 0.2 } },
      { label: "Savor it privately — you know what you did", label_ru: "Оставить при себе — ты и так знаешь, что сделал", axes: { social: -0.7, mastery: 0.2 } },
    ]
  },
  // Q4 — Social: community engagement
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "Join a guild or clan and build something together", label_ru: "Вступить в гильдию или клан и строить что-то вместе", axes: { social: 0.7, commitment: 0.3 } },
      { label: "Stay independent — no obligations, no drama", label_ru: "Оставаться независимым — никаких обязательств, никакой драмы", axes: { social: -0.7, commitment: -0.3 } },
    ]
  },
  // ── IMMERSION (Q5-Q8) ──
  // Q5 — Immersion: lore engagement
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "Stop to read the lore notes scattered around a dungeon", label_ru: "Читать все записки и лор в подземелье", axes: { immersion: 0.7, structure: -0.3 } },
      { label: "Push deeper into the dungeon — you're here for the action", label_ru: "Идти дальше — ты здесь ради экшена", axes: { immersion: -0.7, mastery: 0.3 } },
    ]
  },
  // Q6 — Immersion: world vs mechanics
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "A game with a breathtaking world but simple mechanics", label_ru: "Игру с потрясающим миром, но простыми механиками", axes: { immersion: 0.7, structure: -0.3 } },
      { label: "A game with deep, complex mechanics but a generic world", label_ru: "Игру с глубокими механиками, но шаблонным миром", axes: { immersion: -0.7, structure: 0.3 } },
    ]
  },
  // Q7 — Immersion: character identity
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "Play a character with a rich, pre-written backstory", label_ru: "Играть персонажем с богатой, прописанной предысторией", axes: { immersion: 0.7, commitment: 0.2 } },
      { label: "Play a blank slate you define entirely yourself", label_ru: "Играть персонажем, которого создаёшь сам с нуля", axes: { immersion: -0.7, structure: 0.3 } },
    ]
  },
  // Q8 — Immersion: vista vs build
  {
    text: "You have 20 free minutes in-game. Would you rather...",
    text_ru: "У тебя есть 20 свободных минут в игре. Что бы ты предпочёл...",
    choices: [
      { label: "Explore a beautiful area with no gameplay purpose", label_ru: "Исследовать красивую локацию без игровой цели", axes: { immersion: 0.7, competition: -0.3 } },
      { label: "Spend it optimizing your character build", label_ru: "Потратить на оптимизацию билда", axes: { immersion: -0.7, structure: 0.5, mastery: 0.2 } },
    ]
  },
  // ── MASTERY (Q9-Q12) ──
  // Q9 — Mastery: persistence vs efficiency
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "Keep throwing yourself at a boss until you crack it yourself", label_ru: "Долбить босса, пока не победишь сам", axes: { mastery: 0.7, commitment: 0.3 } },
      { label: "Look up a strategy so you can see the rest of the game", label_ru: "Загуглить тактику и пойти дальше", axes: { mastery: -0.7, commitment: -0.3 } },
    ]
  },
  // Q10 — Mastery: depth vs breadth
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "Master one character or weapon completely", label_ru: "Выучить одного персонажа или оружие вдоль и поперёк", axes: { mastery: 0.7, commitment: 0.3 } },
      { label: "Be decent with all of them", label_ru: "Уметь нормально играть за всех", axes: { mastery: -0.5, commitment: -0.3, structure: 0.2 } },
    ]
  },
  // Q11 — Mastery: balanced vs breakable
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "A perfectly balanced game you can't cheese", label_ru: "Идеально сбалансированную игру, которую нельзя сломать", axes: { structure: -0.7, competition: 0.3 } },
      { label: "A game you can break wide open with enough knowledge", label_ru: "Игру, которую можно разнести, если хватает знаний", axes: { structure: 0.7, competition: -0.3 } },
    ]
  },
  // Q12 — Mastery: decompression style
  {
    text: "After a rough day, would you rather...",
    text_ru: "После тяжёлого дня, что бы ты предпочёл...",
    choices: [
      { label: "Load up something intense — stress burns off stress", label_ru: "Запустить что-то жёсткое — клин клином", axes: { mastery: 0.7, competition: 0.2 } },
      { label: "Load up something gentle — you've had enough friction for today", label_ru: "Запустить что-то спокойное — на сегодня хватит", axes: { mastery: -0.7, immersion: 0.3 } },
    ]
  },
  // ── COMPETITION (Q13-Q15) ──
  // Q13 — Competition: opponent vs solo achievement
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "Win a close match against a worthy opponent", label_ru: "Выиграть плотный матч у сильного противника", axes: { competition: 0.7, social: 0.2 } },
      { label: "Pull off a creative solo achievement nobody asked for", label_ru: "Провернуть что-то крутое в одиночку, о чём никто не просил", axes: { competition: -0.5, immersion: 0.3, mastery: 0.2 } },
    ]
  },
  // Q14 — Competition: leaderboard vs exploration
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "Top the leaderboard in a game you're already good at", label_ru: "Забраться на топ лидерборда в знакомой игре", axes: { competition: 0.7, commitment: 0.3 } },
      { label: "Explore a brand new game you've never tried", label_ru: "Попробовать совершенно новую игру, в которую ещё не играл", axes: { competition: -0.7, immersion: 0.3 } },
    ]
  },
  // Q15 — Competition: losing streak response
  {
    text: "Your rank drops after a losing streak. Would you rather...",
    text_ru: "Твой рейтинг падает после серии поражений. Что бы ты предпочёл...",
    choices: [
      { label: "Queue up again — you're not ending the night on a loss", label_ru: "Встать в очередь — не заканчивать же на поражении", axes: { competition: 0.7, mastery: 0.3 } },
      { label: "Switch to something else — no point playing tilted", label_ru: "Переключиться на что-то другое — нет смысла играть на тильте", axes: { competition: -0.7, commitment: -0.3 } },
    ]
  },
  // ── STRUCTURE (Q16-Q19) ──
  // Q16 — Structure: exploit ethics
  {
    text: "You discover an unintended shortcut in a game. Would you rather...",
    text_ru: "Ты нашёл незапланированный эксплойт в игре. Что бы ты предпочёл...",
    choices: [
      { label: "Use it to your advantage — the game allows it, so it's fair", label_ru: "Юзать — игра позволяет, значит всё честно", axes: { structure: 0.7, mastery: 0.3 } },
      { label: "Play as intended — exploits cheapen the experience", label_ru: "Играть как задумано — эксплойты обесценивают опыт", axes: { structure: -0.5, immersion: 0.4 } },
    ]
  },
  // Q17 — Structure: theorycrafting vs playing
  {
    text: "You have a free evening for gaming. Would you rather...",
    text_ru: "У тебя свободный вечер для игр. Что бы ты предпочёл...",
    choices: [
      { label: "Spend it theorycrafting builds and reading wikis", label_ru: "Провести его за теорикрафтингом билдов и чтением вики", axes: { structure: 0.7, commitment: 0.3 } },
      { label: "Spend it actually playing the game", label_ru: "Просто поиграть", axes: { structure: -0.5, immersion: 0.3 } },
    ]
  },
  // Q18 — Structure: meta vs personal style
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "Follow the optimal meta strategy", label_ru: "Играть по мете", axes: { structure: 0.7, competition: 0.3 } },
      { label: "Experiment with your own unorthodox approach", label_ru: "Пробовать свой нестандартный подход", axes: { structure: -0.7, immersion: 0.2 } },
    ]
  },
  // Q19 — Structure: complexity preference
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "A game with complex interlocking systems to master", label_ru: "Игру со сложными переплетёнными системами", axes: { structure: 0.7, mastery: 0.3 } },
      { label: "A game with elegant simplicity that's easy to pick up", label_ru: "Игру с элегантной простотой, в которую легко войти", axes: { structure: -0.7, mastery: -0.2 } },
    ]
  },
  // ── COMMITMENT (Q20-Q22) ──
  // Q20 — Commitment: depth vs breadth
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "Put 500 hours into one game this year", label_ru: "Залить 500 часов в одну игру за год", axes: { commitment: 0.7, mastery: 0.3 } },
      { label: "Play 50 hours each across 10 different games", label_ru: "Поиграть по 50 часов в 10 разных игр", axes: { commitment: -0.7, immersion: 0.2 } },
    ]
  },
  // Q21 — Commitment: finishing philosophy
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "See a game through to the credits, even through slow stretches", label_ru: "Дойти до титров, даже через затянутые моменты", axes: { commitment: 0.7, structure: 0.2 } },
      { label: "Move on once a game stops earning your time", label_ru: "Забить, когда игра перестаёт цеплять", axes: { commitment: -0.7, structure: -0.2 } },
    ]
  },
  // Q22 — Commitment: onboarding patience
  {
    text: "Would you rather...",
    text_ru: "Что бы ты предпочёл...",
    choices: [
      { label: "A game with a 10-hour learning curve that becomes incredible", label_ru: "Игру, в которую нужно 10 часов въехать, зато потом она невероятна", axes: { commitment: 0.7, immersion: 0.3 } },
      { label: "A game that's fun from the very first minute", label_ru: "Игру, которая цепляет с первой минуты", axes: { commitment: -0.7, mastery: -0.2 } },
    ]
  },
];

// ═══════════════════════════════════════════════════════
// LATENT FACTOR MODEL — 6 axes
// social:     0=solo        ↔ 1=social
// immersion:  0=surface     ↔ 1=deep
// mastery:    0=casual      ↔ 1=mastery-driven
// competition:0=cooperative ↔ 1=competitive
// structure:  0=freeform    ↔ 1=systematic
// commitment: 0=grazing     ↔ 1=investing
// ═══════════════════════════════════════════════════════
const AXES = ['social', 'immersion', 'mastery', 'competition', 'structure', 'commitment'];

const AXIS_CONFIG = [
  { key: 'social',     en: { name: 'Social Drive',   low: 'Solo',        high: 'Social'      }, ru: { name: 'Социальность',     low: 'Одиночка',      high: 'Социальный'    } },
  { key: 'immersion',  en: { name: 'Immersion',      low: 'Surface',     high: 'Deep'        }, ru: { name: 'Погружение',        low: 'Поверхностный', high: 'Глубокий'      } },
  { key: 'mastery',    en: { name: 'Mastery Drive',  low: 'Casual',      high: 'Mastery'     }, ru: { name: 'Тяга к мастерству', low: 'Казуальный',    high: 'Мастерство'    } },
  { key: 'competition',en: { name: 'Competition',    low: 'Cooperative', high: 'Competitive' }, ru: { name: 'Соревновательность',low: 'Кооперативный', high: 'Конкурентный'  } },
  { key: 'structure',  en: { name: 'Structure',      low: 'Freeform',    high: 'Systematic'  }, ru: { name: 'Структурность',     low: 'Свободный',     high: 'Системный'     } },
  { key: 'commitment', en: { name: 'Commitment',     low: 'Grazing',     high: 'Investing'   }, ru: { name: 'Вовлечённость',     low: 'Пробует',       high: 'Вкладывается'  } },
];

const ARCHETYPE_VECTORS = {
  falcon:  { social: 0.30, immersion: 0.15, mastery: 0.85, competition: 0.95, structure: 0.70, commitment: 0.80 },
  wolf:    { social: 0.95, immersion: 0.30, mastery: 0.65, competition: 0.70, structure: 0.45, commitment: 0.75 },
  owl:     { social: 0.25, immersion: 0.95, mastery: 0.40, competition: 0.10, structure: 0.15, commitment: 0.90 },
  frog:    { social: 0.15, immersion: 0.10, mastery: 0.90, competition: 0.45, structure: 0.90, commitment: 0.40 },
  dragon:  { social: 0.45, immersion: 0.35, mastery: 0.55, competition: 0.55, structure: 0.70, commitment: 0.95 },
  dolphin: { social: 0.95, immersion: 0.40, mastery: 0.20, competition: 0.25, structure: 0.30, commitment: 0.45 },
  fox:     { social: 0.20, immersion: 0.35, mastery: 0.70, competition: 0.30, structure: 0.95, commitment: 0.85 },
  gecko:   { social: 0.10, immersion: 0.20, mastery: 0.97, competition: 0.55, structure: 0.50, commitment: 0.80 },
  bear:    { social: 0.65, immersion: 0.45, mastery: 0.08, competition: 0.10, structure: 0.25, commitment: 0.50 },
  bat:     { social: 0.20, immersion: 0.80, mastery: 0.35, competition: 0.05, structure: 0.20, commitment: 0.35 },
};

// ═══════════════════════════════════════════════════════
// AXIS_STATS — per-axis mean and std of archetype positions (for Mahalanobis scoring)
// ═══════════════════════════════════════════════════════
const AXIS_STATS = (() => {
  const stats = {};
  AXES.forEach(ax => {
    const vals = Object.values(ARCHETYPE_VECTORS).map(v => v[ax]);
    const mean = vals.reduce((s, v) => s + v, 0) / vals.length;
    const std = Math.sqrt(vals.reduce((s, v) => s + (v - mean) ** 2, 0) / vals.length);
    stats[ax] = { mean, std: Math.max(std, 0.01) };
  });
  return stats;
})();

// ═══════════════════════════════════════════════════════
// PERSONALITY BANDS — Big Five-mapped descriptions per axis score range
// Three bands per axis: low (0–0.33), mid (0.33–0.67), high (0.67–1.0)
// ═══════════════════════════════════════════════════════
const PERSONALITY_BANDS = {
  social: {
    en: [
      { max: 0.33, reading: "Introverted",
        text: "Your social energy is directed primarily inward. You are most productive and satisfied when working independently, and extended social interaction tends to drain rather than energize you. Your relationships tend to be few and deep rather than wide and shallow. In Big Five terms this maps closely to the introversion end of the Extraversion scale." },
      { max: 0.67, reading: "Ambivert",
        text: "You sit in the ambivert range — genuinely capable of social engagement without depending on it for energy. You work effectively alone and with others, adapting between modes without significant cost. Most people find you easy to work with across a range of contexts." },
      { max: 1.00, reading: "Extraverted",
        text: "Your energy is strongly interpersonal. You think better out loud, are energized by other people's presence, and tend to feel flat without social contact. In Big Five terms this maps to high Extraversion: you are naturally expressive, group-oriented, and gain energy from interaction." },
    ],
    ru: [
      { max: 0.33, reading: "Интроверт",
        text: "Твоя социальная энергия направлена преимущественно вовнутрь. Ты наиболее продуктивен и удовлетворён, когда работаешь независимо. Твои отношения немногочисленны, но глубоки. По Большой Пятёрке это соответствует выраженной интроверсии." },
      { max: 0.67, reading: "Амбиверт",
        text: "Ты находишься в зоне амбиверсии — способен к искреннему социальному участию, не завися от него как от источника энергии. Ты одинаково эффективно работаешь в одиночку и в команде." },
      { max: 1.00, reading: "Экстраверт",
        text: "Твоя энергия сильно межличностна. Ты лучше думаешь вслух, заряжаешься от присутствия других людей и чувствуешь опустошённость без социального контакта." },
    ],
  },
  immersion: {
    en: [
      { max: 0.33, reading: "Surface-level",
        text: "You engage with games primarily through their mechanics and systems, not their worlds or stories. Aesthetics and narrative are pleasant decorations, not the reason you play. In Big Five terms this reflects moderate Openness — you appreciate craft without needing to inhabit it. You're the player who skips cutscenes without guilt." },
      { max: 0.67, reading: "Balanced",
        text: "You move fluidly between surface engagement and deep immersion depending on context. A beautifully crafted world can pull you in, but you don't need one to enjoy a game. You appreciate both atmospheric storytelling and clean mechanical design, and context determines which mode activates." },
      { max: 1.00, reading: "Deep Diver",
        text: "You don't just play games — you inhabit them. World-building, environmental storytelling, atmosphere, and narrative depth are not extras; they're the core of your experience. In Big Five terms this maps to high Openness to Aesthetics: you seek depth of feeling and immersive worlds. Shallow or generic settings actively diminish your enjoyment." },
    ],
    ru: [
      { max: 0.33, reading: "Поверхностный",
        text: "Ты вовлекаешься в игры прежде всего через механики и системы, а не миры или сюжеты. Эстетика и нарратив — приятные декорации, но не причина, по которой ты играешь." },
      { max: 0.67, reading: "Сбалансированный",
        text: "Ты свободно переключаешься между поверхностным вовлечением и глубоким погружением в зависимости от контекста. Красиво сделанный мир может тебя затянуть, но тебе он не нужен, чтобы получить удовольствие от игры." },
      { max: 1.00, reading: "Глубокое погружение",
        text: "Ты не просто играешь — ты населяешь игровые миры. Построение мира, нарратив, атмосфера и глубина сюжета — не дополнения, а ядро твоего опыта. Поверхностные сеттинги активно снижают удовольствие." },
    ],
  },
  mastery: {
    en: [
      { max: 0.33, reading: "Comfort-seeking",
        text: "You have a strongly comfort-oriented approach to voluntary activity. You engage to recover, restore, and enjoy — not to push limits. In Big Five terms this reflects low Achievement Striving: you are not intrinsically motivated by difficulty, and you have a healthy relationship with 'good enough.' Your capacity for genuine rest is a real asset." },
      { max: 0.67, reading: "Balanced",
        text: "You have a balanced achievement orientation. You are capable of sustained effort and deliberate challenge when the context warrants it, but you don't seek difficulty for its own sake. You are selective about where you invest hard work, which means your effort is well-targeted rather than spread thin." },
      { max: 1.00, reading: "Mastery-driven",
        text: "You have a strongly mastery-seeking orientation. Difficulty is not something you tolerate — it's something you require. Activities that don't push your current ceiling feel hollow. In Big Five terms this reflects high Achievement Striving combined with low Neuroticism around failure: you are energized by the gap between your current ability and your potential." },
    ],
    ru: [
      { max: 0.33, reading: "Ориентация на комфорт",
        text: "У тебя выраженная комфорто-ориентированная установка. Ты вовлекаешься ради восстановления и удовольствия — не ради преодоления пределов. Ты не мотивирован сложностью ради неё самой." },
      { max: 0.67, reading: "Сбалансированный",
        text: "У тебя сбалансированная ориентация на достижения. Ты способен на устойчивые усилия, когда контекст этого требует, но не ищешь сложности ради неё самой. Ты избирателен в инвестициях усилий." },
      { max: 1.00, reading: "Ориентация на мастерство",
        text: "У тебя выраженная ориентация на мастерство. Сложность — не то, что ты терпишь, а то, что тебе необходимо. Занятия, не толкающие к потолку возможностей, кажутся пустыми." },
    ],
  },
  competition: {
    en: [
      { max: 0.33, reading: "Cooperative",
        text: "You have a strongly non-competitive, cooperative orientation. In Big Five terms this maps to high Agreeableness combined with high Openness: you are more interested in discovery, cooperation, and shared experience than in winning or ranking. You naturally support rather than lead, and competitive framing actively interests you less than collaborative alternatives." },
      { max: 0.67, reading: "Selective",
        text: "You have a selective relationship with competition. You can engage competitively in domains you care about while remaining indifferent elsewhere. You're neither a habitual competitor who needs to win everything nor someone who avoids all competitive contexts — you engage when the stakes feel personally meaningful." },
      { max: 1.00, reading: "Competitive",
        text: "You are strongly competitive. Winning — against opponents, systems, or your own previous performance — is a significant part of what makes activities meaningful. In Big Five terms this maps to low Agreeableness and high Assertiveness: you are direct, results-driven, and tend to impose structure on situations rather than adapt to them." },
    ],
    ru: [
      { max: 0.33, reading: "Кооперативный",
        text: "У тебя выраженная некомпетативная, кооперативная ориентация. Тебя больше интересуют открытие, сотрудничество и общий опыт, чем победа или ранжирование." },
      { max: 0.67, reading: "Избирательный",
        text: "У тебя избирательные отношения с конкуренцией. Ты можешь конкурентно вовлекаться в значимых областях, оставаясь безразличным в других." },
      { max: 1.00, reading: "Конкурентный",
        text: "Ты сильно конкурентен. Победа — над соперниками, системами или собственными прошлыми результатами — значительная часть того, что придаёт деятельности смысл." },
    ],
  },
  structure: {
    en: [
      { max: 0.33, reading: "Freeform",
        text: "Your cognitive style is primarily experiential and intuitive. You engage with things through feel, exploration, and personal connection rather than abstraction or rule structures. In Big Five terms this corresponds to high Openness to Experience alongside moderate Openness to Ideas — you are drawn to depth of feeling over elegant mechanisms. You play by instinct rather than optimization." },
      { max: 0.67, reading: "Balanced",
        text: "You move fluidly between intuitive play and systematic thinking. You can be absorbed in free exploration just as readily as in optimizing a mechanical system — context determines which mode activates. This reflects broad Openness in Big Five terms: you appreciate both the experiential and the analytical." },
      { max: 1.00, reading: "Systematic",
        text: "Your thinking is fundamentally systematic. You naturally abstract, model, and seek underlying rules in whatever you engage with. In Big Five terms this reflects high Openness to Ideas: you are drawn to the architecture behind things rather than their surface form. You are at your best when you can dissect how something works." },
    ],
    ru: [
      { max: 0.33, reading: "Свободный",
        text: "Твой когнитивный стиль преимущественно интуитивный и экспериенциальный. Ты вовлекаешься через ощущения, исследование и личную связь, а не через абстракции и правила. Ты играешь по наитию, а не по оптимизации." },
      { max: 0.67, reading: "Сбалансированный",
        text: "Ты свободно переключаешься между интуитивной игрой и системным мышлением. Контекст определяет, какой режим активируется." },
      { max: 1.00, reading: "Системный",
        text: "Твоё мышление фундаментально системно. Ты естественно абстрагируешь, моделируешь и ищешь базовые правила во всём, с чем сталкиваешься. Ты в своей лучшей форме, когда можешь разобрать, как что-то работает." },
    ],
  },
  commitment: {
    en: [
      { max: 0.33, reading: "Grazer",
        text: "You engage broadly across many games and activities rather than going deep on any one. You decide quickly, switch contexts readily, and are energized by novelty over depth. In Big Five terms this reflects low Conscientiousness on deliberateness alongside excitement-seeking: your strength is rapid scanning across many inputs. The cost is difficulty sustaining attention past the initial engagement window." },
      { max: 0.67, reading: "Adaptive",
        text: "Your engagement depth is flexible and context-dependent. You can commit deeply to something that earns it and shift to lighter engagement when the situation calls for it. You don't have a strong bias toward either depth or breadth, which makes you broadly adaptable. You calibrate investment to actual stakes rather than applying uniform commitment to everything." },
      { max: 1.00, reading: "Investor",
        text: "You are strongly deliberate and depth-oriented. You commit fully to things, sustain focus longer than average, and find satisfaction in slow-building mastery rather than rapid novelty. In Big Five terms this reflects high Conscientiousness: you are resistant to distraction, skeptical of reactive decisions, and most effective when working through something thoroughly. You tend to produce better results through sustained commitment than through speed." },
    ],
    ru: [
      { max: 0.33, reading: "Пробует",
        text: "Ты вовлекаешься широко во множество игр и занятий, а не погружаешься глубоко в одно. Твоя сила — быстрое сканирование множества входящих сигналов. Стоимость — трудность поддержания внимания за начальным окном вовлечения." },
      { max: 0.67, reading: "Адаптивный",
        text: "Глубина твоего вовлечения гибка и зависит от контекста. Ты можешь глубоко погрузиться в то, что этого заслуживает, и переключиться на более лёгкое вовлечение по ситуации." },
      { max: 1.00, reading: "Вкладывается",
        text: "Ты сильно обдуман и ориентирован на глубину. Ты полностью вкладываешься в вещи, поддерживаешь фокус дольше среднего и находишь удовлетворение в медленно нарастающем мастерстве, а не в быстрой новизне." },
    ],
  },
};

// ═══════════════════════════════════════════════════════
// INSIGHTS — computed from user scores + archetype data
// ═══════════════════════════════════════════════════════
function computeInsights(norm, archKey, sorted, isRu) {
  const archVec = ARCHETYPE_VECTORS[archKey];
  const insights = [];
  const axCfg = k => AXIS_CONFIG.find(a => a.key === k);

  // 1. Strongest signal: axis furthest from 0.5
  let maxDist = 0, strongestAx = AXES[0];
  AXES.forEach(ax => {
    const d = Math.abs(norm[ax] - 0.5);
    if (d > maxDist) { maxDist = d; strongestAx = ax; }
  });
  const strongVal = Math.round(norm[strongestAx] * 100);
  const strongCfg = axCfg(strongestAx);
  const strongPole = norm[strongestAx] > 0.5
    ? (isRu ? strongCfg.ru.high : strongCfg.en.high)
    : (isRu ? strongCfg.ru.low : strongCfg.en.low);
  const strongName = isRu ? strongCfg.ru.name : strongCfg.en.name;
  insights.push({
    icon: '◈',
    title: isRu ? 'Твой сильнейший сигнал' : 'Your strongest signal',
    text: isRu
      ? `${strongName}: ${strongVal}% — ярко выраженный "${strongPole}"`
      : `${strongName}: ${strongVal}% — strongly "${strongPole}"`
  });

  // 2. Biggest deviation from archetype
  let maxDev = 0, devAx = AXES[0];
  AXES.forEach(ax => {
    const d = Math.abs(norm[ax] - archVec[ax]);
    if (d > maxDev) { maxDev = d; devAx = ax; }
  });
  const devCfg = axCfg(devAx);
  const devName = isRu ? devCfg.ru.name : devCfg.en.name;
  const userPct = Math.round(norm[devAx] * 100);
  const archPct = Math.round(archVec[devAx] * 100);
  const archName = isRu ? ARCHETYPES_RU[archKey].name : ARCHETYPES[archKey].name;
  insights.push({
    icon: '◇',
    title: isRu ? 'Где ты отличаешься от архетипа' : 'Where you diverge',
    text: isRu
      ? `${devName}: ты ${userPct}%, а ${archName} — ${archPct}%`
      : `${devName}: you scored ${userPct}% vs ${archName}'s ${archPct}%`
  });

  // 3. Rarest combo: user's two most extreme axes — which archetypes share this
  const ranked = AXES.map(ax => ({ ax, dist: Math.abs(norm[ax] - 0.5) }))
    .sort((a, b) => b.dist - a.dist);
  const top1 = ranked[0].ax, top2 = ranked[1].ax;
  const userDir1 = norm[top1] > 0.5, userDir2 = norm[top2] > 0.5;
  const matching = Object.entries(ARCHETYPE_VECTORS).filter(([k, v]) =>
    (v[top1] > 0.5) === userDir1 && (v[top2] > 0.5) === userDir2
  ).map(([k]) => k);
  const cfg1 = axCfg(top1), cfg2 = axCfg(top2);
  const pole1 = userDir1 ? (isRu ? cfg1.ru.high : cfg1.en.high) : (isRu ? cfg1.ru.low : cfg1.en.low);
  const pole2 = userDir2 ? (isRu ? cfg2.ru.high : cfg2.en.high) : (isRu ? cfg2.ru.low : cfg2.en.low);
  const matchNames = matching
    .filter(k => k !== archKey)
    .slice(0, 2)
    .map(k => isRu ? ARCHETYPES_RU[k].name : ARCHETYPES[k].name);
  if (matchNames.length > 0) {
    insights.push({
      icon: '✦',
      title: isRu ? 'Твоя редкая комбинация' : 'Your rare combination',
      text: isRu
        ? `"${pole1}" + "${pole2}" — это также свойственно: ${matchNames.join(', ')}`
        : `"${pole1}" + "${pole2}" — shared only with ${matchNames.join(', ')}`
    });
  }

  return insights;
}

function computeAnswerStats(answers, isRu) {
  // Count per-axis: how many times the user pushed high vs low
  const axisCounts = {};
  AXES.forEach(ax => { axisCounts[ax] = { high: 0, low: 0, total: 0 }; });

  answers.forEach((ansIdx, qIdx) => {
    if (ansIdx === null) return;
    const choice = QUESTIONS[qIdx].choices[ansIdx];
    Object.entries(choice.axes).forEach(([ax, val]) => {
      if (!axisCounts[ax]) return;
      axisCounts[ax].total++;
      if (val > 0) axisCounts[ax].high++;
      else if (val < 0) axisCounts[ax].low++;
    });
  });

  // Most decisive: highest ratio in one direction
  let bestRatio = 0, decisive = null;
  // Most conflicted: closest to 50/50
  let bestSplit = 1, conflicted = null;

  AXES.forEach(ax => {
    const c = axisCounts[ax];
    if (c.total < 2) return;
    const ratio = Math.max(c.high, c.low) / c.total;
    const split = Math.abs(c.high - c.low) / c.total;
    if (ratio > bestRatio) {
      bestRatio = ratio;
      const cfg = AXIS_CONFIG.find(a => a.key === ax);
      const dir = c.high > c.low;
      decisive = {
        axis: isRu ? cfg.ru.name : cfg.en.name,
        pole: dir ? (isRu ? cfg.ru.high : cfg.en.high) : (isRu ? cfg.ru.low : cfg.en.low),
        count: Math.max(c.high, c.low),
        total: c.total
      };
    }
    if (split < bestSplit) {
      bestSplit = split;
      const cfg = AXIS_CONFIG.find(a => a.key === ax);
      conflicted = {
        axis: isRu ? cfg.ru.name : cfg.en.name,
        high: c.high,
        low: c.low,
        total: c.total
      };
    }
  });

  return { decisive, conflicted };
}

// ═══════════════════════════════════════════════════════
// RADAR CHART — SVG hexagon for 6 axes
// ═══════════════════════════════════════════════════════
function renderRadarChart(norm, archVec, isRu) {
  const pad = 90, inner = 300, size = inner + pad * 2;
  const cx = size / 2, cy = size / 2, r = inner * 0.38;
  const n = AXES.length;

  function polar(i, val) {
    const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
    return [cx + r * val * Math.cos(angle), cy + r * val * Math.sin(angle)];
  }

  function polygon(values, cls) {
    const pts = AXES.map((ax, i) => polar(i, values[ax]).join(',')).join(' ');
    return `<polygon points="${pts}" class="${cls}"/>`;
  }

  // Grid rings at 25%, 50%, 75%, 100%
  let grid = '';
  [0.25, 0.5, 0.75, 1.0].forEach(v => {
    const pts = AXES.map((_, i) => polar(i, v).join(',')).join(' ');
    grid += `<polygon points="${pts}" class="radar-ring"/>`;
  });

  // Grid spokes
  let spokes = '';
  AXES.forEach((_, i) => {
    const [x, y] = polar(i, 1.0);
    spokes += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="radar-spoke"/>`;
  });

  // Labels
  let labels = '';
  AXES.forEach((ax, i) => {
    const cfg = AXIS_CONFIG.find(a => a.key === ax);
    const label = isRu ? cfg.ru.name : cfg.en.name;
    const pct = Math.round(norm[ax] * 100);
    const [x, y] = polar(i, 1.28);
    const anchor = x < cx - 10 ? 'end' : x > cx + 10 ? 'start' : 'middle';
    labels += `<text x="${x}" y="${y}" text-anchor="${anchor}" class="radar-label">${label.toUpperCase()}</text>`;
    labels += `<text x="${x}" y="${y + 16}" text-anchor="${anchor}" class="radar-value">${pct}%</text>`;
  });

  // Dots on user polygon
  let dots = '';
  AXES.forEach((ax, i) => {
    const [x, y] = polar(i, norm[ax]);
    dots += `<circle cx="${x}" cy="${y}" r="3.5" class="radar-dot"/>`;
  });

  return `<svg viewBox="0 0 ${size} ${size}" class="radar-svg" xmlns="http://www.w3.org/2000/svg">
    ${grid}${spokes}
    ${polygon(archVec, 'radar-arch')}
    ${polygon(norm, 'radar-user')}
    ${dots}${labels}
  </svg>`;
}

// ═══════════════════════════════════════════════════════
// SCORING — pure function, no DOM dependencies
// ═══════════════════════════════════════════════════════
function scoreQuiz(answers) {
  // Accumulate raw axis scores from user choices
  const raw = Object.fromEntries(AXES.map(a => [a, 0]));
  answers.forEach((ansIdx, qIdx) => {
    if (ansIdx === null) return;
    Object.entries(QUESTIONS[qIdx].choices[ansIdx].axes).forEach(([ax, val]) => {
      raw[ax] += val;
    });
  });

  // Compute theoretical min/max per axis from answered questions
  const lo = Object.fromEntries(AXES.map(a => [a, 0]));
  const hi = Object.fromEntries(AXES.map(a => [a, 0]));
  answers.forEach((ansIdx, qIdx) => {
    if (ansIdx === null) return;
    const q = QUESTIONS[qIdx];
    AXES.forEach(ax => {
      const vals = q.choices.map(c => c.axes[ax] ?? 0);
      lo[ax] += Math.min(...vals);
      hi[ax] += Math.max(...vals);
    });
  });

  // Normalize each axis to [0, 1]
  const norm = {};
  AXES.forEach(ax => {
    const range = hi[ax] - lo[ax];
    norm[ax] = range === 0 ? 0.5 : Math.max(0, Math.min(1, (raw[ax] - lo[ax]) / range));
  });

  // Mahalanobis-style similarity: standardize each axis by archetype distribution,
  // then compute RMS distance in z-score space. Convert to similarity for display.
  const sorted = Object.entries(ARCHETYPE_VECTORS)
    .map(([key, archVec]) => {
      const sumSq = AXES.reduce((acc, ax) => {
        const { mean, std } = AXIS_STATS[ax];
        const userZ = (norm[ax] - mean) / std;
        const archZ = (archVec[ax] - mean) / std;
        return acc + (userZ - archZ) ** 2;
      }, 0);
      const similarity = 1 / (1 + Math.sqrt(sumSq / AXES.length));
      return [key, similarity];
    })
    .sort((a, b) => b[1] - a[1]);

  return { winner: sorted[0][0], sorted, norm };
}
