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
    <motion.div ref={target} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="border-t border-slate-200 pt-5">
      <p className="font-display text-4xl font-semibold tracking-[-0.06em] text-navy sm:text-5xl" aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>{value}{stat.suffix}</p>
      <h2 className="mt-2 text-sm font-bold text-ink">{stat.label}</h2>
      <p className="mt-1.5 text-sm leading-5 text-muted">{stat.description}</p>
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

  if (!stats.length) return <section className="h-72 bg-white" aria-hidden="true" />;

  return (
    <section className="bg-white py-16 sm:py-20" aria-label="GALTech at a glance">
      <div className="page-shell grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => <Counter key={stat.label} stat={stat} index={index} />)}
      </div>
    </section>
  );
}
