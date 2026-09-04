"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Zap,
  Clock,
  Copy,
  Check,
  Send,
  Smartphone,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function CheckoutPage() {
  const router = useRouter();

  // Multi-step: 'details' -> 'pay' -> 'verifying' -> 'success'
  const [step, setStep] = useState<"details" | "pay" | "verifying" | "success">("details");

  // User input states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("phonepe");
  const [utr, setUtr] = useState("");

  // System states
  const [orderId, setOrderId] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // UPI Link
  const upiUri = `upi://pay?pa=${encodeURIComponent(SITE_CONFIG.upiId)}&pn=${encodeURIComponent(
    SITE_CONFIG.merchantName
  )}&am=${SITE_CONFIG.membershipAmount}&cu=INR&tn=${encodeURIComponent(
    `VoltDrop VIP Access ${orderId || ""}`
  )}`;

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
    upiUri
  )}&margin=10`;

  // Countdown timer in 'pay' step
  useEffect(() => {
    let timer: any;
    if (step === "pay" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, timeLeft]);

  // Polling for admin approval in 'verifying' step
  useEffect(() => {
    let pollInterval: any;
    if (step === "verifying" && orderId) {
      pollInterval = setInterval(async () => {
        try {
          const res = await fetch(`/api/payment/status?orderId=${orderId}`);
          if (res.ok) {
            const data = await res.json();
            if (data.status === "approved") {
              clearInterval(pollInterval);
              router.push(`/success?orderId=${orderId}`);
            } else if (data.status === "rejected") {
              clearInterval(pollInterval);
              setErrorMsg("Payment verification rejected by admin. Please contact support.");
              setStep("pay");
            }
          }
        } catch (err) {
          console.error("Polling error:", err);
        }
      }, 2000);
    }
    return () => clearInterval(pollInterval);
  }, [step, orderId, router]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(SITE_CONFIG.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Step 1: Initiate Order
  const handleProceedToPay = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMsg("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          paymentMode: selectedMethod,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to create order");
      }

      setOrderId(data.orderId);
      setTimeLeft(300);
      setStep("pay");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 2: Submit UTR
  const handleSubmitUtr = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!utr.trim() || utr.trim().length < 6) return;

    setIsVerifying(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/payment/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          utr: utr.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit verification");
      }

      setStep("verifying");
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to submit verification. Try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  // For testing convenience
  const handleSimulateApprove = async () => {
    try {
      await fetch(`/api/admin/approve?orderId=${orderId}&action=approve`);
      router.push(`/success?orderId=${orderId}`);
    } catch (err) {
      console.error("Simulate approve failed:", err);
    }
  };

  return (
    <div className="checkout-page-root">
      <div className="site-container" style={{ maxWidth: "600px" }}>
        
        {/* Top Back Nav */}
        <div style={{ marginBottom: "24px" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#94a3b8", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>
            <ArrowLeft style={{ width: "16px", height: "16px" }} />
            <span>Back to VoltDrop Home</span>
          </Link>
        </div>

        <div className="glass-card checkout-card">
          
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "20px", marginBottom: "24px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #fde047 0%, #eab308 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Zap style={{ width: "20px", height: "20px", color: "#08090e", fill: "currentColor" }} />
              </div>
              <div>
                <span style={{ fontSize: "18px", fontWeight: 900, color: "#ffffff", fontFamily: "var(--font-heading)" }}>
                  VoltDrop <span style={{ color: "#fde047" }}>VIP Checkout</span>
                </span>
                <span style={{ fontSize: "12px", color: "#94a3b8", display: "block" }}>
                  One-time membership: {SITE_CONFIG.membershipFee}
                </span>
              </div>
            </div>

            <div className="pill-badge-emerald" style={{ fontSize: "11px", padding: "4px 10px" }}>
              <ShieldCheck style={{ width: "14px", height: "14px" }} />
              <span>Secure UPI</span>
            </div>
          </div>

          {/* STEP 1: Details & Method Selection */}
          {step === "details" && (
            <form onSubmit={handleProceedToPay}>
              <div style={{ marginBottom: "24px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#ffffff", marginBottom: "6px" }}>
                  Join the Private Community
                </h2>
                <p style={{ fontSize: "14px", color: "#cbd5e1", margin: 0 }}>
                  Enter your details to receive private Telegram deal drop alerts and giveaway invitations.
                </p>
              </div>

              {errorMsg && (
                <div className="error-alert">
                  <AlertCircle style={{ width: "16px", height: "16px", flexShrink: 0 }} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">WhatsApp Number * (For Telegram Access)</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="e.g. rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              {/* Payment Mode Selection */}
              <div style={{ marginTop: "24px", marginBottom: "24px" }}>
                <label className="form-label" style={{ marginBottom: "10px" }}>
                  Select Preferred UPI Mode:
                </label>
                <div className="payment-modes-grid">
                  {[
                    { id: "phonepe", name: "PhonePe", icon: "🟣" },
                    { id: "gpay", name: "Google Pay", icon: "🔵" },
                    { id: "paytm", name: "Paytm", icon: "🔷" },
                    { id: "cred", name: "CRED", icon: "⬛" },
                    { id: "other", name: "Any UPI App", icon: "⚡" },
                  ].map((mode) => (
                    <button
                      type="button"
                      key={mode.id}
                      onClick={() => setSelectedMethod(mode.id)}
                      className={`mode-pill ${selectedMethod === mode.id ? "mode-pill-active" : ""}`}
                    >
                      <span style={{ fontSize: "16px" }}>{mode.icon}</span>
                      <span>{mode.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Summary */}
              <div className="order-summary-box">
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#cbd5e1", marginBottom: "6px" }}>
                  <span>VoltDrop VIP Community Membership</span>
                  <span style={{ fontWeight: 800, color: "#ffffff" }}>{SITE_CONFIG.membershipFee}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#94a3b8" }}>
                  <span>iPhone 17 Pro Giveaway Entry (Per 100 Ratio)</span>
                  <span style={{ color: "#6ee7b7", fontWeight: 700 }}>Included</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold"
                style={{ width: "100%", marginTop: "24px", padding: "18px" }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" style={{ width: "18px", height: "18px" }} />
                    <span>Preparing Secure Payment...</span>
                  </>
                ) : (
                  <>
                    <span>Continue to Pay {SITE_CONFIG.membershipFee}</span>
                    <ArrowRight style={{ width: "18px", height: "18px" }} />
                  </>
                )}
              </button>
            </form>
          )}

          {/* STEP 2: QR Code & 5-Minute Timer */}
          {step === "pay" && (
            <div>
              {/* Timer Bar */}
              <div className="timer-bar">
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Clock style={{ width: "18px", height: "18px", color: "#fde047" }} />
                  <span style={{ fontSize: "13px", color: "#cbd5e1", fontWeight: 600 }}>Payment Session Active</span>
                </div>
                <div style={{ fontSize: "18px", fontWeight: 900, color: timeLeft < 60 ? "#f87171" : "#fde047", fontFamily: "var(--font-mono)" }}>
                  {formatTime(timeLeft)}
                </div>
              </div>

              {/* QR Code Presentation */}
              <div className="qr-container">
                <div className="qr-image-frame">
                  <img
                    src={qrImageUrl}
                    alt="Scan UPI QR Code to Pay ₹299"
                    width={240}
                    height={240}
                    style={{ borderRadius: "12px", display: "block" }}
                  />
                </div>

                <div style={{ textAlign: "center", marginTop: "16px" }}>
                  <span style={{ fontSize: "13px", color: "#94a3b8" }}>Scan with PhonePe, GPay, Paytm, CRED or any UPI App</span>
                  <div style={{ fontSize: "20px", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>
                    Exact Amount: <span style={{ color: "#fde047" }}>{SITE_CONFIG.membershipFee}</span>
                  </div>
                </div>

                {/* Copy UPI ID */}
                <div className="upi-copy-row">
                  <span style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "#cbd5e1" }}>
                    {SITE_CONFIG.upiId}
                  </span>
                  <button type="button" onClick={handleCopyUpi} className="copy-btn">
                    {copied ? (
                      <>
                        <Check style={{ width: "14px", height: "14px", color: "#10b981" }} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy style={{ width: "14px", height: "14px" }} />
                        <span>Copy UPI</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Mobile Intent Button */}
                <a
                  href={upiUri}
                  className="btn-secondary-pill"
                  style={{ width: "100%", marginTop: "12px", fontSize: "14px", padding: "12px" }}
                >
                  <Smartphone style={{ width: "16px", height: "16px", color: "#38bdf8" }} />
                  <span>Tap to Pay Directly in UPI App</span>
                </a>
              </div>

              {/* UTR Input Form */}
              <form onSubmit={handleSubmitUtr} style={{ marginTop: "28px" }}>
                <div className="form-group">
                  <label className="form-label">
                    Enter 12-Digit UTR / UPI Reference ID *
                  </label>
                  <input
                    type="text"
                    maxLength={16}
                    placeholder="e.g. 429183920194"
                    value={utr}
                    onChange={(e) => setUtr(e.target.value.replace(/[^0-9a-zA-Z]/g, ""))}
                    className="form-input"
                    style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em", fontSize: "16px" }}
                  />
                  <span style={{ fontSize: "12px", color: "#94a3b8", marginTop: "6px", display: "block" }}>
                    Where to find UTR? Check your UPI app payment receipt for the 12-digit reference number.
                  </span>
                </div>

                {errorMsg && (
                  <div className="error-alert">
                    <AlertCircle style={{ width: "16px", height: "16px", flexShrink: 0 }} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit button: GREYED OUT / DISABLED until valid UTR is typed */}
                <button
                  type="submit"
                  disabled={!utr.trim() || utr.trim().length < 6 || isVerifying}
                  className={`btn-gold ${
                    !utr.trim() || utr.trim().length < 6 ? "btn-disabled" : ""
                  }`}
                  style={{ width: "100%", marginTop: "16px", padding: "18px" }}
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="animate-spin" style={{ width: "18px", height: "18px" }} />
                      <span>Submitting to Admin...</span>
                    </>
                  ) : (
                    <>
                      <span>I Have Paid — Submit UTR</span>
                      <ArrowRight style={{ width: "18px", height: "18px" }} />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* STEP 3: Verifying State */}
          {step === "verifying" && (
            <div style={{ textAlign: "center", padding: "32px 12px" }}>
              <div style={{ marginBottom: "24px", display: "flex", justifyContent: "center" }}>
                <Loader2 className="animate-spin" style={{ width: "56px", height: "56px", color: "#fde047" }} />
              </div>

              <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#ffffff", marginBottom: "8px" }}>
                Verifying Your Payment
              </h2>

              <p style={{ fontSize: "15px", color: "#cbd5e1", lineHeight: 1.6, maxWidth: "440px", margin: "0 auto 24px auto" }}>
                We have notified our admin Telegram group with your UTR <strong style={{ color: "#fde047", fontFamily: "var(--font-mono)" }}>{utr}</strong>.
              </p>

              <div style={{ background: "rgba(8, 9, 14, 0.8)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "16px", padding: "20px", maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", fontSize: "14px" }}>
                  <span style={{ color: "#94a3b8" }}>Order ID:</span>
                  <span style={{ fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-mono)" }}>{orderId}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "14px" }}>
                  <span style={{ color: "#94a3b8" }}>Status:</span>
                  <span style={{ color: "#38bdf8", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#38bdf8", animation: "pulse 1s infinite" }} />
                    Awaiting Admin Approval
                  </span>
                </div>
              </div>

              <p style={{ fontSize: "13px", color: "#94a3b8", marginTop: "20px" }}>
                This page will automatically redirect to the success screen once approved.
              </p>

              {/* Developer Fast-Forward */}
              <div style={{ marginTop: "32px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <button
                  type="button"
                  onClick={handleSimulateApprove}
                  className="btn-secondary-pill"
                  style={{ fontSize: "12px", padding: "10px 20px" }}
                >
                  ⚡ [Testing Mode] Instant Admin Approve
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

      <style jsx>{`
        .checkout-page-root {
          min-height: 100vh;
          padding: 60px 16px;
          background: #08090e;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .checkout-card {
          padding: 36px;
        }
        @media (max-width: 640px) {
          .checkout-page-root {
            padding: 20px 12px;
          }
          .checkout-card {
            padding: 18px 14px;
            border-radius: 18px;
          }
        }
        .form-group {
          margin-bottom: 18px;
        }
        .form-label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #cbd5e1;
          margin-bottom: 8px;
        }
        .form-input {
          width: 100%;
          background: rgba(8, 9, 14, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 14px 16px;
          font-size: 14px;
          color: #ffffff;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          border-color: #fde047;
          box-shadow: 0 0 0 2px rgba(234, 179, 8, 0.2);
        }
        .payment-modes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .mode-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px 8px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .mode-pill:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .mode-pill-active {
          background: rgba(234, 179, 8, 0.15) !important;
          border-color: #fde047 !important;
          color: #fde047 !important;
          font-weight: 700;
        }
        .order-summary-box {
          background: rgba(8, 9, 14, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 16px 18px;
          margin-top: 20px;
        }
        .error-alert {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 13px;
          color: #f87171;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }
        .timer-bar {
          background: rgba(234, 179, 8, 0.1);
          border: 1px solid rgba(234, 179, 8, 0.25);
          border-radius: 14px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .qr-container {
          background: rgba(8, 9, 14, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .qr-image-frame {
          background: #ffffff;
          padding: 14px;
          border-radius: 16px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
        }
        .upi-copy-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 10px 14px;
          margin-top: 18px;
        }
        .copy-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          padding: 5px 12px;
          font-size: 12px;
          font-weight: 700;
          color: #ffffff;
          cursor: pointer;
        }
        .btn-disabled {
          background: #334155 !important;
          color: #94a3b8 !important;
          border-color: #475569 !important;
          box-shadow: none !important;
          cursor: not-allowed !important;
          transform: none !important;
        }
      `}</style>
    </div>
  );
}
