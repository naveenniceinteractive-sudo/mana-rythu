import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { featuredFarmers } from "@/data/farmers";

export default function FarmersPage() {
  return (
    <div className="min-h-screen bg-[#0A1F15] text-white">
      <Navbar />

      <main className="px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#A4D66A]">
              Grown with care, delivered with trust
            </p>
            <h1 className="mb-4 font-serif text-4xl font-black sm:text-5xl">
              Meet Our Farmers
            </h1>
            <p className="text-base leading-relaxed text-white/70">
              Get to know the growers behind your harvest and the natural
              farming practices they bring to every crop.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredFarmers.map((farmer) => (
              <article
                key={farmer.id}
                className="flex flex-col rounded-3xl border border-white/10 bg-[#123B28] p-7 shadow-xl"
              >
                <span className="mb-3 text-xs font-bold uppercase tracking-wider text-[#A4D66A]">
                  {farmer.badge}
                </span>
                <h2 className="font-serif text-2xl font-bold">{farmer.name}</h2>
                <p className="mt-1 font-telugu text-sm text-white/70">
                  {farmer.nameTe}
                </p>
                <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4 text-[#80BC41]" />
                  {farmer.village}, {farmer.district}, {farmer.state}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                  {farmer.farmingMethod}
                </p>
                <Link
                  href={`/farmers/${farmer.id}`}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-[#A4D66A] hover:text-white"
                >
                  View farmer profile
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
