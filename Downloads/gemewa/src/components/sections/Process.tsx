import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Call, WhatsApp or fill our quote form. We respond within 30 minutes, 24/7.",
  },
  {
    number: "02",
    title: "Free Assessment",
    description: "Tell us your devices, quantities, and data security requirements. We send a same-day quote.",
  },
  {
    number: "03",
    title: "Scheduled Pickup",
    description: "We arrive at your Kochi location with trained technicians and secure transport.",
  },
  {
    number: "04",
    title: "Asset Inventory",
    description: "Every device is tagged, serialized, and entered into our chain-of-custody manifest.",
  },
  {
    number: "05",
    title: "Certified Destruction",
    description: "NIST 800-88 data wiping or physical DoD shredding. Witnessed on-site available.",
  },
  {
    number: "06",
    title: "CoD Issued",
    description: "Receive your Certificate of Destruction and Environmental Impact Report within 24 hours.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest">How It Works</h2>
          <h3 className="text-4xl font-bold tracking-tight">Our 6-Step Certified Process</h3>
          <p className="text-muted-foreground">
            From first contact to Certificate of Destruction — fully transparent, completely audited, legally defensible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-100 -translate-y-1/2 -z-10" />

          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-zinc-100 group-hover:text-green-100 transition-colors mb-4">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
