export type Language = "en" | "te";

export interface TranslationData {
  brand: {
    name: string;
    tagline: string;
    englishTagline: string;
    subTagline: string;
  };
  nav: {
    journey: string;
    categories: string;
    featured: string;
    farmers: string;
    howItWorks: string;
    aiAssistant: string;
    pricing: string;
    seasons: string;
    cart: string;
    login: string;
  };
  hero: {
    badge: string;
    mainHeading: string;
    mainHeadingHighlight: string;
    secondaryHeading: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
    liveStats: {
      activeFarmers: string;
      morningHarvests: string;
      co2Saved: string;
    };
  };
  seedToPlant: {
    badge: string;
    heading: string;
    subheading: string;
    points: {
      seed: string;
      soil: string;
      sunlight: string;
    };
  };
  farmReveal: {
    badge: string;
    heading: string;
    subheading: string;
    purityBadges: {
      pesticideFree: string;
      heritageSeeds: string;
      groundwater: string;
    };
  };
  flyingTomato: {
    badge: string;
    heading: string;
    subheading: string;
    stats: {
      harvestTime: string;
      brixRating: string;
      distance: string;
      temp: string;
    };
  };
  categories: {
    badge: string;
    heading: string;
    subheading: string;
    viewAll: string;
  };
  products: {
    badge: string;
    heading: string;
    subheading: string;
    filterAll: string;
    filterVegetables: string;
    filterFruits: string;
    filterGrains: string;
    filterDairyMillets: string;
    addToCart: string;
    inStock: string;
    soldOut: string;
    freshHarvest: string;
  };
  farmers: {
    badge: string;
    heading: string;
    subheading: string;
    verified: string;
    experience: string;
    acreage: string;
    methods: string;
    directShare: string;
  };
  farmerBasket: {
    badge: string;
    heading: string;
    subheading: string;
    basketItems: string;
  };
  howItWorks: {
    badge: string;
    heading: string;
    subheading: string;
    steps: {
      step1Title: string;
      step1Desc: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
      step4Title: string;
      step4Desc: string;
    };
  };
  deliveryVan: {
    badge: string;
    heading: string;
    subheading: string;
    liveTracker: string;
    origin: string;
    destination: string;
    eta: string;
    emission: string;
  };
  homeDelivery: {
    badge: string;
    heading: string;
    subheading: string;
    cta: string;
    freshGuarantee: string;
  };
  aiAssistant: {
    badge: string;
    heading: string;
    subheading: string;
    placeholder: string;
    askBtn: string;
    quickPrompts: string[];
    cropDoctorBadge: string;
    disclaimer: string;
  };
  smartPricing: {
    badge: string;
    heading: string;
    subheading: string;
    farmerShare: string;
    middlemanShare: string;
    traditionalBreakdown: string;
    manaRythuBreakdown: string;
  };
  seasonal: {
    badge: string;
    heading: string;
    subheading: string;
    kharif: string;
    rabi: string;
    zaid: string;
  };
  testimonials: {
    badge: string;
    heading: string;
    subheading: string;
    farmerTag: string;
    customerTag: string;
  };
  closingCTA: {
    heading: string;
    subheading: string;
    ctaShop: string;
    ctaFarmer: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    farmersPortal: string;
    support: string;
    rights: string;
    newsletterTitle: string;
    newsletterDesc: string;
    subscribeBtn: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  en: {
    brand: {
      name: "Mana Rythu",
      tagline: "Rythu Nundi Mee Intiki Neruga",
      englishTagline: "Fresh from Farmers. Fair for Everyone.",
      subTagline: "Andhra & Telangana's First Cinematic Farm-to-Kitchen Direct Network",
    },
    nav: {
      journey: "Farm Journey",
      categories: "Categories",
      featured: "Fresh Harvest",
      farmers: "Our Farmers",
      howItWorks: "How It Works",
      aiAssistant: "Krishi AI",
      pricing: "Smart Pricing",
      seasons: "Seasonal",
      cart: "Cart",
      login: "Farmer / Buyer Login",
    },
    hero: {
      badge: "🌱 100% Direct Farm Network",
      mainHeading: "From Our Soil to Your Soul.",
      mainHeadingHighlight: "Soil to Your Soul",
      secondaryHeading: "Rythu Nundi Mee Intiki Neruga.",
      description: "Experience living produce harvested at 4:30 AM today in Andhra & Telangana. Zero middlemen, zero chemical sprays, and 72% direct revenue returned to our farming heroes.",
      ctaPrimary: "Explore Fresh Produce",
      ctaSecondary: "Meet Our Farmers",
      scrollHint: "Scroll down to witness the seed's journey",
      liveStats: {
        activeFarmers: "4,200+ Farmers",
        morningHarvests: "18,400 kg Fresh Today",
        co2Saved: "48% Lower Carbon Footprint",
      },
    },
    seedToPlant: {
      badge: "The Miracle of Soil",
      heading: "Every Great Harvest Begins with a Seed.",
      subheading: "Nurtured in native black and red soils enriched with Jeevamrutham, pure morning dewdrops, and golden Telugu sunshine.",
      points: {
        seed: "Native Non-GMO Heritage Seeds",
        soil: "Microbiome-Rich Natural Compost",
        sunlight: "Sun-ripened on the vine, not ethylene gas chambers",
      },
    },
    farmReveal: {
      badge: "Living Farmlands",
      heading: "Grown with Care. Harvested with Pride.",
      subheading: "Spanning lush irrigated acreage along the Krishna, Godavari, and Pennar river basins.",
      purityBadges: {
        pesticideFree: "Zero Chemical Residue",
        heritageSeeds: "Desi Indigenous Strains",
        groundwater: "Pure Rain & River Fed",
      },
    },
    flyingTomato: {
      badge: "Living Signature",
      heading: "Freshness You Can See, Smell & Taste.",
      subheading: "Watch this heirloom Guntur country tomato detach from its morning stem. Firm, bursting with lycopene sweetness, and picked at dawn.",
      stats: {
        harvestTime: "Harvested: 04:45 AM Today",
        brixRating: "Brix Sweetness: 6.8° (Extra Sweet)",
        distance: "Guntur Farm: 42 km Away",
        temp: "Pre-cooled at 14°C natural shade",
      },
    },
    categories: {
      badge: "Farm Categories",
      heading: "Wholesome Goodness from Every Acre",
      subheading: "Hand-picked daily across 8 authentic farming categories",
      viewAll: "View All 120+ Farm Items",
    },
    products: {
      badge: "Today's Harvest Basket",
      heading: "Fresh from This Morning's Fields",
      subheading: "Live stock harvested in the pre-dawn hours. Packed and delivered to your kitchen by afternoon.",
      filterAll: "All Harvests",
      filterVegetables: "Vegetables",
      filterFruits: "Heirloom Fruits",
      filterGrains: "Traditional Rice & Pulses",
      filterDairyMillets: "Millets & Desi Dairy",
      addToCart: "Add to Basket",
      inStock: "In Stock Today",
      soldOut: "Harvest Sold Out",
      freshHarvest: "Morning Picked",
    },
    farmers: {
      badge: "Our Annadatas",
      heading: "Meet the Hands That Feed Our Nation.",
      subheading: "Transparent stories of genuine farmers who dedicate their dawn to growing nutritious food for your children.",
      verified: "Mana Rythu Verified Annadata",
      experience: "Years Cultivating",
      acreage: "Acres Natural Farm",
      methods: "Subhash Palekar Natural Farming (ZBNF)",
      directShare: "72% of purchase directly credited to their bank account",
    },
    farmerBasket: {
      badge: "Farm Gate Packaging",
      heading: "Directly From the People Who Grow It.",
      subheading: "No wholesale mandi commission agents. Freshly plucked tomatoes, leafy greens, and earthy turmeric nestled into eco-friendly woven bamboo baskets.",
      basketItems: "4.8 kg hand-sorted morning produce in this basket",
    },
    howItWorks: {
      badge: "Transparent 4-Hour Journey",
      heading: "From Sunrise Harvest to Sunset Kitchen",
      subheading: "How our farm-to-door network beats the 5-day middlemen cold chain",
      steps: {
        step1Title: "04:30 AM Sunrise Harvest",
        step1Desc: "Farmers pluck naturally ripened crops at the peak of morning dew.",
        step2Title: "06:00 AM Digital Farm Weighing",
        step2Desc: "Smart digital IoT scales record weights & fair farm-gate pricing directly on Mana Rythu.",
        step3Title: "08:00 AM Direct Order Sorting",
        step3Desc: "Customer orders mapped directly to nearby rural cluster hubs.",
        step4Title: "01:00 PM Eco Electric Van Delivery",
        step4Desc: "Delivered chilled directly to your apartment doorstep in reusable bags.",
      },
    },
    deliveryVan: {
      badge: "Cold-Chain Farm Van",
      heading: "From Our Farms to Your Doorstep.",
      subheading: "100% electric solar-topped farm vans navigate village roads and highway corridors, maintaining field-fresh humidity all the way to your city gate.",
      liveTracker: "Live Farm Van #MR-HYD-04",
      origin: "Origin: K. Ramaiah Organic Farm, Guntur",
      destination: "Destination: Banjara Hills, Hyderabad",
      eta: "Arriving: 42 mins",
      emission: "0.0g Carbon Tailpipe Emissions",
    },
    homeDelivery: {
      badge: "Pure Nourishment",
      heading: "Fresh Food. Happy Families. Stronger Farmers.",
      subheading: "When you bite into a tomato grown with love, you heal your family's health and provide dignity to the hands that tilled the soil.",
      cta: "Shop Today's Fresh Harvest",
      freshGuarantee: "100% Farm Fresh Guarantee: If not fresh, instant free replacement.",
    },
    aiAssistant: {
      badge: "Mana Rythu Krishi AI 2.0",
      heading: "Your Intelligent Agricultural & Nutrition Companion",
      subheading: "Ask questions in Telugu or English. Get crop care advice, disease identification, seasonal nutrition tips, and real-time mandi price comparisons.",
      placeholder: "Ask in Telugu or English (e.g., How to cure chilli leaf curl, or best season for Banganapalli mangoes)...",
      askBtn: "Ask Krishi AI",
      quickPrompts: [
        "What are the benefits of Guntur heirloom tomatoes?",
        "Chilli leaf curl organic remedy (జీవామృతం నివారణ)",
        "Today's fair price breakdown for Sona Masoori",
        "Which millet is best for diabetes control?",
      ],
      cropDoctorBadge: "AI Plant Doctor & Soil Guidance",
      disclaimer: "Note: AI guidance is for informational advisory. Always verify critical agronomy decisions with certified local Rythu Bharosa Kendras (RBKs).",
    },
    smartPricing: {
      badge: "100% Radical Transparency",
      heading: "Where Does Every ₹100 of Your Bill Go?",
      subheading: "See the revolutionary difference between traditional exploitation and Mana Rythu's ethical direct model.",
      farmerShare: "Farmer Direct Income",
      middlemanShare: "Mandi Agents & Middlemen Cut",
      traditionalBreakdown: "Traditional Mandi (Farmer gets only ~₹24)",
      manaRythuBreakdown: "Mana Rythu Direct (Farmer gets ₹72)",
    },
    seasonal: {
      badge: "Nature's Rhythm",
      heading: "Eat in Harmony with Telugu Seasons",
      subheading: "Aligning your diet with natural agronomic cycles preserves biodiversity and maximizes micronutrient density.",
      kharif: "Kharif (Monsoon: Jun - Oct)",
      rabi: "Rabi (Winter: Nov - Mar)",
      zaid: "Zaid (Summer: Apr - Jun)",
    },
    testimonials: {
      badge: "Community Voices",
      heading: "Real Impact on Real Lives",
      subheading: "Hear from the farmers who regained financial pride and the families enjoying soil-scented food.",
      farmerTag: "Annadata Voice",
      customerTag: "Family Review",
    },
    closingCTA: {
      heading: "Together, Let's Grow a Better Tomorrow.",
      subheading: "Every carrot, mango, and bag of rice you order keeps an Indian farming family prosperous on their ancestral land.",
      ctaShop: "Start Shopping Fresh Harvest",
      ctaFarmer: "Join as a Verified Farmer (ఉచిత నమోదు)",
    },
    footer: {
      about: "Mana Rythu is South India's premier direct agricultural bridge connecting verified organic farmers of Andhra Pradesh & Telangana directly with conscious urban homes.",
      quickLinks: "Quick Navigation",
      farmersPortal: "Annadata Portal",
      support: "Support & Hubs",
      rights: "All rights reserved. Dedicated with gratitude to our Indian Farmers.",
      newsletterTitle: "Receive Morning Harvest Alerts",
      newsletterDesc: "Get notified at 5:00 AM when fresh batches of Mangoes, Millets, and Native Tomatoes are plucked.",
      subscribeBtn: "Subscribe",
    },
  },
  te: {
    brand: {
      name: "మన రైతు",
      tagline: "రైతు నుండి మీ ఇంటికి నేరుగా",
      englishTagline: "రైతుల పొలం నుండి నేరుగా మీ వంటగదికి.",
      subTagline: "ఆంధ్రప్రదేశ్ మరియు తెలంగాణ రైతుల ప్రత్యక్ష వ్యవసాయ విప్లవం",
    },
    nav: {
      journey: "పొలం ప్రయాణం",
      categories: "విభాగాలు",
      featured: "తాజా దిగుబడి",
      farmers: "మన అన్నదాతలు",
      howItWorks: "ఇది ఎలా పనిచేస్తుంది",
      aiAssistant: "కృషి AI",
      pricing: "ధరల పారదర్శకత",
      seasons: "ఋతువులు",
      cart: "బుట్ట",
      login: "రైతు / కొనుగోలుదారు ప్రవేశం",
    },
    hero: {
      badge: "🌱 100% దళారీలు లేని ప్రత్యక్ష రైతు వేదిక",
      mainHeading: "మన నేల తల్లి నుండి మీ ఇంతి గుమ్మం వరకు.",
      mainHeadingHighlight: "నేల తల్లి నుండి మీ ఇంతి",
      secondaryHeading: "రైతు నుండి మీ ఇంటికి నేరుగా.",
      description: "ఉదయం 4:30 గంటల మంచువేళ కోసిన తాజా కూరగాయలు, పండ్లు. దళారీలు లేరు, రసాయన విషాలు లేవు, రైతుకే 72% పూర్తి ధర లభిస్తుంది.",
      ctaPrimary: "తాజా పంటలను చూడండి",
      ctaSecondary: "మన అన్నదాతలను కలవండి",
      scrollHint: "విత్తనం నుండి మీ ఇంటి వరకు అద్భుత ప్రయాణాన్ని చూడటానికి స్క్రోల్ చేయండి",
      liveStats: {
        activeFarmers: "4,200+ రిజిస్టర్డ్ రైతులు",
        morningHarvests: "18,400 కిలోల నేటి తాజా పంట",
        co2Saved: "48% తక్కువ కాలుష్యం",
      },
    },
    seedToPlant: {
      badge: "నేల ప్రాణ శక్తి",
      heading: "ప్రతి గొప్ప పంట ఒక చిన్న విత్తనంతోనే మొదలవుతుంది.",
      subheading: "దేశీ విత్తనాలు, స్వచ్ఛమైన జీవామృతం, తెలుగు నేలల్లో ఉదయించే సూర్యకాంతితో మొలకెత్తిన ప్రాణ ప్రదాత.",
      points: {
        seed: "హైబ్రిడ్ కాని నాటు దేశీ విత్తనాలు",
        soil: "జీవకళ ఉట్టిపడే సహజ ఎరువుల నేల",
        sunlight: "మొక్క మీదే సహజంగా పండిన మధుర ఫలాలు",
      },
    },
    farmReveal: {
      badge: "పచ్చని పైరు నేలలు",
      heading: "ప్రేమతో సాగు... గర్వంతో కోత.",
      subheading: "కృష్ణా, గోదావరి, తుంగభద్ర నదీ లోయల ఒడ్డున ప్రకృతి వ్యవసాయం చేసే అన్నదాతల శ్రమ.",
      purityBadges: {
        pesticideFree: "రసాయన అవశేషాలు లేని పంట",
        heritageSeeds: "పురాతన దేశీ విత్తన సంపద",
        groundwater: "వర్షం మరియు నదీజలాల స్వచ్ఛత",
      },
    },
    flyingTomato: {
      badge: "తాజాదనానికి నిదర్శనం",
      heading: "కంటికి కనిపించే తాజాదనం.",
      subheading: "గుంటూరు నాటు టమాటా తెల్లవారుజామున తీగ నుండి వేరవుతున్న దృశ్యం. పటుత్వం, తియ్యని లైకోపీన్ గుణాలు సమృద్ధిగా ఉన్నాయి.",
      stats: {
        harvestTime: "కోత సమయం: ఉదయం 04:45",
        brixRating: "బ్రిక్స్ తీపి: 6.8° (మంచి తీపి)",
        distance: "గుంటూరు క్లస్టర్: 42 కి.మీ దూరం",
        temp: "చల్లని నీడలో 14°C వద్ద ప్యాకింగ్",
      },
    },
    categories: {
      badge: "పంట విభాగాలు",
      heading: "ప్రతి పొలం నుండి అమృత గుణాలు",
      subheading: "రోజూ ఉదయమే సేకరించిన 8 రకాల సహజ వ్యవసాయ ఉత్పత్తులు",
      viewAll: "మొత్తం 120+ ఉత్పత్తులు చూడండి",
    },
    products: {
      badge: "నేటి తాజా బుట్ట",
      heading: "ఉదయం పొలం నుండి తాజాగా కోసినవి",
      subheading: "తెల్లవారుజామున కోసి, అదే రోజు మధ్యాహ్నానికి మీ వంటగదికి చేరుతాయి.",
      filterAll: "అన్ని పంటలు",
      filterVegetables: "కూరగాయలు",
      filterFruits: "నాటు పండ్లు",
      filterGrains: "సాంప్రదాయ బియ్యం & పప్పులు",
      filterDairyMillets: "చిరుధాన్యాలు & ఆవు నెయ్యి",
      addToCart: "బుట్టలో వేయండి",
      inStock: "ఈరోజే లభ్యం",
      soldOut: "కోత పూర్తయింది",
      freshHarvest: "ఉదయపు కోత",
    },
    farmers: {
      badge: "మన అన్నదాతలు",
      heading: "మనకు అన్నం పెట్టే పవిత్ర హస్తాలు.",
      subheading: "మీ పిల్లల ఆరోగ్యానికి విషం లేని ఆహారాన్ని పండించే నిజమైన రైతుల కథలు.",
      verified: "మన రైతు ధృవీకరించిన అన్నదాత",
      experience: "ఏళ్ల అనుభవం",
      acreage: "ఎకరాల సహజ సేద్యం",
      methods: "సుభాష్ పాలేకర్ జీరో బడ్జెట్ ప్రకృతి వ్యవసాయం (ZBNF)",
      directShare: "మీరు చెల్లించే మొత్తంలో 72% నేరుగా రైతు ఖాతాకే జమవుతుంది",
    },
    farmerBasket: {
      badge: "రైతు చేతి ప్యాకింగ్",
      heading: "పండించిన వారి చేతుల నుండే నేరుగా మీ వరకు.",
      subheading: "మధ్యవర్తుల దోపిడీ లేదు. తాజా టమాటాలు, ఆకుకూరలు, పచ్చి పసుపు కొమ్ములు వెదురు బుట్టలలో పర్యావరణహితంగా అమర్చబడతాయి.",
      basketItems: "ఈ బుట్టలో 4.8 కిలోల తాజా కూరగాయలు ఉన్నాయి",
    },
    howItWorks: {
      badge: "4 గంటల పారదర్శక ప్రయాణం",
      heading: "ఉదయపు కోత నుండి సాయంత్రపు వంటగది వరకు",
      subheading: "సాధారణ మార్కెట్ 5 రోజుల నిల్వలకు భిన్నంగా కొన్ని గంటల్లోనే డెలివరీ",
      steps: {
        step1Title: "04:30 AM ఉదయపు కోత",
        step1Desc: "మంచు బిందువులు ఆరకముందే రైతులు సహజంగా పండిన పంటను కోస్తారు.",
        step2Title: "06:00 AM డిజిటల్ తూకం",
        step2Desc: "రైతు కేంద్రం వద్ద డిజిటల్ స్కేల్ ద్వారా కచ్చితమైన తూకం మరియు న్యాయమైన ధర నమోదు.",
        step3Title: "08:00 AM ప్రత్యక్ష ఆర్డర్ విభజన",
        step3Desc: "వినియోగదారుల ఆర్డర్ల ప్రకారం సమీప గ్రామీణ కేంద్రాల్లో ప్యాకింగ్.",
        step4Title: "01:00 PM ఎలక్ట్రిక్ వ్యాన్ ద్వారా డెలివరీ",
        step4Desc: "పర్యావరణ హితమైన చల్లని వ్యాన్లలో మీ ఇంటి గుమ్మానికి నేరుగా చేరవేత.",
      },
    },
    deliveryVan: {
      badge: "శీతలీకరణ రైతు వ్యాన్",
      heading: "మా పొలాల నుండి మీ ఇంటి గుమ్మం వరకు.",
      subheading: "పల్లె దారుల నుండి నగర రహదారుల వరకు ఉదయపు తేమను కాపాడుతూ పయనించే సోలార్ ఎలక్ట్రిక్ రైతు వాహనాలు.",
      liveTracker: "రైతు వ్యాన్ #MR-HYD-04 ప్రత్యక్ష ప్రయాణం",
      origin: "ప్రారంభం: కె. రామయ్య ఆర్గానిక్ ఫామ్, గుంటూరు",
      destination: "చేరు స్థానం: బంజారాహిల్స్, హైదరాబాద్",
      eta: "చేరే సమయం: 42 నిమిషాలు",
      emission: "0.0 గ్రాముల జీరో కార్బన్ పొగ",
    },
    homeDelivery: {
      badge: "పరిపూర్ణ ఆరోగ్యం",
      heading: "తాజా ఆహారం. సంతోషకరమైన కుటుంబాలు. బలమైన రైతులు.",
      subheading: "స్వచ్ఛమైన ఆహారం తిన్నప్పుడు మీ కుటుంబ ఆరోగ్యం బాగుంటుంది, రైతుకు ఆత్మగౌరవం నిలుస్తుంది.",
      cta: "నేటి తాజా పంటలను ఆర్డర్ చేయండి",
      freshGuarantee: "100% తాజాదనపు గ్యారెంటీ: నచ్చకపోతే వెంటనే ఉచిత రీప్లేస్‌మెంట్.",
    },
    aiAssistant: {
      badge: "మన రైతు కృషి AI 2.0",
      heading: "మీ సమగ్ర వ్యవసాయ మరియు పోషకాహార సహాయకుడు",
      subheading: "తెలుగు లేదా ఇంగ్లీషులో మాట్లాడండి. పంట సంరక్షణ, చీడపీడల నివారణ, పోషక విలువలు మరియు మార్కెట్ ధరల సమాచారం పొందండి.",
      placeholder: "తెలుగులో అడగండి (ఉదా: మిరప ఆకుముడుత నివారణ, బంగినపల్లి మామిడి ప్రత్యేకత)...",
      askBtn: "కృషి AI ని అడగండి",
      quickPrompts: [
        "గుంటూరు నాటు టమాటాల ప్రత్యేకత ఏమిటి?",
        "మిరప ఆకుముడుత నివారణకు జీవామృతం ఎలా వాడాలి?",
        "సోనా మసూరి బియ్యం ధర వివరాలు తెలపండి",
        "డయాబెటిస్ నియంత్రణకు ఏ చిరుధాన్యం ఉత్తమమైనది?",
      ],
      cropDoctorBadge: "AI పంట వైద్యుడు & నేల సలహాదారు",
      disclaimer: "గమనిక: ఈ AI సలహాలు ప్రాథమిక సమాచారం కొరకు మాత్రమే. కీలక వ్యవసాయ నిర్ణయాలకు స్థానిక రైతు భరోసా కేంద్రాన్ని (RBK) సంప్రదించండి.",
    },
    smartPricing: {
      badge: "100% పూర్తి పారదర్శకత",
      heading: "మీరు చెల్లించే ప్రతి ₹100 ఎక్కడికి వెళ్తుంది?",
      subheading: "మధ్యవర్తుల దోపిడీకి, మన రైతు న్యాయమైన విధానానికి మధ్య ఉన్న విప్లవాత్మక తేడాను గమనించండి.",
      farmerShare: "రైతుకు అందే నేరుగా రాబడి",
      middlemanShare: "మండి దళారులు & కమీషన్ ఏజెంట్ల వాటా",
      traditionalBreakdown: "సాధారణ మార్కెట్ (రైతుకు కేవలం ~₹24 మాత్రమే)",
      manaRythuBreakdown: "మన రైతు మోడల్ (రైతుకు పూర్తి ₹72 దక్కుతుంది)",
    },
    seasonal: {
      badge: "ప్రకృతి గమనం",
      heading: "తెలుగు ఋతువులకు అనుగుణమైన ఆహారం తీసుకోండి",
      subheading: "ప్రకృతి కాలచక్రంతో సమన్వయమైన ఆహారం మీ రోగనిరోధక శక్తిని పెంచుతుంది.",
      kharif: "ఖరీఫ్ (వర్షాకాలం: జూన్ - అక్టోబర్)",
      rabi: "రబీ (శీతాకాలం: నవంబర్ - మార్చి)",
      zaid: "జాయద్ (వేసవి కాలం: ఏప్రిల్ - జూన్)",
    },
    testimonials: {
      badge: "ప్రజల గళం",
      heading: "జీవితాల్లో నిజమైన మార్పు",
      subheading: "ఆర్థిక స్వావలంబన పొందిన రైతులు మరియు కల్తీ లేని ఆహారం పొందుతున్న కుటుంబాల అనుభవాలు.",
      farmerTag: "అన్నదాత అనుభవం",
      customerTag: "వినియోగదారుల స్పందన",
    },
    closingCTA: {
      heading: "కలసికట్టుగా... రైతు రాజ్యం వైపు అడుగులేద్దాం.",
      subheading: "మీరు కొనే ప్రతి కూరగాయ, ఒక తెలుగు రైతు కుటుంబానికి గౌరవప్రదమైన భవిష్యత్తును అందిస్తుంది.",
      ctaShop: "తాజా కొనుగోలు ప్రారంభించండి",
      ctaFarmer: "రైతుగా ఉచిత నమోదు చేసుకోండి",
    },
    footer: {
      about: "మన రైతు అనేది ఆంధ్రప్రదేశ్ మరియు తెలంగాణ సేంద్రీయ రైతులను నేరుగా నగర ప్రజలతో అనుసంధానించే అత్యున్నత వ్యవసాయ వేదిక.",
      quickLinks: "ముఖ్యమైన లింకులు",
      farmersPortal: "అన్నదాత పోర్టల్",
      support: "సహాయం & కేంద్రాలు",
      rights: "సర్వహక్కులు ప్రత్యేకించబడ్డాయి. మన తెలుగు అన్నదాతలకు సవినయ సమర్పణ.",
      newsletterTitle: "ఉదయపు కోత హెచ్చరికలు పొందండి",
      newsletterDesc: "తాజా మామిడిపండ్లు, కూరగాయలు కోసిన వెంటనే ఉదయం 5:00 గంటలకు నోటిఫికేషన్ పొందండి.",
      subscribeBtn: "సభ్యత్వం పొందండి",
    },
  },
};
