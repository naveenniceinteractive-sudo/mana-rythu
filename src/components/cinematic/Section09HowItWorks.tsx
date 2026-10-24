"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import { initGSAP } from "@/lib/gsap";
import { useLanguage } from "@/context/LanguageContext";
import { Sun, Scale, ShoppingCart, Truck, Route } from "lucide-react";

export function Section09HowItWorks() {
  const { t, isTelugu } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const produceMarkerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      icon: Sun,
      title: t.howItWorks.steps.step1Title,
      desc: t.howItWorks.steps.step1Desc,
      color: "#80BC41",
    },
    {
      num: "02",
      icon: Scale,
      title: t.howItWorks.steps.step2Title,
      desc: t.howItWorks.steps.step2Desc,
      color: "#E8AE42",
    },
    {
      num: "03",
      icon: ShoppingCart,
      title: t.howItWorks.steps.step3Title,
      desc: t.howItWorks.steps.step3Desc,
      color: "#4ADE80",
    },
    {
      num: "04",
      icon: Truck,
      title: t.howItWorks.steps.step4Title,
      desc: t.howItWorks.steps.step4Desc,
      color: "#E53935",
    },
  ];

  useLayoutEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Connect line drawing animation scrubbed
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
          onUpdate: (self) => {
            const stepIdx = Math.min(3, Math.floor(self.progress * 4));
            setActiveStep(stepIdx);
          },
        },
      });

      // SVG path draws continuously
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        tl.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: "none",
        });
      }

      // Produce marker (little tomato/leaf) travels horizontally along the line
      if (produceMarkerRef.current) {
        tl.to(
          produceMarkerRef.current,
          {
            left: "88%",
            ease: "none",
          },
          0
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-28 bg-[#F7F5EC] text-[#123B28] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B28]/10 text-[#123B28] text-xs font-semibold uppercase tracking-wider mb-3">
            <Route className="w-3.5 h-3.5 text-[#80BC41]" />
            <span>{t.howItWorks.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#123B28] tracking-tight mb-4">
            {t.howItWorks.heading}
          </h2>

          <p className="text-base text-[#78543B] font-light">
            {t.howItWorks.subheading}
          </p>
        </div>

        {/* Continuous Connecting Line with Travel Marker (Desktop) */}
        <div className="hidden lg:block relative w-full h-16 mb-6">
          <svg className="w-full h-full overflow-visible">
            {/* Background track line */}
            <path
              d="M 60 30 Q 320 10 580 30 T 1100 30"
              fill="none"
              stroke="#E5E0D0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Animated Active path line */}
            <path
              ref={pathRef}
              d="M 60 30 Q 320 10 580 30 T 1100 30"
              fill="none"
              stroke="#80BC41"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>

          {/* Traveling Farm Produce Marker */}
          <div
            ref={produceMarkerRef}
            className="absolute top-3 left-[5%] -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border-2 border-[#80BC41] flex items-center justify-center text-lg z-20 transition-all select-none"
          >
            🍅
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isStepActive = activeStep >= idx;

            return (
              <div
                key={step.num}
                className={`relative rounded-3xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isStepActive
                    ? "bg-white border-[#80BC41]/40 shadow-xl -translate-y-2"
                    : "bg-white/60 border-black/5 opacity-70"
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-2xl font-serif font-black ${
                        isStepActive ? "text-[#123B28]" : "text-gray-300"
                      }`}
                    >
                      {step.num}
                    </span>

                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform ${
                        isStepActive
                          ? "bg-[#80BC41]/20 text-[#123B28] scale-110"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#123B28] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#78543B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-[11px] font-semibold text-[#80BC41]">
                  <span>Step {idx + 1} of 4</span>
                  {isStepActive && <span>Active</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
