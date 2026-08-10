"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, SlidersHorizontal } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { CompanyDetails } from "@/config/companyDetails";

type Product = CompanyDetails["products"][number];
type Category = CompanyDetails["productCategories"][number];

const allCategory = { id: "all", title: "All Products" };

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
    <section className="section-space bg-[#f9f6f0]">
      <div className="page-shell">
        <div className="flex flex-col gap-4 border-b border-[#e2ded9] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-2">Browse the portfolio</p>
            <h2 className="section-title">Find the right technology for every space.</h2>
          </div>
          <p className="flex items-center gap-2 text-xs font-semibold text-[#63605d]">
            <SlidersHorizontal aria-hidden="true" className="size-4 text-[#1d4ed8]" />
            Filter by technology category
          </p>
        </div>

        {/* HEADSPACE FILTER PILLS (Active = #2d2c2b + white dot; Inactive = white bg + 1px border) */}
        <div className="no-scrollbar mt-8 flex gap-3 overflow-x-auto pb-2" role="tablist" aria-label="Product categories">
          {[allCategory, ...categories].map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => chooseCategory(category.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#2d2c2b] text-white shadow-[0_2px_0_rgba(65,61,69,0.25)]"
                    : "border border-[#e2ded9] bg-white text-[#2d2c2b] hover:border-[#2d2c2b] hover:bg-[#f9f6f0]"
                }`}
              >
                {isActive && <span className="size-2 rounded-full bg-white animate-pulse" />}
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-[#63605d] font-medium">
          <p><span className="font-bold text-[#2d2c2b]">{filteredProducts.length}</span> solutions available</p>
          <p className="hidden sm:block">Specifications & local SLA support confirmed on enquiry</p>
        </div>

        {/* PRODUCT TILES (Soft Huggable Cards) */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <motion.article
              key={product.slug}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.05 }}
              className="group overflow-hidden rounded-[24px] border border-[#e2ded9] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#2d2c2b] hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <Link href={`/products/${product.slug}`} className="block overflow-hidden relative aspect-[1.45]">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
                  <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-1 text-xs font-bold text-[#2d2c2b] backdrop-blur-md shadow-sm">
                    {product.categoryLabel}
                  </p>
                </Link>

                <div className="p-7">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.badges.slice(0, 2).map((badge) => (
                      <span key={badge} className="rounded-full bg-[#1d4ed8]/10 px-3 py-1 text-xs font-bold text-[#1d4ed8]">
                        {badge}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-[#2d2c2b]">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#44423f]">
                    {product.shortDescription}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {product.applications.slice(0, 2).map((application) => (
                      <li key={application} className="flex items-center gap-2 text-xs font-semibold text-[#2d2c2b]">
                        <Check aria-hidden="true" className="size-3.5 text-[#1d4ed8]" />
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-7 pb-7">
                <Link
                  href={`/products/${product.slug}`}
                  className="button-pill-dark w-full text-center"
                >
                  <span>View Product Details</span>
                  <ArrowUpRight className="size-4 ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {!filteredProducts.length && (
          <div className="mt-8 rounded-[24px] border border-dashed border-[#c6c1b9] bg-white p-12 text-center">
            <p className="font-display text-xl font-bold text-[#2d2c2b]">No products in this category yet.</p>
            <button type="button" onClick={() => chooseCategory("all")} className="button-pill-blue mt-4">
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

