"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, subtotal, clearCart } = useCart();
  const { isTelugu } = useLanguage();
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isCartOpen) return null;

  // Direct farmer share is 72%
  const farmerEarnings = Math.round(subtotal * 0.72);
  const packaging = Math.round(subtotal * 0.08);
  const delivery = subtotal > 0 ? (subtotal > 400 ? 0 : 35) : 0;
  const grandTotal = subtotal + delivery;

  const handleCheckoutDemo = () => {
    setOrderPlaced(true);
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#80BC41", "#E8AE42", "#123B28", "#E53935"],
      });
    } catch {
      // ignore
    }
    setTimeout(() => {
      clearCart();
      setOrderPlaced(false);
      setIsCartOpen(false);
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-md bg-[#F7F5EC] text-[#123B28] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#123B28]/10 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧺</span>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#123B28]">
                {isTelugu ? "మీ తాజా పంట బుట్ట" : "Your Morning Harvest Basket"}
              </h3>
              <p className="text-xs text-[#78543B]">
                {items.length} {isTelugu ? "రకాల పంటలు" : "distinct farm products"}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-black/5 text-[#123B28]/70 hover:text-[#123B28]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Success State */}
        {orderPlaced ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#80BC41]/20 flex items-center justify-center mb-4 text-[#80BC41]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#123B28] mb-2">
              {isTelugu ? "ఆర్డర్ విజయవంతంగా నమోదైంది!" : "Harvest Order Placed!"}
            </h4>
            <p className="text-sm text-[#78543B] mb-4">
              {isTelugu
                ? "మీ ఆర్డర్ నోటిఫికేషన్ నేరుగా రైతులకు చేరింది. మధ్యాహ్నం 1 గంటకు ఎలక్ట్రిక్ వ్యాన్ మీ ఇంటికి చేరుకుంటుంది."
                : "Your harvest notice is dispatched directly to our farmer partners. The electric cold-chain van is scheduled for afternoon delivery."}
            </p>
            <div className="p-4 rounded-xl bg-[#123B28]/5 border border-[#123B28]/10 text-xs text-[#123B28] w-full">
              <span className="font-bold text-[#80BC41] block mb-1">
                {isTelugu ? "నేరుగా రైతుకు అందిన మొత్తం:" : "Credited directly to farmer's account:"}
              </span>
              <span className="text-lg font-bold text-[#123B28]">₹{farmerEarnings}</span>
            </div>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-5xl mb-3">🌱</span>
            <h4 className="font-serif text-lg font-bold text-[#123B28] mb-1">
              {isTelugu ? "మీ బుట్ట ఖాళీగా ఉంది" : "Your harvest basket is empty"}
            </h4>
            <p className="text-xs text-[#78543B] max-w-xs mb-4">
              {isTelugu
                ? "ఉదయం తాజా పంటల నుండి మీకు నచ్చిన కూరగాయలు మరియు పండ్లను ఎంచుకోండి."
                : "Explore our crisp morning-harvested vegetables, heirloom fruits, and stone-ground spices."}
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="px-5 py-2 rounded-full bg-[#123B28] text-white text-xs font-semibold hover:bg-[#80BC41] hover:text-[#0A2217] transition-all"
            >
              {isTelugu ? "పంటలను చూడండి" : "Explore Today's Harvest"}
            </button>
          </div>
        ) : (
          <>
            {/* Direct Impact Banner */}
            <div className="bg-[#123B28] text-white px-4 py-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#80BC41]" />
                <span>
                  {isTelugu ? "రైతుకు నేరుగా వెళ్లే మొత్తం:" : "Farmer gets 72% directly:"}
                </span>
              </div>
              <span className="font-bold text-[#E8AE42] text-sm">₹{farmerEarnings}</span>
            </div>

            {/* Item List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl p-3.5 border border-[#123B28]/10 shadow-sm flex items-start gap-3"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0"
                    style={{ backgroundColor: `${product.accentColor}18` }}
                  >
                    {product.svgIcon === "tomato" && "🍅"}
                    {product.svgIcon === "mango" && "🥭"}
                    {product.svgIcon === "rice" && "🌾"}
                    {product.svgIcon === "spinach" && "🥬"}
                    {product.svgIcon === "turmeric" && "🌿"}
                    {product.svgIcon === "ghee" && "🧈"}
                    {product.svgIcon === "millet" && "🥣"}
                    {product.svgIcon === "custard_apple" && "🍈"}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-xs sm:text-sm text-[#123B28] truncate">
                      {isTelugu ? product.nameTe : product.name}
                    </h5>
                    <p className="text-[11px] text-[#78543B]">
                      {product.farmerName} • {product.farmerLocation}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-sm text-[#123B28]">
                        ₹{product.price * quantity}{" "}
                        <span className="text-[10px] font-normal text-gray-500">
                          (₹{product.price}/{product.unit})
                        </span>
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-[#F7F5EC] rounded-lg px-2 py-0.5 border border-black/5">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-1 hover:text-[#E53935]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-1 hover:text-[#80BC41]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-gray-400 hover:text-[#E53935] p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Bill Breakdown & Checkout */}
            <div className="p-5 bg-white border-t border-[#123B28]/10 space-y-3">
              <div className="space-y-1.5 text-xs text-[#78543B]">
                <div className="flex justify-between">
                  <span>{isTelugu ? "పంటల విలువ" : "Harvest Subtotal"}</span>
                  <span className="font-semibold text-[#123B28]">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>{isTelugu ? "పర్యావరణ ప్యాకింగ్" : "Eco-friendly Bamboo & Paper Packaging"}</span>
                  <span className="text-[#80BC41] font-semibold">Included (₹{packaging})</span>
                </div>
                <div className="flex justify-between">
                  <span>{isTelugu ? "ఎలక్ట్రిక్ వ్యాన్ డెలివరీ" : "Electric Cold-Chain Delivery"}</span>
                  <span>
                    {delivery === 0 ? (
                      <span className="text-[#80BC41] font-semibold">
                        {isTelugu ? "ఉచితం (₹400 పైన)" : "FREE (Above ₹400)"}
                      </span>
                    ) : (
                      `₹${delivery}`
                    )}
                  </span>
                </div>
                <div className="border-t border-dashed border-gray-200 pt-2 flex justify-between text-base font-bold text-[#123B28]">
                  <span>{isTelugu ? "మొత్తం చెల్లింపు" : "Total Fair Price"}</span>
                  <span className="text-[#123B28]">₹{grandTotal}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#123B28] to-[#1B543A] hover:from-[#80BC41] hover:to-[#6ba332] text-white hover:text-[#0A2217] font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg group text-center"
              >
                <span>
                  {isTelugu ? "రైతుకు చెల్లించండి (ఆర్డర్ చేయండి)" : "Proceed to Farm Checkout"}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#80BC41]" />
                <span>100% Zero Chemical Guarantee • Instant Refund Policy</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
