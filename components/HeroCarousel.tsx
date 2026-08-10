"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Monitor, Printer, ShieldCheck, CheckCircle2 } from "lucide-react";
import VariableProximity from "@/components/react-bits/VariableProximity";
import LightRays from "@/components/react-bits/LightRays";

export default function HeroCarousel() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      aria-label="GALTech Enterprise Solutions"
      className="relative isolate w-full bg-[#f9f6f0] text-[#2d2c2b] pt-12 pb-16 lg:pt-16 lg:pb-24 select-none overflow-hidden"
    >
      {/* REACT BITS: WebGL Ambient Light Rays (Soft Luminous Rays for Warm Canvas) */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#1d4ed8"
        raysSpeed={0.8}
        lightSpread={1.2}
        rayLength={1.5}
        saturation={1.2}
        followMouse={true}
        mouseInfluence={0.15}
        fadeDistance={1.4}
        className="opacity-40 pointer-events-none"
      />

      {/* Warm Ambient Glow Halos */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-gradient-to-r from-[#ffce00]/20 via-[#1d4ed8]/10 to-[#dc2626]/15 blur-[140px] opacity-70 pointer-events-none z-0" />

      {/* MAIN CONTAINER */}
      <div className="page-shell relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow Pill Badge (Headspace Pill Token) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#e2ded9] bg-white px-5 py-2 text-xs font-semibold text-[#2d2c2b] shadow-sm"
        >
          <span className="size-2.5 rounded-full bg-[#dc2626] animate-pulse" />
          <span className="font-bold tracking-wider uppercase text-[11px]">
            GALTECH • Authorized National Tech Ecosystem
          </span>
        </motion.div>

        {/* HEADSPACE DISPLAY HEADLINE (Tight negative tracking -0.03em, apercu weight 700) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-6"
        >
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] leading-[1.08] text-[#2d2c2b]">
            Unlocking the promise of{" "}
            <span className="inline-block bg-gradient-to-r from-[#1d4ed8] via-[#00a4ff] to-[#dc2626] bg-clip-text text-transparent px-1">
              <VariableProximity
                label="intelligent technology"
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 900"
                containerRef={heroRef}
                radius={150}
                falloff="linear"
              />
            </span>{" "}
            for enterprise.
          </h1>
        </motion.div>

        {/* Subtext (Warm Graphite Legible Body Copy) */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10 max-w-2xl text-base sm:text-lg leading-relaxed text-[#44423f] font-normal"
        >
          Equipping modern workplaces, classrooms, and collaboration spaces across India with trusted 4K interactive displays, Toshiba copiers, and InFocus projection.
        </motion.p>

        {/* HEADSPACE DUAL HERO FEATURE CARDS (Side-by-Side 32px Radius Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full text-left"
        >
          
          {/* FEATURE CARD 1: 4K Interactive Displays */}
          <div className="group relative rounded-[32px] border border-[#e2ded9] bg-white p-8 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#2d2c2b] hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.12)] flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1d4ed8]/10 px-3.5 py-1 text-xs font-bold text-[#1d4ed8]">
                  <Monitor className="size-3.5" />
                  Sirius 4K Series
                </span>
                <span className="text-xs font-semibold text-[#63605d]">Smart Classrooms & Boardrooms</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#2d2c2b] mb-4">
                Interactive Flat Panel Displays
              </h2>

              <p className="text-sm leading-relaxed text-[#44423f] mb-8">
                Transform passive presentations into active collaboration with 20-point touch, 4K UHD zero-bonding glass, and seamless device casting.
              </p>
            </div>

            {/* Mockup Frame & Dark Pill CTA */}
            <div>
              <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden border border-[#e2ded9] bg-[#f9f6f0] mb-8 shadow-inner">
                <Image
                  src="https://images.unsplash.com/photo-1588072432836-7fb78a35d6f3?auto=format&fit=crop&w=1200&q=88"
                  alt="Sirius 4K Interactive Panel in action"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-[#2d2c2b] flex items-center gap-1.5 shadow-sm">
                  <CheckCircle2 className="size-3.5 text-[#1d4ed8]" /> 20-Point Multi-Touch 4K
                </div>
              </div>

              <Link
                href="/products?category=interactive-panels"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2d2c2b] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-black w-full sm:w-auto"
              >
                <span>Explore 4K Panels</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* FEATURE CARD 2: Toshiba Document Productivity */}
          <div className="group relative rounded-[32px] border border-[#e2ded9] bg-white p-8 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#2d2c2b] hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.12)] flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dc2626]/10 px-3.5 py-1 text-xs font-bold text-[#dc2626]">
                  <Printer className="size-3.5" />
                  Toshiba e-STUDIO
                </span>
                <span className="text-xs font-semibold text-[#63605d]">Enterprise Document Control</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#2d2c2b] mb-4">
                Toshiba Multifunction Printers
              </h2>

              <p className="text-sm leading-relaxed text-[#44423f] mb-8">
                Dependable mono and colour print, copy, and cloud scan workflows designed for high-volume enterprise productivity and security.
              </p>
            </div>

            {/* Mockup Frame & Dark Pill CTA */}
            <div>
              <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden border border-[#e2ded9] bg-[#f9f6f0] mb-8 shadow-inner">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=88"
                  alt="Toshiba MFP print workflow"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-[#2d2c2b] flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="size-3.5 text-[#dc2626]" /> Secure Cloud Scan & Print
                </div>
              </div>

              <Link
                href="/products?category=toshiba-printers"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1d4ed8] px-6 py-3 text-sm font-semibold text-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white transition-all w-full sm:w-auto"
              >
                <span>View Toshiba Lineup</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
