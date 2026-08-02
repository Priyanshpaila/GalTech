import type { Metadata } from "next";
import { ArrowUpRight, BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export async function generateMetadata(): Promise<Metadata> {
  const { companyDetails } = await import("@/config/companyDetails");
  return { title: `Certificates | ${companyDetails.branding.name}`, description: "Certification and e-waste compliance information from GALTech Infosolutions." };
}

export default async function CertificatesPage() {
  const { companyDetails } = await import("@/config/companyDetails");
  const icons = [BadgeCheck, FileCheck2, ShieldCheck];
  return <><Navbar /><main><PageHero eyebrow="Trust and compliance" title="Documentation that supports confident decisions." description="Find certification and compliance information relating to GALTech products and distribution. Contact our team to request the relevant documentation for your procurement process." currentPage="Certificates" />
    <section className="section-space bg-canvas"><div className="page-shell"><div className="grid gap-6 lg:grid-cols-3">{companyDetails.certifications.map((certificate, index) => { const Icon = icons[index]; return <article id={certificate.id} key={certificate.id} className="scroll-mt-28 rounded-card border border-slate-200 bg-white p-7 shadow-enterprise"><div className="flex items-start justify-between"><div className="grid size-12 place-items-center rounded-2xl bg-brand/10 font-display text-sm font-bold text-brand">{certificate.shortLabel}</div><Icon aria-hidden="true" className="size-6 text-mint" /></div><h2 className="mt-7 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">{certificate.title}</h2><p className="mt-3 text-sm leading-6 text-muted">{certificate.description}</p><p className="mt-6 rounded-xl bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600">{certificate.status}</p><Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">Request documentation <ArrowUpRight aria-hidden="true" className="size-4" /></Link></article>; })}</div></div></section>
    <section className="bg-white py-16 sm:py-20"><div className="page-shell rounded-card border border-slate-200 bg-canvas p-7 sm:p-10"><p className="eyebrow">Need a document for procurement?</p><h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">We will help you get the right information quickly.</h2><p className="mt-4 max-w-2xl leading-7 text-muted">Send us the document name, product requirement, and your company details. The GALTech team will respond with the relevant information.</p><Link href="/contact" className="button-primary mt-7 inline-flex items-center gap-2 bg-brand px-6 text-white shadow-floating">Contact GALTech <ArrowUpRight aria-hidden="true" className="size-4" /></Link></div></section>
  </main><Footer /></>;
}
