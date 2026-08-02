"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, SlidersHorizontal } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { CompanyDetails } from "@/config/companyDetails";

type Product = CompanyDetails["products"][number];
type Category = CompanyDetails["productCategories"][number];

const allCategory = { id: "all", title: "All products" };

export default function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let mounted = true;
    void import("@/config/companyDetails").then(({ companyDetails }) => {
      if (!mounted) return;
      setProducts([...companyDetails.products]);
      setCategories([...companyDetails.productCategories]);
      const queryCategory = new URLSearchParams(window.location.search).get("category");
      if (queryCategory && companyDetails.productCategories.some((category) => category.id === queryCategory)) setActiveCategory(queryCategory);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const chooseCategory = (id: string) => {
    setActiveCategory(id);
    const nextUrl = id === "all" ? "/products" : `/products?category=${id}`;
    window.history.replaceState({}, "", nextUrl);
  };
  const filteredProducts = activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory);

  return (
    <section className="section-space bg-canvas">
      <div className="page-shell">
        <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div><p className="eyebrow">Browse the portfolio</p><h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl">Find the right technology for every space.</h2></div>
          <p className="flex items-center gap-2 text-sm text-muted"><SlidersHorizontal aria-hidden="true" className="size-4 text-brand" />Filter by technology category</p>
        </div>
        <div className="no-scrollbar mt-7 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Product categories">
          {[allCategory, ...categories].map((category) => <button key={category.id} type="button" role="tab" aria-selected={activeCategory === category.id} onClick={() => chooseCategory(category.id)} className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${activeCategory === category.id ? "border-brand bg-brand text-white" : "border-slate-200 bg-white text-slate-700 hover:border-brand/35 hover:text-brand"}`}>{category.title}</button>)}
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-muted"><p><span className="font-semibold text-ink">{filteredProducts.length}</span> solutions shown</p><p className="hidden sm:block">Specifications and availability confirmed on enquiry</p></div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product, index) => <motion.article key={product.slug} initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: Math.min(index, 5) * 0.045 }} className="group overflow-hidden rounded-card border border-slate-200 bg-white shadow-enterprise transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-floating">
            <Link href={`/products/${product.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"><div className="relative aspect-[1.45] overflow-hidden bg-slate-100"><Image src={product.image} alt={product.imageAlt} fill sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw" placeholder="blur" blurDataURL={product.blurDataURL} className="object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/45 to-transparent" /><p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-navy backdrop-blur-sm">{product.categoryLabel}</p></div></Link>
            <div className="p-6"><div className="flex flex-wrap gap-2">{product.badges.slice(0, 2).map((badge) => <span key={badge} className="rounded-full bg-brand/8 px-2.5 py-1 text-xs font-bold text-brand">{badge}</span>)}</div><h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.045em] text-ink">{product.name}</h3><p className="mt-3 text-sm leading-6 text-muted">{product.shortDescription}</p><ul className="mt-5 space-y-2">{product.applications.slice(0, 2).map((application) => <li key={application} className="flex items-center gap-2 text-sm text-slate-700"><Check aria-hidden="true" className="size-4 text-mint" />{application}</li>)}</ul><Link href={`/products/${product.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand transition-colors hover:text-sky focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">View product details <ArrowUpRight aria-hidden="true" className="size-4" /></Link></div>
          </motion.article>)}
        </div>
        {!filteredProducts.length && <div className="mt-8 rounded-card border border-dashed border-slate-300 bg-white p-10 text-center"><p className="font-display text-xl font-semibold text-ink">No products in this category yet.</p><button type="button" onClick={() => chooseCategory("all")} className="mt-4 text-sm font-bold text-brand">View all products</button></div>}
      </div>
    </section>
  );
}
