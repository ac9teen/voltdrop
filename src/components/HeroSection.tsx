"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Bell, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-sky-500/15 via-amber-500/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & High-Converting Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Top Launch Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm mb-6">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Official Private Community Launch
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-bold text-amber-400 font-mono">
                {SITE_CONFIG.membershipFee}
              </span>
            </div>

            {/* Headline verbatim */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-5">
              🍎 WE&apos;RE GIVING AWAY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
                iPHONE 17 PROs.
              </span>
            </h1>

            {/* Subheadline verbatim */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium tracking-tight mb-8 leading-relaxed max-w-2xl">
              And we&apos;re building a private electronics community while we&apos;re at it.
            </p>

            {/* Prominently displayed ratio card */}
            <div className="w-full bg-slate-900/80 border border-slate-700/80 rounded-2xl p-6 sm:p-7 mb-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  THE GIVEAWAY SYSTEM
                </span>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  100% Mathematical
                </span>
              </div>

              {/* Bold Ratio Callout */}
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight mb-4">
                FOR EVERY 100 ELIGIBLE PARTICIPANTS → 1 iPHONE 17 PRO
              </div>

              {/* Milestone breakdown verbatim */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 font-mono text-xs sm:text-sm">
                <div className="flex items-center justify-between sm:justify-start gap-2 bg-slate-950/70 px-3.5 py-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-300 font-medium">100 participants</span>
                  <span className="text-slate-500">→</span>
                  <span className="font-bold text-amber-400">1 iPhone 17 Pro</span>
                </div>
                <div className="flex items-center justify-between sm:justify-start gap-2 bg-slate-950/70 px-3.5 py-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-300 font-medium">200 participants</span>
                  <span className="text-slate-500">→</span>
                  <span className="font-bold text-amber-400">2 iPhone 17 Pros</span>
                </div>
                <div className="flex items-center justify-between sm:justify-start gap-2 bg-slate-950/70 px-3.5 py-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-300 font-medium">300 participants</span>
                  <span className="text-slate-500">→</span>
                  <span className="font-bold text-amber-400">3 iPhone 17 Pros</span>
                </div>
              </div>
            </div>

            {/* Explanation paragraph verbatim */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Join our private electronics community for <strong className="text-white font-bold">{SITE_CONFIG.membershipFee}</strong> and get access to limited-time electronics deals from selected vendors, with discounts of up to 50% on selected products.
            </p>

            {/* CTA Block */}
            <div className="w-full sm:w-auto flex flex-col items-start gap-3">
              <a
                href={SITE_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-gold w-full sm:w-auto text-center text-lg px-9 py-5 group"
              >
                <span>JOIN THE COMMUNITY — {SITE_CONFIG.membershipFee}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              {/* Mandatory Small Disclosure directly below CTA */}
              <p className="text-xs text-slate-400 max-w-xl leading-relaxed mt-1">
                {SITE_CONFIG.membershipFee} is the membership fee for access to the private community and its deals. Giveaway participation is subject to eligibility and the official Giveaway Terms. Membership does not guarantee a prize.
              </p>
            </div>

            {/* High-conversion trust highlights */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 w-full text-slate-400 text-xs font-medium">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Private Deal Drops</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Telegram Drop Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Auditable Terms</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dominant iPhone 17 Pro Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-sky-500/20 to-transparent blur-3xl -z-10 rounded-full scale-110" />

            <div className="relative w-full max-w-[500px]">
              
              {/* Main iPhone 17 Pro Render */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl p-3 group">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/hero-iphone17.jpg"
                    alt="Apple iPhone 17 Pro Natural Titanium Flagship"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle inner gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Pill Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Target Giveaway Prize: iPhone 17 Pro
                  </div>

                  {/* Bottom Overlaid Metric */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl px-4 py-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                        GIVEAWAY FORMULA
                      </div>
                      <div className="text-sm font-bold text-white">
                        1 iPhone : 100 Eligible Members
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                        COMMUNITY ACCESS
                      </div>
                      <div className="text-base font-extrabold text-amber-400 font-mono">
                        {SITE_CONFIG.membershipFee}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Spec Tags */}
              <div className="absolute -bottom-4 -left-3 hidden sm:flex items-center gap-2 bg-slate-900/95 border border-slate-700 px-4 py-2 rounded-xl shadow-xl backdrop-blur-md text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Brand New Sealed Retail Units</span>
              </div>

              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-slate-900/95 border border-slate-700 px-4 py-2 rounded-xl shadow-xl backdrop-blur-md text-xs font-semibold text-slate-200">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Zero Scarcity Tricks • Real Offer</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
