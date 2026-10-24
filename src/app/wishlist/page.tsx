"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { Heart, ShoppingBag, Trash2, ArrowLeft, ArrowRight } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { isTelugu } = useLanguage();

  const handleAddAllToCart = () => {
    wishlist.forEach((product) => {
      addToCart(product, 1);
    });
  };

  return (
    <div className="min-h-screen bg-[#0A1F15] text-white flex flex-col justify-between">
      <Navbar />
      <CartDrawer />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-[#80BC41] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Marketplace</span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E53935]/20 text-[#FF8A80] text-xs font-bold mb-2">
                <Heart className="w-3.5 h-3.5 fill-[#E53935]" />
                <span>Saved Farm Items</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-black text-white">
                Your Saved Harvest Wishlist ({wishlist.length})
              </h1>
            </div>

            {wishlist.length > 0 && (
              <button
                onClick={handleAddAllToCart}
                className="px-6 py-3 rounded-2xl bg-[#80BC41] text-[#0A1F15] font-bold text-xs sm:text-sm hover:brightness-110 flex items-center gap-2 shadow-xl"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Move All to Harvest Basket</span>
              </button>
            )}
          </div>

          {wishlist.length === 0 ? (
            <div className="p-16 rounded-3xl bg-[#123B28]/60 border border-white/15 text-center max-w-xl mx-auto">
              <span className="text-6xl block mb-4">🌱</span>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                No saved crops yet
              </h3>
              <p className="text-sm text-white/70 mb-6">
                Explore our morning harvests and save your favorite heirloom tomatoes, mangoes, and native millets!
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#80BC41] text-[#0A1F15] font-bold text-xs hover:scale-105 transition-all"
              >
                <span>Explore Produce</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlist.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-[#123B28]/90 rounded-3xl border border-white/15 overflow-hidden p-5 flex flex-col justify-between shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-[#80BC41]">
                      ₹{prod.price} / {prod.unit}
                    </span>
                    <button
                      onClick={() => toggleWishlist(prod)}
                      className="text-gray-400 hover:text-[#E53935] p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-serif font-bold text-lg text-white mb-1">
                      {isTelugu ? prod.nameTe : prod.name}
                    </h4>
                    <p className="text-xs text-white/60">{prod.farmerName} • {prod.farmerLocation}</p>
                  </div>

                  <button
                    onClick={(e) => addToCart(prod, 1, e)}
                    className="w-full py-2.5 rounded-xl bg-[#80BC41] text-[#0A1F15] font-bold text-xs hover:brightness-110 flex items-center justify-center gap-2 shadow-md"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Basket</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
