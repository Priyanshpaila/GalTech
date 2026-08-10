"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  currentPage: string;
};

export default function PageHero({ eyebrow, title, description, currentPage }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f9f6f0] py-14 sm:py-18 lg:py-20 text-[#2d2c2b] border-b border-[#e2ded9]">
      <div className="page-shell relative z-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#63605d] mb-6">
          <Link href="/" className="transition-colors hover:text-[#1d4ed8]">Home</Link>
          <ChevronRight aria-hidden="true" className="size-3.5 text-[#c6c1b9]" />
          <span aria-current="page" className="text-[#2d2c2b]">{currentPage}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow inline-block mb-3">{eyebrow}</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] leading-[1.08] text-[#2d2c2b] max-w-3xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#44423f]">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

