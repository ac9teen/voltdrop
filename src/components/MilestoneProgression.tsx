"use client";

import React from "react";
import { Trophy, Smartphone, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const MilestoneProgression = () => {
  return (
    <section id="giveaway" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
            <Trophy className="w-3.5 h-3.5" />
            Transparent Milestone Scaling
          </div>

          {/* Headline verbatim */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            THE MORE THE COMMUNITY GROWS, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
              THE MORE iPHONES WE GIVE AWAY.
            </span>
          </h2>

          {/* Copy verbatim */}
          <div className="text-base sm:text-lg text-slate-300 space-y-2 leading-relaxed">
            <p>We&apos;re not doing one tiny giveaway and calling it a day.</p>
            <p>We&apos;re tying the number of iPhones we give away to the size of the community.</p>
            <p className="font-semibold text-white pt-1">
              Every additional 100 eligible participants unlocks another iPhone 17 Pro giveaway.
            </p>
          </div>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SITE_CONFIG.milestones.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 p-7 flex flex-col justify-between transition-all hover:-translate-y-1.5 shadow-xl group"
            >
              {/* Card top */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    TIER 0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {item.status}
                  </span>
                </div>

                {/* Big Number */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black text-white group-hover:text-amber-400 transition-colors font-mono">
                      {item.iphones}
                    </span>
                    <span className="text-xl font-bold text-slate-300">
                      {item.iphones === 1 ? "iPhone" : "iPhones"}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-amber-400/90 flex items-center gap-1.5 mt-1">
                    <Smartphone className="w-4 h-4" />
                    <span>{item.prize}</span>
                  </div>
                </div>
              </div>

              {/* Requirement Rule */}
              <div className="pt-5 mt-4 border-t border-slate-800">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  Eligible Threshold
                </div>
                <div className="text-sm font-bold text-white font-mono">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Summary Box */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-700 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              100% Verifiable &amp; Objective
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              No artificial caps. No hidden algorithms. Every block of 100 eligible participants triggers an additional allocation per official Giveaway Terms.
            </p>
          </div>

          <a
            href={SITE_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-gold shrink-0 w-full sm:w-auto text-center py-4 px-8 text-base"
          >
            <span>JOIN FOR {SITE_CONFIG.membershipFee} →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
