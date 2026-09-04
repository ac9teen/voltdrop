"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Bell } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const HeroSection = () => {
  return (
    <section className="hero-section-root">
      <div className="site-container">
        <div className="hero-grid">
          
          {/* Left Column: Content */}
          <div className="hero-content">
            
            {/* Top Pill Badge */}
            <div className="pill-badge pill-badge-gold" style={{ marginBottom: "18px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#fde047", display: "inline-block" }} />
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
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#fde047", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "5px" }}>
                  <Sparkles style={{ width: "13px", height: "13px" }} />
                  THE GIVEAWAY SYSTEM
                </span>
                <span className="pill-badge" style={{ fontSize: "10px", padding: "2px 8px", background: "rgba(255,255,255,0.05)" }}>
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
            <div className="hero-cta-wrapper">
              <Link
                href={SITE_CONFIG.checkoutUrl}
                className="btn-gold hero-cta-btn"
              >
                <span>JOIN THE COMMUNITY — {SITE_CONFIG.membershipFee}</span>
                <ArrowRight style={{ width: "18px", height: "18px" }} />
              </Link>

              <p className="hero-disclosure">
                {SITE_CONFIG.membershipFee} is the membership fee for access to the private community and its deals. Giveaway participation is subject to eligibility and official Giveaway Terms. Membership does not guarantee a prize.
              </p>
            </div>

            {/* Mini Trust Highlights */}
            <div className="hero-highlights">
              <div className="highlight-item">
                <Zap style={{ width: "15px", height: "15px", color: "#fde047" }} />
                <span>Private Deal Drops</span>
              </div>
              <div className="highlight-item">
                <Bell style={{ width: "15px", height: "15px", color: "#38bdf8" }} />
                <span>Telegram Alerts</span>
              </div>
              <div className="highlight-item">
                <ShieldCheck style={{ width: "15px", height: "15px", color: "#10b981" }} />
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
                  sizes="(max-width: 768px) 100vw, 520px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                
                <div className="visual-top-tag">
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#fde047" }} />
                  Target Giveaway Prize: iPhone 17 Pro
                </div>

                <div className="visual-bottom-meta">
                  <div>
                    <div style={{ fontSize: "9px", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase" }}>GIVEAWAY RATIO</div>
                    <div style={{ fontSize: "12px", fontWeight: 800, color: "#ffffff" }}>1 iPhone : 100 Eligible Members</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "9px", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase" }}>MEMBERSHIP</div>
                    <div style={{ fontSize: "14px", fontWeight: 900, color: "#fde047", fontFamily: "var(--font-mono)" }}>{SITE_CONFIG.membershipFee}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .hero-section-root {
          padding: 60px 0 80px 0;
          position: relative;
        }
        @media (max-width: 768px) {
          .hero-section-root {
            padding: 28px 0 44px 0;
          }
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 48px;
          }
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-title {
          font-size: 1.95rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          margin-bottom: 14px;
          line-height: 1.15;
        }
        @media (min-width: 640px) {
          .hero-title {
            font-size: 2.6rem;
          }
        }
        @media (min-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
            margin-bottom: 18px;
          }
        }
        .hero-subtitle {
          font-size: 0.975rem;
          font-weight: 500;
          color: #cbd5e1;
          margin-bottom: 22px;
          line-height: 1.45;
        }
        @media (min-width: 768px) {
          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 28px;
          }
        }
        .ratio-card {
          width: 100%;
          background: rgba(18, 22, 34, 0.9);
          border: 1px solid rgba(234, 179, 8, 0.35);
          border-radius: 16px;
          padding: 16px 18px;
          margin-bottom: 22px;
          box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.7);
        }
        @media (min-width: 768px) {
          .ratio-card {
            border-radius: 20px;
            padding: 22px;
            margin-bottom: 28px;
          }
        }
        .ratio-headline {
          font-size: 1.05rem;
          font-weight: 900;
          color: #ffffff;
          font-family: var(--font-heading);
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          line-height: 1.25;
        }
        @media (min-width: 640px) {
          .ratio-headline {
            font-size: 1.3rem;
          }
        }
        .milestone-ticker {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-family: var(--font-mono);
          font-size: 11px;
        }
        @media (min-width: 640px) {
          .milestone-ticker {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            font-size: 12px;
          }
        }
        .ticker-pill {
          background: rgba(8, 9, 14, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }
        .hero-pitch {
          font-size: 0.925rem;
          color: #cbd5e1;
          line-height: 1.55;
          margin-bottom: 22px;
          max-width: 600px;
        }
        @media (min-width: 768px) {
          .hero-pitch {
            font-size: 1.05rem;
            margin-bottom: 28px;
          }
        }
        .hero-cta-wrapper {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }
        .hero-cta-btn {
          width: fit-content;
        }
        @media (max-width: 768px) {
          .hero-cta-btn {
            width: 100%;
            padding: 14px 20px;
            font-size: 14.5px;
          }
        }
        .hero-disclosure {
          font-size: 11px;
          color: #94a3b8;
          max-width: 560px;
          line-height: 1.45;
        }
        .hero-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          width: 100%;
          padding-top: 18px;
          margin-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 11.5px;
          font-weight: 600;
          color: #cbd5e1;
        }
        @media (min-width: 768px) {
          .hero-highlights {
            font-size: 13px;
            gap: 16px;
            padding-top: 24px;
            margin-top: 28px;
          }
        }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .hero-visual-col {
          display: flex;
          justify-content: center;
        }
        .hero-visual-card {
          width: 100%;
          max-width: 440px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(18, 22, 34, 0.8);
          padding: 8px;
          box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.9);
        }
        @media (min-width: 768px) {
          .hero-visual-card {
            border-radius: 24px;
            padding: 10px;
          }
        }
        .hero-img-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 14px;
          overflow: hidden;
          background: #000;
        }
        .visual-top-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(8, 9, 14, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 10px;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .visual-bottom-meta {
          position: absolute;
          bottom: 10px;
          left: 10px;
          right: 10px;
          background: rgba(8, 9, 14, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
    </section>
  );
};
