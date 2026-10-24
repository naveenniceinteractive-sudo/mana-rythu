"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sprout, Mail, Phone, MapPin, CheckCircle2, Heart } from "lucide-react";

export function Footer() {
  const { t, isTelugu } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  return (
    <footer className="bg-[#0A1F15] text-white border-t border-[#80BC41]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Harvest Alert Bar */}
        <div className="bg-[#123B28] rounded-3xl p-8 sm:p-10 border border-[#80BC41]/30 shadow-2xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#80BC41] block mb-1">
              {t.footer.newsletterTitle}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              {isTelugu ? "ఉదయపు కోత నోటిఫికేషన్లు పొందండి" : "Get 5:00 AM Harvest Alerts"}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {t.footer.newsletterDesc}
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-[#80BC41]/20 border border-[#80BC41] text-[#80BC41] text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {isTelugu ? "ధన్యవాదాలు! నోటిఫికేషన్లు యాక్టివేట్ అయ్యాయి." : "Subscribed! You will receive dawn harvest alerts."}
                </span>
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email or WhatsApp number..."
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-xs sm:text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#80BC41]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#80BC41] hover:bg-[#92cc53] text-[#0A2217] font-bold text-xs sm:text-sm transition-all whitespace-nowrap"
                >
                  {t.footer.subscribeBtn}
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#80BC41] to-[#123B28] flex items-center justify-center border border-[#80BC41]/40">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {isTelugu ? "మన రైతు" : "Mana Rythu"}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              {t.footer.about}
            </p>

            <div className="text-xs text-[#E8AE42] font-telugu font-semibold">
              రైతు నవ్వింది... నేల పండింది... దేశం వెలిగింది.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#seed-to-plant" className="hover:text-[#80BC41] transition-colors">
                  Farm Story Journey
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#80BC41] transition-colors">
                  Produce Categories
                </a>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-[#80BC41] transition-colors">
                  Today&apos;s Fresh Harvest
                </a>
              </li>
              <li>
                <a href="#smart-pricing" className="hover:text-[#80BC41] transition-colors">
                  Radical Transparency
                </a>
              </li>
              <li>
                <a href="#krishi-ai" className="hover:text-[#80BC41] transition-colors">
                  Krishi AI 2.0 Assistant
                </a>
              </li>
            </ul>
          </div>

          {/* Farmers Portal */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4">
              {t.footer.farmersPortal}
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#meet-farmers" className="hover:text-[#80BC41] transition-colors">
                  Our Annadatas
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#80BC41] transition-colors">
                  Farmer Registration Guide
                </a>
              </li>
              <li>
                <span className="hover:text-[#80BC41] transition-colors cursor-pointer">
                  ZBNF Natural Farming Standards
                </span>
              </li>
              <li>
                <span className="hover:text-[#80BC41] transition-colors cursor-pointer">
                  Same-Day Bank Settlement
                </span>
              </li>
              <li>
                <span className="hover:text-[#80BC41] transition-colors cursor-pointer">
                  IoT Farm Scale Network
                </span>
              </li>
            </ul>
          </div>

          {/* Direct Clusters & Hubs */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4">
              {t.footer.support}
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#80BC41] shrink-0 mt-0.5" />
                <span>
                  <strong>Guntur Central Hub:</strong> Chebrolu Road, Andhra Pradesh
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#80BC41] shrink-0 mt-0.5" />
                <span>
                  <strong>Hyderabad Hub:</strong> Chevella Cluster, Telangana
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E8AE42] shrink-0" />
                <span>Toll-Free: 1800-MANA-RYTHU</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#80BC41] shrink-0" />
                <span>direct@manarythu.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Mana Rythu Agricultural Collective. {t.footer.rights}</p>
          <div className="flex items-center gap-1 text-white/70">
            <span>Built with reverence for</span>
            <Heart className="w-3.5 h-3.5 text-[#E53935] fill-[#E53935]" />
            <span>Indian Soil & Telugu Farmers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
