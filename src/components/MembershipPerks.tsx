"use client";

import React from "react";
import { Zap, Tag, BellRing, Flame, Gift } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const MembershipPerks = () => {
  const perks = [
    {
      icon: Zap,
      badge: "⚡ LIMITED-TIME DEAL DROPS",
      badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
      description: "Deals are posted when selected vendors release discounted inventory.",
      accent: "from-amber-500/20 to-transparent",
    },
    {
      icon: Tag,
      badge: "🏷️ EXCLUSIVE VENDOR OFFERS",
      badgeColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
      description: "Access offers sourced from selected electronics vendors.",
      accent: "from-sky-500/20 to-transparent",
    },
    {
      icon: BellRing,
      badge: "📲 TELEGRAM ALERTS",
      badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
      description: "Get notified when new deals go live.",
      accent: "from-blue-500/20 to-transparent",
    },
    {
      icon: Flame,
      badge: "🔥 UP TO 50% OFF SELECTED ELECTRONICS",
      badgeColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
      description: "Discount levels vary by product, vendor and available inventory.",
      accent: "from-rose-500/20 to-transparent",
    },
    {
      icon: Gift,
      badge: "🎁 COMMUNITY PROMOTIONS",
      badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
      description: "Eligible members can participate in applicable giveaways and other community promotions.",
      accent: "from-purple-500/20 to-transparent",
    },
  ];

  return (
    <section id="what-you-get" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#08080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
            Total Transparency & Value
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            {SITE_CONFIG.membershipFee} GETS YOU INSIDE.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            You&apos;re not paying {SITE_CONFIG.membershipFee} for an iPhone. You&apos;re joining a private electronics community built around finding great deals — with iPhone giveaways and other promotions along the way.
          </p>
        </div>

        {/* 5 Distinct Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, idx) => {
            const IconComponent = perk.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 p-7 flex flex-col justify-between hover:border-white/25 transition-all group overflow-hidden ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${perk.accent} blur-2xl pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      PERK 0{idx + 1}
                    </span>
                  </div>

                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-4 ${perk.badgeColor}`}>
                    {perk.badge}
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                    {perk.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Included with membership</span>
                  <span className="text-emerald-400 font-semibold">Active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contextual disclaimer directly below the benefits */}
        <div className="mt-8 text-center text-xs text-slate-400">
          *Note: Not every product is 50% off. Discount levels strictly depend on individual vendor allocations and remaining inventory.
        </div>

      </div>
    </section>
  );
};
