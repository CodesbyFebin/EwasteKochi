import { Helmet } from "react-helmet-async";
import Schema from "@/components/seo/Schema";
import { getFullGraphSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Check, X, ShieldCheck, Banknote, Truck, Award } from "lucide-react";

export default function CashifyComparison() {
  return (
    <main className="pt-24 pb-20">
      <Helmet>
        <title>Cashify vs EWaste Kochi | Why We Are Better for Buyback & ITAD</title>
        <meta name="description" content="Comparing Cashify vs EWaste Kochi for selling old electronics. We offer higher prices, certified data destruction, and professional ITAD services for Kochi businesses." />
      </Helmet>
      <Schema data={getFullGraphSchema()} />

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Cashify vs <span className="text-green-600">EWaste Kochi</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover why Kochi's tech-savvy residents and businesses are switching to EWaste Kochi for their IT asset disposal.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden border">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="p-8 text-xl font-bold">Feature</th>
                  <th className="p-8 text-xl font-bold text-center">Cashify</th>
                  <th className="p-8 text-xl font-bold text-center bg-green-600">EWaste Kochi</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <tr className="border-b">
                  <td className="p-8 font-bold">Buyback Price</td>
                  <td className="p-8 text-center text-zinc-500">Standard Market Rates</td>
                  <td className="p-8 text-center font-bold text-green-700 bg-green-50/50">Premium (+10-15%)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-8 font-bold">Data Destruction</td>
                  <td className="p-8 text-center text-zinc-500 flex justify-center"><X className="text-red-500" /></td>
                  <td className="p-8 text-center font-bold text-green-700 bg-green-50/50 flex justify-center"><Check className="text-green-600" /> NIST 800-88</td>
                </tr>
                <tr className="border-b">
                  <td className="p-8 font-bold">Corporate ITAD</td>
                  <td className="p-8 text-center text-zinc-500 flex justify-center"><X className="text-red-500" /></td>
                  <td className="p-8 text-center font-bold text-green-700 bg-green-50/50 flex justify-center"><Check className="text-green-600" /> Full Service</td>
                </tr>
                <tr className="border-b">
                  <td className="p-8 font-bold">Certifications</td>
                  <td className="p-8 text-center text-zinc-500">None Provided</td>
                  <td className="p-8 text-center font-bold text-green-700 bg-green-50/50">KSPCB / CoD Issued</td>
                </tr>
                <tr>
                  <td className="p-8 font-bold">Local Kochi Support</td>
                  <td className="p-8 text-center text-zinc-500">Call Center</td>
                  <td className="p-8 text-center font-bold text-green-700 bg-green-50/50">Direct Local Team</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Points */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">The EWaste Kochi Advantage</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-600">
                    <ShieldCheck />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Security First</h4>
                    <p className="text-zinc-500">Unlike consumer-focused apps, we are a security-first recycling facility. We don't just buy your device; we protect your legacy by ensuring every bit of data is physically or cryptographically destroyed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-600">
                    <Banknote />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Better Economics</h4>
                    <p className="text-zinc-500">Because we handle the entire recycling and refurbishment chain locally in Kochi, we have lower overheads than national aggregators, allowing us to pass those savings directly to you.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-100 rounded-[40px] p-12">
              <h3 className="text-2xl font-bold mb-6">For Kochi Businesses</h3>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                If you are a business in Infopark or Kakkanad, you need more than just a buyback price. You need a partner who understands the **DPDP Act 2023** and can provide a verifiable audit trail. Cashify is built for individuals; EWaste Kochi is built for professionals.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-7 text-lg rounded-xl font-bold">
                Switch to Professional ITAD
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
