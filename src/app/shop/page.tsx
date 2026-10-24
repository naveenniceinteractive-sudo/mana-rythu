"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { sampleProducts, Product } from "@/data/products";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import {
  Search,
  Filter,
  Heart,
  ShoppingBag,
  Star,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function ShopPage() {
  const { isTelugu } = useLanguage();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"harvest" | "price_asc" | "price_desc" | "rating">("harvest");
  const [pincode, setPincode] = useState("500034");
  const [pincodeChecked, setPincodeChecked] = useState(true);
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

  const categories = [
    { id: "all", label: isTelugu ? "అన్ని పంటలు" : "All Harvests" },
    { id: "vegetables", label: isTelugu ? "కూరగాయలు" : "Vegetables" },
    { id: "fruits", label: isTelugu ? "నాటు పండ్లు" : "Fruits" },
    { id: "grains", label: isTelugu ? "సంప్రదాయ బియ్యం" : "Rice & Grains" },
    { id: "dairy_millets", label: isTelugu ? "చిరుధాన్యాలు & నెయ్యి" : "Dairy & Millets" },
    { id: "spices", label: isTelugu ? "సుగంధ ద్రవ్యాలు" : "Spices" },
  ];

  const filteredProducts = sampleProducts
    .filter((product) => {
      const matchCat =
        selectedCategory === "all" ||
        (selectedCategory === "dairy_millets"
          ? product.category === "dairy_millets" || product.category === "spices"
          : product.category === selectedCategory);

      const matchSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.nameTe.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.farmerName.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price_asc") return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // harvest time
    });

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    addToCart(product, 1, e);
    setAddedItemAnim(product.id);
    setTimeout(() => setAddedItemAnim(null), 1200);
  };

  return (
    <div className="min-h-screen bg-[#0A1F15] text-white flex flex-col justify-between">
      <Navbar />
      <CartDrawer />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-[#123B28] via-[#1B4B34] to-[#123B28] border border-white/15 p-8 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#80BC41]/10 blur-3xl pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#80BC41]/40 text-[#A4D66A] text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xl">
                <Sparkles className="w-3.5 h-3.5 text-[#E8AE42]" />
                <span>
                  {isTelugu ? "ఉదయపు ప్రత్యక్ష మార్కెట్" : "Live Farm-Gate Marketplace"}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4 drop-shadow">
                {isTelugu ? "నేటి తాజా పంటల అంగడి" : "Today's Living Farm Harvest"}
              </h1>

              <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed mb-6">
                {isTelugu
                  ? "తెల్లవారుజామున 4:30 కు కోసిన పంటలు నేరుగా మీ ముందుకు. 100% రసాయనాలు లేని పవిత్ర ఆహారం."
                  : "Harvested at dawn across certified natural farms in Guntur, Tenali, Miryalaguda, and Anantapur. 72% direct revenue returned to our farmers."}
              </p>

              {/* Delivery Pincode Checker */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/50 border border-white/20 text-xs text-white">
                  <MapPin className="w-4 h-4 text-[#80BC41]" />
                  <span>Deliver to:</span>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-20 bg-transparent border-b border-white/30 text-center font-bold focus:outline-none focus:border-[#80BC41]"
                  />
                  <button
                    onClick={() => setPincodeChecked(true)}
                    className="text-[#80BC41] font-bold hover:underline"
                  >
                    Check
                  </button>
                </div>

                {pincodeChecked && (
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#80BC41] font-semibold bg-[#80BC41]/15 px-3 py-1.5 rounded-xl border border-[#80BC41]/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Electric Cold-Chain Van Available Today</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Search, Filter Tabs & Sort Controls */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isTelugu ? "పంట లేదా రైతు పేరుతో వెతకండి..." : "Search harvest or farmer..."}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#123B28]/70 border border-white/20 text-xs sm:text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#80BC41] shadow-xl backdrop-blur-xl"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-[#80BC41] text-[#0A1F15] font-bold shadow-lg scale-105"
                      : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/15"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 text-xs text-white/80 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#80BC41]" />
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "harvest" | "price_asc" | "price_desc" | "rating")}
                className="bg-[#123B28] border border-white/20 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#80BC41]"
              >
                <option value="harvest">Dawn Harvest (Latest)</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isFav = isInWishlist(product.id);
              const isJustAdded = addedItemAnim === product.id;
              const photoUrl = productPhotos[product.id] || "/images/photoreal_tomato.jpg";

              return (
                <div
                  key={product.id}
                  className="group relative bg-[#123B28]/90 rounded-3xl border border-white/15 overflow-hidden shadow-2xl hover:border-[#80BC41]/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl"
                >
                  {/* Photo with Wishlist Heart */}
                  <div className="relative h-64 w-full overflow-hidden bg-black/40">
                    <Link href={`/products/${product.id}`} className="block w-full h-full">
                      <Image
                        src={photoUrl}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#123B28] via-transparent to-black/30" />
                    </Link>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border transition-all z-10 ${
                        isFav
                          ? "bg-[#E53935] text-white border-[#E53935]"
                          : "bg-black/60 text-white/80 border-white/20 hover:text-white"
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isFav ? "fill-white" : ""}`} />
                    </button>

                    {/* Harvest Time Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-white shadow-md border border-white/15">
                      <Clock className="w-3 h-3 text-[#80BC41]" />
                      <span>{product.harvestTime}</span>
                    </div>

                    {/* Brix Badge */}
                    {product.brix && (
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-[#E8AE42] text-[#0A1F15] text-[10px] font-bold shadow-md">
                        {product.brix}
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-telugu text-[#E8AE42] font-semibold block mb-0.5">
                        {product.nameTe}
                      </span>

                      <Link href={`/products/${product.id}`}>
                        <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#80BC41] transition-colors line-clamp-1 mb-1.5">
                          {isTelugu ? product.nameTe : product.name}
                        </h3>
                      </Link>

                      {/* Farmer Attribution with Profile Link */}
                      <div className="flex items-center gap-1.5 text-xs text-white/70 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-[#80BC41] shrink-0" />
                        <Link
                          href={`/farmers/${product.farmerName.toLowerCase().includes("ramaiah") ? "f1" : "f2"}`}
                          className="hover:text-[#80BC41] hover:underline truncate"
                        >
                          {product.farmerName} • {product.farmerLocation}
                        </Link>
                      </div>

                      {/* Purity Badges */}
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

                    {/* Price & Add to Cart */}
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
                            <span>Add to Basket</span>
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
      </main>

      <Footer />
    </div>
  );
}
