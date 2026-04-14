import { SITE_NAME, SITE_URL, ADDRESS, CONTACT_PHONE, CONTACT_EMAIL, FAQS } from "@/constants/content";

// ============================================
// 1. Core Entity Schemas
// ============================================

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": SITE_NAME,
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": CONTACT_PHONE,
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Malayalam", "Tamil", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/ewastekochi",
    "https://twitter.com/ewastekochi",
    "https://www.linkedin.com/company/ewastekochi"
  ]
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": SITE_NAME,
  "image": `${SITE_URL}/images/facility.jpg`,
  "url": SITE_URL,
  "telephone": CONTACT_PHONE,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "710A, Hill Palace Rd",
    "addressLocality": "Thrippunithura",
    "addressRegion": "Kerala",
    "postalCode": "682301",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 9.9558,
    "longitude": 76.3409
  },
  "hasMap": "https://maps.app.goo.gl/7pLmMQjjK4hNf97q7",
  "openingHoursSpecification": [ // ✅ must be an array
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "priceRange": "₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "128"
  }
});

// ============================================
// 2. Page‑Specific Schemas
// ============================================

export const getArticleSchema = ({ title, description, url, image, datePublished, dateModified, authorName, authorUrl }: any) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": image,
  "datePublished": datePublished,
  "dateModified": dateModified || datePublished,
  "author": { "@type": "Organization", "name": authorName, "url": authorUrl },
  "mainEntityOfPage": url,
  "publisher": { "@type": "Organization", "name": SITE_NAME, "logo": `${SITE_URL}/logo.png` }
});

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url,
  })),
});

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  })),
});

export const getServiceSchema = (service: { title: string; description: string; url?: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.title,
  "provider": { "@type": "LocalBusiness", "@id": `${SITE_URL}/#localbusiness` },
  "areaServed": { "@type": "City", "name": "Kochi" },
  "description": service.description,
  "url": service.url || SITE_URL
});

export const getProductSchema = (product: { name: string; description: string; price?: string; priceCurrency?: string; availability?: string; image?: string }) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image || `${SITE_URL}/og-image.jpg`,
  "brand": { "@type": "Brand", "name": SITE_NAME },
  "offers": {
    "@type": "Offer",
    "price": product.price || "0",
    "priceCurrency": product.priceCurrency || "INR",
    "availability": product.availability || "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": SITE_NAME }
  }
});

// ============================================
// 3. Combined Graph for Homepage / Global
// ============================================

export const getFullGraphSchema = (additionalNodes: any[] = []) => {
  // DO NOT include FAQPage or HowTo globally – move to specific pages
  const graph = [
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    ...additionalNodes
  ];
  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
};

// ============================================
// 4. Helper for HowTo (use on dedicated process page)
// ============================================

export const getHowToSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Certified E-Waste Recycling Works",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Inventory & Pickup",
      "text": "We serialize every asset at your location for a secure chain of custody.",
      "url": `${SITE_URL}/process#step1`
    },
    {
      "@type": "HowToStep",
      "name": "Data Destruction",
      "text": "NIST 800-88 compliant wiping or physical shredding of storage media.",
      "url": `${SITE_URL}/process#step2`
    },
    {
      "@type": "HowToStep",
      "name": "Certification",
      "text": "Issuance of Certificate of Destruction and Green Recycling Report.",
      "url": `${SITE_URL}/process#step3`
    }
  ]
});

// ============================================
// 5. Review Snippet (for testimonials page)
// ============================================

export const getReviewSchema = (reviews: { author: string; rating: number; text: string; date: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": SITE_NAME,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": reviews.length.toString()
  },
  "review": reviews.map(r => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.author },
    "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": "5" },
    "reviewBody": r.text,
    "datePublished": r.date
  }))
});

// For backward compatibility (if needed)
export const getAuthorSchema = ({ name, url, sameAs }: any) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": name,
  "url": url,
  "sameAs": sameAs,
});
