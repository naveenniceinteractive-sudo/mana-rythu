"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: "customer" | "farmer" | "admin";
  city: string;
  state: string;
  pincode: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (phoneOrEmail: string, role?: "customer" | "farmer") => void;
  logout: () => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>({
    id: "u1",
    name: "Smt. Priya Sharma",
    phone: "+91 98765 43210",
    email: "priya.sharma@example.com",
    role: "customer",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500034",
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mana_rythu_user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  }, []);

  const login = (phoneOrEmail: string, role: "customer" | "farmer" = "customer") => {
    const newUser: User = {
      id: "u_" + Date.now(),
      name: role === "farmer" ? "K. Ramaiah (Farmer)" : "Conscious Consumer",
      phone: phoneOrEmail.includes("@") ? "+91 98480 12345" : phoneOrEmail,
      email: phoneOrEmail.includes("@") ? phoneOrEmail : "consumer@manarythu.org",
      role,
      city: role === "farmer" ? "Guntur" : "Hyderabad",
      state: role === "farmer" ? "Andhra Pradesh" : "Telangana",
      pincode: role === "farmer" ? "522001" : "500034",
    };
    setUser(newUser);
    localStorage.setItem("mana_rythu_user", JSON.stringify(newUser));
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("mana_rythu_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        isAuthModalOpen,
        setIsAuthModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
