"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface Stage {
  id: string;
  nameEn: string;
  nameTe: string;
  icon: string;
  scrollPercent: number;
}

const STAGES: Stage[] = [
  { id: "hero", nameEn: "Seed", nameTe: "విత్తనం", icon: "🌱", scrollPercent: 0 },
  { id: "seed-to-plant", nameEn: "Living Rice", nameTe: "వరి మొక్క", icon: "🌾", scrollPercent: 15 },
  { id: "flying-tomato", nameEn: "Tomato", nameTe: "టమాటా", icon: "🍅", scrollPercent: 35 },
  { id: "farmer-basket", nameEn: "Basket", nameTe: "బుట్ట", icon: "🧺", scrollPercent: 52 },
  { id: "delivery-van", nameEn: "Electric Van", nameTe: "వ్యాన్", icon: "🚚", scrollPercent: 68 },
  { id: "home-delivery", nameEn: "Doorstep", nameTe: "ఇల్లు", icon: "🏡", scrollPercent: 82 },
  { id: "krishi-ai", nameEn: "Krishi AI", nameTe: "కృషి AI", icon: "✨", scrollPercent: 92 },
];

export function ScrollProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const { isTelugu } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentScroll = window.scrollY;
      const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setScrollProgress(progress);

      // Find closest stage
      let currentIdx = 0;
      for (let i = STAGES.length - 1; i >= 0; i--) {
        if (progress >= STAGES[i].scrollPercent - 4) {
          currentIdx = i;
          break;
        }
      }
      setActiveStage(currentIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-black/10 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#80BC41] via-[#E8AE42] to-[#E53935] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Storyline Journey Capsule on Desktop */}
      <div className="hidden lg:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-40 items-center gap-1.5 px-4 py-2 rounded-full bg-[#123B28]/90 text-white backdrop-blur-md border border-[#80BC41]/30 shadow-2xl transition-all duration-300">
        <span className="text-xs uppercase tracking-wider text-[#80BC41] font-semibold mr-2 border-r border-white/20 pr-3">
          {isTelugu ? "జీవ ప్రయాణం" : "Journey"}
        </span>

        {STAGES.map((stage, idx) => {
          const isActive = activeStage === idx;
          const isPassed = activeStage > idx;

          return (
            <button
              key={stage.id}
              onClick={() => scrollToSection(stage.id)}
              title={`${stage.nameEn} (${stage.nameTe})`}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all duration-200 ${
                isActive
                  ? "bg-[#80BC41] text-[#0A2217] font-bold shadow-md scale-105"
                  : isPassed
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              <span>{stage.icon}</span>
              <span className={isActive ? "inline" : "hidden xl:inline"}>
                {isTelugu ? stage.nameTe : stage.nameEn}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
