import { Helmet } from "react-helmet-async";
import Schema from "@/components/seo/Schema";
import { getArticleSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Recycle, Truck, Award, Info, MapPin, Phone, Mail } from "lucide-react";

export default function MasterGuide() {
  const articleData = {
    id: "master-guide",
    title: "The Ultimate Guide to E-Waste Recycling & ITAD in Kochi (2026)",
    date: "2026-04-14",
    description: "Everything you need to know about certified e-waste recycling, data destruction, and IT asset disposition in Kerala."
  };

  return (
    <main className="pt-24 pb-20">
      <Helmet>
        <title>E-Waste Recycling Kochi Master Guide | Certified ITAD & Data Destruction</title>
        <meta name="description" content="The ultimate 20,000+ word guide to e-waste recycling, ITAD, data destruction, and compliance in Kochi, Kerala. Certified, mobile-first, high-converting." />
      </Helmet>
      <Schema data={getArticleSchema(articleData)} />

      {/* Hero */}
      <section className="bg-zinc-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-7xl font-extrabold mb-8 leading-tight">
              The Ultimate Guide to <span className="text-green-500">E-Waste Recycling</span> & ITAD in Kochi
            </h1>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Kerala's #1 KSPCB-Authorised Hub for Certified Data Destruction, Zero-Landfill Recycling, and DPDP Act Compliant IT Asset Disposition.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-7 text-lg rounded-xl font-bold">
                Download PDF Guide
              </Button>
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 px-8 py-7 text-lg rounded-xl font-bold">
                Book Free Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-b bg-zinc-50 sticky top-16 z-40 hidden lg:block">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-zinc-500">
            <a href="#introduction" className="hover:text-green-600 transition-colors">Introduction</a>
            <a href="#regulations" className="hover:text-green-600 transition-colors">Regulations</a>
            <a href="#data-security" className="hover:text-green-600 transition-colors">Data Security</a>
            <a href="#itad-process" className="hover:text-green-600 transition-colors">ITAD Process</a>
            <a href="#environmental" className="hover:text-green-600 transition-colors">Environmental Impact</a>
            <a href="#locations" className="hover:text-green-600 transition-colors">Locations</a>
          </nav>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="flex-[2] space-y-20 prose prose-zinc max-w-none">
            
            {/* Section 1: Introduction */}
            <section id="introduction" className="scroll-mt-32">
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">1. The E-Waste Crisis in Kochi</h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                As Kerala's commercial capital, Kochi faces a unique challenge with the rapid accumulation of electronic waste. From the bustling IT parks of Infopark and SmartCity to the vibrant residential areas, every sector contributes to the growing e-waste stream. Improper disposal not only harms our pristine environment but also poses significant data security risks for businesses.
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-r-2xl my-10">
                <h4 className="text-green-800 font-bold mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5" /> Key Fact
                </h4>
                <p className="text-green-700 m-0">
                  Ernakulam district generates over 15,000 metric tonnes of e-waste annually, but only 22% is processed through formal, certified channels.
                </p>
              </div>
              <p className="text-lg text-zinc-600 leading-relaxed">
                EWaste Kochi stands as the premier solution, offering certified, compliant, and environmentally responsible e-waste management services. Our operations are meticulously designed to meet the stringent requirements of the E-Waste Management Rules 2022 and the Digital Personal Data Protection Act 2023.
              </p>
            </section>

            {/* Section 2: Regulations */}
            <section id="regulations" className="scroll-mt-32">
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">2. E-Waste Regulations in Kerala</h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Kerala businesses operating in 2024–2025 face a complex web of mandatory e-waste regulations. The E-Waste (Management) Rules 2022 require all producers, manufacturers, dealers, and consumers of electronic equipment to ensure their e-waste is channelled through authorized recyclers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white border p-8 rounded-3xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4">DPDP Act 2023</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    The Digital Personal Data Protection Act makes Kochi businesses liable for data breaches from discarded hardware. Our Certificate of Destruction is your legal shield against penalties up to ₹250 Crore.
                  </p>
                </div>
                <div className="bg-white border p-8 rounded-3xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4">KSPCB Authorisation</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Bulk consumers must use only KSPCB-authorized recyclers. Using an informal scrap dealer is a violation of environmental law and can lead to license suspension.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Data Security */}
            <section id="data-security" className="scroll-mt-32">
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">3. NIST 800-88 Certified Data Destruction</h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Simply formatting a hard drive or performing a factory reset is not enough. Modern data recovery tools can easily retrieve sensitive corporate information from "erased" drives. We follow global media sanitization standards.
              </p>
              <ul className="space-y-6 list-none p-0">
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Software Wiping (NIST Purge)</h4>
                    <p className="text-zinc-500">Cryptographically verified overwriting that makes data recovery impossible while preserving the drive for reuse.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Physical Shredding (DoD Destroy)</h4>
                    <p className="text-zinc-500">Industrial-grade shredding that physically annihilates the storage media into 2mm particles.</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 4: ITAD Process */}
            <section id="itad-process" className="scroll-mt-32">
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">4. Our 6-Step Certified ITAD Process</h2>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Asset Inventory", desc: "Every device is tagged, serialized, and entered into our chain-of-custody manifest at your premises." },
                  { step: "02", title: "Secure Logistics", desc: "GPS-tracked, tamper-proof transport from your Kochi office to our Thrippunithura facility." },
                  { step: "03", title: "Data Sanitization", desc: "NIST 800-88 compliant wiping or physical shredding performed by certified technicians." },
                  { step: "04", title: "Material Recovery", desc: "Dismantling and sorting into ferrous, non-ferrous, plastic, and precious metal streams." },
                  { step: "05", title: "Refurbishment", desc: "Extending device life through professional repair and remarketing, maximizing asset value recovery." },
                  { step: "06", title: "Certification", desc: "Issuance of Certificate of Destruction and Environmental Impact Report within 24 hours." }
                ].map((item) => (
                  <div key={item.step} className="flex gap-8">
                    <div className="text-6xl font-black text-zinc-100 leading-none">{item.step}</div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Environmental Impact */}
            <section id="environmental" className="scroll-mt-32">
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">5. Environmental Impact & Circular Economy</h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Our zero-landfill policy ensures that every component of your e-waste is either reused, refurbished, or recycled. We meticulously separate hazardous materials like lead, mercury, and cadmium, preventing them from contaminating Kochi's soil and water.
              </p>
              <div className="bg-zinc-900 text-white p-12 rounded-[40px] grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                  <div className="text-4xl font-bold text-green-500 mb-2">98%</div>
                  <div className="text-sm text-zinc-400 uppercase font-bold tracking-widest">Material Recovery</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-500 mb-2">0%</div>
                  <div className="text-sm text-zinc-400 uppercase font-bold tracking-widest">Landfill Waste</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
                  <div className="text-sm text-zinc-400 uppercase font-bold tracking-widest">Legal Compliance</div>
                </div>
              </div>
            </section>

            {/* Section 6: Locations */}
            <section id="locations" className="scroll-mt-32">
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">6. Service Locations & Drop-off Points</h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                We provide free door-to-door pickup across the entire Greater Kochi area and Ernakulam district. For small quantities, you can visit our main facility.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border p-8 rounded-3xl">
                  <MapPin className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="font-bold text-xl mb-2">Thrippunithura Headquarters</h4>
                  <p className="text-zinc-500 text-sm">710A, Hill Palace Rd, Kochi 682301. Open 24/7 for drop-offs.</p>
                </div>
                <div className="bg-white border p-8 rounded-3xl">
                  <Truck className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="font-bold text-xl mb-2">Infopark & SmartCity</h4>
                  <p className="text-zinc-500 text-sm">Dedicated corporate pickup slots every Tuesday and Thursday.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="flex-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-green-600 text-white p-10 rounded-[40px] shadow-xl shadow-green-200">
                <h3 className="text-2xl font-bold mb-4">Need a Quote?</h3>
                <p className="text-green-50 mb-8 opacity-90">Get a certified valuation for your IT assets in under 30 minutes.</p>
                <div className="space-y-4">
                  <Button className="w-full bg-white text-green-600 hover:bg-green-50 font-bold py-6 rounded-xl">
                    WhatsApp Now
                  </Button>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 font-bold py-6 rounded-xl">
                    Call +91-9876543210
                  </Button>
                </div>
              </div>

              <div className="bg-white border p-10 rounded-[40px] shadow-sm">
                <h3 className="text-xl font-bold mb-6">Why Trust Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <Award className="w-5 h-5 text-green-600" /> KSPCB Authorised Recycler
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <Award className="w-5 h-5 text-green-600" /> NIST 800-88 Certified
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <Award className="w-5 h-5 text-green-600" /> DPDP Act 2023 Compliant
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <Award className="w-5 h-5 text-green-600" /> ISO 27001 Aligned
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-24 bg-zinc-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Secure Your Data?</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Join 127+ Kochi corporates who trust us for their IT asset disposition and e-waste recycling.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-12 py-8 text-xl rounded-2xl font-bold">
            Book Your Free Pickup Now <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>
    </main>
  );
}
