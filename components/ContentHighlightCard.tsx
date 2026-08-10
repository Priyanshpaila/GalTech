"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, MessageSquare, CheckCircle2 } from "lucide-react";

export default function ContentHighlightCard() {
  return (
    <section className="section-space bg-[#f9f6f0]">
      <div className="page-shell">
        {/* Full-width Sunbeam Yellow Content Highlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] bg-[#ffce00] p-8 sm:p-12 lg:p-16 text-[#2d2c2b] shadow-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Floating Notification / Ebb Companion Chat Bubble Mockup */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-sm rounded-[24px] bg-white p-6 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.15)] border border-[#e2ded9]"
              >
                <div className="flex items-center gap-3 border-b border-[#e2ded9] pb-4 mb-4">
                  <span className="size-10 rounded-full bg-[#1d4ed8] grid place-items-center text-white font-bold text-sm shadow-sm">
                    G
                  </span>
                  <div>
                    <div className="text-sm font-bold text-[#2d2c2b] flex items-center gap-1.5">
                      <span>GALTech Assistant</span>
                      <CheckCircle2 className="size-4 text-[#1d4ed8]" />
                    </div>
                    <div className="text-xs text-[#63605d]">Smart Workplace Companion</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl bg-[#f9f6f0] p-3.5 text-xs leading-relaxed text-[#2d2c2b]">
                    "Which 4K interactive panel size fits a 12-person executive boardroom?"
                  </div>
                  <div className="rounded-2xl bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 p-3.5 text-xs font-semibold leading-relaxed text-[#1d4ed8]">
                    ✨ Sirius 75" UHD Panel with 20-point touch & zero-bonding glass is optimal for 12+ seats.
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-bold text-[#63605d] pt-2 border-t border-[#e2ded9]">
                  <span className="flex items-center gap-1">
                    <Sparkles className="size-3 text-[#dc2626]" /> 99.8% SLA Uptime
                  </span>
                  <span className="text-[#1d4ed8]">Verified Deployment</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Display Heading & Action */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-[#2d2c2b] shadow-sm mb-4">
                <Sparkles className="size-3.5 text-[#dc2626]" />
                Interactive Workplace Intelligence
              </span>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] text-[#2d2c2b] mb-6">
                Technology that feels calm, intuitive, and built for your people.
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-[#44423f] mb-8 max-w-xl">
                Whether equipping classrooms or enterprise meeting rooms, GALTech delivers full-lifecycle planning, distribution, and 3-year onsite SLA support.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="button-pill-dark"
                >
                  Explore 4K Panels
                </Link>

                <Link
                  href="/contact"
                  className="button-pill-outline"
                >
                  Request Consultation
                </Link>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
