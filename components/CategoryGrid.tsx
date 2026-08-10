"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Moon, Compass, Smile, MessageCircle, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "4K Interactive Panels",
    label: "Visual Collaboration",
    icon: Zap,
    iconBg: "bg-[#ffce00] text-[#2d2c2b]", // Sunbeam Yellow Lightning
    href: "/products?category=interactive-panels"
  },
  {
    title: "Toshiba Printers & MFPs",
    label: "Document Productivity",
    icon: Compass,
    iconBg: "bg-[#00a4ff] text-white", // Celeste Teal Spiral
    href: "/products?category=toshiba-printers"
  },
  {
    title: "InFocus Laser Projectors",
    label: "Large-Format Display",
    icon: MessageCircle,
    iconBg: "bg-[#1d4ed8] text-white", // Mindful Blue Speech
    href: "/products?category=infocus-projectors"
  },
  {
    title: "Smart Classrooms",
    label: "Interactive Learning",
    icon: Smile,
    iconBg: "bg-[#ffa1cc] text-[#2d2c2b]", // Pink Smiley
    href: "/products"
  },
  {
    title: "Enterprise Print Control",
    label: "Secure Workflow",
    icon: Moon,
    iconBg: "bg-[#3b197f] text-white", // Deep Indigo Moon
    href: "/products"
  },
  {
    title: "National SLA Support",
    label: "Consultative SLA",
    icon: Zap,
    iconBg: "bg-[#dc2626] text-white", // Brand Orange/Red
    href: "/certificates"
  }
];

export default function CategoryGrid() {
  return (
    <section className="section-space bg-[#f9f6f0]">
      <div className="page-shell">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="eyebrow mb-2">Explore Solutions</p>
          <h2 className="section-title">What would you like to transform today?</h2>
          <p className="mt-4 max-w-xl text-[#44423f] text-base leading-relaxed">
            Discover our curated ecosystem of enterprise displays, document productivity tools, and interactive classroom solutions.
          </p>
        </div>

        {/* 3-Column Category Card Grid (Headspace Tile System) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={cat.href}
                  className="group flex items-center justify-between rounded-[16px] border border-[#e2ded9] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-[#2d2c2b] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#63605d]">
                      {cat.label}
                    </span>
                    <span className="mt-1 font-display text-lg font-bold text-[#2d2c2b] group-hover:text-[#1d4ed8] transition-colors">
                      {cat.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`grid size-11 place-items-center rounded-full ${cat.iconBg} shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="size-5" />
                    </span>
                    <ChevronRight className="size-5 text-[#c6c1b9] group-hover:text-[#2d2c2b] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
