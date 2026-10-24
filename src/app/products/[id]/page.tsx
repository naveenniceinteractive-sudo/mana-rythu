"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { sampleProducts, Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import {
  Star,
  Clock,
  MapPin,
  ShieldCheck,
  Heart,
  ShoppingBag,
  Plus,
  Minus,
  Sparkles,
  Award,
  CheckCircle2,
  HeartHandshake,
  ArrowLeft,
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const { isTelugu } = useLanguage();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = sampleProducts.find((p) => p.id === id) || sampleProducts[0];
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"story" | "nutrition" | "reviews">("story");
  const [isJustAdded, setIsJustAdded] = useState(false);

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

  const photoUrl = productPhotos[product.id] || "/images/photoreal_tomato.jpg";
  const isFav = isInWishlist(product.id);

  const handleAdd = (e: React.MouseEvent) => {
    addToCart(product, quantity, e);
    setIsJustAdded(true);
    setTimeout(() => setIsJustAdded(false), 1400);
  };

  // Farmer direct calculation
  const totalItemPrice = product.price * quantity;
  const farmerCut = Math.round(totalItemPrice * 0.72);

  return (
    <div className="min-h-screen bg-[#0A1F15] text-white flex flex-col justify-between">
      <Navbar />
      <CartDrawer />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Back Button */}
          <div className="mb-6">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-[#80BC41] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Marketplace</span>
            </Link>
          </div>

          {/* Product Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left: Product Imagery Showcase */}
            <div className="space-y-4">
              <div className="relative h-[420px] sm:h-[500px] w-full rounded-3xl overflow-hidden bg-white/95 border-2 border-[#80BC41]/50 shadow-2xl">
                <Image
                  src={photoUrl}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-contain p-6"
                />

                {/* Fresh Harvest Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-xs font-bold text-white shadow-lg border border-white/20">
                  <Clock className="w-3.5 h-3.5 text-[#80BC41]" />
                  <span>Harvested: {product.harvestTime}</span>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md border transition-all ${
                    isFav
                      ? "bg-[#E53935] text-white border-[#E53935]"
                      : "bg-black/60 text-white/80 border-white/20 hover:text-white"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFav ? "fill-white" : ""}`} />
                </button>

                {/* Brix Rating */}
                {product.brix && (
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-[#E8AE42] text-[#0A1F15] text-xs font-bold shadow-lg">
                    {product.brix} Sugar Brix
                  </div>
                )}
              </div>
            </div>

            {/* Right: Product Info & Actions */}
            <div className="space-y-6">
              <div>
                <span className="text-sm font-telugu text-[#E8AE42] font-semibold block mb-1">
                  {product.nameTe}
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-3">
                  {isTelugu ? product.nameTe : product.name}
                </h1>

                {/* Rating & Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-white/80">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E8AE42]/20 text-[#E8AE42] font-bold border border-[#E8AE42]/30">
                    <Star className="w-3.5 h-3.5 fill-[#E8AE42]" />
                    <span>{product.rating}</span>
                    <span className="text-white/60">({product.reviewsCount} reviews)</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-white/70">
                    <MapPin className="w-4 h-4 text-[#80BC41]" />
                    <span>{product.farmerName} • {product.farmerLocation}</span>
                  </div>
                </div>
              </div>

              {/* Price Banner */}
              <div className="p-5 rounded-2xl bg-[#123B28] border border-[#80BC41]/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-white/60 block mb-0.5">Farm Gate Fair Price:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-serif font-black text-white">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-white/50 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="text-xs text-white/80">
                      / {product.unit}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-[#A4D66A] uppercase font-bold tracking-wider block">
                    Direct Farmer Earnings
                  </span>
                  <span className="text-xl font-bold text-[#80BC41]">
                    ₹{farmerCut} (72%)
                  </span>
                </div>
              </div>

              {/* Quantity Selector & Add to Cart */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3 border border-white/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:text-[#E53935] transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-base w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:text-[#80BC41] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex-1 py-4 px-6 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-xl ${
                    isJustAdded
                      ? "bg-[#80BC41] text-[#0A1F15] scale-105"
                      : "bg-gradient-to-r from-[#80BC41] to-[#6ca331] text-[#0A1F15] hover:brightness-110"
                  }`}
                >
                  {isJustAdded ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Added {quantity} to Harvest Basket!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>Add to Harvest Basket • ₹{totalItemPrice}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Purity Guarantee Box */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/15 space-y-2 text-xs text-white/80">
                <div className="flex items-center gap-2 text-[#80BC41] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Subhash Palekar Natural Farming (ZBNF) Certified</span>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Grown without synthetic urea, DAP, or chemical pesticide sprays. Irrigated with pure river aquifers and nurtured with cow-dung Jeevamrutham.
                </p>
              </div>
            </div>
          </div>

          {/* Deep Tabs: Farmer Story, Nutritional Specs, Reviews */}
          <div className="rounded-3xl bg-[#123B28]/85 border border-white/15 p-8 shadow-2xl backdrop-blur-xl">
            <div className="flex gap-4 border-b border-white/10 pb-4 mb-6">
              <button
                onClick={() => setActiveTab("story")}
                className={`pb-2 text-sm font-bold border-b-2 transition-all ${
                  activeTab === "story"
                    ? "border-[#80BC41] text-[#80BC41]"
                    : "border-transparent text-white/60 hover:text-white"
                }`}
              >
                Farmer Story & Soil Origin
              </button>
              <button
                onClick={() => setActiveTab("nutrition")}
                className={`pb-2 text-sm font-bold border-b-2 transition-all ${
                  activeTab === "nutrition"
                    ? "border-[#80BC41] text-[#80BC41]"
                    : "border-transparent text-white/60 hover:text-white"
                }`}
              >
                100% Radical Price Breakdown
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`pb-2 text-sm font-bold border-b-2 transition-all ${
                  activeTab === "reviews"
                    ? "border-[#80BC41] text-[#80BC41]"
                    : "border-transparent text-white/60 hover:text-white"
                }`}
              >
                Customer Reviews ({product.reviewsCount})
              </button>
            </div>

            {activeTab === "story" && (
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-white">
                  Cultivated with Reverence by {product.farmerName}
                </h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  {isTelugu ? product.descriptionTe : product.description}
                </p>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-white/50 block">Farm Cluster</span>
                    <span className="font-bold text-white text-sm">{product.farmerLocation}</span>
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block">Distance to Delivery Hub</span>
                    <span className="font-bold text-[#80BC41] text-sm">{product.farmDistance}</span>
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block">Harvest Method</span>
                    <span className="font-bold text-[#E8AE42] text-sm">Pre-Dawn Hand Picked</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "nutrition" && (
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-white">
                  Where Your Money Directly Goes
                </h3>
                <div className="space-y-3 max-w-xl text-xs">
                  <div className="flex justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[#80BC41] font-bold">Farmer Direct Take-Home (72%):</span>
                    <span className="font-bold text-white">₹{Math.round(product.price * 0.72)}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/80">Electric Cold-Chain Van Transport (12%):</span>
                    <span className="font-bold text-white">₹{Math.round(product.price * 0.12)}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/80">Eco Bamboo & Paper Packaging (8%):</span>
                    <span className="font-bold text-white">₹{Math.round(product.price * 0.08)}</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/80">Platform Technology & IoT Testing (8%):</span>
                    <span className="font-bold text-white">₹{Math.round(product.price * 0.08)}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-white text-sm">Sunitha R. (Hyderabad)</span>
                    <span className="text-xs text-[#80BC41]">• Verified Direct Buyer</span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    &ldquo;The flavor of these tomatoes took me right back to my village in Krishna district. Sweet, aromatic, and firm!&rdquo;
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
