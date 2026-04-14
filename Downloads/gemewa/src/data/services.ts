export interface Service {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  isPillar: boolean;
  tagline: string;
  description: string;
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
  schemaType: string;
  price: string;
  priceCurrency: string;
  badges: string[];
  relatedServices: string[];
  keywords: string[];
  faqs: { q: string; a: string }[];
  icon?: string;
}

export const services: Service[] = [
  {
    slug: 'itad',
    name: 'IT Asset Disposition',
    shortName: 'ITAD',
    category: 'corporate',
    isPillar: true,
    tagline: 'Secure · Auditable · Compliant Corporate Hardware Retirement',
    description: 'End-to-end ITAD for Kochi enterprises. Asset tagging, certified data destruction, remarketing, and full chain-of-custody documentation.',
    longDescription: 'When your company decommissions hardware, the risk is not only environmental — it is reputational. Improper IT asset disposition has led to some of India\'s most costly corporate data breaches.',
    metaTitle: 'IT Asset Disposition (ITAD) in Kochi | Certified & Auditable',
    metaDescription: 'Professional ITAD services in Kochi. NIST 800-88 data destruction, chain-of-custody, Certificate of Destruction for RBI and ISO audits.',
    schemaType: 'Service',
    price: 'Custom Quote',
    priceCurrency: 'INR',
    badges: ['NIST 800-88 Certified', 'Chain-of-Custody', 'Audit-Ready Docs'],
    relatedServices: ['data-destruction', 'hard-drive-shredding', 'e-waste-recycling'],
    keywords: ['itad kochi', 'it asset disposition kerala'],
    icon: '🏢',
    faqs: [
      { q: 'What is ITAD?', a: 'IT Asset Disposition is the process of securely retiring and recycling end-of-life IT hardware.' },
      { q: 'Do you provide certificates?', a: 'Yes, we provide Certificate of Destruction for every job.' }
    ]
  },
  {
    slug: 'data-destruction',
    name: 'Data Destruction',
    shortName: 'Data Destruction',
    category: 'security',
    isPillar: true,
    tagline: 'NIST 800-88 Certified · Data Wiping & Physical Shredding',
    description: 'NIST 800-88 & DoD 5220.22-M certified data wiping and physical HDD/SSD shredding. Certificate of Destruction issued for every device.',
    longDescription: 'Data security is critical when disposing of IT assets. Our certified data destruction ensures your sensitive information is irrecoverably destroyed.',
    metaTitle: 'Data Destruction in Kochi | NIST 800-88 Certified',
    metaDescription: 'NIST-certified data destruction in Kochi. Certificate of Destruction provided. Secure on-site shredding available.',
    schemaType: 'Service',
    price: 'From ₹200/unit',
    priceCurrency: 'INR',
    badges: ['NIST 800-88', 'DoD 5220.22-M', 'Certificate of Destruction'],
    relatedServices: ['hard-drive-shredding', 'itad', 'data-sanitization'],
    keywords: ['data destruction kochi', 'data wiping kerala', 'secure data destruction'],
    icon: '🔒',
    faqs: [
      { q: 'What is data destruction?', a: 'The process of making data irrecoverable from storage devices.' },
      { q: 'Do you provide certificates?', a: 'Yes, every job gets a Certificate of Destruction.' }
    ]
  },
  {
    slug: 'hard-drive-shredding',
    name: 'Hard Drive Shredding',
    shortName: 'HDD Shredding',
    category: 'security',
    isPillar: true,
    tagline: 'Physical Industrial Shredding · 100% Unrecoverable',
    description: 'Physical industrial shredding of HDDs, SSDs, NVMe drives and all storage media. Data 100% unrecoverable. Ideal for banks and hospitals.',
    longDescription: 'For the highest security requirements, physical shredding renders all storage media completely unusable.',
    metaTitle: 'Hard Drive Shredding in Kochi | Industrial Shredding',
    metaDescription: 'Physical hard drive shredding in Kochi. 100% data unrecoverable. Certificate provided.',
    schemaType: 'Service',
    price: 'From ₹250/drive',
    priceCurrency: 'INR',
    badges: ['100% Unrecoverable', 'On-Site Available', 'NABH Compliant'],
    relatedServices: ['data-destruction', 'data-sanitization'],
    keywords: ['hard drive shredding kochi', 'hdd shredding kerala'],
    icon: '⚙️',
    faqs: []
  },
  {
    slug: 'e-waste-recycling',
    name: 'E-Waste Recycling',
    shortName: 'E-Waste Recycling',
    category: 'core',
    isPillar: true,
    tagline: 'KSPCB Authorised · Zero Landfill · Free Bulk Pickup',
    description: 'Certified e-waste recycling for homes and businesses in Kochi. We collect, dismantle, and recycle all electronic waste responsibly.',
    longDescription: 'We ensure all e-waste is recycled sustainably with zero landfill policy.',
    metaTitle: 'E-Waste Recycling in Kochi | KSPCB Authorised',
    metaDescription: 'Certified e-waste recycling in Kochi. Free pickup, zero landfill.',
    schemaType: 'RecyclingCenter',
    price: 'Free',
    priceCurrency: 'INR',
    badges: ['KSPCB Authorised', 'Zero Landfill', 'EPR Compliant'],
    relatedServices: ['itad', 'battery-recycling'],
    keywords: ['e-waste recycling kochi', 'electronic waste disposal'],
    icon: '♻️',
    faqs: []
  },
  {
    slug: 'laptop-buyback',
    name: 'Sell Old Laptops',
    shortName: 'Laptop Buyback',
    category: 'buyback',
    isPillar: false,
    tagline: 'Best Price Guarantee · Same-Day Payment',
    description: 'Get the best buyback price for old laptops, MacBooks, gaming laptops in Kochi. Instant valuation, same-day payment.',
    longDescription: 'We offer competitive prices for used laptops with instant payment.',
    metaTitle: 'Sell Old Laptops Kochi | Best Buyback Price',
    metaDescription: 'Sell old laptops in Kochi. Best prices guaranteed.',
    schemaType: 'Product',
    price: 'Highest Payout',
    priceCurrency: 'INR',
    badges: ['Best Price Guarantee', 'Same-Day Payment', 'Data Wiped'],
    relatedServices: ['phone-buyback', 'itad'],
    keywords: ['sell laptop kochi', 'laptop buyback kerala'],
    icon: '💻',
    faqs: []
  },
  {
    slug: 'phone-buyback',
    name: 'Sell Old Phones',
    shortName: 'Phone Buyback',
    category: 'buyback',
    isPillar: false,
    tagline: 'Best Resale Value · Data Wiped Before resale',
    description: 'Best resale value for iPhones, Samsung, OnePlus, Xiaomi and all smartphones in Kochi. Data wiped before resale — guaranteed.',
    longDescription: 'We buy all smartphone brands at competitive rates.',
    metaTitle: 'Sell Old Phones Kochi | Best Price',
    metaDescription: 'Sell old phones in Kochi. Best resale value.',
    schemaType: 'Product',
    price: 'Best Resale Value',
    priceCurrency: 'INR',
    badges: ['All Brands', 'Data Wiped', 'Instant Payment'],
    relatedServices: ['laptop-buyback'],
    keywords: ['sell phone kochi', 'phone buyback kerala'],
    icon: '📱',
    faqs: []
  },
  {
    slug: 'corporate-ewaste',
    name: 'Corporate E-Waste',
    shortName: 'Corporate E-Waste',
    category: 'corporate',
    isPillar: false,
    tagline: 'Free Assessment · EPR Compliant',
    description: 'End-to-end corporate e-waste management for businesses across Kochi. Office relocation clearance and IT refresh programs.',
    longDescription: 'Comprehensive solutions for businesses of all sizes.',
    metaTitle: 'Corporate E-Waste Kochi | Business Solutions',
    metaDescription: 'Corporate e-waste management in Kochi.',
    schemaType: 'Service',
    price: 'Free Assessment',
    priceCurrency: 'INR',
    badges: ['Free Assessment', 'EPR Compliant'],
    relatedServices: ['itad', 'e-waste-recycling'],
    keywords: ['corporate e-waste kochi', 'business e-waste'],
    icon: '🏢',
    faqs: []
  }
];

export const getService = (slug: string) => services.find(s => s.slug === slug);