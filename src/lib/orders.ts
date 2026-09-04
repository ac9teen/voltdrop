import fs from "fs";
import path from "path";

export interface OrderRecord {
  orderId: string;
  name: string;
  email: string;
  phone: string;
  paymentMode: string;
  amount: number;
  utr?: string;
  status: "pending" | "verifying" | "approved" | "rejected";
  createdAt: string;
  updatedAt: string;
}

const ORDERS_FILE = path.join(process.cwd(), "scratch", "orders.json");

function ensureStoreExists() {
  const dir = path.dirname(ORDERS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(ORDERS_FILE)) {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify({}, null, 2));
  }
}

function readOrders(): Record<string, OrderRecord> {
  try {
    ensureStoreExists();
    const data = fs.readFileSync(ORDERS_FILE, "utf-8");
    return JSON.parse(data || "{}");
  } catch {
    return {};
  }
}

function writeOrders(orders: Record<string, OrderRecord>) {
  try {
    ensureStoreExists();
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
  } catch (err) {
    console.error("[ORDERS STORE ERROR]", err);
  }
}

// In-memory global fallback
const globalOrders: Record<string, OrderRecord> = readOrders();

export function saveOrder(order: OrderRecord): OrderRecord {
  globalOrders[order.orderId] = order;
  writeOrders(globalOrders);
  return order;
}

export function getOrder(orderId: string): OrderRecord | null {
  const orders = readOrders();
  return orders[orderId] || globalOrders[orderId] || null;
}

export function updateOrderStatus(orderId: string, status: "pending" | "verifying" | "approved" | "rejected", utr?: string): OrderRecord | null {
  const order = getOrder(orderId);
  if (!order) return null;

  order.status = status;
  if (utr) order.utr = utr;
  order.updatedAt = new Date().toISOString();

  return saveOrder(order);
}

export function findOrderByUtr(utr: string): OrderRecord | null {
  const orders = readOrders();
  const found = Object.values(orders).find((o) => o.utr === utr);
  return found || null;
}
