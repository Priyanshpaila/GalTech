"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Building2, Check, GraduationCap, Headphones, Mail, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import type { CompanyDetails } from "@/config/companyDetails";

const solutionIcons = { building: Building2, graduation: GraduationCap, headphones: Headphones };

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

  if (!data) return <div className="min-h-[1200px] bg-[#f9f6f0]" aria-hidden="true" />;

  return (
    <>
      {/* TRUST INDICATORS STRIP */}
      <section className="border-b border-[#e2ded9] bg-white py-5" aria-label="GALTech commitments">
        <div className="page-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.trustIndicators.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex items-center gap-2.5 text-sm font-semibold text-[#44423f]"
            >
              <Check aria-hidden="true" className="size-4 text-[#1d4ed8]" />
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS SECTION - Warm Huggable Headspace Cards */}
      <section id="solutions" className="section-space scroll-mt-20 bg-[#f9f6f0]">
        <div className="page-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-12"
          >
            <p className="eyebrow mb-2">Built around the way you work</p>
            <h2 className="section-title">Technology with a clear purpose.</h2>
            <p className="mt-4 max-w-xl text-[#44423f] text-base sm:text-lg leading-relaxed">
              GALTech brings the right mix of hardware, planning, and partner support to every environment where people need to connect and get work done.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {data.solutions.map((solution, index) => {
              const Icon = solutionIcons[solution.icon];
              return (
                <motion.article
                  key={solution.title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="headspace-card flex flex-col justify-between"
                >
                  <div>
                    <div className="grid size-12 place-items-center rounded-2xl bg-[#1d4ed8]/10 text-[#1d4ed8] mb-6">
                      <Icon aria-hidden="true" className="size-6" />
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-[#2d2c2b]">
                      {solution.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#44423f]">
                      {solution.description}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-[#e2ded9] pt-4 text-xs font-bold text-[#1d4ed8] uppercase tracking-wider">
                    {solution.outcome}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT PORTFOLIO CATEGORY CARDS */}
      <section id="products" className="section-space scroll-mt-20 bg-white border-y border-[#e2ded9]">
        <div className="page-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-12"
          >
            <div>
              <p className="eyebrow mb-2">A focused technology portfolio</p>
              <h2 className="section-title">Equip every space to do more.</h2>
            </div>
            <Link
              href="/products"
              className="button-pill-outline text-xs"
            >
              Get a Tailored Recommendation <ArrowUpRight className="size-4 ml-1" />
            </Link>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {data.productCategories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-[24px] border border-[#e2ded9] bg-[#f9f6f0] shadow-card transition-all duration-300 hover:border-[#2d2c2b] hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="relative aspect-[1.45] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                
                <div className="p-7 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#dc2626]">
                      {category.eyebrow}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[#2d2c2b]">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#44423f]">
                      {category.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {category.capabilities.map((capability) => (
                        <li key={capability} className="flex items-center gap-2 text-xs font-semibold text-[#2d2c2b]">
                          <Check aria-hidden="true" className="size-3.5 shrink-0 text-[#1d4ed8]" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={category.href}
                    className="button-pill-dark mt-8 w-full text-center"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="size-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT HIGHLIGHT CARD (Vivid Deep Indigo Accent) */}
      <section id="featured-product" className="section-space bg-[#f9f6f0]">
        <div className="page-shell">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] bg-[#1e1b4b] p-8 sm:p-12 lg:p-16 text-white shadow-xl grid gap-10 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-[#ffce00] mb-4 border border-white/15">
                <Sparkles className="size-3.5 text-[#ffce00]" />
                {data.featuredProduct.eyebrow}
              </span>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] mb-6 text-white">
                {data.featuredProduct.name}
              </h2>

              <p className="text-base leading-relaxed text-slate-300 mb-8 max-w-xl">
                {data.featuredProduct.description}
              </p>

              <dl className="grid gap-4 border-y border-white/15 py-6 sm:grid-cols-2 mb-8">
                {data.featuredProduct.specifications.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">{spec.label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-white">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <Link href={data.featuredProduct.cta.href} className="button-pill-yellow">
                <span>{data.featuredProduct.cta.label}</span>
                <ArrowUpRight className="size-4 ml-1" />
              </Link>
            </div>

            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-white/20 shadow-2xl">
              <Image
                src={data.featuredProduct.image}
                alt={data.featuredProduct.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY GALTECH ADVANTAGES */}
      <section id="why-galtech" className="section-space bg-white border-y border-[#e2ded9]">
        <div className="page-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-2">Why GALTech</p>
            <h2 className="section-title">The right technology partner feels like part of your team.</h2>
            <p className="mt-4 max-w-md text-[#44423f] text-base leading-relaxed">
              We combine a focused technology portfolio with practical guidance, so your investment remains clear, capable, and ready for what comes next.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#1d4ed8]/20 bg-[#1d4ed8]/10 px-4 py-2 text-xs font-bold text-[#1d4ed8]">
              <ShieldCheck aria-hidden="true" className="size-4 text-[#1d4ed8]" />
              Enterprise-grade, future-focused
            </div>
          </motion.div>

          <div className="divide-y divide-[#e2ded9] border-y border-[#e2ded9]">
            {data.advantages.map((advantage, index) => (
              <motion.article
                key={advantage.number}
                initial={{ opacity: 0, x: reduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="grid gap-3 py-6 sm:grid-cols-[48px_1fr] sm:gap-6"
              >
                <p className="font-display text-xl font-bold text-[#dc2626]">{advantage.number}</p>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-[#2d2c2b]">
                    {advantage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#44423f]">
                    {advantage.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA BANNER (Mindful Blue Card on Warm Canvas) */}
      <section id="contact" className="section-space bg-[#f9f6f0]">
        <div className="page-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] bg-[#1d4ed8] p-8 sm:p-12 lg:p-16 text-white shadow-xl grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#ffce00] mb-2">Let’s plan what’s next</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1]">
                Get technology that works from day one.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-blue-100">
                Tell us about your space, the teams using it, and the outcomes you need. Our team will help shape the right solution.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/20 bg-white/10 p-6 backdrop-blur-md space-y-4">
              <a href={`mailto:${data.contact.email}`} className="flex items-center gap-3.5 rounded-2xl p-3 transition-colors hover:bg-white/10">
                <Mail aria-hidden="true" className="size-5 text-[#ffce00]" />
                <div>
                  <span className="block text-[10px] font-bold tracking-widest text-blue-100 uppercase">Email us</span>
                  <span className="block text-sm font-semibold text-white">{data.contact.email}</span>
                </div>
              </a>
              
              <a href={data.contact.phoneHref} className="flex items-center gap-3.5 rounded-2xl p-3 transition-colors hover:bg-white/10">
                <Phone aria-hidden="true" className="size-5 text-[#ffce00]" />
                <div>
                  <span className="block text-[10px] font-bold tracking-widest text-blue-100 uppercase">Call us</span>
                  <span className="block text-sm font-semibold text-white">{data.contact.phone}</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

