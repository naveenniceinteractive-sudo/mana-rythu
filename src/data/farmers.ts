export interface Farmer {
  id: string;
  name: string;
  nameTe: string;
  village: string;
  district: string;
  state: string;
  yearsOfFarming: number;
  acres: number;
  specialtyCrops: string[];
  specialtyCropsTe: string[];
  farmingMethod: string;
  quoteEn: string;
  quoteTe: string;
  verifiedYear: number;
  rating: number;
  reviews: number;
  directEarningsTotal: string;
  avatarSeed: string;
  badge: string;
}

export const featuredFarmers: Farmer[] = [
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
    avatarSeed: "ramaiah",
    badge: "Master Organic Grower",
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
    avatarSeed: "lakshmi",
    badge: "Heritage Orchard Guardian",
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
    avatarSeed: "venkatesh",
    badge: "Heritage Grain Champion",
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
    verifiedYear: 2022,
    rating: 4.94,
    reviews: 340,
    directEarningsTotal: "₹3,95,000",
    avatarSeed: "anjaneyulu",
    badge: "Dryland Millet Pioneer",
  },
];
