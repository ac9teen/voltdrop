"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, Bell, Flame, Zap, Shield, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const TelegramWall = () => {
  return (
    <section id="telegram-drops" className="section-wrapper">
      <div className="site-container">
        
        {/* Header */}
        <div className="wall-header-box">
          <div className="pill-badge pill-badge-sky" style={{ marginBottom: "12px" }}>
            <Send style={{ width: "13px", height: "13px" }} />
            Live Telegram Feed Preview
          </div>

          <h2 className="wall-title">
            WHERE THE DROPS ACTUALLY HAPPEN.
          </h2>

          <p className="wall-subtitle">
            Inside the private channel, selected vendors push limited-time pricing and flash allocations. Members get instant push notifications before stock runs out.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="telegram-grid">
          
          {/* Phone Mockup */}
          <div className="telegram-phone-col">
            <div className="phone-mockup">
              <div className="phone-notch" />
              <div className="phone-screen">
                <Image
                  src="/images/telegram-preview-1.jpg"
                  alt="VoltDrop VIP Deals Telegram Feed"
                  fill
                  sizes="(max-width: 768px) 260px, 340px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div className="phone-footer-pill">
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }} />
                  <span style={{ fontWeight: 700, color: "#ffffff", fontSize: "11px" }}>Channel Alerts Active</span>
                </div>
                <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "10px", fontFamily: "var(--font-mono)" }}>Telegram Push</span>
              </div>
            </div>
          </div>

          {/* Right: Drop Feed Cards */}
          <div className="telegram-cards-col">
            
            <div style={{ fontSize: "11px", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
              <Bell style={{ width: "14px", height: "14px", color: "#fde047" }} />
              Sample Deals Pushed Directly to Members
            </div>

            {/* Drop Card 1 */}
            <div className="glass-card drop-card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="pill-badge-gold" style={{ fontSize: "10px", padding: "2px 8px" }}>
                    ⚡ DROP ALERT
                  </span>
                  <span style={{ fontSize: "11px", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>Today, 10:05 AM</span>
                </div>
                <span className="pill-badge-emerald" style={{ fontSize: "10px", padding: "2px 6px" }}>
                  42% OFF MSRP
                </span>
              </div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#ffffff", marginBottom: "4px" }}>
                Sony WH-1000XM5 Wireless Noise Cancelling Headphones
              </h4>
              <p style={{ fontSize: "12.5px", color: "#cbd5e1", lineHeight: 1.5, marginBottom: "12px" }}>
                Authorized vendor liquidation batch. Black &amp; silver models available. Direct checkout links pushed live.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px" }}>
                <span className="pill-badge" style={{ fontSize: "10px", padding: "3px 8px" }}>🔥 432 reactions</span>
                <span className="pill-badge" style={{ fontSize: "10px", padding: "3px 8px" }}>⚡ 189 claimed</span>
              </div>
            </div>

            {/* Drop Card 2 */}
            <div className="glass-card drop-card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="pill-badge-sky" style={{ fontSize: "10px", padding: "2px 8px" }}>
                    🔥 FLASH ALLOCATION
                  </span>
                  <span style={{ fontSize: "11px", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>Today, 9:52 AM</span>
                </div>
                <span className="pill-badge-emerald" style={{ fontSize: "10px", padding: "2px 6px" }}>
                  Up to 35% OFF
                </span>
              </div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#ffffff", marginBottom: "4px" }}>
                Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C)
              </h4>
              <p style={{ fontSize: "12.5px", color: "#cbd5e1", lineHeight: 1.5, marginBottom: "12px" }}>
                Surplus distributor inventory liquidation. Limited quantities allocated for community members.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px" }}>
                <span className="pill-badge" style={{ fontSize: "10px", padding: "3px 8px" }}>⚡ 510 reactions</span>
                <span className="pill-badge" style={{ fontSize: "10px", padding: "3px 8px" }}>🏷️ Fast Dispatch</span>
              </div>
            </div>

            {/* Banner */}
            <div className="telegram-join-banner">
              <div>
                <div style={{ fontSize: "13px", fontWeight: 800, color: "#ffffff", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Shield style={{ width: "15px", height: "15px", color: "#38bdf8" }} />
                  Direct Telegram Link Dispatch
                </div>
                <p style={{ fontSize: "11px", color: "#94a3b8", margin: 0 }}>
                  Channel access details provided immediately upon checkout.
                </p>
              </div>

              <Link
                href={SITE_CONFIG.checkoutUrl}
                className="btn-gold banner-btn"
              >
                <span>Join for {SITE_CONFIG.membershipFee}</span>
                <ArrowRight style={{ width: "13px", height: "13px" }} />
              </Link>
            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        .wall-header-box {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 40px auto;
        }
        @media (max-width: 768px) {
          .wall-header-box {
            margin-bottom: 24px;
          }
        }
        .wall-title {
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
        }
        @media (min-width: 768px) {
          .wall-title {
            font-size: 2.3rem;
            margin-bottom: 16px;
          }
        }
        .wall-subtitle {
          font-size: 0.925rem;
          color: #cbd5e1;
          line-height: 1.55;
        }
        @media (min-width: 768px) {
          .wall-subtitle {
            font-size: 1.05rem;
          }
        }
        .telegram-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .telegram-grid {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 48px;
          }
        }
        .telegram-phone-col {
          display: flex;
          justify-content: center;
        }
        .phone-mockup {
          position: relative;
          width: 100%;
          max-width: 280px;
          border-radius: 32px;
          padding: 10px;
          background: linear-gradient(180deg, #334155 0%, #0f172a 100%);
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.9);
        }
        @media (min-width: 768px) {
          .phone-mockup {
            max-width: 320px;
            border-radius: 36px;
            padding: 12px;
          }
        }
        .phone-notch {
          position: absolute;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 14px;
          background: #000;
          border-radius: 9999px;
          z-index: 20;
        }
        .phone-screen {
          position: relative;
          width: 100%;
          aspect-ratio: 9/16;
          border-radius: 24px;
          overflow: hidden;
          background: #08090e;
        }
        .phone-footer-pill {
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 88%;
          background: rgba(18, 22, 34, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .telegram-cards-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .drop-card {
          padding: 16px 18px;
        }
        .telegram-join-banner {
          background: rgba(18, 22, 34, 0.9);
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: 14px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-start;
          justify-content: space-between;
        }
        @media (min-width: 640px) {
          .telegram-join-banner {
            flex-direction: row;
            align-items: center;
          }
        }
        .banner-btn {
          padding: 8px 16px;
          font-size: 12px;
          border-radius: 8px;
          white-space: nowrap;
        }
        @media (max-width: 640px) {
          .banner-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
