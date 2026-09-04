"use client";

import React from "react";
import Link from "next/link";
import { Trophy, Smartphone, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const MilestoneProgression = () => {
  return (
    <section id="giveaway" className="section-wrapper" style={{ backgroundColor: "rgba(12, 15, 23, 0.4)" }}>
      <div className="site-container">
        
        {/* Section Header */}
        <div className="section-header-box">
          <div className="pill-badge pill-badge-gold" style={{ marginBottom: "12px" }}>
            <Trophy style={{ width: "13px", height: "13px" }} />
            Transparent Milestone Scaling
          </div>

          <h2 className="section-title">
            THE MORE THE COMMUNITY GROWS, <br />
            <span className="text-gradient-gold">THE MORE iPHONES WE GIVE AWAY.</span>
          </h2>

          <div className="section-subtitle">
            <p>We&apos;re not doing one tiny giveaway and calling it a day.</p>
            <p>We&apos;re tying the number of iPhones we give away to the size of the community.</p>
            <p style={{ color: "#ffffff", fontWeight: 700, paddingTop: "6px" }}>
              Every additional 100 eligible participants unlocks another iPhone 17 Pro giveaway.
            </p>
          </div>
        </div>

        {/* Milestone Cards Grid */}
        <div className="milestone-grid">
          {SITE_CONFIG.milestones.map((item, idx) => (
            <div key={idx} className="glass-card milestone-card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                <span className="tier-tag">TIER 0{idx + 1}</span>
                <span className="tier-status">
                  <CheckCircle2 style={{ width: "13px", height: "13px", color: "#10b981" }} />
                  {item.status}
                </span>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "4px" }}>
                  <span className="milestone-number">{item.iphones}</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#cbd5e1" }}>
                    {item.iphones === 1 ? "iPhone" : "iPhones"}
                  </span>
                </div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#fde047", display: "flex", alignItems: "center", gap: "5px" }}>
                  <Smartphone style={{ width: "14px", height: "14px" }} />
                  <span>{item.prize}</span>
                </div>
              </div>

              <div style={{ paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div style={{ fontSize: "10.5px", textTransform: "uppercase", color: "#94a3b8", fontWeight: 700, marginBottom: "3px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <Users style={{ width: "13px", height: "13px" }} />
                  Eligible Threshold:
                </div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-mono)" }}>
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="milestone-banner">
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", marginBottom: "4px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }} />
              100% Mathematical &amp; Rule-Governed
            </h3>
            <p style={{ fontSize: "13px", color: "#cbd5e1", maxWidth: "600px", margin: 0, lineHeight: 1.5 }}>
              No artificial caps. No hidden algorithms. Every block of 100 eligible participants triggers an additional allocation per official Giveaway Terms.
            </p>
          </div>

          <Link
            href={SITE_CONFIG.checkoutUrl}
            className="btn-gold banner-cta"
          >
            <span>JOIN FOR {SITE_CONFIG.membershipFee} →</span>
          </Link>
        </div>

      </div>

      <style jsx>{`
        .section-header-box {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 44px auto;
        }
        @media (max-width: 768px) {
          .section-header-box {
            margin-bottom: 28px;
          }
        }
        .section-title {
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 14px;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }
        @media (min-width: 768px) {
          .section-title {
            font-size: 2.3rem;
            margin-bottom: 18px;
          }
        }
        .section-subtitle {
          font-size: 0.925rem;
          color: #cbd5e1;
          line-height: 1.55;
        }
        @media (min-width: 768px) {
          .section-subtitle {
            font-size: 1.05rem;
          }
        }
        .milestone-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: 32px;
        }
        @media (min-width: 640px) {
          .milestone-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }
        @media (min-width: 1024px) {
          .milestone-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 40px;
          }
        }
        .milestone-card {
          padding: 18px 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (min-width: 768px) {
          .milestone-card {
            padding: 24px;
          }
        }
        .tier-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.06);
          color: #cbd5e1;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .tier-status {
          font-size: 11px;
          font-weight: 700;
          color: #6ee7b7;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .milestone-number {
          font-size: 2.3rem;
          font-weight: 900;
          font-family: var(--font-mono);
          color: #ffffff;
          line-height: 1;
        }
        @media (min-width: 768px) {
          .milestone-number {
            font-size: 3rem;
          }
        }
        .milestone-banner {
          background: rgba(18, 22, 34, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
          justify-content: space-between;
        }
        @media (min-width: 768px) {
          .milestone-banner {
            border-radius: 20px;
            padding: 24px 30px;
            flex-direction: row;
            align-items: center;
          }
        }
        .banner-cta {
          padding: 12px 24px;
          font-size: 0.925rem;
          white-space: nowrap;
        }
        @media (max-width: 768px) {
          .banner-cta {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
