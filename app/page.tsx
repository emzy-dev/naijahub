import Link from "next/link";
import React from "react";
import { 
  TiArrowRight, 
  TiLightbulb, 
  TiGroup, 
  TiChartLine, 
  TiThList 
} from "react-icons/ti";
import { FaQuoteLeft } from "react-icons/fa";

// Interface definitions for strict TypeScript safety
interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
  lightBg: string;
}

interface BusinessIdea {
  title: string;
  category: string;
  startupCost: string;
  roiPeriod: string;
  difficulty: "Low" | "Medium" | "High";
  description: string;
  keyInsight: string;
}

interface Mentor {
  name: string;
  role: string;
  location: string;
  experience: string;
  quote: string;
}

interface PlatformFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Theme configuration
export const Theme: ThemeConfig = {
  primary: "#2F3E2C",   // Deep Forest Green
  secondary: "#D1EDD3", // Soft Mint Green
  accent: "#E2A03F",    // Muted Gold for metrics/highlights
  dark: "#1A2218",      // Extra Dark Forest
  lightBg: "#F7FAf7",   // Soft Off-White Green
};

// Featured Nigerian Business Case Studies & Cost Breakdowns
const featuredIdeas: BusinessIdea[] = [
  {
    title: "Point of Sale (POS) & Agent Banking",
    category: "Financial Services",
    startupCost: "₦150,000 - ₦350,000",
    roiPeriod: "2 - 4 Months",
    difficulty: "Low",
    description: "Location-dependent cash withdrawal and transfer service with low startup entry and consistent daily returns.",
    keyInsight: "Foot traffic and liquidity management are 80% of success.",
  },
  {
    title: "Small-Scale Logistics & Delivery",
    category: "Transport & Logistics",
    startupCost: "₦650,000 - ₦1,800,000",
    roiPeriod: "5 - 8 Months",
    difficulty: "Medium",
    description: "Dispatch bike operations serving e-commerce vendors across major cities like Lagos, Abuja, and Port Harcourt.",
    keyInsight: "Rider retention and maintenance tracking determine profit margins.",
  },
  {
    title: "Frozen Foods & Poultry Business",
    category: "Food & Retail",
    startupCost: "₦500,000 - ₦1,200,000",
    roiPeriod: "3 - 6 Months",
    difficulty: "Medium",
    description: "Retail sales of chicken, turkey, and fish backed by reliable solar inverter backup for continuous freezing.",
    keyInsight: "Alternative power backup is non-negotiable for zero stock loss.",
  },
];

// Success Mentors / Real Business Owners
const mentors: Mentor[] = [
  {
    name: "Tunde Bakare",
    role: "Founder, RapidExpress Logistics",
    location: "Lagos",
    experience: "7+ Years in Logistics",
    quote: "I lost ₦1.2M in my first year because I didn't budget for fuel price fluctuations. I share my exact ledger breakdown on Naija Venture Hub so you don't repeat my mistakes.",
  },
  {
    name: "Amina Yusuf",
    role: "CEO, Northern Harvest Grains",
    location: "Kano",
    experience: "10+ Years in Agro-Trading",
    quote: "Understanding seasonal price arbitrage in grain storage transformed my business. NVH allowed me to mentor 40+ young traders across Nigeria last year.",
  },
  {
    name: "Nneka Okonkwo",
    role: "Owner, ChillBites Frozen Foods",
    location: "Enugu",
    experience: "4 Years in Retail Food",
    quote: "Knowing exact solar inverter sizing requirements saved my shop during continuous grid outages. Real data from real Nigerian business owners makes all the difference.",
  },
];

// Platform Value Pillars
const platformFeatures: PlatformFeature[] = [
  {
    icon: <TiChartLine className="text-3xl" />,
    title: "Verified Cost Breakdowns",
    description: "Get accurate, real-time budgets for equipment, local council levies, licensing, rent, and operational float in naira.",
  },
  {
    icon: <TiGroup className="text-3xl" />,
    title: "Direct Owner Mentorship",
    description: "Connect 1-on-1 with veterans currently running successful businesses across all 36 Nigerian states.",
  },
  {
    icon: <TiLightbulb className="text-3xl" />,
    title: "Unfiltered Mistake Handbooks",
    description: "Learn what went wrong for others—from staff theft to currency depreciation—and how to safeguard your capital.",
  },
  {
    icon: <TiThList className="text-3xl" />,
    title: "Step-by-Step Playbooks",
    description: "Actionable execution blueprints customized for local Nigerian regulatory and market conditions.",
  },
];

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-dvh font-sans antialiased bg-white text-neutral-800">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-dvh bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex min-h-dvh w-full items-center justify-center bg-black/70">
          <div className="mx-auto flex min-h-dvh w-full flex-col items-center justify-center gap-7 px-5 py-16 text-white sm:gap-8 sm:px-8 md:w-2/3 md:gap-10 md:py-20">
            <h1 className="text-center text-3xl font-extrabold uppercase leading-tight sm:text-4xl md:text-5xl">
              Think Big.{" "}
              <span style={{ color: Theme.secondary }}>
                Grow Bigger!
              </span>
            </h1>

            <p className="max-w-3xl text-center text-base font-light leading-relaxed sm:text-xl md:text-2xl">
              Naija Venture Hub is a platform that connects aspiring entrepreneurs
              with experienced business owners who share practical advice,
              real-life experiences, challenges, startup costs, and lessons
              learned to help beginners make informed decisions before starting
              their own businesses in Nigeria.
            </p>

            <div className="flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
              <Link
                href="#get-started"
                style={{ backgroundColor: Theme.primary }}
                className="rounded-full px-6 py-3 text-center text-base font-semibold text-white transition-all hover:opacity-90 sm:px-8 sm:text-lg md:text-xl"
              >
                Get Started
              </Link>

              <Link
                href="#trending-ideas"
                className="flex items-center justify-center gap-1 rounded-full border border-neutral-200 px-6 py-3 text-base font-semibold transition-colors hover:bg-white/10 sm:px-8 sm:text-lg md:text-xl"
              >
                Trending Ideas <TiArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS / TRUST BAR ================= */}
      <section style={{ backgroundColor: Theme.primary }} className="py-10 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div className="space-y-1">
              <p className="text-3xl font-extrabold sm:text-4xl" style={{ color: Theme.secondary }}>500+</p>
              <p className="text-xs sm:text-sm font-medium text-neutral-200">Verified Business Profiles</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-extrabold sm:text-4xl" style={{ color: Theme.secondary }}>₦250M+</p>
              <p className="text-xs sm:text-sm font-medium text-neutral-200">Saved in Costly Errors</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-extrabold sm:text-4xl" style={{ color: Theme.secondary }}>12,000+</p>
              <p className="text-xs sm:text-sm font-medium text-neutral-200">Aspiring Entrepreneurs</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-extrabold sm:text-4xl" style={{ color: Theme.secondary }}>36</p>
              <p className="text-xs sm:text-sm font-medium text-neutral-200">Nigerian States Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY NAIJA VENTURE HUB ================= */}
      <section className="py-20" style={{ backgroundColor: Theme.lightBg }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: Theme.primary }}>
              Why Start With Naija Venture Hub?
            </h2>
            <p className="mt-4 text-base text-neutral-600 sm:text-lg">
              Starting a business in Nigeria without real market intelligence is risky. We remove the guesswork so you can invest with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {platformFeatures.map((feature: PlatformFeature, idx: number) => (
              <div 
                key={idx} 
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-neutral-100"
              >
                <div 
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{ backgroundColor: Theme.secondary, color: Theme.primary }}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-neutral-900">{feature.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRENDING BUSINESS IDEAS ================= */}
      <section id="trending-ideas" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: Theme.secondary, color: Theme.primary }}>
                Proven Blueprints
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: Theme.primary }}>
                Explore Trending Business Breakdown
              </h2>
            </div>
            <Link 
              href="#" 
              className="flex items-center gap-1 text-base font-bold hover:underline"
              style={{ color: Theme.primary }}
            >
              Browse All 150+ Blueprints <TiArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredIdeas.map((idea: BusinessIdea, idx: number) => (
              <div 
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:border-neutral-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                      {idea.category}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      Difficulty: {idea.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{idea.title}</h3>
                  <p className="text-xs text-neutral-600 mb-6 leading-relaxed">{idea.description}</p>

                  <div className="space-y-3 rounded-xl p-4 bg-neutral-50 mb-6 border border-neutral-100 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-500">Startup Capital:</span>
                      <span className="font-bold text-neutral-900">{idea.startupCost}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-500">Est. ROI Period:</span>
                      <span className="font-bold text-neutral-900">{idea.roiPeriod}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border-l-4 border-amber-400 bg-amber-50 text-xs text-amber-900 mb-6">
                    <strong>Key Advice:</strong> "{idea.keyInsight}"
                  </div>
                </div>

                <Link
                  href="#"
                  className="flex items-center justify-center w-full gap-2 rounded-xl py-3 text-xs font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: Theme.primary }}
                >
                  View Full Case Study & Breakdown <TiArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REAL EXPERIENCES / MENTORS ================= */}
      <section className="py-20 text-white relative overflow-hidden" style={{ backgroundColor: Theme.dark }}>
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: Theme.secondary }}>
              Learn Directly From Experience
            </h2>
            <p className="mt-4 text-base text-neutral-300">
              No theoretical hype. Real Nigerian business founders sharing real numbers, mistakes, and strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {mentors.map((mentor: Mentor, idx: number) => (
              <div 
                key={idx}
                className="flex flex-col justify-between rounded-2xl bg-white/5 p-8 border border-white/10 backdrop-blur-sm"
              >
                <div>
                  <FaQuoteLeft className="text-2xl mb-4" style={{ color: Theme.secondary }} />
                  <p className="text-sm font-light text-neutral-200 leading-relaxed mb-6 italic">
                    "{mentor.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-bold text-base text-white">{mentor.name}</h4>
                  <p className="text-xs text-neutral-400">{mentor.role}</p>
                  <div className="mt-2 flex items-center gap-2 text-[10px] text-neutral-300">
                    <span className="px-2 py-0.5 rounded bg-white/10">{mentor.location}</span>
                    <span className="px-2 py-0.5 rounded bg-white/10">{mentor.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: Theme.primary }}>
              3 Steps to Launch Safe
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              How Naija Venture Hub guides you from idea validation to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center p-6">
              <div 
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-black"
                style={{ backgroundColor: Theme.secondary, color: Theme.primary }}
              >
                1
              </div>
              <h3 className="mb-2 text-xl font-bold text-neutral-900">Explore Business Blueprints</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Search verified local business ideas filtered by startup capital, state, and complexity level.
              </p>
            </div>

            <div className="text-center p-6">
              <div 
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-black"
                style={{ backgroundColor: Theme.secondary, color: Theme.primary }}
              >
                2
              </div>
              <h3 className="mb-2 text-xl font-bold text-neutral-900">Review Practical Financials</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Inspect real startup budgets, unexpected hidden expenses, local taxes, and estimated ROI schedules.
              </p>
            </div>

            <div className="text-center p-6">
              <div 
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-black"
                style={{ backgroundColor: Theme.secondary, color: Theme.primary }}
              >
                3
              </div>
              <h3 className="mb-2 text-xl font-bold text-neutral-900">Connect & Launch</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Book 1-on-1 Q&A sessions with verified owners who give you feedback on your execution strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section id="get-started" className="py-20" style={{ backgroundColor: Theme.lightBg }}>
        <div className="mx-auto max-w-5xl px-6">
          <div 
            className="rounded-3xl px-8 py-14 text-center text-white shadow-xl md:px-16"
            style={{ backgroundColor: Theme.primary }}
          >
            <h2 className="text-3xl font-extrabold sm:text-4xl" style={{ color: Theme.secondary }}>
              Ready to Start Your Business the Right Way?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-200 sm:text-lg">
              Join thousands of prospective business owners in Nigeria who use real experiences to make smarter investment decisions.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
              <Link
                href="#"
                className="rounded-full px-8 py-4 text-base font-bold text-neutral-900 transition-opacity hover:opacity-90"
                style={{ backgroundColor: Theme.secondary }}
              >
                Create Free Account
              </Link>
              <Link
                href="#"
                className="rounded-full border border-white/30 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                Become a Mentor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-neutral-200 bg-white py-12 text-sm text-neutral-600">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-lg font-extrabold uppercase tracking-wider" style={{ color: Theme.primary }}>
                Naija Venture Hub
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Empowering Nigerian entrepreneurs with transparent market data, real business owner insights, and actionable guidebooks.
              </p>
            </div>

            <div>
              <h4 className="mb-3 font-bold text-neutral-900">Explore</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="#" className="hover:underline">Low Capital Ideas (&lt;₦200k)</Link></li>
                <li><Link href="#" className="hover:underline">Medium Capital Ideas (₦200k-₦1M)</Link></li>
                <li><Link href="#" className="hover:underline">High Capital Businesses (₦1M+)</Link></li>
                <li><Link href="#" className="hover:underline">State-by-State Guides</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-bold text-neutral-900">Community</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="#" className="hover:underline">Find a Mentor</Link></li>
                <li><Link href="#" className="hover:underline">Share Your Business Story</Link></li>
                <li><Link href="#" className="hover:underline">Discussion Forums</Link></li>
                <li><Link href="#" className="hover:underline">Events & Webinars</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-bold text-neutral-900">Legal & Support</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="#" className="hover:underline">Contact Support</Link></li>
                <li><Link href="#" className="hover:underline">FAQs</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-neutral-100 pt-6 text-center text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Naija Venture Hub. All rights reserved. Built for Nigerian entrepreneurs.
          </div>
        </div>
      </footer>

    </main>
  );
}