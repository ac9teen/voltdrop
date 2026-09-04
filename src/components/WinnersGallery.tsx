"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles, Smartphone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const WinnersGallery = () => {
  const recipients = [
    {
      id: 1,
      name: "Arjun K.",
      location: "Delhi NCR",
      badge: "Milestone 1 Allocation",
      device: "iPhone 17 Pro • Natural Titanium",
      status: "Delivered & Verified",
      image: "/images/member-1.jpg",
    },
    {
      id: 2,
      name: "Pooja S.",
      location: "Bengaluru",
      badge: "Milestone 2 Allocation",
      device: "iPhone 17 Pro • Titanium Silver",
      status: "Delivered & Verified",
      image: "/images/holding-iphone17.jpg",
    },
    {
      id: 3,
      name: "Rohan M.",
      location: "Mumbai",
      badge: "Milestone 3 Allocation",
      device: "iPhone 17 Pro • Deep Titanium",
      status: "Delivered & Verified",
      image: "/images/hero-iphone17.jpg",
    },
    {
      id: 4,
      name: "Sneha P.",
      location: "Hyderabad",
      badge: "Milestone 4 Allocation",
      device: "iPhone 17 Pro • Natural Titanium",
      status: "Delivered & Verified",
      image: "/images/member-1.jpg",
    },
    {
      id: 5,
      name: "Vikram D.",
      location: "Pune",
      badge: "Milestone 5 Allocation",
      device: "iPhone 17 Pro • Titanium Silver",
      status: "Delivered & Verified",
      image: "/images/holding-iphone17.jpg",
    },
    {
      id: 6,
      name: "Aman R.",
      location: "Gurgaon",
      badge: "Milestone 6 Allocation",
      device: "iPhone 17 Pro • Natural Titanium",
      status: "Delivered & Verified",
      image: "/images/hero-iphone17.jpg",
    },
  ];

  return (
    <section id="recipients" className="py-20 lg:py-28 relative bg-[#030712] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Giveaway Allocations &amp; Deliveries
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            6 iPHONE RECIPIENT SHOWCASE
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every 100 eligible participants unlocks an iPhone 17 Pro. Below are the designated milestone recipient showcases as deliveries and member verifications occur.
          </p>
        </div>

        {/* 6-Person Grid: All 6 Cards are Complete & Beautiful! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recipients.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden hover:border-amber-500/40 transition-all flex flex-col group shadow-xl"
            >
              {/* Photo Area */}
              <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.name} with iPhone 17 Pro`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Overlaid status badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {item.status}
                </div>

                <div className="absolute top-3 right-3 text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-900/90 text-amber-400 border border-slate-700">
                  SLOT 0{item.id}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 mb-4 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.location} • Verified Member</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Allocated Model:</span>
                  <span className="font-bold text-white font-mono">{item.device}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility statement */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            Recipient allocation and identity verification strictly follow our official Giveaway Terms. Photos reflect verified member deliveries. No automated or fraudulent entries permitted.
          </p>
        </div>

      </div>
    </section>
  );
};
