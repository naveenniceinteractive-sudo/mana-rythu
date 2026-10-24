"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { DollarSign, ShieldAlert, HeartHandshake, Percent, Sparkles } from "lucide-react";

export function Section13SmartPricing() {
  const { t, isTelugu } = useLanguage();
  const [basketValue, setBasketValue] = useState(500);

  // Mana Rythu Breakdown:
  const manaFarmer = Math.round(basketValue * 0.72);
  const manaPackaging = Math.round(basketValue * 0.08);
  const manaDelivery = Math.round(basketValue * 0.12);
  const manaPlatform = Math.round(basketValue * 0.08);

  // Traditional Mandi Breakdown:
  const mandiFarmer = Math.round(basketValue * 0.24);
  const mandiMiddlemen = Math.round(basketValue * 0.58);
  const mandiWastage = Math.round(basketValue * 0.18);

  const farmerGainDelta = manaFarmer - mandiFarmer;

  return (
    <section
      id="smart-pricing"
      className="relative py-28 bg-[#FAF8F2] text-[#123B28] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B28]/10 text-[#123B28] text-xs font-semibold uppercase tracking-wider mb-3">
            <Percent className="w-3.5 h-3.5 text-[#80BC41]" />
            <span>{t.smartPricing.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#123B28] tracking-tight mb-4">
            {t.smartPricing.heading}
          </h2>

          <p className="text-base text-[#78543B] font-light max-w-2xl mx-auto">
            {t.smartPricing.subheading}
          </p>

          {/* Interactive Basket Calculator Slider */}
          <div className="mt-8 max-w-md mx-auto bg-white p-5 rounded-2xl border border-[#123B28]/10 shadow-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">
                {isTelugu ? "మీ నెలవారీ కూరగాయల ఖర్చు:" : "Test Order Basket Value:"}
              </span>
              <span className="text-xl font-serif font-black text-[#123B28]">
                ₹{basketValue}
              </span>
            </div>
            <input
              type="range"
              min="200"
              max="2500"
              step="50"
              value={basketValue}
              onChange={(e) => setBasketValue(Number(e.target.value))}
              className="w-full accent-[#80BC41] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>₹200</span>
              <span>₹1,000</span>
              <span>₹2,500</span>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Traditional Middleman System (Exploitative) */}
          <div className="rounded-3xl bg-white border border-red-200 p-8 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-red-500 text-white text-[11px] font-bold rounded-bl-2xl flex items-center gap-1">
              <ShieldAlert className="w-3 h-3" />
              <span>Traditional Mandi Brokerage</span>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-[#123B28] mb-1">
                {isTelugu ? "సాధారణ మార్కెట్ విధానం" : "Traditional Wholesale Mandi"}
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                4-5 layers of commission agents, dalals, APMC mandi fees, and spoilage markups.
              </p>

              {/* Farmer Payout Bar */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-red-700">Farmer gets only 24%:</span>
                    <span className="text-red-700">₹{mandiFarmer}</span>
                  </div>
                  <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-400 rounded-full" style={{ width: "24%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-gray-600">Middlemen & Commission Cut (58%):</span>
                    <span className="text-gray-800">₹{mandiMiddlemen}</span>
                  </div>
                  <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 rounded-full" style={{ width: "58%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-gray-600">Transit Decay & Cold Chain Spoilage (18%):</span>
                    <span className="text-gray-800">₹{mandiWastage}</span>
                  </div>
                  <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-300 rounded-full" style={{ width: "18%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-red-600 flex items-center gap-1.5">
              <span>⚠️ Result: Farmer struggles in debt; consumer eats 5-day old produce.</span>
            </div>
          </div>

          {/* Card 2: Mana Rythu Direct Network (Ethical & Transparent) */}
          <div className="rounded-3xl bg-[#123B28] text-white p-8 shadow-2xl relative overflow-hidden border-2 border-[#80BC41] flex flex-col justify-between">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#80BC41] text-[#0A2217] text-[11px] font-bold rounded-bl-2xl flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mana Rythu Direct Model</span>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-1">
                {isTelugu ? "మన రైతు ప్రత్యక్ష మోడల్" : "Mana Rythu Direct Farm Network"}
              </h3>
              <p className="text-xs text-white/70 mb-6">
                Direct village cluster weighing with zero commission agents and same-day payout.
              </p>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-[#80BC41] flex items-center gap-1">
                      <HeartHandshake className="w-3.5 h-3.5" />
                      Farmer Direct Share (72%):
                    </span>
                    <span className="text-[#80BC41] text-sm">₹{manaFarmer}</span>
                  </div>
                  <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#80BC41] to-[#A4D66A] rounded-full transition-all duration-300"
                      style={{ width: "72%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-white/80 mb-1">
                    <span>Electric Cold-Chain Van (12%):</span>
                    <span>₹{manaDelivery}</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E8AE42] rounded-full" style={{ width: "12%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-white/80 mb-1">
                    <span>Eco Bamboo & Paper Packaging (8%):</span>
                    <span>₹{manaPackaging}</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#60A5FA] rounded-full" style={{ width: "8%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-white/80 mb-1">
                    <span>Platform Tech & IoT Scales (8%):</span>
                    <span>₹{manaPlatform}</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white/40 rounded-full" style={{ width: "8%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Impact Calculation */}
            <div className="mt-8 pt-4 border-t border-white/15 bg-white/10 -mx-8 -mb-8 p-6 rounded-b-3xl flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#A4D66A] block font-semibold uppercase">
                  {isTelugu ? "రైతుకు అదనంగా దక్కిన లాభం:" : "Extra Money Direct to Farmer:"}
                </span>
                <span className="text-2xl font-serif font-black text-white">
                  +₹{farmerGainDelta} per basket
                </span>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-white/70 block">Disbursed via</span>
                <span className="text-xs font-bold text-[#E8AE42]">Direct UPI / IMPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
