import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export async function generateMetadata(): Promise<Metadata> {
  const { companyDetails } = await import("@/config/companyDetails");
  return { title: `About | ${companyDetails.branding.name}`, description: companyDetails.about.introduction };
}

export default async function AboutPage() {
  const { companyDetails } = await import("@/config/companyDetails");
  return <><Navbar /><main><PageHero eyebrow={companyDetails.about.eyebrow} title={companyDetails.about.title} description={companyDetails.about.introduction} currentPage="About Us" />
    <section className="section-space bg-white"><div className="page-shell grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-start"><div><p className="eyebrow">What we believe</p><h2 className="section-title mt-4">Technology should create momentum, not friction.</h2><p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">{companyDetails.about.introduction}</p><div className="mt-8 rounded-card bg-brand p-7 text-white"><p className="text-xs font-bold tracking-[0.14em] text-cyan-100 uppercase">Our mission</p><p className="mt-3 font-display text-2xl leading-snug font-semibold tracking-[-0.04em]">{companyDetails.about.mission}</p></div></div><div className="grid gap-4">{companyDetails.about.values.map((value, index) => <article key={value.title} className="rounded-card border border-slate-200 bg-canvas p-6 shadow-enterprise"><p className="font-display text-lg font-semibold text-brand">0{index + 1}</p><h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">{value.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{value.text}</p></article>)}</div></div></section>
    <section className="bg-canvas py-20 sm:py-28"><div className="page-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">How we work</p><h2 className="section-title mt-4">Clear thinking at every stage of the project.</h2></div><div className="grid gap-5 sm:grid-cols-2"><div className="rounded-card border border-slate-200 bg-white p-6"><CheckCircle2 aria-hidden="true" className="size-6 text-mint" /><h3 className="mt-5 font-display text-xl font-semibold text-ink">Understand the environment</h3><p className="mt-3 text-sm leading-6 text-muted">We start with your people, rooms, workflows, and operational priorities.</p></div><div className="rounded-card border border-slate-200 bg-white p-6"><CheckCircle2 aria-hidden="true" className="size-6 text-mint" /><h3 className="mt-5 font-display text-xl font-semibold text-ink">Recommend with intent</h3><p className="mt-3 text-sm leading-6 text-muted">We map technology to the outcome, choosing proven products from trusted partners.</p></div><div className="rounded-card border border-slate-200 bg-white p-6 sm:col-span-2"><h3 className="font-display text-xl font-semibold text-ink">Stay accountable beyond the sale.</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-muted">From the initial enquiry to the technology arriving in your space, GALTech remains a close, practical partner.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">Start a conversation <ArrowUpRight aria-hidden="true" className="size-4" /></Link></div></div></div></section>
  </main><Footer /></>;
}
