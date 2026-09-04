import { OrderRecord } from "./orders";
import { SITE_CONFIG } from "@/config/site";

export async function sendTelegramPaymentNotification(order: OrderRecord): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn("[TELEGRAM WARN] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured");
    return false;
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://voltdrop-eight.vercel.app";
  const approveUrl = `${appUrl}/api/admin/approve?orderId=${order.orderId}&secret=voltdrop2026`;

  const text =
    `⚡ *NEW VOLTDROP VIP MEMBERSHIP PAYMENT*\n\n` +
    `• *Order ID:* \`${order.orderId}\`\n` +
    `• *Member Name:* \`${order.name}\`\n` +
    `• *WhatsApp / Phone:* \`${order.phone}\`\n` +
    `• *Email:* \`${order.email || "N/A"}\`\n\n` +
    `💳 *Payment Details:*\n` +
    `• *Amount Paid:* \`₹${order.amount}\`\n` +
    `• *Payment App:* \`${order.paymentMode.toUpperCase()}\`\n` +
    `• *UTR / Ref ID:* \`${order.utr || "Pending"}\`\n` +
    `• *Date & Time:* \`${new Date(order.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}\`\n\n` +
    `⚠️ *Action Required:* Verify UTR settlement on banking portal & click below to approve.`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [
            [
              { text: "✅ Approve & Unlock Access", callback_data: `approve:${order.orderId}` },
              { text: "❌ Reject", callback_data: `reject:${order.orderId}` }
            ],
            [
              { text: "🔗 Instant Admin Link", url: approveUrl }
            ]
          ]
        }
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[TELEGRAM ERROR]", err);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[TELEGRAM EXCEPTION]", error);
    return false;
  }
}
