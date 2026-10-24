"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { initGSAP } from "@/lib/gsap";
import { useLanguage } from "@/context/LanguageContext";
import { Home, ArrowRight, ShieldCheck } from "lucide-react";
import { assetPath } from "@/lib/site";

export function Section11HomeDelivery() {
  const { t, isTelugu } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const basketFlyRef = useRef<HTMLDivElement>(null);
  const warmSunGlowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Home Doorstep Delivery Scrubbed Timeline
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

      // 1. Background gentle zoom
      tl.to(
        bgImageRef.current,
        {
          scale: 1.15,
          y: -30,
          ease: "none",
        },
        0
      );

      // 2. Real Photorealistic Vegetable Basket glides smoothly from left onto the doorstep
      tl.fromTo(
        basketFlyRef.current,
        { x: -320, y: -60, scale: 0.75, opacity: 0 },
        { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.9, ease: "power2.out" },
        0.1
      );

      // 3. Warm golden light radiates outwards
      tl.to(
        warmSunGlowRef.current,
        {
          opacity: 0.9,
          scale: 1.4,
          duration: 0.8,
        },
        0.3
      );

      // 4. Climax headline reveals
      tl.fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)" },
        0.4
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home-delivery"
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white"
    >
      {/* FULL-SCREEN REAL WARM INDIAN HOME VERANDA PHOTOGRAPHY BACKGROUND */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Warm Welcoming Home Veranda in Morning Sun"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 cinematic-overlay-dark" />
      </div>

      {/* Warm Golden Home Light Glow in center */}
      <div
        ref={warmSunGlowRef}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-gradient-to-b from-[#E8AE42]/35 via-[#F5D061]/20 to-transparent blur-3xl opacity-20 pointer-events-none"
      />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between py-12 z-10">
        {/* Top Story Subhead */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#80BC41]/40 text-[#A4D66A] text-xs font-semibold uppercase tracking-wider mb-2 backdrop-blur-xl">
            <Home className="w-3.5 h-3.5 text-[#E8AE42]" />
            <span>{t.homeDelivery.badge}</span>
          </div>
        </div>

        {/* Central Visual: CONTINUOUS OBJECT #6: REAL PHOTOREALISTIC HARVEST HANDOVER ON DOORSTEP */}
        <div className="relative w-full max-w-2xl mx-auto h-[380px] flex items-center justify-center">
          <div
            ref={basketFlyRef}
            className="relative w-96 sm:w-[480px] h-72 sm:h-80 rounded-3xl overflow-hidden bg-white/95 p-2 border-2 border-[#E8AE42] shadow-[0_32px_64px_rgba(0,0,0,0.85)] filter backdrop-blur-md cursor-pointer"
          >
            <Image
              src={assetPath("/images/photoreal_doorstep_handover.jpg")}
              alt="Real Photorealistic Harvest Doorstep Handover"
              fill
              sizes="(max-width: 768px) 384px, 480px"
              className="object-cover rounded-2xl"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#123B28] text-white text-[11px] font-bold shadow-md">
              Doorstep Handover Verified: 01:15 PM
            </div>
          </div>
        </div>

        {/* Final Dramatic Climax Headline & CTA */}
        <div ref={headlineRef} className="text-center max-w-3xl mx-auto z-20">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 drop-shadow-2xl">
            {isTelugu ? (
              <>
                తాజా ఆహారం. సంతోషకరమైన కుటుంబాలు. <br />
                <span className="text-[#80BC41]">బలమైన రైతులు.</span>
              </>
            ) : (
              <>
                Fresh Food. Happy Families. <br />
                <span className="text-[#80BC41]">Stronger Farmers.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto font-light mb-8 drop-shadow">
            {t.homeDelivery.subheading}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#featured-products"
              className="px-9 py-4 rounded-full bg-gradient-to-r from-[#80BC41] to-[#6ca331] text-[#0A1F15] font-bold text-base hover:scale-105 hover:shadow-2xl hover:shadow-[#80BC41]/50 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>{t.homeDelivery.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <div className="flex items-center gap-2 text-xs text-white/80">
              <ShieldCheck className="w-4 h-4 text-[#80BC41]" />
              <span>{t.homeDelivery.freshGuarantee}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
