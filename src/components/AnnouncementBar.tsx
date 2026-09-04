import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const AnnouncementBar = () => {
  return (
    <aside
      aria-label="Announcement"
      style={{
        background: "linear-gradient(90deg, rgba(8, 14, 28, 0.95), rgba(30, 20, 10, 0.95), rgba(8, 14, 28, 0.95))",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "10px 24px",
        fontSize: "13px",
        fontWeight: 600,
        color: "#cbd5e1",
      }}
    >
      <div
        className="site-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          padding: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#fde047",
              boxShadow: "0 0 10px #fde047",
              display: "inline-block",
            }}
          />
          <span style={{ color: "#fef08a", display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: 700 }}>
            <Sparkles style={{ width: "14px", height: "14px" }} />
            OFFICIAL TELEGRAM COMMUNITY
          </span>
          <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>•</span>
          <span style={{ color: "#ffffff" }}>
            {SITE_CONFIG.membershipFee} One-Time Membership Fee
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "12px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#38bdf8", fontWeight: 700 }}>
            <ShieldCheck style={{ width: "15px", height: "15px" }} />
            1 iPhone 17 Pro per 100 Eligible Members
          </span>
          <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>|</span>
          <span style={{ color: "#94a3b8" }}>Giveaway terms apply</span>
        </div>
      </div>
    </aside>
  );
};
