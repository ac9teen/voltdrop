"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const EmotionalHook = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-slate-700/80 bg-slate-900/80 p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-400 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Physical Product Reality
              </div>

              {/* Headline verbatim */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                YOU COULD BE HOLDING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
                  ONE OF THESE.
                </span>
              </h2>

              {/* Copy verbatim */}
              <div className="space-y-3 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-8">
                <p>We&apos;re building the community.</p>
                <p>We&apos;re giving the community something back.</p>
                <p className="text-white font-bold text-xl pt-2">
                  Every 100 eligible participants = another iPhone 17 Pro giveaway.
                </p>
              </div>

              {/* Credibility points */}
              <div className="space-y-3.5 mb-10 text-sm sm:text-base text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Physical brand-new sealed retail iPhone units</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Delivered directly to verified eligible recipients</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Governed strictly by public Giveaway Terms</span>
                </div>
              </div>

              {/* CTA verbatim */}
              <div className="w-full sm:w-auto">
                <a
                  href={SITE_CONFIG.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-gold w-full sm:w-auto text-center text-lg px-9 py-5"
                >
                  <span>JOIN FOR {SITE_CONFIG.membershipFee} →</span>
                </a>
                <p className="text-xs text-slate-400 mt-3 max-w-md leading-relaxed">
                  Membership does not guarantee a winning outcome. Official Giveaway Terms apply to all participant qualification.
                </p>
              </div>
            </div>

            {/* Right visual column: Hand holding iPhone 17 Pro */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl group">
                <Image
                  src="/images/holding-iphone17.jpg"
                  alt="Holding brand new iPhone 17 Pro in hand"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl p-3.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">iPhone 17 Pro Retail Hardware</span>
                    <span className="text-xs text-slate-400">Awarded to eligible community members</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                    1:100 Ratio
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
