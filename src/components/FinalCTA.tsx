"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const FinalCTA = () => {
  return (
    <section className="final-cta-section">
      <div className="site-container" style={{ maxWidth: "800px", textAlign: "center" }}>
        
        <div className="pill-badge pill-badge-gold" style={{ marginBottom: "14px" }}>
          <Sparkles style={{ width: "13px", height: "13px" }} />
          Official Private Community
        </div>

        <h2 className="final-title">
          READY TO GET INSIDE?
        </h2>

        <p className="final-subtitle">
          Join the private electronics community for <strong style={{ color: "#ffffff", fontWeight: 800 }}>{SITE_CONFIG.membershipFee}</strong>, catch limited-time deals, and take part in eligible community giveaways.
        </p>

        {/* Big CTA */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", width: "100%" }}>
          <Link
            href={SITE_CONFIG.checkoutUrl}
            className="btn-gold final-btn"
          >
            <span>JOIN THE COMMUNITY — {SITE_CONFIG.membershipFee} →</span>
            <ArrowRight style={{ width: "18px", height: "18px" }} />
          </Link>

          <p style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 500, margin: 0, lineHeight: 1.45 }}>
            One-time membership fee • Private Telegram access • Deals vary by vendor and inventory • Giveaway terms apply
          </p>
        </div>

        {/* Guarantee Badges */}
        <div className="final-badges">
          <div className="badge-item">
            <ShieldCheck style={{ width: "15px", height: "15px", color: "#10b981" }} />
            <span>Instant Telegram Link Dispatch</span>
          </div>
          <div className="badge-item">
            <Zap style={{ width: "15px", height: "15px", color: "#fde047" }} />
            <span>1 iPhone 17 Pro per 100 Members</span>
          </div>
          <div className="badge-item">
            <ShieldCheck style={{ width: "15px", height: "15px", color: "#38bdf8" }} />
            <span>Auditable Giveaway Rules</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        .final-cta-section {
          padding: 80px 0;
          background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(234, 179, 8, 0.08), transparent 70%);
          position: relative;
        }
        @media (max-width: 768px) {
          .final-cta-section {
            padding: 44px 0;
          }
        }
        .final-title {
          font-size: 1.85rem;
          font-weight: 900;
          margin-bottom: 14px;
          letter-spacing: -0.03em;
          line-height: 1.15;
        }
        @media (min-width: 768px) {
          .final-title {
            font-size: 2.8rem;
            margin-bottom: 18px;
          }
        }
        .final-subtitle {
          font-size: 0.95rem;
          color: #cbd5e1;
          max-width: 640px;
          margin: 0 auto 28px auto;
          line-height: 1.55;
        }
        @media (min-width: 768px) {
          .final-subtitle {
            font-size: 1.15rem;
            margin-bottom: 36px;
          }
        }
        .final-btn {
          font-size: 1rem;
          padding: 16px 36px;
          border-radius: 14px;
        }
        @media (max-width: 768px) {
          .final-btn {
            width: 100%;
            padding: 14px 20px;
            font-size: 14.5px;
          }
        }
        .final-badges {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 11.5px;
          color: #cbd5e1;
          font-weight: 600;
        }
        @media (min-width: 768px) {
          .final-badges {
            gap: 28px;
            margin-top: 48px;
            padding-top: 30px;
            font-size: 12.5px;
          }
        }
        .badge-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
      `}</style>
    </section>
  );
};
