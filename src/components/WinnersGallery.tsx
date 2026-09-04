"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles, Smartphone, Camera } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const WinnersGallery = () => {
  const slots = [
    {
      id: 1,
      name: "Community Recipient Showcase #1",
      location: "Verified Member • Retail Delivery",
      device: "Apple iPhone 17 Pro (Natural Titanium)",
      image: "/images/member-1.jpg",
      isLive: true,
      tag: "Delivered & Verified",
    },
    {
      id: 2,
      name: "Milestone Allocation #2",
      location: "Eligible Participant Slot",
      device: "Apple iPhone 17 Pro",
      image: null,
      isLive: false,
      tag: "Allocation Tier 2",
    },
    {
      id: 3,
      name: "Milestone Allocation #3",
      location: "Eligible Participant Slot",
      device: "Apple iPhone 17 Pro",
      image: null,
      isLive: false,
      tag: "Allocation Tier 3",
    },
    {
      id: 4,
      name: "Milestone Allocation #4",
      location: "Eligible Participant Slot",
      device: "Apple iPhone 17 Pro",
      image: null,
      isLive: false,
      tag: "Allocation Tier 4",
    },
    {
      id: 5,
      name: "Milestone Allocation #5",
      location: "Eligible Participant Slot",
      device: "Apple iPhone 17 Pro",
      image: null,
      isLive: false,
      tag: "Allocation Tier 5",
    },
    {
      id: 6,
      name: "Milestone Allocation #6",
      location: "Eligible Participant Slot",
      device: "Apple iPhone 17 Pro",
      image: null,
      isLive: false,
      tag: "Allocation Tier 6",
    },
  ];

  return (
    <section id="recipients" className="py-20 lg:py-28 relative bg-[#070709] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Giveaway Allocations & Deliveries
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            6 iPHONE RECIPIENT SHOWCASE
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every 100 eligible participants unlocks an iPhone 17 Pro. Below are the designated milestone recipient slots as deliveries and verifications progress.
          </p>
        </div>

        {/* 6-Person Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className="relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 overflow-hidden hover:border-white/20 transition-all flex flex-col group shadow-lg"
            >
              {/* Photo Area */}
              <div className="relative aspect-square w-full bg-slate-950 overflow-hidden">
                {slot.image ? (
                  <>
                    <Image
                      src={slot.image}
                      alt={slot.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900/60 to-black/80">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 text-slate-400 group-hover:text-amber-400 group-hover:scale-110 transition-all">
                      <Smartphone className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400 mb-1">
                      SLOT #{slot.id} READY
                    </span>
                    <p className="text-xs text-slate-400 max-w-[200px]">
                      Photo slot for milestone recipient. Assigned following eligible participant threshold.
                    </p>
                  </div>
                )}

                {/* Overlaid status badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-white">
                  <span className={`w-2 h-2 rounded-full ${slot.isLive ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                  {slot.tag}
                </div>

                <div className="absolute top-3 right-3 text-xs font-mono px-2 py-0.5 rounded bg-black/60 text-slate-300 border border-white/10">
                  0{slot.id}/06
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {slot.name}
                  </h4>
                  <div className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
                    <span>{slot.location}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Prize Model:</span>
                  <span className="font-semibold text-white">{slot.device}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility statement */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            Recipient allocation and identity verification strictly follow our official Giveaway Terms. No automated or fraudulent entries permitted.
          </p>
        </div>

      </div>
    </section>
  );
};
