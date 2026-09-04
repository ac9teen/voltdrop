import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#070709",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://voltdrop.vip"),
  title: "🍎 WE'RE GIVING AWAY iPHONE 17 PROs — VoltDrop VIP Deals Community",
  description: "Join our private electronics community for ₹299. Access limited-time electronics deals from selected vendors with discounts of up to 50%, plus 1 iPhone 17 Pro given away for every 100 eligible participants.",
  keywords: ["iPhone 17 Pro giveaway", "electronics deals", "private telegram deals", "VoltDrop", "discount electronics", "tech giveaways India"],
  authors: [{ name: "VoltDrop VIP" }],
  openGraph: {
    title: "🍎 WE'RE GIVING AWAY iPHONE 17 PROs — VoltDrop VIP Deals",
    description: "Join our private electronics community for ₹299. 1 iPhone 17 Pro giveaway per 100 eligible participants.",
    url: "https://voltdrop.vip",
    siteName: "VoltDrop Private Electronics Community",
    images: [
      {
        url: "/images/hero-iphone17.jpg",
        width: 1200,
        height: 675,
        alt: "iPhone 17 Pro Giveaway - VoltDrop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WE'RE GIVING AWAY iPHONE 17 PROs — VoltDrop",
    description: "Private electronics community for ₹299. 1 iPhone 17 Pro per 100 eligible participants.",
    images: ["/images/hero-iphone17.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#070709] text-slate-100 antialiased selection:bg-amber-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
