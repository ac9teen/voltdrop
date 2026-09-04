import React from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MilestoneProgression } from "@/components/MilestoneProgression";
import { EmotionalHook } from "@/components/EmotionalHook";
import { MembershipPerks } from "@/components/MembershipPerks";
import { TelegramWall } from "@/components/TelegramWall";
import { WinnersGallery } from "@/components/WinnersGallery";
import { HowItWorks } from "@/components/HowItWorks";
import { DealsShowcase } from "@/components/DealsShowcase";
import { TrustSection } from "@/components/TrustSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { GiveawayDisclosure } from "@/components/GiveawayDisclosure";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070709] text-slate-100 overflow-x-hidden">
      {/* Top Banner */}
      <AnnouncementBar />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* 01: High-Impact Hero with Dominant iPhone 17 Pro Visual */}
        <HeroSection />

        {/* 02: Giveaway Milestone Progression (100:1 Ratio) */}
        <MilestoneProgression />

        {/* 03: Emotional Hook ("You could be holding one of these") */}
        <EmotionalHook />

        {/* 04: What You Get for ₹299 (5 Benefit Cards) */}
        <MembershipPerks />

        {/* 05: Vertical Telegram Group Screenshots Wall (User Request) */}
        <TelegramWall />

        {/* 06: 6 People with iPhones Showcase Grid (User Request) */}
        <WinnersGallery />

        {/* 07: 5-Step Process ("How it Works") */}
        <HowItWorks />

        {/* 08: Deals Showcase ("The giveaways get the attention. The deals keep you here.") */}
        <DealsShowcase />

        {/* 09: Credibility & Trust ("Real Deals. Real Giveaways. Clear Terms.") */}
        <TrustSection />

        {/* 10: FAQ Section with exact verbatim Q&A */}
        <FAQSection />

        {/* 11: Final Conversion Section */}
        <FinalCTA />

        {/* 12: Baseline Giveaway Disclosure & Terms Modal */}
        <GiveawayDisclosure />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA */}
      <StickyMobileCTA />
    </div>
  );
}
