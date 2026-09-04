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
      color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    },
    {
      step: "02",
      title: "GET TELEGRAM ACCESS",
      description: "Receive instructions to join the private Telegram group.",
      icon: Send,
      color: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    },
    {
      step: "03",
      title: "CATCH THE DEALS",
      description: "Get access to limited-time electronics deals as they're posted.",
      icon: Tag,
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    },
    {
      step: "04",
      title: "WATCH THE GIVEAWAYS",
      description: "Eligible members can participate in applicable community promotions.",
      icon: Gift,
      color: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    },
    {
      step: "05",
      title: "MORE MEMBERS, MORE IPHONES",
      description: "For every 100 eligible participants, another iPhone 17 Pro is given away.",
      icon: Users,
      color: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative bg-[#08080d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
            Simple 5-Step Process
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            HOW IT WORKS
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            From checkout to Telegram alerts and community promotions in under 60 seconds.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-white/40 group-hover:text-amber-400 transition-colors">
                      {item.step}
                    </span>
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-black tracking-wide text-white uppercase mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-400 font-mono">
                  Step {idx + 1} of 5
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
            className="btn-primary inline-flex"
          >
            <span>START WITH STEP 01 — {SITE_CONFIG.membershipFee}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
