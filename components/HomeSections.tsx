"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Building2, Check, GraduationCap, Headphones, Mail, Phone, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import type { CompanyDetails } from "@/config/companyDetails";

const solutionIcons = { building: Building2, graduation: GraduationCap, headphones: Headphones };

const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] } };

export default function HomeSections() {
  const [data, setData] = useState<CompanyDetails | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let mounted = true;
    void import("@/config/companyDetails").then(({ companyDetails }) => {
      if (mounted) setData(companyDetails);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!data) return <div className="min-h-[1500px] bg-canvas" aria-hidden="true" />;

  return (
    <>
      <section className="border-b border-slate-200 bg-white py-5" aria-label="GALTech commitments">
        <div className="page-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.trustIndicators.map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-sm font-semibold text-slate-600"><Check aria-hidden="true" className="size-4 text-mint" />{item}</div>
          ))}
        </div>
      </section>

      <section id="solutions" className="section-space scroll-mt-20 bg-canvas">
        <div className="page-shell">
          <motion.div {...reveal} className="grid gap-7 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div><p className="eyebrow">Built around the way you work</p><h2 className="section-title mt-4">Technology with a clear purpose.</h2></div>
            <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">GALTech brings the right mix of hardware, planning, and partner support to every environment where people need to connect and get work done.</p>
          </motion.div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {data.solutions.map((solution, index) => {
              const Icon = solutionIcons[solution.icon];
              return <motion.article key={solution.title} initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group rounded-card border border-slate-200 bg-white p-6 shadow-enterprise transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-floating">
                <div className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand"><Icon aria-hidden="true" className="size-6" /></div>
                <h3 className="mt-7 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">{solution.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{solution.description}</p>
                <p className="mt-7 border-t border-slate-100 pt-4 text-sm font-semibold text-brand">{solution.outcome}</p>
              </motion.article>;
            })}
          </div>
        </div>
      </section>

      <section id="products" className="section-space scroll-mt-20 bg-white">
        <div className="page-shell">
          <motion.div {...reveal} className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">A focused technology portfolio</p><h2 className="section-title mt-4">Equip every space to do more.</h2></div><Link href="#contact" className="inline-flex items-center gap-2 self-start text-sm font-bold text-brand transition-colors hover:text-sky focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand md:self-auto">Get a tailored recommendation <ArrowRight aria-hidden="true" className="size-4" /></Link></motion.div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {data.productCategories.map((category, index) => <motion.article key={category.title} initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.48, delay: index * 0.07 }} className="group overflow-hidden rounded-card border border-slate-200 bg-canvas shadow-enterprise transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-floating">
              <div className="relative aspect-[1.45] overflow-hidden"><Image src={category.image} alt={category.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" placeholder="blur" blurDataURL={category.blurDataURL} className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent" /></div>
              <div className="p-6"><p className="eyebrow text-brand">{category.eyebrow}</p><h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">{category.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{category.description}</p><ul className="mt-5 space-y-2">{category.capabilities.map((capability) => <li key={capability} className="flex gap-2 text-sm text-slate-700"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-mint" />{capability}</li>)}</ul><Link href={category.href} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand transition-colors hover:text-sky focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">Learn more <ArrowUpRight aria-hidden="true" className="size-4" /></Link></div>
            </motion.article>)}
          </div>
        </div>
      </section>

      <section id="featured-product" className="scroll-mt-20 overflow-hidden bg-navy py-20 text-white sm:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div {...reveal}><p className="eyebrow text-cyan-100">{data.featuredProduct.eyebrow}</p><h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.08] font-semibold tracking-[-0.055em] sm:text-5xl">{data.featuredProduct.name}</h2><p className="mt-6 max-w-xl leading-7 text-slate-300">{data.featuredProduct.description}</p><dl className="mt-8 grid gap-x-7 gap-y-5 border-y border-white/10 py-7 sm:grid-cols-2">{data.featuredProduct.specifications.map((spec) => <div key={spec.label}><dt className="text-xs font-bold tracking-[0.12em] text-slate-400 uppercase">{spec.label}</dt><dd className="mt-2 text-sm font-medium leading-5 text-white">{spec.value}</dd></div>)}</dl><Link href={data.featuredProduct.cta.href} className="button-primary mt-8 inline-flex items-center gap-2 bg-brand px-6 text-white shadow-floating">{data.featuredProduct.cta.label}<ArrowUpRight aria-hidden="true" className="size-4" /></Link></motion.div>
          <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="relative mx-auto w-full max-w-xl"><div className="absolute -inset-5 -z-10 rounded-[36px] bg-brand/20 blur-2xl" /><div className="relative aspect-[1.08] overflow-hidden rounded-card border border-white/15"><Image src={data.featuredProduct.image} alt={data.featuredProduct.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" placeholder="blur" blurDataURL={data.featuredProduct.blurDataURL} className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" /></div><div className="absolute right-5 bottom-5 left-5 rounded-2xl border border-white/15 bg-navy/70 p-4 backdrop-blur-md"><p className="text-sm font-semibold">Designed for shared understanding</p><p className="mt-1 text-xs leading-5 text-slate-300">High-definition clarity, responsive touch, and simple in-room collaboration.</p></div></motion.div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-20 bg-white py-16 sm:py-20"><div className="page-shell"><p className="text-center text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">Trusted technology ecosystem</p><div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-slate-200 bg-slate-200 sm:grid-cols-4">{data.partners.map((partner) => <div key={partner} className="grid min-h-28 place-items-center bg-white px-5 text-center font-display text-xl font-semibold tracking-[-0.05em] text-navy sm:text-2xl">{partner}</div>)}</div></div></section>

      <section id="why-galtech" className="section-space scroll-mt-20 bg-canvas"><div className="page-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><motion.div {...reveal}><p className="eyebrow">Why GALTech</p><h2 className="section-title mt-4">The right technology partner feels like part of your team.</h2><p className="mt-6 max-w-md leading-7 text-muted">We combine a focused technology portfolio with practical guidance, so your investment remains clear, capable, and ready for what comes next.</p><div className="mt-8 inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/10 px-4 py-2 text-sm font-semibold text-teal-800"><ShieldCheck aria-hidden="true" className="size-4" />Enterprise-grade, future-focused</div></motion.div><div className="divide-y divide-slate-200 border-y border-slate-200">{data.advantages.map((advantage, index) => <motion.article key={advantage.number} initial={{ opacity: 0, x: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.45, delay: index * 0.08 }} className="grid gap-3 py-7 sm:grid-cols-[64px_1fr] sm:gap-6"><p className="font-display text-xl font-semibold text-brand">{advantage.number}</p><div><h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink">{advantage.title}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-muted">{advantage.description}</p></div></motion.article>)}</div></div></section>

      <section id="contact" className="scroll-mt-20 bg-brand py-16 text-white sm:py-20"><div className="page-shell grid gap-9 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><motion.div {...reveal}><p className="eyebrow text-cyan-100">Let’s plan what’s next</p><h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.07] font-semibold tracking-[-0.055em] sm:text-5xl">Get technology that works from day one.</h2><p className="mt-5 max-w-xl leading-7 text-blue-100">Tell us about the space, the people using it, and the outcomes you need. Our team will help shape the right solution.</p></motion.div><motion.div {...reveal} className="rounded-card border border-white/20 bg-white/10 p-6 backdrop-blur-sm"><a href={`mailto:${data.contact.email}`} className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><Mail aria-hidden="true" className="size-5 text-mint" /><span><span className="block text-xs font-bold tracking-[0.12em] text-blue-100 uppercase">Email us</span><span className="mt-1 block font-semibold">{data.contact.email}</span></span></a><a href={data.contact.phoneHref} className="mt-4 flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><Phone aria-hidden="true" className="size-5 text-mint" /><span><span className="block text-xs font-bold tracking-[0.12em] text-blue-100 uppercase">Call us</span><span className="mt-1 block font-semibold">{data.contact.phone}</span></span></a></motion.div></div></section>
    </>
  );
}
