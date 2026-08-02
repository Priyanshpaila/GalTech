import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  currentPage: string;
};

export default function PageHero({ eyebrow, title, description, currentPage }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 opacity-80 [background-image:radial-gradient(circle_at_12%_15%,rgba(0,87,255,.42),transparent_28%),radial-gradient(circle_at_87%_72%,rgba(0,194,168,.14),transparent_22%),linear-gradient(120deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:auto,auto,48px_48px]" />
      <div className="page-shell">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-medium text-slate-300"><Link href="/" className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint">Home</Link><ChevronRight aria-hidden="true" className="size-3.5" /><span aria-current="page">{currentPage}</span></nav>
        <p className="eyebrow mt-8 text-cyan-100">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.07] font-semibold tracking-[-0.055em] text-balance sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
