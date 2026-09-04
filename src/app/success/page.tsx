"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Send,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Gift,
  Bell,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || `VD-${Math.floor(100000 + Math.random() * 900000)}`;
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(SITE_CONFIG.telegramInviteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="success-page-root">
      <div className="site-container" style={{ maxWidth: "620px" }}>
        
        {/* Card */}
        <div className="glass-card success-card">
          
          {/* Animated Success Badge */}
          <div className="success-icon-badge">
            <CheckCircle2 style={{ width: "48px", height: "48px", color: "#10b981" }} />
          </div>

          <div className="pill-badge-emerald" style={{ margin: "0 auto 16px auto" }}>
            <Sparkles style={{ width: "13px", height: "13px" }} />
            <span>Payment Verified & Confirmed</span>
          </div>

          <h1 style={{ fontSize: "2rem", fontWeight: 900, color: "#ffffff", marginBottom: "8px", textAlign: "center", fontFamily: "var(--font-heading)" }}>
            Welcome to <span style={{ color: "#fde047" }}>VoltDrop VIP</span>!
          </h1>

          <p style={{ fontSize: "15px", color: "#cbd5e1", textAlign: "center", lineHeight: 1.6, maxWidth: "460px", margin: "0 auto 28px auto" }}>
            Your transaction has been approved by admin. Your VIP membership is now active and you are officially registered for the iPhone 17 Pro giveaway pool.
          </p>

          {/* Membership Voucher Box */}
          <div className="membership-box">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "12px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", marginBottom: "12px" }}>
              <span style={{ fontSize: "13px", color: "#94a3b8" }}>Membership ID:</span>
              <span style={{ fontSize: "14px", fontWeight: 800, color: "#fde047", fontFamily: "var(--font-mono)" }}>
                {orderId}
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "12px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", marginBottom: "12px" }}>
              <span style={{ fontSize: "13px", color: "#94a3b8" }}>Membership Tier:</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                Lifetime VIP Access ({SITE_CONFIG.membershipFee})
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "13px", color: "#94a3b8" }}>Giveaway Pool Status:</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#6ee7b7", display: "flex", alignItems: "center", gap: "6px" }}>
                <Gift style={{ width: "14px", height: "14px" }} />
                1 Entry Reserved (1:100 Ratio)
              </span>
            </div>
          </div>

          {/* Primary Action Button: Join Telegram */}
          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <a
              href={SITE_CONFIG.telegramInviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                width: "100%",
                padding: "20px 24px",
                fontSize: "17px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                boxShadow: "0 10px 30px rgba(234, 179, 8, 0.35)",
              }}
            >
              <Send style={{ width: "22px", height: "22px", fill: "currentColor" }} />
              <span>JOIN PRIVATE TELEGRAM GROUP NOW</span>
              <ArrowRight style={{ width: "18px", height: "18px" }} />
            </a>

            {/* Copy Link Alternative */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="btn-secondary-pill"
              style={{ width: "100%", marginTop: "12px", padding: "12px", fontSize: "13px" }}
            >
              {copied ? (
                <>
                  <Check style={{ width: "14px", height: "14px", color: "#10b981" }} />
                  <span>Telegram Link Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy style={{ width: "14px", height: "14px" }} />
                  <span>Copy Private Invite Link</span>
                </>
              )}
            </button>
          </div>

          {/* What to do next section */}
          <div className="next-steps-container">
            <h3 style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "14px" }}>
              Next Steps for New Members:
            </h3>

            <div className="step-item">
              <div className="step-num">1</div>
              <div style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.5 }}>
                <strong style={{ color: "#ffffff" }}>Join the Telegram Channel:</strong> Tap the button above to request or join immediately.
              </div>
            </div>

            <div className="step-item">
              <div className="step-num">2</div>
              <div style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.5 }}>
                <strong style={{ color: "#ffffff" }}>Unmute & Pin the Channel:</strong> Flash deals with up to 50% discount sell out in minutes.
              </div>
            </div>

            <div className="step-item">
              <div className="step-num">3</div>
              <div style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.5 }}>
                <strong style={{ color: "#ffffff" }}>Watch Milestone Giveaways:</strong> Every time 100 new members join, we draw an iPhone 17 Pro live!
              </div>
            </div>
          </div>

          {/* Back Home */}
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <Link
              href="/"
              style={{
                fontSize: "13px",
                color: "#94a3b8",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s",
              }}
            >
              ← Return to VoltDrop Homepage
            </Link>
          </div>

        </div>

      </div>

      <style jsx>{`
        .success-page-root {
          min-height: 100vh;
          padding: 60px 16px;
          background: #08090e;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .success-card {
          padding: 40px 32px;
          position: relative;
        }
        @media (max-width: 640px) {
          .success-card {
            padding: 28px 20px;
          }
        }
        .success-icon-badge {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.12);
          border: 2px solid rgba(16, 185, 129, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px auto;
          box-shadow: 0 0 40px rgba(16, 185, 129, 0.2);
        }
        .membership-box {
          background: rgba(8, 9, 14, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 20px;
        }
        .next-steps-container {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 20px;
          margin-top: 28px;
        }
        .step-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
        }
        .step-item:last-child {
          margin-bottom: 0;
        }
        .step-num {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(234, 179, 8, 0.2);
          color: #fde047;
          border: 1px solid rgba(234, 179, 8, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 1px;
        }
      `}</style>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#08090e" }} />}>
      <SuccessContent />
    </Suspense>
  );
}
