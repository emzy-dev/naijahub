import Link from "next/link";
import React from "react";
import { 
  TiArrowRight, 
  TiLightbulb, 
  TiGroup, 
  TiChartLine, 
  TiTick,
  TiHeart
} from "react-icons/ti";
import { FaQuoteLeft, FaHandshake, FaBullseye, FaEye } from "react-icons/fa";

// Interface definitions
interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
  lightBg: string;
}

interface CoreValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  location: string;
  bio: string;
}

// Shared Theme Configuration
export const Theme: ThemeConfig = {
  primary: "#2F3E2C",   // Deep Forest Green
  secondary: "#D1EDD3", // Soft Mint Green
  accent: "#E2A03F",    // Muted Gold
  dark: "#1A2218",      // Extra Dark Forest
  lightBg: "#F7FAf7",   // Soft Off-White Green
};

const coreValues: CoreValue[] = [
  {
    icon: <TiChartLine className="text-3xl" />,
    title: "Radical Financial Transparency",
    description: "We don't do 'get rich quick' myths. Every business blueprint includes unvarnished costs, real receipts, local levies, and hidden operating risks.",
  },
  {
    icon: <TiGroup className="text-3xl" />,
    title: "Lived Experience First",
    description: "Advice on Naija Venture Hub comes exclusively from founders currently doing the work on the ground across Nigerian markets.",
  },
  {
    icon: <TiLightbulb className="text-3xl" />,
    title: "Practical Actionability",
    description: "We translate complex regulations, CAC requirements, and local market dynamics into step-by-step checklists anyone can follow.",
  },
  {
    icon: <TiHeart className="text-3xl" />,
    title: "Community Resilience",
    description: "Building a business in Nigeria requires grit. We foster an empathetic network where failures are shared as valuable lessons.",
  },
];

const leadershipTeam: TeamMember[] = [
  {
    name: "Chidubem Okafor",
    role: "Co-Founder & Head of Research",
    location: "Lagos / Enugu",
    bio: "Former FMCG distribution lead with 9+ years managing retail supply chains across Southern Nigeria.",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Co-Founder & Community Lead",
    location: "Kano / Abuja",
    bio: "Agribusiness mentor who has helped over 120 young farmers scale seasonal grain trading and cold storage networks.",
  },
  {
    name: "Babajide Adeleke",
    role: "Head of Mentor Relations",
    location: "Ibadan",
    bio: "Serial SME entrepreneur with experience running logistics hubs and solar-powered cold chain facilities.",
  },
];

export default function AboutUs(): React.ReactElement {
  return (
    <main className="min-h-dvh font-sans antialiased bg-white text-neutral-800">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[60vh] bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex min-h-[60vh] w-full items-center justify-center bg-black/75">
          <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 px-5 py-20 text-white sm:px-8 md:w-3/4 md:py-28">
            <span 
              className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ backgroundColor: Theme.secondary, color: Theme.primary }}
            >
              Our Mission & Story
            </span>
            <h1 className="text-center text-3xl font-extrabold uppercase leading-tight sm:text-4xl md:text-5xl">
              De-risking Business.{" "}
              <span style={{ color: Theme.secondary }}>
                Empowering Nigeria!
              </span>
            </h1>

            <p className="max-w-3xl text-center text-base font-light leading-relaxed sm:text-lg md:text-xl text-neutral-200">
              Naija Venture Hub was built out of a simple observation: millions of Nigerians want to start businesses, but lose millions due to a lack of honest, localized market data and realistic cost guidance.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            
            <div className="rounded-3xl p-8 sm:p-10 border border-neutral-200 bg-neutral-50 shadow-sm flex flex-col justify-between">
              <div>
                <div 
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white"
                  style={{ backgroundColor: Theme.primary }}
                >
                  <FaBullseye />
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: Theme.primary }}>
                  Our Mission
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed sm:text-base">
                  To eliminate capital loss for beginner entrepreneurs in Nigeria by connecting them directly with verified business owners who share authentic ledgers, local hurdles, regulatory playbooks, and practical execution strategies.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-xs font-medium text-neutral-700 border-t border-neutral-200 pt-6">
                <li className="flex items-center gap-2">
                  <TiTick className="text-emerald-600 text-lg" /> Zero theoretical fluff—only real market figures.
                </li>
                <li className="flex items-center gap-2">
                  <TiTick className="text-emerald-600 text-lg" /> Real-time inflation and currency adjustments.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl p-8 sm:p-10 border border-neutral-200 bg-neutral-50 shadow-sm flex flex-col justify-between">
              <div>
                <div 
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-neutral-900"
                  style={{ backgroundColor: Theme.secondary }}
                >
                  <FaEye />
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: Theme.primary }}>
                  Our Vision
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed sm:text-base">
                  To become the most trusted repository of practical SME intelligence across West Africa, ensuring that every startup investment in Nigeria is backed by peer-reviewed experience and accurate operational forecasts.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-xs font-medium text-neutral-700 border-t border-neutral-200 pt-6">
                <li className="flex items-center gap-2">
                  <TiTick className="text-emerald-600 text-lg" /> Coverage across all 36 Nigerian states.
                </li>
                <li className="flex items-center gap-2">
                  <TiTick className="text-emerald-600 text-lg" /> Sustainable SME growth and higher survival rates.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-20" style={{ backgroundColor: Theme.lightBg }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: Theme.primary }}>
              The Principles That Guide Us
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              We hold ourselves and our mentor community to strict standards of transparency and real-world relevance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value: CoreValue, idx: number) => (
              <div 
                key={idx} 
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-neutral-100 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div 
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{ backgroundColor: Theme.secondary, color: Theme.primary }}
                >
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-neutral-900">{value.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP / CONTRIBUTORS ================= */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: Theme.primary }}>
              Driven By Experienced Operators
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Our core team consists of entrepreneurs who have navigated the unique realities of doing business in Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {leadershipTeam.map((member: TeamMember, idx: number) => (
              <div 
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div>
                  <div className="mb-4 inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
                    {member.location}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">{member.name}</h3>
                  <p className="text-xs font-medium mb-4" style={{ color: Theme.primary }}>{member.role}</p>
                  <p className="text-xs text-neutral-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-20" style={{ backgroundColor: Theme.dark }}>
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h2 className="text-3xl font-extrabold sm:text-4xl" style={{ color: Theme.secondary }}>
            Have a Business Story or Lesson to Share?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300">
            Help build the future of Nigerian entrepreneurship. Join our network of verified business mentors today.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="rounded-full px-8 py-4 text-base font-bold text-neutral-900 transition-opacity hover:opacity-90"
              style={{ backgroundColor: Theme.secondary }}
            >
              Become a Mentor
            </Link>
            <Link
              href="/#trending-ideas"
              className="rounded-full border border-white/30 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              Explore Blueprints
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}