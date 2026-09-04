"use client";

import React from "react";
import { ShieldCheck, Scale, CheckCircle, FileText, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const TrustSection = () => {
  return (
    <section className="section-wrapper">
      <div className="site-container">
        
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 64px auto" }}>
          <div className="pill-badge pill-badge-emerald" style={{ marginBottom: "16px" }}>
            <ShieldCheck style={{ width: "15px", height: "15px" }} />
            Integrity First Approach
          </div>

          <h2 style={{ fontSize: "2.75rem", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
            REAL DEALS. REAL GIVEAWAYS. <br />
            <span style={{ color: "#6ee7b7" }}>CLEAR TERMS.</span>
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#cbd5e1", lineHeight: 1.6 }}>
            Membership gives you access to the private electronics community. Deals vary by vendor and inventory. Giveaway eligibility and prize allocation are governed by the applicable giveaway terms.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="trust-grid">
          
          <div className="glass-card trust-card">
            <div>
              <div className="trust-icon" style={{ background: "rgba(16, 185, 129, 0.12)", color: "#10b981", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                <Lock style={{ width: "22px", height: "22px" }} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>
                Flat {SITE_CONFIG.membershipFee} Fee
              </h3>
              <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.6 }}>
                Zero hidden recurring charges or automated debits. One single payment grants you direct access to the Telegram community.
              </p>
            </div>
            <div className="trust-footer" style={{ color: "#6ee7b7" }}>
              Transparent Pricing
            </div>
          </div>

          <div className="glass-card trust-card">
            <div>
              <div className="trust-icon" style={{ background: "rgba(56, 189, 248, 0.12)", color: "#38bdf8", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
                <Scale style={{ width: "22px", height: "22px" }} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>
                Predictable 100:1 Ratio
              </h3>
              <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.6 }}>
                We strictly tie our giveaways to community volume. For every 100 eligible participants, an iPhone 17 Pro is allocated.
              </p>
            </div>
            <div className="trust-footer" style={{ color: "#7dd3fc" }}>
              Mathematical Model
            </div>
          </div>

          <div className="glass-card trust-card">
            <div>
              <div className="trust-icon" style={{ background: "rgba(234, 179, 8, 0.12)", color: "#fde047", border: "1px solid rgba(234, 179, 8, 0.3)" }}>
                <FileText style={{ width: "22px", height: "22px" }} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>
                Auditable Rules
              </h3>
              <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.6 }}>
                Giveaway qualification, verification, and winner determination are set in stone in our public Giveaway Terms.
              </p>
            </div>
            <div className="trust-footer" style={{ color: "#fde047" }}>
              Explicit Terms
            </div>
          </div>

          <div className="glass-card trust-card">
            <div>
              <div className="trust-icon" style={{ background: "rgba(168, 85, 247, 0.12)", color: "#c084fc", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
                <CheckCircle style={{ width: "22px", height: "22px" }} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>
                No Fake Scarcity
              </h3>
              <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.6 }}>
                We do not use artificial countdown timers, fake participant numbers, or manipulative popups. You get straight facts.
              </p>
            </div>
            <div className="trust-footer" style={{ color: "#d8b4fe" }}>
              Honest &amp; Compliant
            </div>
          </div>

        </div>

        {/* Future Testimonials Archive Note */}
        <div style={{ background: "rgba(18, 22, 34, 0.6)", border: "1px dashed rgba(255, 255, 255, 0.15)", borderRadius: "20px", padding: "28px", textAlign: "center", maxWidth: "700px", margin: "40px auto 0 auto" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
            Community Member Reviews Archive
          </span>
          <p style={{ fontSize: "13px", color: "#cbd5e1", margin: 0, lineHeight: 1.6 }}>
            [This section is designated for verified recipient unboxing videos and community feedback as milestone deliveries are dispatched. No fabricated reviews are published.]
          </p>
        </div>

      </div>

      <style jsx>{`
        .trust-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 640px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .trust-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .trust-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .trust-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .trust-footer {
          padding-top: 16px;
          margin-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 12px;
          font-family: var(--font-mono);
          font-weight: 700;
        }
      `}</style>
    </section>
  );
};
