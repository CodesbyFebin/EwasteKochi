import { SERVICES } from "@/constants/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Database, Settings, Laptop, Smartphone, Factory, ShieldCheck, Truck, Recycle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEOContentHub from "@/components/sections/SEOContentHub";

const iconMap: Record<string, any> = {
  Building2,
  Database,
  Settings,
  Laptop,
  Smartphone,
  Factory,
};

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <Helmet>
        <title>ITAD & E-Waste Services Kochi | Certified Recycling & Data Destruction</title>
        <meta name="description" content="Comprehensive ITAD, data destruction, HDD shredding, laptop buyback, and corporate e-waste services in Kochi. KSPCB authorized, DPDP Act 2023 compliant." />
        <meta name="keywords" content="ITAD services kochi, data destruction kochi, hard drive shredding, laptop buyback kochi, corporate e-waste" />
        <link rel="canonical" href="https://ewastekochi.com/services" />
        <meta property="og:title" content="ITAD & E-Waste Services Kochi | Certified Recycling & Data Destruction" />
        <meta property="og:description" content="Comprehensive ITAD, data destruction, HDD shredding, laptop buyback, and corporate e-waste services in Kochi. KSPCB authorized, DPDP Act 2023 compliant." />
        <meta property="og:url" content="https://ewastekochi.com/services" />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ITAD & E-Waste Services Kochi | Certified Recycling & Data Destruction" />
        <meta name="twitter:description" content="ITAD, data destruction, HDD shredding, laptop buyback, and corporate e-waste services in Kochi." />
        <meta name="twitter:image" content="https://ewastekochi.com/og-image.jpg" />
      </Helmet>

      {/* Hero */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Professional, certified, and environmentally responsible solutions for all your electronic waste and IT asset disposition needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 space-y-6">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 font-medium">
                          <ShieldCheck className="w-5 h-5 text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-green-600 hover:bg-green-700 text-white gap-2 px-8 py-6 text-lg rounded-xl">
                      Get a Quote for {service.title} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex-1 w-full aspect-square lg:aspect-video bg-zinc-100 rounded-[40px] overflow-hidden">
                    <img 
                      src={`/assets/img/service-${service.id}.webp`} 
                      alt={`${service.title} - Professional e-waste management in Kochi`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Certified? */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[40px] p-12 lg:p-20 shadow-sm border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Certified Recycling?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Most e-waste in Kochi ends up in the informal sector, where it's processed using hazardous methods that harm the environment and leave your data vulnerable.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Legal Compliance</h4>
                      <p className="text-sm text-muted-foreground">Fully compliant with E-Waste Rules 2022 and DPDP Act 2023.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                      <Recycle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Environmental Responsibility</h4>
                      <p className="text-sm text-muted-foreground">Zero-landfill policy with maximum material recovery.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                      <Truck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Secure Logistics</h4>
                      <p className="text-sm text-muted-foreground">Tamper-proof transport with full chain-of-custody tracking.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/certified/600/800" 
                  alt="Certified Recycling" 
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-8 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold mb-1">100%</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80">Data Security Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SEOContentHub pageTitle="Certified E-Waste Services" category="ITAD & Recycling" />
    </main>
  );
}
