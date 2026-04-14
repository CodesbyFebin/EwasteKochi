// src/lib/seo.ts
import { SITE_URL, SITE_NAME, CONTACT_PHONE, ADDRESS, BUSINESS_INFO } from "@/lib/content";

// ============================================
// 1. Constants & Defaults
// ============================================
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const OG_IMAGE_WIDTH = "1200";
export const OG_IMAGE_HEIGHT = "630";
export const TWITTER_HANDLE = "@ewastekochi";

// Supported languages (for hreflang)
export const LANGUAGES = [
  { code: "en", locale: "en_IN", name: "English", path: "/" },
  { code: "ml", locale: "ml_IN", name: "മലയാളം", path: "/ml/" },
  { code: "ta", locale: "ta_IN", name: "தமிழ்", path: "/ta/" },
  { code: "hi", locale: "hi_IN", name: "हिन्दी", path: "/hi/" },
];

// ============================================
// 2. Page SEO Configuration (Single Source of Truth)
// ============================================
export interface PageSEO {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  ogType?: "website" | "article";
  keywords?: string;
  noindex?: boolean;
  publishedTime?: string;   // for article schema
  modifiedTime?: string;
  author?: string;
}

// Default SEO for all pages
export const PAGE_SEO: Record<string, PageSEO> = {
  home: {
    title: "E-Waste Collection Kochi | Certified ITAD & Data Destruction Kerala",
    description: "KSPCB-Authorized e-waste collection in Kochi. NIST-certified hard drive shredding, laptop buyback, and ITAD services. Avoid DPDP Act penalties up to ₹250Cr.",
    canonicalPath: "/",
    keywords: "e-waste recycling kochi, ITAD kochi, data destruction kochi, hard drive shredding kochi, sell old laptop kochi, e-waste pickup kochi",
  },
  services: {
    title: "ITAD & E-Waste Services Kochi | Certified Recycling & Data Destruction",
    description: "Comprehensive ITAD, data destruction, HDD shredding, laptop buyback, and corporate e-waste management services in Kochi. KSPCB authorized, DPDP compliant.",
    canonicalPath: "/services",
    keywords: "ITAD services kochi, data destruction kochi, hard drive shredding, laptop buyback kochi, corporate e-waste",
  },
  blog: {
    title: "E-Waste Blog & Resources Kerala | ITAD Guides & Data Security Tips",
    description: "Expert guides on e-waste regulations, data destruction standards, ITAD best practices, and responsible recycling in Kerala. Stay compliant with DPDP Act 2023.",
    canonicalPath: "/blog",
    keywords: "e-waste blog kerala, ITAD guide, data destruction guide, DPDP compliance guide",
  },
  locations: {
    title: "E-Waste Pickup Locations Kochi | All Ernakulam Areas Covered",
    description: "Free e-waste pickup across 52+ locations in Kochi and Ernakulam — Kakkanad, Infopark, Edapally, Vyttila, Aluva, Kalamassery. Same-day corporate service.",
    canonicalPath: "/locations",
    keywords: "e-waste pickup locations kochi, ernakulam e-waste, kakkanad e-waste, infopark recycling",
  },
  masterGuide: {
    title: "E-Waste Recycling Kochi Master Guide | ITAD, Data Destruction & DPDP Compliance",
    description: "The ultimate guide to e-waste recycling, ITAD, certified data destruction, and DPDP Act 2023 compliance in Kochi, Kerala. 20,000+ words of expert content.",
    canonicalPath: "/master-guide",
    keywords: "e-waste guide kochi, ITAD guide kerala, data destruction guide, DPDP act guide",
    ogType: "article",
  },
  sellElectronics: {
    title: "Sell Old Electronics Kochi | Best Buyback Price for Laptops & Phones",
    description: "Sell old laptops, smartphones & tablets in Kochi for the best price. Guaranteed data wiping, instant cash or UPI, free pickup in Ernakulam. Better than Cashify.",
    canonicalPath: "/sell-electronics-kochi",
    keywords: "sell old laptop kochi, sell old phone kochi, laptop buyback kochi, smartphone buyback ernakulam",
  },
  cashifyComparison: {
    title: "Cashify vs EWaste Kochi | Better Buyback Price & Certified Data Destruction",
    description: "Why Kochi businesses choose EWaste Kochi over Cashify — certified data destruction, higher buyback rates, bulk ITAD for corporates, and DPDP compliant disposal.",
    canonicalPath: "/cashify-vs-ewastekochi",
    keywords: "cashify alternative kochi, best buyback kochi, sell laptop alternatives kochi",
  },
  hardDriveDestruction: {
    title: "Hard Drive Shredding Kochi | NIST Certified Data Destruction Kerala",
    description: "Industrial hard drive shredding & NIST 800-88 certified data destruction in Kochi. On-site shredding available. Certificate of Destruction every job. Prevent data breaches.",
    canonicalPath: "/hard-drive-destruction-kochi",
    keywords: "hard drive shredding kochi, data destruction kochi, NIST 800-88 kochi, HDD shredding kerala",
  },
  dpdpAct: {
    title: "DPDP Act 2023 Compliance Kochi | Secure IT Asset Disposal Kerala",
    description: "Is your Kochi business compliant with the Digital Personal Data Protection Act 2023? Certified data destruction protects you from penalties up to ₹250Cr.",
    canonicalPath: "/dpdp-act-kochi",
    keywords: "DPDP act compliance kochi, data protection act kerala, IT asset disposal compliance",
  },
  itadPillar: {
    title: "ITAD Services Kochi — Complete IT Asset Disposition Guide for Kerala",
    description: "Comprehensive IT Asset Disposition for Kochi businesses. NIST-certified data destruction, asset tagging, chain of custody, and full DPDP Act compliance.",
    canonicalPath: "/itad-kochi-guide",
    keywords: "ITAD kochi, IT asset disposition kerala, certified ITAD services ernakulam",
    ogType: "article",
  },
  about: {
    title: "About EWaste Kochi | KSPCB Authorized E-Waste Recycler Kerala",
    description: "EWaste Kochi is Kerala's #1 KSPCB-authorized e-waste recycler. Certified NIST 800-88 data destruction, ISO 14001 environmental management, and DPDP Act compliant ITAD.",
    canonicalPath: "/about",
    keywords: "about ewaste kochi, certified recycler kerala, KSPCB authorized kochi",
  },
  contact: {
    title: "Contact EWaste Kochi | Free E-Waste Pickup & ITAD Consultation",
    description: "Get a free quote for e-waste recycling or ITAD services. Call +91 75005 555454 or WhatsApp. Same-day response for Kochi businesses.",
    canonicalPath: "/contact",
    keywords: "contact ewaste kochi, e-waste pickup kochi, ITAD consultation kerala",
  },
  faq: {
    title: "E-Waste Recycling FAQ | ITAD & Data Destruction Answers Kochi",
    description: "50+ answers to common questions about e-waste recycling, data destruction, ITAD, DPDP Act compliance, and laptop buyback in Kochi.",
    canonicalPath: "/faq",
    keywords: "e-waste faq kochi, data destruction questions, ITAD faq kerala",
    ogType: "article",
  },
};

// ============================================
// 3. Core Meta Tag Builder
// ============================================
export interface MetaTags {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  ogImageWidth: string;
  ogImageHeight: string;
  ogType: "website" | "article";
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  twitterCard?: string;
  keywords?: string;
  robots: string;
  // Additional
  ogLocale?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
}

export function buildPageSEO(seo: PageSEO, langCode: string = "en"): MetaTags {
  const canonicalUrl = `${SITE_URL}${seo.canonicalPath}`;
  const image = seo.ogImage ?? DEFAULT_OG_IMAGE;
  const type = seo.ogType ?? "website";

  return {
    title: seo.title,
    description: seo.description,
    canonical: canonicalUrl,
    ogTitle: seo.title,
    ogDescription: seo.description,
    ogUrl: canonicalUrl,
    ogImage: image,
    ogImageWidth: OG_IMAGE_WIDTH,
    ogImageHeight: OG_IMAGE_HEIGHT,
    ogType: type,
    twitterTitle: seo.title,
    twitterDescription: seo.description,
    twitterImage: image,
    twitterCard: "summary_large_image",
    keywords: seo.keywords,
    robots: seo.noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large",
    ogLocale: LANGUAGES.find(l => l.code === langCode)?.locale || "en_IN",
    articlePublishedTime: seo.publishedTime,
    articleModifiedTime: seo.modifiedTime,
    articleAuthor: seo.author || SITE_NAME,
  };
}

// ============================================
// 4. Hreflang Tags Generator (Multilingual SEO)
// ============================================
export function buildHreflangTags(canonicalPath: string): Array<{ rel: string; hrefLang: string; href: string }> {
  const tags = [];
  for (const lang of LANGUAGES) {
    let path = canonicalPath === "/" ? lang.path : `${lang.path}${canonicalPath.slice(1)}`;
    // Remove duplicate slashes
    path = path.replace(/\/+/g, "/").replace(/:\//, "://");
    tags.push({ rel: "alternate", hrefLang: lang.code, href: `${SITE_URL}${path}` });
  }
  // Add x-default (usually English)
  tags.push({ rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}${canonicalPath}` });
  return tags;
}

// ============================================
// 5. Geo & Local Meta Tags (for local SEO)
// ============================================
export function buildGeoMetaTags(): Record<string, string> {
  return {
    "geo.region": "IN-KL",
    "geo.placename": "Kochi",
    "geo.position": `${BUSINESS_INFO.coordinates.lat};${BUSINESS_INFO.coordinates.lng}`,
    "ICBM": `${BUSINESS_INFO.coordinates.lat}, ${BUSINESS_INFO.coordinates.lng}`,
  };
}

// ============================================
// 6. Structured Data (JSON-LD) Helpers
// ============================================
export function getOrganizationSchema() {
  return {
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
    sameAs: [
      "https://facebook.com/ewastekochi",
      "https://twitter.com/ewastekochi",
      "https://linkedin.com/company/ewastekochi",
      "https://instagram.com/ewastekochi",
      `https://wa.me/91${CONTACT_PHONE}`,
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    image: DEFAULT_OG_IMAGE,
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
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getArticleSchema(seo: PageSEO) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: seo.title,
    description: seo.description,
    image: seo.ogImage || DEFAULT_OG_IMAGE,
    datePublished: seo.publishedTime || new Date().toISOString(),
    dateModified: seo.modifiedTime || new Date().toISOString(),
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, logo: `${SITE_URL}/logo.png` },
    mainEntityOfPage: `${SITE_URL}${seo.canonicalPath}`,
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function getItemListSchema({ name, description, numberOfItems, itemListElement }: any) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems,
    itemListElement,
  };
}

export function getWebPageSchema({ name, description, url, lastReviewed }: any) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    lastReviewed,
  };
}

// ============================================
// 7. Keyword Cluster Helper (for meta keywords)
// ============================================
export function getKeywordCluster(pageKey: string): string {
  const clusters: Record<string, string[]> = {
    home: ["e-waste recycling kochi", "ITAD kochi", "hard drive shredding kochi", "laptop buyback kochi", "data destruction kerala", "DPDP act compliance"],
    services: ["ITAD services kochi", "data destruction kochi", "hard drive shredding", "corporate e-waste kochi", "asset disposition kerala"],
    blog: ["e-waste blog kerala", "ITAD guide", "data destruction tips", "DPDP compliance guide"],
    sell: ["sell old laptop kochi", "laptop buyback kochi", "sell old phone kochi", "smartphone resale ernakulam"],
    default: ["e-waste recycling kochi", "ITAD services kerala", "data destruction kochi", "hard drive shredding", "DPDP act compliance"],
  };
  const keywords = clusters[pageKey] || clusters.default;
  return keywords.join(", ");
}

// ============================================
// 8. Helper to Inject All Meta Tags into Helmet
// ============================================
export function buildFullHelmetTags(seo: PageSEO, langCode: string = "en") {
  const meta = buildPageSEO(seo, langCode);
  const hreflangs = buildHreflangTags(seo.canonicalPath);
  const geo = buildGeoMetaTags();

  const tags = [
    { title: meta.title },
    { name: "description", content: meta.description },
    { name: "keywords", content: meta.keywords || getKeywordCluster(seo.canonicalPath.split("/")[1] || "home") },
    { name: "robots", content: meta.robots },
    { link: { rel: "canonical", href: meta.canonical } },
    // Open Graph
    { property: "og:title", content: meta.ogTitle },
    { property: "og:description", content: meta.ogDescription },
    { property: "og:url", content: meta.ogUrl },
    { property: "og:type", content: meta.ogType },
    { property: "og:image", content: meta.ogImage },
    { property: "og:image:width", content: meta.ogImageWidth },
    { property: "og:image:height", content: meta.ogImageHeight },
    { property: "og:locale", content: meta.ogLocale },
    { property: "og:site_name", content: SITE_NAME },
    // Twitter
    { name: "twitter:card", content: meta.twitterCard },
    { name: "twitter:title", content: meta.twitterTitle },
    { name: "twitter:description", content: meta.twitterDescription },
    { name: "twitter:image", content: meta.twitterImage },
    { name: "twitter:site", content: TWITTER_HANDLE },
    // Geo
    { name: "geo.region", content: geo["geo.region"] },
    { name: "geo.placename", content: geo["geo.placename"] },
    { name: "geo.position", content: geo["geo.position"] },
    { name: "ICBM", content: geo["ICBM"] },
  ];

  // Add hreflang links
  for (const h of hreflangs) {
    tags.push({ link: { rel: h.rel, hrefLang: h.hrefLang, href: h.href } } as any);
  }

  // Article specific
  if (meta.ogType === "article") {
    if (meta.articlePublishedTime) tags.push({ property: "article:published_time", content: meta.articlePublishedTime });
    if (meta.articleModifiedTime) tags.push({ property: "article:modified_time", content: meta.articleModifiedTime });
    if (meta.articleAuthor) tags.push({ property: "article:author", content: meta.articleAuthor });
  }

  return tags;
}
