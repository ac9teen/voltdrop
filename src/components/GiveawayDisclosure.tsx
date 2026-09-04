"use client";

import React, { useState } from "react";
import { FileText, ChevronRight, X, ShieldAlert } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const GiveawayDisclosure = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="giveaway-terms" className="py-14 border-t border-white/5 bg-[#050508] text-xs text-slate-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compliance Box */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div className="flex items-center gap-2 font-bold text-slate-300 uppercase tracking-wider text-xs mb-3">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            Mandatory Statutory & Promotional Disclosure
          </div>

          <p className="leading-relaxed text-slate-400 mb-5">
            <strong className="text-slate-200">Giveaway Disclosure:</strong> iPhone giveaways are promotional activities operated by {SITE_CONFIG.communityFullName}. Eligibility requirements, giveaway periods, participant qualification, prize allocation, winner-selection method and other conditions are provided in the applicable Giveaway Terms. The {SITE_CONFIG.membershipFee} payment purchases community membership and access to its content and deals; it does not purchase or guarantee an iPhone or a winning outcome. Apple is not a sponsor, participant or administrator of the giveaway unless expressly stated. iPhone is a trademark of Apple Inc.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5 text-[11px]">
            <div className="text-slate-400">
              Commercial Membership Agreement • Version 2026.1 • Independent Community
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-semibold underline underline-offset-4 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Read Full Official Giveaway Terms & Verification Rules</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

      {/* Terms Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#0d0d14] border border-white/20 rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                Official Giveaway Terms & Conditions
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-normal">
              <p>
                <strong>1. Nature of the Service:</strong> The {SITE_CONFIG.membershipFee} charge is strictly a membership fee granting access to the {SITE_CONFIG.communityFullName} private Telegram channel, curated electronics vendor deal drops, and community discussions. It is neither a lottery ticket nor a direct purchase of consumer electronics.
              </p>
              <p>
                <strong>2. Giveaway Mechanics & Ratio:</strong> For every 100 verified eligible participants joining during an active qualification cycle, one (1) brand-new iPhone 17 Pro retail unit is designated for allocation to an eligible community member.
              </p>
              <p>
                <strong>3. Eligibility Requirements:</strong> Participants must be at least 18 years of age, legally resident in eligible jurisdictions, and hold an active, verified Telegram account. Automated scripts, bots, duplicate profiles, or chargeback disputes immediately disqualify participation.
              </p>
              <p>
                <strong>4. Winner Selection & Audit:</strong> Winner allocation is conducted objectively and transparently per established schedule once the respective 100-participant block is verified. Results and delivery verifications are published to the community.
              </p>
              <p>
                <strong>5. No Guarantee:</strong> Membership does not guarantee a prize or return on payment. Deals vary by vendor, stock, and timing.
              </p>
              <p>
                <strong>6. Trademark Notice:</strong> Apple Inc. is not affiliated with, nor a sponsor or endorser of this promotion.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="btn-secondary text-xs py-2 px-5"
              >
                Close Terms
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
