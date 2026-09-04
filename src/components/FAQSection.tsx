"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is the ₹299 payment for an iPhone?",
      a: "No. ₹299 is the membership fee for access to the private electronics-deal community. iPhone giveaways are separate promotional activities subject to their applicable terms.",
    },
    {
      q: "Will I definitely receive an iPhone?",
      a: "No. Giveaway prizes are not guaranteed. Eligibility and winner selection are governed by the applicable Giveaway Terms.",
    },
    {
      q: "How does the 100-participant system work?",
      a: "For every 100 eligible participants, one iPhone 17 Pro is allocated to the applicable giveaway. The exact eligibility and participant-counting rules are provided in the official Giveaway Terms.",
    },
    {
      q: "Are all products 50% off?",
      a: "No. Discounts vary by product, vendor and availability. Selected deals may offer discounts of up to 50%.",
    },
    {
      q: "How long do deals last?",
      a: "Deals may be available for a limited time or until the relevant vendor's inventory or promotional allocation is exhausted.",
    },
    {
      q: "How do I get access?",
      a: "After completing membership, you'll receive instructions for joining the private Telegram community.",
    },
    {
      q: "Are you affiliated with Apple?",
      a: "Unless expressly stated otherwise, we are an independent electronics community and are not affiliated with Apple, Samsung or other electronics manufacturers.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-wrapper" style={{ backgroundColor: "rgba(12, 15, 23, 0.4)" }}>
      <div className="site-container" style={{ maxWidth: "860px" }}>
        
        {/* Header */}
        <div className="faq-header-box">
          <div className="pill-badge" style={{ marginBottom: "12px" }}>
            <HelpCircle style={{ width: "13px", height: "13px" }} />
            Clear Answers
          </div>

          <h2 className="faq-title">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p className="faq-subtitle">
            Everything you need to know about the {SITE_CONFIG.communityName} community, deals, and giveaway mechanics.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="faq-item"
                style={{
                  background: isOpen ? "rgba(22, 28, 44, 0.95)" : "rgba(18, 22, 34, 0.8)",
                  border: isOpen ? "1px solid rgba(234, 179, 8, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="faq-btn"
                  aria-expanded={isOpen}
                >
                  <span style={{ lineHeight: 1.4 }}>{faq.q}</span>
                  <div
                    className="chevron-box"
                    style={{
                      background: isOpen ? "rgba(234, 179, 8, 0.2)" : "rgba(255, 255, 255, 0.06)",
                      border: isOpen ? "1px solid rgba(234, 179, 8, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown style={{ width: "16px", height: "16px", color: isOpen ? "#fde047" : "#cbd5e1" }} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-content">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        .faq-header-box {
          text-align: center;
          margin-bottom: 36px;
        }
        @media (max-width: 768px) {
          .faq-header-box {
            margin-bottom: 24px;
          }
        }
        .faq-title {
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
        }
        @media (min-width: 768px) {
          .faq-title {
            font-size: 2.3rem;
            margin-bottom: 16px;
          }
        }
        .faq-subtitle {
          font-size: 0.925rem;
          color: #cbd5e1;
        }
        @media (min-width: 768px) {
          .faq-subtitle {
            font-size: 1.05rem;
          }
        }
        .faq-btn {
          width: 100%;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: none;
          border: none;
          color: #ffffff;
          textAlign: left;
          cursor: pointer;
          font-size: 14.5px;
          font-weight: 700;
          font-family: var(--font-heading);
        }
        @media (min-width: 768px) {
          .faq-btn {
            padding: 20px 24px;
            font-size: 1.05rem;
          }
        }
        .chevron-box {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }
        .faq-content {
          padding: 0 18px 16px 18px;
          font-size: 13.5px;
          color: #cbd5e1;
          line-height: 1.55;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 12px;
        }
        @media (min-width: 768px) {
          .faq-content {
            padding: 0 24px 20px 24px;
            font-size: 14.5px;
            padding-top: 14px;
          }
        }
      `}</style>
    </section>
  );
};
