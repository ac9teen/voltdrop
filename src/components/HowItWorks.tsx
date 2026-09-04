"use client";

import React from "react";
import Link from "next/link";
import { UserPlus, Send, Tag, Gift, Users, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "JOIN",
      description: `Pay ${SITE_CONFIG.membershipFee} for access to the private community.`,
      icon: UserPlus,
    },
    {
      step: "02",
      title: "GET TELEGRAM ACCESS",
      description: "Receive instructions to join the private Telegram group.",
      icon: Send,
    },
    {
      step: "03",
      title: "CATCH THE DEALS",
      description: "Get access to limited-time electronics deals as they're posted.",
      icon: Tag,
    },
    {
      step: "04",
      title: "WATCH THE GIVEAWAYS",
      description: "Eligible members can participate in applicable community promotions.",
      icon: Gift,
    },
    {
      step: "05",
      title: "MORE MEMBERS, MORE IPHONES",
      description: "For every 100 eligible participants, another iPhone 17 Pro is given away.",
      icon: Users,
    },
  ];

  return (
    <section id="how-it-works" className="section-wrapper">
      <div className="site-container">
        
        {/* Header */}
        <div className="how-header-box">
          <div className="pill-badge" style={{ marginBottom: "12px" }}>
            Simple 5-Step Process
          </div>

          <h2 className="how-title">
            HOW IT WORKS
          </h2>

          <p className="how-subtitle">
            From checkout to Telegram deal alerts and community promotions in under 60 seconds.
          </p>
        </div>

        {/* Top 3 Steps */}
        <div className="steps-top-grid">
          {steps.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card step-card">
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                    <span className="step-number">{item.step}</span>
                    <div className="step-icon-badge">
                      <Icon style={{ width: "18px", height: "18px", color: "#fde047" }} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: "1.05rem", fontWeight: 900, color: "#ffffff", marginBottom: "6px", letterSpacing: "-0.01em" }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.55 }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "10.5px", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>
                  Step {idx + 1} of 5
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom 2 Steps: Wide & Centered */}
        <div className="steps-bottom-grid">
          {steps.slice(3, 5).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx + 3} className="glass-card step-card">
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                    <span className="step-number">{item.step}</span>
                    <div className="step-icon-badge">
                      <Icon style={{ width: "18px", height: "18px", color: "#fde047" }} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: "1.05rem", fontWeight: 900, color: "#ffffff", marginBottom: "6px", letterSpacing: "-0.01em" }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.55 }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "10.5px", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>
                  Step {idx + 4} of 5
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <Link
            href={SITE_CONFIG.checkoutUrl}
            className="btn-gold how-cta-btn"
          >
            <span>START WITH STEP 01 — {SITE_CONFIG.membershipFee}</span>
            <ArrowRight style={{ width: "16px", height: "16px" }} />
          </Link>
        </div>

      </div>

      <style jsx>{`
        .how-header-box {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 40px auto;
        }
        @media (max-width: 768px) {
          .how-header-box {
            margin-bottom: 24px;
          }
        }
        .how-title {
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
        }
        @media (min-width: 768px) {
          .how-title {
            font-size: 2.3rem;
            margin-bottom: 16px;
          }
        }
        .how-subtitle {
          font-size: 0.925rem;
          color: #cbd5e1;
          line-height: 1.55;
        }
        @media (min-width: 768px) {
          .how-subtitle {
            font-size: 1.05rem;
          }
        }
        .steps-top-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }
        @media (min-width: 768px) {
          .steps-top-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-bottom: 18px;
          }
        }
        .steps-bottom-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          max-width: 780px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .steps-bottom-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }
        .step-card {
          padding: 18px 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (min-width: 768px) {
          .step-card {
            padding: 24px;
          }
        }
        .step-number {
          font-size: 2rem;
          font-weight: 900;
          font-family: var(--font-mono);
          color: #fde047;
          line-height: 1;
        }
        .step-icon-badge {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(234, 179, 8, 0.12);
          border: 1px solid rgba(234, 179, 8, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .how-cta-btn {
          padding: 13px 24px;
        }
        @media (max-width: 768px) {
          .how-cta-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
