"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
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
      <div className="site-container sticky-content">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Zap style={{ width: "12px", height: "12px", color: "#fde047", fill: "currentColor" }} />
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff" }}>VoltDrop VIP</span>
          </div>
          <span style={{ fontSize: "13px", color: "#fde047", fontWeight: 900, fontFamily: "var(--font-mono)" }}>
            {SITE_CONFIG.membershipFee} Lifetime Access
          </span>
        </div>

        <Link
          href={SITE_CONFIG.checkoutUrl}
          className="btn-gold sticky-btn"
        >
          <span>JOIN NOW</span>
          <ArrowRight style={{ width: "14px", height: "14px" }} />
        </Link>
      </div>

      <style jsx>{`
        .sticky-mobile-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 10px 16px;
          padding-bottom: max(10px, env(safe-area-inset-bottom));
          background: rgba(8, 9, 14, 0.94);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 -8px 25px rgba(0, 0, 0, 0.85);
        }
        .sticky-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 0;
        }
        .sticky-btn {
          padding: 9px 18px;
          font-size: 12px;
          border-radius: 10px;
          white-space: nowrap;
          gap: 6px;
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
