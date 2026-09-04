"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Layers, Bell } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32">
      {/* Background glow flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-sky-500/15 via-amber-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & High-Converting Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                Official Telegram Community Launch
              </span>
            </div>

            {/* Headline verbatim */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-5">
              🍎 WE&apos;RE GIVING AWAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-white">iPHONE 17 PROs.</span>
            </h1>

            {/* Subheadline verbatim */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium tracking-tight mb-8 leading-snug">
              And we&apos;re building a private electronics community while we&apos;re at it.
            </p>

            {/* Prominently displayed ratio card */}
            <div className="w-full bg-gradient-to-r from-amber-500/15 via-slate-900/90 to-sky-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 mb-8 backdrop-blur-md relative overflow-hidden shadow-xl">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                THE ACQUISITION HOOK
              </div>

              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight mb-3">
                FOR EVERY 100 ELIGIBLE PARTICIPANTS → 1 iPHONE 17 PRO
              </div>

              {/* Milestone sequence verbatim */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-white/10 font-mono text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg border border-white/5">
                  <span className="text-amber-400 font-bold">100 participants</span>
                  <span className="text-slate-400">→</span>
                  <span className="font-semibold text-white">1 iPhone 17 Pro</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg border border-white/5">
                  <span className="text-amber-400 font-bold">200 participants</span>
                  <span className="text-slate-400">→</span>
                  <span className="font-semibold text-white">2 iPhone 17 Pros</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg border border-white/5">
                  <span className="text-amber-400 font-bold">300 participants</span>
                  <span className="text-slate-400">→</span>
                  <span className="font-semibold text-white">3 iPhone 17 Pros</span>
                </div>
              </div>
            </div>

            {/* Explanation paragraph verbatim */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Join our private electronics community for {SITE_CONFIG.membershipFee} and get access to limited-time electronics deals from selected vendors, with discounts of up to 50% on selected products.
            </p>

            {/* CTA Block */}
            <div className="w-full sm:w-auto flex flex-col items-start gap-3">
              <a
                href={SITE_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-center justify-center text-lg px-8 py-5 group"
              >
                <span>JOIN THE COMMUNITY — {SITE_CONFIG.membershipFee}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              {/* Mandatory Small Disclosure directly below CTA */}
              <p className="text-xs text-slate-400 max-w-xl leading-relaxed mt-1">
                {SITE_CONFIG.membershipFee} is the membership fee for access to the private community and its deals. Giveaway participation is subject to eligibility and the official Giveaway Terms. Membership does not guarantee a prize.
              </p>
            </div>

            {/* Quick feature highlights */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 w-full text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Private Deal Drops</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Instant Telegram Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent Rules</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dominant iPhone 17 Pro Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-sky-500/20 to-transparent blur-3xl -z-10 rounded-full scale-110" />

            <div className="relative w-full max-w-[480px] lg:max-w-none">
              
              {/* Main iPhone 17 Pro Render Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-slate-900/90 to-black/95 p-3 shadow-2xl shadow-black/80 group">
                <div className="relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/hero-iphone17.jpg"
                    alt="iPhone 17 Pro Titanium Flagship Giveaway Prize"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle inner gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Overlaid Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Target Prize: iPhone 17 Pro
                  </div>

                  {/* Bottom Overlaid Metric */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/75 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                        GIVEAWAY RATIO
                      </div>
                      <div className="text-sm font-bold text-white">
                        1 iPhone : 100 Eligible Members
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                        MEMBERSHIP
                      </div>
                      <div className="text-sm font-extrabold text-amber-400">
                        {SITE_CONFIG.membershipFee}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Spec Tags */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 bg-slate-900/90 border border-white/15 px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md text-xs font-medium text-slate-200">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Genuine Flagship Inventory</span>
              </div>

              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-slate-900/90 border border-white/15 px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md text-xs font-medium text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Zero Fake Scarcity • Real Offer</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
