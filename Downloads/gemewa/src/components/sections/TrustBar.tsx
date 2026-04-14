import { Shield, Award, CheckCircle, Globe, Lock, Zap } from "lucide-react";
import { motion } from "motion/react";

const badges = [
  { icon: Shield, text: "KSPCB Authorized", sub: "Kerala Govt. Approved" },
  { icon: Lock, text: "NIST 800-88", sub: "Data Destruction Standard" },
  { icon: Award, text: "ISO 14001", sub: "Environmental Management" },
  { icon: CheckCircle, text: "DPDP Compliant", sub: "Data Protection Act 2023" },
  { icon: Globe, text: "Zero Landfill", sub: "100% Green Recycling" },
  { icon: Zap, text: "Instant Payment", sub: "For IT Asset Buyback" },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-zinc-100 py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {badges.map((badge, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 group"
            >
              <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-600 transition-colors">
                <badge.icon className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">{badge.text}</span>
                <span className="text-[10px] text-zinc-500 font-medium">{badge.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
