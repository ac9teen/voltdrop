"use client";

import React from "react";
import { ShieldCheck, Scale, CheckCircle, FileText, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const TrustSection = () => {
  return (
    <section className="section-wrapper">
      <div className="site-container">
        
        {/* Header */}
        <div className="trust-header-box">
          <div className="pill-badge pill-badge-emerald" style={{ marginBottom: "12px" }}>
            <ShieldCheck style={{ width: "13px", height: "13px" }} />
            Integrity First Approach
          </div>

          <h2 className="trust-title">
            REAL DEALS. REAL GIVEAWAYS. <br />
            <span style={{ color: "#6ee7b7" }}>CLEAR TERMS.</span>
          </h2>

          <p className="trust-subtitle">
            Membership gives you access to the private electronics community. Deals vary by vendor and inventory. Giveaway eligibility and prize allocation are governed by applicable giveaway terms.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="trust-grid">
          
          <div className="glass-card trust-card">
            <div>
              <div className="trust-icon" style={{ background: "rgba(16, 185, 129, 0.12)", color: "#10b981", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                <Lock style={{ width: "18px", height: "18px" }} />
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px" }}>
                Flat {SITE_CONFIG.membershipFee} Fee
              </h3>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.55 }}>
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
                <Scale style={{ width: "18px", height: "18px" }} />
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px" }}>
                Predictable 100:1 Ratio
              </h3>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.55 }}>
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
                <FileText style={{ width: "18px", height: "18px" }} />
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px" }}>
                Auditable Rules
              </h3>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.55 }}>
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
                <CheckCircle style={{ width: "18px", height: "18px" }} />
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px" }}>
                No Fake Scarcity
              </h3>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.55 }}>
                We do not use artificial countdown timers, fake participant numbers, or manipulative popups. You get straight facts.
              </p>
            </div>
            <div className="trust-footer" style={{ color: "#d8b4fe" }}>
              Honest &amp; Compliant
            </div>
          </div>

        </div>

        {/* Future Testimonials Archive Note */}
        <div className="trust-archive-note">
          <span style={{ fontSize: "10.5px", fontWeight: 800, textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.05em", display: "block", marginBottom: "4px" }}>
            Community Member Reviews Archive
          </span>
          <p style={{ fontSize: "12px", color: "#cbd5e1", margin: 0, lineHeight: 1.55 }}>
            [This section is designated for verified recipient unboxing videos and community feedback as milestone deliveries are dispatched. No fabricated reviews are published.]
          </p>
        </div>

      </div>

      <style jsx>{`
        .trust-header-box {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 40px auto;
        }
        @media (max-width: 768px) {
          .trust-header-box {
            margin-bottom: 24px;
          }
        }
        .trust-title {
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }
        @media (min-width: 768px) {
          .trust-title {
            font-size: 2.3rem;
            margin-bottom: 16px;
          }
        }
        .trust-subtitle {
          font-size: 0.925rem;
          color: #cbd5e1;
          line-height: 1.55;
        }
        @media (min-width: 768px) {
          .trust-subtitle {
            font-size: 1.05rem;
          }
        }
        .trust-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 640px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }
        @media (min-width: 1024px) {
          .trust-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
        }
        .trust-card {
          padding: 18px 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (min-width: 768px) {
          .trust-card {
            padding: 24px;
          }
        }
        .trust-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .trust-footer {
          padding-top: 12px;
          margin-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 11px;
          font-family: var(--font-mono);
          font-weight: 700;
        }
        .trust-archive-note {
          background: rgba(18, 22, 34, 0.6);
          border: 1px dashed rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 18px 20px;
          text-align: center;
          max-width: 680px;
          margin: 28px auto 0 auto;
        }
      `}</style>
    </section>
  );
};
