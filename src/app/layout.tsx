import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { AuthProvider } from "@/context/AuthContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const notoSansTelugu = Noto_Sans_Telugu({
  variable: "--font-noto-telugu",
  subsets: ["telugu"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mana Rythu – Rythu Nundi Mee Intiki Neruga | Farm-to-Kitchen Direct",
  description:
    "Andhra & Telangana's premier direct agricultural bridge. Fresh vegetables, heirloom fruits, aged Sona Masoori, and cold-pressed oils straight from verified farmers to your doorstep.",
  keywords: [
    "Mana Rythu",
    "Rythu Nundi Mee Intiki Neruga",
    "Farm to home",
    "Organic vegetables Hyderabad",
    "Andhra farmers direct",
    "Telangana organic farming",
    "Heirloom tomatoes",
    "Desi cow ghee",
    "Sona Masoori rice direct",
  ],
  authors: [{ name: "Mana Rythu Agricultural Collective" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#123B28",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} ${notoSansTelugu.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#0A1F15] text-white font-sans selection:bg-[#80BC41]/30 selection:text-white overflow-x-hidden">
        <LanguageProvider>
          <AuthProvider>
            <WishlistProvider>
              <CartProvider>
                {children}
              </CartProvider>
            </WishlistProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
