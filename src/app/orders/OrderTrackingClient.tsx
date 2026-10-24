"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  CheckCircle2,
  Clock,
  Truck,
  MapPin,
  HeartHandshake,
  ShieldCheck,
  Phone,
  ArrowRight,
  Sun,
  Home,
} from "lucide-react";

export default function OrderTrackingPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id") ?? "MR-839210";

  const timelineSteps = [
    {
      title: "04:30 AM – Sunrise Harvest",
      desc: "Country Heirloom Tomatoes plucked tenderly with morning dew at K. Ramaiah's Farm, Guntur.",
      status: "completed",
      icon: Sun,
    },
    {
      title: "06:15 AM – IoT Digital Weighing & Bamboo Packaging",
      desc: "Certified zero-chemical check passed. Packed in breathable hand-woven bamboo basket.",
      status: "completed",
      icon: CheckCircle2,
    },
    {
      title: "09:45 AM – En Route in Electric Farm Van",
      desc: "Solar electric refrigerated cold-chain van #MR-HYD-04 traveling on NH 16. Cabin temp: 12°C.",
      status: "active",
      icon: Truck,
    },
    {
      title: "01:15 PM – Estimated Doorstep Delivery",
      desc: "Scheduled delivery to Banjara Hills, Hyderabad. Inspected and handed over fresh.",
      status: "pending",
      icon: Home,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1F15] text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Status Card */}
          <div className="rounded-3xl bg-[#123B28] border-2 border-[#80BC41] p-8 sm:p-12 mb-10 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/15">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#A4D66A] block mb-1">
                  Live Farm Dispatch Tracking
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-black text-white">
                  Order #{orderId}
                </h1>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-[#80BC41] text-[#0A1F15] font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0A1F15] animate-ping" />
                <span>On the Way in Electric Van</span>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/80">
              <div>
                <span className="text-white/50 block">Farm Origin:</span>
                <span className="font-bold text-white text-sm">Guntur Cluster, AP</span>
              </div>
              <div>
                <span className="text-white/50 block">Expected Arrival:</span>
                <span className="font-bold text-[#80BC41] text-sm">Today by 01:15 PM</span>
              </div>
              <div>
                <span className="text-white/50 block">Direct Farmer Credit:</span>
                <span className="font-bold text-[#E8AE42] text-sm">₹396 Disbursed</span>
              </div>
            </div>
          </div>

          {/* Animated 4-Stage Live Timeline */}
          <div className="rounded-3xl bg-[#123B28]/85 border border-white/15 p-8 sm:p-10 shadow-2xl backdrop-blur-xl mb-10">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-8">
              Living Food Journey
            </h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-white/15">
              {timelineSteps.map((step, idx) => {
                const Icon = step.icon;
                const isCompleted = step.status === "completed";
                const isActive = step.status === "active";

                return (
                  <div key={idx} className="relative flex items-start gap-6">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 shadow-lg ${
                        isCompleted
                          ? "bg-[#80BC41] text-[#0A1F15]"
                          : isActive
                          ? "bg-[#E8AE42] text-[#0A1F15] ring-4 ring-[#E8AE42]/30 animate-pulse"
                          : "bg-white/10 text-white/40"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif font-bold text-base text-white">
                          {step.title}
                        </h4>
                        {isActive && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8AE42] text-[#0A1F15]">
                            Current Stage
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-white/70 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Van Driver & Support Helpline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-black/45 border border-white/15">
              <span className="text-xs text-white/50 block mb-1">Cold-Chain Delivery Pilot</span>
              <h4 className="font-bold text-base text-white">Ch. Suresh Kumar (Pilot #04)</h4>
              <p className="text-xs text-[#80BC41] mt-1">Driving 100% Electric Solar Van</p>
            </div>

            <div className="p-6 rounded-3xl bg-black/45 border border-white/15 flex items-center justify-between">
              <div>
                <span className="text-xs text-white/50 block mb-1">Customer & Farmer Helpline</span>
                <span className="font-bold text-base text-white">1800-MANA-RYTHU</span>
              </div>
              <a
                href="tel:1800626279"
                className="p-3 rounded-full bg-[#80BC41] text-[#0A1F15] hover:scale-110 transition-transform"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
