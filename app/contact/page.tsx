import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export async function generateMetadata(): Promise<Metadata> {
  const { companyDetails } = await import("@/config/companyDetails");
  return { title: `Contact | ${companyDetails.branding.name}`, description: `Contact GALTech Infosolutions at ${companyDetails.contact.phone} or ${companyDetails.contact.email}.` };
}

export default async function ContactPage() {
  const { companyDetails } = await import("@/config/companyDetails");
  const details = [
    { icon: Phone, label: "Call our team", value: companyDetails.contact.phone, href: companyDetails.contact.phoneHref },
    { icon: Mail, label: "Email us", value: companyDetails.contact.email, href: `mailto:${companyDetails.contact.email}` },
    { icon: MapPin, label: "Visit our Bengaluru office", value: `${companyDetails.contact.address}, ${companyDetails.contact.locality} ${companyDetails.contact.postalCode}`, href: companyDetails.contact.mapUrl },
    { icon: Clock3, label: "Business hours", value: companyDetails.contact.businessHours, href: undefined }
  ];
  return <><Navbar /><main><PageHero eyebrow="Contact GALTech" title="Let's plan the right solution for your space." description="Whether you need a single device, a classroom rollout, or a more considered workplace technology plan, our team is ready to help." currentPage="Contact Us" />
    <section className="section-space bg-canvas"><div className="page-shell grid gap-12 lg:grid-cols-[.82fr_1.18fr]"><div><p className="eyebrow">Speak with a specialist</p><h2 className="section-title mt-4">Start with your need. We will help map the solution.</h2><p className="mt-5 max-w-md leading-7 text-muted">Share the product, room, workflow, or objective you are working on. We will respond with a clear next step.</p><div className="mt-8 space-y-3">{details.map((item) => { const Icon = item.icon; const content = <><Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" /><span><span className="block text-xs font-bold tracking-[0.12em] text-muted uppercase">{item.label}</span><span className="mt-1 block text-sm font-semibold leading-6 text-ink">{item.value}</span></span></>; return item.href ? <a key={item.label} href={item.href} target={item.label.includes("Visit") ? "_blank" : undefined} rel={item.label.includes("Visit") ? "noreferrer" : undefined} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-brand/30 hover:bg-blue-50/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">{content}</a> : <div key={item.label} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4">{content}</div>; })}</div></div><ContactForm /></div></section>
  </main><Footer /></>;
}
