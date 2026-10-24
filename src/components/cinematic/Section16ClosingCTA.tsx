"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { initGSAP } from "@/lib/gsap";
import { useLanguage } from "@/context/LanguageContext";
import { Sprout, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";

export function Section16ClosingCTA() {
  const { t, isTelugu } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const closingSproutRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Closing sunset plant growth timeline
      gsap.fromTo(
        closingSproutRef.current,
        { scale: 0.6, y: 50, opacity: 0.3 },
        {
          scale: 1.15,
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[95vh] flex flex-col justify-between overflow-hidden text-white pt-28 pb-16"
    >
      {/* FULL-SCREEN REAL GOLDEN SUNSET HORIZON PHOTOGRAPHY BACKGROUND */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85"
          alt="Golden Sunset over Living Organic Farmland"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 cinematic-overlay-dark" />
      </div>

      {/* Radiating Sunset Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full bg-gradient-to-t from-[#E8AE42]/30 via-[#80BC41]/15 to-transparent blur-3xl pointer-events-none" />

      {/* Central Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 my-auto">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#80BC41] to-[#123B28] border border-[#80BC41]/40 flex items-center justify-center mx-auto mb-6 shadow-2xl animate-glow-pulse">
          <Sprout className="w-8 h-8 text-white" />
        </div>

        <p className="text-xl sm:text-2xl font-telugu text-[#E8AE42] font-semibold mb-3 drop-shadow">
          కలసికట్టుగా... రైతు రాజ్యం వైపు అడుగులేద్దాం
        </p>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
          {t.closingCTA.heading}
        </h2>

        <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-10 drop-shadow">
          {t.closingCTA.subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#featured-products"
            className="px-9 py-4 rounded-full bg-gradient-to-r from-[#80BC41] to-[#6ca331] text-[#0A1F15] font-bold text-base hover:scale-105 hover:shadow-2xl hover:shadow-[#80BC41]/50 transition-all duration-300 flex items-center gap-2 group"
          >
            <span>{t.closingCTA.ctaShop}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>

          <a
            href="#meet-farmers"
            className="px-9 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-base backdrop-blur-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-xl"
          >
            <HeartHandshake className="w-5 h-5 text-[#E8AE42]" />
            <span>{t.closingCTA.ctaFarmer}</span>
          </a>
        </div>

        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black/60 border border-white/20 text-xs text-white/90 backdrop-blur-xl shadow-2xl">
          <ShieldCheck className="w-4 h-4 text-[#80BC41]" />
          <span>72% Direct Farmer Revenue Guarantee • Zero Chemical Intermediaries</span>
        </div>
      </div>

      {/* CONTINUOUS STORY FINAL CLOSING: REAL PHOTOREALISTIC SPROUT ON SUNSET HORIZON */}
      <div className="relative w-full flex justify-center items-end mt-8 z-20">
        <div
          ref={closingSproutRef}
          className="relative w-28 h-28 rounded-2xl overflow-hidden bg-white/90 p-2 border-2 border-[#80BC41] shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter backdrop-blur-md"
        >
          <Image
            src="/images/photoreal_sprout.jpg"
            alt="Living Sprout on Horizon"
            fill
            sizes="112px"
            className="object-contain p-1"
          />
        </div>
      </div>
    </section>
  );
}
