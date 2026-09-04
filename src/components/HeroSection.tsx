"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Bell, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const HeroSection = () => {
  return (
    <section className="section-wrapper" style={{ paddingTop: "80px", paddingBottom: "100px", borderTop: "none" }}>
      <div className="site-container">
        <div className="hero-grid">
          
          {/* Left Column */}
          <div className="hero-content">
            
            {/* Top Pill Badge */}
            <div className="pill-badge pill-badge-gold" style={{ marginBottom: "24px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#fde047", display: "inline-block" }} />
              <span>Official Community Launch</span>
              <span style={{ opacity: 0.4 }}>•</span>
              <span style={{ fontFamily: "var(--font-mono)", fontWeight: 800 }}>{SITE_CONFIG.membershipFee}</span>
            </div>

            {/* Headline verbatim */}
            <h1 className="hero-title">
              🍎 WE&apos;RE GIVING AWAY <br />
              <span className="text-gradient-gold">iPHONE 17 PROs.</span>
            </h1>

            {/* Subheadline verbatim */}
            <p className="hero-subtitle">
              And we&apos;re building a private electronics community while we&apos;re at it.
            </p>

            {/* Prominently displayed ratio card */}
            <div className="ratio-card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                <span style={{ fontSize: "12px", fontWeight: 800, color: "#fde047", textTransform: "uppercase", letterSpacing: "0.06em", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Sparkles style={{ width: "16px", height: "16px" }} />
                  THE GIVEAWAY SYSTEM
                </span>
                <span className="pill-badge" style={{ fontSize: "11px", padding: "2px 10px", background: "rgba(255,255,255,0.05)" }}>
                  Auditable Formula
                </span>
              </div>

              <div className="ratio-headline">
                FOR EVERY 100 ELIGIBLE PARTICIPANTS → 1 iPHONE 17 PRO
              </div>

              {/* Milestone sequence verbatim */}
              <div className="milestone-ticker">
                <div className="ticker-pill">
                  <span style={{ color: "#94a3b8" }}>100 participants</span>
                  <span style={{ color: "#64748b" }}>→</span>
                  <span style={{ color: "#fde047", fontWeight: 700 }}>1 iPhone 17 Pro</span>
                </div>
                <div className="ticker-pill">
                  <span style={{ color: "#94a3b8" }}>200 participants</span>
                  <span style={{ color: "#64748b" }}>→</span>
                  <span style={{ color: "#fde047", fontWeight: 700 }}>2 iPhone 17 Pros</span>
                </div>
                <div className="ticker-pill">
                  <span style={{ color: "#94a3b8" }}>300 participants</span>
                  <span style={{ color: "#64748b" }}>→</span>
                  <span style={{ color: "#fde047", fontWeight: 700 }}>3 iPhone 17 Pros</span>
                </div>
              </div>
            </div>

            {/* Value pitch verbatim */}
            <p className="hero-pitch">
              Join our private electronics community for <strong style={{ color: "#ffffff", fontWeight: 700 }}>{SITE_CONFIG.membershipFee}</strong> and get access to limited-time electronics deals from selected vendors, with discounts of up to 50% on selected products.
            </p>

            {/* CTA & Disclosure */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
              <a
                href={SITE_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ width: "fit-content" }}
              >
                <span>JOIN THE COMMUNITY — {SITE_CONFIG.membershipFee}</span>
                <ArrowRight style={{ width: "20px", height: "20px" }} />
              </a>

              <p className="hero-disclosure">
                {SITE_CONFIG.membershipFee} is the membership fee for access to the private community and its deals. Giveaway participation is subject to eligibility and the official Giveaway Terms. Membership does not guarantee a prize.
              </p>
            </div>

            {/* Mini Trust Highlights */}
            <div className="hero-highlights">
              <div className="highlight-item">
                <Zap style={{ width: "18px", height: "18px", color: "#fde047" }} />
                <span>Private Deal Drops</span>
              </div>
              <div className="highlight-item">
                <Bell style={{ width: "18px", height: "18px", color: "#38bdf8" }} />
                <span>Telegram Alerts</span>
              </div>
              <div className="highlight-item">
                <ShieldCheck style={{ width: "18px", height: "18px", color: "#10b981" }} />
                <span>Transparent Rules</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual */}
          <div className="hero-visual-col">
            <div className="hero-visual-card">
              <div className="hero-img-container">
                <Image
                  src="/images/hero-iphone17.jpg"
                  alt="Apple iPhone 17 Pro Natural Titanium Flagship"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                
                <div className="visual-top-tag">
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#fde047" }} />
                  Target Giveaway Prize: iPhone 17 Pro
                </div>

                <div className="visual-bottom-meta">
                  <div>
                    <div style={{ fontSize: "10px", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase" }}>GIVEAWAY RATIO</div>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff" }}>1 iPhone : 100 Eligible Members</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "10px", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase" }}>MEMBERSHIP</div>
                    <div style={{ fontSize: "16px", fontWeight: 900, color: "#fde047", fontFamily: "var(--font-mono)" }}>{SITE_CONFIG.membershipFee}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 56px;
          }
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-title {
          font-size: 2.75rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
          line-height: 1.1;
        }
        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }
        @media (min-width: 1200px) {
          .hero-title {
            font-size: 4.5rem;
          }
        }
        .hero-subtitle {
          font-size: 1.25rem;
          font-weight: 500;
          color: #cbd5e1;
          margin-bottom: 32px;
          line-height: 1.4;
        }
        @media (min-width: 768px) {
          .hero-subtitle {
            font-size: 1.5rem;
          }
        }
        .ratio-card {
          width: 100%;
          background: rgba(18, 22, 34, 0.9);
          border: 1px solid rgba(234, 179, 8, 0.35);
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 32px;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 30px -10px rgba(234, 179, 8, 0.2);
        }
        .ratio-headline {
          font-size: 1.25rem;
          font-weight: 900;
          color: #ffffff;
          font-family: var(--font-heading);
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }
        @media (min-width: 640px) {
          .ratio-headline {
            font-size: 1.5rem;
          }
        }
        .milestone-ticker {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-family: var(--font-mono);
          font-size: 13px;
        }
        @media (min-width: 640px) {
          .milestone-ticker {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .ticker-pill {
          background: rgba(8, 9, 14, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }
        .hero-pitch {
          font-size: 1.125rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 620px;
        }
        .hero-disclosure {
          font-size: 12px;
          color: #94a3b8;
          max-width: 580px;
          line-height: 1.5;
        }
        .hero-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
          padding-top: 24px;
          margin-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 13px;
          font-weight: 600;
          color: #cbd5e1;
        }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hero-visual-col {
          display: flex;
          justify-content: center;
        }
        .hero-visual-card {
          width: 100%;
          max-width: 480px;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(18, 22, 34, 0.8);
          padding: 12px;
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px -10px rgba(56, 189, 248, 0.2);
        }
        .hero-img-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 20px;
          overflow: hidden;
          background: #000;
        }
        .visual-top-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(8, 9, 14, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .visual-bottom-meta {
          position: absolute;
          bottom: 14px;
          left: 14px;
          right: 14px;
          background: rgba(8, 9, 14, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
    </section>
  );
};
