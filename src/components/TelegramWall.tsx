"use client";

import React from "react";
import Image from "next/image";
import { Send, Bell, Flame, Zap, Shield, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const TelegramWall = () => {
  return (
    <section id="telegram-drops" className="py-20 lg:py-28 relative overflow-hidden bg-[#060609] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-4">
            <Send className="w-3.5 h-3.5" />
            Live Telegram Feed Preview
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            WHERE THE DROPS ACTUALLY HAPPEN.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Inside the private channel, selected vendors push limited-time pricing and flash allocations. Members get instant push notifications before stock runs out.
          </p>
        </div>

        {/* Telegram Showcase Grid: Phone Screenshot + Live Drop Feed Wall */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Column 1: Vertical Telegram Phone Screenshot */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] rounded-[36px] p-3 bg-gradient-to-b from-slate-700 via-slate-900 to-black border-2 border-white/20 shadow-2xl shadow-sky-950/50">
              {/* Top speaker notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20" />
              
              {/* Screen container */}
              <div className="relative aspect-[9/16] w-full rounded-[28px] overflow-hidden bg-slate-950 border border-white/10 shadow-inner">
                <Image
                  src="/images/telegram-preview-1.jpg"
                  alt="VoltDrop VIP Deals Telegram Group Screenshot"
                  fill
                  sizes="(max-width: 768px) 340px, 340px"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating notification badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white">Live Deal Drops Active</span>
                </div>
                <span className="text-sky-400 font-bold font-mono">Telegram Push</span>
              </div>
            </div>
          </div>

          {/* Column 2: Vertical Wall Cards & Features */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-400" />
              Example Telegram Drop Cards
            </div>

            {/* Telegram simulated card 1 */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-900/50 border border-white/10 hover:border-sky-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300 uppercase">
                    Drop Alert
                  </span>
                  <span className="text-xs text-slate-400 font-mono">10:05 AM</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  Sony WH-1000XM5 Wireless ANC Headphones
                </h4>
                <p className="text-xs text-slate-300">
                  Selected vendor liquidation. 42% off MSRP. Limited allocated quantity.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-slate-300">
                  🔥 432 reactions
                </span>
              </div>
            </div>

            {/* Telegram simulated card 2 */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-900/50 border border-white/10 hover:border-sky-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-400/20 text-sky-300 uppercase">
                    Surplus Batch
                  </span>
                  <span className="text-xs text-slate-400 font-mono">9:52 AM</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  Apple AirPods Pro (2nd Gen) with MagSafe Case
                </h4>
                <p className="text-xs text-slate-300">
                  Authorized surplus batch. Flash promotional pricing posted.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-slate-300">
                  ⚡ 510 reactions
                </span>
              </div>
            </div>

            {/* Telegram simulated card 3 */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-900/50 border border-white/10 hover:border-sky-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-400/20 text-emerald-300 uppercase">
                    Community Announcement
                  </span>
                  <span className="text-xs text-slate-400 font-mono">8:30 AM</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  iPhone 17 Pro Milestone 1 Giveaway Update
                </h4>
                <p className="text-xs text-slate-300">
                  First 100 eligible participant milestone status and verification notices.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-emerald-400 font-semibold">
                  🎁 Giveaway
                </span>
              </div>
            </div>

            {/* Joining Instructions Note */}
            <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/20 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-400" />
                Access instructions dispatched immediately after ₹299 membership checkout.
              </span>
              <a
                href={SITE_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 font-bold hover:underline flex items-center gap-1 shrink-0 ml-2"
              >
                Join Now <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
