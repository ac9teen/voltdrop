import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const AnnouncementBar = () => {
  return (
    <aside
      aria-label="Official Community Announcement"
      className="announcement-root"
    >
      <div className="site-container announcement-container">
        {/* Left / Main message */}
        <div className="announcement-left">
          <span className="live-dot" />
          <span className="announcement-tag">
            <Sparkles style={{ width: "12px", height: "12px" }} />
            OFFICIAL TELEGRAM COMMUNITY
          </span>
          <span className="announcement-sep">•</span>
          <span className="announcement-fee">
            {SITE_CONFIG.membershipFee} Lifetime Access
          </span>
        </div>

        {/* Right / Secondary details (desktop only) */}
        <div className="announcement-right">
          <span className="announcement-ratio">
            <ShieldCheck style={{ width: "13px", height: "13px" }} />
            1 iPhone 17 Pro per 100 Eligible Members
          </span>
          <span className="announcement-sep" style={{ opacity: 0.3 }}>|</span>
          <span className="announcement-terms">Giveaway terms apply</span>
        </div>
      </div>

      <style jsx>{`
        .announcement-root {
          background: linear-gradient(90deg, #070a12 0%, #151105 50%, #070a12 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 6px 16px;
          color: #cbd5e1;
        }
        .announcement-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0;
        }
        .announcement-left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        @media (max-width: 768px) {
          .announcement-root {
            padding: 6px 12px;
          }
          .announcement-container {
            justify-content: center;
          }
          .announcement-left {
            font-size: 10.5px;
            gap: 6px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .announcement-right {
            display: none !important;
          }
        }
        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #fde047;
          box-shadow: 0 0 8px #fde047;
          display: inline-block;
          flex-shrink: 0;
        }
        .announcement-tag {
          color: #fef08a;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .announcement-sep {
          color: rgba(255, 255, 255, 0.25);
        }
        .announcement-fee {
          color: #ffffff;
        }
        .announcement-right {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
        }
        .announcement-ratio {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #38bdf8;
          font-weight: 700;
        }
        .announcement-terms {
          color: #94a3b8;
        }
      `}</style>
    </aside>
  );
};
