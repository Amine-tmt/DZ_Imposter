// ============================================================
// METNAKER — WORD PAIRS DATABASE
// 100% Algerian darja — written phonetically (franco-arabe)
// Every word verified as used in Algeria specifically.
//
// FORMAT: { citizen: "...", impostor: "...", category: "...", hint: "..." }
//   citizen  = the real word (citizen sees this)
//   impostor = reference only / not shown to anyone (used for game balance)
//   hint     = what the impostor sees instead of a word (if hints ON)
//
// TO ADD YOUR OWN WORDS:
//   Add to the custom section at the bottom.
// ============================================================

export const CATEGORIES = {
  makla:    "🍲 Makla",
  blayet:   "📍 Blayet",
  darja:    "🗣️ Darja",
  3adat:    "🎭 3adat",
  machahir: "⭐ Machahir",
  derb:     "🛵 Derb",
  drassa:   "📚 Mdrassa",
  3a2ila:   "👪 3a2ila",
  custom:   "✏️ Ntou3kom",
};

export const WORD_PAIRS = [

  // ══════════════════════════════════════════
  //  MAKLA — ALGERIAN FOOD
  // ══════════════════════════════════════════
  { citizen: "kesra",        impostor: "khoubz el ferran", category: "makla",  hint: "pain fait maison, servi chaud avec tout" },
  { citizen: "chakhchoukha", impostor: "berkoukes",        category: "makla",  hint: "plat en pâte émiettée, classique des fêtes" },
  { citizen: "mhajeb",       impostor: "msemen",           category: "makla",  hint: "galette feuilletée pliée, petit-déj algérien" },
  { citizen: "karantika",    impostor: "el garantita",     category: "makla",  hint: "plat de rue chaud à base de pois chiches, Oran" },
  { citizen: "chorba frik",  impostor: "chorba beida",     category: "makla",  hint: "soupe du Ramadan, yemma la fait chaque soir" },
  { citizen: "tbikha",       impostor: "marqa",            category: "makla",  hint: "ragoût de légumes cuit lentement, vendredi" },
  { citizen: "rechta",       impostor: "fidaou",           category: "makla",  hint: "pâtes plates algéroises, plat d'hiver" },
  { citizen: "bourak",       impostor: "brik",             category: "makla",  hint: "pâte frite farcie, incontournable du Ramadan" },
  { citizen: "kalb elouz",   impostor: "baklawa",          category: "makla",  hint: "gâteau en losange aux amandes, pour les mariages" },
  { citizen: "tamina",       impostor: "zrir",             category: "makla",  hint: "douceur à la semoule grillée, donnée après l'accouchement" },
  { citizen: "makroud",      impostor: "tcharek",          category: "makla",  hint: "gâteau à la semoule et dattes, spécialité de l'est" },
  { citizen: "merguez",      impostor: "qadid",            category: "makla",  hint: "viande rouge épicée, grillée au barbecue" },
  { citizen: "cay",          impostor: "qahwa",            category: "makla",  hint: "boisson chaude en petit verre, chez la voisine" },
  { citizen: "lham lahlou",  impostor: "rechta bel3sel",   category: "makla",  hint: "plat sucré-salé, cérémonie du mariage" },
  { citizen: "3asida",       impostor: "belboula",         category: "makla",  hint: "bouillie de grain épaisse, petit-déj traditionnel" },
  { citizen: "mchi",         impostor: "warka",            category: "makla",  hint: "légumes farcis à la viande, plat du dimanche" },
  { citizen: "matloua",      impostor: "khobz taboun",     category: "makla",  hint: "pain rond cuit à la poêle ou au four" },

  // ══════════════════════════════════════════
  //  BLAYET — PLACES
  // ══════════════════════════════════════════
  { citizen: "casbah",       impostor: "7uma",             category: "blayet", hint: "vieux quartier historique, ruelles étroites" },
  { citizen: "7ammam",       impostor: "douche",           category: "blayet", hint: "là où on va se laver, tradition algérienne" },
  { citizen: "7anut",        impostor: "superette",        category: "blayet", hint: "petite épicerie du coin, il connaît tout le monde" },
  { citizen: "3mariya",      impostor: "souk",             category: "blayet", hint: "marché en plein air, bruyant et animé" },
  { citizen: "qahwa",        impostor: "snack",            category: "blayet", hint: "café où les hommes se retrouvent le matin" },
  { citizen: "stade",        impostor: "terrain",          category: "blayet", hint: "là où se joue le football" },
  { citizen: "tram",         impostor: "taxi",             category: "blayet", hint: "transport en commun dans la ville" },
  { citizen: "cité",         impostor: "7ay",              category: "blayet", hint: "quartier résidentiel, tout le monde se connaît" },
  { citizen: "plage",        impostor: "corniche",         category: "blayet", hint: "destination de l'été, soleil et mer" },
  { citizen: "wilaya",       impostor: "baladia",          category: "blayet", hint: "bureau gouvernemental qu'on déteste visiter" },
  { citizen: "zawiya",       impostor: "masjid",           category: "blayet", hint: "lieu de rassemblement religieux et communautaire" },
  { citizen: "douar",        impostor: "mechta",           category: "blayet", hint: "village rural, là d'où vient la famille" },

  // ══════════════════════════════════════════
  //  DARJA — ALGERIAN EXPRESSIONS
  //  (verified as used specifically in Algeria)
  // ══════════════════════════════════════════
  { citizen: "labas",        impostor: "ghaya",            category: "darja",  hint: "réponse quand on te demande comment tu vas" },
  { citizen: "sa7bi",        impostor: "khouya",           category: "darja",  hint: "comment t'appelles ton meilleur ami" },
  { citizen: "7chouma",      impostor: "3ib",              category: "darja",  hint: "quand quelqu'un fait quelque chose de honteux" },
  { citizen: "zwina",        impostor: "mli7a",            category: "darja",  hint: "compliment sur l'apparence de quelqu'un" },
  { citizen: "wili",         impostor: "ya latif",         category: "darja",  hint: "exclamation de surprise ou de choc" },
  { citizen: "tmara",        impostor: "3ayit",            category: "darja",  hint: "être épuisé et en avoir marre" },
  { citizen: "ga3",          impostor: "koulchi",          category: "darja",  hint: "signifie tout ou tous, sans exception" },
  { citizen: "gach",         impostor: "boulicia",         category: "darja",  hint: "la police, les flics" },
  { citizen: "jaw",          impostor: "ambiance",         category: "darja",  hint: "l'ambiance ou l'atmosphère d'un endroit" },
  { citizen: "za7ri",        impostor: "nsib",             category: "darja",  hint: "quand la chance est avec toi" },
  { citizen: "mra7",         impostor: "far7an",           category: "darja",  hint: "se sentir content et à l'aise" },
  { citizen: "dima",         impostor: "3la toul",         category: "darja",  hint: "toujours, sans exception, tout le temps" },
  { citizen: "khorti",       impostor: "7bal",             category: "darja",  hint: "traiter quelqu'un de fou ou d'absurde" },
  { citizen: "wech rak",     impostor: "ki dayr",          category: "darja",  hint: "demander comment va quelqu'un" },
  { citizen: "3lach",        impostor: "3laach",           category: "darja",  hint: "demander pourquoi" },
  { citizen: "yezzi",        impostor: "besssah",          category: "darja",  hint: "dire à quelqu'un d'arrêter, c'est assez" },
  { citizen: "bzaf",         impostor: "bezzaf",           category: "darja",  hint: "beaucoup, en grande quantité" },
  { citizen: "rahi",         impostor: "rani",             category: "darja",  hint: "elle est / je suis — pronom de présence" },

  // ══════════════════════════════════════════
  //  3ADAT — ALGERIAN CULTURE & TRADITIONS
  // ══════════════════════════════════════════
  { citizen: "zerda",        impostor: "walima",           category: "3adat",  hint: "grand repas communautaire, tout le douar est invité" },
  { citizen: "3arss",        impostor: "7afla",            category: "3adat",  hint: "mariage algérien, minimum 3 jours de fête" },
  { citizen: "raï",          impostor: "cha3bi",           category: "3adat",  hint: "genre musical le plus iconique d'Algérie" },
  { citizen: "gasba",        impostor: "zorna",            category: "3adat",  hint: "instrument à vent traditionnel du sud algérien" },
  { citizen: "burnous",      impostor: "djellaba",         category: "3adat",  hint: "tenue traditionnelle longue portée par les hommes" },
  { citizen: "7ayek",        impostor: "fouta",            category: "3adat",  hint: "tissu blanc traditionnel porté par les femmes" },
  { citizen: "7enna",        impostor: "arousa",           category: "3adat",  hint: "la nuit avant le mariage, traditions et peintures" },
  { citizen: "derbouqa",     impostor: "bendir",           category: "3adat",  hint: "instrument de percussion traditionnel algérien" },
  { citizen: "chaoui",       impostor: "kabyle",           category: "3adat",  hint: "peuple amazigh algérien et sa culture" },
  { citizen: "mouloud",      impostor: "3achoura",         category: "3adat",  hint: "fête islamique, sucreries et enfants" },
  { citizen: "sebiba",       impostor: "fantasia",         category: "3adat",  hint: "festival traditionnel du sud algérien, Djanet" },
  { citizen: "tifinagh",     impostor: "ta3aroubiya",      category: "3adat",  hint: "système d'écriture, identité amazighe" },
  { citizen: "chechia",      impostor: "takiyta",          category: "3adat",  hint: "coiffe traditionnelle algérienne pour hommes" },

  // ══════════════════════════════════════════
  //  MACHAHIR — FAMOUS ALGERIANS ONLY
  // ══════════════════════════════════════════

  // 🎵 RAÏ & CHAABI
  { citizen: "Khaled",           impostor: "Cheb Mami",          category: "machahir", hint: "le roi du raï, originaire d'Oran" },
  { citizen: "Cheb Mami",        impostor: "Cheb Hasni",         category: "machahir", hint: "le prince du raï, voix puissante d'Oran" },
  { citizen: "Khaled",           impostor: "Faudel",             category: "machahir", hint: "star algérienne du raï qui a conquis la France" },
  { citizen: "Cheikha Rimitti",  impostor: "Warda Charlamante",  category: "machahir", hint: "chanteuse algérienne légendaire" },
  { citizen: "Warda Charlamante",impostor: "Cheba Zahouania",    category: "machahir", hint: "voix féminine iconique du raï oranais" },
  { citizen: "Cheba Fadela",     impostor: "Cheba Zahouania",    category: "machahir", hint: "star féminine du raï des années 80-90" },
  { citizen: "Warda el Jazairia",impostor: "Cheikha Rimitti",    category: "machahir", hint: "la Rose Algérienne, géante de la chanson arabe" },
  { citizen: "Rachid Taha",      impostor: "Idir",               category: "machahir", hint: "musicien algérien qui a percé à l'international" },
  { citizen: "Idir",             impostor: "Lounis Ait Menguellet", category: "machahir", hint: "légende kabyle, A Vava Inouva" },
  { citizen: "Lounès Matoub",    impostor: "Idir",               category: "machahir", hint: "chanteur kabyle rebelle, martyr culturel" },
  { citizen: "Amar Ezzahi",      impostor: "Dahmane El Harrachi",category: "machahir", hint: "maître du chaâbi classique algérois" },
  { citizen: "Cheb Akil",        impostor: "Cheb Nasro",         category: "machahir", hint: "voix populaire du raï algérien des années 90" },

  // 🎤 RAP & MODERN
  { citizen: "Soolking",         impostor: "Didine Canon 16",    category: "machahir", hint: "rappeur algérien, plus d'un milliard de vues" },
  { citizen: "Lotfi DK",         impostor: "Flenn",              category: "machahir", hint: "rap algérien de rue, plume acérée" },
  { citizen: "DJ Snake",         impostor: "Soolking",           category: "machahir", hint: "artiste d'origine algérienne, succès mondial" },
  { citizen: "Phobia Isaac",     impostor: "Zedk",               category: "machahir", hint: "rappeur algérien avec un vrai style" },
  { citizen: "Didine Canon 16",  impostor: "Lotfi DK",           category: "machahir", hint: "fusion raï-rap, des millions de fans en Algérie" },

  // 😂 COMEDIANS & CONTENT
  { citizen: "Anes Tina",        impostor: "DZjoker",            category: "machahir", hint: "comédien algérien avec des millions d'abonnés" },
  { citizen: "Just Riadh",       impostor: "Anes Tina",          category: "machahir", hint: "créateur franco-algérien très populaire" },
  { citizen: "Raouf Khelif",     impostor: "Mourad Oudia",       category: "machahir", hint: "star de la comédie YouTube algérienne" },
  { citizen: "Smain",            impostor: "Mohamed Fellag",     category: "machahir", hint: "comédien algérien classique du stand-up" },
  { citizen: "Biyouna",          impostor: "Chafia Boudraâ",     category: "machahir", hint: "actrice et chanteuse algérienne adorée" },

  // ⚽ FOOTBALL — NOW
  { citizen: "Mahrez",           impostor: "Belaïli",            category: "machahir", hint: "ailier algérien, niveau Premier League" },
  { citizen: "Mahrez",           impostor: "Bennacer",           category: "machahir", hint: "joueur clé des Fennecs" },
  { citizen: "Bennacer",         impostor: "Atal",               category: "machahir", hint: "milieu ou défenseur algérien en Europe" },
  { citizen: "Slimani",          impostor: "Brahimi",            category: "machahir", hint: "attaquant algérien ayant joué dans les grands clubs" },
  { citizen: "Feghouli",         impostor: "Ghezzal",            category: "machahir", hint: "milieu algérien, carrière européenne" },

  // ⚽ FOOTBALL — LEGENDS
  { citizen: "Rabah Madjer",     impostor: "Lakhdar Belloumi",   category: "machahir", hint: "le plus grand footballeur algérien de tous les temps" },
  { citizen: "Lakhdar Belloumi", impostor: "Rachid Mekhloufi",   category: "machahir", hint: "légende du football algérien, époque d'or" },

  // 🎬 CINEMA
  { citizen: "Sofia Boutella",   impostor: "Leïla Bekhti",       category: "machahir", hint: "actrice algérienne dans des films internationaux" },
  { citizen: "Leïla Bekhti",     impostor: "Rachida Brakni",     category: "machahir", hint: "actrice franco-algérienne acclamée" },
  { citizen: "Dali Benssalah",   impostor: "Tahar Rahim",        category: "machahir", hint: "acteur algérien dans de grandes productions" },

  // 🏃 SPORT
  { citizen: "Hassiba Boulmerka",impostor: "Nouria Mérah-Benida",category: "machahir", hint: "championne olympique algérienne en athlétisme" },
  { citizen: "Noureddine Morceli",impostor: "Hassiba Boulmerka", category: "machahir", hint: "recordman du monde sur demi-fond, fierté algérienne" },
  { citizen: "Sofiane Oumiha",   impostor: "Mohamed Flissi",     category: "machahir", hint: "boxeur algérien médaillé aux Jeux Olympiques" },

  // ══════════════════════════════════════════
  //  DERB — STREET LIFE
  // ══════════════════════════════════════════
  { citizen: "squali",           impostor: "broujouazi",         category: "derb",    hint: "décrire quelqu'un selon sa classe sociale" },
  { citizen: "7arraga",          impostor: "clandestin",         category: "derb",    hint: "quelqu'un qui quitte l'Algérie pour une vie meilleure" },
  { citizen: "système D",        impostor: "7ila",               category: "derb",    hint: "trouver un moyen de contourner, à l'algérienne" },
  { citizen: "frima",            impostor: "chi nik",            category: "derb",    hint: "quelqu'un qui aime se montrer et se vanter" },
  { citizen: "flous",            impostor: "miya",               category: "derb",    hint: "parler d'argent" },
  { citizen: "baroud",           impostor: "3raka",              category: "derb",    hint: "bagarre ou confrontation tendue" },
  { citizen: "sa7eb el 7anut",   impostor: "3ammi el 7anut",     category: "derb",    hint: "le gars de l'épicerie qui connaît tout le quartier" },
  { citizen: "samsara",          impostor: "dalal",              category: "derb",    hint: "l'intermédiaire qui arrange les affaires" },
  { citizen: "3ich",             impostor: "tfarraj",            category: "derb",    hint: "vivre le moment, profiter de la vie" },

  // ══════════════════════════════════════════
  //  MDRASSA — SCHOOL
  // ══════════════════════════════════════════
  { citizen: "bzaza",            impostor: "tricheur",           category: "drassa",  hint: "celui qui triche pendant l'examen" },
  { citizen: "concours",         impostor: "exam",               category: "drassa",  hint: "test national qui décide de ton avenir" },
  { citizen: "BAC",              impostor: "BEM",                category: "drassa",  hint: "examen de fin de cycle en Algérie" },
  { citizen: "intendant",        impostor: "directeur",          category: "drassa",  hint: "l'adulte important qui gère l'école" },
  { citizen: "fiche",            impostor: "khatiya",            category: "drassa",  hint: "punition écrite donnée à l'école" },
  { citizen: "tableau",          impostor: "lo7",                category: "drassa",  hint: "ce sur quoi le prof écrit en classe" },
  { citizen: "chef de classe",   impostor: "délégué",            category: "drassa",  hint: "le représentant de la classe" },

  // ══════════════════════════════════════════
  //  3A2ILA — FAMILY
  // ══════════════════════════════════════════
  { citizen: "yemma",            impostor: "mama",               category: "3a2ila",  hint: "la personne la plus importante de la maison" },
  { citizen: "baba",             impostor: "rabbi",              category: "3a2ila",  hint: "le père, chef de famille" },
  { citizen: "3ammi",            impostor: "khal",               category: "3a2ila",  hint: "le frère de ton père ou de ta mère" },
  { citizen: "jeddi",            impostor: "3ammi kbir",         category: "3a2ila",  hint: "l'aîné masculin de la famille" },
  { citizen: "jedda",            impostor: "tata",               category: "3a2ila",  hint: "la grand-mère ou la vieille tante" },
  { citizen: "3ressa",           impostor: "mra rabbi",          category: "3a2ila",  hint: "la femme de la maison" },
  { citizen: "drari",            impostor: "sghar",              category: "3a2ila",  hint: "les petits enfants qui courent partout" },
  { citizen: "jira",             impostor: "gara",               category: "3a2ila",  hint: "la voisine qui sait tout ce qui se passe" },

  // ══════════════════════════════════════════
  //  CUSTOM — ADD YOUR WORDS HERE
  // ══════════════════════════════════════════
  // { citizen: "YOUR WORD", impostor: "REFERENCE", category: "custom", hint: "indice flou pour l'imposteur" },
];
