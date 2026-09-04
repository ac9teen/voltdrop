"use client";

import React from "react";
import { Zap, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#030712]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 text-slate-950 fill-current stroke-current" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-white font-mono">
                VOLT<span className="text-amber-400">DROP</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                VIP
              </span>
            </div>
            <p className="text-[11px] text-slate-400 tracking-wide font-medium">
              Private Electronics Community
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <a href="#giveaway" className="hover:text-amber-400 transition-colors">
            Giveaway Scale
          </a>
          <a href="#telegram-drops" className="hover:text-amber-400 transition-colors">
            Telegram Drops
          </a>
          <a href="#recipients" className="hover:text-amber-400 transition-colors">
            6 Winners Wall
          </a>
          <a href="#what-you-get" className="hover:text-amber-400 transition-colors">
            What You Get
          </a>
          <a href="#how-it-works" className="hover:text-amber-400 transition-colors">
            How It Works
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-xs text-slate-400">One-Time Fee</span>
            <span className="text-sm font-extrabold text-amber-400 font-mono">{SITE_CONFIG.membershipFee}</span>
          </div>

          <a
            href={SITE_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Join Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
