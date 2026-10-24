"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { initGSAP } from "@/lib/gsap";
import { assetPath } from "@/lib/site";

export function ContinuousSeedPlant() {
  const containerRef = useRef<HTMLDivElement>(null);
  const seedWrapperRef = useRef<HTMLDivElement>(null);
  const seedImageRef = useRef<HTMLDivElement>(null);
  const soilShadowRef = useRef<HTMLDivElement>(null);
  const rootsRef = useRef<SVGSVGElement>(null);
  const shootRef = useRef<SVGPathElement>(null);
  const leafLeftRef = useRef<SVGPathElement>(null);
  const leafRightRef = useRef<SVGPathElement>(null);
  const plantMatureRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const dewBadgeRef = useRef<HTMLDivElement>(null);
  const seedLabelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();

    // Context for safe scoping & cleanup
    const ctx = gsap.context(() => {
      const heroEl = document.getElementById("hero");
      const seedToPlantEl = document.getElementById("seed-to-plant");

      if (!heroEl || !seedToPlantEl || !containerRef.current) return;

      // Master continuous timeline scrubbed across Hero through Seed-To-Plant
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroEl,
          start: "top top",
          endTrigger: seedToPlantEl,
          end: "bottom top",
          scrub: 1.1,
          onLeave: () => {
            gsap.to(containerRef.current, { opacity: 0, duration: 0.25 });
          },
          onEnterBack: () => {
            gsap.to(containerRef.current, { opacity: 1, duration: 0.25 });
          },
        },
      });

      // -------------------------------------------------------------
      // PHASE 1: SEED DESCENDS FROM HERO INTO SEED-TO-PLANT (0.0 -> 0.35)
      // Initial state: Centered in Hero section (left: 50%, top: 70vh)
      // Moves down into the soil landing zone of Seed-To-Plant (left: 68% on md+, top: 62vh)
      // -------------------------------------------------------------
      tl.fromTo(
        seedWrapperRef.current,
        {
          xPercent: -50,
          yPercent: -50,
          left: "50%",
          top: "70vh",
          scale: 1,
        },
        {
          left: window.innerWidth > 768 ? "68%" : "50%",
          top: "62vh",
          scale: 1.15,
          duration: 0.35,
          ease: "power1.inOut",
        },
        0
      );

      // Seed rotation during natural descent
      tl.fromTo(
        seedImageRef.current,
        { rotation: 0 },
        { rotation: 360, duration: 0.35, ease: "none" },
        0
      );

      // Seed Label Pill gently fades out as seed enters soil
      tl.to(
        seedLabelRef.current,
        { opacity: 0, scale: 0.8, y: -10, duration: 0.15, ease: "power1.in" },
        0.05
      );

      // -------------------------------------------------------------
      // PHASE 2: SEED LANDS ON FERTILE SOIL & BEDS IN (0.35 -> 0.45)
      // Contact shadow forms under seed on soil clods
      // -------------------------------------------------------------
      tl.fromTo(
        soilShadowRef.current,
        { scaleX: 0.2, opacity: 0 },
        { scaleX: 1, opacity: 0.85, duration: 0.1, ease: "power2.out" },
        0.35
      );

      // Subtle soil micro-bedding settlement
      tl.to(
        seedWrapperRef.current,
        {
          yPercent: -46, // settles 4% into soil bed
          duration: 0.08,
          ease: "power1.inOut",
        },
        0.37
      );

      // -------------------------------------------------------------
      // PHASE 3: ROOTS GROW DOWNWARD INTO THE EARTH (0.44 -> 0.65)
      // Delicate white roots branch deep into dark loamy soil
      // -------------------------------------------------------------
      tl.fromTo(
        rootsRef.current,
        {
          scaleY: 0,
          opacity: 0,
          transformOrigin: "top center",
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.2,
          ease: "power1.out",
        },
        0.44
      );

      // -------------------------------------------------------------
      // PHASE 4: SHOOT EMERGES UPWARD FROM EXACT SEED POSITION (0.55 -> 0.75)
      // Small tender emerald shoot pushes through soil crust and seed
      // -------------------------------------------------------------
      tl.fromTo(
        shootRef.current,
        {
          scaleY: 0,
          opacity: 0,
          transformOrigin: "bottom center",
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.18,
          ease: "power1.inOut",
        },
        0.55
      );

      // Leaves unfold outward from the growing shoot
      tl.fromTo(
        leafLeftRef.current,
        {
          scale: 0,
          rotation: 30,
          opacity: 0,
          transformOrigin: "bottom right",
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.15,
          ease: "back.out(1.5)",
        },
        0.62
      );

      tl.fromTo(
        leafRightRef.current,
        {
          scale: 0,
          rotation: -30,
          opacity: 0,
          transformOrigin: "bottom left",
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.15,
          ease: "back.out(1.5)",
        },
        0.66
      );

      // Golden sunlight halo radiates behind the growing plant
      tl.fromTo(
        haloRef.current,
        { scale: 0.4, opacity: 0 },
        { scale: 1.3, opacity: 0.85, duration: 0.25, ease: "power2.out" },
        0.6
      );

      // -------------------------------------------------------------
      // PHASE 5: MATURES INTO LIVING PHOTOREALISTIC RICE PLANT (0.72 -> 0.98)
      // Seamlessly blossoms into full healthy rice plant anchored in soil
      // -------------------------------------------------------------
      tl.fromTo(
        plantMatureRef.current,
        {
          scale: 0.75,
          opacity: 0,
          y: 20,
          transformOrigin: "bottom center",
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        0.72
      );

      // Seed body gently recedes as the base of the plant establishes in soil
      tl.to(
        seedImageRef.current,
        {
          opacity: 0.15,
          scale: 0.8,
          duration: 0.18,
          ease: "none",
        },
        0.75
      );

      // Dewdrop glint badge reveals
      tl.fromTo(
        dewBadgeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.12, ease: "back.out(2)" },
        0.82
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-35 overflow-visible"
      style={{ zIndex: 35 }}
    >
      {/* THE SINGLE CONTINUOUS SEED & LIVING PLANT OBJECT */}
      <div
        ref={seedWrapperRef}
        className="absolute transition-none"
        style={{
          width: 220,
          height: 260,
          left: "50%",
          top: "70vh",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Soft Golden Sunlight Halo behind plant */}
        <div
          ref={haloRef}
          className="absolute -top-16 -left-16 w-88 h-88 rounded-full bg-gradient-to-b from-[#E8AE42]/40 via-[#80BC41]/25 to-transparent blur-3xl pointer-events-none opacity-0"
        />

        {/* 1. SEED OBJECT (Heritage Heirloom Seed) */}
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Seed Circle Container */}
          <div
            ref={seedImageRef}
            className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden bg-white/95 p-1 border-2 border-[#E8AE42] shadow-[0_16px_36px_rgba(0,0,0,0.85)] z-20 cursor-pointer"
            title="Heritage Heirloom Seed - Direct living lineage"
          >
            <Image
              src={assetPath("/images/photoreal_seed.jpg")}
              alt="Heritage Heirloom Seed"
              fill
              sizes="90px"
              priority
              className="object-contain p-1"
            />
          </div>

          {/* Heritage Heirloom Seed Pill Badge (visible in Hero, fades out into soil) */}
          <div
            ref={seedLabelRef}
            className="mt-3 px-3.5 py-1 rounded-full bg-black/80 border border-[#E8AE42]/60 text-[11px] font-bold tracking-wider uppercase text-[#E8AE42] shadow-2xl backdrop-blur-md pointer-events-auto flex items-center gap-1.5 z-20"
          >
            <span className="w-2 h-2 rounded-full bg-[#80BC41] animate-ping" />
            <span>Heritage Heirloom Seed</span>
          </div>

          {/* Seed Contact Shadow on Soil */}
          <div
            ref={soilShadowRef}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black/85 blur-sm z-10 opacity-0"
          />

          {/* 2. ROOT SYSTEM GROWING DOWNWARD INTO SOIL */}
          <svg
            ref={rootsRef}
            viewBox="0 0 200 140"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 w-48 h-36 z-15 opacity-0"
            style={{ marginTop: 20 }}
          >
            {/* Primary Taproot */}
            <path
              d="M100,5 Q98,45 100,85 Q102,110 100,135"
              stroke="#FFF8E7"
              strokeWidth="3.2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Lateral Root Branches */}
            <path
              d="M100,25 Q78,50 55,75 Q42,95 30,110"
              stroke="#F5EFE6"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M100,30 Q122,55 145,80 Q158,100 170,115"
              stroke="#F5EFE6"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Secondary Fibrous Root Hairs */}
            <path
              d="M100,55 Q85,75 70,95 M100,60 Q115,80 130,100 M80,65 Q65,85 55,105 M120,70 Q135,90 145,110 M100,90 Q90,115 80,130 M100,95 Q110,120 120,135"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              opacity="0.85"
            />
          </svg>

          {/* 3. SHOOT & SPROUT EMERGING UPWARD */}
          <svg
            viewBox="0 0 200 200"
            className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-44 h-44 z-25 pointer-events-none"
            style={{ marginBottom: -10 }}
          >
            {/* Tender emerald shoot stem */}
            <path
              ref={shootRef}
              d="M100,190 Q97,140 100,90 Q102,50 100,20"
              stroke="#80BC41"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              opacity="0"
            />
            {/* Primary Left Leaf */}
            <path
              ref={leafLeftRef}
              d="M100,100 C80,80 50,75 30,85 C45,100 75,110 100,105 Z"
              fill="#80BC41"
              stroke="#A4D66A"
              strokeWidth="1.5"
              opacity="0"
            />
            {/* Secondary Right Leaf */}
            <path
              ref={leafRightRef}
              d="M100,75 C120,55 150,50 170,60 C155,75 125,85 100,80 Z"
              fill="#6ca331"
              stroke="#80BC41"
              strokeWidth="1.5"
              opacity="0"
            />
          </svg>

          {/* 4. MATURE PLANT GLOW AURA (no image — pure living green effect) */}
          <div
            ref={plantMatureRef}
            className="absolute bottom-1/2 left-1/2 -translate-x-1/2 z-30 opacity-0 pointer-events-none flex flex-col items-center"
            style={{ marginBottom: -35, width: 200 }}
          >
            {/* Radiant living-green aura blob */}
            <div className="w-44 h-44 rounded-full bg-gradient-to-t from-[#2d6e1a] via-[#80BC41]/60 to-[#A4D66A]/30 blur-2xl shadow-[0_0_60px_rgba(128,188,65,0.7)]" />

            {/* Dewdrop Hydration Badge */}
            <div
              ref={dewBadgeRef}
              className="mt-3 px-3 py-1.5 rounded-full bg-black/80 border border-[#80BC41]/60 text-[10px] font-bold text-[#A4D66A] flex items-center gap-1.5 shadow-lg opacity-0 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Living Earth Roots &amp; Dew</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
