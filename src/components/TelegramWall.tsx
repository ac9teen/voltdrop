"use client";

import React from "react";
import Image from "next/image";
import { Send, Bell, Flame, Zap, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const TelegramWall = () => {
  return (
    <section id="telegram-drops" className="py-20 lg:py-28 relative overflow-hidden border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
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

        {/* Telegram Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Column 1: Vertical Telegram Phone Screenshot */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] rounded-[42px] p-3.5 bg-gradient-to-b from-slate-700 via-slate-900 to-black border-2 border-slate-600/80 shadow-2xl shadow-sky-950/40">
              {/* Top speaker notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20" />
              
              {/* Screen container */}
              <div className="relative aspect-[9/16] w-full rounded-[32px] overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                <Image
                  src="/images/telegram-preview-1.jpg"
                  alt="VoltDrop VIP Deals Telegram Channel Feed"
                  fill
                  sizes="(max-width: 768px) 360px, 360px"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating status tag */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl p-3 shadow-xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-white">Channel Alerts Active</span>
                </div>
                <span className="text-sky-400 font-bold font-mono">Telegram Push</span>
              </div>
            </div>
          </div>

          {/* Column 2: Live Drop Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-400" />
              Sample Deals Pushed to Members
            </div>

            {/* Telegram simulated drop card 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-all shadow-xl">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase">
                    ⚡ Drop Alert
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Today, 10:05 AM</span>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  42% OFF
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">
                Sony WH-1000XM5 Wireless Noise Cancelling Headphones
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Selected vendor authorized liquidation. Sealed black &amp; silver units. Direct ordering link active for verified members.
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800 text-xs">
                <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200 font-medium">
                  🔥 432 reactions
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200 font-medium">
                  ⚡ 189 claimed
                </span>
              </div>
            </div>

            {/* Telegram simulated drop card 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-all shadow-xl">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-400/20 text-sky-300 border border-sky-400/30 uppercase">
                    🔥 Flash Deal
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Today, 9:52 AM</span>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Up to 35% OFF
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">
                Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C)
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Exclusive surplus batch from partner distributor. Limited allocated quantity.
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800 text-xs">
                <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200 font-medium">
                  ⚡ 510 reactions
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200 font-medium">
                  🏷️ Fast shipping
                </span>
              </div>
            </div>

            {/* Joining Callout */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  Instant Telegram Channel Dispatch
                </div>
                <p className="text-xs text-slate-300">
                  Access instructions and private join links dispatched immediately after checkout.
                </p>
              </div>

              <a
                href={SITE_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-gold text-xs py-3 px-5 shrink-0 text-center font-bold"
              >
                <span>Join for {SITE_CONFIG.membershipFee}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
