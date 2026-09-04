"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-mobile-bar">
      <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: 0 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Zap style={{ width: "14px", height: "14px", color: "#fde047", fill: "currentColor" }} />
            <span style={{ fontSize: "12px", fontWeight: 800, color: "#ffffff" }}>VoltDrop VIP</span>
          </div>
          <span style={{ fontSize: "14px", color: "#fde047", fontWeight: 900, fontFamily: "var(--font-mono)" }}>
            {SITE_CONFIG.membershipFee} Lifetime
          </span>
        </div>

        <a
          href={SITE_CONFIG.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{ padding: "12px 24px", fontSize: "13px", borderRadius: "12px", whiteSpace: "nowrap" }}
        >
          <span>JOIN NOW</span>
          <ArrowRight style={{ width: "16px", height: "16px" }} />
        </a>
      </div>

      <style jsx>{`
        .sticky-mobile-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 14px 20px;
          background: rgba(8, 9, 14, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.8);
        }
        @media (min-width: 1024px) {
          .sticky-mobile-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
