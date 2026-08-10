import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, FileText, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type ProductPageProps = { params: { slug: string } };

export async function generateStaticParams() {
  const { companyDetails } = await import("@/config/companyDetails");
  return companyDetails.products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { companyDetails } = await import("@/config/companyDetails");
  const product = companyDetails.products.find((item) => item.slug === params.slug);
  if (!product) return { title: "Product not found" };
  return { title: `${product.name} | ${companyDetails.branding.name}`, description: product.shortDescription };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { companyDetails } = await import("@/config/companyDetails");
  const product = companyDetails.products.find((item) => item.slug === params.slug);
  if (!product) notFound();
  const relatedProducts = companyDetails.products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);
  const productSchema = { "@context": "https://schema.org", "@type": "Product", name: product.name, description: product.description, category: product.categoryLabel, brand: { "@type": "Brand", name: companyDetails.branding.name }, additionalProperty: product.specifications.map((specification) => ({ "@type": "PropertyValue", name: specification.label, value: specification.value })) };

  return (
    <>
      <Navbar />
      <main className="bg-[#f9f6f0]">
        
        {/* Breadcrumbs */}
        <section className="bg-white py-6 border-b border-[#e2ded9]">
          <div className="page-shell">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#63605d]">
              <Link href="/" className="hover:text-[#1d4ed8]">Home</Link>
              <ChevronRight aria-hidden="true" className="size-3.5 text-[#c6c1b9]" />
              <Link href="/products" className="hover:text-[#1d4ed8]">Products</Link>
              <ChevronRight aria-hidden="true" className="size-3.5 text-[#c6c1b9]" />
              <span aria-current="page" className="text-[#2d2c2b]">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Hero Product Detail Section */}
        <section className="py-12 sm:py-16 border-b border-[#e2ded9]">
          <div className="page-shell grid gap-10 lg:grid-cols-2 lg:items-center">
            
            <div className="relative aspect-[1.2] overflow-hidden rounded-[32px] border border-[#e2ded9] bg-white p-4 shadow-card">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-[24px]"
              />
            </div>

            <div>
              <span className="eyebrow mb-2 inline-block">{product.categoryLabel}</span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.035em] text-[#2d2c2b] leading-[1.08]">
                {product.name}
              </h1>
              
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#44423f]">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.badges.map((badge) => (
                  <span key={badge} className="rounded-full bg-[#1d4ed8]/10 px-3.5 py-1.5 text-xs font-bold text-[#1d4ed8]">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row items-stretch sm:items-center">
                <Link href="/contact" className="button-pill-blue">
                  Enquire About Product <ArrowUpRight aria-hidden="true" className="size-4 ml-1" />
                </Link>

                <a
                  href={`mailto:${companyDetails.contact.email}?subject=${encodeURIComponent(`Request brochure: ${product.name}`)}`}
                  className="button-pill-outline"
                >
                  <FileText aria-hidden="true" className="size-4 mr-1" />
                  Request Brochure
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Key Specifications */}
        <section className="section-space bg-white border-b border-[#e2ded9]">
          <div className="page-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow mb-2">Key Specifications</p>
              <h2 className="section-title">Built for confident everyday performance.</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#44423f]">
                Our team will help you confirm the precise configuration, availability, and 3-year onsite SLA requirements for your space.
              </p>
            </div>

            <dl className="grid overflow-hidden rounded-[24px] border border-[#e2ded9] bg-[#f9f6f0] sm:grid-cols-2">
              {product.specifications.map((spec) => (
                <div key={spec.label} className="border-b border-[#e2ded9] p-6 sm:nth-[odd]:border-r">
                  <dt className="text-[11px] font-bold tracking-widest text-[#63605d] uppercase">{spec.label}</dt>
                  <dd className="mt-2 text-base font-bold text-[#2d2c2b]">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Applications & Related Products */}
        <section className="section-space bg-[#f9f6f0]">
          <div className="page-shell">
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="eyebrow mb-2">Ideal Applications</p>
              <h2 className="section-title">Made for spaces like yours.</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {product.applications.map((application, index) => (
                <div key={application} className="headspace-card flex flex-col justify-between">
                  <span className="font-display text-2xl font-bold text-[#1d4ed8]">0{index + 1}</span>
                  <p className="mt-6 text-lg font-bold text-[#2d2c2b]">{application}</p>
                  <Check aria-hidden="true" className="mt-6 size-5 text-[#1d4ed8]" />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}

