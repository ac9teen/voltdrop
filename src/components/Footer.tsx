"use client";

import React from "react";
import { Zap, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", backgroundColor: "#050608", padding: "48px 0 32px 0", fontSize: "13px", color: "#94a3b8" }}>
      <div className="site-container">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px", paddingBottom: "32px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
          
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(234, 179, 8, 0.15)", border: "1px solid rgba(234, 179, 8, 0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Zap style={{ width: "18px", height: "18px", color: "#fde047", fill: "currentColor" }} />
            </div>
            <div>
              <span style={{ fontSize: "16px", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em", fontFamily: "var(--font-heading)" }}>
                VOLT<span style={{ color: "#fde047" }}>DROP</span>
              </span>
              <p style={{ fontSize: "11px", color: "#94a3b8", margin: 0 }}>
                Private Electronics Deals &amp; iPhone Giveaways
              </p>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px" }}>
            <a href="#giveaway" style={{ color: "#cbd5e1", textDecoration: "none" }}>Giveaway Mechanics</a>
            <a href="#telegram-drops" style={{ color: "#cbd5e1", textDecoration: "none" }}>Telegram Feed</a>
            <a href="#recipients" style={{ color: "#cbd5e1", textDecoration: "none" }}>6 Winners Wall</a>
            <a href="#faq" style={{ color: "#cbd5e1", textDecoration: "none" }}>FAQ</a>
            <a href="#giveaway-terms" style={{ color: "#cbd5e1", textDecoration: "none" }}>Giveaway Terms</a>
          </div>

          {/* Support Concierge */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Mail style={{ width: "16px", height: "16px", color: "#fde047" }} />
            <span>Support:</span>
            <a href={`mailto:${SITE_CONFIG.supportEmail}`} style={{ color: "#ffffff", fontWeight: 600, textDecoration: "underline" }}>
              {SITE_CONFIG.supportEmail}
            </a>
          </div>

        </div>

        {/* Bottom Line */}
        <div style={{ paddingTop: "32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", fontSize: "12px", color: "#64748b" }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} {SITE_CONFIG.communityFullName}. All rights reserved.</p>
          <p style={{ margin: 0 }}>
            Independent electronics community. Not affiliated with Apple Inc., Samsung, or Sony.
          </p>
        </div>
      </div>
    </footer>
  );
};
