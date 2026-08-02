import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export async function generateMetadata(): Promise<Metadata> {
  const { companyDetails } = await import("@/config/companyDetails");
  return { title: `Partners | ${companyDetails.branding.name}`, description: "Explore the trusted enterprise technology brands and partner ecosystem behind GALTech solutions." };
}

export default async function PartnersPage() {
  const { companyDetails } = await import("@/config/companyDetails");
  return <><Navbar /><main><PageHero eyebrow="Our partner ecosystem" title="Trusted brands, selected for better outcomes." description="GALTech connects customers with proven enterprise technology partners across collaboration, document productivity, projection, and connected business solutions." currentPage="Partners" />
    <section className="section-space bg-white"><div className="page-shell"><div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Better together</p><h2 className="section-title mt-4">Technology choice deserves real care.</h2><p className="mt-5 max-w-md leading-7 text-muted">We focus on a small, capable ecosystem of brands so our team can recommend clearly, source reliably, and support each deployment with confidence.</p></div><div className="grid gap-5 sm:grid-cols-2">{companyDetails.partnerProfiles.map((partner) => <article key={partner.name} className="group rounded-card border border-slate-200 bg-canvas p-6 shadow-enterprise transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-floating"><div className="flex items-start justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-navy font-display text-xl font-bold text-white">{partner.initials}</span><span className="rounded-full bg-mint/10 px-3 py-1.5 text-xs font-bold text-teal-800">{partner.focus}</span></div><h2 className="mt-8 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">{partner.name}</h2><p className="mt-3 text-sm leading-6 text-muted">{partner.description}</p></article>)}</div></div></div></section>
    <section className="bg-canvas py-20 sm:py-28"><div className="page-shell rounded-card bg-navy p-7 text-white sm:p-10 lg:p-12"><div className="grid gap-9 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><p className="eyebrow text-cyan-100">A stronger solution starts here</p><h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.08] font-semibold tracking-[-0.055em]">Get an unbiased recommendation for your space.</h2><p className="mt-5 max-w-xl leading-7 text-slate-300">Our role is to understand the requirement, then put the appropriate technology around it - with the product knowledge and commercial support to move your project forward.</p></div><div><ul className="space-y-3">{["Solution-led recommendations", "Trusted distribution expertise", "Responsive local guidance"].map((item) => <li key={item} className="flex gap-3 text-sm text-slate-200"><Check aria-hidden="true" className="size-5 shrink-0 text-mint" />{item}</li>)}</ul><Link href="/contact" className="button-primary mt-8 inline-flex items-center gap-2 bg-brand px-6 text-white shadow-floating">Talk to our team <ArrowUpRight aria-hidden="true" className="size-4" /></Link></div></div></div></section>
  </main><Footer /></>;
}
