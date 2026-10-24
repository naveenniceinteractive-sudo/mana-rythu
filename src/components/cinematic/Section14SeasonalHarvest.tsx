"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CloudRain, Sun, Flame, Sparkles, Calendar } from "lucide-react";

interface SeasonItem {
  id: string;
  nameEn: string;
  nameTe: string;
  period: string;
  crops: { name: string; nameTe: string; icon: string }[];
  benefitEn: string;
  benefitTe: string;
  themeBg: string;
  accent: string;
}

export function Section14SeasonalHarvest() {
  const { t, isTelugu } = useLanguage();
  const [activeSeason, setActiveSeason] = useState<"kharif" | "rabi" | "zaid">("rabi");

  const seasonsData: Record<"kharif" | "rabi" | "zaid", SeasonItem> = {
    kharif: {
      id: "kharif",
      nameEn: "Kharif (Monsoon Harvest)",
      nameTe: "ఖరీఫ్ (వర్షాకాల పంటలు)",
      period: "June – October",
      crops: [
        { name: "Paddy & Sona Masoori", nameTe: "వరి & సోనా మసూరి", icon: "🌾" },
        { name: "Native Sweet Corn", nameTe: "నాటు మొక్కజొన్న", icon: "🌽" },
        { name: "Red Gram (Toor)", nameTe: "నాటు కందులు", icon: "🫘" },
        { name: "Monsoon Leafy Greens", nameTe: "తోటకూర & గోంగూర", icon: "🥬" },
      ],
      benefitEn: "Monsoon crops replenish vital gut microbiome and balance digestive heat.",
      benefitTe: "వర్షాకాలంలో పండే ఆకుకూరలు మరియు పప్పుధాన్యాలు శరీర రోగనిరోధక శక్తిని పెంచుతాయి.",
      themeBg: "#0B291B",
      accent: "#80BC41",
    },
    rabi: {
      id: "rabi",
      nameEn: "Rabi (Winter Dew Harvest)",
      nameTe: "రబీ (శీతాకాల పంటలు)",
      period: "November – March",
      crops: [
        { name: "Country Heirloom Tomatoes", nameTe: "గుంటూరు నాటు టమాటాలు", icon: "🍅" },
        { name: "Native Purple Brinjal", nameTe: "గుత్తి వంకాయ", icon: "🍆" },
        { name: "Tender Palakura Spinach", nameTe: "మంచు పాలకూర", icon: "🥬" },
        { name: "Stone-Ground Mustard", nameTe: "ఆవాలు & జీలకర్ర", icon: "🌿" },
      ],
      benefitEn: "Winter harvests concentrate natural sugars (high Brix) and therapeutic lycopene.",
      benefitTe: "చలికాలం మంచు బిందువులతో టమాటాల్లో సహజ తీపి మరియు యాంటీఆక్సిడెంట్లు పుష్కలంగా ఉంటాయి.",
      themeBg: "#123B28",
      accent: "#E8AE42",
    },
    zaid: {
      id: "zaid",
      nameEn: "Zaid (Summer Sweet Harvest)",
      nameTe: "జాయద్ (వేసవి కాల పంటలు)",
      period: "April – June",
      crops: [
        { name: "Royal Banganapalli Mangoes", nameTe: "బంగినపల్లి మామిడి", icon: "🥭" },
        { name: "Village Watermelon", nameTe: "నాటు పుచ్చకాయ", icon: "🍉" },
        { name: "Crisp Native Cucumber", nameTe: "సహజ దోసకాయ", icon: "🥒" },
        { name: "Muskmelon (Kharbuja)", nameTe: "కర్బూజ పండ్లు", icon: "🍈" },
      ],
      benefitEn: "Summer fruits deliver high electrolyte content and cellular cooling hydration.",
      benefitTe: "వేసవిలో శరీరానికి చలువ చేసే సహజ నీటి శాతం, ఎలక్ట్రోలైట్లు సమృద్ధిగా లభిస్తాయి.",
      themeBg: "#2B2011",
      accent: "#F59E0B",
    },
  };

  const current = seasonsData[activeSeason];

  return (
    <section
      id="seasonal-harvest"
      className="relative py-28 transition-colors duration-700 text-white overflow-hidden"
      style={{ backgroundColor: current.themeBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#A4D66A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#E8AE42]" />
            <span>{t.seasonal.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.seasonal.heading}
          </h2>

          <p className="text-base text-white/80 font-light max-w-2xl mx-auto">
            {t.seasonal.subheading}
          </p>

          {/* Season Switcher Pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md">
            <button
              onClick={() => setActiveSeason("kharif")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeSeason === "kharif"
                  ? "bg-[#80BC41] text-[#0A2217] shadow-lg scale-105"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <CloudRain className="w-3.5 h-3.5" />
              <span>{isTelugu ? "ఖరీఫ్ (వర్షాకాలం)" : "Kharif (Monsoon)"}</span>
            </button>

            <button
              onClick={() => setActiveSeason("rabi")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeSeason === "rabi"
                  ? "bg-[#E8AE42] text-[#0A2217] shadow-lg scale-105"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isTelugu ? "రబీ (శీతాకాలం)" : "Rabi (Winter Dew)"}</span>
            </button>

            <button
              onClick={() => setActiveSeason("zaid")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeSeason === "zaid"
                  ? "bg-[#F59E0B] text-[#0A2217] shadow-lg scale-105"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>{isTelugu ? "జాయద్ (వేసవి)" : "Zaid (Summer)"}</span>
            </button>
          </div>
        </div>

        {/* Season Details Card & Crops Grid */}
        <div className="max-w-4xl mx-auto bg-white/10 rounded-3xl border border-white/15 p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase font-semibold tracking-wider text-[#A4D66A]">
                {current.period}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                {isTelugu ? current.nameTe : current.nameEn}
              </h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-black/30 border border-white/10 text-xs text-white/90">
              {isTelugu ? current.benefitTe : current.benefitEn}
            </div>
          </div>

          {/* Active Season Crop Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {current.crops.map((crop, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 transition-all text-center flex flex-col items-center justify-center group cursor-pointer"
              >
                <span className="text-5xl mb-3 transform group-hover:scale-115 group-hover:rotate-6 transition-transform select-none">
                  {crop.icon}
                </span>
                <span className="font-serif font-bold text-sm text-white block mb-0.5">
                  {isTelugu ? crop.nameTe : crop.name}
                </span>
                <span className="text-[11px] font-telugu text-[#E8AE42]">
                  {crop.nameTe}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
