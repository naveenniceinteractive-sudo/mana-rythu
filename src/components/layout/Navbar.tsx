"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import { farmAudio } from "@/lib/audio";
import {
  ShoppingBag,
  Volume2,
  VolumeX,
  Menu,
  X,
  Sparkles,
  Sprout,
  Languages,
  Heart,
  User as UserIcon,
} from "lucide-react";

export function Navbar() {
  const { t, language, toggleLanguage, isTelugu } = useLanguage();
  const { totalItems, setIsCartOpen } = useCart();
  const { totalWishlistItems } = useWishlist();
  const { user, login, logout } = useAuth();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const playing = farmAudio.toggle();
    setIsAudioPlaying(playing);
  };

  const navLinks = [
    { href: "/shop", label: isTelugu ? "ప్రత్యక్ష అంగడి" : "Marketplace", isRoute: true },
    { href: "/#seed-to-plant", label: t.nav.journey, isRoute: false },
    { href: "/#categories", label: t.nav.categories, isRoute: false },
    { href: "/farmers", label: isTelugu ? "మన రైతులు" : "Farmers", isRoute: true },
    { href: "/#how-it-works", label: t.nav.howItWorks, isRoute: false },
    { href: "/#krishi-ai", label: t.nav.aiAssistant, isRoute: false },
    { href: "/#smart-pricing", label: t.nav.pricing, isRoute: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1F15]/95 backdrop-blur-md py-2.5 shadow-2xl border-b border-[#80BC41]/25 text-white"
          : "bg-gradient-to-b from-black/75 via-black/35 to-transparent py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Telugu Badge */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#80BC41] to-[#123B28] flex items-center justify-center shadow-lg border border-[#80BC41]/40 group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-[#80BC41] transition-colors">
                  {isTelugu ? "మన రైతు" : "Mana Rythu"}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#80BC41]/30 text-[#A4D66A] border border-[#80BC41]/40">
                  Direct
                </span>
              </div>
              <span className="text-[11px] text-[#E8AE42] font-telugu tracking-wide font-medium">
                {t.brand.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-white/80 hover:text-[#80BC41] transition-colors tracking-wide relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#80BC41] transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Action Icons & Toggles */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Ambient Nature Sound */}
            <button
              onClick={handleToggleAudio}
              title={isAudioPlaying ? "Mute farm nature audio" : "Play ambient dawn bird song"}
              className={`p-2 rounded-full border transition-all duration-300 flex items-center gap-1.5 text-xs ${
                isAudioPlaying
                  ? "bg-[#80BC41] text-[#0A1F15] border-[#80BC41] shadow-lg shadow-[#80BC41]/30 scale-105"
                  : "bg-white/10 hover:bg-white/20 text-white/90 border-white/20"
              }`}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  <span className="hidden md:inline font-semibold text-[11px]">Farm Sound</span>
                </>
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              title="Toggle Telugu / English"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold tracking-wide transition-all"
            >
              <Languages className="w-3.5 h-3.5 text-[#E8AE42]" />
              <span>{language === "en" ? "తెలుగు" : "English"}</span>
            </button>

            {/* Wishlist Link */}
            <Link
              href="/wishlist"
              className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all"
              title="View Saved Wishlist"
            >
              <Heart className="w-4 h-4" />
              {totalWishlistItems > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-[#E53935] text-white text-[10px] font-bold flex items-center justify-center">
                  {totalWishlistItems}
                </span>
              )}
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#80BC41] to-[#6da532] text-[#0A1F15] font-bold text-xs sm:text-sm hover:brightness-110 transition-all shadow-md group"
            >
              <ShoppingBag className="w-4 h-4 text-[#0A1F15] group-hover:rotate-6 transition-transform" />
              <span className="hidden sm:inline">{t.nav.cart}</span>
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-[#123B28] text-white text-[11px] font-bold">
                {totalItems}
              </span>
            </button>

            {/* User Profile / Auth Toggle */}
            <div className="relative">
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center"
                title="Account & Role"
              >
                <UserIcon className="w-4 h-4" />
              </button>

              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#123B28] border border-white/20 p-3 shadow-2xl z-50 text-xs space-y-2">
                  <div className="pb-2 border-b border-white/10">
                    <span className="font-bold text-white block truncate">{user?.name || "Guest"}</span>
                    <span className="text-[10px] text-[#80BC41] capitalize">{user?.role || "Visitor"} • {user?.city}</span>
                  </div>
                  <button
                    onClick={() => {
                      login("+91 98765 43210", user?.role === "customer" ? "farmer" : "customer");
                      setShowUserDropdown(false);
                    }}
                    className="w-full text-left px-3 py-1.5 rounded-xl hover:bg-white/10 text-white flex items-center justify-between"
                  >
                    <span>Switch to {user?.role === "customer" ? "Farmer Portal" : "Buyer View"}</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#E8AE42]" />
                  </button>
                  <Link
                    href="/shop"
                    onClick={() => setShowUserDropdown(false)}
                    className="block w-full text-left px-3 py-1.5 rounded-xl hover:bg-white/10 text-white"
                  >
                    Explore Marketplace
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#0A1F15]/95 border border-[#80BC41]/30 backdrop-blur-xl shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/90 hover:text-[#80BC41] py-1.5 border-b border-white/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <Sparkles className="w-3 h-3 text-[#E8AE42]" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
