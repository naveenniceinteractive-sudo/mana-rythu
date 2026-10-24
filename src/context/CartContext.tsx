"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/products";
import confetti from "canvas-confetti";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, event?: React.MouseEvent) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  flyingItem: { x: number; y: number; active: boolean } | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([
    // Start with 1 default demo item to demonstrate cart badge and richness
    {
      product: {
        id: "p1",
        name: "Guntur Heirloom Country Tomatoes",
        nameTe: "గుంటూరు నాటు టమాటాలు",
        category: "vegetables",
        price: 38,
        unit: "kg",
        originalPrice: 55,
        stock: 140,
        rating: 4.9,
        reviewsCount: 312,
        harvestTime: "Today 04:30 AM",
        farmerName: "K. Ramaiah",
        farmerLocation: "Chebrolu, Guntur, AP",
        farmDistance: "42 km away",
        badges: ["Signature Item", "Zero Chemical"],
        description: "Sun-ripened on the vine in black cotton soil.",
        descriptionTe: "నల్లరేగడి నేలలో సహజంగా పండిన నాటు టమాటాలు.",
        accentColor: "#E53935",
        svgIcon: "tomato",
      },
      quantity: 2,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [flyingItem, setFlyingItem] = useState<{ x: number; y: number; active: boolean } | null>(null);

  const addToCart = (product: Product, quantity = 1, event?: React.MouseEvent) => {
    // Flying tomato / produce particle animation origin
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      setFlyingItem({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        active: true,
      });
      setTimeout(() => {
        setFlyingItem(null);
      }, 900);
    }

    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    // Small celebratory confetti burst from the bottom corner
    try {
      confetti({
        particleCount: 28,
        spread: 60,
        origin: { y: 0.85, x: 0.9 },
        colors: ["#80BC41", "#E8AE42", "#E53935", "#123B28"],
        ticks: 120,
      });
    } catch {
      // Ignore if not supported
    }
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        flyingItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
