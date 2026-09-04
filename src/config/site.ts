/**
 * VoltDrop Private Electronics Community Configuration
 * Keep business name, UPI parameters, Telegram URL, giveaway terms URL,
 * and other configurable parameters here for easy replacement.
 */

export const SITE_CONFIG = {
  communityName: "VoltDrop",
  communityFullName: "VoltDrop VIP Private Electronics Community",
  membershipFee: "₹299",
  membershipAmount: 299,
  currency: "INR",
  pricingType: "One-time membership fee",
  
  // UPI Payment Configuration
  upiId: "voltdrop.vip@icici",
  merchantName: "VoltDrop VIP Community",
  
  // Checkout URL / Modal Route
  checkoutUrl: "/checkout",
  
  // Private Telegram Invite Link
  telegramInviteUrl: "https://t.me/+voltdrop_vip_private_drops",
  
  // Support & contact
  supportEmail: "concierge@voltdrop.vip",
  
  // Links
  giveawayTermsId: "#giveaway-terms",
  
  // Core Giveaway Proposition
  participantsPerPhone: 100,
  targetPhoneModel: "iPhone 17 Pro",
  maxDiscountClaim: "up to 50% on selected products",
  
  // Milestone progression tiers
  milestones: [
    { participants: 100, iphones: 1, label: "100 eligible participants", prize: "1 iPhone 17 Pro", status: "Unlocked / In Progress" },
    { participants: 200, iphones: 2, label: "200 eligible participants", prize: "2 iPhone 17 Pros", status: "Next Tier" },
    { participants: 500, iphones: 5, label: "500 eligible participants", prize: "5 iPhone 17 Pros", status: "Scaling Tier" },
    { participants: 1000, iphones: 10, label: "1,000 eligible participants", prize: "10 iPhone 17 Pros", status: "Major Tier" },
  ],
  
  // Categories
  categories: [
    { name: "iPhones & Smartphones", icon: "Smartphone", desc: "Surplus vendor inventory, unboxings & flash drops" },
    { name: "AirPods & Premium Audio", icon: "Headphones", desc: "Studio headphones, ANC earbuds & Bluetooth sound" },
    { name: "Accessories & Chargers", icon: "Zap", desc: "GaN fast chargers, MagSafe gear, cables & power banks" },
    { name: "Smart Devices & Wearables", icon: "Watch", desc: "Smartwatches, fitness trackers & connected gear" },
    { name: "Computers & Tablets", icon: "Laptop", desc: "High-spec laptops, tablets & productivity hardware" },
    { name: "Other Electronics", icon: "Cpu", desc: "Selected gaming accessories & electronic utilities" },
  ]
};
