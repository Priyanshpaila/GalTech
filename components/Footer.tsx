"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import type { CompanyDetails } from "@/config/companyDetails";

type FooterData = Pick<CompanyDetails, "branding" | "contact" | "footer" | "socialLinks">;

export default function Footer() {
  const [data, setData] = useState<FooterData | null>(null);

  useEffect(() => {
    let mounted = true;
    void import("@/config/companyDetails").then(({ companyDetails }) => {
      if (mounted) setData(companyDetails);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!data) return <footer className="h-80 bg-navy" aria-hidden="true" />;

  const linkColumns = [
    { title: "Solutions", links: data.footer.productLinks },
    { title: "Company", links: data.footer.companyLinks },
    { title: "Legal", links: data.footer.legalLinks }
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="page-shell py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.35fr_2fr]">
          <div>
            <Link href="/" className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint">
              <Image src="/galtech-logo.png" alt="GALTech Infosolutions" width={1080} height={356} className="h-auto w-48 rounded-md bg-white p-2" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">{data.branding.description}</p>
            <a href={data.socialLinks[0]?.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-mint focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint">
              Follow on {data.socialLinks[0]?.label}<ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="grid gap-9 sm:grid-cols-3">
            {linkColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-bold tracking-[0.14em] text-slate-400 uppercase">{column.title}</h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((item) => <li key={item.label}><Link href={item.href} className="text-sm text-slate-200 transition-colors hover:text-mint focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint">{item.label}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 py-9 sm:grid-cols-2 lg:grid-cols-3">
          <a href={data.contact.mapUrl} target="_blank" rel="noreferrer" className="group flex gap-3 rounded-card border border-white/10 p-5 transition-colors hover:border-white/25 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint">
            <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-mint" />
            <span><span className="block text-sm font-semibold">Bengaluru office</span><span className="mt-1 block text-sm leading-5 text-slate-300">{data.contact.address}, {data.contact.locality} {data.contact.postalCode}</span></span>
          </a>
          <a href={data.contact.phoneHref} className="group flex gap-3 rounded-card border border-white/10 p-5 transition-colors hover:border-white/25 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint">
            <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-mint" />
            <span><span className="block text-sm font-semibold">Speak with GALTech</span><span className="mt-1 block text-sm text-slate-300">{data.contact.phone}</span></span>
          </a>
          <a href={`mailto:${data.contact.email}`} className="group flex items-center justify-between rounded-card border border-white/10 p-5 transition-colors hover:border-white/25 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint">
            <span><span className="block text-sm font-semibold">Email our team</span><span className="mt-1 block text-sm text-slate-300">{data.contact.email}</span></span><ArrowUpRight aria-hidden="true" className="size-5 text-mint" />
          </a>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>{data.footer.copyright}</p><p>{data.contact.businessHours}</p></div>
      </div>
    </footer>
  );
}
