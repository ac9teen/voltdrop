"use client";

import React from "react";
import { ArrowRight, Trophy, Smartphone, Users, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const MilestoneProgression = () => {
  return (
    <section id="giveaway" className="py-20 lg:py-28 relative border-t border-white/5 bg-gradient-to-b from-[#070709] via-[#0c0c11] to-[#070709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-4">
            <Trophy className="w-3.5 h-3.5" />
            Transparent Milestone Scaling
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            THE MORE THE COMMUNITY GROWS, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
              THE MORE iPHONES WE GIVE AWAY.
            </span>
          </h2>

          <div className="text-base sm:text-lg text-slate-300 space-y-3 leading-relaxed">
            <p>We&apos;re not doing one tiny giveaway and calling it a day.</p>
            <p>We&apos;re tying the number of iPhones we give away to the size of the community.</p>
            <p className="font-semibold text-white">
              Every additional 100 eligible participants unlocks another iPhone 17 Pro giveaway.
            </p>
          </div>
        </div>

        {/* Milestone Progression Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SITE_CONFIG.milestones.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-6 flex flex-col justify-between hover:border-amber-400/40 transition-all group hover:-translate-y-1.5 shadow-lg"
            >
              {/* Card top badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-black/50 border border-white/10 text-slate-300">
                  TIER 0{idx + 1}
                </span>
                <span className="text-[11px] font-semibold text-amber-300/90 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-amber-400" />
                  {item.status}
                </span>
              </div>

              {/* Central Prize Quantity */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black text-white group-hover:text-amber-300 transition-colors font-mono">
                    {item.iphones}
                  </span>
                  <span className="text-xl font-bold text-slate-300">
                    {item.iphones === 1 ? "iPhone" : "iPhones"}
                  </span>
                </div>
                <div className="text-sm font-semibold text-amber-400 flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4" />
                  <span>{item.prize}</span>
                </div>
              </div>

              {/* Requirement Rule */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  Eligible Count:
                </span>
                <span className="font-bold text-white font-mono">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Logic Summary Banner */}
        <div className="rounded-2xl bg-black/60 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              100% Mathematical & Rule-Governed
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              No artificial caps. No hidden algorithms. Every block of 100 eligible participants triggers an additional allocation per official Giveaway Terms.
            </p>
          </div>

          <a
            href={SITE_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0 w-full sm:w-auto text-center"
          >
            <span>JOIN FOR {SITE_CONFIG.membershipFee} →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
