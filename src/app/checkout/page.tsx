"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ShieldCheck,
  Truck,
  HeartHandshake,
  ArrowRight,
  Clock,
  CreditCard,
  MapPin,
  CheckCircle2,
  Lock,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const { user } = useAuth();
  const { isTelugu } = useLanguage();

  const [deliverySlot, setDeliverySlot] = useState<"morning" | "afternoon">("afternoon");
  const [paymentMethod, setPaymentMethod] = useState<"razorpay_upi" | "card" | "cod">("razorpay_upi");
  const [isProcessing, setIsProcessing] = useState(false);

  // Address fields
  const [address, setAddress] = useState("Flat 402, Lotus Residency, Road No. 12, Banjara Hills");
  const [city, setCity] = useState("Hyderabad");
  const [pincode, setPincode] = useState("500034");

  const farmerTotal = Math.round(subtotal * 0.72);
  const packaging = Math.round(subtotal * 0.08);
  const delivery = subtotal > 400 || subtotal === 0 ? 0 : 35;
  const platform = Math.round(subtotal * 0.08);
  const grandTotal = subtotal + delivery;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#80BC41", "#E8AE42", "#123B28"],
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      const orderId = "MR-" + Math.floor(100000 + Math.random() * 900000);
      clearCart();
      router.push(`/orders/?id=${encodeURIComponent(orderId)}`);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#0A1F15] text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-2">
              Farm-to-Doorstep Checkout
            </h1>
            <p className="text-sm text-white/70">
              Direct settlement with verified farmers of Andhra Pradesh & Telangana
            </p>
          </div>

          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Details, Slot, Payment */}
            <div className="lg:col-span-2 space-y-8">
              {/* Delivery Address */}
              <div className="p-7 rounded-3xl bg-[#123B28]/90 border border-white/15 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[#80BC41]" />
                  <h3 className="font-serif text-xl font-bold text-white">
                    Delivery Address
                  </h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block text-white/70 mb-1">Full Delivery Street Address</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#80BC41]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 mb-1">City / Cluster</label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#80BC41]"
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 mb-1">Pincode</label>
                      <input
                        type="text"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#80BC41]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Slot */}
              <div className="p-7 rounded-3xl bg-[#123B28]/90 border border-white/15 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[#E8AE42]" />
                  <h3 className="font-serif text-xl font-bold text-white">
                    Choose Delivery Window
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setDeliverySlot("morning")}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      deliverySlot === "morning"
                        ? "bg-[#80BC41]/20 border-[#80BC41] shadow-lg"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <span className="font-bold text-sm text-white block mb-1">
                      Morning Dew Slot (07:00 AM – 11:00 AM)
                    </span>
                    <p className="text-xs text-white/70">
                      Harvested at 4:30 AM today, pre-cooled in shaded bamboo baskets.
                    </p>
                  </div>

                  <div
                    onClick={() => setDeliverySlot("afternoon")}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      deliverySlot === "afternoon"
                        ? "bg-[#80BC41]/20 border-[#80BC41] shadow-lg"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <span className="font-bold text-sm text-white block mb-1">
                      Afternoon Kitchen Slot (01:00 PM – 04:00 PM)
                    </span>
                    <p className="text-xs text-white/70">
                      Delivered by solar electric refrigerated cold-chain van.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="p-7 rounded-3xl bg-[#123B28]/90 border border-white/15 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5 text-[#80BC41]" />
                  <h3 className="font-serif text-xl font-bold text-white">
                    Direct Farmer Settlement Method
                  </h3>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "razorpay_upi"}
                      onChange={() => setPaymentMethod("razorpay_upi")}
                      className="accent-[#80BC41]"
                    />
                    <div className="flex-1 text-xs">
                      <span className="font-bold text-sm text-white block">
                        Instant UPI via Razorpay (GPay, PhonePe, Paytm)
                      </span>
                      <span className="text-white/60">
                        72% credited immediately to farmer&apos;s verified bank account
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="accent-[#80BC41]"
                    />
                    <div className="flex-1 text-xs">
                      <span className="font-bold text-sm text-white block">
                        Farm Gate Cash / UPI on Delivery
                      </span>
                      <span className="text-white/60">
                        Pay upon doorstep inspection of crisp dew freshness
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Col: Bill Breakdown & Confirmation */}
            <div className="space-y-6">
              <div className="p-7 rounded-3xl bg-[#123B28] border-2 border-[#80BC41] shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-4">
                  <h3 className="font-serif text-xl font-bold text-white">
                    Radical Bill Breakdown
                  </h3>
                  <span className="text-xs font-bold text-[#80BC41]">100% Transparent</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-white/80">
                    <span>Produce Value ({items.length} crops):</span>
                    <span className="font-bold text-white">₹{subtotal}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#80BC41]/20 border border-[#80BC41]/30 flex justify-between items-center text-xs">
                    <span className="text-[#A4D66A] font-bold flex items-center gap-1">
                      <HeartHandshake className="w-3.5 h-3.5" />
                      Farmer&apos;s Direct Cut (72%):
                    </span>
                    <span className="font-black text-[#80BC41] text-sm">₹{farmerTotal}</span>
                  </div>

                  <div className="flex justify-between text-white/70">
                    <span>Electric Cold-Chain Delivery:</span>
                    <span>{delivery === 0 ? "FREE" : `₹${delivery}`}</span>
                  </div>

                  <div className="flex justify-between text-white/70">
                    <span>Eco Bamboo & Paper Wrapping:</span>
                    <span>₹{packaging}</span>
                  </div>

                  <div className="flex justify-between text-white/70">
                    <span>Platform IoT Weighing Fee (8%):</span>
                    <span>₹{platform}</span>
                  </div>

                  <div className="pt-4 border-t border-dashed border-white/20 flex justify-between items-baseline text-base font-bold text-white">
                    <span>Grand Total:</span>
                    <span className="text-2xl font-serif font-black text-white">
                      ₹{grandTotal}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing || items.length === 0}
                  className="w-full mt-6 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#80BC41] to-[#6ca331] text-[#0A1F15] font-bold text-sm sm:text-base hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-2xl disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Dispatching Order to Farms...</span>
                  ) : (
                    <>
                      <span>Confirm & Place Order</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-white/60">
                  <Lock className="w-3.5 h-3.5 text-[#80BC41]" />
                  <span>256-Bit Encrypted Direct Settlement</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
