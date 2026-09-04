"use client";

import React from "react";
import { Smartphone, Headphones, Zap, Watch, Laptop, Cpu, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const DealsShowcase = () => {
  const iconMap: Record<string, React.ElementType> = {
    Smartphone,
    Headphones,
    Zap,
    Watch,
    Laptop,
    Cpu,
  };

  return (
    <section className="py-20 lg:py-28 relative bg-[#030712] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact positioning headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
            Core Value Proposition
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            THE GIVEAWAYS GET THE ATTENTION. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
              THE DEALS KEEP YOU HERE.
            </span>
          </h2>

          <div className="text-base sm:text-lg text-slate-300 space-y-3 max-w-3xl mx-auto leading-relaxed">
            <p>
              Inside the community, selected vendors release limited-time offers on electronics. When a deal goes live, members get the details through Telegram.
            </p>
            <p className="text-slate-400 text-sm">
              Some offers may disappear quickly when promotional pricing ends or inventory sells out.
            </p>
          </div>
        </div>

        {/* 6 Product Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SITE_CONFIG.categories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Cpu;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-7 flex flex-col justify-between transition-all hover:-translate-y-1 shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                      CATEGORY 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Up to 50% on selected items</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Category footnote */}
        <div className="text-center text-xs text-slate-400 max-w-xl mx-auto">
          Vendor inventory and deals drop spontaneously. All members receive Telegram push notifications simultaneously.
        </div>

      </div>
    </section>
  );
};
