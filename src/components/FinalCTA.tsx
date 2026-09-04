"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const FinalCTA = () => {
  return (
    <section className="section-wrapper" style={{ padding: "120px 0", background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(234, 179, 8, 0.08), transparent 70%)" }}>
      <div className="site-container" style={{ maxWidth: "880px", textAlign: "center" }}>
        
        <div className="pill-badge pill-badge-gold" style={{ marginBottom: "20px" }}>
          <Sparkles style={{ width: "14px", height: "14px" }} />
          Official Private Community
        </div>

        <h2 style={{ fontSize: "3.5rem", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
          READY TO GET INSIDE?
        </h2>

        <p style={{ fontSize: "1.25rem", color: "#cbd5e1", maxWidth: "680px", margin: "0 auto 40px auto", lineHeight: 1.6 }}>
          Join the private electronics community for <strong style={{ color: "#ffffff", fontWeight: 800 }}>{SITE_CONFIG.membershipFee}</strong>, catch limited-time deals, and take part in eligible community giveaways.
        </p>

        {/* Big CTA */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <a
            href={SITE_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ fontSize: "1.25rem", padding: "22px 48px", borderRadius: "18px" }}
          >
            <span>JOIN THE COMMUNITY — {SITE_CONFIG.membershipFee} →</span>
            <ArrowRight style={{ width: "22px", height: "22px" }} />
          </a>

          <p style={{ fontSize: "13px", color: "#94a3b8", fontWeight: 500, margin: 0 }}>
            One-time membership fee • Private Telegram access • Deals vary by vendor and inventory • Giveaway terms apply
          </p>
        </div>

        {/* Guarantee Badges */}
        <div className="final-badges">
          <div className="badge-item">
            <ShieldCheck style={{ width: "18px", height: "18px", color: "#10b981" }} />
            <span>Instant Telegram Link Dispatch</span>
          </div>
          <div className="badge-item">
            <Zap style={{ width: "18px", height: "18px", color: "#fde047" }} />
            <span>1 iPhone 17 Pro per 100 Eligible Members</span>
          </div>
          <div className="badge-item">
            <ShieldCheck style={{ width: "18px", height: "18px", color: "#38bdf8" }} />
            <span>Auditable Giveaway Rules</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        .final-badges {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 32px;
          margin-top: 56px;
          padding-top: 36px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 13px;
          color: #cbd5e1;
          font-weight: 600;
        }
        .badge-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
      `}</style>
    </section>
  );
};
