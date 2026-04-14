import { Helmet } from "react-helmet-async";
import Schema from "@/components/seo/Schema";
import { getFullGraphSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Laptop, Tablet, ShieldCheck, Banknote, Clock } from "lucide-react";
import { CONTACT_PHONE } from "@/constants/content";

export default function SellElectronics() {
  return (
    <main className="pt-24 pb-20">
      <Helmet>
        <title>Sell Old Electronics Kochi | Best Buyback Price for Laptops & Phones</title>
        <meta name="description" content="Sell your old laptops, smartphones, and tablets in Kochi for the best price. Guaranteed data wiping, instant cash, and free pickup in Ernakulam. Better than Cashify." />
      </Helmet>
      <Schema data={getFullGraphSchema([{
        "@type": "Service",
        "name": "Sell Old Electronics Kochi",
        "description": "Buyback service for used laptops, phones, and tablets with certified data destruction."
      }])} />

      {/* Hero */}
      <section className="bg-green-600 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-7xl font-extrabold mb-8 leading-tight">
              Sell Your Old Electronics for <span className="text-zinc-900">Instant Cash</span> in Kochi
            </h1>
            <p className="text-xl text-green-50 mb-10 leading-relaxed">
              Kochi's most trusted buyback partner. We offer higher payouts than Cashify with guaranteed NIST-certified data wiping for every device.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-7 text-lg rounded-xl font-bold">
                Get Instant Quote
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-7 text-lg rounded-xl font-bold">
                WhatsApp +91-9876543210
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest">Why Sell to Us?</h2>
            <h3 className="text-4xl font-bold tracking-tight">Better Prices, Better Security</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-zinc-50 rounded-[40px] space-y-6">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <Banknote className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold">Highest Buyback Value</h4>
              <p className="text-zinc-500 leading-relaxed">
                We beat Cashify and local shop prices by up to 15% for premium laptops and iPhones in Kochi.
              </p>
            </div>
            <div className="p-10 bg-zinc-50 rounded-[40px] space-y-6">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold">Guaranteed Data Wipe</h4>
              <p className="text-zinc-500 leading-relaxed">
                Every device undergoes a military-grade data purge before refurbishment. Your privacy is our priority.
              </p>
            </div>
            <div className="p-10 bg-zinc-50 rounded-[40px] space-y-6">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold">Instant Payment</h4>
              <p className="text-zinc-500 leading-relaxed">
                No waiting for checks. Get paid instantly via UPI, Bank Transfer, or Cash the moment we pick up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Buy */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Buy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Laptop />, title: "Laptops", desc: "MacBooks, Dell, HP, Lenovo & Gaming Laptops" },
              { icon: <Smartphone />, title: "Smartphones", desc: "iPhones, Samsung, OnePlus & Premium Androids" },
              { icon: <Tablet />, title: "Tablets", desc: "iPads, Samsung Tabs & Surface Pro" },
              { icon: <ShieldCheck />, title: "IT Assets", desc: "Bulk corporate laptops, servers & networking gear" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border text-center space-y-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto">
                  {item.icon}
                </div>
                <h5 className="font-bold text-lg">{item.title}</h5>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Sell?</h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
            Don't let your old gadgets lose value. Get a quote today and experience the best buyback service in Kochi.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-10 py-7 text-lg rounded-xl font-bold">
            Get My Quote Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </main>
  );
}
