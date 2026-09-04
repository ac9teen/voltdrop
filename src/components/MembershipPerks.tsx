"use client";

import React from "react";
import { Zap, Tag, BellRing, Flame, Gift, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const MembershipPerks = () => {
  const perks = [
    {
      icon: Zap,
      badge: "⚡ LIMITED-TIME DEAL DROPS",
      description: "Deals are posted when selected vendors release discounted inventory.",
    },
    {
      icon: Tag,
      badge: "🏷️ EXCLUSIVE VENDOR OFFERS",
      description: "Access offers sourced from selected electronics vendors.",
    },
    {
      icon: BellRing,
      badge: "📲 TELEGRAM ALERTS",
      description: "Get notified when new deals go live.",
    },
    {
      icon: Flame,
      badge: "🔥 UP TO 50% OFF SELECTED ELECTRONICS",
      description: "Discount levels vary by product, vendor and available inventory.",
    },
    {
      icon: Gift,
      badge: "🎁 COMMUNITY PROMOTIONS",
      description: "Eligible members can participate in applicable giveaways and other community promotions.",
    },
  ];

  return (
    <section id="what-you-get" className="section-wrapper" style={{ backgroundColor: "rgba(12, 15, 23, 0.4)" }}>
      <div className="site-container">
        
        {/* Header */}
        <div className="perks-header-box">
          <div className="pill-badge" style={{ marginBottom: "12px" }}>
            Membership Value Breakdown
          </div>

          <h2 className="perks-title">
            {SITE_CONFIG.membershipFee} GETS YOU INSIDE.
          </h2>

          <p className="perks-subtitle">
            You&apos;re not paying {SITE_CONFIG.membershipFee} for an iPhone. You&apos;re joining a private electronics community built around finding great deals — with iPhone giveaways and other promotions along the way.
          </p>
        </div>

        {/* 5 Distinct Cards */}
        <div className="perks-grid">
          {perks.map((perk, idx) => {
            const IconComponent = perk.icon;
            return (
              <div key={idx} className="glass-card perk-card">
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div className="icon-badge">
                      <IconComponent style={{ width: "18px", height: "18px", color: "#fde047" }} />
                    </div>
                    <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "#94a3b8", background: "rgba(255,255,255,0.06)", padding: "3px 8px", borderRadius: "4px" }}>
                      PERK 0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#ffffff", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                    {perk.badge}
                  </h3>

                  <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.55 }}>
                    {perk.description}
                  </p>
                </div>

                <div style={{ paddingTop: "14px", marginTop: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "11.5px" }}>
                  <span style={{ color: "#6ee7b7", display: "flex", alignItems: "center", gap: "5px", fontWeight: 600 }}>
                    <CheckCircle2 style={{ width: "13px", height: "13px" }} />
                    Included with {SITE_CONFIG.membershipFee}
                  </span>
                  <span style={{ color: "#94a3b8", fontFamily: "var(--font-mono)" }}>Instant Access</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div style={{ textAlign: "center", fontSize: "11px", color: "#94a3b8", maxWidth: "600px", margin: "24px auto 0 auto", lineHeight: 1.5 }}>
          *Note: Not every product is 50% off. Discount levels strictly depend on individual vendor allocations and remaining inventory.
        </div>

      </div>

      <style jsx>{`
        .perks-header-box {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 40px auto;
        }
        @media (max-width: 768px) {
          .perks-header-box {
            margin-bottom: 24px;
          }
        }
        .perks-title {
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
        }
        @media (min-width: 768px) {
          .perks-title {
            font-size: 2.3rem;
            margin-bottom: 16px;
          }
        }
        .perks-subtitle {
          font-size: 0.925rem;
          color: #cbd5e1;
          line-height: 1.55;
        }
        @media (min-width: 768px) {
          .perks-subtitle {
            font-size: 1.05rem;
          }
        }
        .perks-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 640px) {
          .perks-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }
        @media (min-width: 1024px) {
          .perks-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }
        .perk-card {
          padding: 18px 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (min-width: 768px) {
          .perk-card {
            padding: 24px;
          }
        }
        .icon-badge {
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
