"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Monitor,
  Printer,
  Projector,
} from "lucide-react";
import VariableProximity from "@/components/react-bits/VariableProximity";
import LightRays from "@/components/react-bits/LightRays";

export default function HeroCarousel() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      aria-label="GALTech Enterprise Solutions"
      className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-[#030712] text-white pt-24 pb-8 sm:pt-28 sm:pb-12 select-none flex flex-col justify-between"
    >
      {/* REACT BITS: Mobile-Responsive Luminous Light Rays (Vibrant Electric Blue #38bdf8) */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#38bdf8"
        raysSpeed={1.2}
        lightSpread={1.2}
        rayLength={1.8}
        saturation={1.6}
        followMouse={true}
        mouseInfluence={0.25}
        fadeDistance={1.5}
        className="opacity-100 mix-blend-screen"
      />

      {/* Dual Royal Blue & Crimson Ambient Glow (Center Ambient Halo) */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 size-[650px] sm:size-[800px] rounded-full bg-gradient-to-r from-[#1d4ed8]/30 via-indigo-600/15 to-[#dc2626]/25 blur-[160px] opacity-90 pointer-events-none z-0" />

      {/* Subtle Grid Matrix Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:52px_52px] opacity-40 pointer-events-none z-0" />

      {/* CENTERED SINGLE COLUMN CONTENT CONTAINER */}
      <div className="page-shell relative z-10 my-auto py-6 sm:py-10 flex flex-col items-center text-center">
        {/* PREMIUM CENTERED HERO HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 mx-auto w-full max-w-[1500px] px-2 sm:px-6 lg:px-8 text-center"
        >
          {/* SMALL EYEBROW */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-4 sm:mb-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 sm:w-12 bg-white/30" />
            <span className="font-sans text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] text-white/75">
              GALTECH • Workplace Solutions
            </span>
            <span className="h-px w-8 sm:w-12 bg-white/30" />
          </motion.div>

          {/* MAIN HEADLINE - IMPACTFUL BOLD SIZING ON MOBILE & DESKTOP */}
          <h1
            className="
              font-bebas
              uppercase
              font-normal
              leading-[0.86]
              tracking-[-0.015em]
              drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]
            "
          >
            <span
              className="
                block
                text-[4rem]
                sm:text-[5.5rem]
                md:text-[7rem]
                lg:text-[8.5rem]
                xl:text-[10rem]
                text-white/95
              "
            >
              GALTECH
            </span>
            <span
              className="
                mt-1
                block
                text-[3.2rem]
                sm:text-[4.8rem]
                md:text-[6.2rem]
                lg:text-[7.8rem]
                xl:text-[9.2rem]
                bg-gradient-to-r
                from-[#38bdf8]
                via-[#a5b4fc]
                to-[#f43f5e]
                bg-clip-text
                text-transparent
              "
            >
              <VariableProximity
                label="INTELLIGENT TECH"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={heroRef}
                radius={160}
                falloff="linear"
              />
            </span>
          </h1>
        </motion.div>

        {/* Minimal Subtext (Compact 1 Line) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 mb-5 sm:mt-4 sm:mb-6 max-w-md text-xs sm:text-base leading-relaxed text-slate-300 font-normal text-balance"
        >
          Equipping modern workplaces & smart classrooms across India.
        </motion.p>

        {/* TWO CTAs (Compact Centered Row) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 sm:mb-8 w-full sm:w-auto"
        >
          {/* Primary CTA (GAL Crimson Red) */}
          <Link
            href="/products"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c9182b] to-[#dc2626] px-7 py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_8px_25px_rgba(220,38,38,0.45)] transition-all duration-300 hover:from-[#b01323] hover:to-[#b91c1c] hover:shadow-[0_12px_35px_rgba(220,38,38,0.65)] hover:scale-[1.03]"
          >
            <span>Explore Solutions</span>
            <ArrowUpRight className="size-3.5 sm:size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          {/* Secondary CTA (GAL Royal Blue Glass) */}
          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-blue-400/40 bg-blue-950/40 px-6 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-blue-400 hover:bg-[#1d4ed8]/30 hover:scale-[1.02]"
          >
            <span>Talk to an Expert</span>
          </Link>
        </motion.div>

        {/* Key Trust Metrics (Centered Strip) */}
        {/* <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 sm:gap-12 pt-4 border-t border-white/10 max-w-lg mx-auto w-full"
        >
          <div className="flex flex-col items-center">
            <div className="font-bebas text-2xl sm:text-3xl text-white tracking-wide">9+ YEARS</div>
            <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-mono">Enterprise SLA</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bebas text-2xl sm:text-3xl text-blue-400 tracking-wide">4,000+</div>
            <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-mono">Deployments</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bebas text-2xl sm:text-3xl text-red-400 tracking-wide">3-YEAR</div>
            <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-mono">Onsite Warranty</div>
          </div>
        </motion.div> */}

      </div>

      {/* BOTTOM ENTERPRISE ECOSYSTEM MARQUEE (Fixed to bottom of 100dvh) */}
      <div className="page-shell relative z-20 py-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-slate-400">
        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          <span className="font-semibold text-white flex items-center gap-1.5">
            <Building2 className="size-3.5 text-blue-400" />
            GALTECH Infosolutions Private Limited
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="hidden sm:inline text-slate-400">Bengaluru, IN</span>
        </div>

        <div className="flex items-center gap-5 mx-auto sm:mx-0">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Monitor className="size-3 text-blue-400" />
            <span>Sirius IFPD</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Printer className="size-3 text-red-400" />
            <span>Toshiba MFDs</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Projector className="size-3 text-cyan-400" />
            <span>InFocus Projectors</span>
          </div>
        </div>
      </div>

    </section>
  );
}
