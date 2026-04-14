import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Award, Star } from "lucide-react";
import { CONTACT_PHONE } from "@/constants/content";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Moving GIF Background - Subtle & Ultra Realistic */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img 
          src="/assets/img/hero-bg-animated.webp" 
          alt="Subtle background animation representing secure e-waste recycling in Kochi" 
          className="w-full h-full object-cover opacity-[0.03] grayscale scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-green-50/50 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 left-0 -z-10 w-64 h-64 bg-green-100/30 blur-3xl rounded-full" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Kerala's #1 Certified ITAD Facility — Live 24/7
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
            >
              Kochi's Most <span className="text-green-600">Trusted</span> E-Waste Recycler
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Certified e-waste collection, ITAD & data destruction for businesses across Kochi, Infopark, Kakkanad & Kerala. NIST/DoD hard drive shredding. Certificate of Destruction every job. DPDP Act 2023 compliant.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-7 text-lg rounded-xl shadow-lg shadow-green-200 w-full sm:w-auto">
                Get Free Quote Now
              </Button>
              <Button variant="outline" className="px-8 py-7 text-lg rounded-xl border-2 w-full sm:w-auto">
                WhatsApp Now
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t"
            >
              <div className="space-y-1">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs text-muted-foreground uppercase font-semibold">Always Open</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs text-muted-foreground uppercase font-semibold">Certified</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">CoD</div>
                <div className="text-xs text-muted-foreground uppercase font-semibold">Every Job</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-xs text-muted-foreground uppercase font-semibold">Google Rating</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1 relative"
          >
            <div className="relative bg-zinc-900 rounded-3xl p-8 shadow-2xl text-zinc-300 font-mono text-sm overflow-hidden group">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-4">
                <p className="text-green-400">$ status --live</p>
                <p>status: <span className="text-white">● OPERATIONAL 24/7</span></p>
                <p>location: <span className="text-white">Thrippunithura, Kochi, Kerala 682301</span></p>
                <p>cert: <span className="text-white">NIST 800-88 · DoD 5220.22-M · EPR · DPDP 2023</span></p>
                <p className="text-green-400 mt-6">$ services --all</p>
                <ul className="space-y-2">
                  <li>✓ ITAD — Full asset disposition</li>
                  <li>✓ HDD Shredding — Physical destruction</li>
                  <li>✓ Data Wiping — NIST 800-88 certified</li>
                  <li>✓ Buyback — Laptops · servers · phones</li>
                </ul>
                <p className="text-green-400 mt-6">$ quote --now</p>
                <div className="w-2 h-5 bg-green-500 animate-pulse inline-block align-middle" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors" />
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border flex items-center gap-3 animate-bounce duration-[3000ms]">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase text-muted-foreground">Security</div>
                <div className="text-sm font-bold">NIST Certified</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
