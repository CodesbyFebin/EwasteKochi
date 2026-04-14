import { Helmet } from "react-helmet-async";
import Schema from "@/components/seo/Schema";
import { getFullGraphSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Settings, Database, Trash2, Award, FileCheck } from "lucide-react";

export default function HardDriveDestruction() {
  return (
    <main className="pt-24 pb-20">
      <Helmet>
        <title>Hard Drive Shredding Kochi | Certified Data Destruction Kerala</title>
        <meta name="description" content="Professional hard drive shredding and data destruction services in Kochi. NIST 800-88 compliant, on-site shredding available. Protect your business from data breaches." />
      </Helmet>
      <Schema data={getFullGraphSchema([{
        "@type": "Service",
        "name": "Hard Drive Shredding Kochi",
        "description": "Physical destruction of hard drives and storage media using industrial shredders."
      }])} />

      {/* Hero */}
      <section className="bg-zinc-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/assets/img/industrial-shredder.webp" 
            alt="Industrial-grade hard drive shredder physically destroying data-bearing media in Kochi" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-500 px-4 py-2 rounded-full text-sm font-bold border border-green-600/30">
              <ShieldCheck className="w-4 h-4" /> NIST 800-88 & DoD Compliant
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none">
              Certified <span className="text-green-600">Hard Drive</span> Shredding in Kochi
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Don't just erase. Destroy. Our industrial-grade shredders reduce storage media to 2mm particles, making data recovery physically impossible.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-10 py-7 text-lg rounded-xl font-bold">
                Book On-Site Shredding
              </Button>
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 px-10 py-7 text-lg rounded-xl font-bold">
                Get Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Physical Shredding</h3>
              <p className="text-zinc-500 leading-relaxed">
                The gold standard for data security. Drives are fed into a high-torque shredder that tears through platters, controllers, and casings.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">NIST Purge Wiping</h3>
              <p className="text-zinc-500 leading-relaxed">
                For drives intended for reuse. We use software that overwrites every sector with random patterns, verified by a final audit pass.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900">
                <Trash2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Degaussing</h3>
              <p className="text-zinc-500 leading-relaxed">
                Using powerful magnetic fields to neutralize the magnetic domains of HDDs and tapes, rendering them completely blank and unbootable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[40px] p-12 lg:p-20 shadow-sm border flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-bold">Full Audit Trail & Certification</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Every destruction job is documented. You receive a comprehensive report containing serial numbers, destruction methods, and a signed **Certificate of Destruction**. This is your legal proof of compliance for environmental and data privacy audits.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 font-bold text-sm">
                  <FileCheck className="text-green-600" /> Serialized Reporting
                </div>
                <div className="flex items-center gap-3 font-bold text-sm">
                  <FileCheck className="text-green-600" /> Video Evidence
                </div>
                <div className="flex items-center gap-3 font-bold text-sm">
                  <FileCheck className="text-green-600" /> DPDP Compliant
                </div>
                <div className="flex items-center gap-3 font-bold text-sm">
                  <FileCheck className="text-green-600" /> ISO 27001 Aligned
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-square bg-zinc-100 rounded-3xl flex items-center justify-center">
               <Award className="w-32 h-32 text-zinc-300" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
