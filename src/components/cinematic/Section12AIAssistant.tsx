"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Bot,
  Send,
  Sparkles,
  Camera,
  Leaf,
  CloudSun,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface ChatMessage {
  sender: "user" | "krishi";
  textEn: string;
  textTe: string;
  badge?: string;
}

export function Section12AIAssistant() {
  const { t, isTelugu } = useLanguage();
  const [activeTab, setActiveTab] = useState<"chat" | "doctor" | "weather">("chat");
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "krishi",
      textEn:
        "Namaskaram! I am Mana Rythu Krishi AI. Ask me anything about crop diseases, organic Jeevamrutham sprays, current mandi prices vs Mana Rythu direct rates, or nutritional benefits of heirloom crops in Telugu or English.",
      textTe:
        "నమస్కారం! నేను మన రైతు కృషి AI. తెలుగు లేదా ఇంగ్లీషులో పంట రోగాలు, జీవామృతం తయారీ, మార్కెట్ ధరలు లేదా దేశీ విత్తనాల వివరాల గురించి ఏదైనా అడగవచ్చు.",
      badge: "Verified Agronomy Model",
    },
    {
      sender: "user",
      textEn: "How do I cure leaf curl in Guntur chillies naturally?",
      textTe: "గుంటూరు మిరప తోటలో ఆకుముడుతను సహజంగా ఎలా నివారించాలి?",
    },
    {
      sender: "krishi",
      textEn:
        "🌱 For chilli leaf curl (Thrips/Mites attack), avoid toxic synthetic pyrethroids. Recommended Organic Protocol:\n1. Spray 5% Neem Seed Kernel Extract (NSKE) or Agniastram at dawn.\n2. Apply Sour Buttermilk spray (500ml in 15L water) to neutralize micro-fungus.\n3. Maintain yellow sticky traps (15 per acre).",
      textTe:
        "🌱 మిరపలో ఆకుముడుత (నల్లి/తామర పురుగులు) నివారణకు సహజ విధానం:\n1. ఉదయాన్నే 5% వేప గింజల కషాయం (NSKE) లేదా అగ్నిఅస్త్రం పిచికారీ చేయండి.\n2. 15 లీటర్ల నీటిలో అరలీటరు పుల్లటి మజ్జిగ కలిపి పిచికారీ చేస్తే సూక్ష్మజీవులు నశిస్తాయి.\n3. ఎకరానికి 15 పసుపు రంగు జిగురు అట్టలు అమర్చండి.",
      badge: "Organic Protocol (ZBNF)",
    },
  ]);

  const handleSendPrompt = (promptText: string) => {
    if (!promptText.trim()) return;

    const userMsg: ChatMessage = {
      sender: "user",
      textEn: promptText,
      textTe: promptText,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      let replyEn = "Thank you for asking! For this specific crop cycle, organic compost combined with regulated drip irrigation ensures maximum soil microbial density. Local farm gate prices are holding strong at ₹38-₹45/kg direct to farmer.";
      let replyTe = "ధన్యవాదాలు! ఈ పంట కాలంలో జీవామృతం మరియు డ్రిప్ పద్ధతి ద్వారా అధిక దిగుబడి సాధించవచ్చు. ప్రస్తుతం మన రైతు వేదికపై రైతులకు నేరుగా కిలోకు ₹38-₹45 అందుతోంది.";

      if (promptText.toLowerCase().includes("millet") || promptText.includes("చిరుధాన్యం")) {
        replyEn = "Foxtail Millet (కొర్రలు) is ideal for diabetes management due to its low glycemic index (50.8) and high insoluble dietary fiber (8%). It requires 70% less water than paddy.";
        replyTe = "మధుమేహ నియంత్రణకు కొర్రలు (Foxtail Millet) అత్యుత్తమమైనవి. వీటిలో తక్కువ గ్లైసెమిక్ ఇండెక్స్ మరియు 8% పీచు పదార్థం ఉంటుంది.";
      } else if (promptText.toLowerCase().includes("price") || promptText.includes("ధర")) {
        replyEn = "Traditional Mandis currently pay farmers ₹18/kg for tomatoes while charging urban consumers ₹45/kg. On Mana Rythu, the farmer receives ₹38/kg directly (72%), and the consumer pays only ₹38-₹42/kg.";
        replyTe = "సాధారణ మార్కెట్లలో రైతుకు కిలోకు కేవలం ₹18 మాత్రమే ఇస్తూ వినియోగదారులకు ₹45 కు అమ్ముతారు. మన రైతులో రైతుకు పూర్తి ₹38 లభిస్తుంది.";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "krishi",
          textEn: replyEn,
          textTe: replyTe,
          badge: "Krishi AI Real-Time",
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <section
      id="krishi-ai"
      className="relative py-28 bg-[#0D2218] text-white overflow-hidden"
    >
      {/* Background ambient leaf glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#80BC41]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#E8AE42]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#80BC41]/20 border border-[#80BC41]/35 text-[#80BC41] text-xs font-semibold uppercase tracking-wider mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>{t.aiAssistant.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            {t.aiAssistant.heading}
          </h2>

          <p className="text-base text-white/80 font-light max-w-2xl mx-auto">
            {t.aiAssistant.subheading}
          </p>
        </div>

        {/* AI Console Wrapper */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#123B28]/85 border border-[#80BC41]/30 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
          {/* Console Header with Feature Tabs */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-[#0A2016]/90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#80BC41] to-[#123B28] flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-white">
                    Mana Rythu Krishi AI 2.0
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-[#80BC41] animate-pulse" />
                </div>
                <p className="text-[11px] text-[#A4D66A]">
                  Bilingual Agronomy Engine • English & తెలుగు
                </p>
              </div>
            </div>

            {/* Sub-tabs */}
            <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setActiveTab("chat")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === "chat"
                    ? "bg-[#80BC41] text-[#0A2217] font-bold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Chat Assistant
              </button>
              <button
                onClick={() => setActiveTab("doctor")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === "doctor"
                    ? "bg-[#80BC41] text-[#0A2217] font-bold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Crop Doctor</span>
              </button>
              <button
                onClick={() => setActiveTab("weather")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === "weather"
                    ? "bg-[#80BC41] text-[#0A2217] font-bold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <CloudSun className="w-3.5 h-3.5" />
                <span>Farm Advisory</span>
              </button>
            </div>
          </div>

          {/* Chat Tab View */}
          {activeTab === "chat" && (
            <div className="p-4 sm:p-6 flex flex-col h-[420px]">
              {/* Message History */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-3 ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.sender === "krishi" && (
                      <div className="w-8 h-8 rounded-lg bg-[#80BC41]/20 flex items-center justify-center shrink-0 text-sm">
                        🌾
                      </div>
                    )}

                    <div
                      className={`max-w-lg rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#80BC41] text-[#0A2217] font-medium rounded-tr-none shadow-md"
                          : "bg-white/10 text-white/95 rounded-tl-none border border-white/10 shadow-inner"
                      }`}
                    >
                      {msg.badge && (
                        <div className="text-[10px] font-bold text-[#E8AE42] uppercase tracking-wider mb-1 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#80BC41]" />
                          <span>{msg.badge}</span>
                        </div>
                      )}
                      <p className="whitespace-pre-line font-telugu">
                        {isTelugu ? msg.textTe : msg.textEn}
                      </p>
                    </div>

                    {msg.sender === "user" && (
                      <div className="w-8 h-8 rounded-lg bg-[#123B28] flex items-center justify-center shrink-0 text-sm border border-white/20">
                        👤
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-[#80BC41] italic">
                    <span className="w-2 h-2 rounded-full bg-[#80BC41] animate-bounce" />
                    <span>Krishi AI is analyzing natural farming database...</span>
                  </div>
                )}
              </div>

              {/* Quick Sample Prompts Pills */}
              <div className="pt-3 pb-2 flex flex-wrap gap-2">
                {t.aiAssistant.quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendPrompt(prompt)}
                    className="text-[11px] px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 transition-colors text-left"
                  >
                    &ldquo;{prompt}&rdquo;
                  </button>
                ))}
              </div>

              {/* Chat Input Field */}
              <div className="pt-2 flex items-center gap-2">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendPrompt(inputVal)}
                  placeholder={t.aiAssistant.placeholder}
                  className="flex-1 px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-xs sm:text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#80BC41]"
                />
                <button
                  onClick={() => handleSendPrompt(inputVal)}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#80BC41] to-[#6da532] text-[#0A2217] font-bold text-xs sm:text-sm hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md"
                >
                  <span>{t.aiAssistant.askBtn}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Crop Doctor Image Diagnosis Tab */}
          {activeTab === "doctor" && (
            <div className="p-6 h-[420px] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-3xl bg-[#80BC41]/20 border border-[#80BC41]/40 flex items-center justify-center text-[#80BC41] mb-4">
                <Camera className="w-10 h-10 animate-pulse" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">
                AI Leaf Scanner & Crop Doctor
              </h4>
              <p className="text-xs sm:text-sm text-white/70 max-w-md mb-6 leading-relaxed">
                Snap or upload a photo of affected crop leaves (Tomato, Chilli, Paddy, Mango). Our model analyzes fungal blight, leaf curl, nitrogen deficiency, and recommends instant natural Jeevamrutham remedies.
              </p>
              <button
                onClick={() =>
                  handleSendPrompt(
                    "Simulated Leaf Upload: Detected Early Blight on Country Tomato (ఆకుమచ్చ తెగులు)"
                  )
                }
                className="px-6 py-3 rounded-full bg-[#80BC41] text-[#0A2217] font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-lg flex items-center gap-2"
              >
                <Leaf className="w-4 h-4" />
                <span>Simulate Leaf Diagnosis</span>
              </button>
            </div>
          )}

          {/* Farm Weather Advisory Tab */}
          {activeTab === "weather" && (
            <div className="p-6 h-[420px] flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Guntur Cluster</span>
                    <CloudSun className="w-5 h-5 text-[#E8AE42]" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">29°C</div>
                  <p className="text-[11px] text-[#80BC41]">
                    Clear skies. Ideal for morning tomato & chilli harvest.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Miryalaguda Basin</span>
                    <CloudSun className="w-5 h-5 text-[#80BC41]" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">27°C</div>
                  <p className="text-[11px] text-[#80BC41]">
                    Favorable humidity for Sona Masoori grain drying.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Anantapur Dryland</span>
                    <TrendingUp className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">32°C</div>
                  <p className="text-[11px] text-[#F59E0B]">
                    Dry winds. Optimum for foxtail millet threshing.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-[#E8AE42] shrink-0" />
                <p className="text-xs text-white/80">
                  Agronomic Advisory: Pre-cool harvested tomatoes under shade trees to preserve lycopene crispness before loading into electric vans.
                </p>
              </div>
            </div>
          )}

          {/* Legal / Responsible AI Disclaimer */}
          <div className="p-3 bg-black/50 border-t border-white/10 text-[10px] text-white/50 text-center">
            {t.aiAssistant.disclaimer}
          </div>
        </div>
      </div>
    </section>
  );
}
