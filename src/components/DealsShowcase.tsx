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
        <div className="deals-header-box">
          <div className="pill-badge pill-badge-gold" style={{ marginBottom: "12px" }}>
            Core Value Proposition
          </div>

          <h2 className="deals-title">
            THE GIVEAWAYS GET THE ATTENTION. <br />
            <span className="text-gradient-gold">THE DEALS KEEP YOU HERE.</span>
          </h2>

          <div className="deals-subtitle">
            <p style={{ marginBottom: "8px" }}>
              Inside the community, selected vendors release limited-time offers on electronics. When a deal goes live, members get the details through Telegram.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "12.5px" }}>
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
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div className="deal-icon-badge">
                      <IconComponent style={{ width: "18px", height: "18px", color: "#fde047" }} />
                    </div>
                    <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "#94a3b8", background: "rgba(255,255,255,0.06)", padding: "3px 8px", borderRadius: "4px" }}>
                      CATEGORY 0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px", letterSpacing: "-0.01em" }}>
                    {cat.name}
                  </h3>

                  <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.55 }}>
                    {cat.desc}
                  </p>
                </div>

                <div style={{ paddingTop: "12px", marginTop: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "11.5px", color: "#94a3b8" }}>
                  <span>Up to 50% on selected stock</span>
                  <ArrowUpRight style={{ width: "14px", height: "14px", color: "#fde047" }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div style={{ textAlign: "center", fontSize: "11px", color: "#94a3b8", maxWidth: "600px", margin: "24px auto 0 auto", lineHeight: 1.5 }}>
          Vendor inventory and deals drop spontaneously. All members receive Telegram push notifications simultaneously.
        </div>

      </div>

      <style jsx>{`
        .deals-header-box {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 40px auto;
        }
        @media (max-width: 768px) {
          .deals-header-box {
            margin-bottom: 24px;
          }
        }
        .deals-title {
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }
        @media (min-width: 768px) {
          .deals-title {
            font-size: 2.3rem;
            margin-bottom: 16px;
          }
        }
        .deals-subtitle {
          font-size: 0.925rem;
          color: #cbd5e1;
          line-height: 1.55;
        }
        @media (min-width: 768px) {
          .deals-subtitle {
            font-size: 1.05rem;
          }
        }
        .deals-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 640px) {
          .deals-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }
        @media (min-width: 1024px) {
          .deals-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }
        .deal-card {
          padding: 18px 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (min-width: 768px) {
          .deal-card {
            padding: 24px;
          }
        }
        .deal-icon-badge {
          width: 38px;
          height: 38px;
          border-radius: 10px;
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
