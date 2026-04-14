// src/lib/content.ts

// ============================================
// 1. Basic Site Information
// ============================================
export const SITE_NAME = "EWaste Kochi";
export const SITE_DESCRIPTION = "Kerala's #1 KSPCB-authorized e-waste recycling & ITAD services in Kochi. NIST-certified data destruction, free corporate pickup, and Certificate of Destruction for DPDP Act 2023 compliance.";
export const SITE_URL = "https://ewastekochi.com";
export const CONTACT_PHONE = "7500555454";
export const CONTACT_PHONE_DISPLAY = "+91 75005 55454";
export const CONTACT_WA = "917500555454";
export const CONTACT_EMAIL = "hello@ewastekochi.com";
export const ADDRESS = "710A, Hill Palace Rd, Thrippunithura, Kochi, Kerala 682301";

// Open Graph & Twitter Cards
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const TWITTER_HANDLE = "@ewastekochi";
export const FACEBOOK_PAGE = "https://facebook.com/ewastekochi";

// ============================================
// 2. Enhanced Business Info (for Schema)
// ============================================
export const BUSINESS_INFO = {
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  phone: CONTACT_PHONE,
  wa: CONTACT_WA,
  email: CONTACT_EMAIL,
  address: ADDRESS,
  city: "Kochi",
  state: "Kerala",
  pincode: "682301",
  coordinates: { lat: 9.9312, lng: 76.2673 },
  hours: "Mon-Sat: 9AM-6PM",
  certifications: ["KSPCB Authorized", "NIST 800-88 Compliant", "DPDP Act 2023 Compliant"],
  // Schema-specific
  priceRange: "₹₹",
  ratingValue: "4.9",
  reviewCount: 128,
  foundingYear: 2018,
  employees: "11-50",
};

export const CONTACT_INFO = {
  phone: CONTACT_PHONE,
  wa: CONTACT_WA,
  email: CONTACT_EMAIL,
  address: ADDRESS,
  hours: "Mon-Sat: 9AM-6PM",
  responseTime: "Within 2 hours",
};

// ============================================
// 3. Keyword Clusters (Internal Linking Goldmine)
// ============================================
export const KEYWORD_CLUSTERS = [
  { text: "Hard Drive Shredding Kochi", url: "/hard-drive-destruction-kochi" },
  { text: "Data Destruction Services", url: "/hard-drive-destruction-kochi" },
  { text: "NIST 800-88 Wiping", url: "/data-sanitization-certificate" },
  { text: "DoD 5220.22-M Shredding", url: "/hard-drive-destruction-kochi" },
  { text: "SSD Destruction", url: "/hard-drive-destruction-kochi" },
  { text: "Laptop Buyback Kochi", url: "/sell-electronics-kochi" },
  { text: "Sell Old Phone Kochi", url: "/sell-electronics-kochi" },
  { text: "MacBook Resale Value", url: "/sell-electronics-kochi" },
  { text: "Corporate ITAD Kerala", url: "/services" },
  { text: "IT Asset Disposition", url: "/services" },
  { text: "EPR Compliance Kerala", url: "/epr-compliance-kerala" },
  { text: "DPDP Act 2023 Compliance", url: "/dpdp-act-kochi" },
  { text: "Certificate of Destruction", url: "/data-sanitization-certificate" },
  { text: "Server Disposal Kochi", url: "/server-disposal-kochi" },
  { text: "Datacenter Decommissioning", url: "/server-disposal-kochi" },
  { text: "E-waste Recycling Kochi", url: "/services" },
  { text: "Computer Recycling Ernakulam", url: "/services" },
  { text: "Battery Disposal Kochi", url: "/blog/where-to-recycle-batteries-kochi-safely" },
  { text: "UPS Recycling", url: "/services" },
  { text: "Printer Disposal", url: "/services" },
  { text: "Medical Equipment Recycling", url: "/services" },
  { text: "Bank ITAD Services", url: "/services" },
  { text: "Infopark E-waste Pickup", url: "/locations/kakkanad-itad-services" },
  { text: "Kakkanad ITAD", url: "/locations/kakkanad-itad-services" },
  { text: "Edappally Laptop Buyback", url: "/locations/edappally-laptop-buyback" },
  { text: "Vyttila E-waste Collection", url: "/locations/vyttila-e-waste-pickup" },
  { text: "Aluva Electronic Recycling", url: "/locations/aluva-electronic-recycling" },
  { text: "Kalamassery Industrial Waste", url: "/locations/kalamassery-industrial-e-waste" },
  { text: "Thrippunithura Facility", url: "/contact" },
  { text: "Cashify vs EWaste Kochi", url: "/cashify-vs-ewastekochi" },
  { text: "Best Buyback Price Kochi", url: "/sell-electronics-kochi" },
  { text: "Free E-waste Pickup", url: "/services" },
  { text: "Same-day Data Destruction", url: "/hard-drive-destruction-kochi" },
  { text: "On-site Hard Drive Shredding", url: "/hard-drive-destruction-kochi" },
  { text: "NABH Compliance Hospital", url: "/dpdp-act-kochi" },
  { text: "KSPCB Authorized Recycler", url: "/certifications" },
  { text: "ISO 14001 Certified", url: "/certifications" },
  { text: "ISO 27001 Data Security", url: "/certifications" },
  { text: "Green Certificate Kerala", url: "/certifications" },
  { text: "Asset Remarketing Kochi", url: "/services" },
  { text: "Data Sanitization Report", url: "/data-sanitization-certificate" },
  { text: "GDPR Compliant Destruction", url: "/dpdp-act-kochi" },
  { text: "Zero Landfill Recycling", url: "/services" },
  { text: "Urban Mining Kerala", url: "/blog" },
  { text: "Right to Repair E-waste", url: "/blog" },
  { text: "E-waste Rules 2022 Kerala", url: "/blog/e-waste-rules-2022-kerala-complete-guide" },
  { text: "Laptop Disposal Certificate", url: "/data-sanitization-certificate" },
  { text: "Bulk IT Asset Pickup", url: "/services" },
  { text: "Startup ITAD Program", url: "/services" },
  { text: "School E-waste Drive", url: "/contact" },
];

// ============================================
// 4. Services with SEO metadata
// ============================================
export const SERVICES = [
  {
    id: "itad",
    title: "ITAD Services Kochi",
    description: "Complete IT asset disposition for Kochi corporates. Full asset tagging, NIST/DoD certified data destruction, remarketing, and a verifiable audit trail for DPDP Act 2023 compliance.",
    icon: "Building2",
    features: ["NIST Certified", "Free Pickup", "DPDP Compliant"],
    price: "Custom Quote",
    timeline: "24-48 Hours",
    schemaType: "Service",
    slug: "itad",
    canonical: `${SITE_URL}/services/itad`,
    priority: 0.9,
    changefreq: "weekly",
    image: "/images/services/itad.jpg",
  },
  {
    id: "data-destruction",
    title: "Data Destruction Kochi",
    description: "NIST 800-88 & DoD 5220.22-M certified data wiping and physical HDD/SSD shredding. Certificate of Destruction issued for every device.",
    icon: "Database",
    features: ["CoD Every Job", "DPDP Act Compliant", "On-Site Available"],
    price: "From ₹200/unit",
    timeline: "Same Day",
    schemaType: "Service",
    slug: "data-destruction",
    canonical: `${SITE_URL}/services/data-destruction`,
    priority: 0.9,
    changefreq: "weekly",
    image: "/images/services/data-destruction.jpg",
  },
  {
    id: "shredding",
    title: "Hard Drive Shredding Kochi",
    description: "Physical industrial shredding of HDDs, SSDs, NVMe drives and all storage media. Data 100% unrecoverable. Ideal for banks and hospitals.",
    icon: "Settings",
    features: ["100% Unrecoverable", "From ₹200/drive", "Book Shredding"],
    price: "From ₹250/drive",
    timeline: "On-Site Available",
    schemaType: "Service",
    slug: "hard-drive-shredding",
    canonical: `${SITE_URL}/services/hard-drive-shredding`,
    priority: 0.9,
    changefreq: "weekly",
    image: "/images/services/shredding.jpg",
  },
  {
    id: "laptop-buyback",
    title: "Sell Old Laptops Kochi",
    description: "Get the best buyback price for old laptops, MacBooks, gaming laptops in Kochi. Instant valuation, same-day payment in cash or UPI.",
    icon: "Laptop",
    features: ["Best Price Guarantee", "Same-Day Payment", "Get Buyback Quote"],
    price: "Highest Payout",
    timeline: "Instant Payment",
    schemaType: "Product",
    slug: "laptop-buyback",
    canonical: `${SITE_URL}/services/laptop-buyback`,
    priority: 0.8,
    changefreq: "weekly",
    image: "/images/services/laptop-buyback.jpg",
  },
  {
    id: "phone-buyback",
    title: "Sell Old Phones Kochi",
    description: "Best resale value for iPhones, Samsung, OnePlus, Xiaomi and all smartphones in Kochi. Data wiped before resale — guaranteed.",
    icon: "Smartphone",
    features: ["All Brands", "Data Wiped", "Get Quote"],
    price: "Best Resale Value",
    timeline: "Instant Payment",
    schemaType: "Product",
    slug: "phone-buyback",
    canonical: `${SITE_URL}/services/phone-buyback`,
    priority: 0.8,
    changefreq: "weekly",
    image: "/images/services/phone-buyback.jpg",
  },
  {
    id: "corporate-ewaste",
    title: "Corporate E-Waste Kochi",
    description: "End-to-end corporate e-waste management for businesses across Kochi. Office relocation clearance and IT refresh programs.",
    icon: "Factory",
    features: ["Free Assessment", "EPR Compliant", "Learn More"],
    price: "Free Pickup*",
    timeline: "Scheduled",
    schemaType: "Service",
    slug: "corporate-ewaste",
    canonical: `${SITE_URL}/services/corporate-ewaste`,
    priority: 0.8,
    changefreq: "monthly",
    image: "/images/services/corporate.jpg",
  },
  {
    id: "sell-electronics",
    title: "Sell Electronics Kochi",
    description: "The #1 alternative to Cashify in Kochi. We buy old laptops, phones, and tablets at higher-than-market rates with guaranteed data wiping. Instant cash for your gadgets in Ernakulam.",
    icon: "Smartphone",
    features: ["Higher Payouts", "Data Wiped", "Instant Cash"],
    schemaType: "Product",
    slug: "sell-electronics",
    canonical: `${SITE_URL}/sell-electronics-kochi`,
    priority: 0.8,
    changefreq: "daily",
    image: "/images/services/sell-electronics.jpg",
  },
  {
    id: "cashify-comparison",
    title: "Cashify vs EWaste Kochi",
    description: "Why Kochi businesses and individuals choose us over Cashify. We offer certified data destruction and higher buyback values for bulk IT assets and premium electronics.",
    icon: "ArrowRight",
    features: ["Certified Destruction", "Bulk Buyback", "Local Support"],
    schemaType: "Article",
    slug: "cashify-vs-ewastekochi",
    canonical: `${SITE_URL}/cashify-vs-ewastekochi`,
    priority: 0.7,
    changefreq: "monthly",
    image: "/images/services/cashify-comparison.jpg",
  },
];

// ============================================
// 5. Locations with geo coordinates
// ============================================
export const LOCATIONS = [
  { name: "Kakkanad", slug: "kakkanad", lat: 10.0159, lng: 76.3426 },
  { name: "Infopark", slug: "infopark", lat: 10.0099, lng: 76.3425 },
  { name: "Smart City", slug: "smart-city", lat: 10.0229, lng: 76.3441 },
  { name: "Edappally", slug: "edappally", lat: 10.0285, lng: 76.3061 },
  { name: "Aluva", slug: "aluva", lat: 10.1076, lng: 76.3513 },
  { name: "Vyttila", slug: "vyttila", lat: 9.9667, lng: 76.3179 },
  { name: "Palarivattom", slug: "palarivattom", lat: 9.9971, lng: 76.3043 },
  { name: "Thrippunithura", slug: "thrippunithura", lat: 9.9558, lng: 76.3409 },
  { name: "Angamaly", slug: "angamaly", lat: 10.1929, lng: 76.3901 },
  { name: "Perumbavoor", slug: "perumbavoor", lat: 10.1113, lng: 76.4845 },
  { name: "Kalamassery", slug: "kalamassery", lat: 10.0575, lng: 76.3274 },
  { name: "Eloor", slug: "eloor", lat: 10.0825, lng: 76.2947 },
  { name: "Maradu", slug: "maradu", lat: 9.9352, lng: 76.3368 },
  { name: "Fort Kochi", slug: "fort-kochi", lat: 9.9659, lng: 76.2427 },
  { name: "Mattancherry", slug: "mattancherry", lat: 9.9581, lng: 76.2582 },
  { name: "MG Road", slug: "mg-road", lat: 9.9791, lng: 76.2779 },
  { name: "Panampilly Nagar", slug: "panampilly-nagar", lat: 9.9638, lng: 76.2923 },
  { name: "Cheranallur", slug: "cheranallur", lat: 10.0963, lng: 76.3114 },
];

export const SERVED_AREAS = LOCATIONS.map(loc => ({
  name: `${loc.name} E-Waste Services`,
  link: `/locations/${loc.slug}`,
  slug: loc.slug,
  geo: { lat: loc.lat, lng: loc.lng },
}));

// ============================================
// 6. FAQ – enhanced with internal links
// ============================================
export const FAQS = [
  {
    question: "What is e-waste recycling and why is it critical for Kochi's environment?",
    answer: "<strong>E-waste recycling is the process of recovering valuable materials from old electronics while safely disposing of hazardous substances.</strong> In a rapidly developing city like Kochi, the volume of e-waste from IT parks like Infopark and SmartCity, as well as residential areas, is skyrocketing. Improper disposal—such as throwing electronics in regular trash or selling to unauthorized scrap dealers—leads to heavy metals like lead, mercury, and cadmium leaching into Kochi's sensitive backwaters and soil. Certified e-waste recycling at <a href='/' class='text-green-600 font-bold hover:underline'>EWaste Kochi</a> ensures that these toxic materials are safely extracted and processed, while valuable resources like gold, copper, and rare earth metals are recovered for reuse in the circular economy.",
  },
  {
    question: "How can I schedule a free e-waste pickup in Kochi or Ernakulam?",
    answer: "<strong>You can schedule a free e-waste pickup in Kochi by contacting us via WhatsApp or calling our helpline at 7500555454.</strong> For corporate clients and businesses in areas like <a href='/locations/kakkanad' class='text-green-600 font-bold hover:underline'>Kakkanad</a>, <a href='/locations/aluva' class='text-green-600 font-bold hover:underline'>Aluva</a>, and <a href='/locations/edappally' class='text-green-600 font-bold hover:underline'>Edappally</a>, we offer free door-to-door pickup for bulk quantities (typically 10+ major items like laptops, desktops, or servers). Our logistics team, equipped with GPS-tracked vehicles, will coordinate a time that suits your schedule. For individual residential customers in Kochi, we have designated drop-off points at our Thrippunithura headquarters. We also organize community collection drives in major residential complexes across Ernakulam to make responsible recycling accessible to everyone.",
  },
  {
    question: "What exactly is a Certificate of Destruction (CoD) and why do I need it?",
    answer: "<strong>A Certificate of Destruction (CoD) is an official document that proves your data-bearing assets have been securely destroyed in compliance with NIST 800-88 standards.</strong> This certificate includes details such as the serial numbers of the devices, the date of destruction, and the specific method used (e.g., NIST 800-88 compliant wiping or physical shredding). For businesses in Kochi, especially those in the banking, healthcare, and IT sectors, a CoD is essential for regulatory compliance. It demonstrates that you have fulfilled your duty of care under the <a href='/dpdp-act-kochi' class='text-green-600 font-bold hover:underline'>DPDP Act 2023</a> and other data protection regulations, protecting your organization from legal liabilities and potential fines in the event of a data breach audit.",
  },
];

// ============================================
// 7. Blog posts with SEO metadata
// ============================================
export const BLOG_POSTS = [
  {
    id: 1,
    title: "DPDP Act 2023: Complete Compliance Guide for Kochi Businesses",
    excerpt: "Everything you need to know about India's new data protection law and how it affects e-waste disposal.",
    category: "Compliance",
    date: new Date().toISOString().split('T')[0],
    slug: "dpdp-act-2023-kochi",
    image: "/images/blog/dpdp-act.webp",
    altText: "DPDP Act 2023 compliance guide for Kochi businesses – IT asset disposal and data destruction requirements",
    updatedDate: new Date().toISOString().split('T')[0],
    readTime: "7 min read",
    content: "## Understanding DPDP Act 2023\n\nThe Digital Personal Data Protection (DPDP) Act 2023 has fundamentally changed how businesses in India handle data. For Kochi businesses, this means re-evaluating end-of-life IT asset disposal to ensure complete data security.\n\n## Why Compliant ITAD Matters\n\nProper IT Asset Disposition (ITAD) ensures data is irretrievably destroyed, protecting your business from massive fines and reputational damage.",
    author: "EWaste Kochi Team",
    canonical: `${SITE_URL}/blog/dpdp-act-2023-kochi`,
    priority: 0.8,
    changefreq: "weekly",
    keywords: "DPDP Act 2023, data protection, ITAD compliance, Kochi",
  },
  {
    id: 2,
    title: "E-Waste Rules 2022 Kerala — Complete Guide",
    excerpt: "What changed with the 2022 e-waste rules and how to ensure your Kochi business is fully compliant.",
    category: "Regulations",
    date: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0],
    slug: "ewaste-rules-2022-kerala",
    image: "/images/blog/ewaste-rules.webp",
    altText: "E-waste Rules 2022 Kerala – complete guide to KSPCB compliance and e-waste management for businesses",
    updatedDate: new Date(Date.now() - 86400000 * 1).toISOString().split('T')[0],
    readTime: "5 min read",
    content: "## E-Waste Rules 2022 Update\n\nThe new regulations bring stricter Extended Producer Responsibility (EPR) mandates. Organizations in Kerala must now partner with authorized recyclers like EWaste Kochi to manage electronics disposal legally.\n\n## Key Takeaways\n- EPR compliance is mandatory.\n- Authorized recycling is the only legal route.",
    author: "EWaste Kochi Team",
    canonical: `${SITE_URL}/blog/ewaste-rules-2022-kerala`,
    priority: 0.7,
    changefreq: "monthly",
    keywords: "E-waste rules, Kerala, KSPCB, EPR compliance",
  },
];

// Helper to get recent posts
export const getRecentBlogs = (count: number) => {
  return [...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
};

// ============================================
// 8. Testimonials with schema-ready fields
// ============================================
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "IT Manager",
    company: "Infopark Tech Park",
    text: "EWaste Kochi provided excellent ITAD services for our office relocation. Professional data destruction and smooth pickup process.",
    rating: 5,
    date: "2026-03-15",
    image: "/images/testimonials/rajesh.jpg",
  },
  {
    id: 2,
    name: "Dr. Sajesh K",
    role: "Administrator",
    company: "Kochi Medical College",
    text: "Secure on-site hard drive shredding for our patient records. Fully compliant with healthcare regulations. Highly recommended.",
    rating: 5,
    date: "2026-02-20",
    image: "/images/testimonials/sajesh.jpg",
  },
  {
    id: 3,
    name: "Anil Jose",
    role: "Facility Head",
    company: "SmartCity Kochi",
    text: "Best e-waste recycling service in Kochi. Regular pickups and great customer support. Our go-to for IT asset disposal.",
    rating: 5,
    date: "2026-01-10",
    image: "/images/testimonials/anil.jpg",
  },
];

// ============================================
// 9. Case Studies with rich data
// ============================================
export const CASE_STUDIES = [
  {
    title: "Infopark Giant's 1000-Laptop Refresh",
    summary: "A leading IT firm in Infopark needed to refresh 1000 employee laptops while ensuring DPDP Act compliance.",
    outcome: "100% data destruction verified, ₹4.2L recovered in asset value, zero environmental waste.",
    image: "/images/case-studies/infopark.jpg",
    slug: "infopark-1000-laptop-refresh",
    client: "Confidential IT MNC",
    industry: "Information Technology",
    challenge: "Secure disposal of 1000 laptops containing sensitive corporate data.",
    solution: "On-site data wiping + asset remarketing + certificate of destruction.",
    results: ["100% data destruction", "₹4.2 lakh recovered", "DPDP Act compliant"],
  },
  {
    title: "Kochi Hospital Data Security",
    summary: "A major multi-specialty hospital required secure disposal of 8 years of patient record storage servers.",
    outcome: "Witnessed on-site shredding completed, full audit trail provided, NABH compliance satisfied.",
    image: "/images/case-studies/hospital.jpg",
    slug: "kochi-hospital-data-security",
    client: "Multi-specialty Hospital",
    industry: "Healthcare",
    challenge: "Destruction of 8 years of patient data on retired servers.",
    solution: "On-site physical shredding + chain-of-custody + NABH compliance report.",
    results: ["Witnessed shredding", "Full audit trail", "NABH compliant"],
  },
];

// ============================================
// 10. Navigation (keyword-rich)
// ============================================
export const NAV_LINKS = [
  { path: "/services", label: "ITAD Services", keyword: "ITAD services Kochi" },
  { path: "/sell-electronics-kochi", label: "Sell Electronics", keyword: "laptop buyback Kochi" },
  { path: "/hard-drive-destruction-kochi", label: "Hard Drive Destruction", keyword: "hard drive shredding" },
  { path: "/dpdp-act-kochi", label: "DPDP Compliance", keyword: "DPDP Act 2023" },
  { path: "/blog", label: "Resources", keyword: "e-waste blog" },
  { path: "/locations", label: "Service Areas", keyword: "e-waste pickup Kochi" },
  { path: "/about", label: "About", keyword: "certified ITAD Kerala" },
];

// ============================================
// 11. Social Media & SameAs
// ============================================
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/ewastekochi",
  twitter: "https://twitter.com/ewastekochi",
  linkedin: "https://linkedin.com/company/ewastekochi",
  instagram: "https://instagram.com/ewastekochi",
  youtube: "https://youtube.com/@ewastekochi",
  whatsapp: `https://wa.me/91${CONTACT_WA}`,
};

export const SAME_AS = Object.values(SOCIAL_LINKS);

// ============================================
// 12. Helper functions for schema generation
// ============================================
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+91${CONTACT_PHONE}`,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Malayalam", "Tamil", "Hindi"],
  },
  sameAs: SAME_AS,
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  image: OG_IMAGE,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.split(",")[0],
    addressLocality: "Kochi",
    addressRegion: "Kerala",
    postalCode: "682301",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS_INFO.coordinates.lat,
    longitude: BUSINESS_INFO.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  telephone: `+91${CONTACT_PHONE}`,
  priceRange: BUSINESS_INFO.priceRange,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS_INFO.ratingValue,
    reviewCount: BUSINESS_INFO.reviewCount,
  },
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const getServiceSchema = (service: any) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service.title,
  provider: { "@type": "LocalBusiness", name: SITE_NAME },
  areaServed: { "@type": "City", name: "Kochi" },
  description: service.description,
  url: service.canonical,
  offers: {
    "@type": "Offer",
    price: service.price === "Custom Quote" ? "0" : service.price.replace("From ₹", "").replace("/unit", ""),
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
});

export const getProductSchema = (product: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.title,
  description: product.description,
  image: product.image,
  brand: { "@type": "Brand", name: SITE_NAME },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: SITE_NAME },
  },
});

// ============================================
// 13. Sitemap priorities (for reference)
// ============================================
export const SITEMAP_PRIORITIES = {
  homepage: 1.0,
  services: 0.9,
  locations: 0.8,
  blog: 0.7,
  buyback: 0.8,
  compliance: 0.8,
  other: 0.5,
};

export const SITEMAP_CHANGEFREQ = {
  homepage: "daily",
  services: "weekly",
  blog: "weekly",
  locations: "monthly",
  product: "monthly",
};
