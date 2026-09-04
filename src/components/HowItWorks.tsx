"use client";

import React from "react";
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
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 64px auto" }}>
          <div className="pill-badge" style={{ marginBottom: "16px" }}>
            Simple 5-Step Process
          </div>

          <h2 style={{ fontSize: "2.75rem", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
            HOW IT WORKS
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#cbd5e1", lineHeight: 1.6 }}>
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
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                    <span className="step-number">{item.step}</span>
                    <div className="step-icon-badge">
                      <Icon style={{ width: "20px", height: "20px", color: "#fde047" }} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: "1.125rem", fontWeight: 900, color: "#ffffff", marginBottom: "10px", letterSpacing: "-0.01em" }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "11px", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>
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
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                    <span className="step-number">{item.step}</span>
                    <div className="step-icon-badge">
                      <Icon style={{ width: "20px", height: "20px", color: "#fde047" }} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: "1.125rem", fontWeight: 900, color: "#ffffff", marginBottom: "10px", letterSpacing: "-0.01em" }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "11px", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>
                  Step {idx + 4} of 5
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <a
            href={SITE_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <span>START WITH STEP 01 — {SITE_CONFIG.membershipFee}</span>
            <ArrowRight style={{ width: "20px", height: "20px" }} />
          </a>
        </div>

      </div>

      <style jsx>{`
        .steps-top-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        @media (min-width: 768px) {
          .steps-top-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .steps-bottom-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          max-width: 820px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .steps-bottom-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .step-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .step-number {
          font-size: 2.5rem;
          font-weight: 900;
          font-family: var(--font-mono);
          color: #fde047;
          line-height: 1;
        }
        .step-icon-badge {
          width: 44px;
          height: 44px;
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
