const blueBlur =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjMDA1N0ZGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBDMkE4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+";

export const companyDetails = {
  branding: {
    name: "GALTech Infosolutions",
    legalName: "GALTech Infosolutions Private Limited",
    shortName: "GALTech",
    tagline: "Unlocking the promise of technology.",
    description: "Enterprise technology solutions that make workplaces, classrooms, and collaboration spaces more productive.",
    founded: "2017"
  },
  seo: {
    title: "GALTech Infosolutions | Intelligent enterprise technology",
    description: "GALTech equips enterprises, educational institutions, and modern workplaces with trusted collaboration, display, projection, and document solutions.",
    siteUrl: "https://galtechinfo.com",
    keywords: ["enterprise technology", "interactive panels", "Toshiba multifunction printers", "InFocus projectors", "office automation", "Bengaluru"]
  },
  contact: {
    email: "marketing@galtechinfo.com",
    phone: "+91 80 4852 9245",
    phoneHref: "tel:+918048529245",
    address: "No. 50, Ground Floor, 9th A Main Road, 1st Stage, Indiranagar",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560038",
    country: "IN",
    mapUrl: "https://maps.google.com/?q=Indiranagar+Bengaluru+560038",
    businessHours: "Monday-Saturday, 9:30 AM-6:30 PM"
  },
  navigation: [
    { label: "Home", href: "/", children: [] },
    { label: "About Us", href: "/about", children: [] },
    {
      label: "Our Products",
      href: "/products",
      children: [
        { label: "Interactive Panels", href: "/products?category=interactive-panels" },
        { label: "Toshiba Printers", href: "/products?category=toshiba-printers" },
        { label: "InFocus Projectors", href: "/products?category=infocus-projectors" }
      ]
    },
    {
      label: "Certificate",
      href: "/certificates",
      children: [
        { label: "IPA Certificate", href: "/certificates#ipa" },
        { label: "IFPD Certificate", href: "/certificates#ifpd" },
        { label: "E-Waste Compliance", href: "/certificates#e-waste" }
      ]
    },
    { label: "Partners", href: "/partners", children: [] },
    { label: "Contact Us", href: "/contact", children: [] }
  ],
  heroSlides: [
    {
      eyebrow: "Enterprise collaboration, reimagined",
      title: "Technology that keeps your teams moving forward.",
      description: "Connect people, ideas, and decisions with expertly selected workplace technology and responsive local expertise.",
      primaryCta: { label: "Explore solutions", href: "#solutions" },
      secondaryCta: { label: "Talk to an expert", href: "/contact" },
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=88",
      imageAlt: "Professionals collaborating around a table in a modern meeting room",
      blurDataURL: blueBlur,
      highlight: "Built for modern business"
    },
    {
      eyebrow: "Learning without limits",
      title: "Make every lesson an interactive experience.",
      description: "Bring engaging, intuitive visual collaboration into smart classrooms with powerful interactive display solutions.",
      primaryCta: { label: "Discover displays", href: "/products?category=interactive-panels" },
      secondaryCta: { label: "Plan your space", href: "/contact" },
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=88",
      imageAlt: "Teacher leading an interactive lesson in a bright classroom",
      blurDataURL: blueBlur,
      highlight: "Designed for education"
    },
    {
      eyebrow: "Productivity at scale",
      title: "Reliable document workflows, without compromise.",
      description: "Equip high-performing teams with print, scan, and document management technology that scales with the work.",
      primaryCta: { label: "View print solutions", href: "/products?category=toshiba-printers" },
      secondaryCta: { label: "Request a consultation", href: "/contact" },
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=88",
      imageAlt: "Contemporary office designed for productive teamwork",
      blurDataURL: blueBlur,
      highlight: "Trusted operational excellence"
    }
  ],
  trustIndicators: ["Trusted enterprise expertise", "Nationwide distribution", "Consultative support", "Future-ready solutions"],
  statistics: [
    { value: 9, suffix: "+", label: "years of expertise", description: "Serving evolving business needs since 2017." },
    { value: 4, suffix: "+", label: "trusted technology brands", description: "A carefully selected ecosystem of industry leaders." },
    { value: 3, suffix: "", label: "core solution domains", description: "Collaboration, projection, and document productivity." },
    { value: 1, suffix: "", label: "partner for every project", description: "From planning and procurement to dependable support." }
  ],
  productCategories: [
    {
      id: "interactive-panels",
      eyebrow: "Visual collaboration",
      title: "Interactive displays",
      description: "Make ideas visible and participation effortless in meeting rooms and learning environments.",
      href: "/products?category=interactive-panels",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85",
      imageAlt: "Team holding a collaborative planning session around a presentation screen",
      blurDataURL: blueBlur,
      capabilities: ["4K interactive panels", "Smart classrooms", "Meeting-room collaboration"]
    },
    {
      id: "toshiba-printers",
      eyebrow: "Document productivity",
      title: "Toshiba MFPs",
      description: "Secure, scalable print and scan workflows built for everyday output and enterprise control.",
      href: "/products?category=toshiba-printers",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1100&q=85",
      imageAlt: "Business professionals working efficiently in a modern office",
      blurDataURL: blueBlur,
      capabilities: ["Mono and colour MFPs", "Secure printing", "High-volume workflows"]
    },
    {
      id: "infocus-projectors",
      eyebrow: "Impactful presentation",
      title: "InFocus projectors",
      description: "Create crisp, compelling viewing experiences for training, presentations, and large-format spaces.",
      href: "/products?category=infocus-projectors",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=85",
      imageAlt: "Professional using a laptop for a presentation in a conference space",
      blurDataURL: blueBlur,
      capabilities: ["Laser projection", "Business presentation", "Large-format learning"]
    }
  ],
  products: [
    { slug: "sirius-65-interactive-panel", category: "interactive-panels", categoryLabel: "Interactive Panels", name: "Sirius 65 Interactive Panel", shortDescription: "A responsive 4K collaboration canvas for classrooms and compact meeting rooms.", description: "A full-featured interactive display that helps teams teach, brainstorm, annotate, and share with more clarity.", image: "https://images.unsplash.com/photo-1588072432836-7fb78a35d6f3?auto=format&fit=crop&w=1200&q=88", imageAlt: "Teacher using an interactive panel in a classroom", blurDataURL: blueBlur, badges: ["4K UHD", "20-point touch", "Android 11"], specifications: [{ label: "Screen size", value: "65 inch" }, { label: "Resolution", value: "3840 x 2160" }, { label: "Touch", value: "20-point multi-touch" }, { label: "Platform", value: "Android 11, 4 GB RAM, 32 GB storage" }], applications: ["Smart classrooms", "Huddle rooms", "Training spaces"] },
    { slug: "sirius-75-interactive-panel", category: "interactive-panels", categoryLabel: "Interactive Panels", name: "Sirius 75 Interactive Panel", shortDescription: "A generous 4K touch display for high-engagement collaboration and learning.", description: "Sirius 75 gives shared ideas more room, with smooth touch response and familiar, built-in collaboration tools.", image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1200&q=88", imageAlt: "Large display in a contemporary collaboration room", blurDataURL: blueBlur, badges: ["75 inch", "4K UHD", "Wireless sharing"], specifications: [{ label: "Screen size", value: "75 inch" }, { label: "Resolution", value: "3840 x 2160" }, { label: "Audio", value: "20 W x 2 speakers" }, { label: "Connectivity", value: "HDMI, USB, Wi-Fi, Bluetooth" }], applications: ["Board rooms", "Interactive learning", "Team workshops"] },
    { slug: "sirius-86-interactive-panel", category: "interactive-panels", categoryLabel: "Interactive Panels", name: "Sirius 86 Interactive Panel", shortDescription: "Large-format interactive clarity for boardrooms, lecture theatres, and shared spaces.", description: "Sirius 86 brings a commanding, high-resolution collaboration surface to larger rooms without adding complexity.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=88", imageAlt: "Modern boardroom with a large presentation display", blurDataURL: blueBlur, badges: ["86 inch", "4K UHD", "Multi-touch"], specifications: [{ label: "Screen size", value: "86 inch" }, { label: "Resolution", value: "3840 x 2160" }, { label: "Touch", value: "20-point multi-touch" }, { label: "Wireless", value: "Wi-Fi and Bluetooth enabled" }], applications: ["Lecture halls", "Executive boardrooms", "Auditoriums"] },
    { slug: "toshiba-e-studio-2329a", category: "toshiba-printers", categoryLabel: "Toshiba Printers", name: "Toshiba e-STUDIO 2329A", shortDescription: "Dependable mono multifunction output for compact teams and everyday workflows.", description: "An efficient copy, print, and scan solution with the paper capacity and reliability growing teams depend on.", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=88", imageAlt: "Professional document printing in an office", blurDataURL: blueBlur, badges: ["23 ppm", "Copy / Print / Scan", "Mono MFP"], specifications: [{ label: "Output", value: "23 pages per minute" }, { label: "Functions", value: "Copy, print, scan" }, { label: "Memory", value: "512 MB" }, { label: "Paper handling", value: "350-sheet cassette plus RADF" }], applications: ["Small offices", "Departments", "Front-office workflows"] },
    { slug: "toshiba-e-studio-3028a", category: "toshiba-printers", categoryLabel: "Toshiba Printers", name: "Toshiba e-STUDIO 3028A", shortDescription: "Faster monochrome document productivity with straightforward networked workflows.", description: "A flexible mid-range mono MFP for teams that need dependable speed, quality, and modern scan capability.", image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=88", imageAlt: "Office worker managing documents on a desktop computer", blurDataURL: blueBlur, badges: ["30 ppm", "Duplex", "Network scan"], specifications: [{ label: "Output", value: "Up to 30 pages per minute" }, { label: "Print mode", value: "Monochrome" }, { label: "Workflow", value: "Duplex and network scanning" }, { label: "Ideal volume", value: "Growing workgroups" }], applications: ["Operations teams", "Finance departments", "Multi-user offices"] },
    { slug: "toshiba-e-studio-3025ac", category: "toshiba-printers", categoryLabel: "Toshiba Printers", name: "Toshiba e-STUDIO 3025AC", shortDescription: "High-quality colour multifunction output for polished, secure business communications.", description: "Bring speed, colour consistency, and versatile digital workflow features into one dependable workgroup device.", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=88", imageAlt: "Modern collaborative office workspace", blurDataURL: blueBlur, badges: ["Colour MFP", "30 ppm", "Secure print"], specifications: [{ label: "Output", value: "30 pages per minute colour and mono" }, { label: "Memory", value: "4 GB RAM" }, { label: "Storage", value: "128 GB SSD" }, { label: "Scan speed", value: "Up to 100 ppm" }], applications: ["Marketing teams", "Client-facing offices", "Department hubs"] },
    { slug: "toshiba-e-studio-6526ac", category: "toshiba-printers", categoryLabel: "Toshiba Printers", name: "Toshiba e-STUDIO 6526AC", shortDescription: "Enterprise colour production power for demanding, high-volume teams.", description: "A high-end colour MFP designed for organisations that need velocity, finishing options, and serious document control.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=88", imageAlt: "Business team reviewing printed materials", blurDataURL: blueBlur, badges: ["65 ppm", "High volume", "Advanced finishing"], specifications: [{ label: "Output", value: "Up to 65 pages per minute" }, { label: "Print mode", value: "Enterprise colour" }, { label: "Security", value: "Secure print controls" }, { label: "Finishing", value: "Professional finishing options" }], applications: ["Central print rooms", "Large departments", "High-volume output"] },
    { slug: "infocus-in114-projector", category: "infocus-projectors", categoryLabel: "InFocus Projectors", name: "InFocus IN114 Projector", shortDescription: "A practical, bright projector for effective daily presentations and training.", description: "The IN114 provides approachable presentation performance for teams that need clear, reliable projection in everyday rooms.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=88", imageAlt: "Business presentation projected on a screen", blurDataURL: blueBlur, badges: ["Business projector", "1080p-ready", "Bright output"], specifications: [{ label: "Use case", value: "Business and education" }, { label: "Brightness", value: "Up to 4,000 lumens class" }, { label: "Display", value: "Full HD ready" }, { label: "Connectivity", value: "Flexible device input" }], applications: ["Training rooms", "Classrooms", "Everyday presentations"] },
    { slug: "infocus-in135-projector", category: "infocus-projectors", categoryLabel: "InFocus Projectors", name: "InFocus IN135 Projector", shortDescription: "Versatile projection for clear, connected presentations in modern team spaces.", description: "IN135 is built to give mixed-use rooms bright, credible visual performance and simple source connectivity.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=88", imageAlt: "Team presenting to colleagues in a meeting room", blurDataURL: blueBlur, badges: ["Full HD", "Business ready", "Flexible inputs"], specifications: [{ label: "Use case", value: "Hybrid presentation spaces" }, { label: "Brightness", value: "Business-class high brightness" }, { label: "Display", value: "Full HD presentation" }, { label: "Installation", value: "Tabletop or ceiling mount" }], applications: ["Meeting rooms", "Training centres", "Collaborative spaces"] },
    { slug: "infocus-inl2168-projector", category: "infocus-projectors", categoryLabel: "InFocus Projectors", name: "InFocus INL2168 Laser Projector", shortDescription: "Long-life laser projection for impressive, low-maintenance large-format viewing.", description: "A laser projector solution designed for bright, compelling display experiences where uptime and reduced maintenance matter.", image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1200&q=88", imageAlt: "Large projector presentation at a conference", blurDataURL: blueBlur, badges: ["Laser", "Low maintenance", "Large venue"], specifications: [{ label: "Light source", value: "Long-life laser" }, { label: "Brightness", value: "Large-venue high brightness" }, { label: "Resolution", value: "Full HD and 4K-ready workflows" }, { label: "Maintenance", value: "Reduced lamp replacement" }], applications: ["Auditoriums", "Large training rooms", "Campus venues"] }
  ],
  solutions: [
    { icon: "building", title: "Modern workplaces", description: "Give distributed teams the tools to meet, share, present, and decide with confidence.", outcome: "Stronger collaboration, faster decisions" },
    { icon: "graduation", title: "Smart education", description: "Create engaging learning environments that invite interaction from every seat in the room.", outcome: "More participatory learning" },
    { icon: "headphones", title: "Focused support", description: "Work with a responsive partner who understands the technical and operational details behind the deployment.", outcome: "Confidence from brief to rollout" }
  ],
  featuredProduct: {
    eyebrow: "Featured solution: Sirius interactive panels",
    name: "Bring your best thinking to the surface.",
    description: "The GALTech Sirius Interactive Flat Panel Display combines intuitive collaboration with the dependable performance modern rooms demand.",
    image: "https://images.unsplash.com/photo-1588072432836-7fb78a35d6f3?auto=format&fit=crop&w=1400&q=88",
    imageAlt: "Teacher using a large interactive display in a modern classroom",
    blurDataURL: blueBlur,
    specifications: [{ label: "Screen sizes", value: "65, 75, 86, and 98 inch" }, { label: "Resolution", value: "4K UHD (3840 x 2160)" }, { label: "Touch", value: "20-point multi-touch" }, { label: "Platform", value: "Android 11, 4 GB RAM, 32 GB storage" }],
    cta: { label: "Enquire about Sirius", href: "/contact" }
  },
  about: {
    eyebrow: "Our story",
    title: "A more intelligent approach to business technology.",
    introduction: "GALTech Infosolutions is a Bengaluru-based office automation and collaboration technology partner. We help enterprises, educational institutions, and modern workplaces make the technology in their spaces more useful, reliable, and easy to adopt.",
    mission: "To enable organisations with considered technology solutions that improve communication, collaboration, and productivity.",
    values: [{ title: "Reliable by design", text: "We recommend technologies that teams can depend on, day after day." }, { title: "Practical expertise", text: "We focus on the real environment, not just the product specification." }, { title: "Progress with purpose", text: "Every recommendation is shaped around a clearer outcome for people and operations." }]
  },
  partners: ["TOSHIBA", "InFocus", "Cloudwalker", "Peer Connexions"],
  partnerProfiles: [
    { name: "Toshiba", focus: "Document productivity", description: "Multifunction print and document workflow solutions for businesses of every scale.", initials: "T" },
    { name: "InFocus", focus: "Visual communication", description: "Presentation and projection technologies for compelling shared viewing experiences.", initials: "I" },
    { name: "Cloudwalker", focus: "Interactive learning", description: "Intuitive interactive display experiences for connected classrooms and workplaces.", initials: "C" },
    { name: "Peer Connexions", focus: "Connected commerce", description: "A specialist partner platform supporting modern business collaboration.", initials: "P" }
  ],
  certifications: [
    { id: "ipa", shortLabel: "IPA", title: "IPA Certificate", description: "Our certification information for authorised business and institutional engagements.", status: "Available on request" },
    { id: "ifpd", shortLabel: "IFPD", title: "IFPD Certificate", description: "Product and distribution certification supporting interactive flat panel display solutions.", status: "Available on request" },
    { id: "e-waste", shortLabel: "E-W", title: "E-Waste Compliance", description: "Our commitment to responsible electronics lifecycle and e-waste compliance requirements.", status: "Compliance information available" }
  ],
  advantages: [
    { number: "01", title: "A consultative approach", description: "We begin with how people work and learn, then shape a technology recommendation around the real outcome." },
    { number: "02", title: "Trusted technology, chosen well", description: "Our portfolio focuses on established brands and products with the reliability organisations need." },
    { number: "03", title: "Support that stays close", description: "From the first conversation through deployment, our team stays accountable to a smoother experience." }
  ],
  socialLinks: [{ label: "LinkedIn", href: "https://www.linkedin.com/company/galtech-infosolutions/" }],
  footer: {
    productLinks: [{ label: "Interactive displays", href: "/products?category=interactive-panels" }, { label: "Toshiba MFPs", href: "/products?category=toshiba-printers" }, { label: "InFocus projectors", href: "/products?category=infocus-projectors" }],
    companyLinks: [{ label: "About GALTech", href: "/about" }, { label: "Partner brands", href: "/partners" }, { label: "Contact", href: "/contact" }],
    legalLinks: [{ label: "Certificates", href: "/certificates" }, { label: "Privacy", href: "/contact" }, { label: "E-waste", href: "/certificates#e-waste" }],
    copyright: "Copyright 2026 GALTech Infosolutions Private Limited. All rights reserved."
  }
} as const;

export type CompanyDetails = typeof companyDetails;
