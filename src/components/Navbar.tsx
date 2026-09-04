"use client";

import React from "react";
import { Zap, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const Navbar = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        width: "100%",
        backgroundColor: "rgba(8, 9, 14, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div
        className="site-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px",
        }}
      >
        {/* Brand Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #fde047 0%, #eab308 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 20px rgba(234, 179, 8, 0.3)",
            }}
          >
            <Zap style={{ width: "24px", height: "24px", color: "#08090e", fill: "currentColor" }} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "22px", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", fontFamily: "var(--font-heading)" }}>
                VOLT<span style={{ color: "#fde047" }}>DROP</span>
              </span>
              <span className="pill-badge-gold" style={{ fontSize: "10px", padding: "2px 8px" }}>
                VIP
              </span>
            </div>
            <p style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 500, margin: 0 }}>
              Private Electronics Community
            </p>
          </div>
        </a>

        {/* Navigation Links */}
        <nav
          style={{
            display: "none",
            gap: "32px",
            fontSize: "14px",
            fontWeight: 600,
          }}
          className="desktop-nav"
        >
          <a href="#giveaway" style={{ color: "#cbd5e1", textDecoration: "none" }}>Giveaway Scale</a>
          <a href="#telegram-drops" style={{ color: "#cbd5e1", textDecoration: "none" }}>Telegram Feed</a>
          <a href="#recipients" style={{ color: "#cbd5e1", textDecoration: "none" }}>6 Winners Wall</a>
          <a href="#what-you-get" style={{ color: "#cbd5e1", textDecoration: "none" }}>What You Get</a>
          <a href="#how-it-works" style={{ color: "#cbd5e1", textDecoration: "none" }}>How It Works</a>
          <a href="#faq" style={{ color: "#cbd5e1", textDecoration: "none" }}>FAQ</a>
        </nav>

        {/* Right CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ textAlign: "right", display: "none" }} className="nav-pricing">
            <div style={{ fontSize: "11px", color: "#94a3b8" }}>One-Time Access</div>
            <div style={{ fontSize: "15px", fontWeight: 800, color: "#fde047", fontFamily: "var(--font-mono)" }}>
              {SITE_CONFIG.membershipFee}
            </div>
          </div>

          <a
            href={SITE_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{
              padding: "12px 24px",
              fontSize: "14px",
              borderRadius: "12px",
            }}
          >
            <span>Join Now</span>
            <ArrowRight style={{ width: "16px", height: "16px" }} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .nav-pricing {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
