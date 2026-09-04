"use client";

import React from "react";
import { Zap, Tag, BellRing, Flame, Gift, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const MembershipPerks = () => {
  const perks = [
    {
      icon: Zap,
      badge: "⚡ LIMITED-TIME DEAL DROPS",
      description: "Deals are posted when selected vendors release discounted inventory.",
    },
    {
      icon: Tag,
      badge: "🏷️ EXCLUSIVE VENDOR OFFERS",
      description: "Access offers sourced from selected electronics vendors.",
    },
    {
      icon: BellRing,
      badge: "📲 TELEGRAM ALERTS",
      description: "Get notified when new deals go live.",
    },
    {
      icon: Flame,
      badge: "🔥 UP TO 50% OFF SELECTED ELECTRONICS",
      description: "Discount levels vary by product, vendor and available inventory.",
    },
    {
      icon: Gift,
      badge: "🎁 COMMUNITY PROMOTIONS",
      description: "Eligible members can participate in applicable giveaways and other community promotions.",
    },
  ];

  return (
    <section id="what-you-get" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
            Membership Value Breakdown
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            {SITE_CONFIG.membershipFee} GETS YOU INSIDE.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            You&apos;re not paying {SITE_CONFIG.membershipFee} for an iPhone. You&apos;re joining a private electronics community built around finding great deals — with iPhone giveaways and other promotions along the way.
          </p>
        </div>

        {/* 5 Distinct Cards: 2 on top, 3 on bottom for balanced luxury look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {perks.map((perk, idx) => {
            const IconComponent = perk.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 p-8 flex flex-col justify-between transition-all hover:-translate-y-1 shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                      PERK 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight mb-3">
                    {perk.badge}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {perk.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Included with {SITE_CONFIG.membershipFee}
                  </span>
                  <span className="font-mono text-slate-400">Instant Access</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contextual disclaimer directly below the benefits */}
        <div className="text-center text-xs text-slate-400 max-w-xl mx-auto">
          *Note: Not every product is 50% off. Discount levels strictly depend on individual vendor allocations and remaining inventory.
        </div>

      </div>
    </section>
  );
};
