"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { initGSAP } from "@/lib/gsap";
import { useLanguage } from "@/context/LanguageContext";
import { ShoppingBasket, Check, Heart } from "lucide-react";

export function Section08FarmerBasket() {
  const { t, isTelugu } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const basketRef = useRef<HTMLDivElement>(null);
  const tomatoFlyRef = useRef<HTMLDivElement>(null);
  const textCardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Continuous Story: Pinned Basket Packing Timeline
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

      // 1. Text enters
      tl.fromTo(
        textCardRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.3 }
      );

      // 2. Background push
      tl.to(
        bgImageRef.current,
        {
          scale: 1.15,
          y: -30,
          ease: "none",
        },
        0
      );

      // 3. Real Photorealistic Woven Bamboo Basket enters from bottom
      tl.fromTo(
        basketRef.current,
        { y: 240, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.4)" },
        0.1
      );

      // 4. Real Photorealistic Tomato descends along 3D arc into basket
      tl.fromTo(
        tomatoFlyRef.current,
        { x: -220, y: -280, scale: 1.4, rotation: -50, opacity: 0 },
        { x: 0, y: 0, scale: 0.8, rotation: 0, opacity: 1, duration: 0.7, ease: "power2.inOut" },
        0.25
      );

      // 5. Basket lifts slightly ready for cold-chain van loading
      tl.to(
        basketRef.current,
        {
          y: -25,
          scale: 1.05,
          duration: 0.4,
          ease: "power1.inOut",
        },
        0.85
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="farmer-basket"
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white"
    >
      {/* FULL-SCREEN REAL HARVEST BARN PHOTOGRAPHY BACKGROUND */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=2400&q=85"
          alt="Rustic Open-Air Harvest Station in Morning Sun"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 cinematic-overlay-dark" />
      </div>

      {/* Atmospheric Golden Sun Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#E8AE42]/20 blur-3xl pointer-events-none" />

      {/* Main Content Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col md:flex-row items-center justify-between py-12 z-10">
        {/* Left Side: Editorial Content */}
        <div ref={textCardRef} className="max-w-xl text-left z-20 mb-8 md:mb-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#80BC41]/40 text-[#A4D66A] text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xl">
            <ShoppingBasket className="w-3.5 h-3.5 text-[#E8AE42]" />
            <span>{t.farmerBasket.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4 drop-shadow-2xl">
            {isTelugu ? (
              <>
                పండించిన వారి చేతుల నుండే <br />
                <span className="text-[#80BC41]">నేరుగా మీ వరకు.</span>
              </>
            ) : (
              <>
                Directly From the People{" "}
                <span className="text-[#80BC41] italic font-normal">Who Grow It.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-8 drop-shadow">
            {t.farmerBasket.subheading}
          </p>

          <div className="space-y-3.5">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-black/50 border border-white/15 backdrop-blur-xl shadow-xl">
              <div className="w-8 h-8 rounded-full bg-[#80BC41]/25 flex items-center justify-center text-[#80BC41]">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm text-white/95">
                100% Biodegradable woven bamboo basket &amp; natural breathable liners
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-black/50 border border-white/15 backdrop-blur-xl shadow-xl">
              <div className="w-8 h-8 rounded-full bg-[#E8AE42]/25 flex items-center justify-center text-[#E8AE42]">
                <Heart className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm text-white/95">
                Zero cold-storage chemical ripening — packed 4 hours from sunrise harvest
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: CONTINUOUS OBJECT #4: REAL PHOTOREALISTIC BASKET & TOMATO ENTRY */}
        <div className="relative w-full max-w-xl h-[480px] sm:h-[560px] flex items-center justify-center z-10">
          {/* Flying Tomato Landing into Basket */}
          <div
            ref={tomatoFlyRef}
            className="absolute top-16 left-12 w-28 h-28 z-40 filter drop-shadow-[0_20px_35px_rgba(229,57,53,0.7)] pointer-events-none"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden bg-white/95 p-1 border-2 border-[#E53935] shadow-2xl">
              <Image
                src="/images/photoreal_tomato.jpg"
                alt="Photoreal Tomato Landing"
                fill
                sizes="112px"
                className="object-contain p-1"
              />
            </div>
          </div>

          {/* Real Photorealistic Woven Bamboo Basket Container */}
          <div
            ref={basketRef}
            className="relative w-88 sm:w-[480px] h-80 sm:h-[420px] rounded-3xl overflow-hidden bg-white/95 p-4 border-2 border-[#E8AE42]/80 shadow-[0_32px_72px_rgba(0,0,0,0.85)] filter backdrop-blur-md"
          >
            <Image
              src="/images/photoreal_basket.jpg"
              alt="Real Photorealistic Harvest Basket"
              fill
              sizes="(max-width: 768px) 360px, 480px"
              className="object-contain p-3"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-[#80BC41]/40 text-xs font-bold text-[#A4D66A] whitespace-nowrap shadow-xl">
              <span>{t.farmerBasket.basketItems}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
