import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryGrid from "@/components/CategoryGrid";
import ContentHighlightCard from "@/components/ContentHighlightCard";
import HomeSections from "@/components/HomeSections";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

export default async function HomePage() {
  const { companyDetails } = await import("@/config/companyDetails");
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "GALTech Sirius Interactive Flat Panel Display",
    description: companyDetails.featuredProduct.description,
    brand: { "@type": "Brand", name: companyDetails.branding.name },
    category: "Interactive display",
    additionalProperty: companyDetails.featuredProduct.specifications.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value
    }))
  };

  return (
    <>
      <AnnouncementBanner />
      <Navbar />
      <main id="top">
        <HeroCarousel />
        <CategoryGrid />
        <ContentHighlightCard />
        <HomeSections />
        <StatsSection />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}

