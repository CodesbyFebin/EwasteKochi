import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, CONTACT_INFO, SITE_URL } from '../../constants/content';

const keywordClusters = [
  { text: "Hard Drive Shredding Kochi", url: "/hard-drive-destruction-kochi" },
  { text: "Data Destruction Services", url: "/hard-drive-destruction-kochi" },
  { text: "NIST 800-88 Wiping", url: "/services/data-destruction" },
  { text: "DoD 5220.22-M Shredding", url: "/hard-drive-destruction-kochi" },
  { text: "SSD Destruction", url: "/hard-drive-destruction-kochi" },
  { text: "Laptop Buyback Kochi", url: "/sell-electronics-kochi" },
  { text: "Sell Old Phone Kochi", url: "/sell-electronics-kochi" },
  { text: "MacBook Resale Value", url: "/sell-electronics-kochi" },
  { text: "Corporate ITAD Kerala", url: "/services" },
  { text: "IT Asset Disposition", url: "/services" },
  { text: "EPR Compliance Kerala", url: "/services" },
  { text: "DPDP Act 2023 Compliance", url: "/dpdp-act-kochi" },
  { text: "Certificate of Destruction", url: "/services/data-destruction" },
  { text: "Server Disposal Kochi", url: "/services" },
  { text: "Datacenter Decommissioning", url: "/services" },
  { text: "E-waste Recycling Kochi", url: "/services" },
  { text: "Computer Recycling Ernakulam", url: "/services" },
  { text: "Battery Disposal Kochi", url: "/services" },
  { text: "UPS Recycling", url: "/services" },
  { text: "Printer Disposal", url: "/services" },
  { text: "Medical Equipment Recycling", url: "/services" },
  { text: "Bank ITAD Services", url: "/services" },
  { text: "Infopark E-waste Pickup", url: "/locations" },
  { text: "Kakkanad ITAD", url: "/locations" },
  { text: "Edappally Laptop Buyback", url: "/locations" },
  { text: "Vyttila E-waste Collection", url: "/locations" },
  { text: "Aluva Electronic Recycling", url: "/locations" },
  { text: "Kalamassery Industrial Waste", url: "/locations" },
  { text: "Thrippunithura Facility", url: "/services" },
  { text: "Cashify vs EWaste Kochi", url: "/cashify-vs-ewastekochi" },
  { text: "Best Buyback Price Kochi", url: "/sell-electronics-kochi" },
  { text: "Free E-waste Pickup", url: "/services" },
  { text: "Same-day Data Destruction", url: "/hard-drive-destruction-kochi" },
  { text: "On-site Hard Drive Shredding", url: "/hard-drive-destruction-kochi" },
  { text: "NABH Compliance Hospital", url: "/dpdp-act-kochi" },
  { text: "KSPCB Authorized Recycler", url: "/services" },
  { text: "ISO 14001 Certified", url: "/services" },
  { text: "ISO 27001 Data Security", url: "/services" },
  { text: "Green Certificate Kerala", url: "/services" },
  { text: "Asset Remarketing Kochi", url: "/services" },
  { text: "Data Sanitization Report", url: "/services/data-destruction" },
  { text: "GDPR Compliant Destruction", url: "/dpdp-act-kochi" },
  { text: "Zero Landfill Recycling", url: "/services" },
  { text: "Urban Mining Kerala", url: "/blog" },
  { text: "Right to Repair E-waste", url: "/blog" },
  { text: "E-waste Rules 2022 Kerala", url: "/blog" },
  { text: "Laptop Disposal Certificate", url: "/services/data-destruction" },
  { text: "Bulk IT Asset Pickup", url: "/services" },
  { text: "Startup ITAD Program", url: "/services" },
  { text: "School E-waste Drive", url: "/services" },
  { text: "Certified E-waste Recycler Kerala", url: "/services" },
  { text: "Data Wiping Certificate Kochi", url: "/services/data-destruction" },
  { text: "ITAD Company Kerala", url: "/services" },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
  };

  return (
    <>
      <footer
        id="site-footer"
        className="bg-white dark:bg-zinc-900 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 mt-20"
        aria-label="Site footer"
        itemScope
        itemType="https://schema.org/WPFooter"
      >
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="space-y-5 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 group" aria-label="Home">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform shadow-lg">
                  ♻️
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-extrabold text-lg text-zinc-900 dark:text-white tracking-tight">EWaste Kochi</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400 font-semibold">Certified ITAD · Kerala</span>
                </div>
              </Link>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Kerala's #1 certified e‑waste recycling and ITAD company. NIST/DoD hard drive shredding, data destruction, and EPR‑compliant recycling across Kochi and Ernakulam.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
                  ✅ KSPCB Authorized
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
                  🔒 EPR Registered
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
                  📜 ISO 14001
                </span>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="https://facebook.com/ewastekochi" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-green-600 transition-all hover:scale-110" aria-label="Facebook">📘</a>
                <a href="https://twitter.com/ewastekochi" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-green-600 transition-all hover:scale-110" aria-label="Twitter">🐦</a>
                <a href="https://linkedin.com/company/ewastekochi" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-green-600 transition-all hover:scale-110" aria-label="LinkedIn">🔗</a>
                <a href="https://instagram.com/ewastekochi" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-green-600 transition-all hover:scale-110" aria-label="Instagram">📷</a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Our Services
              </h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/services" className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition flex items-center gap-1.5 group"><span className="opacity-0 group-hover:opacity-100 transition">→</span> All ITAD Services</Link></li>
                <li><Link to="/sell-electronics-kochi" className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition flex items-center gap-1.5 group"><span className="opacity-0 group-hover:opacity-100">→</span> Sell Old Laptop / Phone</Link></li>
                <li><Link to="/hard-drive-destruction-kochi" className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition flex items-center gap-1.5 group"><span className="opacity-0 group-hover:opacity-100">→</span> Hard Drive Shredding</Link></li>
                <li><Link to="/server-disposal-kochi" className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition flex items-center gap-1.5 group"><span className="opacity-0 group-hover:opacity-100">→</span> Server & Datacenter Disposal</Link></li>
                <li><Link to="/epr-compliance-kerala" className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition flex items-center gap-1.5 group"><span className="opacity-0 group-hover:opacity-100">→</span> EPR Compliance Services</Link></li>
                <li><Link to="/services/data-destruction" className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition flex items-center gap-1.5 group"><span className="opacity-0 group-hover:opacity-100">→</span> Data Destruction Certificate</Link></li>
              </ul>
            </div>

            {/* Resources & Guides */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Resources
              </h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/master-guide" className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 transition">📘 E‑Waste Master Guide</Link></li>
                <li><Link to="/blog" className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 transition">📰 Industry Blog</Link></li>
                <li><Link to="/dpdp-act-kochi" className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 transition">⚖️ DPDP Act 2023 Compliance</Link></li>
                <li><Link to="/cashify-comparison" className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 transition">🔄 Cashify vs EWaste Kochi</Link></li>
                <li><Link to="/certifications" className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 transition">🏅 Our Certifications</Link></li>
                <li><Link to="/faq" className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 transition">❓ FAQ</Link></li>
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Contact
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400">📍</span>
                  <span className="text-zinc-600 dark:text-zinc-400">{BUSINESS_INFO.address}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400">📞</span>
                  <a href={`tel:+91${CONTACT_INFO.phone}`} className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 transition font-medium">{CONTACT_INFO.phone}</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400">✉️</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-zinc-600 dark:text-zinc-400 hover:text-green-600 transition">{CONTACT_INFO.email}</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400">⏰</span>
                  <span className="text-zinc-600 dark:text-zinc-400">{BUSINESS_INFO.hours}</span>
                </li>
              </ul>
              <div className="mt-5">
                <a href="https://www.google.com/maps/search/?api=1&query=Infopark+Road+Kakkanad+Kochi" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-sm text-green-600 hover:text-green-700 dark:text-green-400 transition">
                  🗺️ Get Directions on Google Maps →
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Stay Updated
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Get e‑waste tips, compliance updates & exclusive buyback offers.</p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  Subscribe ✉️
                </button>
              </form>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-3">No spam. Unsubscribe anytime.</p>
            </div>
          </div>

          {/* Keyword Clusters Section */}
          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-4 text-center">
              🔍 Popular E‑waste & ITAD Services in Kochi
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-xs">
              {keywordClusters.map((kw, idx) => (
                <Link
                  key={idx}
                  to={kw.url}
                  className="text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition-colors inline-block py-1"
                >
                  {kw.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <p>© {new Date().getFullYear()} EWaste Kochi — All rights reserved. EPR Authorized · KSPCB Approved.</p>
            <div className="flex flex-wrap gap-6">
              <Link to="/privacy-policy" className="hover:text-green-600 transition">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-green-600 transition">Terms of Service</Link>
              <Link to="/sitemap.xml" className="hover:text-green-600 transition">Sitemap</Link>
              <div className="flex gap-3">
                <span className="text-zinc-400">|</span>
                <a href="/" hrefLang="en" className="hover:text-green-600 font-medium">EN</a>
                <a href="/ml" hrefLang="ml" className="hover:text-green-600">മല</a>
                <a href="/ta" hrefLang="ta" className="hover:text-green-600">த</a>
                <a href="/hi" hrefLang="hi" className="hover:text-green-600">हि</a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Trust Bar */}
        <div className="bg-green-50 dark:bg-green-950/50 border-t border-green-200 dark:border-green-800/50 py-2 text-center text-xs text-green-800 dark:text-green-300">
          🔒 Certified Data Destruction | ♻️ Zero Landfill E‑waste Recycling | 📞 Call <a href={`tel:+91${CONTACT_INFO.phone}`} className="font-bold underline">{CONTACT_INFO.phone}</a> for Free Quote
        </div>
      </footer>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EWaste Kochi",
          "url": SITE_URL,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": `+91${CONTACT_INFO.phone}`,
            "contactType": "customer service",
            "email": CONTACT_INFO.email,
            "availableLanguage": ["English", "Malayalam", "Tamil", "Hindi"]
          },
          "sameAs": [
            "https://facebook.com/ewastekochi",
            "https://twitter.com/ewastekochi",
            "https://linkedin.com/company/ewastekochi",
            "https://instagram.com/ewastekochi"
          ]
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "EWaste Kochi",
          "image": `${SITE_URL}/og-image.jpg`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS_INFO.address,
            "addressLocality": BUSINESS_INFO.city,
            "addressRegion": BUSINESS_INFO.state,
            "postalCode": BUSINESS_INFO.pincode,
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": BUSINESS_INFO.coordinates.lat,
            "longitude": BUSINESS_INFO.coordinates.lng
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          ],
          "telephone": `+91${CONTACT_INFO.phone}`,
          "priceRange": "₹₹"
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "EWaste Kochi",
          "url": SITE_URL,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${SITE_URL}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })
      }} />
    </>
  );
};

export default Footer;