"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const EmotionalHook = () => {
  return (
    <section className="section-wrapper">
      <div className="site-container">
        <div className="emotional-box">
          <div className="emotional-grid">
            
            {/* Left Content */}
            <div className="emotional-content">
              <div className="pill-badge pill-badge-gold" style={{ marginBottom: "20px" }}>
                <Sparkles style={{ width: "14px", height: "14px" }} />
                Aspirational Reality
              </div>

              <h2 className="emotional-title">
                YOU COULD BE HOLDING <br />
                <span className="text-gradient-gold">ONE OF THESE.</span>
              </h2>

              <div className="emotional-copy">
                <p>We&apos;re building the community.</p>
                <p>We&apos;re giving the community something back.</p>
                <p style={{ color: "#ffffff", fontWeight: 700, paddingTop: "8px" }}>
                  Every 100 eligible participants = another iPhone 17 Pro giveaway.
                </p>
              </div>

              <div className="emotional-points">
                <div className="point-item">
                  <CheckCircle2 style={{ width: "18px", height: "18px", color: "#10b981", flexShrink: 0 }} />
                  <span>Physical brand-new sealed retail iPhone units</span>
                </div>
                <div className="point-item">
                  <CheckCircle2 style={{ width: "18px", height: "18px", color: "#10b981", flexShrink: 0 }} />
                  <span>Delivered directly to verified eligible recipients</span>
                </div>
                <div className="point-item">
                  <CheckCircle2 style={{ width: "18px", height: "18px", color: "#10b981", flexShrink: 0 }} />
                  <span>Governed strictly by public Giveaway Terms</span>
                </div>
              </div>

              <div style={{ width: "100%" }}>
                <a
                  href={SITE_CONFIG.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <span>JOIN FOR {SITE_CONFIG.membershipFee} →</span>
                </a>
                <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "12px", lineHeight: 1.5, maxWidth: "480px" }}>
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
                  sizes="(max-width: 768px) 100vw, 550px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="img-overlay-bar">
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff", display: "block" }}>
                      iPhone 17 Pro Retail Hardware
                    </span>
                    <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                      Awarded to eligible community members
                    </span>
                  </div>
                  <span className="pill-badge-gold" style={{ fontSize: "12px", padding: "4px 10px", fontFamily: "var(--font-mono)" }}>
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
          border-radius: 32px;
          padding: 48px;
          box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.8);
        }
        @media (max-width: 768px) {
          .emotional-box {
            padding: 24px;
          }
        }
        .emotional-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .emotional-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
        .emotional-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .emotional-title {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 24px;
          letter-spacing: -0.03em;
        }
        @media (min-width: 768px) {
          .emotional-title {
            font-size: 3.25rem;
          }
        }
        .emotional-copy {
          font-size: 1.125rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .emotional-points {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 36px;
          font-size: 14px;
          color: #cbd5e1;
        }
        .point-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .emotional-img-col {
          display: flex;
          justify-content: center;
        }
        .emotional-img-card {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #000;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.9);
        }
        .img-overlay-bar {
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
