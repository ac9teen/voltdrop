"use client";

import React from "react";
import { ShieldCheck, Scale, CheckCircle, FileText, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const TrustSection = () => {
  return (
    <section className="py-20 lg:py-28 relative bg-[#070709] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with verbatim trust copy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Integrity First Approach
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            REAL DEALS. REAL GIVEAWAYS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-white">
              CLEAR TERMS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Membership gives you access to the private electronics community. Deals vary by vendor and inventory. Giveaway eligibility and prize allocation are governed by the applicable giveaway terms.
          </p>
        </div>

        {/* 4 Pillars of Credibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Flat {SITE_CONFIG.membershipFee} Fee
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Zero hidden recurring charges or automated debits. One single payment grants you direct access to the Telegram community.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-emerald-400">
              Transparent Pricing
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4 text-sky-400">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Predictable 100:1 Ratio
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We strictly tie our giveaways to community volume. For every 100 eligible participants, an iPhone 17 Pro is allocated.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-sky-400">
              Mathematical Model
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-amber-400">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Auditable Rules
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Giveaway qualification, verification, and winner determination are set in stone in our public Giveaway Terms.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-amber-400">
              Explicit Terms
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                No Fake Scarcity
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We do not use artificial countdown timers, fake participant numbers, or manipulative popups. You get straight facts.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-purple-400">
              Ad Compliant & Honest
            </div>
          </div>

        </div>

        {/* Future Testimonials Placeholder note clearly marked per instructions */}
        <div className="rounded-2xl border border-dashed border-white/15 bg-black/40 p-6 text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Community Member Reviews Archive
          </span>
          <p className="text-xs text-slate-400 leading-relaxed">
            [This section is designated for verified recipient unboxing videos and community feedback as milestone deliveries are dispatched. No fabricated reviews are published.]
          </p>
        </div>

      </div>
    </section>
  );
};
