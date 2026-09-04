"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#070709] via-[#0e0e16] to-[#070709] border-t border-white/5">
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-amber-500/15 via-sky-500/15 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Limited Access Community
        </div>

        {/* Headline verbatim */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          READY TO GET INSIDE?
        </h2>

        {/* Subheadline verbatim */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Join the private electronics community for {SITE_CONFIG.membershipFee}, catch limited-time deals, and take part in eligible community giveaways.
        </p>

        {/* Big CTA */}
        <div className="flex flex-col items-center gap-4">
          <a
            href={SITE_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg sm:text-xl px-10 py-5 w-full sm:w-auto shadow-2xl group"
          >
            <span>JOIN THE COMMUNITY — {SITE_CONFIG.membershipFee} →</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </a>

          {/* Under text verbatim */}
          <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
            One-time membership fee • Private Telegram access • Deals vary by vendor and inventory • Giveaway terms apply
          </p>
        </div>

        {/* Security / Guarantee Micro-tags */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Instant Telegram Link Dispatch</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>1 iPhone 17 Pro per 100 Eligible Members</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Official Giveaway Terms Bound</span>
          </div>
        </div>

      </div>
    </section>
  );
};
