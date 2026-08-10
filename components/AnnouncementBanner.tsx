"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function AnnouncementBanner() {
  return (
    <div className="w-full bg-[#ffce00] text-[#2d2c2b] py-2.5 px-4 text-center font-sans text-xs sm:text-sm font-semibold relative z-50 border-b border-[#e2ded9]">
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="page-shell flex items-center justify-center gap-2 flex-wrap"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2d2c2b] px-2.5 py-0.5 text-[11px] font-bold text-[#ffce00]">
          <Sparkles className="size-3 text-[#ffce00]" />
          NEW
        </span>
        <span>National Authorized Distributor for Sirius 4K IFPDs, Toshiba MFPs & InFocus Projectors</span>
        <Link
          href="/products"
          className="inline-flex items-center gap-1 font-bold underline hover:opacity-80 transition-opacity ml-1"
        >
          Explore Catalog <ArrowRight className="size-3.5" />
        </Link>
      </motion.div>
    </div>
  );
}
