"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { initGSAP } from "@/lib/gsap";
import { useLanguage } from "@/context/LanguageContext";
import { Truck, Zap, MapPin } from "lucide-react";
import { assetPath } from "@/lib/site";

export function Section10DeliveryVan() {
  const { t, isTelugu } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const vanRef = useRef<HTMLDivElement>(null);
  const textCardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Pinned scrub timeline of real electric farm delivery van
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

      // 1. Text reveals
      tl.fromTo(
        textCardRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.3 }
      );

      // 2. Scenic highway background scrolls in parallax
      tl.to(
        bgImageRef.current,
        {
          x: -120,
          scale: 1.12,
          ease: "none",
        },
        0
      );

      // 3. Real Photorealistic Electric Delivery Van travels smoothly from left to center-right
      tl.fromTo(
        vanRef.current,
        { x: -380, y: 0 },
        { x: 320, y: -8, duration: 1.5, ease: "none" },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="delivery-van"
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white"
    >
      {/* FULL-SCREEN REAL SCENIC HIGHWAY LANDSCAPE PHOTOGRAPHY BACKGROUND */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-[125%] h-full -left-[10%] pointer-events-none"
      >
        <Image
          src={assetPath("/images/photoreal_van_road.jpg")}
          alt="Mana Rythu Electric Van on Countryside Road"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 cinematic-overlay-dark" />
      </div>

      {/* Atmospheric Top Glow */}
      <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-[#E8AE42]/20 blur-3xl pointer-events-none" />

      {/* Main Top Text Header */}
      <div
        ref={textCardRef}
        className="absolute top-16 left-0 right-0 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-30"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#80BC41]/40 text-[#A4D66A] text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xl">
          <Truck className="w-3.5 h-3.5 text-[#80BC41]" />
          <span>{t.deliveryVan.badge}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-2 drop-shadow-2xl">
          {t.deliveryVan.heading}
        </h2>

        <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-light drop-shadow">
          {t.deliveryVan.subheading}
        </p>

        {/* Live GPS Van Status Pill */}
        <div className="mt-4 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/65 border border-white/20 text-xs text-white backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-1.5 text-[#80BC41]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#80BC41] animate-ping" />
            <span className="font-bold">{t.deliveryVan.liveTracker}</span>
          </div>
          <span className="text-white/40">•</span>
          <div className="flex items-center gap-1 text-[#E8AE42]">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.deliveryVan.emission}</span>
          </div>
        </div>
      </div>

      {/* CONTINUOUS SIGNATURE OBJECT #5: REAL PHOTOREALISTIC REFRIGERATED ELECTRIC VAN */}
      <div
        ref={vanRef}
        className="absolute bottom-24 left-1/4 z-30 filter drop-shadow-[0_32px_54px_rgba(0,0,0,0.8)] cursor-pointer"
      >
        <div className="relative w-88 sm:w-[540px] md:w-[620px] h-52 sm:h-[320px] rounded-3xl overflow-hidden bg-white/95 p-3 border-2 border-[#80BC41]/60 shadow-[0_24px_64px_rgba(0,0,0,0.8)] backdrop-blur-md">
          <Image
            src={assetPath("/images/photoreal_van.jpg")}
            alt="Real Photorealistic Electric Farm Delivery Van"
            fill
            sizes="(max-width: 768px) 360px, 620px"
            className="object-contain p-2"
          />

          {/* Live Speed / Temperature Pill */}
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-bold text-[#A4D66A] border border-[#80BC41]/40 shadow-xl flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#80BC41] animate-pulse" />
            <span>Cabin Pre-Cooled: 12°C</span>
          </div>
        </div>
      </div>

      {/* Road Layer at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-20 flex items-center justify-center">
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-[#E8AE42]/80">
          <MapPin className="w-3.5 h-3.5 text-[#80BC41]" />
          <span>{t.deliveryVan.origin} → {t.deliveryVan.destination}</span>
        </div>
      </div>
    </section>
  );
}
