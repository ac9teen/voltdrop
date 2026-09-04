"use client";

import React from "react";
import { Zap, ArrowRight, Shield } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#070709]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 text-slate-950 fill-current stroke-current" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                VOLT<span className="text-amber-400">DROP</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                VIP
              </span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wide font-medium">
              Private Electronics Community
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#giveaway" className="hover:text-white transition-colors">
            Giveaway Scale
          </a>
          <a href="#telegram-drops" className="hover:text-white transition-colors">
            Telegram Drops
          </a>
          <a href="#recipients" className="hover:text-white transition-colors">
            Members Wall
          </a>
          <a href="#what-you-get" className="hover:text-white transition-colors">
            What You Get
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-xs text-slate-400">Lifetime Access</span>
            <span className="text-sm font-bold text-emerald-400">{SITE_CONFIG.membershipFee}</span>
          </div>

          <a
            href={SITE_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-md shadow-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Join Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
