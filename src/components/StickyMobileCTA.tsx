"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 lg:hidden transition-all duration-300 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span className="text-xs font-bold text-white tracking-tight">VoltDrop VIP</span>
          </div>
          <span className="text-sm text-amber-400 font-extrabold font-mono">{SITE_CONFIG.membershipFee} Lifetime Access</span>
        </div>

        <a
          href={SITE_CONFIG.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[190px] flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs py-3 px-4 rounded-xl shadow-lg hover:from-amber-300 hover:to-amber-400 transition-all text-center"
        >
          <span>JOIN NOW</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
