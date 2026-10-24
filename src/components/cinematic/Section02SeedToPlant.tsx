"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { initGSAP } from "@/lib/gsap";
import { useLanguage } from "@/context/LanguageContext";
import { Droplet, Sun, Sparkles } from "lucide-react";

export function Section02SeedToPlant() {
  const { t, isTelugu } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const sunbeamsRef = useRef<HTMLDivElement>(null);
  const textCardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Pinned scrub timeline: Background camera push & text entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=130%",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Text enters smoothly
      tl.fromTo(
        textCardRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" }
      );

      // 2. Background camera subtle zoom on fertile soil
      tl.to(
        bgImageRef.current,
        {
          scale: 1.15,
          y: -30,
          ease: "none",
        },
        0
      );

      // 3. Sunlight beams expand behind the growing plant
      tl.fromTo(
        sunbeamsRef.current,
        { scale: 0.6, opacity: 0.2 },
        { scale: 1.35, opacity: 0.85, duration: 0.8, ease: "power2.out" },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="seed-to-plant"
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white"
    >
      {/* FULL-SCREEN REAL AGRICULTURAL PHOTOGRAPHY BACKGROUND: PHOTOREALISTIC SOIL & FIELD */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
      >
        <Image
          src="/images/photoreal_field_soil.jpg"
          alt="Photorealistic Indian Farm Field Fertile Soil at Sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 cinematic-overlay-dark" />
      </div>

      {/* Radiant Sun Halo */}
      <div
        ref={sunbeamsRef}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#E8AE42]/35 via-[#80BC41]/20 to-transparent blur-3xl pointer-events-none opacity-20"
      />

      {/* Main Content Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col md:flex-row items-center justify-between z-10 py-12">
        {/* Left Side: Editorial Story Card */}
        <div ref={textCardRef} className="max-w-xl text-left z-20 mb-8 md:mb-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#80BC41]/40 text-[#A4D66A] text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#E8AE42]" />
            <span>{t.seedToPlant.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-5 drop-shadow-2xl">
            {isTelugu ? (
              <>
                ప్రతి గొప్ప పంట <span className="text-[#80BC41]">ఒక చిన్న విత్తనంతోనే</span> మొదలవుతుంది.
              </>
            ) : (
              <>
                Every Great Harvest Begins with a{" "}
                <span className="text-[#80BC41] italic font-normal">Living Seed.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-8 drop-shadow">
            {t.seedToPlant.subheading}
          </p>

          {/* Key Purity Points */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-black/55 border border-white/15 backdrop-blur-xl shadow-xl">
              <div className="w-9 h-9 rounded-xl bg-[#80BC41]/25 flex items-center justify-center text-[#80BC41]">
                🌱
              </div>
              <span className="text-sm font-medium text-white/95">
                {t.seedToPlant.points.seed}
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-black/55 border border-white/15 backdrop-blur-xl shadow-xl">
              <div className="w-9 h-9 rounded-xl bg-[#E8AE42]/25 flex items-center justify-center text-[#E8AE42]">
                <Droplet className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-white/95">
                {t.seedToPlant.points.soil}
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-black/55 border border-white/15 backdrop-blur-xl shadow-xl">
              <div className="w-9 h-9 rounded-xl bg-[#F59E0B]/25 flex items-center justify-center text-[#F59E0B]">
                <Sun className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-white/95">
                {t.seedToPlant.points.sunlight}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Natural Soil Landing Stage Area for Single Continuous Seed */}
        <div className="relative w-full max-w-lg h-[480px] sm:h-[580px] flex items-center justify-center z-10 pointer-events-none">
          {/* Subtle Golden Earth Focus Glow */}
          <div className="w-72 h-72 rounded-full bg-gradient-to-t from-[#E8AE42]/20 via-[#80BC41]/10 to-transparent blur-2xl" />
        </div>
      </div>
    </section>
  );
}
