"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { initGSAP } from "@/lib/gsap";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown, Sprout, ShieldCheck, Truck, Users } from "lucide-react";

export function Section01Hero() {
  const { t, isTelugu } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Headline entrance
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power3.out" }
      );

      // 2. Background gentle zoom / parallax
      gsap.to(bgImageRef.current, {
        scale: 1.15,
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[115vh] flex flex-col justify-between overflow-hidden text-white pt-32 pb-16"
    >
      {/* FULL-SCREEN REAL AGRICULTURAL PHOTOGRAPHY BACKGROUND */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-[125%] -top-[10%] pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85"
          alt="Golden Indian Sunrise over Fertile Farmlands"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic Golden-Dark Vignette Overlay */}
        <div className="absolute inset-0 cinematic-overlay-dark" />
      </div>

      {/* Sun Ray Atmospheric Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#E8AE42]/20 blur-[140px] pointer-events-none" />

      {/* Hero Editorial Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#80BC41]/40 text-[#A4D66A] text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-xl mb-6 shadow-2xl animate-glow-pulse">
          <Sprout className="w-4 h-4 text-[#80BC41]" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Telugu Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-telugu text-[#E8AE42] font-semibold tracking-wide mb-3 drop-shadow-md">
          {t.hero.secondaryHeading}
        </p>

        {/* Oversized Cinematic Editorial Heading */}
        <h1
          ref={headlineRef}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.08] mb-6 drop-shadow-2xl"
        >
          {isTelugu ? (
            <>
              మన <span className="text-[#80BC41] underline decoration-[#E8AE42]/60 underline-offset-8">నేల తల్లి నుండి</span> మీ ఇంతి గుమ్మం వరకు.
            </>
          ) : (
            <>
              From Our{" "}
              <span className="text-[#80BC41] italic font-normal">Living Soil</span> to Your{" "}
              <span className="text-[#E8AE42]">Soul.</span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl font-light leading-relaxed mb-8 drop-shadow-md">
          {t.hero.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#featured-products"
            className="px-9 py-4 rounded-full bg-gradient-to-r from-[#80BC41] to-[#6ca331] text-[#0A1F15] font-bold text-sm sm:text-base hover:shadow-2xl hover:shadow-[#80BC41]/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#meet-farmers"
            className="px-9 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm sm:text-base backdrop-blur-xl transition-all duration-300 hover:scale-105 shadow-xl"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Live Farm Stats Bar with Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl bg-black/55 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 text-center shadow-2xl">
          <div className="flex items-center justify-center gap-2 py-1.5 border-b sm:border-b-0 sm:border-r border-white/15">
            <Users className="w-4 h-4 text-[#80BC41]" />
            <span className="text-xs sm:text-sm font-semibold text-white/95">
              {t.hero.liveStats.activeFarmers}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1.5 border-b sm:border-b-0 sm:border-r border-white/15">
            <ShieldCheck className="w-4 h-4 text-[#E8AE42]" />
            <span className="text-xs sm:text-sm font-semibold text-white/95">
              {t.hero.liveStats.morningHarvests}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1.5">
            <Truck className="w-4 h-4 text-[#80BC41]" />
            <span className="text-xs sm:text-sm font-semibold text-white/95">
              {t.hero.liveStats.co2Saved}
            </span>
          </div>
        </div>
      </div>

      {/* Continuous Heritage Seed Anchor & Scroll Hint */}
      <div className="relative w-full flex flex-col items-center justify-end mt-16 z-20 pb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E8AE42] drop-shadow mt-20">
          <span>{t.hero.scrollHint}</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#80BC41]" />
        </div>
      </div>
    </section>
  );
}
