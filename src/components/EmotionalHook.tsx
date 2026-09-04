"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const EmotionalHook = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#070709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-[#0e0e15] to-black p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Subtle background refraction */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-6 flex flex-col items-start z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-bold uppercase tracking-wider text-amber-300 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Aspirational Reality
              </div>

              {/* Headline verbatim */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                YOU COULD BE HOLDING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-white">
                  ONE OF THESE.
                </span>
              </h2>

              {/* Copy verbatim */}
              <div className="space-y-3 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
                <p>We&apos;re building the community.</p>
                <p>We&apos;re giving the community something back.</p>
                <p className="text-white font-semibold pt-2">
                  Every 100 eligible participants = another iPhone 17 Pro giveaway.
                </p>
              </div>

              {/* Bulleted trust guarantees */}
              <div className="space-y-3 mb-10 text-sm text-slate-400">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Physical brand-new sealed retail units</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Delivered directly to verified eligible recipients</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent allocation strictly governed by Giveaway Terms</span>
                </div>
              </div>

              {/* CTA verbatim */}
              <div className="w-full sm:w-auto">
                <a
                  href={SITE_CONFIG.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto text-center justify-center text-lg px-8 py-5"
                >
                  <span>JOIN FOR {SITE_CONFIG.membershipFee} →</span>
                </a>
                <p className="text-[11px] text-slate-400 mt-2.5 max-w-md">
                  Membership does not guarantee a winning outcome. Official Giveaway Terms apply to all participant qualification.
                </p>
              </div>
            </div>

            {/* Right visual column: Hand holding iPhone 17 Pro */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl shadow-black group">
                <Image
                  src="/images/holding-iphone17.jpg"
                  alt="Holding brand new iPhone 17 Pro in hand"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">iPhone 17 Pro Retail Box</span>
                    <span className="text-[11px] text-slate-400">Awarded to eligible community members</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">1:100 Ratio</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
