import { NextRequest, NextResponse } from "next/server";
import { updateOrderStatus, getOrder } from "@/lib/orders";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("orderId");
    const action = searchParams.get("action") || "approve";

    if (!orderId) {
      return NextResponse.json({ error: "Missing orderId" }, { status: 400 });
    }

    const newStatus = action === "reject" ? "rejected" : "approved";
    const order = updateOrderStatus(orderId, newStatus);

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return new Response(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>VoltDrop VIP - Order ${newStatus.toUpperCase()}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: #08090e; color: #f8fafc; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; }
            .card { background: #121622; border: 1px solid #334155; border-radius: 20px; padding: 40px; text-align: center; max-width: 480px; box-shadow: 0 20px 40px rgba(0,0,0,0.8); }
            .badge { display: inline-block; padding: 6px 16px; border-radius: 9999px; font-weight: bold; font-size: 14px; margin-bottom: 20px; background: ${newStatus === "approved" ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)"}; color: ${newStatus === "approved" ? "#34d399" : "#f87171"}; }
            h1 { font-size: 24px; margin-bottom: 12px; }
            p { color: #94a3b8; font-size: 15px; line-height: 1.6; }
            .meta { background: #08090e; border: 1px solid #1e293b; border-radius: 12px; padding: 16px; margin: 20px 0; text-align: left; font-family: monospace; font-size: 13px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="badge">${newStatus === "approved" ? "✅ ACCESS UNLOCKED" : "❌ ORDER REJECTED"}</div>
            <h1>Order ${order.orderId} ${newStatus.toUpperCase()}</h1>
            <p>The member's payment has been updated. The customer portal has been transitioned.</p>
            <div class="meta">
              <div><strong>Client:</strong> ${order.name}</div>
              <div><strong>Phone:</strong> ${order.phone}</div>
              <div><strong>UTR:</strong> ${order.utr || "N/A"}</div>
              <div><strong>Amount:</strong> ₹${order.amount}</div>
            </div>
            <p style="font-size: 12px; color: #64748b;">VoltDrop VIP Automated Payment Verification System</p>
          </div>
        </body>
      </html>`,
      { headers: { "Content-Type": "text/html" } }
    );
  } catch (err: any) {
    console.error("[ADMIN APPROVE ERROR]", err);
    return NextResponse.json({ error: err.message || "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { orderId, action } = body;

    if (!orderId) {
      return NextResponse.json({ error: "Missing orderId" }, { status: 400 });
    }

    const newStatus = action === "reject" ? "rejected" : "approved";
    const order = updateOrderStatus(orderId, newStatus);

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      orderId: order.orderId,
      status: order.status,
    });
  } catch (err: any) {
    console.error("[ADMIN APPROVE POST ERROR]", err);
    return NextResponse.json({ error: err.message || "Internal Server Error" }, { status: 500 });
  }
}
