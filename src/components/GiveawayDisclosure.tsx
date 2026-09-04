"use client";

import React, { useState } from "react";
import { FileText, ChevronRight, X, ShieldAlert } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const GiveawayDisclosure = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="giveaway-terms" style={{ padding: "64px 0", borderTop: "1px solid rgba(255, 255, 255, 0.08)", backgroundColor: "#06070a", fontSize: "13px", color: "#94a3b8" }}>
      <div className="site-container" style={{ maxWidth: "1000px" }}>
        
        {/* Compliance Box */}
        <div style={{ background: "rgba(18, 22, 34, 0.7)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", padding: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 800, color: "#cbd5e1", textTransform: "uppercase", fontSize: "12px", marginBottom: "14px", letterSpacing: "0.05em" }}>
            <ShieldAlert style={{ width: "16px", height: "16px", color: "#fde047" }} />
            Mandatory Statutory &amp; Promotional Disclosure
          </div>

          <p style={{ lineHeight: 1.7, color: "#cbd5e1", marginBottom: "20px" }}>
            <strong style={{ color: "#ffffff" }}>Giveaway Disclosure:</strong> iPhone giveaways are promotional activities operated by {SITE_CONFIG.communityFullName}. Eligibility requirements, giveaway periods, participant qualification, prize allocation, winner-selection method and other conditions are provided in the applicable Giveaway Terms. The {SITE_CONFIG.membershipFee} payment purchases community membership and access to its content and deals; it does not purchase or guarantee an iPhone or a winning outcome. Apple is not a sponsor, participant or administrator of the giveaway unless expressly stated. iPhone is a trademark of Apple Inc.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "12px" }}>
            <div>
              Commercial Membership Agreement • Version 2026.1 • Independent Community
            </div>

            <button
              onClick={() => setModalOpen(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#38bdf8",
                background: "none",
                border: "none",
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              <FileText style={{ width: "14px", height: "14px" }} />
              <span>Read Full Official Giveaway Terms &amp; Verification Rules</span>
              <ChevronRight style={{ width: "14px", height: "14px" }} />
            </button>
          </div>
        </div>

      </div>

      {/* Terms Modal */}
      {modalOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(16px)" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: "680px", maxHeight: "85vh", backgroundColor: "#0c0f18", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "24px", padding: "32px", overflowY: "auto", boxShadow: "0 30px 60px rgba(0,0,0,0.9)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "16px", marginBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", display: "flex", alignItems: "center", gap: "8px", margin: 0 }}>
                <FileText style={{ width: "20px", height: "20px", color: "#fde047" }} />
                Official Giveaway Terms &amp; Conditions
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "none", color: "#cbd5e1", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <X style={{ width: "18px", height: "18px" }} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "13px", color: "#cbd5e1", lineHeight: 1.7 }}>
              <p>
                <strong>1. Nature of the Service:</strong> The {SITE_CONFIG.membershipFee} charge is strictly a membership fee granting access to the {SITE_CONFIG.communityFullName} private Telegram channel, curated electronics vendor deal drops, and community discussions. It is neither a lottery ticket nor a direct purchase of consumer electronics.
              </p>
              <p>
                <strong>2. Giveaway Mechanics &amp; Ratio:</strong> For every 100 verified eligible participants joining during an active qualification cycle, one (1) brand-new iPhone 17 Pro retail unit is designated for allocation to an eligible community member.
              </p>
              <p>
                <strong>3. Eligibility Requirements:</strong> Participants must be at least 18 years of age, legally resident in eligible jurisdictions, and hold an active, verified Telegram account. Automated scripts, bots, duplicate profiles, or chargeback disputes immediately disqualify participation.
              </p>
              <p>
                <strong>4. Winner Selection &amp; Audit:</strong> Winner allocation is conducted objectively and transparently per established schedule once the respective 100-participant block is verified. Results and delivery verifications are published to the community.
              </p>
              <p>
                <strong>5. No Guarantee:</strong> Membership does not guarantee a prize or return on payment. Deals vary by vendor, stock, and timing.
              </p>
              <p>
                <strong>6. Trademark Notice:</strong> Apple Inc. is not affiliated with, nor a sponsor or endorser of this promotion.
              </p>
            </div>

            <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setModalOpen(false)}
                className="btn-secondary-pill"
                style={{ fontSize: "13px", padding: "10px 24px" }}
              >
                Close Terms
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
