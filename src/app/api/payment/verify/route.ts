import { NextRequest, NextResponse } from "next/server";
import { updateOrderStatus, getOrder } from "@/lib/orders";
import { sendTelegramPaymentNotification } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { orderId, utr } = body;

    if (!orderId || !utr) {
      return NextResponse.json({ error: "Order ID and 12-digit UTR are required" }, { status: 400 });
    }

    const cleanUtr = String(utr).trim();
    if (cleanUtr.length < 6) {
      return NextResponse.json({ error: "Please enter a valid UTR / UPI reference ID" }, { status: 400 });
    }

    const updatedOrder = updateOrderStatus(orderId, "verifying", cleanUtr);
    if (!updatedOrder) {
      return NextResponse.json({ error: "Order session not found or expired" }, { status: 404 });
    }

    // Dispatch Telegram alert to admin
    await sendTelegramPaymentNotification(updatedOrder);

    return NextResponse.json({
      success: true,
      message: "Payment verification submitted. Forwarded to admin Telegram.",
      orderId: updatedOrder.orderId,
      status: updatedOrder.status,
    });
  } catch (err: any) {
    console.error("[VERIFY PAYMENT ERROR]", err);
    return NextResponse.json({ error: err.message || "Internal Server Error" }, { status: 500 });
  }
}
