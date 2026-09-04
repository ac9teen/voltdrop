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
      <div className="site-container" style={{ maxWidth: "900px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="pill-badge" style={{ marginBottom: "16px" }}>
            <HelpCircle style={{ width: "15px", height: "15px" }} />
            Clear Answers
          </div>

          <h2 style={{ fontSize: "2.75rem", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.03em" }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#cbd5e1" }}>
            Everything you need to know about the {SITE_CONFIG.communityName} community, deals, and giveaway mechanics.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="faq-item"
                style={{
                  background: isOpen ? "rgba(22, 28, 44, 0.95)" : "rgba(18, 22, 34, 0.8)",
                  border: isOpen ? "1px solid rgba(234, 179, 8, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "18px",
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                  boxShadow: isOpen ? "0 15px 30px -10px rgba(0,0,0,0.8)" : "none",
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: "100%",
                    padding: "24px 28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    background: "none",
                    border: "none",
                    color: "#ffffff",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ lineHeight: 1.4 }}>{faq.q}</span>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: isOpen ? "rgba(234, 179, 8, 0.2)" : "rgba(255, 255, 255, 0.06)",
                      border: isOpen ? "1px solid rgba(234, 179, 8, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <ChevronDown style={{ width: "18px", height: "18px", color: isOpen ? "#fde047" : "#cbd5e1" }} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 28px 24px 28px",
                      fontSize: "15px",
                      color: "#cbd5e1",
                      lineHeight: 1.6,
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      paddingTop: "16px",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
