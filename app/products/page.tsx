import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ProductCatalog from "@/components/ProductCatalog";

export async function generateMetadata(): Promise<Metadata> {
  const { companyDetails } = await import("@/config/companyDetails");
  return { title: `Products | ${companyDetails.branding.name}`, description: "Browse GALTech interactive panels, Toshiba multifunction printers, and InFocus projectors." };
}

export default function ProductsPage() {
  return <><Navbar /><main><PageHero eyebrow="Technology portfolio" title="Technology for the spaces where work happens." description="Browse interactive panels, Toshiba multifunction printers, and InFocus projectors. Filter by category, compare the right fit, and open any product for a full overview." currentPage="Our Products" /><ProductCatalog /></main><Footer /></>;
}
