"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { CompanyDetails } from "@/config/companyDetails";

type HeroSlide = CompanyDetails["heroSlides"][number];

const slideMotion = {
  initial: { opacity: 0, scale: 1.035 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 1.015,
    transition: { duration: 0.45, ease: "easeInOut" },
  },
};

export default function HeroCarousel() {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

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

  const onMagnetMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setMagnet({
      x: Math.max(
        -5,
        Math.min(5, (event.clientX - bounds.left - bounds.width / 2) * 0.11),
      ),
      y: Math.max(
        -4,
        Math.min(4, (event.clientY - bounds.top - bounds.height / 2) * 0.11),
      ),
    });
  };

  const slide = slides[active];

  return (
    <section
      aria-label="Featured GALTech solutions"
      aria-roledescription="carousel"
      className="relative isolate overflow-hidden bg-navy text-white"
      style={{ touchAction: "pan-y" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setMagnet({ x: 0, y: 0 });
      }}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") goTo(active - 1);
        if (event.key === "ArrowRight") goTo(active + 1);
      }}
      tabIndex={0}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_30%,rgba(0,87,255,.32),transparent_28%),linear-gradient(90deg,#0b1220_2%,rgba(11,18,32,.9)_38%,rgba(11,18,32,.24)_100%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:64px_64px]" />

      {slide ? (
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={slide.title}
            {...slideMotion}
            className="absolute inset-0 -z-10"
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority={active === 0}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={slide.blurDataURL}
              className="object-cover object-center opacity-50"
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/50 via-navy to-navy" />
      )}

      <div className="page-shell relative flex min-h-[520px] items-end py-12 sm:min-h-[580px] sm:py-16 lg:min-h-[620px] lg:py-20">
        <AnimatePresence mode="wait">
          {slide && (
            <motion.div
              key={slide.title}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={handleDragEnd}
              style={{ cursor: "grab" }}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
              transition={{ duration: 0.52, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="mb-7 flex items-center gap-3 text-sm font-semibold tracking-[0.13em] text-cyan-100 uppercase">
                <span className="h-px w-10 bg-mint" />
                {slide.eyebrow}
              </div>
              <h1 className="max-w-3xl font-display text-5xl leading-[1.04] font-semibold tracking-[-0.055em] text-balance sm:text-6xl lg:text-7xl">
                {slide.title}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
                {slide.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <motion.div
                  animate={magnet}
                  transition={{ type: "spring", stiffness: 280, damping: 16 }}
                >
                  <Link
                    href={slide.primaryCta.href}
                    onPointerMove={onMagnetMove}
                    onPointerLeave={() => setMagnet({ x: 0, y: 0 })}
                    className="button-primary group inline-flex w-full items-center justify-center gap-2 bg-brand px-6 text-white shadow-floating sm:w-auto"
                  >
                    {slide.primaryCta.label}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </motion.div>
                <Link
                  href={slide.secondaryCta.href}
                  className="button-secondary inline-flex w-full items-center justify-center px-6 sm:w-auto"
                >
                  {slide.secondaryCta.label}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-8">
          {slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show slide ${index + 1}: ${item.title}`}
              aria-current={active === index}
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${active === index ? "w-9 bg-mint" : "w-4 bg-white/45 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
