import { NextRequest, NextResponse } from "next/server";
import { updateOrderStatus } from "@/lib/orders";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

    // Handle Telegram callback queries from inline buttons
    if (body.callback_query) {
      const callbackData = body.callback_query.data || "";
      const chatId = body.callback_query.message?.chat?.id;
      const messageId = body.callback_query.message?.message_id;

      if (callbackData.startsWith("approve:")) {
        const orderId = callbackData.replace("approve:", "");
        const order = updateOrderStatus(orderId, "approved");

        const token = process.env.TELEGRAM_BOT_TOKEN;
        if (token && chatId) {
          await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: `✅ *Order ${orderId} has been APPROVED!*\nCustomer screen has unlocked the Private Telegram invite link.`,
              parse_mode: "Markdown",
            }),
          });
        }
      } else if (callbackData.startsWith("reject:")) {
        const orderId = callbackData.replace("reject:", "");
        updateOrderStatus(orderId, "rejected");

        const token = process.env.TELEGRAM_BOT_TOKEN;
        if (token && chatId) {
          await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: `❌ *Order ${orderId} has been REJECTED.*`,
              parse_mode: "Markdown",
            }),
          });
        }
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[TELEGRAM WEBHOOK ERROR]", err);
    return NextResponse.json({ error: err.message || "Internal Server Error" }, { status: 500 });
  }
}
