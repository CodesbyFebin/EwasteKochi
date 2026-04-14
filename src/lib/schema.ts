import { SITE_NAME, SITE_URL, ADDRESS, CONTACT_PHONE, CONTACT_EMAIL, FAQS } from "@/constants/content";

export const getFullGraphSchema = (additionalNodes: any[] = []) => {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      "url": `${SITE_URL}/logo.png`,
      "contentUrl": `${SITE_URL}/logo.png`,
      "caption": SITE_NAME,
      "width": 512,
      "height": 512
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT_PHONE,
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Malayalam"]
    },
    "sameAs": [
      "https://www.facebook.com/ewastekochi",
      "https://twitter.com/ewastekochi",
      "https://www.linkedin.com/company/ewaste-kochi"
    ]
  };

  const localBusiness = {
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    "mainEntity": FAQS.slice(0, 10).map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const howTo = {
    "@type": "HowTo",
    "@id": `${SITE_URL}/#howto`,
    "name": "How Certified E-Waste Recycling Works",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Inventory & Pickup",
        "text": "We serialize every asset at your location for a secure chain of custody."
      },
      {
        "@type": "HowToStep",
        "name": "Data Destruction",
        "text": "NIST 800-88 compliant wiping or physical shredding of storage media."
      },
      {
        "@type": "HowToStep",
        "name": "Certification",
        "text": "Issuance of Certificate of Destruction and Green Recycling Report."
      }
    ]
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      localBusiness,
      faqPage,
      howTo,
      ...additionalNodes
    ]
  };
};

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE_NAME,
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": CONTACT_PHONE,
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Malayalam"]
  },
  "sameAs": [
    "https://www.facebook.com/ewastekochi",
    "https://twitter.com/ewastekochi",
    "https://www.linkedin.com/company/ewaste-kochi"
  ]
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SITE_NAME,
  "image": `${SITE_URL}/images/facility.jpg`,
  "@id": SITE_URL,
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
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
});

export const getServiceSchema = (service: any) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.title,
  "provider": {
    "@type": "LocalBusiness",
    "name": SITE_NAME
  },
  "areaServed": {
    "@type": "City",
    "name": "Kochi"
  },
  "description": service.description
});

export const getArticleSchema = (post: any) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": post.title,
  "image": [`${SITE_URL}/images/blog/${post.id}.jpg`],
  "datePublished": post.date,
  "author": {
    "@type": "Organization",
    "name": SITE_NAME
  }
});

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
