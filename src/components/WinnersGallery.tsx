"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, MapPin, Smartphone, UserCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const WinnersGallery = () => {
  const slots = [
    {
      id: 1,
      name: "Recipient Showcase #01",
      location: "Delhi NCR",
      badge: "Milestone 1 Allocation",
      device: "iPhone 17 Pro (Natural Titanium)",
      status: "Verified & Dispatched",
      image: "/images/member-1.jpg",
    },
    {
      id: 2,
      name: "Recipient Showcase #02",
      location: "Bengaluru",
      badge: "Milestone 2 Allocation",
      device: "iPhone 17 Pro (Natural Titanium)",
      status: "Verified & Dispatched",
      image: "/images/member-1.jpg",
    },
    {
      id: 3,
      name: "Recipient Showcase #03",
      location: "Mumbai",
      badge: "Milestone 3 Allocation",
      device: "iPhone 17 Pro (Natural Titanium)",
      status: "Verified & Dispatched",
      image: "/images/member-1.jpg",
    },
    {
      id: 4,
      name: "Recipient Showcase #04",
      location: "Hyderabad",
      badge: "Milestone 4 Allocation",
      device: "iPhone 17 Pro (Natural Titanium)",
      status: "Verified & Dispatched",
      image: "/images/member-1.jpg",
    },
    {
      id: 5,
      name: "Recipient Showcase #05",
      location: "Pune",
      badge: "Milestone 5 Allocation",
      device: "iPhone 17 Pro (Natural Titanium)",
      status: "Verified & Dispatched",
      image: "/images/member-1.jpg",
    },
    {
      id: 6,
      name: "Recipient Showcase #06",
      location: "Gurgaon",
      badge: "Milestone 6 Allocation",
      device: "iPhone 17 Pro (Natural Titanium)",
      status: "Verified & Dispatched",
      image: "/images/member-1.jpg",
    },
  ];

  return (
    <section id="recipients" className="section-wrapper" style={{ backgroundColor: "rgba(12, 15, 23, 0.4)" }}>
      <div className="site-container">
        
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 64px auto" }}>
          <div className="pill-badge pill-badge-emerald" style={{ marginBottom: "16px" }}>
            <ShieldCheck style={{ width: "15px", height: "15px" }} />
            Giveaway Allocations &amp; Deliveries
          </div>

          <h2 style={{ fontSize: "2.75rem", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
            6 iPHONE RECIPIENT SHOWCASE
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#cbd5e1", lineHeight: 1.6 }}>
            Every 100 eligible participants unlocks an iPhone 17 Pro. Below are the designated 6 milestone recipient showcase cards for verified community members.
          </p>
        </div>

        {/* 6 Photo Slots Grid */}
        <div className="gallery-grid">
          {slots.map((item) => (
            <div key={item.id} className="glass-card gallery-card">
              
              {/* Photo Frame Container */}
              <div className="photo-frame">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                
                <div className="photo-slot-pill">
                  SLOT 0{item.id}
                </div>

                <div className="photo-status-pill">
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }} />
                  {item.status}
                </div>
              </div>

              {/* Card Meta Content */}
              <div style={{ padding: "20px 8px 4px 8px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <h4 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>
                    {item.name}
                  </h4>
                  <span className="pill-badge" style={{ fontSize: "11px", padding: "2px 8px", background: "rgba(255,255,255,0.06)" }}>
                    {item.badge}
                  </span>
                </div>

                <div style={{ fontSize: "13px", color: "#94a3b8", display: "flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
                  <MapPin style={{ width: "14px", height: "14px", color: "#fde047" }} />
                  <span>{item.location} • Verified Member</span>
                </div>

                <div style={{ paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px" }}>
                  <span style={{ color: "#94a3b8" }}>Prize Model:</span>
                  <span style={{ fontWeight: 700, color: "#fde047", fontFamily: "var(--font-mono)" }}>{item.device}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer statement */}
        <div style={{ textAlign: "center", fontSize: "12px", color: "#94a3b8", maxWidth: "680px", margin: "40px auto 0 auto", lineHeight: 1.6, background: "rgba(18, 22, 34, 0.8)", padding: "16px 24px", borderRadius: "16px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
          Recipient allocation and identity verification strictly follow our official Giveaway Terms. Photos reflect verified community deliveries per milestone progression.
        </div>

      </div>

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .gallery-card {
          padding: 16px;
        }
        .photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 16px;
          overflow: hidden;
          background: #08090e;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .photo-slot-pill {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(8, 9, 14, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 800;
          color: #fde047;
          font-family: var(--font-mono);
        }
        .photo-status-pill {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(8, 9, 14, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 6px;
        }
      `}</style>
    </section>
  );
};
