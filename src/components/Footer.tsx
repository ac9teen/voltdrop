"use client";

import React from "react";
import { Zap, Mail, Send, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#050507] py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center">
              <Zap className="w-4 h-4 text-amber-400 fill-current" />
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-tight font-mono">
                VOLT<span className="text-amber-400">DROP</span>
              </span>
              <p className="text-[11px] text-slate-400">
                Private Electronics Deals & iPhone Giveaways
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <a href="#giveaway" className="hover:text-white transition-colors">
              Giveaway Mechanics
            </a>
            <a href="#telegram-drops" className="hover:text-white transition-colors">
              Telegram Feed
            </a>
            <a href="#recipients" className="hover:text-white transition-colors">
              6 Recipients Wall
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#giveaway-terms" className="hover:text-white transition-colors">
              Giveaway Terms
            </a>
          </div>

          {/* Support Concierge */}
          <div className="flex items-center gap-2 text-slate-400">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Support:</span>
            <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-slate-300 hover:text-white underline">
              {SITE_CONFIG.supportEmail}
            </a>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.communityFullName}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Independent electronics community. Not affiliated with Apple Inc., Samsung, or Sony.
          </p>
        </div>
      </div>
    </footer>
  );
};
