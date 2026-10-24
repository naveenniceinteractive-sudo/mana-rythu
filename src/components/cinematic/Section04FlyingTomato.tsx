"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { initGSAP } from "@/lib/gsap";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Clock, MapPin, Gauge } from "lucide-react";

export function Section04FlyingTomato() {
  const { t, isTelugu } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const tomatoContainerRef = useRef<HTMLDivElement>(null);
  const tomatoImageRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);
  const badge3Ref = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Signature scrubbed flight of real photorealistic tomato
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=135%",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Text reveals
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.3 }
      );

      // 2. Background camera move
      tl.to(
        bgImageRef.current,
        {
          scale: 1.15,
          y: -30,
          ease: "none",
        },
        0
      );

      // 3. Real Photorealistic Tomato flies along curved 3D trajectory
      tl.fromTo(
        tomatoContainerRef.current,
        {
          x: -120,
          y: 40,
          scale: 0.85,
        },
        {
          x: 280,
          y: -50,
          scale: 1.35,
          duration: 0.7,
          ease: "power1.inOut",
        },
        0
      );

      // Axial 3D rotation of tomato showcasing real glistening droplets
      tl.to(
        tomatoImageRef.current,
        {
          rotation: 320,
          ease: "none",
          duration: 1.2,
        },
        0
      );

      // 4. Real-time badges pop up
      tl.fromTo(
        badge1Ref.current,
        { scale: 0, opacity: 0, x: -20 },
        { scale: 1, opacity: 1, x: 0, duration: 0.3, ease: "back.out(2)" },
        0.35
      );

      tl.fromTo(
        badge2Ref.current,
        { scale: 0, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "back.out(2)" },
        0.45
      );

      tl.fromTo(
        badge3Ref.current,
        { scale: 0, opacity: 0, x: 20 },
        { scale: 1, opacity: 1, x: 0, duration: 0.3, ease: "back.out(2)" },
        0.55
      );

      // 5. Descent toward harvest basket
      tl.to(
        tomatoContainerRef.current,
        {
          x: 180,
          y: 240,
          scale: 1.1,
          duration: 0.5,
          ease: "power2.in",
        },
        0.8
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="flying-tomato"
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white"
    >
      {/* FULL-SCREEN REAL TOMATO VINE FARM PHOTOGRAPHY BACKGROUND */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=2400&q=85"
          alt="Organic Tomato Farm Vines with Ripe Red Fruit"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 cinematic-overlay-dark" />
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#E53935]/20 blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between py-12 z-10">
        {/* Section Heading */}
        <div ref={headingRef} className="max-w-2xl text-left z-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#E53935]/40 text-[#FF8A80] text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#E8AE42]" />
            <span>{t.flyingTomato.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-3 drop-shadow-2xl">
            {isTelugu ? (
              <>
                కంటికి కనిపించే <span className="text-[#E53935]">తాజాదనం.</span>
              </>
            ) : (
              <>
                Freshness You Can{" "}
                <span className="text-[#E53935] italic font-normal">See, Smell &amp; Taste.</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-white/90 max-w-xl font-light leading-relaxed drop-shadow">
            {t.flyingTomato.subheading}
          </p>
        </div>

        {/* Central Stage: REAL PHOTOREALISTIC FLYING TOMATO */}
        <div className="relative w-full h-[400px] flex items-center justify-start">
          <div
            ref={tomatoContainerRef}
            className="absolute left-16 sm:left-28 top-20 z-30 cursor-pointer"
          >
            {/* Real Photorealistic Tomato Image Container */}
            <div
              ref={tomatoImageRef}
              className="relative w-44 h-44 sm:w-56 sm:h-56 filter drop-shadow-[0_24px_48px_rgba(229,57,53,0.6)]"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white/95 p-2 border-2 border-[#E53935] shadow-2xl">
                <Image
                  src="/images/photoreal_tomato.jpg"
                  alt="Real Photorealistic Heirloom Tomato"
                  fill
                  sizes="(max-width: 768px) 180px, 240px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* REAL-TIME BADGE 1: Harvest Time */}
            <div
              ref={badge1Ref}
              className="absolute -top-6 -right-36 sm:-right-44 px-4 py-2 rounded-2xl bg-black/75 border border-[#80BC41]/50 text-white backdrop-blur-xl shadow-2xl text-xs flex items-center gap-2 whitespace-nowrap opacity-0"
            >
              <Clock className="w-4 h-4 text-[#80BC41]" />
              <span className="font-bold">{t.flyingTomato.stats.harvestTime}</span>
            </div>

            {/* REAL-TIME BADGE 2: Brix Sugar Sweetness Rating */}
            <div
              ref={badge2Ref}
              className="absolute -bottom-8 -left-28 sm:-left-36 px-4 py-2 rounded-2xl bg-black/75 border border-[#E8AE42]/50 text-white backdrop-blur-xl shadow-2xl text-xs flex items-center gap-2 whitespace-nowrap opacity-0"
            >
              <Gauge className="w-4 h-4 text-[#E8AE42]" />
              <span className="font-bold">{t.flyingTomato.stats.brixRating}</span>
            </div>

            {/* REAL-TIME BADGE 3: Farm Proximity */}
            <div
              ref={badge3Ref}
              className="absolute -bottom-4 -right-32 sm:-right-40 px-4 py-2 rounded-2xl bg-black/75 border border-[#E53935]/50 text-white backdrop-blur-xl shadow-2xl text-xs flex items-center gap-2 whitespace-nowrap opacity-0"
            >
              <MapPin className="w-4 h-4 text-[#E53935]" />
              <span className="font-bold">{t.flyingTomato.stats.distance}</span>
            </div>
          </div>
        </div>

        {/* Bottom helper tip */}
        <div className="flex items-center justify-center text-xs text-white/70 tracking-wide uppercase">
          <span>{isTelugu ? "టమాటా ప్రయాణాన్ని అనుసరించండి ↓" : "Scroll to guide the tomato into the harvest basket ↓"}</span>
        </div>
      </div>
    </section>
  );
}
