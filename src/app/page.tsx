"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { initGSAP } from "@/lib/gsap";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { ScrollProgressIndicator } from "@/components/ui/ScrollProgressIndicator";
import { ContinuousSeedPlant } from "@/components/cinematic/ContinuousSeedPlant";

import { Section01Hero } from "@/components/cinematic/Section01Hero";
import { Section02SeedToPlant } from "@/components/cinematic/Section02SeedToPlant";
import { Section04FlyingTomato } from "@/components/cinematic/Section04FlyingTomato";
import { Section05Categories } from "@/components/cinematic/Section05Categories";
import { Section06FeaturedProducts } from "@/components/cinematic/Section06FeaturedProducts";
import { Section08FarmerBasket } from "@/components/cinematic/Section08FarmerBasket";
import { Section09HowItWorks } from "@/components/cinematic/Section09HowItWorks";
import { Section10DeliveryVan } from "@/components/cinematic/Section10DeliveryVan";
import { Section11HomeDelivery } from "@/components/cinematic/Section11HomeDelivery";
import { Section12AIAssistant } from "@/components/cinematic/Section12AIAssistant";
import { Section13SmartPricing } from "@/components/cinematic/Section13SmartPricing";
import { Section14SeasonalHarvest } from "@/components/cinematic/Section14SeasonalHarvest";
import { Section16ClosingCTA } from "@/components/cinematic/Section16ClosingCTA";

export default function Home() {
  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();

    // Initialize Lenis for buttery-smooth 60fps scroll scrubbing
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after initial mount and images load
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-[#F7F5EC] text-[#123B28] overflow-x-hidden selection:bg-[#80BC41]/30">
      {/* Global Scroll Progress Bar & Floating Journey Tracker */}
      <ScrollProgressIndicator />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Fly-to-cart Animated Slide-Over Drawer */}
      <CartDrawer />

      {/* SINGLE CONTINUOUS HERITAGE SEED & LIVING SPROUT JOURNEY */}
      <ContinuousSeedPlant />

      {/* CONTINUOUS STORY JOURNEY SECTIONS */}
      {/* 1. SEED: Hero & Soil Landing */}
      <Section01Hero />

      {/* 2. SPROUT: Seamless Soil Germination & Living Rice Plant Growth */}
      <Section02SeedToPlant />

      {/* 4. TOMATO: Signature Flying Heirloom Tomato */}
      <Section04FlyingTomato />

      {/* 5. CATEGORIES: Horizontal Category Cards & Circular Masks */}
      <Section05Categories />

      {/* 6. FEATURED PRODUCTS: Interactive Marketplace & Add-to-Cart */}
      <Section06FeaturedProducts />

      {/* 8. BASKET: Tomato & Harvest Lands in Farmer's Bamboo Basket */}
      <Section08FarmerBasket />

      {/* 9. HOW IT WORKS: 4-Step Journey with Continuous Animated Line */}
      <Section09HowItWorks />

      {/* 10. DELIVERY VAN: Realistic Electric Farm Van Journey & Doorstep Handover */}
      <Section10DeliveryVan />

      {/* 11. CUSTOMER HOME: Doorstep Handover & Happy Indian Family */}
      <Section11HomeDelivery />

      {/* 12. KRISHI AI: Bilingual Agricultural Assistant & Crop Doctor */}
      <Section12AIAssistant />

      {/* 13. SMART PRICING: 100% Radical Transparency Calculator */}
      <Section13SmartPricing />

      {/* 14. SEASONAL HARVEST: Kharif, Rabi, and Zaid Showcase */}
      <Section14SeasonalHarvest />

      {/* 16. CLOSING CTA: Sunset Horizon Sprout & Call to Action */}
      <Section16ClosingCTA />

      {/* Global Dark Forest Green Footer */}
      <Footer />
    </main>
  );
}
