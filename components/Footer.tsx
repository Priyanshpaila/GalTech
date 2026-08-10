"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import type { CompanyDetails } from "@/config/companyDetails";

type FooterData = Pick<CompanyDetails, "branding" | "contact" | "footer" | "socialLinks">;

export default function Footer() {
  const [data, setData] = useState<FooterData | null>(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  useEffect(() => {
    let mounted = true;
    void import("@/config/companyDetails").then(({ companyDetails }) => {
      if (mounted) setData(companyDetails);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!data) return <footer className="h-80 bg-[#f9f6f0]" aria-hidden="true" />;

  const linkColumns = [
    { title: "Solutions", links: data.footer.productLinks },
    { title: "Company", links: data.footer.companyLinks },
    { title: "Legal", links: data.footer.legalLinks },
    { title: "Support", links: [{ label: "Help Center", href: "/contact" }, { label: "Contact Us", href: "/contact" }, { label: "National SLA", href: "/certificates" }] }
  ];

  return (
    <footer className="bg-[#f9f6f0] text-[#2d2c2b] border-t border-[#e2ded9]">
      
      {/* EMAIL SUBSCRIBE CAPTURE FORM SECTION */}
      {/* <div className="border-b border-[#e2ded9] py-12 bg-white">
        <div className="page-shell flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-[#2d2c2b]">
              Stay updated on workplace technology
            </h3>
            <p className="mt-1 text-sm text-[#63605d]">
              Get practical insights on smart classrooms, 4K displays, and office automation.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmailSubmitted(true);
            }}
            className="flex w-full md:w-auto items-center gap-2"
          >
            {emailSubmitted ? (
              <div className="flex items-center gap-2 rounded-full bg-[#1d4ed8]/10 px-6 py-3 text-xs font-bold text-[#1d4ed8]">
                <Sparkles className="size-4" /> Thank you for subscribing!
              </div>
            ) : (
              <div className="flex w-full md:w-[420px] items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  className="w-full rounded-full border border-[#d0d0d0] bg-white px-5 py-3 text-sm text-[#2d2c2b] outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20"
                />
                <button type="submit" className="button-pill-dark shrink-0">
                  Subscribe
                </button>
              </div>
            )}
          </form>
        </div>
      </div> */}

      {/* 6-COLUMN LINK DIRECTORY & APP BADGES */}
      <div className="page-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-6 border-b border-[#e2ded9] pb-14">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/galtech-logo.png"
                alt="GALTech Infosolutions"
                width={180}
                height={58}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm leading-relaxed text-[#63605d] max-w-sm">
              {data.branding.description}
            </p>

  
          </div>

          {/* Directory Columns */}
          {linkColumns.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2d2c2b]">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#63605d] hover:text-[#2d2c2b] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}



        </div>

        {/* Contact Cards Strip */}
        <div className="grid gap-4 py-8 sm:grid-cols-3">
          <a
            href={data.contact.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 rounded-[20px] border border-[#e2ded9] bg-white p-4 transition-colors hover:border-[#2d2c2b]"
          >
            <MapPin className="size-5 text-[#dc2626] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-[#2d2c2b]">Bengaluru Office</span>
              <span className="block text-xs text-[#63605d] mt-1">{data.contact.address}, {data.contact.locality}</span>
            </div>
          </a>

          <a
            href={data.contact.phoneHref}
            className="flex items-start gap-3 rounded-[20px] border border-[#e2ded9] bg-white p-4 transition-colors hover:border-[#2d2c2b]"
          >
            <Phone className="size-5 text-[#1d4ed8] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-[#2d2c2b]">Speak with GALTech</span>
              <span className="block text-xs text-[#63605d] mt-1">{data.contact.phone}</span>
            </div>
          </a>

          <a
            href={`mailto:${data.contact.email}`}
            className="flex items-start gap-3 rounded-[20px] border border-[#e2ded9] bg-white p-4 transition-colors hover:border-[#2d2c2b]"
          >
            <Mail className="size-5 text-[#ffce00] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-[#2d2c2b]">Email Support</span>
              <span className="block text-xs text-[#63605d] mt-1">{data.contact.email}</span>
            </div>
          </a>
        </div>

        {/* Bottom Legal & Copyright Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#e2ded9] text-xs text-[#63605d]">
          <p>{data.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <span>{data.contact.businessHours}</span>
            <span>•</span>
            <Link href="/certificates" className="hover:underline text-[#1d4ed8]">Certificates & SLAs</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

