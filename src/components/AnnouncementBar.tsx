import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const AnnouncementBar = () => {
  return (
    <aside aria-label="Announcement" className="w-full bg-gradient-to-r from-sky-950/60 via-amber-950/40 to-sky-950/60 border-b border-white/10 px-4 py-2 text-xs font-medium text-slate-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
          <span className="inline-flex items-center gap-1.5 font-semibold text-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
            OFFICIAL TELEGRAM COMMUNITY
          </span>
          <span className="hidden sm:inline text-slate-400">•</span>
          <span className="hidden sm:inline text-slate-300">
            {SITE_CONFIG.membershipFee} One-Time Membership Fee
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-slate-400 ml-auto sm:ml-0">
          <span className="flex items-center gap-1 text-sky-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            1 iPhone 17 Pro per 100 Eligible Members
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-400">Giveaway terms apply</span>
        </div>
      </div>
    </aside>
  );
};
