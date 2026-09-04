import { NextRequest, NextResponse } from "next/server";
import { saveOrder, OrderRecord } from "@/lib/orders";
import { SITE_CONFIG } from "@/config/site";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, phone, paymentMode } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and Phone number are required" }, { status: 400 });
    }

    const orderId = `VD-${Math.floor(10000 + Math.random() * 90000)}`;
    const now = new Date().toISOString();

    const order: OrderRecord = {
      orderId,
      name: String(name).trim(),
      email: String(email || "").trim(),
      phone: String(phone).trim(),
      paymentMode: String(paymentMode || "upi").toLowerCase(),
      amount: SITE_CONFIG.membershipAmount,
      status: "pending",
      createdAt: now,
      updatedAt: now,
    };

    saveOrder(order);

    return NextResponse.json({
      success: true,
      orderId,
      amount: SITE_CONFIG.membershipAmount,
      upiId: SITE_CONFIG.upiId,
      merchantName: SITE_CONFIG.merchantName,
      expirySeconds: 300,
    });
  } catch (err: any) {
    console.error("[CREATE ORDER ERROR]", err);
    return NextResponse.json({ error: err.message || "Internal Server Error" }, { status: 500 });
  }
}
