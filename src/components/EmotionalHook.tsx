"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const EmotionalHook = () => {
  return (
    <section className="section-wrapper">
      <div className="site-container">
        <div className="emotional-box">
          <div className="emotional-grid">
            
            {/* Left Content */}
            <div className="emotional-content">
              <div className="pill-badge pill-badge-gold" style={{ marginBottom: "14px" }}>
                <Sparkles style={{ width: "13px", height: "13px" }} />
                Aspirational Reality
              </div>

              <h2 className="emotional-title">
                YOU COULD BE HOLDING <br />
                <span className="text-gradient-gold">ONE OF THESE.</span>
              </h2>

              <div className="emotional-copy">
                <p>We&apos;re building the community.</p>
                <p>We&apos;re giving the community something back.</p>
                <p style={{ color: "#ffffff", fontWeight: 700, paddingTop: "6px" }}>
                  Every 100 eligible participants = another iPhone 17 Pro giveaway.
                </p>
              </div>

              <div className="emotional-points">
                <div className="point-item">
                  <CheckCircle2 style={{ width: "16px", height: "16px", color: "#10b981", flexShrink: 0 }} />
                  <span>Physical brand-new sealed retail iPhone units</span>
                </div>
                <div className="point-item">
                  <CheckCircle2 style={{ width: "16px", height: "16px", color: "#10b981", flexShrink: 0 }} />
                  <span>Delivered directly to verified eligible recipients</span>
                </div>
                <div className="point-item">
                  <CheckCircle2 style={{ width: "16px", height: "16px", color: "#10b981", flexShrink: 0 }} />
                  <span>Governed strictly by public Giveaway Terms</span>
                </div>
              </div>

              <div style={{ width: "100%" }}>
                <Link
                  href={SITE_CONFIG.checkoutUrl}
                  className="btn-gold emotional-cta"
                >
                  <span>JOIN FOR {SITE_CONFIG.membershipFee} →</span>
                </Link>
                <p style={{ fontSize: "11px", color: "#94a3b8", marginTop: "10px", lineHeight: 1.45, maxWidth: "480px" }}>
                  Membership does not guarantee a winning outcome. Official Giveaway Terms apply to all participant qualification.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="emotional-img-col">
              <div className="emotional-img-card">
                <Image
                  src="/images/holding-iphone17.jpg"
                  alt="Holding brand new iPhone 17 Pro in hand"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="img-overlay-bar">
                  <div>
                    <span style={{ fontSize: "12px", fontWeight: 800, color: "#ffffff", display: "block" }}>
                      iPhone 17 Pro Retail Hardware
                    </span>
                    <span style={{ fontSize: "10.5px", color: "#94a3b8" }}>
                      Awarded to eligible community members
                    </span>
                  </div>
                  <span className="pill-badge-gold" style={{ fontSize: "10.5px", padding: "3px 8px", fontFamily: "var(--font-mono)" }}>
                    1:100 Ratio
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .emotional-box {
          background: rgba(18, 22, 34, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 20px 16px;
          box-shadow: 0 15px 40px -15px rgba(0, 0, 0, 0.8);
        }
        @media (min-width: 768px) {
          .emotional-box {
            border-radius: 28px;
            padding: 36px 40px;
          }
        }
        .emotional-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .emotional-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 40px;
          }
        }
        .emotional-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .emotional-title {
          font-size: 1.6rem;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
        }
        @media (min-width: 768px) {
          .emotional-title {
            font-size: 2.3rem;
            margin-bottom: 20px;
          }
        }
        .emotional-copy {
          font-size: 0.925rem;
          color: #cbd5e1;
          line-height: 1.55;
          margin-bottom: 20px;
        }
        @media (min-width: 768px) {
          .emotional-copy {
            font-size: 1.05rem;
          }
        }
        .emotional-points {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
          font-size: 13px;
          color: #cbd5e1;
        }
        .point-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .emotional-cta {
          width: 100%;
        }
        @media (min-width: 640px) {
          .emotional-cta {
            width: fit-content;
          }
        }
        .emotional-img-col {
          display: flex;
          justify-content: center;
        }
        .emotional-img-card {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: #000;
        }
        .img-overlay-bar {
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
