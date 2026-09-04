"use client";

import React from "react";
import Image from "next/image";
import { Send, Bell, Flame, Zap, Shield, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const TelegramWall = () => {
  return (
    <section id="telegram-drops" className="section-wrapper">
      <div className="site-container">
        
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 64px auto" }}>
          <div className="pill-badge pill-badge-sky" style={{ marginBottom: "16px" }}>
            <Send style={{ width: "14px", height: "14px" }} />
            Live Telegram Feed Preview
          </div>

          <h2 style={{ fontSize: "2.75rem", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
            WHERE THE DROPS ACTUALLY HAPPEN.
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#cbd5e1", lineHeight: 1.6 }}>
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
                  sizes="(max-width: 768px) 320px, 360px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div className="phone-footer-pill">
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }} />
                  <span style={{ fontWeight: 700, color: "#ffffff", fontSize: "12px" }}>Channel Alerts Active</span>
                </div>
                <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "11px", fontFamily: "var(--font-mono)" }}>Telegram Push</span>
              </div>
            </div>
          </div>

          {/* Right: Drop Feed Cards */}
          <div className="telegram-cards-col">
            
            <div style={{ fontSize: "12px", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em", display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <Bell style={{ width: "16px", height: "16px", color: "#fde047" }} />
              Sample Deals Pushed Directly to Members
            </div>

            {/* Drop Card 1 */}
            <div className="glass-card drop-card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="pill-badge-gold" style={{ fontSize: "11px", padding: "2px 10px" }}>
                    ⚡ DROP ALERT
                  </span>
                  <span style={{ fontSize: "12px", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>Today, 10:05 AM</span>
                </div>
                <span className="pill-badge-emerald" style={{ fontSize: "11px", padding: "2px 8px" }}>
                  42% OFF MSRP
                </span>
              </div>
              <h4 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px" }}>
                Sony WH-1000XM5 Wireless Noise Cancelling Headphones
              </h4>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.5, marginBottom: "14px" }}>
                Authorized vendor liquidation batch. Black &amp; silver models available. Direct checkout links pushed live.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px" }}>
                <span className="pill-badge" style={{ fontSize: "11px", padding: "4px 10px" }}>🔥 432 reactions</span>
                <span className="pill-badge" style={{ fontSize: "11px", padding: "4px 10px" }}>⚡ 189 claimed</span>
              </div>
            </div>

            {/* Drop Card 2 */}
            <div className="glass-card drop-card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="pill-badge-sky" style={{ fontSize: "11px", padding: "2px 10px" }}>
                    🔥 FLASH ALLOCATION
                  </span>
                  <span style={{ fontSize: "12px", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>Today, 9:52 AM</span>
                </div>
                <span className="pill-badge-emerald" style={{ fontSize: "11px", padding: "2px 8px" }}>
                  Up to 35% OFF
                </span>
              </div>
              <h4 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px" }}>
                Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C)
              </h4>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.5, marginBottom: "14px" }}>
                Surplus distributor inventory liquidation. Limited quantities allocated for community members.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px" }}>
                <span className="pill-badge" style={{ fontSize: "11px", padding: "4px 10px" }}>⚡ 510 reactions</span>
                <span className="pill-badge" style={{ fontSize: "11px", padding: "4px 10px" }}>🏷️ Fast Dispatch</span>
              </div>
            </div>

            {/* Banner */}
            <div className="telegram-join-banner">
              <div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Shield style={{ width: "16px", height: "16px", color: "#38bdf8" }} />
                  Direct Telegram Link Dispatch
                </div>
                <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
                  Channel access details provided immediately upon checkout.
                </p>
              </div>

              <a
                href={SITE_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ padding: "10px 20px", fontSize: "13px", borderRadius: "10px", whiteSpace: "nowrap" }}
              >
                <span>Join for {SITE_CONFIG.membershipFee}</span>
                <ArrowRight style={{ width: "14px", height: "14px" }} />
              </a>
            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        .telegram-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .telegram-grid {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 56px;
          }
        }
        .telegram-phone-col {
          display: flex;
          justify-content: center;
        }
        .phone-mockup {
          position: relative;
          width: 100%;
          max-width: 340px;
          border-radius: 40px;
          padding: 12px;
          background: linear-gradient(180deg, #334155 0%, #0f172a 100%);
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px -10px rgba(56, 189, 248, 0.3);
        }
        .phone-notch {
          position: absolute;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 16px;
          background: #000;
          border-radius: 9999px;
          z-index: 20;
        }
        .phone-screen {
          position: relative;
          width: 100%;
          aspect-ratio: 9/16;
          border-radius: 30px;
          overflow: hidden;
          background: #08090e;
        }
        .phone-footer-pill {
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          background: rgba(18, 22, 34, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8);
        }
        .telegram-cards-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .drop-card {
          padding: 24px;
        }
        .telegram-join-banner {
          background: rgba(18, 22, 34, 0.9);
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: 16px;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
          justify-content: space-between;
        }
        @media (min-width: 640px) {
          .telegram-join-banner {
            flex-direction: row;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};
