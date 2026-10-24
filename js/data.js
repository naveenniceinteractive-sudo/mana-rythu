// Mana Rythu - Global Data Store (Vanilla JS)

const productsData = [
  {
    id: "p1",
    name: "Guntur Heirloom Country Tomatoes",
    nameTe: "గుంటూరు నాటు టమాటాలు",
    category: "vegetables",
    price: 38,
    unit: "kg",
    originalPrice: 55,
    stock: 140,
    rating: 4.9,
    reviewsCount: 312,
    harvestTime: "Today 04:30 AM",
    farmerId: "f1",
    farmerName: "K. Ramaiah",
    farmerLocation: "Chebrolu, Guntur, AP",
    farmDistance: "42 km away",
    badges: ["Signature Item", "Zero Chemical", "Desi Seed"],
    brix: "6.8° Brix",
    description: "Sun-ripened on the vine in black cotton soil. Juicy, rich in lycopene, with the authentic tangy aroma of village heirloom seeds.",
    descriptionTe: "నల్లరేగడి నేలలో సహజంగా పండిన నాటు టమాటాలు. అసలైన పులుపు మరియు తియ్యదనంతో కూడిన అద్భుత రుచి.",
    accentColor: "#E53935",
    image: "images/photoreal_tomato.jpg"
  },
  {
    id: "p2",
    name: "Banganapalli Royal Mangoes (Carbide-Free)",
    nameTe: "బంగినపల్లి రారాజు మామిడి",
    category: "fruits",
    price: 180,
    unit: "kg (3-4 pcs)",
    originalPrice: 240,
    stock: 85,
    rating: 5.0,
    reviewsCount: 420,
    harvestTime: "Today 05:15 AM",
    farmerId: "f2",
    farmerName: "Ch. Lakshmi Devi",
    farmerLocation: "Nuzvid / Tenali, AP",
    farmDistance: "58 km away",
    badges: ["Tree-Ripened", "Carbide Free", "GI Tagged"],
    brix: "18.5° Brix",
    description: "Plucked tenderly with stems intact and straw-cured naturally. Silky fiberless pulp and heavenly aroma.",
    descriptionTe: "చెట్టు మీదే పక్వానికి వచ్చి గడ్డిలో మగ్గించిన సహజ బంగినపల్లి మామిడి. తియ్యని పరిమళం.",
    accentColor: "#F59E0B",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p3",
    name: "Aged Single-Origin Sona Masoori Rice",
    nameTe: "సంప్రదాయ పాత సోనా మసూరి బియ్యం",
    category: "grains",
    price: 76,
    unit: "kg",
    originalPrice: 95,
    stock: 350,
    rating: 4.8,
    reviewsCount: 189,
    harvestTime: "Matured 14 Months",
    farmerId: "f3",
    farmerName: "B. Venkatesh",
    farmerLocation: "Miryalaguda, Telangana",
    farmDistance: "110 km away",
    badges: ["14-Month Aged", "Non-Polished", "Low GI"],
    brix: "Natural Amylose",
    description: "Irrigated by Nagarjuna Sagar canal waters. Fluffy, non-sticky grains with high fiber and natural aroma.",
    descriptionTe: "నాగార్జునసాగర్ కాలువ నీటితో పండించిన సహజ బియ్యం. పొడిపొడిగా ఉడికే పాత నాణ్యమైన బియ్యం.",
    accentColor: "#EAB308",
    image: "images/photoreal_rice_seedling.jpg"
  },
  {
    id: "p4",
    name: "Tender Palakura (Native Organic Spinach)",
    nameTe: "నాటు పాలకూర కట్టలు",
    category: "vegetables",
    price: 24,
    unit: "bunch (250g)",
    originalPrice: 35,
    stock: 90,
    rating: 4.9,
    reviewsCount: 96,
    harvestTime: "Today 05:00 AM",
    farmerId: "f1",
    farmerName: "M. Swathi",
    farmerLocation: "Chevella, Rangareddy, TS",
    farmDistance: "28 km away",
    badges: ["Pesticide-Free", "Morning Dew Fresh", "Iron Rich"],
    description: "Tender emerald green leaves cut at sunrise. Zero toxic wash, pure groundwater irrigation, packed in breathable paper wraps.",
    descriptionTe: "ఉదయం మంచులో కోసిన స్వచ్ఛమైన పాలకూర. విటమిన్లు, ఐరన్ సమృద్ధిగా లభించే పౌష్టిక ఆహారం.",
    accentColor: "#16A34A",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p5",
    name: "Single-Origin Salem-Guntur Turmeric",
    nameTe: "మేలిమి పచ్చి పసుపు కొమ్ములు & పొడి",
    category: "spices",
    price: 120,
    unit: "250g jar",
    originalPrice: 160,
    stock: 65,
    rating: 5.0,
    reviewsCount: 142,
    harvestTime: "Sun-Dried Traditional",
    farmerId: "f1",
    farmerName: "P. Appa Rao",
    farmerLocation: "Duggirala, Guntur, AP",
    farmDistance: "48 km away",
    badges: ["5.2% Curcumin", "No Artificial Color", "Cold Ground"],
    description: "High-curcumin heirloom turmeric from the Duggirala turmeric capital. Stone ground at low temperature to retain essential oils.",
    descriptionTe: "దుగ్గిరాల ప్రసిద్ధ పసుపు. 5.2% కర్క్యుమిన్ కలిగిన ఔషధ గుణాలు మెండుగా ఉన్న సహజ పసుపు.",
    accentColor: "#CA8A04",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p6",
    name: "Bilona A2 Desi Gir Cow Ghee",
    nameTe: "సాంప్రదాయ బిలోనా A2 దేశీ ఆవు నెయ్యి",
    category: "dairy_millets",
    price: 780,
    unit: "500 ml jar",
    originalPrice: 950,
    stock: 40,
    rating: 5.0,
    reviewsCount: 280,
    harvestTime: "Cultured Curd Churned",
    farmerId: "f2",
    farmerName: "Keshava Gosala & Farm",
    farmerLocation: "Medak, Telangana",
    farmDistance: "64 km away",
    badges: ["Traditional Bilona", "Grass-Fed Cows", "Granular Gold"],
    description: "Made from whole curd churned with wooden bilona during Brahma Muhurtham. Golden granular texture with divine aroma.",
    descriptionTe: "చెక్క కవ్వంతో చిలికి చేసిన స్వచ్ఛమైన దేశీ ఆవు నెయ్యి. పూస పూసగా సువాసన వెదజల్లే అమృతం.",
    accentColor: "#D97706",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p7",
    name: "Unpolished Organic Foxtail Millet (కొర్రలు)",
    nameTe: "సేంద్రీయ కొర్రలు (ఫాక్స్‌టైల్ మిల్లెట్)",
    category: "dairy_millets",
    price: 88,
    unit: "kg",
    originalPrice: 115,
    stock: 120,
    rating: 4.8,
    reviewsCount: 110,
    harvestTime: "Dryland Farm Fresh",
    farmerId: "f4",
    farmerName: "S. Anjaneyulu",
    farmerLocation: "Kadiri, Anantapur, AP",
    farmDistance: "190 km away",
    badges: ["Zero Water-Waste", "High Fiber", "Pre-Cleaned"],
    description: "Grown in Rayalaseema arid red soils without synthetic fertilizers. Rich in dietary fiber, protein, and minerals for balanced vitality.",
    descriptionTe: "రాయలసీమ ఎర్రనేలలో పండిన సేంద్రీయ కొర్రలు. మధుమేహం నియంత్రణకు మేలైన చిరుధాన్యం.",
    accentColor: "#B45309",
    image: "https://images.unsplash.com/photo-1607672632458-9eb56696346b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p8",
    name: "Wild Organic Custard Apple (సీతాఫలం)",
    nameTe: "తెలంగాణ గుట్టల నాటు సీతాఫలాలు",
    category: "fruits",
    price: 130,
    unit: "kg (4-5 pcs)",
    originalPrice: 175,
    stock: 55,
    rating: 4.9,
    reviewsCount: 75,
    harvestTime: "Today 04:00 AM",
    farmerId: "f3",
    farmerName: "K. Parvathi",
    farmerLocation: "Jadcherla hills, Mahabubnagar, TS",
    farmDistance: "82 km away",
    badges: ["Forest Foraged", "Naturally Sweet", "High Antioxidants"],
    description: "Plucked from wild rocky hill slopes at early morning cool hours. Creamy, aromatic segments bursting with natural vitamin C.",
    descriptionTe: "మహబూబ్‌నగర్ అటవీ ప్రాంతంలో సహజంగా కాసిన నాటు సీతాఫలాలు. అత్యంత తియ్యని పాలమీగడ గుజ్జు.",
    accentColor: "#65A30D",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80"
  }
];

const featuredFarmers = [
  {
    id: "f1",
    name: "Kommuri Ramaiah",
    nameTe: "కొమ్మూరి రామయ్య",
    village: "Chebrolu",
    district: "Guntur",
    state: "Andhra Pradesh",
    yearsOfFarming: 28,
    acres: 6.5,
    specialtyCrops: ["Heirloom Country Tomatoes", "Guntur Teja Chillies", "Native Okra"],
    specialtyCropsTe: ["నాటు టమాటాలు", "గుంటూరు మిరప", "నాటు బెండ"],
    farmingMethod: "Subhash Palekar Natural Farming (ZBNF) with Jeevamrutham",
    quoteEn: "Earlier, mandi agents took half my tomato profits. With Mana Rythu, my harvest money is credited the same afternoon. I can now fund my daughter's nursing education.",
    quoteTe: "గతంలో మార్కెట్ కమీషన్లకే సగం డబ్బులు పోయేవి. మన రైతు వచ్చిన తర్వాత నా టమాటాలకు న్యాయమైన ధర లభిస్తోంది, అదే రోజు నా ఖాతాలో డబ్బులు పడుతున్నాయి.",
    verifiedYear: 2022,
    rating: 4.96,
    reviews: 380,
    directEarningsTotal: "₹4,82,000",
    badge: "Master Organic Grower",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "f2",
    name: "Chilukuri Lakshmi Devi",
    nameTe: "చిలుకూరి లక్ష్మీదేవి",
    village: "Kollipara",
    district: "Guntur / Tenali",
    state: "Andhra Pradesh",
    yearsOfFarming: 19,
    acres: 8.0,
    specialtyCrops: ["Banganapalli Mangoes", "Desi Guava", "Native Papaya"],
    specialtyCropsTe: ["బంగినపల్లి మామిడి", "నాటు జామ", "బొప్పాయి"],
    farmingMethod: "Panchagavya & Agnihotra organic orchard management",
    quoteEn: "We treat our mango trees like our own daughters. We never use carbide ripening gas. We pack each fruit in dry straw just like our grandparents did.",
    quoteTe: "మేము మామిడి చెట్లను మా సొంత బిడ్డల్లా చూసుకుంటాము. విషపూరిత కార్బైడ్ మందులు వేయము. స్వచ్ఛమైన గడ్డిలోనే సహజంగా పండిస్తాము.",
    verifiedYear: 2021,
    rating: 4.98,
    reviews: 520,
    directEarningsTotal: "₹6,40,000",
    badge: "Heritage Orchard Guardian",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "f3",
    name: "Bodige Venkatesh",
    nameTe: "బోడిగె వెంకటేశ్",
    village: "Thipparthy",
    district: "Nalgonda / Miryalaguda",
    state: "Telangana",
    yearsOfFarming: 22,
    acres: 12.0,
    specialtyCrops: ["Aged Sona Masoori", "Navara Medicinal Rice", "Native Red Gram"],
    specialtyCropsTe: ["పాత సోనా మసూరి", "నవార ఔషధ బియ్యం", "నాటు కందులు"],
    farmingMethod: "Canal-fed green manure & azolla natural nitrogen fixing",
    quoteEn: "Our rice has zero synthetic polish. When urban mothers cook this rice, the aroma fills the entire house. Mana Rythu gave our village a direct voice.",
    quoteTe: "మా బియ్యానికి కృత్రిమ పాలిష్ ఉండదు. వండినప్పుడు ఊరంతా వాసన వస్తుంది. మన రైతు మా గ్రామానికి కొత్త ధైర్యాన్ని ఇచ్చింది.",
    verifiedYear: 2023,
    rating: 4.92,
    reviews: 290,
    directEarningsTotal: "₹5,15,000",
    badge: "Heritage Grain Champion",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "f4",
    name: "Surisetty Anjaneyulu",
    nameTe: "సూరిశెట్టి ఆంజనేయులు",
    village: "Tanakal",
    district: "Kadiri / Anantapur",
    state: "Andhra Pradesh",
    yearsOfFarming: 31,
    acres: 15.0,
    specialtyCrops: ["Foxtail Millet (Korralu)", "Browntop Millet (Andukorralu)", "Organic Groundnut"],
    specialtyCropsTe: ["కొర్రలు", "అండుకొర్రలు", "నాటు వేరుశనగ"],
    farmingMethod: "Drought-resilient regenerative dryland farming",
    quoteEn: "Anantapur soils are tough, but our millets are golden. Mana Rythu connected us directly to health-conscious families in Hyderabad and Bangalore who value dryland grains.",
    quoteTe: "అనంతపురం నేలలో పండే చిరుధాన్యాలు బంగారంతో సమానం. మన రైతు ద్వారా హైదరాబాద్, బెంగళూరు కుటుంబాలకు మా పంట నేరుగా చేరుతోంది.",
    verifiedYear: 2020,
    rating: 4.95,
    reviews: 310,
    directEarningsTotal: "₹5,75,000",
    badge: "Dryland Soil Master",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  }
];

const farmCategories = [
  {
    id: "vegetables",
    name: "Farm Fresh Vegetables",
    nameTe: "తాజా కూరగాయలు",
    itemsCount: 42,
    description: "Tomatoes, Country Brinjal, Okra, Greens & Gourds picked before sunrise",
    badge: "Daily Harvest",
    color: "#80BC41",
    icon: "🥕"
  },
  {
    id: "fruits",
    name: "Sun-Ripened Fruits",
    nameTe: "సహజ పండ్లు",
    itemsCount: 24,
    description: "Banganapalli, Guava, Sapota, Papaya ripened on tree branches",
    badge: "Carbide Free",
    color: "#E8AE42",
    icon: "🥭"
  },
  {
    id: "rice",
    name: "Traditional Rice",
    nameTe: "సంప్రదాయ బియ్యం",
    itemsCount: 16,
    description: "Aged Sona Masoori, Navara, Black Rice, and Brown Heritage Grains",
    badge: "Canal Irrigated",
    color: "#D4A373",
    icon: "🌾"
  },
  {
    id: "grains_pulses",
    name: "Grains & Native Pulses",
    nameTe: "పప్పు ధాన్యాలు",
    itemsCount: 20,
    description: "Unpolished Toor Dal, Native Moong, Black Gram, Chickpeas",
    badge: "Protein Rich",
    color: "#C59B27",
    icon: "🫘"
  },
  {
    id: "spices",
    name: "Single-Origin Spices",
    nameTe: "దేశీ సుగంధ ద్రవ్యాలు",
    itemsCount: 18,
    description: "Guntur Chillies, Duggirala Turmeric, Coriander, Black Pepper",
    badge: "Curcumin Rich",
    color: "#D32F2F",
    icon: "🌶️"
  },
  {
    id: "dairy",
    name: "Desi Cow Dairy",
    nameTe: "దేశీ ఆవు పాల ఉత్పత్తులు",
    itemsCount: 12,
    description: "Pure A2 Gir & Ongole Cow Ghee, Cultured Butter, Paneer",
    badge: "Bilona Method",
    color: "#F59E0B",
    icon: "🧈"
  },
  {
    id: "millets",
    name: "Dryland Super Millets",
    nameTe: "సిరిధాన్యాలు & చిరుధాన్యాలు",
    itemsCount: 15,
    description: "Foxtail (కొర్రలు), Browntop (అండుకొర్రలు), Little Millet (సామలు)",
    badge: "Diabetes Friendly",
    color: "#78543B",
    icon: "🌾"
  },
  {
    id: "organic",
    name: "Wild Forest Produce",
    nameTe: "సేంద్రీయ వన మూలికలు",
    itemsCount: 10,
    description: "Raw Forest Honey, Cold-Pressed Wood Oils, Palm Jaggery",
    badge: "100% Unprocessed",
    color: "#123B28",
    icon: "🍯"
  }
];

const translations = {
  en: {
    brand: {
      name: "Mana Rythu",
      tagline: "Rythu Nundi Mee Intiki Neruga",
      englishTagline: "Fresh from Farmers. Fair for Everyone.",
      subTagline: "Direct Farm-to-Consumer Agricultural Movement"
    },
    nav: {
      marketplace: "Marketplace",
      journey: "Seed-to-Plant",
      categories: "Categories",
      farmers: "Farmers",
      howItWorks: "How It Works",
      vanDelivery: "Doorstep Delivery",
      aiAssistant: "Krishi AI",
      pricing: "Pricing Transparency",
      seasons: "Seasonal Harvest",
      cart: "Harvest Basket",
      wishlist: "Saved"
    },
    hero: {
      badge: "Pure Living Soil • 100% Direct to Farmer",
      secondaryHeading: "రైతు నుండి మీ ఇంటికి నేరుగా",
      mainHeading: "From Our Living Soil to Your Soul.",
      description: "Experience India's most transparent agricultural journey. Freshly harvested heirloom produce, cold-pressed oils, and heritage grains delivered within hours of sunrise.",
      ctaPrimary: "Explore Today's Harvest",
      ctaSecondary: "Meet Verified Farmers",
      scrollHint: "Scroll down to witness seed germination & the living rice plant",
      liveStats: {
        activeFarmers: "1,420+ Certified Farmers",
        morningHarvests: "Harvested 4:30 AM Today",
        co2Saved: "Zero Middlemen Mandis"
      }
    },
    seedToPlant: {
      badge: "Photorealistic Soil Germination",
      heading: "Every Great Harvest Begins with a Living Seed.",
      subheading: "Beneath fertile dark loam, life awakens. Watch our indigenous heirloom seed break through the earth and grow into a healthy, tillered rice seedling with tender root tendrils drinking from living soil.",
      points: {
        seed: "Native Non-GMO Heirloom Seed Varieties",
        soil: "Microbial-Rich Living Earth with Jeevamrutham",
        sunlight: "Abundant Morning Solar Photosynthesis"
      }
    },
    deliveryVan: {
      badge: "Cold-Chain Zero-Emission Transit",
      heading: "From Rural Fields to Your Front Porch.",
      subheading: "Our temperature-controlled electric vehicle glides along scenic country roads, keeping harvests crisp and nutrient-dense until handoff at your doorstep.",
      liveTracker: "Live GPS Active • Temp 12°C",
      emission: "100% Electric Cold-Chain",
      origin: "Guntur / Nalgonda Farms",
      destination: "Hyderabad & Amaravati Homes",
      handoverBadge: "Doorstep Handover Verified"
    },
    products: {
      badge: "Dawn Harvest Produce",
      heading: "Direct from This Morning's Harvest",
      subheading: "Plucked before sunrise, packed without chemical preservatives, credited to farmers instantly.",
      filterAll: "All Harvests",
      filterVegetables: "Vegetables",
      filterFruits: "Native Fruits",
      filterGrains: "Aged Rice & Grains",
      filterDairyMillets: "Millets & Dairy",
      addToCart: "Add to Basket",
      viewDetails: "View Details",
      inStock: "kg fresh in stock"
    },
    smartPricing: {
      badge: "Radical 100% Price Transparency",
      heading: "Where Does Every Single Rupee Go?",
      subheading: "Traditional markets pay farmers a meager 24%. Mana Rythu guarantees 72% directly into the farmer's bank account on the day of delivery.",
      testLabel: "Simulate Your Monthly Order:"
    },
    seasonal: {
      badge: "Biorhythmic Agriculture",
      heading: "Nature's Seasonal Harvest Rhythm",
      subheading: "Aligning your diet with Kharif, Rabi, and Zaid seasons for peak nutrition and flavor."
    },
    closingCTA: {
      heading: "Ready for Produce That Honors Both Earth and Farmer?",
      subheading: "Join 45,000+ conscious families who receive genuine farm-fresh nutrition while empowering rural agricultural communities.",
      ctaShop: "Order Today's Fresh Harvest",
      ctaFarmer: "Connect With a Farmer"
    }
  },
  te: {
    brand: {
      name: "మన రైతు",
      tagline: "రైతు నుండి మీ ఇంటికి నేరుగా",
      englishTagline: "రైతుకు న్యాయం - మీకు ఆరోగ్యం",
      subTagline: "ప్రకృతి వ్యవసాయ విప్లవం"
    },
    nav: {
      marketplace: "ప్రత్యక్ష అంగడి",
      journey: "విత్తనం నుండి పంట",
      categories: "పంట విభాగాలు",
      farmers: "మన రైతులు",
      howItWorks: "పనితీరు",
      vanDelivery: "ఇంటి డెలివరీ",
      aiAssistant: "కృషి AI సలహాదారు",
      pricing: "ధరల పారదర్శకత",
      seasons: "కాలానుగుణ పంటలు",
      cart: "పంట బుట్ట",
      wishlist: "కోరుకున్నవి"
    },
    hero: {
      badge: "స్వచ్ఛమైన జీవ నేల • 100% రైతుకు చేరే లాభం",
      secondaryHeading: "రైతు నుండి మీ ఇంటికి నేరుగా",
      mainHeading: "మన నేల తల్లి నుండి మీ ఇంటి గుమ్మం వరకు.",
      description: "రసాయనాలు లేని పవిత్ర నేలలో పండిన నాటు కూరగాయలు, సంప్రదాయ బియ్యం, స్వచ్ఛమైన ఆవు నెయ్యి - ఉదయపు కోత నుండి కొన్ని గంటల్లోనే మీ ఇంటికి చేరుతాయి.",
      ctaPrimary: "నేటి తాజా పంటలు కొనండి",
      ctaSecondary: "రైతుల వివరాలు చూడండి",
      scrollHint: "విత్తనం మొలకెత్తి వరి మొక్కగా మారే దృశ్యాన్ని చూడటానికి స్క్రోల్ చేయండి",
      liveStats: {
        activeFarmers: "1,420+ ప్రకృతి రైతులు",
        morningHarvests: "నేటి ఉదయం 4:30 AM కోత",
        co2Saved: "దళారులు లేని నేరుగా అమ్మకం"
      }
    },
    seedToPlant: {
      badge: "సహజ నేల మొలక అద్భుతం",
      heading: "ప్రతి గొప్ప పంట ఒక చిన్న విత్తనంతోనే మొదలవుతుంది.",
      subheading: "సారవంతమైన నల్లరేగడి నేలలో విత్తనం ఎలా పాతుకుపోయి, జీవామృతం తాగి చిగురించి, పచ్చని వరి మొక్కగా ఎదుగుతుందో మీ కళ్ళతో వీక్షించండి.",
      points: {
        seed: "సంప్రదాయ నాటు దేశీ విత్తనాలు",
        soil: "జీవామృతం, పంచగవ్యలతో సారవంతమైన నేల",
        sunlight: "స్వచ్ఛమైన ఉదయపు సూర్యరశ్మి"
      }
    },
    deliveryVan: {
      badge: "జీరో-ఎమిషన్ కోల్డ్ చైన్ ఎలక్ట్రిక్ వ్యాన్",
      heading: "పచ్చని పొలాల నుండి మీ ఇంటి గుమ్మం వరకు.",
      subheading: "శీతలీకరణ సదుపాయం ఉన్న మా ఆధునిక ఎలక్ట్రిక్ వ్యాన్ పంట తాజాగా పాడవకుండా, రోడ్డు మార్గంలో సురక్షితంగా ప్రయాణించి మీ ఇంటి గుమ్మం వద్ద డెలివరీ చేస్తుంది.",
      liveTracker: "ప్రత్యక్ష GPS • ఉష్ణోగ్రత 12°C",
      emission: "100% పొల్యూషన్ రహిత ఎలక్ట్రిక్ వాహనం",
      origin: "గుంటూరు / నల్గొండ పొలాలు",
      destination: "హైదరాబాద్ & అమరావతి ఇళ్ళు",
      handoverBadge: "ఇంటి గుమ్మం వద్ద ప్రత్యక్ష హ్యాండోవర్"
    },
    products: {
      badge: "ఉదయపు కోత తాజా పంటలు",
      heading: "ఈ ఉదయమే కోసిన సహజ ఉత్పత్తులు",
      subheading: "సూర్యోదయానికి ముందే కోసి, ఎటువంటి ప్రిజర్వేటివ్స్ లేకుండా నేరుగా ప్యాక్ చేసిన పంటలు.",
      filterAll: "అన్ని పంటలు",
      filterVegetables: "కూరగాయలు",
      filterFruits: "నాటు పండ్లు",
      filterGrains: "సంప్రదాయ బియ్యం",
      filterDairyMillets: "చిరుధాన్యాలు & నెయ్యి",
      addToCart: "బుట్టలో వేయండి",
      viewDetails: "వివరాలు చూడండి",
      inStock: "కిలోలు అందుబాటులో ఉన్నాయి"
    },
    smartPricing: {
      badge: "100% నిక్కచ్చైన ధరల పారదర్శకత",
      heading: "మీరు చెల్లించే ప్రతి రూపాయి ఎక్కడికి వెళ్తుంది?",
      subheading: "సాధారణ మార్కెట్లలో రైతుకు కేవలం 24% మాత్రమే దక్కుతుంది. మన రైతులో పూర్తి 72% నేరుగా రైతు బ్యాంకు ఖాతాలోనే జమ అవుతుంది.",
      testLabel: "మీ నెలవారీ కొనుగోలు విలువను పరిశీలించండి:"
    },
    seasonal: {
      badge: "రుతువుల పంట క్యాలెండర్",
      heading: "ప్రకృతి ధర్మానికి అనుగుణమైన ఆహారం",
      subheading: "ఖరీఫ్, రబీ, జాయద్ కాలాల్లో పండే పంటలను భుజిస్తే రోగనిరోధక శక్తి అపారంగా పెరుగుతుంది."
    },
    closingCTA: {
      heading: "రైతుకు న్యాయం, కుటుంబానికి ఆరోగ్యం ఇచ్చే ఉద్యమంలో చేరండి",
      subheading: "45,000 కంటే ఎక్కువ కుటుంబాలు మన రైతు ద్వారా స్వచ్ఛమైన ఆహారాన్ని పొందుతూ గ్రామీణ రైతులకు అండగా నిలుస్తున్నారు.",
      ctaShop: "ఇప్పుడే ఆర్డర్ చేయండి",
      ctaFarmer: "రైతులతో మాట్లాడండి"
    }
  }
};
