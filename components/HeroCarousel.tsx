"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { CompanyDetails } from "@/config/companyDetails";

type HeroSlide = CompanyDetails["heroSlides"][number];

export default function HeroCarousel() {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  // Mouse tracking Motion Values for Multi-Layer Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Soft springs for cinematic lag & fluid momentum
  const springConfig = { damping: 30, stiffness: 90, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Background Image translation (shifts opposite to cursor)
  // Subtle maximum displacement of 1.5% to prevent clipping edges and preserve 60fps
  const bgX = useTransform(smoothX, [-0.5, 0.5], ["1.5%", "-1.5%"]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], ["1.5%", "-1.5%"]);

  // Grid background translation (shifts slightly same direction)
  const gridX = useTransform(smoothX, [-0.5, 0.5], ["-0.8%", "0.8%"]);
  const gridY = useTransform(smoothY, [-0.5, 0.5], ["-0.8%", "0.8%"]);

  // Glowing orbs drifting coordinates
  const orb1X = useTransform(smoothX, [-0.5, 0.5], ["-3%", "3%"]);
  const orb1Y = useTransform(smoothY, [-0.5, 0.5], ["-3%", "3%"]);

  const orb2X = useTransform(smoothX, [-0.5, 0.5], ["3%", "-3%"]);
  const orb2Y = useTransform(smoothY, [-0.5, 0.5], ["3%", "-3%"]);

  // Magnetic primary CTA button spring physics
  const buttonX = useMotionValue(0);
  const buttonY = useMotionValue(0);
  const springButtonX = useSpring(buttonX, { stiffness: 220, damping: 15 });
  const springButtonY = useSpring(buttonY, { stiffness: 220, damping: 15 });

  useEffect(() => {
    let mounted = true;
    void import("@/config/companyDetails").then(({ companyDetails }) => {
      if (mounted) setSlides([...companyDetails.heroSlides]);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const goTo = useCallback(
    (next: number) => {
      if (!slides.length) return;
      setActive((next + slides.length) % slides.length);
    },
    [slides.length],
  );

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) => {
    const swipeThreshold = 80;
    if (info.offset.x > swipeThreshold) {
      goTo(active - 1);
    } else if (info.offset.x < -swipeThreshold) {
      goTo(active + 1);
    }
  };

  useEffect(() => {
    if (paused || slides.length < 2 || reduceMotion) return;
    const timer = window.setInterval(() => goTo(active + 1), 5000);
    return () => window.clearInterval(timer);
  }, [active, goTo, paused, reduceMotion, slides.length]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setPaused(false);
  };

  const onButtonMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - (bounds.left + bounds.width / 2);
    const y = event.clientY - (bounds.top + bounds.height / 2);
    // Dynamic magnetic pull of up to 12px in x, 9px in y
    buttonX.set(Math.max(-12, Math.min(12, x * 0.28)));
    buttonY.set(Math.max(-9, Math.min(9, y * 0.28)));
  };

  const onButtonLeave = () => {
    buttonX.set(0);
    buttonY.set(0);
  };

  const activeSlide = slides[active];

  return (
    <section
      aria-label="Featured GALTech solutions"
      aria-roledescription="carousel"
      className="relative isolate overflow-hidden bg-[#080c16] text-white h-[580px] sm:h-[640px] lg:h-[680px]"
      style={{ touchAction: "pan-y" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") goTo(active - 1);
        if (event.key === "ArrowRight") goTo(active + 1);
      }}
      tabIndex={0}
    >
      {/* Dynamic Keyframes for Progressive Progress Bar */}
      <style>{`
        @keyframes progress-fill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>

      {/* Static Radial & Linear Overlays */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_16%_30%,rgba(0,87,255,.2),transparent_40%),linear-gradient(90deg,#080c16_20%,rgba(8,12,22,.98)_55%,rgba(8,12,22,.45)_100%)] pointer-events-none" />

      {/* Layer 2: Ambient Glowing Orbs */}
      {!reduceMotion && (
        <>
          <motion.div
            style={{ x: orb1X, y: orb1Y }}
            className="absolute right-[12%] top-[12%] -z-10 h-[320px] w-[320px] rounded-full bg-brand/15 opacity-40 blur-[90px] pointer-events-none"
          />
          <motion.div
            style={{ x: orb2X, y: orb2Y }}
            className="absolute left-[8%] bottom-[18%] -z-10 h-[380px] w-[380px] rounded-full bg-mint/15 opacity-30 blur-[110px] pointer-events-none"
          />
        </>
      )}

      {/* Layer 3: Technical grid mesh */}
      <motion.div
        style={{ x: reduceMotion ? 0 : gridX, y: reduceMotion ? 0 : gridY }}
        className="absolute inset-[-5%] -z-20 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:56px_56px] pointer-events-none"
      />

      {/* Layer 4: Cinematic Background Image Crossfades */}
      {slides.map((item, index) => (
        <motion.div
          key={`bg-${item.title}`}
          initial={false}
          animate={{
            opacity: active === index ? 0.38 : 0,
            scale: active === index ? 1.02 : 1.0,
          }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          style={{ x: reduceMotion ? 0 : bgX, y: reduceMotion ? 0 : bgY }}
          className="absolute inset-[-4%] -z-30 overflow-hidden pointer-events-none"
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            priority={index === 0}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={item.blurDataURL}
            className="object-cover object-center pointer-events-none"
          />
        </motion.div>
      ))}

      {/* Interactive content foreground */}
      <div className="page-shell relative z-20 h-full flex items-center pt-24 pb-16">
        <div className="relative w-full max-w-3xl h-[380px] sm:h-[350px] md:h-[370px] lg:h-[400px]">
          <AnimatePresence mode="wait">
            {activeSlide && (
              <motion.div
                key={`content-${active}`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={handleDragEnd}
                style={{ cursor: "grab" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 30,
                  duration: 0.55
                }}
                className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-end select-none"
              >
                {/* Eyebrow - Fixed overlap by using standard margins */}
                <div className="mb-4 flex items-center gap-3 text-sm font-semibold tracking-[0.13em] text-cyan-100 uppercase">
                  <span className="h-px w-8 bg-mint" />
                  {activeSlide.eyebrow}
                </div>

                {/* Title - Unrestricted height allows natural text wrapping */}
                <h1 className="mb-5 font-display text-4xl leading-[1.04] font-semibold tracking-[-0.055em] text-balance sm:text-5xl lg:text-6xl xl:text-7xl text-white">
                  {activeSlide.title}
                </h1>

                {/* Description */}
                <p className="mb-8 max-w-xl text-base leading-7 text-slate-100 sm:text-lg">
                  {activeSlide.description}
                </p>

                {/* Buttons Container */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  {/* Magnetic Primary CTA button */}
                  <motion.div
                    style={{ x: springButtonX, y: springButtonY }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      href={activeSlide.primaryCta.href}
                      onPointerMove={onButtonMove}
                      onPointerLeave={onButtonLeave}
                      className="button-primary group inline-flex w-full items-center justify-center gap-2 bg-brand px-6 text-white shadow-floating sm:w-auto"
                    >
                      {activeSlide.primaryCta.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </motion.div>

                  <Link
                    href={activeSlide.secondaryCta.href}
                    className="button-secondary inline-flex w-full items-center justify-center px-6 sm:w-auto"
                  >
                    {activeSlide.secondaryCta.label}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating Progressive Indicator Pills */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 sm:bottom-8 z-20">
          {slides.map((item, index) => (
            <button
              key={`indicator-${item.title}`}
              type="button"
              aria-label={`Show slide ${index + 1}: ${item.title}`}
              aria-current={active === index}
              onClick={() => goTo(index)}
              className="relative h-1.5 w-10 sm:w-14 overflow-hidden rounded-full bg-white/25 transition-all hover:bg-white/40"
            >
              {active === index && (
                <div
                  className="absolute inset-y-0 left-0 right-0 origin-left bg-mint shadow-[0_0_8px_rgba(0,194,168,0.9)]"
                  style={{
                    animation: "progress-fill 5000ms linear forwards",
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}