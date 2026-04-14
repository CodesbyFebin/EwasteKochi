import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Shield, Recycle, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME, CONTACT_PHONE } from "@/constants/content";
import { motion } from "motion/react";

export default function LocationDetail() {
  const { slug } = useParams();
  const locationName = slug ? slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ") : "";

  return (
    <main>
      <Helmet>
        <title>E-Waste Recycling in {locationName}, Kochi | Certified ITAD {locationName}</title>
        <meta name="description" content={`Certified e-waste collection and ITAD services in ${locationName}, Kochi. Secure data destruction, laptop buyback, and electronics recycling. Free pickup for businesses in ${locationName}.`} />
        <meta name="keywords" content={`e-waste recycling ${locationName}, ITAD ${locationName}, data destruction ${locationName}, laptop buyback ${locationName}`} />
        <link rel="canonical" href={`https://ewastekochi.com/locations/${slug}`} />
        <meta property="og:title" content={`E-Waste Recycling in ${locationName} | Certified ITAD ${locationName}`} />
        <meta property="og:description" content={`Certified e-waste collection and ITAD services in ${locationName}, Kochi. Secure data destruction and laptop buyback.`} />
        <meta property="og:url" content={`https://ewastekochi.com/locations/${slug}`} />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`E-Waste Recycling in ${locationName} | Certified ITAD ${locationName}`} />
        <meta name="twitter:description" content={`Certified e-waste collection and ITAD services in ${locationName}, Kochi.`} />
        <meta name="twitter:image" content="https://ewastekochi.com/og-image.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={`https://picsum.photos/seed/${slug ?? 'kochi'}/1920/1080`} 
            alt={`${locationName} e-waste recycling and ITAD services Kochi`} 
            className="w-full h-full object-cover grayscale"
            loading="lazy"
            width="1920"
            height="1080"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-600/20 border border-green-600/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <MapPin className="w-3 h-3" /> Serving {locationName}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            >
              Certified E-Waste Recycling & ITAD in <span className="text-green-500">{locationName}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 mb-8 leading-relaxed"
            >
              Professional IT asset disposition and secure data destruction for businesses and individuals in {locationName}, Kochi. KSPCB authorized and DPDP Act 2023 compliant.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-xl text-lg font-bold">
                Schedule Pickup in {locationName}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-xl text-lg font-bold" asChild>
                <a href={`tel:${CONTACT_PHONE}`}>Call Now</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Localized Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Why Choose {SITE_NAME} for {locationName}?</h2>
              <p className="text-zinc-600 leading-relaxed">
                As Kochi's leading e-waste recycler, we provide specialized services tailored for the {locationName} community. Whether you're a tech firm in an IT park or a resident looking to dispose of an old laptop, we offer:
              </p>
              <ul className="space-y-4">
                {[
                  `Free door-to-door pickup across ${locationName}`,
                  "NIST-certified data destruction with CoD",
                  "Highest buyback rates for old electronics",
                  "Fully compliant with E-Waste Rules 2022",
                  "Same-day assessment and collection"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-zinc-800">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" /> DPDP Act Compliance
                </h4>
                <p className="text-sm text-zinc-500">
                  We help {locationName} businesses avoid penalties up to ₹250Cr by providing verifiable data destruction reports.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-zinc-100 rounded-3xl flex flex-col items-center justify-center p-6 text-center">
                  <Recycle className="w-10 h-10 text-green-600 mb-4" />
                  <div className="font-bold text-sm uppercase tracking-widest">Eco-Friendly</div>
                </div>
                <div className="aspect-[3/4] bg-zinc-900 rounded-3xl overflow-hidden">
                  <img src="https://picsum.photos/seed/recycle/400/600" alt="Recycling" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] bg-green-600 rounded-3xl overflow-hidden">
                   <img src="https://picsum.photos/seed/tech/400/600" alt="Tech" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square bg-zinc-100 rounded-3xl flex flex-col items-center justify-center p-6 text-center">
                  <Shield className="w-10 h-10 text-green-600 mb-4" />
                  <div className="font-bold text-sm uppercase tracking-widest">Secure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to recycle in {locationName}?</h2>
          <p className="text-zinc-500 mb-10">Join 100+ businesses in {locationName} that trust us for secure IT asset disposal.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-10 py-7 rounded-xl text-lg font-bold">
              Book Free Pickup
            </Button>
            <Link to="/services">
              <Button variant="outline" className="px-10 py-7 rounded-xl text-lg font-bold">
                Explore Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
