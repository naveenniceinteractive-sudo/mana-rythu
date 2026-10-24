"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { sampleProducts, Product } from "@/data/products";
import {
  ShoppingBag,
  Star,
  Clock,
  MapPin,
  Sparkles,
  Search,
  CheckCircle2,
} from "lucide-react";

export function Section06FeaturedProducts() {
  const { t, isTelugu } = useLanguage();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedItemAnim, setAddedItemAnim] = useState<string | null>(null);

  const productPhotos: Record<string, string> = {
    p1: "/images/photoreal_tomato.jpg",
    p2: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    p3: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    p4: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    p5: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    p6: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
    p7: "https://images.unsplash.com/photo-1607672632458-9eb56696346b?auto=format&fit=crop&w=800&q=80",
    p8: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
  };

  const filterTabs = [
    { id: "all", label: t.products.filterAll },
    { id: "vegetables", label: t.products.filterVegetables },
    { id: "fruits", label: t.products.filterFruits },
    { id: "grains", label: t.products.filterGrains },
    { id: "dairy_millets", label: t.products.filterDairyMillets },
  ];

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesCategory =
      activeCategory === "all" ||
      (activeCategory === "dairy_millets"
        ? product.category === "dairy_millets" || product.category === "spices"
        : product.category === activeCategory);

    const matchesSearch =
      searchQuery.trim() === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.nameTe.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.farmerName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    addToCart(product, 1, e);
    setAddedItemAnim(product.id);
    setTimeout(() => setAddedItemAnim(null), 1200);
  };

  return (
    <section
      id="featured-products"
      className="relative py-28 bg-[#0D261A] text-white overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-[#80BC41]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-[#E8AE42]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#80BC41]/40 text-[#A4D66A] text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#E8AE42]" />
            <span>{t.products.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            {t.products.heading}
          </h2>
          <p className="text-base text-white/80 font-light">
            {t.products.subheading}
          </p>

          {/* Search bar & Category Filter tabs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isTelugu ? "పంట లేదా రైతు పేరుతో వెతకండి..." : "Search produce or farmer..."}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-black/45 border border-white/20 text-xs text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#80BC41] shadow-xl backdrop-blur-md"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeCategory === tab.id
                      ? "bg-[#80BC41] text-[#0A1F15] shadow-lg scale-105"
                      : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/15"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid with Commercial Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isJustAdded = addedItemAnim === product.id;
            const photoUrl = productPhotos[product.id] || "/images/photoreal_tomato.jpg";

            return (
              <div
                key={product.id}
                className="group relative bg-[#123B28]/85 rounded-3xl border border-white/15 overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#80BC41]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl"
              >
                {/* Media Area with Real Commercial Food Photo */}
                <div className="relative h-60 w-full overflow-hidden bg-black/40">
                  <Image
                    src={photoUrl}
                    alt={product.name}
                    fill
                    sizes="400px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123B28] via-transparent to-black/30" />

                  {/* Harvest Time Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-white shadow-md border border-white/15">
                    <Clock className="w-3 h-3 text-[#80BC41]" />
                    <span>{product.harvestTime}</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-white shadow-md border border-white/15">
                    <Star className="w-3 h-3 text-[#E8AE42] fill-[#E8AE42]" />
                    <span>{product.rating}</span>
                  </div>

                  {product.brix && (
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-[#E8AE42] text-[#0A1F15] text-[10px] font-bold shadow-md">
                      {product.brix}
                    </div>
                  )}
                </div>

                {/* Product Information Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-telugu text-[#E8AE42] font-semibold block mb-0.5">
                      {product.nameTe}
                    </span>

                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#80BC41] transition-colors line-clamp-1 mb-1.5">
                      {isTelugu ? product.nameTe : product.name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-white/70 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-[#80BC41] shrink-0" />
                      <span className="truncate">
                        {product.farmerName} • {product.farmerLocation}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-white/90 border border-white/10"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Add to Cart button */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-bold text-white">
                          ₹{product.price}
                        </span>
                        <span className="text-xs text-white/50 line-through">
                          ₹{product.originalPrice}
                        </span>
                      </div>
                      <span className="text-[10px] text-white/60">
                        per {product.unit}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleAddToCart(product, e)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shadow-lg ${
                        isJustAdded
                          ? "bg-[#80BC41] text-[#0A1F15] scale-105"
                          : "bg-white/15 text-white hover:bg-[#80BC41] hover:text-[#0A1F15] border border-white/20"
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>{t.products.addToCart}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
