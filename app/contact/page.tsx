import Link from "next/link";
import React from "react";
import { 
  TiLocation, 
  TiMail, 
  TiPhone, 
  TiMessages, 
  TiArrowRight,
  TiTick
} from "react-icons/ti";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaBuilding } from "react-icons/fa";

// Interface definitions
interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
  lightBg: string;
}

interface ContactOption {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  actionText: string;
  actionHref: string;
}

// Shared Theme Configuration
export const Theme: ThemeConfig = {
  primary: "#2F3E2C",   // Deep Forest Green
  secondary: "#D1EDD3", // Soft Mint Green
  accent: "#E2A03F",    // Muted Gold
  dark: "#1A2218",      // Extra Dark Forest
  lightBg: "#F7FAf7",   // Soft Off-White Green
};

const contactChannels: ContactOption[] = [
  {
    icon: <TiMail className="text-3xl" />,
    title: "Email Support",
    subtitle: "For general inquiries, partnership proposals, or account issues.",
    actionText: "hello@naijaventurehub.ng",
    actionHref: "mailto:hello@naijaventurehub.ng",
  },
  {
    icon: <FaWhatsapp className="text-2xl" />,
    title: "WhatsApp Community Hub",
    subtitle: "Get quick assistance and join our verified entrepreneur groups.",
    actionText: "Chat on WhatsApp",
    actionHref: "https://wa.me/2348000000000",
  },
  {
    icon: <TiMessages className="text-3xl" />,
    title: "Mentor Onboarding",
    subtitle: "Are you a business owner looking to share your case study?",
    actionText: "Apply as a Mentor",
    actionHref: "#contact-form",
  },
];

export default function ContactUs(): React.ReactElement {
  return (
    <main className="min-h-dvh font-sans antialiased bg-white text-neutral-800">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[50vh] bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex min-h-[50vh] w-full items-center justify-center bg-black/75">
          <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 px-5 py-16 text-white sm:px-8 md:w-2/3 md:py-24">
            <span 
              className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ backgroundColor: Theme.secondary, color: Theme.primary }}
            >
              Get In Touch
            </span>
            <h1 className="text-center text-3xl font-extrabold uppercase leading-tight sm:text-4xl md:text-5xl">
              We’re Here To{" "}
              <span style={{ color: Theme.secondary }}>
                Help You Succeed!
              </span>
            </h1>

            <p className="max-w-2xl text-center text-base font-light leading-relaxed sm:text-lg text-neutral-200">
              Have questions about starting a business in Nigeria, submitting a case study, or partnering with us? Reach out to our team below.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CHANNELS ================= */}
      <section className="py-16" style={{ backgroundColor: Theme.lightBg }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {contactChannels.map((channel: ContactOption, idx: number) => (
              <div 
                key={idx}
                className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm border border-neutral-100 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div 
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: Theme.secondary, color: Theme.primary }}
                  >
                    {channel.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-neutral-900">{channel.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">{channel.subtitle}</p>
                </div>

                <a
                  href={channel.actionHref}
                  className="flex items-center justify-center w-full gap-2 rounded-xl py-3 text-xs font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: Theme.primary }}
                >
                  {channel.actionText} <TiArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORM & OFFICE LOCATION ================= */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-7 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-2xl font-bold mb-2" style={{ color: Theme.primary }}>
                Send Us a Message
              </h2>
              <p className="text-xs text-neutral-600 mb-8">
                Fill out the form below and our team will get back to you within 24 to 48 business hours.
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Babatunde Ahmed"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs outline-none focus:border-emerald-700 focus:bg-white transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs outline-none focus:border-emerald-700 focus:bg-white transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-2">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      placeholder="+234 800 000 0000"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs outline-none focus:border-emerald-700 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-2">I Want To...</label>
                    <select 
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs outline-none focus:border-emerald-700 focus:bg-white transition-colors"
                    >
                      <option value="general">Ask a General Question</option>
                      <option value="mentor">Become a Business Mentor</option>
                      <option value="report">Report Incorrect Business Cost Data</option>
                      <option value="partnership">Explore Corporate Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs outline-none focus:border-emerald-700 focus:bg-white transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl py-4 text-xs font-bold text-white transition-opacity hover:opacity-90 shadow-md"
                  style={{ backgroundColor: Theme.primary }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Info & Locations */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl p-8 sm:p-10 text-white" style={{ backgroundColor: Theme.dark }}>
              <div>
                <span 
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 inline-block"
                  style={{ backgroundColor: Theme.secondary, color: Theme.primary }}
                >
                  Regional Hubs
                </span>

                <h3 className="text-2xl font-bold mb-6 text-white">
                  Connecting Entrepreneurs Across All 36 States
                </h3>

                <div className="space-y-6 text-xs text-neutral-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-white/10 text-emerald-300">
                      <FaBuilding className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Lagos Innovation Hub</h4>
                      <p className="mt-1">Victoria Island / Yaba Hubs, Lagos State, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-white/10 text-emerald-300">
                      <FaBuilding className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Abuja Liaison Office</h4>
                      <p className="mt-1">Central Business District (CBD), FCT Abuja, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-white/10 text-emerald-300">
                      <TiPhone className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Direct Desk Line</h4>
                      <p className="mt-1">+234 (0) 900 000 NAIJA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                <p className="text-xs font-semibold text-neutral-400 mb-3">Follow & Connect</p>
                <div className="flex gap-4 text-lg text-white">
                  <a href="#" className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>

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
                <li><Link href="/#trending-ideas" className="hover:underline">Low Capital Ideas (&lt;₦200k)</Link></li>
                <li><Link href="/#trending-ideas" className="hover:underline">Medium Capital Ideas (₦200k-₦1M)</Link></li>
                <li><Link href="/#trending-ideas" className="hover:underline">High Capital Businesses (₦1M+)</Link></li>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-bold text-neutral-900">Community</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/contact" className="hover:underline">Find a Mentor</Link></li>
                <li><Link href="/contact" className="hover:underline">Share Your Business Story</Link></li>
                <li><Link href="/about" className="hover:underline">Our Mission</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-bold text-neutral-900">Legal & Support</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact Support</Link></li>
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