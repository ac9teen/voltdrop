"use client";

import React from "react";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const Navbar = () => {
  return (
    <header className="navbar-root">
      <div className="site-container navbar-container">
        {/* Brand Logo */}
        <Link href="/" className="brand-link">
          <div className="brand-icon">
            <Zap style={{ width: "18px", height: "18px", color: "#08090e", fill: "currentColor" }} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span className="brand-title">
                VOLT<span style={{ color: "#fde047" }}>DROP</span>
              </span>
              <span className="brand-vip">VIP</span>
            </div>
            <p className="brand-sub">Private Electronics Deals</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <a href="#giveaway" className="nav-link">Giveaway Scale</a>
          <a href="#telegram-drops" className="nav-link">Telegram Feed</a>
          <a href="#recipients" className="nav-link">6 Winners Wall</a>
          <a href="#what-you-get" className="nav-link">What You Get</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        {/* Right CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="nav-pricing">
            <div style={{ fontSize: "10px", color: "#94a3b8" }}>One-Time Fee</div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#fde047", fontFamily: "var(--font-mono)" }}>
              {SITE_CONFIG.membershipFee}
            </div>
          </div>

          <Link
            href={SITE_CONFIG.checkoutUrl}
            className="btn-gold nav-cta"
          >
            <span>Join Community</span>
            <ArrowRight style={{ width: "14px", height: "14px" }} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .navbar-root {
          position: sticky;
          top: 0;
          z-index: 40;
          width: 100%;
          background-color: rgba(8, 9, 14, 0.9);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          height: 64px;
        }
        @media (max-width: 768px) {
          .navbar-root {
            height: 56px;
          }
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        .brand-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .brand-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #fde047 0%, #eab308 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(234, 179, 8, 0.3);
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .brand-icon {
            width: 30px;
            height: 30px;
            border-radius: 8px;
          }
        }
        .brand-title {
          font-size: 19px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.03em;
          font-family: var(--font-heading);
        }
        @media (max-width: 768px) {
          .brand-title {
            font-size: 17px;
          }
        }
        .brand-vip {
          font-size: 9px;
          padding: 1px 6px;
          border-radius: 4px;
          background: rgba(234, 179, 8, 0.15);
          color: #fde047;
          border: 1px solid rgba(234, 179, 8, 0.35);
          font-weight: 800;
        }
        .brand-sub {
          font-size: 10px;
          color: #94a3b8;
          font-weight: 500;
          margin: 0;
        }
        @media (max-width: 768px) {
          .brand-sub {
            display: none;
          }
        }
        .desktop-nav {
          display: none;
          gap: 24px;
          font-size: 13px;
          font-weight: 600;
        }
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex;
          }
        }
        .nav-link {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #fde047;
        }
        .nav-pricing {
          text-align: right;
          display: none;
        }
        @media (min-width: 768px) {
          .nav-pricing {
            display: block;
          }
        }
        .nav-cta {
          padding: 8px 16px;
          font-size: 13px;
          border-radius: 10px;
          gap: 6px;
        }
        @media (max-width: 768px) {
          .nav-cta {
            padding: 7px 12px;
            font-size: 12px;
          }
        }
      `}</style>
    </header>
  );
};
