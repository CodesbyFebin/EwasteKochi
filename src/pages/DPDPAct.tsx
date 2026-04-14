import { Helmet } from "react-helmet-async";
import Schema from "@/components/seo/Schema";
import { getFullGraphSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Scale, FileText, CheckCircle2, AlertTriangle } from "lucide-react";

export default function DPDPAct() {
  return (
    <main className="pt-24 pb-20">
      <Helmet>
        <title>DPDP Act 2023 Compliance Kochi | Secure IT Asset Disposal Kerala</title>
        <meta name="description" content="Is your Kochi business compliant with the Digital Personal Data Protection Act 2023? Learn how secure e-waste disposal and data destruction protect you from ₹250Cr penalties." />
      </Helmet>
      <Schema data={getFullGraphSchema()} />

      {/* Hero */}
      <section className="bg-amber-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight">
              DPDP Act 2023: <br />
              <span className="text-zinc-900">The New Reality</span> for Kochi Businesses
            </h1>
            <p className="text-xl text-amber-50 leading-relaxed">
              India's new data privacy law is here. Discarding old hardware without certified data destruction is now a high-risk liability. Are you protected?
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-zinc-900 text-white hover:bg-zinc-800 px-10 py-7 text-lg rounded-xl font-bold">
                Get Compliance Audit
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-7 text-lg rounded-xl font-bold">
                Download DPDP Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Risk */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-zinc-50 rounded-[40px] p-12 lg:p-20 border-2 border-amber-200">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-sm">
                  <AlertTriangle className="w-5 h-5" /> The Penalty Risk
                </div>
                <h2 className="text-4xl font-bold">₹250 Crore Penalty</h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  The Digital Personal Data Protection Act 2023 imposes severe financial penalties for failure to take reasonable security safeguards to prevent personal data breaches. This includes data stored on retired laptops, servers, and mobile phones.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-bold text-zinc-800">
                    <CheckCircle2 className="text-green-600" /> Mandatory Data Erasure
                  </li>
                  <li className="flex items-center gap-3 font-bold text-zinc-800">
                    <CheckCircle2 className="text-green-600" /> Verifiable Audit Trail
                  </li>
                  <li className="flex items-center gap-3 font-bold text-zinc-800">
                    <CheckCircle2 className="text-green-600" /> Personal Liability for Officers
                  </li>
                </ul>
              </div>
              <div className="flex-1 text-center">
                <div className="text-[120px] font-black text-amber-100 leading-none">2023</div>
                <p className="font-bold text-amber-600 uppercase tracking-widest">The Year Everything Changed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest">Our Solution</h2>
            <h3 className="text-4xl font-bold tracking-tight">How We Ensure Your Compliance</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-zinc-50 rounded-[40px] space-y-6">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <Scale className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold">Legal Shield</h4>
              <p className="text-zinc-500 leading-relaxed">
                Our Certificate of Destruction acts as your primary legal evidence that data was purged using industry-standard methods.
              </p>
            </div>
            <div className="p-10 bg-zinc-50 rounded-[40px] space-y-6">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold">Chain of Custody</h4>
              <p className="text-zinc-500 leading-relaxed">
                We provide a serialized manifest for every asset, tracking it from your Kochi office to its final destruction.
              </p>
            </div>
            <div className="p-10 bg-zinc-50 rounded-[40px] space-y-6">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold">Risk Mitigation</h4>
              <p className="text-zinc-500 leading-relaxed">
                By physically shredding media, we eliminate the 1% risk that software wiping might leave recoverable data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
