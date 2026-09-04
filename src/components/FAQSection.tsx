"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is the ₹299 payment for an iPhone?",
      a: "No. ₹299 is the membership fee for access to the private electronics-deal community. iPhone giveaways are separate promotional activities subject to their applicable terms.",
    },
    {
      q: "Will I definitely receive an iPhone?",
      a: "No. Giveaway prizes are not guaranteed. Eligibility and winner selection are governed by the applicable Giveaway Terms.",
    },
    {
      q: "How does the 100-participant system work?",
      a: "For every 100 eligible participants, one iPhone 17 Pro is allocated to the applicable giveaway. The exact eligibility and participant-counting rules are provided in the official Giveaway Terms.",
    },
    {
      q: "Are all products 50% off?",
      a: "No. Discounts vary by product, vendor and availability. Selected deals may offer discounts of up to 50%.",
    },
    {
      q: "How long do deals last?",
      a: "Deals may be available for a limited time or until the relevant vendor's inventory or promotional allocation is exhausted.",
    },
    {
      q: "How do I get access?",
      a: "After completing membership, you'll receive instructions for joining the private Telegram community.",
    },
    {
      q: "Are you affiliated with Apple?",
      a: "Unless expressly stated otherwise, we are an independent electronics community and are not affiliated with Apple, Samsung or other electronics manufacturers.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#030712] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Everything you need to know about the {SITE_CONFIG.communityName} community, deals, and giveaway mechanics.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 shadow-lg ${
                  isOpen
                    ? "bg-slate-900 border-amber-500/40"
                    : "bg-slate-900/70 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-7 py-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-amber-500/20 border-amber-500/40" : ""
                    }`}
                  >
                    <ChevronDown className={`w-4 h-4 ${isOpen ? "text-amber-400" : "text-slate-300"}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-7 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
