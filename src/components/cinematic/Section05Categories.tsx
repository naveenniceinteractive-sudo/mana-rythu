"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { initGSAP } from "@/lib/gsap";
import { useLanguage } from "@/context/LanguageContext";
import { farmCategories, Category } from "@/data/products";
import { ArrowRight, Layers } from "lucide-react";

export function Section05Categories() {
  const { t, isTelugu } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const categoryImages: Record<string, string> = {
    vegetables: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    fruits: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    rice: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    grains_pulses: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
    spices: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    dairy: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80",
    millets: "https://images.unsplash.com/photo-1607672632458-9eb56696346b?auto=format&fit=crop&w=800&q=80",
    organic: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
  };

  useLayoutEffect(() => {
    const { gsap } = initGSAP();
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const scrollWidth = trackRef.current ? trackRef.current.scrollWidth - window.innerWidth + 140 : 800;

      gsap.to(trackRef.current, {
        x: () => -Math.max(0, scrollWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 25%",
          end: "+=95%",
          scrub: 1,
          pin: false,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-[#0A1F15] text-white"
    >
      {/* Background ambient light */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#80BC41]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#E8AE42]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#80BC41]/30 text-[#A4D66A] text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xl">
              <Layers className="w-3.5 h-3.5 text-[#80BC41]" />
              <span>{t.categories.badge}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight">
              {t.categories.heading}
            </h2>
            <p className="text-base text-white/80 mt-2 max-w-xl font-light">
              {t.categories.subheading}
            </p>
          </div>

          <a
            href="#featured-products"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#80BC41] hover:text-[#A4D66A] transition-colors group"
          >
            <span>{t.categories.viewAll}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Horizontal Carousel Track with Real Photography Cards */}
      <div className="relative w-full overflow-x-auto no-scrollbar pl-4 sm:pl-8 lg:pl-16">
        <div
          ref={trackRef}
          className="flex gap-6 pb-6 pt-2 w-max"
        >
          {farmCategories.map((cat: Category) => (
            <div
              key={cat.id}
              className="w-80 sm:w-96 rounded-3xl bg-[#123B28]/90 border border-white/15 overflow-hidden shadow-2xl hover:shadow-[#80BC41]/25 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Category Real Photograph Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={categoryImages[cat.id] || "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"}
                  alt={cat.name}
                  fill
                  sizes="400px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B28] via-transparent to-black/30" />

                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#E8AE42] border border-[#E8AE42]/40 uppercase tracking-wider shadow-lg">
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#80BC41] transition-colors mb-1">
                  {isTelugu ? cat.nameTe : cat.name}
                </h3>
                <p className="text-xs font-telugu text-[#E8AE42] font-semibold mb-3">
                  {cat.nameTe}
                </p>
                <p className="text-xs text-white/75 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-medium text-white/60">
                    {cat.itemsCount} {isTelugu ? "రకాలు" : "Items available"}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#80BC41] group-hover:text-[#0A1F15] flex items-center justify-center transition-colors text-white">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
