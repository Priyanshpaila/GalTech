"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { CompanyDetails } from "@/config/companyDetails";

type Statistic = CompanyDetails["statistics"][number];

function Counter({ stat, index }: { stat: Statistic; index: number }) {
  const target = useRef<HTMLDivElement>(null);
  const visible = useInView(target, { once: true, amount: 0.45 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (reduceMotion) {
      setValue(stat.value);
      return;
    }
    const controls = animate(0, stat.value, {
      duration: 1.2 + index * 0.08,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.round(latest))
    });
    return () => controls.stop();
  }, [index, reduceMotion, stat.value, visible]);

  return (
    <motion.div
      ref={target}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="headspace-card flex flex-col justify-between"
    >
      <div>
        <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.04em] text-[#1d4ed8]" aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>
          {value}{stat.suffix}
        </p>
        <h3 className="mt-2 font-display text-base font-bold text-[#2d2c2b] capitalize">{stat.label}</h3>
        <p className="mt-2 text-xs leading-relaxed text-[#44423f]">{stat.description}</p>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const [stats, setStats] = useState<Statistic[]>([]);

  useEffect(() => {
    let mounted = true;
    void import("@/config/companyDetails").then(({ companyDetails }) => {
      if (mounted) setStats([...companyDetails.statistics]);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!stats.length) return <section className="h-72 bg-[#f9f6f0]" aria-hidden="true" />;

  return (
    <section className="bg-[#f9f6f0] py-16 sm:py-20 border-b border-[#e2ded9]" aria-label="GALTech at a glance">
      <div className="page-shell">
        <div className="text-center mb-10">
          <p className="eyebrow mb-2">GALTech at a glance</p>
          <h2 className="section-title mx-auto">Impact built on years of experience.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => <Counter key={stat.label} stat={stat} index={index} />)}
        </div>
      </div>
    </section>
  );
}

