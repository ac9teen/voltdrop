"use client";

import React from "react";
import { UserPlus, Send, Tag, Gift, Users, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "JOIN",
      description: `Pay ${SITE_CONFIG.membershipFee} for access to the private community.`,
      icon: UserPlus,
    },
    {
      step: "02",
      title: "GET TELEGRAM ACCESS",
      description: "Receive instructions to join the private Telegram group.",
      icon: Send,
    },
    {
      step: "03",
      title: "CATCH THE DEALS",
      description: "Get access to limited-time electronics deals as they're posted.",
      icon: Tag,
    },
    {
      step: "04",
      title: "WATCH THE GIVEAWAYS",
      description: "Eligible members can participate in applicable community promotions.",
      icon: Gift,
    },
    {
      step: "05",
      title: "MORE MEMBERS, MORE IPHONES",
      description: "For every 100 eligible participants, another iPhone 17 Pro is given away.",
      icon: Users,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
            Simple 5-Step Process
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            HOW IT WORKS
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            From checkout to Telegram alerts and community promotions in under 60 seconds.
          </p>
        </div>

        {/* 5 Steps Grid: 3 on top row, 2 centered on bottom row for generous width and breathing room! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-7 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono text-amber-400">
                      {item.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                  Step {idx + 1} of 5
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom 2 steps: Centered and wide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          {steps.slice(3, 5).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx + 3}
                className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-7 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono text-amber-400">
                      {item.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                  Step {idx + 4} of 5
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="text-center">
          <a
            href={SITE_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-gold inline-flex"
          >
            <span>START WITH STEP 01 — {SITE_CONFIG.membershipFee}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
