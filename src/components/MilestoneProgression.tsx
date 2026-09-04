"use client";

import React from "react";
import { Trophy, Smartphone, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const MilestoneProgression = () => {
  return (
    <section id="giveaway" className="section-wrapper" style={{ backgroundColor: "rgba(12, 15, 23, 0.4)" }}>
      <div className="site-container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 64px auto" }}>
          <div className="pill-badge pill-badge-gold" style={{ marginBottom: "16px" }}>
            <Trophy style={{ width: "15px", height: "15px" }} />
            Transparent Milestone Scaling
          </div>

          <h2 style={{ fontSize: "2.75rem", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
            THE MORE THE COMMUNITY GROWS, <br />
            <span className="text-gradient-gold">THE MORE iPHONES WE GIVE AWAY.</span>
          </h2>

          <div style={{ fontSize: "1.125rem", color: "#cbd5e1", lineHeight: 1.6 }}>
            <p>We&apos;re not doing one tiny giveaway and calling it a day.</p>
            <p>We&apos;re tying the number of iPhones we give away to the size of the community.</p>
            <p style={{ color: "#ffffff", fontWeight: 700, paddingTop: "8px" }}>
              Every additional 100 eligible participants unlocks another iPhone 17 Pro giveaway.
            </p>
          </div>
        </div>

        {/* Milestone Cards Grid */}
        <div className="milestone-grid">
          {SITE_CONFIG.milestones.map((item, idx) => (
            <div key={idx} className="glass-card milestone-card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <span className="tier-tag">TIER 0{idx + 1}</span>
                <span className="tier-status">
                  <CheckCircle2 style={{ width: "14px", height: "14px", color: "#10b981" }} />
                  {item.status}
                </span>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
                  <span className="milestone-number">{item.iphones}</span>
                  <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#cbd5e1" }}>
                    {item.iphones === 1 ? "iPhone" : "iPhones"}
                  </span>
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#fde047", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Smartphone style={{ width: "16px", height: "16px" }} />
                  <span>{item.prize}</span>
                </div>
              </div>

              <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div style={{ fontSize: "11px", textTransform: "uppercase", color: "#94a3b8", fontWeight: 700, marginBottom: "4px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Users style={{ width: "14px", height: "14px" }} />
                  Eligible Threshold:
                </div>
                <div style={{ fontSize: "15px", fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-mono)" }}>
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="milestone-banner">
          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }} />
              100% Mathematical &amp; Rule-Governed
            </h3>
            <p style={{ fontSize: "14px", color: "#cbd5e1", maxWidth: "600px", margin: 0 }}>
              No artificial caps. No hidden algorithms. Every block of 100 eligible participants triggers an additional allocation per official Giveaway Terms.
            </p>
          </div>

          <a
            href={SITE_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ padding: "16px 32px", fontSize: "1rem", whiteSpace: "nowrap" }}
          >
            <span>JOIN FOR {SITE_CONFIG.membershipFee} →</span>
          </a>
        </div>

      </div>

      <style jsx>{`
        .milestone-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 48px;
        }
        @media (min-width: 640px) {
          .milestone-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .milestone-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .milestone-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .tier-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.06);
          color: #cbd5e1;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .tier-status {
          font-size: 12px;
          font-weight: 700;
          color: #6ee7b7;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .milestone-number {
          font-size: 3.5rem;
          font-weight: 900;
          font-family: var(--font-mono);
          color: #ffffff;
          line-height: 1;
        }
        .milestone-banner {
          background: rgba(18, 22, 34, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 28px 36px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
          justify-content: space-between;
        }
        @media (min-width: 768px) {
          .milestone-banner {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
};
