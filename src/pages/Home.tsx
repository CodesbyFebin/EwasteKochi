import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import CaseStudies from "@/components/sections/CaseStudies";
import Schema from "@/components/seo/Schema";
import { getFullGraphSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS, LOCATIONS, FAQS, SERVED_AREAS, CONTACT_PHONE } from "@/constants/content";
import { ArrowRight, MapPin, Calendar, Phone, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>E-Waste Collection Kochi | Certified ITAD & Data Destruction Kerala</title>
        <meta name="description" content="KSPCB-Authorized e-waste collection in Kochi. NIST-certified hard drive shredding, laptop buyback, and ITAD services. Avoid DPDP Act penalties up to ₹250Cr." />
      </Helmet>
      <Schema data={getFullGraphSchema()} />
      <Hero />
      
      {/* Internal Linking Quick Bar */}
      <div className="bg-zinc-100 py-4 border-b overflow-x-auto">
        <div className="container mx-auto px-4 flex gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-wider text-zinc-500">
          <a href="#itad" className="hover:text-green-600 transition-colors">IT Asset Disposal Kochi</a>
          <a href="#data-destruction" className="hover:text-green-600 transition-colors">Data Destruction Kochi</a>
          <a href="#shredding" className="hover:text-green-600 transition-colors">Hard Drive Shredding Kochi</a>
          <a href="#buyback" className="hover:text-green-600 transition-colors">Sell Laptop Kochi</a>
          <a href="#compliance" className="hover:text-green-600 transition-colors">DPDP Compliance</a>
        </div>
      </div>

      {/* Urgency Banner */}
      <div className="bg-amber-50 border-y border-amber-200 py-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3 text-sm font-bold text-amber-800">
          <ShieldAlert className="w-5 h-5 text-amber-600" />
          <span>⚠️ Avoid DPDP Act 2023 penalties up to ₹250 Crore. Get certified data destruction today.</span>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">127+</div>
              <div className="text-sm text-zinc-400 uppercase tracking-widest font-semibold">Corporate Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">50K+</div>
              <div className="text-sm text-zinc-400 uppercase tracking-widest font-semibold">Devices Destroyed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">₹0</div>
              <div className="text-sm text-zinc-400 uppercase tracking-widest font-semibold">Data Breaches</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
              <div className="text-sm text-zinc-400 uppercase tracking-widest font-semibold">CoD Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Process />
      <Testimonials />
      <CaseStudies />

      {/* Locations Section */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest">Service Areas</h2>
              <h3 className="text-4xl font-bold tracking-tight">Serving All of Kochi & Greater Ernakulam</h3>
              <p className="text-muted-foreground">
                Free door-to-door pickup across 52+ locations in Ernakulam district. Same-day service available in all zones.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SERVED_AREAS.map((area) => (
                  <Link 
                    key={area.name} 
                    to={area.link}
                    className="flex items-center gap-2 text-sm font-medium hover:text-green-600 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-green-600" />
                    {area.name}
                  </Link>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
                  <Phone className="w-4 h-4" /> Call Now
                </Button>
                <Button variant="outline" className="gap-2">
                  WhatsApp Pickup
                </Button>
              </div>
            </div>
            <div className="flex-1 w-full aspect-video bg-zinc-200 rounded-3xl overflow-hidden relative">
              <img 
                src="/assets/img/kochi-service-map.webp" 
                alt="Certified E-Waste Collection Coverage Map for Kochi and Ernakulam" 
                className="w-full h-full object-cover opacity-50 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-lg">Main Facility</div>
                  <div className="text-sm text-muted-foreground">Thrippunithura, Kochi 682301</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest">Resources & Blog</h2>
              <h3 className="text-4xl font-bold tracking-tight">E-Waste Knowledge Hub</h3>
            </div>
            <Button variant="outline" className="hidden md:flex gap-2">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/10] bg-zinc-100 rounded-2xl mb-6 overflow-hidden">
                  <img 
                    src={`/assets/img/blog-${post.id}.webp`} 
                    alt={`Cover image for blog post: ${post.title}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-green-600 uppercase mb-3">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors leading-tight">
                  {post.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`} className="text-sm font-bold flex items-center gap-2">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-green-600 rounded-[40px] p-12 lg:p-20 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">Ready to Secure Your Data & Environment?</h2>
              <p className="text-lg text-green-50 opacity-90">
                Free bulk pickup across Kochi & Ernakulam. Certificate of Destruction every job. DPDP Act 2023 compliant.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-7 text-lg rounded-xl font-bold">
                  Get Free Quote Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-7 text-lg rounded-xl font-bold">
                  Call +91-9876543210
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-8 pt-8 opacity-70 text-xs font-bold uppercase tracking-widest">
                <span>● Govt Approved</span>
                <span>● NIST Certified</span>
                <span>● DPDP Compliant</span>
                <span>● 4.9★ Google Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
