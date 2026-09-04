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
    <section className="section-wrapper" style={{ backgroundColor: "rgba(12, 15, 23, 0.4)" }}>
      <div className="site-container">
        
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 64px auto" }}>
          <div className="pill-badge pill-badge-gold" style={{ marginBottom: "16px" }}>
            Core Value Proposition
          </div>

          <h2 style={{ fontSize: "2.75rem", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
            THE GIVEAWAYS GET THE ATTENTION. <br />
            <span className="text-gradient-gold">THE DEALS KEEP YOU HERE.</span>
          </h2>

          <div style={{ fontSize: "1.125rem", color: "#cbd5e1", lineHeight: 1.6 }}>
            <p style={{ marginBottom: "12px" }}>
              Inside the community, selected vendors release limited-time offers on electronics. When a deal goes live, members get the details through Telegram.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>
              Some offers may disappear quickly when promotional pricing ends or inventory sells out.
            </p>
          </div>
        </div>

        {/* 6 Product Categories */}
        <div className="deals-grid">
          {SITE_CONFIG.categories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Cpu;
            return (
              <div key={idx} className="glass-card deal-card">
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                    <div className="deal-icon-badge">
                      <IconComponent style={{ width: "22px", height: "22px", color: "#fde047" }} />
                    </div>
                    <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#94a3b8", background: "rgba(255,255,255,0.06)", padding: "4px 10px", borderRadius: "6px" }}>
                      CATEGORY 0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", marginBottom: "10px", letterSpacing: "-0.02em" }}>
                    {cat.name}
                  </h3>

                  <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.6 }}>
                    {cat.desc}
                  </p>
                </div>

                <div style={{ paddingTop: "16px", marginTop: "24px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", color: "#94a3b8" }}>
                  <span>Up to 50% on selected stock</span>
                  <ArrowUpRight style={{ width: "16px", height: "16px", color: "#fde047" }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div style={{ textAlign: "center", fontSize: "12px", color: "#94a3b8", maxWidth: "600px", margin: "40px auto 0 auto" }}>
          Vendor inventory and deals drop spontaneously. All members receive Telegram push notifications simultaneously.
        </div>

      </div>

      <style jsx>{`
        .deals-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 640px) {
          .deals-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .deals-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .deal-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .deal-icon-badge {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(234, 179, 8, 0.12);
          border: 1px solid rgba(234, 179, 8, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};
