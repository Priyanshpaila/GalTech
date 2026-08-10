import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Outfit, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas", display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const { companyDetails } = await import("@/config/companyDetails");
  return {
    metadataBase: new URL(companyDetails.seo.siteUrl),
    title: companyDetails.seo.title,
    description: companyDetails.seo.description,
    keywords: [...companyDetails.seo.keywords],
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: "/",
      siteName: companyDetails.branding.name,
      title: companyDetails.seo.title,
      description: companyDetails.seo.description
    },
    robots: { index: true, follow: true }
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { companyDetails } = await import("@/config/companyDetails");
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyDetails.branding.legalName,
    url: companyDetails.seo.siteUrl,
    email: companyDetails.contact.email,
    telephone: companyDetails.contact.phone,
    foundingDate: companyDetails.branding.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyDetails.contact.address,
      addressLocality: companyDetails.contact.locality,
      addressRegion: companyDetails.contact.region,
      postalCode: companyDetails.contact.postalCode,
      addressCountry: companyDetails.contact.country
    },
    sameAs: companyDetails.socialLinks.map((link) => link.href)
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jakarta.variable} ${outfit.variable} ${bebas.variable} bg-canvas font-sans text-ink antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}


