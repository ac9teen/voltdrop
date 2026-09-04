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
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 64px auto" }}>
          <div className="pill-badge" style={{ marginBottom: "16px" }}>
            Membership Value Breakdown
          </div>

          <h2 style={{ fontSize: "2.75rem", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
            {SITE_CONFIG.membershipFee} GETS YOU INSIDE.
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#cbd5e1", lineHeight: 1.6 }}>
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
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                    <div className="icon-badge">
                      <IconComponent style={{ width: "22px", height: "22px", color: "#fde047" }} />
                    </div>
                    <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#94a3b8", background: "rgba(255,255,255,0.06)", padding: "4px 10px", borderRadius: "6px" }}>
                      PERK 0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#ffffff", marginBottom: "12px", letterSpacing: "-0.02em" }}>
                    {perk.badge}
                  </h3>

                  <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.6 }}>
                    {perk.description}
                  </p>
                </div>

                <div style={{ paddingTop: "20px", marginTop: "24px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px" }}>
                  <span style={{ color: "#6ee7b7", display: "flex", alignItems: "center", gap: "6px", fontWeight: 600 }}>
                    <CheckCircle2 style={{ width: "14px", height: "14px" }} />
                    Included with {SITE_CONFIG.membershipFee}
                  </span>
                  <span style={{ color: "#94a3b8", fontFamily: "var(--font-mono)" }}>Instant Access</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div style={{ textAlign: "center", fontSize: "12px", color: "#94a3b8", maxWidth: "600px", margin: "32px auto 0 auto" }}>
          *Note: Not every product is 50% off. Discount levels strictly depend on individual vendor allocations and remaining inventory.
        </div>

      </div>

      <style jsx>{`
        .perks-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 640px) {
          .perks-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .perks-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .perk-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .icon-badge {
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
